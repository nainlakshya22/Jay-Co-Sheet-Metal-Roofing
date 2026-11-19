import React, { useState } from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { FAQS } from '../data/companyData';
import { FaqSection } from '../components/home/FaqSection';
import { HelpCircle, Search } from 'lucide-react';

export const FaqPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = FAQS.filter(f => 
    f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    f.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    f.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="py-12 sm:py-16 bg-charcoal-950 text-stone-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        <Breadcrumbs items={[{ label: 'Frequently Asked Questions' }]} />

        {/* Hero Header */}
        <div className="max-w-3xl space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 bg-charcoal-900 border border-copper/50 px-3.5 py-1.5 rounded-full text-copper text-xs font-mono uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Technical & Permitting Knowledge</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl text-ivory font-bold leading-tight">
            Frequently Asked Questions & Technical Specifications
          </h1>

          <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-sans">
            Search our comprehensive knowledge base regarding standing seam engineering, GAF warranty protection, municipal permit filings, and copper fabrication.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-12">
          <Search className="w-5 h-5 text-copper absolute left-4 top-3.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search questions by topic (e.g. GAF, permit, copper, standing seam, price)..."
            className="w-full bg-charcoal-900 border border-charcoal-700/80 rounded py-3 pl-12 pr-4 text-sm text-ivory focus:outline-none focus:border-copper"
          />
        </div>

        {searchQuery ? (
          <div className="space-y-4 mb-16">
            <h3 className="font-mono text-xs text-copper uppercase tracking-wider">
              Search Results ({filteredFaqs.length} Found)
            </h3>
            {filteredFaqs.length > 0 ? (
              <div className="space-y-3">
                {filteredFaqs.map((faq, idx) => (
                  <div key={idx} className="bg-charcoal-900 border border-charcoal-800 rounded p-6 space-y-2">
                    <span className="text-[10px] bg-charcoal-850 text-copper px-2 py-0.5 rounded font-mono border border-copper/20">
                      {faq.category}
                    </span>
                    <h4 className="font-serif font-bold text-base text-ivory">{faq.question}</h4>
                    <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 bg-charcoal-900 rounded text-center text-xs text-stone-400">
                No matching questions found. Try searching for "standing seam", "GAF", or "permit".
              </div>
            )}
          </div>
        ) : (
          <div className="mb-16">
            <FaqSection />
          </div>
        )}
      </div>
    </div>
  );
};
