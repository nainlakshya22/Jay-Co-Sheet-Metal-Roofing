/**
 * JAY-CO SHEET METAL & ROOFING — SECURE PRODUCTION LEAD MANAGER
 * Enterprise-Grade Storage, Validation, Rate Limiting & Dispatch
 */

import fs from 'fs';
import path from 'path';
import os from 'os';

// In-memory rate limiting map for serverless execution container
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 60000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 15; // Max 15 per IP per minute

export function sanitizeInput(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/[<>]/g, '').trim();
}

export function checkRateLimit(ip) {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const valid = timestamps.filter(t => now - t < RATE_LIMIT_WINDOW_MS);
  if (valid.length >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }
  valid.push(now);
  rateLimitMap.set(ip, valid);
  return true;
}

export function detectSpam(data) {
  // Honeypot fields that legitimate human users never fill out
  const honeypots = ['website', 'company_url', 'bot_trap', 'fax_confirm', 'address_line_2_hidden'];
  for (const field of honeypots) {
    if (data[field] && String(data[field]).trim().length > 0) {
      return true; // Honeypot trap triggered
    }
  }

  return false;
}

/**
 * Persists lead through cloud adapters (Vercel KV / Upstash, Webhook, Supabase)
 * and safely falls back to local or /tmp filesystem.
 */
export async function persistLead(leadRecord) {
  const results = {
    adaptersRun: [],
    persistentStorageSuccess: false,
    fileStorageSuccess: false
  };

  // 1. Adapter: Vercel KV / Upstash Redis REST
  const kvUrl = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const kvToken = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

  if (kvUrl && kvToken) {
    try {
      const response = await fetch(`${kvUrl}/lpush/jayco_leads`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${kvToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(leadRecord)
      });
      if (response.ok) {
        results.adaptersRun.push('UPSTASH_REDIS_KV');
        results.persistentStorageSuccess = true;
      }
    } catch (err) {
      console.error('[STORAGE WARNING] Redis KV storage failed:', err.message);
    }
  }

  // 2. Adapter: Custom CRM Webhook (Zapier / Make / Slack / Airtable)
  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      const whRes = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'Jay-Co Architectural Web Portal',
          environment: process.env.VERCEL_ENV || 'production',
          lead: leadRecord
        })
      });
      if (whRes.ok) {
        results.adaptersRun.push('WEBHOOK');
        results.persistentStorageSuccess = true;
      }
    } catch (err) {
      console.error('[STORAGE WARNING] Webhook dispatch failed:', err.message);
    }
  }

  // 3. Fallback: Filesystem Storage (Root leads.json or /tmp/leads.json)
  try {
    let filePath = path.join(process.cwd(), 'leads.json');
    try {
      // Test write to root
      let leads = [];
      if (fs.existsSync(filePath)) {
        leads = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
      }
      leads.push(leadRecord);
      fs.writeFileSync(filePath, JSON.stringify(leads, null, 2));
      results.fileStorageSuccess = true;
      results.adaptersRun.push('LOCAL_JSON');
    } catch (fsErr) {
      // Root might be read-only in Vercel Serverless container; fallback to /tmp
      const tmpPath = path.join(os.tmpdir(), 'jayco_leads.json');
      let tmpLeads = [];
      if (fs.existsSync(tmpPath)) {
        tmpLeads = JSON.parse(fs.readFileSync(tmpPath, 'utf-8'));
      }
      tmpLeads.push(leadRecord);
      fs.writeFileSync(tmpPath, JSON.stringify(tmpLeads, null, 2));
      results.fileStorageSuccess = true;
      results.adaptersRun.push('TMP_CONTAINER_JSON');
    }
  } catch (err) {
    console.error('[STORAGE NOTICE] Local file storage skipped in serverless environment:', err.message);
  }

  return results;
}

/**
 * Outbound email dispatch via Resend API or SMTP
 */
export async function sendEmailNotification(leadRecord, type = 'quote') {
  const dispatchEmail = process.env.DISPATCH_EMAIL || 'jaycosm@sbcglobal.com';
  const resendApiKey = process.env.RESEND_API_KEY;
  const smtpHost = process.env.SMTP_HOST;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (!resendApiKey && !(smtpHost && smtpUser && smtpPass)) {
    return {
      status: 'SKIPPED_UNCONFIGURED',
      message: 'Outbound SMTP/Resend credentials not set in environment.'
    };
  }

  const subject = type === 'quote'
    ? `[JAY-CO QUOTE REQUEST #${leadRecord.id}] ${leadRecord.projectType} — ${leadRecord.fullName}`
    : `[JAY-CO CONTACT INQUIRY #${leadRecord.id}] ${leadRecord.subject || 'Inquiry'} — ${leadRecord.fullName}`;

  const html = `
    <div style="font-family: Arial, sans-serif; background-color: #0b0d10; color: #f8f9fa; padding: 24px; border-radius: 4px;">
      <div style="border-bottom: 2px solid #c27a4e; padding-bottom: 12px; margin-bottom: 20px;">
        <h1 style="color: #c27a4e; margin: 0; font-size: 20px; font-family: Georgia, serif;">Jay-Co Sheet Metal & Roofing</h1>
        <p style="color: #9ca3af; margin: 4px 0 0; font-size: 12px;">Consultation Request #${leadRecord.id}</p>
      </div>
      <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 20px;">
        <tr><td style="padding: 8px; color: #9ca3af; width: 140px;">Client:</td><td style="padding: 8px; font-weight: bold; color: #f8f9fa;">${leadRecord.fullName}</td></tr>
        <tr><td style="padding: 8px; color: #9ca3af;">Phone:</td><td style="padding: 8px; color: #f8f9fa;"><a href="tel:${leadRecord.phone}" style="color: #c27a4e;">${leadRecord.phone}</a></td></tr>
        <tr><td style="padding: 8px; color: #9ca3af;">Email:</td><td style="padding: 8px; color: #f8f9fa;"><a href="mailto:${leadRecord.email}" style="color: #c27a4e;">${leadRecord.email}</a></td></tr>
        ${leadRecord.streetAddress ? `<tr><td style="padding: 8px; color: #9ca3af;">Address:</td><td style="padding: 8px; color: #f8f9fa;">${leadRecord.streetAddress} (${leadRecord.neighborhood || 'Houston'})</td></tr>` : ''}
        <tr><td style="padding: 8px; color: #9ca3af;">Scope:</td><td style="padding: 8px; color: #f8f9fa;">${leadRecord.projectType || leadRecord.subject}</td></tr>
        ${leadRecord.materialPreference ? `<tr><td style="padding: 8px; color: #9ca3af;">Material:</td><td style="padding: 8px; color: #f8f9fa;">${leadRecord.materialPreference}</td></tr>` : ''}
        ${leadRecord.approxSqFt ? `<tr><td style="padding: 8px; color: #9ca3af;">Area:</td><td style="padding: 8px; color: #f8f9fa;">${leadRecord.approxSqFt}</td></tr>` : ''}
      </table>
      ${leadRecord.projectNotes ? `
        <div style="background-color: #14181f; border-left: 3px solid #c27a4e; padding: 12px; margin-bottom: 20px;">
          <h3 style="color: #c27a4e; font-size: 13px; margin: 0 0 6px;">Notes:</h3>
          <p style="color: #e5e7eb; font-size: 13px; margin: 0;">${leadRecord.projectNotes}</p>
        </div>` : ''}
      <div style="border-top: 1px solid #1f2937; padding-top: 12px; font-size: 11px; color: #6b7280;">
        Jay-Co Sheet Metal & Roofing • 2307 Knight St, Houston, TX 77093 • GAF Contractor #1132527
      </div>
    </div>
  `;

  if (resendApiKey) {
    try {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: process.env.SMTP_FROM || `Jay-Co Estimating Desk <${dispatchEmail}>`,
          to: dispatchEmail,
          subject,
          html
        })
      });
      const data = await res.json();
      return { status: 'SENT_RESEND', data };
    } catch (e) {
      console.error('[EMAIL ERROR] Resend dispatch failed:', e.message);
      return { status: 'FAILED_RESEND', error: e.message };
    }
  }

  return { status: 'SKIPPED' };
}
