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
    <section className="py-20 lg:py-28 bg-charcoal-950 border-t border-charcoal-800 text-stone-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-charcoal-900 border border-copper/30 px-3.5 py-1.5 rounded-full mb-3 text-copper text-xs font-mono uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Architectural & Permitting Insights</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-ivory font-bold">
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
                className="bg-charcoal-900 border border-charcoal-800 hover:border-charcoal-700 rounded transition-colors overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif font-bold text-sm sm:text-base text-ivory">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full bg-charcoal-850 text-copper flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-copper text-charcoal-950' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-300 leading-relaxed border-t border-charcoal-850/80 animate-fadeIn">
                    <p>{faq.answer}</p>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="text-[10px] bg-charcoal-850 text-copper px-2 py-0.5 rounded font-mono border border-copper/20">
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
        <div className="bg-charcoal-900 border border-copper/30 rounded p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-charcoal-850 border border-copper/50 flex items-center justify-center text-copper flex-shrink-0">
              <Sparkles className="w-5 h-5 text-copper animate-pulse" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-ivory text-base">Have a Specific Architectural Question?</h4>
              <p className="text-xs text-stone-400">Ask our AI assistant trained on verified Jay-Co technical data.</p>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={openAssistant}
              className="bg-charcoal-850 hover:bg-charcoal-800 border border-copper text-copper font-semibold px-4 py-2.5 rounded text-xs uppercase tracking-wider transition-colors"
            >
              Ask AI Concierge
            </button>
            <button
              onClick={() => openQuoteModal()}
              className="bg-copper hover:bg-copper-light text-charcoal-950 font-bold px-5 py-2.5 rounded text-xs uppercase tracking-wider shadow-copper transition-all"
            >
              Request Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
