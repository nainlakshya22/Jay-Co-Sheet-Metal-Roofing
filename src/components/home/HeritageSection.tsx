import React from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { COMPANY_INFO } from '../../data/companyData';
import { History, Award, CheckCircle, ArrowRight } from 'lucide-react';

export const HeritageSection: React.FC = () => {
  const { navigateTo, openQuoteModal } = useNavigation();

  return (
    <section className="py-20 lg:py-28 bg-mocha-950 text-stone-300 border-t border-mocha-800 relative overflow-hidden">
      {/* Subtle Atmospheric Light */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Timeline & Historical Badges (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-mocha-900 border border-gold/30 rounded p-6 sm:p-8 space-y-6 shadow-luxury">
              <div className="flex items-center gap-2">
                <span className="p-1.5 bg-mocha-850 text-gold rounded border border-gold/30">
                  <History className="w-4 h-4 text-amber" />
                </span>
                <span className="text-xs font-mono uppercase tracking-widest text-gold font-semibold">
                  Company Heritage
                </span>
              </div>

              <div>
                <span className="font-serif text-4xl sm:text-5xl font-bold text-gold block">
                  1988
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-ivory mt-1">
                  Over Three Decades of Houston Craftsmanship
                </h3>
              </div>

              <div className="space-y-4 text-xs text-stone-300 leading-relaxed border-t border-mocha-800 pt-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-amber flex-shrink-0 mt-1.5" />
                  <div>
                    <strong className="text-ivory block mb-0.5">Knight Street Shop Establishment</strong>
                    <span>Rooted at 2307 Knight St in Houston, fabricating heavy architectural sheet metal and roofing for premier custom builders.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-amber flex-shrink-0 mt-1.5" />
                  <div>
                    <strong className="text-ivory block mb-0.5">Preserving Old-World Coppersmithing</strong>
                    <span>Passing down hand-soldering and traditional sheet metal brake artistry through generations of Texas craftsmen.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-amber flex-shrink-0 mt-1.5" />
                  <div>
                    <strong className="text-ivory block mb-0.5">GAF Manufacturer Network</strong>
                    <span>Earning verified GAF Certified™ Residential Contractor standing (ID #1132527), backed by factory inspection standards.</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => navigateTo('heritage')}
                className="w-full py-2.5 bg-mocha-850 hover:bg-mocha-800 border border-gold/40 hover:border-gold text-gold-light hover:text-gold rounded text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors gold-border-glow shadow-sm"
              >
                <span>Read Full Heritage Record</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber" />
              </button>
            </div>
          </div>

          {/* Right Column: Factual Craft Narrative (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-gold font-semibold">
                Architectural Integrity
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-ivory font-bold leading-tight">
                Authentic Craftsmanship Built Upon Truth, Not Marketing Hype.
              </h2>
            </div>

            <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-sans">
              In an industry crowded with pop-up storm chasers who vanish when hurricane season ends, Jay-Co Sheet Metal & Roofing has stood firm at our Houston physical facility for over 35 years. We do not invent fictional founder biographies, fake awards, or exaggerated manufacturer designations.
            </p>

            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              Our reputation is founded upon physical proof: verifiable municipal building permits like <strong>Bunker Hill Village Permit #20220639</strong>, authentic customer relationships praised by long-time Texas tradespeople, and our dedicated Knight St machinery where raw rolls of copper and Galvalume are bent into architectural perfection.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-mocha-900 border border-mocha-800 rounded hover:border-gold/40 transition-colors">
                <span className="text-gold font-serif font-bold text-lg block mb-1">
                  Owner Leadership
                </span>
                <p className="text-xs text-stone-300">
                  Direct personal oversight on all luxury estate installations and technical brake fabrications.
                </p>
              </div>

              <div className="p-4 bg-mocha-900 border border-mocha-800 rounded hover:border-gold/40 transition-colors">
                <span className="text-gold font-serif font-bold text-lg block mb-1">
                  Architect Collaborations
                </span>
                <p className="text-xs text-stone-300">
                  Historical references across Houston's finest builders in Memorial, River Oaks, and West University.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => openQuoteModal({ service: 'Architectural Consultation' })}
                className="amber-button-glow font-bold px-6 py-3.5 rounded-sm text-xs uppercase tracking-wider relative-shimmer group"
              >
                Schedule an On-Site Technical Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
