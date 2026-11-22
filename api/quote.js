/**
 * JAY-CO SHEET METAL & ROOFING — VERCEL SERVERLESS QUOTE DISPATCH
 * Route: POST /api/quote
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
    console.warn('[SPAM BLOCKED] Automated bot inquiry intercepted and dropped.');
    // Return simulated success to avoid alerting bot runners
    return sendResponse(200, { 
      success: true, 
      leadId: `JC-${Math.floor(100000 + Math.random() * 900000)}`,
      message: 'Consultation request received.' 
    });
  }

  // Field Validation
  const errors = [];
  const fullName = typeof body.fullName === 'string' ? body.fullName.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const phone = typeof body.phone === 'string' ? body.phone.trim() : '';
  const projectType = typeof body.projectType === 'string' ? body.projectType.trim() : '';

  if (!fullName || fullName.length < 2) {
    errors.push('Full name must be at least 2 characters.');
  }
  if (fullName.length > 100) {
    errors.push('Full name exceeds maximum length of 100 characters.');
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email) || email.length > 120) {
    errors.push('A valid email address is required (max 120 characters).');
  }

  const digitsOnly = phone.replace(/\D/g, '');
  if (digitsOnly.length < 10 || digitsOnly.length > 15) {
    errors.push('A valid telephone number with at least 10 digits is required.');
  }

  if (!projectType) {
    errors.push('Project scope or service type is required.');
  }

  if (errors.length > 0) {
    return sendResponse(422, { 
      success: false, 
      error: 'Validation failed', 
      details: errors 
    });
  }

  // Construct Sanitized Lead Object
  const leadId = `JC-${Math.floor(100000 + Math.random() * 900000)}`;
  const lead = {
    id: leadId,
    leadId: leadId,
    fullName: sanitizeInput(fullName).slice(0, 100),
    email: sanitizeInput(email).slice(0, 120),
    phone: sanitizeInput(phone).slice(0, 30),
    projectType: sanitizeInput(projectType).slice(0, 100),
    neighborhood: sanitizeInput(body.neighborhood || 'Houston').slice(0, 100),
    streetAddress: sanitizeInput(body.streetAddress || '').slice(0, 150),
    propertyType: sanitizeInput(body.propertyType || 'Residential').slice(0, 100),
    approxSqFt: sanitizeInput(body.approxSqFt || '').slice(0, 50),
    materialPreference: sanitizeInput(body.materialPreference || '').slice(0, 100),
    timeline: sanitizeInput(body.timeline || '').slice(0, 50),
    projectNotes: sanitizeInput(body.projectNotes || '').slice(0, 2000),
    preferredContact: sanitizeInput(body.preferredContact || 'Phone Call').slice(0, 50),
    receivedAt: new Date().toISOString(),
    company: 'Jay-Co Sheet Metal & Roofing',
    facility: '2307 Knight St, Houston, TX 77093',
    gafContractorId: '1132527'
  };

  // 1. Persistent Storage (Redis KV / Webhook / File)
  await persistLead(lead);

  // 2. Email Dispatch (Asynchronous)
  sendEmailNotification(lead, 'quote').catch(err => {
    console.error('[EMAIL DISPATCH ERROR]', err);
  });

  return sendResponse(200, {
    success: true,
    leadId: lead.id,
    message: 'Consultation scope logged at Jay-Co Knight St estimating desk.'
  });
}
