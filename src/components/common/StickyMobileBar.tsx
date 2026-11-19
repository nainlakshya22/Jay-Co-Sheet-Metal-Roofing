import React from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { COMPANY_INFO } from '../../data/companyData';
import { Phone, FileText } from 'lucide-react';

export const StickyMobileBar: React.FC = () => {
  const { openQuoteModal } = useNavigation();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-charcoal-950/95 backdrop-blur-md border-t border-charcoal-800 px-3 pt-2 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:hidden shadow-elevated">
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
        <a
          href={`tel:${COMPANY_INFO.phone}`}
          className="flex items-center justify-center gap-2 bg-charcoal-900 border border-charcoal-700 hover:border-copper text-ivory min-h-[44px] py-3 px-4 rounded font-semibold text-xs uppercase tracking-wider transition-colors active:bg-charcoal-800"
          aria-label="Call Jay-Co Sheet Metal & Roofing at 713-738-4525"
        >
          <Phone className="w-4 h-4 text-copper flex-shrink-0" />
          <span>Call Now</span>
        </a>

        <button
          onClick={() => openQuoteModal()}
          className="flex items-center justify-center gap-2 bg-copper hover:bg-copper-light text-charcoal-950 min-h-[44px] py-3 px-4 rounded font-bold text-xs uppercase tracking-wider shadow-copper transition-all active:scale-[0.98]"
          aria-label="Request an architectural roofing quote from Jay-Co"
        >
          <FileText className="w-4 h-4 flex-shrink-0" />
          <span>Request Quote</span>
        </button>
      </div>
    </div>
  );
};
