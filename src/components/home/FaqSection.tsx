import React, { useState } from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { FAQS } from '../../data/companyData';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const { openAssistant, openQuoteModal } = useNavigation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 lg:py-28 bg-mocha-950 border-t border-mocha-800/80 text-stone-300 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-5xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-mocha-900/90 border border-gold/30 px-4 py-2 rounded-full mb-3 text-gold text-xs font-mono uppercase tracking-wider">
            <HelpCircle className="w-4 h-4 text-amber" />
            <span>Architectural & Permitting Insights</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ivory font-bold tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-stone-300 mt-3 leading-relaxed font-sans max-w-2xl mx-auto">
            Clear, transparent answers regarding our GAF certification, Houston municipal permits, copper fabrication, and estimating methodology.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5 mb-12">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-mocha-900/90 border border-mocha-800/80 hover:border-gold/30 rounded-lg transition-colors overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif font-bold text-base sm:text-lg text-ivory hover:text-gold transition-colors leading-snug">
                    {faq.question}
                  </span>
                  <div className={`p-2 rounded-full bg-mocha-800 text-gold flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-amber text-mocha-950 font-bold' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-base text-stone-200 leading-[1.75] font-sans border-t border-mocha-800/80 animate-fadeIn space-y-3">
                    <p>{faq.answer}</p>
                    <div className="flex items-center gap-2 pt-1">
                      <span className="text-xs bg-mocha-950 text-gold px-3 py-1 rounded font-mono border border-gold/20">
                        {faq.category}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Live Assistant Callout */}
        <div className="bg-gradient-to-r from-mocha-900 via-mocha-900/90 to-mocha-950 border border-gold/30 rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-lg">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-lg bg-mocha-950 border border-gold/40 flex items-center justify-center text-gold flex-shrink-0 shadow-gold">
              <Sparkles className="w-5 h-5 text-amber animate-pulse" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-ivory text-base sm:text-lg">Have a Specific Architectural Question?</h4>
              <p className="text-sm text-stone-300 font-sans mt-0.5">Ask our AI concierge trained on verified Jay-Co technical specifications.</p>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={openAssistant}
              className="bg-mocha-950 hover:bg-mocha-800 border border-gold/40 text-gold-light hover:text-gold font-semibold px-4 py-3 rounded-md text-xs uppercase tracking-wider transition-colors min-h-[44px]"
            >
              Ask AI Concierge
            </button>
            <button
              onClick={() => openQuoteModal()}
              className="amber-button-glow font-bold px-5 py-3 rounded-md text-xs uppercase tracking-wider relative-shimmer min-h-[44px] shadow-amber"
            >
              Request an Estimate
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
