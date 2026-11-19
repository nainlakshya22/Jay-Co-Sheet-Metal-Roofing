import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { MultiStepQuoteForm } from '../components/tools/MultiStepQuoteForm';
import { FileText, Phone, MapPin, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const QuotePage: React.FC = () => {
  return (
    <div className="py-12 sm:py-16 bg-charcoal-950 text-stone-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        <Breadcrumbs items={[{ label: 'Request a Quote' }]} />

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 bg-charcoal-900 border border-copper/50 px-3.5 py-1.5 rounded-full text-copper text-xs font-mono uppercase tracking-wider">
            <FileText className="w-3.5 h-3.5" />
            <span>Direct Shop Consultation</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl text-ivory font-bold leading-tight">
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
        <div className="bg-charcoal-900 border border-charcoal-800 rounded p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="font-serif font-bold text-lg text-ivory">Prefer Direct Phone Consultation?</h3>
            <p className="text-xs text-stone-400 mt-1">
              Speak directly with our Houston estimating desk at (713) 738-4525.
            </p>
          </div>
          <a
            href={`tel:${COMPANY_INFO.phone}`}
            className="bg-charcoal-850 hover:bg-charcoal-800 border border-copper/50 text-copper px-6 py-3 rounded text-xs uppercase tracking-wider font-bold transition-colors flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            <span>Call {COMPANY_INFO.phoneFormatted}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
