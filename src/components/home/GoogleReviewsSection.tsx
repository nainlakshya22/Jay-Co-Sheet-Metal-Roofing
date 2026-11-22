import React from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { VERIFIED_REVIEWS, COMPANY_INFO } from '../../data/companyData';
import { Star, ShieldCheck, ExternalLink, CheckCircle2 } from 'lucide-react';

export const GoogleReviewsSection: React.FC = () => {
  const { openQuoteModal } = useNavigation();

  return (
    <div className="bg-mocha-900 border border-gold/30 rounded-sm shadow-luxury p-6 sm:p-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 border-b border-mocha-800 pb-8 mb-10">
        <div className="space-y-2 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="p-1.5 bg-mocha-850 text-gold rounded border border-gold/30">
              <Star className="w-4 h-4 fill-amber text-amber" />
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-gold font-semibold">
              Verified Client Testimonials
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-ivory font-bold leading-tight">
            Customer Reviews & Public Testimonials
          </h2>
          <p className="text-base sm:text-lg text-stone-300 leading-relaxed font-sans pt-1">
            Authentic customer reviews recorded across our Google Business Profile and verified GAF contractor network listing.
          </p>
        </div>

        {/* Rating Score Badge */}
        <div className="flex items-center gap-3.5 bg-mocha-950 border border-gold/30 px-5 py-3 rounded shadow-sm flex-shrink-0">
          <div className="text-right">
            <div className="flex items-center gap-1.5 text-gold font-serif font-bold text-xl sm:text-2xl">
              <span>{COMPANY_INFO.gafRating}</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < 4 ? 'fill-gold text-gold' : 'fill-gold/50 text-gold'}`} 
                  />
                ))}
              </div>
            </div>
            <span className="text-xs text-stone-300 font-mono">
              Based on {COMPANY_INFO.gafReviewCount} Verified Ratings
            </span>
          </div>
        </div>
      </div>

      {/* Reviews Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-10">
        {VERIFIED_REVIEWS.map(rev => (
          <div
            key={rev.id}
            className="bg-mocha-950 border border-mocha-800 rounded p-6 sm:p-7 flex flex-col justify-between space-y-5 hover:border-gold/50 transition-all duration-300 hover:shadow-luxury hover:-translate-y-1 group"
          >
            <div className="space-y-3.5">
              <div className="flex items-center justify-between">
                <div className="flex text-gold">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <span className="text-xs bg-mocha-900 text-gold px-2.5 py-1 rounded font-mono border border-gold/20 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber" />
                  <span>{rev.source}</span>
                </span>
              </div>

              <blockquote className="text-sm sm:text-base text-stone-200 italic leading-[1.7] font-sans">
                "{rev.text}"
              </blockquote>
            </div>

            <div className="pt-4 border-t border-mocha-850 flex items-center justify-between text-xs">
              <div>
                <span className="font-serif font-bold text-base text-ivory block group-hover:text-gold transition-colors">{rev.author}</span>
                <span className="text-xs text-stone-400 font-mono">{rev.date}</span>
              </div>
              <span className="text-xs text-amber font-mono text-right max-w-[140px] truncate">
                {rev.highlight}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Verification Notice & Links */}
      <div className="bg-mocha-950 border border-mocha-800 p-4 rounded text-xs text-stone-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start gap-2.5">
          <ShieldCheck className="w-4 h-4 text-amber flex-shrink-0 mt-0.5" />
          <span>
            <strong className="text-gold">Authenticity & API Disclosure:</strong> Reviews displayed represent genuine public customer reviews on file for Jay-Co Enterprises, LLC on Google and GAF directories (holding an authentic 4.5/5.0 aggregate rating across 13 recorded ratings). This presentation reflects a curated static snapshot; live dynamic Google Places API synchronization can be enabled upon client API key provisioning.
          </span>
        </div>

        <div className="flex items-center gap-3 flex-shrink-0">
          <a
            href="https://www.gaf.com/en-us/roofing-contractors/residential/usa/tx/houston/jay-co-sheet-metal-and-roofing-1132527"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-300 hover:text-gold border border-mocha-700 px-3 py-1.5 rounded text-xs font-medium transition-colors flex items-center gap-1.5 bg-mocha-900"
          >
            <span>Verify on GAF.com</span>
            <ExternalLink className="w-3.5 h-3.5 text-amber" />
          </a>
          <button
            onClick={() => openQuoteModal()}
            className="amber-button-glow px-4 py-1.5 rounded text-xs font-bold uppercase tracking-wider relative-shimmer"
          >
            Request Inspection
          </button>
        </div>
      </div>
    </div>
  );
};
