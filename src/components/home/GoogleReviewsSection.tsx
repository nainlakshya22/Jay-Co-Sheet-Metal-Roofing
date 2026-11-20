import React from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { VERIFIED_REVIEWS, COMPANY_INFO } from '../../data/companyData';
import { Star, ShieldCheck, ExternalLink, CheckCircle2 } from 'lucide-react';

export const GoogleReviewsSection: React.FC = () => {
  const { openQuoteModal } = useNavigation();

  return (
    <div className="bg-mocha-900 border border-gold/30 rounded-sm shadow-luxury p-6 sm:p-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-mocha-800 pb-6 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="p-1.5 bg-mocha-850 text-gold rounded border border-gold/30">
              <Star className="w-4 h-4 fill-amber text-amber" />
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-gold font-semibold">
              Verified Google Profile Testimonials (Curated Public Snapshot)
            </span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl text-ivory font-bold">
            Customer Reviews & Public Testimonials
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-2xl">
            Representative customer ratings recorded across our verified Google Business Profile and official GAF contractor network listing.
          </p>
        </div>

        {/* Rating Score Badge */}
        <div className="flex items-center gap-3 bg-mocha-950 border border-gold/30 px-4 py-2.5 rounded shadow-sm">
          <div className="text-right">
            <div className="flex items-center gap-1 text-gold font-serif font-bold text-xl">
              <span>{COMPANY_INFO.gafRating}</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-3.5 h-3.5 ${i < 4 ? 'fill-gold text-gold' : 'fill-gold/50 text-gold'}`} 
                  />
                ))}
              </div>
            </div>
            <span className="text-[10px] text-stone-400 font-mono">
              Based on {COMPANY_INFO.gafReviewCount} Verified Ratings
            </span>
          </div>
        </div>
      </div>

      {/* Reviews Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {VERIFIED_REVIEWS.map(rev => (
          <div
            key={rev.id}
            className="bg-mocha-950 border border-mocha-800 rounded p-5 flex flex-col justify-between space-y-4 hover:border-gold/50 transition-all duration-300 hover:shadow-luxury hover:-translate-y-1 group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex text-gold">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <span className="text-[10px] bg-mocha-900 text-gold px-2 py-0.5 rounded font-mono border border-gold/20 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-amber" />
                  <span>{rev.source}</span>
                </span>
              </div>

              <blockquote className="text-xs sm:text-sm text-stone-300 italic leading-relaxed">
                "{rev.text}"
              </blockquote>
            </div>

            <div className="pt-3 border-t border-mocha-850 flex items-center justify-between text-xs">
              <div>
                <span className="font-serif font-bold text-ivory block group-hover:text-gold transition-colors">{rev.author}</span>
                <span className="text-[10px] text-stone-400 font-mono">{rev.date}</span>
              </div>
              <span className="text-[10px] text-amber font-mono">
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
