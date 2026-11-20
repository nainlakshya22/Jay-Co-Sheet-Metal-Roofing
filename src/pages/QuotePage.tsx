import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { MultiStepQuoteForm } from '../components/tools/MultiStepQuoteForm';
import { FileText, Phone, MapPin, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const QuotePage: React.FC = () => {
  return (
    <div className="py-12 sm:py-16 bg-mocha-950 text-stone-300 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-5xl mx-auto px-4 sm:px-8 relative z-10">
        <Breadcrumbs items={[{ label: 'Request a Quote' }]} />

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 bg-mocha-900/90 border border-gold/40 px-3.5 py-1.5 rounded-full text-gold text-xs font-mono uppercase tracking-wider">
            <FileText className="w-3.5 h-3.5 text-amber" />
            <span>Direct Shop Consultation</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl text-gold-100 font-bold leading-tight">
            Request an Architectural Roofing Consultation
          </h1>

          <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-sans">
            Complete our 5-step inquiry workflow. Our senior estimators at the 2307 Knight St shop will review your roof dimensions, architectural preferences, and municipal code requirements.
          </p>
        </div>

        {/* 5-Step Form */}
        <div className="mb-16">
          <MultiStepQuoteForm />
        </div>

        {/* Direct Contact Alternatives */}
        <div className="bg-mocha-900/90 border border-gold/30 rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-xl">
          <div>
            <h3 className="font-serif font-bold text-lg text-gold-100">Prefer Direct Phone Consultation?</h3>
            <p className="text-xs text-stone-400 mt-1">
              Speak directly with our Houston estimating desk at (713) 738-4525.
            </p>
          </div>
          <a
            href={`tel:${COMPANY_INFO.phone}`}
            className="bg-mocha-950 hover:bg-mocha-850 border border-gold/40 text-gold px-6 py-3 rounded-lg text-xs uppercase tracking-wider font-bold transition-colors flex items-center gap-2"
          >
            <Phone className="w-4 h-4 text-amber" />
            <span>Call {COMPANY_INFO.phoneFormatted}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
