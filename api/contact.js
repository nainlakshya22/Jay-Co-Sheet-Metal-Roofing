/**
 * JAY-CO SHEET METAL & ROOFING — VERCEL SERVERLESS CONTACT DESK
 * Route: POST /api/contact
 */

import { sanitizeInput, checkRateLimit, detectSpam, persistLead, sendEmailNotification } from './_lib/leadManager.js';

export default async function handler(req, res) {
  // Security & CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');

  const sendResponse = (statusCode, jsonPayload) => {
    if (res.status && typeof res.status === 'function') {
      return res.status(statusCode).json(jsonPayload);
    }
    res.writeHead(statusCode, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify(jsonPayload));
  };

  if (req.method === 'OPTIONS') {
    return res.status ? res.status(204).end() : (res.writeHead(204), res.end());
  }

  if (req.method !== 'POST') {
    return sendResponse(405, { error: 'Method not allowed. Use POST.' });
  }

  // Rate Limiting by Client IP
  const clientIp = (req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown').split(',')[0].trim();
  if (!checkRateLimit(clientIp)) {
    return sendResponse(429, { 
      success: false, 
      error: 'Rate limit exceeded. Please wait one minute before submitting again.' 
    });
  }

  // Parse Body
  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch (e) {
      return sendResponse(400, { success: false, error: 'Malformed JSON payload.' });
    }
  }

  if (!body || typeof body !== 'object') {
    return sendResponse(400, { success: false, error: 'Invalid request body.' });
  }

  // Honeypot / Spam Protection
  if (detectSpam(body)) {
    console.warn('[SPAM BLOCKED] Automated contact bot inquiry dropped.');
    return sendResponse(200, { 
      success: true, 
      referenceId: `JC-MSG-${Math.floor(100000 + Math.random() * 900000)}`,
      message: 'Inquiry received.' 
    });
  }

  // Validation
  const errors = [];
  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const phone = typeof body.phone === 'string' ? body.phone.trim() : '';
  const message = typeof body.message === 'string' ? body.message.trim() : '';

  if (!name || name.length < 2) errors.push('Name must be at least 2 characters.');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) errors.push('Valid email address required.');
  const digitsOnly = phone.replace(/\D/g, '');
  if (digitsOnly.length < 10) errors.push('Valid 10-digit telephone number required.');
  if (!message) errors.push('Message description is required.');

  if (errors.length > 0) {
    return sendResponse(422, { success: false, error: 'Validation failed', details: errors });
  }

  const referenceId = `JC-MSG-${Math.floor(100000 + Math.random() * 900000)}`;
  const inquiry = {
    id: referenceId,
    leadId: referenceId,
    fullName: sanitizeInput(name).slice(0, 100),
    email: sanitizeInput(email).slice(0, 120),
    phone: sanitizeInput(phone).slice(0, 30),
    subject: sanitizeInput(body.subject || 'General Inquiry').slice(0, 100),
    projectNotes: sanitizeInput(message).slice(0, 2000),
    receivedAt: new Date().toISOString(),
    type: 'Direct Contact Desk Inquiry',
    company: 'Jay-Co Sheet Metal & Roofing',
    facility: '2307 Knight St, Houston, TX 77093',
    gafContractorId: '1132527'
  };

  // 1. Persistent Storage
  await persistLead(inquiry);

  // 2. Email Dispatch
  sendEmailNotification(inquiry, 'contact').catch(err => {
    console.error('[EMAIL DISPATCH ERROR]', err);
  });

  return sendResponse(200, {
    success: true,
    referenceId: inquiry.id,
    message: 'Inquiry logged at Jay-Co estimating desk.'
  });
}
