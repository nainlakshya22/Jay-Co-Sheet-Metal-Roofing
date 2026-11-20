import React from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { COMPANY_INFO } from '../../data/companyData';
import { Hammer, ShieldCheck, Flame, Wrench } from 'lucide-react';

export const CraftsmanshipSection: React.FC = () => {
  const { navigateTo, openQuoteModal } = useNavigation();

  return (
    <section className="py-20 lg:py-28 bg-mocha-900 border-t border-mocha-800 text-stone-300 relative overflow-hidden">
      {/* Subtle Atmospheric Light */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 mb-2">
            <span className="p-1.5 bg-mocha-850 text-gold rounded border border-gold/30">
              <Hammer className="w-4 h-4 text-amber" />
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-gold font-semibold">
              The 2307 Knight Street Standards
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-ivory font-bold">
            Craftsmanship, Machinery & Certified Execution
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 mt-2 leading-relaxed">
            Rather than inventing stock personas or fictional biographies, we showcase the verified technical infrastructure, precision fabrication tooling, and manufacturer standards that power Jay-Co's daily operations.
          </p>
        </div>

        {/* 3 Infrastructure Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* 1. Heavy Brake Fabrication Infrastructure */}
          <div className="bg-mocha-950 border border-mocha-800 hover:border-gold/50 rounded p-6 sm:p-8 flex flex-col justify-between space-y-6 transition-all duration-300 hover:shadow-luxury hover:-translate-y-1 group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded bg-mocha-900 border border-gold/40 p-2.5 flex items-center justify-center text-amber shadow-gold">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-ivory group-hover:text-gold transition-colors">
                Shop Brake Machinery & Shears
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                Our Houston Knight St shop is equipped with industrial 10-foot mechanical bending brakes and computerized shears. We bend 24-ga Galvalume, 16/20-oz cold-rolled copper, and heavy aluminum to custom blueprints with zero tolerance for warped seams or unhemmed edges.
              </p>
            </div>
            <div className="pt-4 border-t border-mocha-850 text-xs font-mono text-gold font-medium">
              ✓ Custom 10-Ft Continuous Lengths
            </div>
          </div>

          {/* 2. Hand-Soldering Coppersmith Bench */}
          <div className="bg-mocha-950 border border-mocha-800 hover:border-gold/50 rounded p-6 sm:p-8 flex flex-col justify-between space-y-6 transition-all duration-300 hover:shadow-luxury hover:-translate-y-1 group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded bg-mocha-900 border border-gold/40 p-2.5 flex items-center justify-center text-amber shadow-gold">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-ivory group-hover:text-gold transition-colors">
                Old-World Coppersmith Benches
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                True copper work requires hands-on soldering artistry. Our coppersmiths clean, flux, tin, and sweated-solder flat lock copper pans, bay window caps, and chimney crickets with 50/50 virgin soldering alloys—creating an impervious metallurgical bond that outlasts caulking by generations.
              </p>
            </div>
            <div className="pt-4 border-t border-mocha-850 text-xs font-mono text-gold font-medium">
              ✓ 50/50 Virgin Soldered Lock Seams
            </div>
          </div>

          {/* 3. GAF Certified & Code Compliance */}
          <div className="bg-mocha-950 border border-mocha-800 hover:border-gold/50 rounded p-6 sm:p-8 flex flex-col justify-between space-y-6 transition-all duration-300 hover:shadow-luxury hover:-translate-y-1 group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded bg-mocha-900 border border-gold/40 p-2.5 flex items-center justify-center text-amber shadow-gold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-ivory group-hover:text-gold transition-colors">
                GAF Certified™ Protocol & Permitting
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                As an audited GAF Certified™ Contractor (ID #1132527), our crews adhere to manufacturer fastening schedules, 6-nail high-wind strike zones, and strict Texas Gulf Coast windstorm codes. We manage all municipal permits and engineer sign-offs (e.g. Bunker Hill Permit #20220639).
              </p>
            </div>
            <div className="pt-4 border-t border-mocha-850 text-xs font-mono text-gold font-medium">
              ✓ Factory GAF Audited (ID #1132527)
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-mocha-950 border border-gold/30 rounded p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-luxury">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif text-xl font-bold text-ivory">
              Need Architectural Shop Fabrication or a Custom Re-Roof?
            </h4>
            <p className="text-xs text-stone-300">
              Speak directly with our fabrication estimators at the 2307 Knight St facility.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="bg-mocha-900 hover:bg-mocha-850 border border-gold/40 text-gold-light hover:text-gold px-5 py-3 rounded text-xs uppercase tracking-wider font-semibold transition-colors gold-border-glow"
            >
              Call {COMPANY_INFO.phoneFormatted}
            </a>
            <button
              onClick={() => openQuoteModal()}
              className="amber-button-glow font-bold px-6 py-3 rounded-sm text-xs uppercase tracking-wider relative-shimmer group"
            >
              Request Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
