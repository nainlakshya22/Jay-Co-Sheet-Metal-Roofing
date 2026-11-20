import React from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { COMPANY_INFO } from '../../data/companyData';
import { Phone, FileText } from 'lucide-react';

export const StickyMobileBar: React.FC = () => {
  const { openQuoteModal } = useNavigation();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-mocha-950/95 backdrop-blur-md border-t border-mocha-800 px-3 pt-2 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:hidden shadow-luxury">
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
        <a
          href={`tel:${COMPANY_INFO.phone}`}
          className="flex items-center justify-center gap-2 bg-mocha-900 border border-gold/40 hover:border-gold text-gold-light min-h-[44px] py-3 px-4 rounded font-semibold text-xs uppercase tracking-wider transition-colors active:bg-mocha-850"
          aria-label="Call Jay-Co Sheet Metal & Roofing at 713-738-4525"
        >
          <Phone className="w-4 h-4 text-amber flex-shrink-0" />
          <span>Call Now</span>
        </a>

        <button
          onClick={() => openQuoteModal()}
          className="flex items-center justify-center gap-2 amber-button-glow min-h-[44px] py-3 px-4 rounded font-bold text-xs uppercase tracking-wider transition-all active:scale-[0.98] relative-shimmer"
          aria-label="Request an architectural roofing quote from Jay-Co"
        >
          <FileText className="w-4 h-4 text-mocha-950 flex-shrink-0" />
          <span>Request Quote</span>
        </button>
      </div>
    </div>
  );
};
