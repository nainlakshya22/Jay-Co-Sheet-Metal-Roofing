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
    <div className="py-12 sm:py-16 bg-mocha-950 text-stone-300 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-5xl mx-auto px-4 sm:px-8 relative z-10">
        <Breadcrumbs items={[{ label: 'Frequently Asked Questions' }]} />

        {/* Hero Header */}
        <div className="max-w-3xl space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 bg-mocha-900/90 border border-gold/40 px-3.5 py-1.5 rounded-full text-gold text-xs font-mono uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-amber" />
            <span>Technical & Permitting Knowledge</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl text-gold-100 font-bold leading-tight">
            Frequently Asked Questions & Technical Specifications
          </h1>

          <p className="text-base sm:text-lg text-stone-300 leading-relaxed font-sans">
            Search our comprehensive knowledge base regarding standing seam engineering, GAF warranty protection, municipal permit filings, and copper fabrication.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-12">
          <Search className="w-5 h-5 text-gold absolute left-4 top-4" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search questions by topic (e.g. GAF, permit, copper, standing seam, price)..."
            className="w-full bg-mocha-900/90 border border-gold/30 rounded-xl py-3.5 pl-12 pr-4 text-base text-gold-100 placeholder-stone-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 shadow-lg"
          />
        </div>

        {searchQuery ? (
          <div className="space-y-4 mb-16">
            <h3 className="font-mono text-xs text-gold uppercase tracking-wider">
              Search Results ({filteredFaqs.length} Found)
            </h3>
            {filteredFaqs.length > 0 ? (
              <div className="space-y-3.5">
                {filteredFaqs.map((faq, idx) => (
                  <div key={idx} className="bg-mocha-900/90 border border-mocha-800/80 rounded-xl p-6 sm:p-7 space-y-2.5 shadow-lg">
                    <span className="text-[10px] bg-mocha-950 text-gold px-2.5 py-1 rounded font-mono border border-gold/20">
                      {faq.category}
                    </span>
                    <h4 className="font-serif font-bold text-lg text-gold-100 leading-snug">{faq.question}</h4>
                    <p className="text-sm sm:text-base text-stone-300 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 bg-mocha-900/80 border border-mocha-800 rounded-xl text-center text-sm text-stone-400">
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
