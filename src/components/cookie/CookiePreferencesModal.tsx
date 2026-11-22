import React, { useState, useEffect } from 'react';
import { useCookieConsent } from '../../context/CookieConsentContext';
import { useNavigation } from '../../context/NavigationContext';
import { 
  ShieldCheck, 
  BarChart3, 
  Target, 
  SlidersHorizontal, 
  Lock, 
  X, 
  Check, 
  RotateCcw,
  ExternalLink,
  Scale
} from 'lucide-react';
import { CookieCategories } from '../../services/cookieConsent';

export const CookiePreferencesModal: React.FC = () => {
  const {
    isPreferencesOpen,
    closePreferences,
    consent,
    hasConsented,
    savePreferences,
    acceptAll,
    rejectAll,
    withdrawConsent,
    activeTab: initialTab
  } = useCookieConsent();

  const { navigateTo } = useNavigation();

  const [activeTab, setActiveTab] = useState<'categories' | 'ccpa'>('categories');
  const [categories, setCategories] = useState<CookieCategories>({
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false,
  });
  const [ccpaOptOut, setCcpaOptOut] = useState<boolean>(false);

  // Synchronize state when modal opens
  useEffect(() => {
    if (isPreferencesOpen) {
      setActiveTab(initialTab || 'categories');
      if (consent) {
        setCategories(consent.categories);
        setCcpaOptOut(consent.ccpaOptOut);
      } else {
        setCategories({
          necessary: true,
          analytics: false,
          marketing: false,
          functional: false,
        });
        setCcpaOptOut(false);
      }
    }
  }, [isPreferencesOpen, consent, initialTab]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isPreferencesOpen) {
        closePreferences();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPreferencesOpen, closePreferences]);

  if (!isPreferencesOpen) return null;

  const toggleCategory = (key: keyof CookieCategories) => {
    if (key === 'necessary') return; // Cannot toggle strictly necessary
    setCategories(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSave = () => {
    savePreferences(categories, ccpaOptOut);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-preferences-title"
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fadeIn"
      onClick={closePreferences}
    >
      <div
        className="w-full max-w-3xl my-6 bg-mocha-900 border border-gold/40 rounded-2xl shadow-luxury overflow-hidden flex flex-col max-h-[90vh] text-stone-200 relative animate-cookie-popup"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-mocha-800 bg-mocha-950/80">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gold/15 flex items-center justify-center text-amber">
              <ShieldCheck className="w-5 h-5 text-amber" />
            </div>
            <div>
              <h2 id="cookie-preferences-title" className="font-serif text-lg sm:text-2xl font-bold text-gold-100">
                Cookie & Privacy Preferences
              </h2>
              <p className="text-xs text-stone-400 font-mono">
                Jay-Co Enterprises, LLC • Houston Architectural Metalcraft
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={closePreferences}
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-mocha-850 hover:bg-mocha-800 text-stone-300 hover:text-gold border border-mocha-700 transition-colors"
            aria-label="Close cookie preferences modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-mocha-800 bg-mocha-900/60 px-5 sm:px-6">
          <button
            type="button"
            onClick={() => setActiveTab('categories')}
            className={`py-3 px-4 text-xs sm:text-sm font-semibold border-b-2 transition-all flex items-center gap-2 ${
              activeTab === 'categories'
                ? 'border-gold text-gold bg-gold/5'
                : 'border-transparent text-stone-400 hover:text-stone-200'
            }`}
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span>Consent Categories</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('ccpa')}
            className={`py-3 px-4 text-xs sm:text-sm font-semibold border-b-2 transition-all flex items-center gap-2 ${
              activeTab === 'ccpa'
                ? 'border-gold text-gold bg-gold/5'
                : 'border-transparent text-stone-400 hover:text-stone-200'
            }`}
          >
            <Scale className="w-4 h-4" />
            <span>US State Privacy Rights (CCPA / TDPSA)</span>
          </button>
        </div>

        {/* Body Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1 text-sm text-stone-300 font-sans">
          {activeTab === 'categories' ? (
            <div className="space-y-5">
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                We respect your personal privacy. Below you can customize which categories of cookies and tracking technologies are allowed on your device. Strictly necessary cookies cannot be disabled as they are required for security and core estimating functions.
              </p>

              {/* Category 1: Strictly Necessary */}
              <div className="p-4 sm:p-5 rounded-xl bg-mocha-850 border border-mocha-800 space-y-3">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-mocha-800 flex items-center justify-center text-amber">
                      <Lock className="w-4 h-4 text-amber" />
                    </div>
                    <div>
                      <div className="font-serif font-bold text-base text-gold-100 flex items-center gap-2">
                        <span>Strictly Necessary Cookies</span>
                        <span className="text-[10px] uppercase font-mono tracking-wider bg-gold/15 text-gold px-2 py-0.5 rounded border border-gold/30">
                          Always Active
                        </span>
                      </div>
                      <div className="text-xs text-stone-400">Core security, form validation & navigation</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-stone-400 flex-shrink-0">
                    <span className="hidden sm:inline">Locked</span>
                    <div className="w-11 h-6 bg-gold/40 rounded-full flex items-center px-1 cursor-not-allowed">
                      <div className="w-4 h-4 rounded-full bg-gold transform translate-x-5 shadow-sm" />
                    </div>
                  </div>
                </div>

                <p className="text-xs text-stone-300 leading-relaxed">
                  Required for site security, user session handling, multi-step quote request submissions, anti-spam validation, and honoring your cookie choices. These do not store personally identifiable advertising information.
                </p>
                <div className="text-[11px] font-mono text-stone-400 bg-mocha-900 p-2.5 rounded border border-mocha-800">
                  <strong>Examples:</strong> <code className="text-gold">jayco_cookie_consent_v1</code>, <code className="text-gold">jayco_quote_session</code> • Lifespan: Session to 12 months.
                </div>
              </div>

              {/* Category 2: Analytics */}
              <div className="p-4 sm:p-5 rounded-xl bg-mocha-850 border border-mocha-800 space-y-3">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-mocha-800 flex items-center justify-center text-amber">
                      <BarChart3 className="w-4 h-4 text-amber" />
                    </div>
                    <div>
                      <div className="font-serif font-bold text-base text-gold-100">
                        Analytics & Performance
                      </div>
                      <div className="text-xs text-stone-400">Visitor volume, page telemetry & performance metrics</div>
                    </div>
                  </div>

                  <button
                    type="button"
                    role="switch"
                    aria-checked={categories.analytics}
                    onClick={() => toggleCategory('analytics')}
                    className={`w-12 h-6 rounded-full transition-colors flex items-center px-1 focus:outline-none focus:ring-2 focus:ring-gold ${
                      categories.analytics ? 'bg-gold' : 'bg-mocha-700'
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full bg-mocha-950 transition-transform ${
                        categories.analytics ? 'transform translate-x-6' : 'transform translate-x-0'
                      }`}
                    />
                  </button>
                </div>

                <p className="text-xs text-stone-300 leading-relaxed">
                  Helps us understand how homeowners and commercial architects navigate our website. Signals are processed under Google Consent Mode v2 (<code className="text-gold">analytics_storage</code>). If disabled, we cannot measure page visits or improve route responsiveness.
                </p>
                <div className="text-[11px] font-mono text-stone-400 bg-mocha-900 p-2.5 rounded border border-mocha-800">
                  <strong>Examples:</strong> <code className="text-gold">_ga</code>, <code className="text-gold">_ga_*</code> • Lifespan: Up to 24 months.
                </div>
              </div>

              {/* Category 3: Marketing & Advertising */}
              <div className="p-4 sm:p-5 rounded-xl bg-mocha-850 border border-mocha-800 space-y-3">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-mocha-800 flex items-center justify-center text-amber">
                      <Target className="w-4 h-4 text-amber" />
                    </div>
                    <div>
                      <div className="font-serif font-bold text-base text-gold-100">
                        Marketing & Remarketing
                      </div>
                      <div className="text-xs text-stone-400">Targeted architectural showcases & campaign conversion attribution</div>
                    </div>
                  </div>

                  <button
                    type="button"
                    role="switch"
                    aria-checked={categories.marketing && !ccpaOptOut}
                    disabled={ccpaOptOut}
                    onClick={() => toggleCategory('marketing')}
                    className={`w-12 h-6 rounded-full transition-colors flex items-center px-1 focus:outline-none focus:ring-2 focus:ring-gold ${
                      categories.marketing && !ccpaOptOut ? 'bg-gold' : 'bg-mocha-700'
                    } ${ccpaOptOut ? 'opacity-40 cursor-not-allowed' : ''}`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full bg-mocha-950 transition-transform ${
                        categories.marketing && !ccpaOptOut ? 'transform translate-x-6' : 'transform translate-x-0'
                      }`}
                    />
                  </button>
                </div>

                <p className="text-xs text-stone-300 leading-relaxed">
                  Allows ad networks (such as Google Ads or Meta) to evaluate consultation conversion attribution and deliver relevant architectural roofing announcements. Supports Google Consent Mode v2 (<code className="text-gold">ad_storage</code>, <code className="text-gold">ad_user_data</code>, <code className="text-gold">ad_personalization</code>).
                </p>
                {ccpaOptOut && (
                  <p className="text-xs text-amber font-mono bg-amber/10 p-2 rounded border border-amber/30">
                    Marketing is currently blocked because you opted out under CCPA / TDPSA.
                  </p>
                )}
                <div className="text-[11px] font-mono text-stone-400 bg-mocha-900 p-2.5 rounded border border-mocha-800">
                  <strong>Examples:</strong> <code className="text-gold">_gcl_au</code>, <code className="text-gold">_fbp</code> • Lifespan: Up to 13 months.
                </div>
              </div>

              {/* Category 4: Functional & Preferences */}
              <div className="p-4 sm:p-5 rounded-xl bg-mocha-850 border border-mocha-800 space-y-3">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-mocha-800 flex items-center justify-center text-amber">
                      <SlidersHorizontal className="w-4 h-4 text-amber" />
                    </div>
                    <div>
                      <div className="font-serif font-bold text-base text-gold-100">
                        Functional Preferences
                      </div>
                      <div className="text-xs text-stone-400">Remember estimator square footage & calculator parameters</div>
                    </div>
                  </div>

                  <button
                    type="button"
                    role="switch"
                    aria-checked={categories.functional}
                    onClick={() => toggleCategory('functional')}
                    className={`w-12 h-6 rounded-full transition-colors flex items-center px-1 focus:outline-none focus:ring-2 focus:ring-gold ${
                      categories.functional ? 'bg-gold' : 'bg-mocha-700'
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full bg-mocha-950 transition-transform ${
                        categories.functional ? 'transform translate-x-6' : 'transform translate-x-0'
                      }`}
                    />
                  </button>
                </div>

                <p className="text-xs text-stone-300 leading-relaxed">
                  Enables the website to remember your calculations in our Interactive Roof Estimator, financing budget figures, and portfolio filter selections between page reloads.
                </p>
                <div className="text-[11px] font-mono text-stone-400 bg-mocha-900 p-2.5 rounded border border-mocha-800">
                  <strong>Examples:</strong> <code className="text-gold">jayco_estimator_prefill</code> • Lifespan: Up to 12 months.
                </div>
              </div>
            </div>
          ) : (
            /* CCPA / US State Privacy Rights Tab */
            <div className="space-y-5">
              <div className="p-4 sm:p-5 rounded-xl bg-mocha-850 border border-mocha-800 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold/15 flex items-center justify-center text-amber">
                    <Scale className="w-5 h-5 text-amber" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-base sm:text-lg text-gold-100">
                      Do Not Sell or Share My Personal Information
                    </h3>
                    <p className="text-xs text-stone-400 font-mono">
                      California Consumer Privacy Act (CCPA/CPRA) & Texas Data Privacy and Security Act (TDPSA)
                    </p>
                  </div>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-stone-300 leading-relaxed">
                  <p>
                    <strong>Factual Disclosure:</strong> Jay-Co Sheet Metal & Roofing does not sell your personal contact information (such as your name, phone number, address, or roof specifications) to third-party data brokers or marketing telemarketers for monetary consideration.
                  </p>
                  <p>
                    However, applicable state privacy statutes (such as California CPRA and Texas TDPSA) define the term &quot;sale&quot; and &quot;share&quot; broadly to encompass certain cross-context behavioral advertising and third-party analytics pixels.
                  </p>
                  <p>
                    By activating the opt-out switch below, you signal that you decline all third-party advertising cookies, retargeting pixels, and personal data transmission for cross-context behavioral advertising.
                  </p>
                </div>

                <div className="pt-3 border-t border-mocha-800 flex items-center justify-between gap-4">
                  <div>
                    <div className="font-semibold text-sm text-gold-100">
                      Opt-Out of Cross-Context Advertising / Sale
                    </div>
                    <div className="text-xs text-stone-400">
                      Disables all marketing cookies and ad personalization signals
                    </div>
                  </div>

                  <button
                    type="button"
                    role="switch"
                    aria-checked={ccpaOptOut}
                    onClick={() => {
                      const next = !ccpaOptOut;
                      setCcpaOptOut(next);
                      if (next) {
                        setCategories(prev => ({ ...prev, marketing: false }));
                      }
                    }}
                    className={`w-12 h-6 rounded-full transition-colors flex items-center px-1 focus:outline-none focus:ring-2 focus:ring-gold ${
                      ccpaOptOut ? 'bg-amber' : 'bg-mocha-700'
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full bg-mocha-950 transition-transform ${
                        ccpaOptOut ? 'transform translate-x-6' : 'transform translate-x-0'
                      }`}
                    />
                  </button>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-mocha-950 border border-mocha-800 text-xs text-stone-400 space-y-2">
                <div className="font-semibold text-gold">Direct Opt-Out Requests:</div>
                <p>
                  You may also lodge an offline consumer opt-out request directly with our Houston shop desk by calling <strong className="text-stone-200">(713) 738-4525</strong> or emailing <strong className="text-stone-200">jaycosm@sbcglobal.com</strong>.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 border-t border-mocha-800 bg-mocha-950/90 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            {hasConsented && (
              <button
                type="button"
                onClick={withdrawConsent}
                className="inline-flex items-center gap-1.5 text-xs text-stone-400 hover:text-amber underline underline-offset-2 transition-colors py-2"
                aria-label="Withdraw consent and restore default settings"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Withdraw Consent</span>
              </button>
            )}

            <button
              type="button"
              onClick={() => {
                closePreferences();
                navigateTo('cookies');
              }}
              className="inline-flex items-center gap-1 text-xs text-gold hover:text-gold-light underline underline-offset-2 transition-colors py-2 ml-auto sm:ml-0"
            >
              <span>Read Full Cookie Policy</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 w-full sm:w-auto justify-end">
            <button
              type="button"
              onClick={rejectAll}
              className="min-h-[44px] flex-1 sm:flex-initial px-4 py-2.5 bg-mocha-850 hover:bg-mocha-800 text-stone-300 hover:text-ivory text-xs sm:text-sm font-semibold rounded-lg border border-mocha-700 transition-all active:scale-[0.98]"
            >
              Reject All
            </button>

            <button
              type="button"
              onClick={handleSave}
              className="min-h-[44px] flex-1 sm:flex-initial px-5 py-2.5 bg-mocha-800 hover:bg-mocha-750 text-gold hover:text-gold-light text-xs sm:text-sm font-semibold rounded-lg border border-gold/40 hover:border-gold transition-all active:scale-[0.98]"
            >
              Save Preferences
            </button>

            <button
              type="button"
              onClick={acceptAll}
              className="min-h-[44px] w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2.5 bg-gold hover:bg-gold-light text-mocha-950 text-xs sm:text-sm font-bold rounded-lg shadow-gold transition-all active:scale-[0.98] amber-button-glow"
            >
              <Check className="w-4 h-4 text-mocha-950" />
              <span>Accept All</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
