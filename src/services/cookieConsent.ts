/**
 * Jay-Co Sheet Metal & Roofing — Enterprise Cookie Consent Service
 * Supports Google Consent Mode v2, CCPA/CPRA opt-out, GDPR/ePrivacy category controls,
 * atomic localStorage persistence, and 1st-party cookie synchronization.
 */

export interface CookieCategories {
  necessary: boolean;   // Always true (session security, CSRF, quote consultation state)
  analytics: boolean;   // Google Analytics, site performance, route telemetry
  marketing: boolean;   // Ads conversion tracking, remarketing signals
  functional: boolean;   // Saved estimator calculations, UI preferences
}

export interface ConsentRecord {
  hasConsented: boolean;
  timestamp: string;     // ISO 8601 string
  version: string;       // Schema version for policy invalidation
  categories: CookieCategories;
  ccpaOptOut: boolean;   // California / Texas Do Not Sell/Share signal
}

export const CONSENT_VERSION = '1.0.0';
export const STORAGE_KEY = 'jayco_cookie_consent_v1';
export const COOKIE_NAME = 'jayco_cookie_consent';

export const DEFAULT_CATEGORIES: CookieCategories = {
  necessary: true,
  analytics: false,
  marketing: false,
  functional: false,
};

export const ALL_ACCEPTED_CATEGORIES: CookieCategories = {
  necessary: true,
  analytics: true,
  marketing: true,
  functional: true,
};

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

/**
 * Read consent record from localStorage with fallback error protection
 */
export function getStoredConsent(): ConsentRecord | null {
  if (typeof window === 'undefined') return null;

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw) as ConsentRecord;
    // Invalidate if policy version changed
    if (parsed.version !== CONSENT_VERSION) {
      return null;
    }
    return parsed;
  } catch (err) {
    console.warn('[Jay-Co Privacy] Failed to parse stored cookie consent:', err);
    return null;
  }
}

/**
 * Synchronize consent record to a 1st-party cookie with 12-month expiration (SameSite=Lax)
 */
export function syncFirstPartyCookie(record: ConsentRecord): void {
  if (typeof document === 'undefined') return;

  try {
    const serialized = encodeURIComponent(JSON.stringify({
      v: record.version,
      t: record.timestamp,
      c: record.categories,
      ccpa: record.ccpaOptOut,
    }));
    // 365 days expiration
    const maxAge = 60 * 60 * 24 * 365;
    document.cookie = `${COOKIE_NAME}=${serialized}; max-age=${maxAge}; path=/; SameSite=Lax`;
  } catch (err) {
    console.warn('[Jay-Co Privacy] Failed to write consent cookie:', err);
  }
}

/**
 * Remove non-consented tracking cookies from the browser if consent is revoked
 */
export function removeBlockedCookies(categories: CookieCategories): void {
  if (typeof document === 'undefined') return;

  const analyticsCookies = ['_ga', '_gid', '_gat', '_gat_gtag'];
  const marketingCookies = ['_gcl_au', '_fbp', '_uetsid', '_uetvid'];

  const cookiesToRemove: string[] = [];
  if (!categories.analytics) {
    cookiesToRemove.push(...analyticsCookies);
  }
  if (!categories.marketing) {
    cookiesToRemove.push(...marketingCookies);
  }

  // Clear exact name matches and prefix matches across host and root domains
  const hostname = window.location.hostname;
  cookiesToRemove.forEach(name => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${hostname};`;
  });
}

/**
 * Update Google Consent Mode v2 signals based on user preferences
 */
export function applyConsentToGoogle(record: ConsentRecord): void {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = function () {
      window.dataLayer?.push(arguments);
    };
  }

  const { categories, ccpaOptOut } = record;

  // CCPA/CPRA opt-out automatically disables marketing and ad personalization
  const effectiveMarketing = categories.marketing && !ccpaOptOut;

  const consentPayload = {
    analytics_storage: categories.analytics ? 'granted' : 'denied',
    ad_storage: effectiveMarketing ? 'granted' : 'denied',
    ad_user_data: effectiveMarketing ? 'granted' : 'denied',
    ad_personalization: effectiveMarketing ? 'granted' : 'denied',
    functionality_storage: categories.functional ? 'granted' : 'denied',
    personalization_storage: categories.functional ? 'granted' : 'denied',
    security_storage: 'granted',
  };

  // Push official Google Consent Mode update signal
  window.gtag('consent', 'update', consentPayload);

  // Push telemetry event to dataLayer for Tag Manager / GTM listeners
  window.dataLayer.push({
    event: 'cookie_consent_updated',
    consent_version: record.version,
    consent_timestamp: record.timestamp,
    consent_categories: record.categories,
    ccpa_opt_out: record.ccpaOptOut,
  });

  // Dispatch custom browser DOM event for real-time reactivity
  window.dispatchEvent(
    new CustomEvent('jayco_consent_change', {
      detail: record,
    })
  );
}

/**
 * Save custom granular preferences
 */
export function saveConsent(
  categories: Partial<CookieCategories>,
  ccpaOptOut: boolean = false
): ConsentRecord {
  const finalCategories: CookieCategories = {
    necessary: true, // Always locked
    analytics: Boolean(categories.analytics),
    marketing: Boolean(categories.marketing && !ccpaOptOut),
    functional: Boolean(categories.functional),
  };

  const record: ConsentRecord = {
    hasConsented: true,
    timestamp: new Date().toISOString(),
    version: CONSENT_VERSION,
    categories: finalCategories,
    ccpaOptOut: Boolean(ccpaOptOut),
  };

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
  } catch (err) {
    console.warn('[Jay-Co Privacy] Failed to write consent to localStorage:', err);
  }

  syncFirstPartyCookie(record);
  removeBlockedCookies(finalCategories);
  applyConsentToGoogle(record);

  return record;
}

/**
 * Accept All cookies
 */
export function acceptAllConsent(): ConsentRecord {
  return saveConsent(ALL_ACCEPTED_CATEGORIES, false);
}

/**
 * Reject All optional cookies (Keep strictly necessary only)
 */
export function rejectAllConsent(): ConsentRecord {
  return saveConsent(DEFAULT_CATEGORIES, false);
}

/**
 * Clear stored consent (for testing or complete withdrawal)
 */
export function resetConsent(): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.removeItem(STORAGE_KEY);
    document.cookie = `${COOKIE_NAME}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  } catch (err) {
    console.warn('[Jay-Co Privacy] Failed to clear consent:', err);
  }

  // Reset to default denied
  const defaultRecord: ConsentRecord = {
    hasConsented: false,
    timestamp: new Date().toISOString(),
    version: CONSENT_VERSION,
    categories: DEFAULT_CATEGORIES,
    ccpaOptOut: false,
  };

  removeBlockedCookies(DEFAULT_CATEGORIES);
  applyConsentToGoogle(defaultRecord);

  window.dispatchEvent(
    new CustomEvent('jayco_consent_reset', {
      detail: defaultRecord,
    })
  );
}
