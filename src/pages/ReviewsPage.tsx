import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { GoogleReviewsSection } from '../components/home/GoogleReviewsSection';
import { Star, ShieldCheck, ExternalLink, Award, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const ReviewsPage: React.FC = () => {
  const { openQuoteModal } = useNavigation();

  return (
    <div className="py-12 sm:py-16 bg-charcoal-950 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <Breadcrumbs items={[{ label: 'Customer Reviews' }]} />

        {/* Hero Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-charcoal-900 border border-copper/50 px-3.5 py-1.5 rounded-full text-copper text-xs font-mono uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>Verified Customer Feedback</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl text-ivory font-bold leading-tight">
            Client Reviews & GAF Network Feedback
          </h1>

          <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-sans">
            Read verified public feedback recorded across our official GAF contractor network profile and Google business directory records for Jay-Co Enterprises, LLC.
          </p>
        </div>

        {/* Main Reviews Module */}
        <div className="mb-20">
          <GoogleReviewsSection />
        </div>

        {/* Trust & Methodology Notice */}
        <div className="bg-charcoal-900 border border-charcoal-800 rounded p-6 sm:p-8 space-y-4 max-w-4xl mx-auto">
          <h3 className="font-serif text-lg font-bold text-ivory flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-copper" />
            <span>Our Review Authenticity Commitment</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
            In compliance with truth-in-advertising guidelines, Jay-Co Sheet Metal & Roofing does not create fictional customer testimonials, alter star ratings, or purchase commercial review generation packages. Reviews displayed on this platform are drawn directly from public Google and GAF contractor directory sources (holding an aggregate 4.5/5.0 score across 13 recorded ratings). This display reflects a curated static snapshot; dynamic Google Places API integration can be configured via environment credentials.
          </p>
          <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono">
            <a
              href="https://www.gaf.com/en-us/roofing-contractors/residential/usa/tx/houston/jay-co-sheet-metal-and-roofing-1132527"
              target="_blank"
              rel="noopener noreferrer"
              className="text-copper hover:underline flex items-center gap-1"
            >
              <span>View GAF Profile #1132527</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
