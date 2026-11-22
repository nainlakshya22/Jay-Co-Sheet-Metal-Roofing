import React from 'react';
import { useCookieConsent } from '../../context/CookieConsentContext';
import { useNavigation } from '../../context/NavigationContext';
import { ShieldCheck, Sliders, Check, X } from 'lucide-react';

export const CookieConsentBanner: React.FC = () => {
  const { isBannerOpen, acceptAll, rejectAll, openPreferences } = useCookieConsent();
  const { navigateTo } = useNavigation();

  if (!isBannerOpen) return null;

  return (
    <div
      role="region"
      aria-label="Cookie and Privacy Consent"
      className="fixed bottom-0 left-0 right-0 z-50 p-3 sm:p-6 pb-[max(1rem,calc(env(safe-area-inset-bottom)+0.75rem))] animate-cookie-popup pointer-events-auto"
    >
      <div className="max-w-5xl mx-auto bg-mocha-900/98 backdrop-blur-xl border border-gold/40 rounded-xl sm:rounded-2xl shadow-luxury p-5 sm:p-6 text-stone-200 gold-border-glow shadow-glow-ambient">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 sm:gap-6">
          
          {/* Content & Policy Notice */}
          <div className="space-y-2 max-w-3xl">
            <div className="flex items-center gap-2 text-gold">
              <div className="w-6 h-6 rounded-full bg-gold/15 flex items-center justify-center text-amber flex-shrink-0">
                <ShieldCheck className="w-4 h-4 text-amber" />
              </div>
              <h2 className="font-serif text-base sm:text-lg font-bold text-gold-100 tracking-wide">
                Privacy & Cookie Consultation Settings
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans">
              Jay-Co Sheet Metal & Roofing uses strictly necessary cookies for consultation wizard security and site operations. With your consent, we also utilize analytics and marketing cookies to measure technical performance and present relevant architectural metalcraft services.
            </p>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-stone-400 font-mono">
              <span>Learn more in our:</span>
              <button
                type="button"
                onClick={() => navigateTo('privacy')}
                className="text-gold hover:text-gold-light underline underline-offset-2 transition-colors"
              >
                Privacy Policy
              </button>
              <span className="text-mocha-700">•</span>
              <button
                type="button"
                onClick={() => navigateTo('cookies')}
                className="text-gold hover:text-gold-light underline underline-offset-2 transition-colors"
              >
                Cookie Policy
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 sm:gap-3 w-full lg:w-auto lg:flex-shrink-0 justify-end">
            <button
              type="button"
              onClick={() => openPreferences('categories')}
              className="min-h-[44px] flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-mocha-800/90 hover:bg-mocha-750 text-stone-200 hover:text-gold text-xs sm:text-sm font-semibold rounded-lg border border-mocha-700 hover:border-gold/40 transition-all active:scale-[0.98]"
              aria-label="Customize cookie preferences"
            >
              <Sliders className="w-3.5 h-3.5 text-amber" />
              <span>Customize</span>
            </button>

            <button
              type="button"
              onClick={rejectAll}
              className="min-h-[44px] flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-mocha-850 hover:bg-mocha-800 text-stone-300 hover:text-ivory text-xs sm:text-sm font-semibold rounded-lg border border-mocha-700 hover:border-stone-500 transition-all active:scale-[0.98]"
              aria-label="Reject non-essential cookies"
            >
              <X className="w-3.5 h-3.5 text-stone-400" />
              <span>Reject All</span>
            </button>

            <button
              type="button"
              onClick={acceptAll}
              className="min-h-[44px] w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2.5 bg-gold hover:bg-gold-light text-mocha-950 text-xs sm:text-sm font-bold rounded-lg shadow-gold transition-all active:scale-[0.98] amber-button-glow"
              aria-label="Accept all cookies"
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
