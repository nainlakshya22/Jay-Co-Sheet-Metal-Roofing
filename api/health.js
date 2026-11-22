/**
 * JAY-CO SHEET METAL & ROOFING — VERCEL SERVERLESS HEALTH ENDPOINT
 * Route: GET /api/health
 */

export default async function handler(req, res) {
  // CORS & Security Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');

  if (req.method === 'OPTIONS') {
    return res.status ? res.status(204).end() : (res.writeHead(204), res.end());
  }

  if (req.method !== 'GET') {
    const errorPayload = { error: 'Method not allowed. Use GET.' };
    return res.status 
      ? res.status(405).json(errorPayload) 
      : (res.writeHead(405, { 'Content-Type': 'application/json' }), res.end(JSON.stringify(errorPayload)));
  }

  const hasSmtp = Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);
  const hasResend = Boolean(process.env.RESEND_API_KEY);
  const hasVercelKv = Boolean(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN);
  const hasUpstash = Boolean(process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN);
  const hasWebhook = Boolean(process.env.LEAD_WEBHOOK_URL);
  const hasDatabase = Boolean(process.env.DATABASE_URL);

  const payload = {
    status: 'healthy',
    environment: process.env.VERCEL_ENV || process.env.NODE_ENV || 'production',
    service: 'Jay-Co Sheet Metal & Roofing API',
    company: 'Jay-Co Sheet Metal & Roofing',
    legalEntity: 'Jay-Co Enterprises, LLC',
    facility: '2307 Knight St, Houston, TX 77093',
    phone: '(713) 738-4525',
    gafContractorId: '1132527',
    leadStorage: {
      redisOrKv: hasVercelKv || hasUpstash,
      webhook: hasWebhook,
      database: hasDatabase,
      ephemeralFileFallback: true,
      persistentProductionReady: hasVercelKv || hasUpstash || hasWebhook || hasDatabase || hasSmtp || hasResend
    },
    emailDelivery: {
      configured: hasSmtp || hasResend,
      provider: hasResend ? 'Resend API' : (hasSmtp ? 'SMTP' : 'None (Simulated / Local Persistence)')
    },
    reviews: {
      mode: process.env.VITE_GOOGLE_PLACES_API_KEY ? 'Live Places API' : 'Static Curated Snapshot (4.5★)',
      source: 'Google Reviews & GAF Contractor Directory'
    },
    timestamp: new Date().toISOString()
  };

  if (res.status) {
    return res.status(200).json(payload);
  } else {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify(payload));
  }
}
