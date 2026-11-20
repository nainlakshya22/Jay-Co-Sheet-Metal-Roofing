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
          <div className="inline-flex items-center gap-2 bg-mocha-900/90 border border-gold/30 px-3.5 py-1.5 rounded-full mb-3 text-gold text-xs font-mono uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-amber" />
            <span>Architectural & Permitting Insights</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-gold-100 font-bold tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-stone-400 mt-2">
            Clear, transparent answers regarding our GAF certification, Houston municipal permits, copper fabrication, and estimating methodology.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3 mb-10">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-mocha-900/90 border border-mocha-800/80 hover:border-gold/30 rounded-lg transition-colors overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif font-bold text-sm sm:text-base text-gold-100">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full bg-mocha-800 text-gold flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-amber text-mocha-950 font-bold' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-300 leading-relaxed border-t border-mocha-800/80 animate-fadeIn">
                    <p>{faq.answer}</p>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="text-[10px] bg-mocha-950 text-gold px-2.5 py-1 rounded font-mono border border-gold/20">
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
        <div className="bg-gradient-to-r from-mocha-900 via-mocha-900/90 to-mocha-950 border border-gold/30 rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-lg">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-mocha-950 border border-gold/40 flex items-center justify-center text-gold flex-shrink-0">
              <Sparkles className="w-5 h-5 text-gold animate-pulse" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-gold-100 text-base">Have a Specific Architectural Question?</h4>
              <p className="text-xs text-stone-400">Ask our AI assistant trained on verified Jay-Co technical data.</p>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={openAssistant}
              className="bg-mocha-950 hover:bg-mocha-800 border border-gold/40 text-gold font-semibold px-4 py-2.5 rounded-md text-xs uppercase tracking-wider transition-colors"
            >
              Ask AI Concierge
            </button>
            <button
              onClick={() => openQuoteModal()}
              className="bg-amber hover:bg-amber-light text-mocha-950 font-bold px-5 py-2.5 rounded-md text-xs uppercase tracking-wider shadow-amber transition-all"
            >
              Request Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
