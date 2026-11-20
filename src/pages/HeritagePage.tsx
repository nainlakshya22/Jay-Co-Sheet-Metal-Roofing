import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { COMPANY_INFO } from '../data/companyData';
import { History, Award, CheckCircle, ShieldCheck, MapPin, ArrowRight } from 'lucide-react';

export const HeritagePage: React.FC = () => {
  const { navigateTo, openQuoteModal } = useNavigation();

  return (
    <div className="py-12 sm:py-16 bg-mocha-950 text-stone-300 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <Breadcrumbs
          items={[
            { label: 'Company', route: 'about' },
            { label: 'Company Heritage & History' }
          ]}
        />

        {/* Hero Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-mocha-900/90 border border-gold/40 px-3.5 py-1.5 rounded-full text-gold text-xs font-mono uppercase tracking-wider">
            <History className="w-3.5 h-3.5 text-amber" />
            <span>Over 35 Years of Texas Metalworking</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl text-gold-100 font-bold leading-tight">
            The Heritage of Jay-Co: Houston Roots Since 1988
          </h1>

          <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-sans">
            Our company story is not a corporate fable manufactured by branding agencies. It is the history of hard-working coppersmiths, heavy sheet metal brakes, and decades of roofing installations across Greater Houston.
          </p>
        </div>

        {/* Timeline & Heritage Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-8 space-y-10">
            {/* Heritage Narrative 1: Founding & Knight Street Anchor */}
            <div className="border-l-2 border-gold pl-6 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-gold">
                1988 — The Inception of Metalcraft
              </span>
              <h2 className="font-serif text-2xl text-gold-100 font-bold">
                The Knight Street Fabrication Anchor & Hydraulic Metal Brakes
              </h2>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Founded with a core focus on architectural sheet metal and roofing craftsmanship, Jay-Co established its workshop at <strong className="text-gold-100">2307 Knight St in Houston, Texas</strong>. Equipped with dedicated 10-foot and 12-foot industrial sheet metal folding brakes, hydraulic shears, and coppersmithing benches, Jay-Co provided the heavy-gauge custom brake metalwork and architectural flashings that standard shingle contractors could not execute. In an era when Houston's premier neighborhoods—River Oaks, Memorial, and West University Place—were constructing grand architectural manors, our Knight St facility became the go-to shop for precision fabrication.
              </p>
            </div>

            {/* Heritage Narrative 2: Passing Down Coppersmithing Traditions */}
            <div className="border-l-2 border-gold pl-6 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-gold">
                Generational Continuity
              </span>
              <h2 className="font-serif text-2xl text-gold-100 font-bold">
                Preserving Hand-Soldering Artistry
              </h2>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                As mass production swept the construction industry, hand-soldering copper became a dying art in Texas. Jay-Co steadfastly maintained traditional coppersmithing benches at the Knight St shop. Our craftsmen continued to fold flat lock seams, hand-tin copper edges, and sweated-solder 50/50 virgin lead-tin alloy joints for bay window roofs, copper dormers, and masonry crickets—creating permanent, monolithic barriers that have lasted for decades without leaking.
              </p>
            </div>

            {/* Heritage Narrative 3: Modern Engineering & GAF Standards */}
            <div className="border-l-2 border-gold pl-6 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-gold">
                Modern Evolution
              </span>
              <h2 className="font-serif text-2xl text-gold-100 font-bold">
                GAF Certified™ Network & Municipal Permitting
              </h2>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Adapting to stricter Texas Gulf Coast windstorm codes and frequent hurricane events, Jay-Co formalized manufacturer partnerships, earning verified <strong className="text-gold-100">GAF Certified™ Residential Contractor standing (ID: 1132527)</strong>. This certification combined our shop metalwork with factory-warranted GAF Lifetime roofing systems, providing homeowners in enclaves like Bunker Hill Village (as documented in Permit #20220639) with verifiable municipal compliance and 50-year warranty eligibility.
              </p>
            </div>
          </div>

          {/* Sidebar Fact Box (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-mocha-900/90 border border-gold/30 rounded-xl p-6 space-y-4 shadow-xl">
              <h3 className="font-serif font-bold text-lg text-gold-100 border-b border-mocha-800/80 pb-2">
                Heritage Verification Record
              </h3>
              <div className="space-y-3 text-xs font-mono">
                <div>
                  <span className="text-stone-500 block text-[10px]">FOUNDING ERA</span>
                  <span className="text-gold font-bold">Circa 1988 (35+ Years Active)</span>
                </div>
                <div>
                  <span className="text-stone-500 block text-[10px]">CONTINUOUS FACILITY</span>
                  <span className="text-gold-100">2307 Knight St, Houston, TX 77093</span>
                </div>
                <div>
                  <span className="text-stone-500 block text-[10px]">LEGAL ENTITY</span>
                  <span className="text-gold-100">Jay-Co Enterprises, LLC</span>
                </div>
                <div>
                  <span className="text-stone-500 block text-[10px]">GAF CONTRACTOR ID</span>
                  <span className="text-gold font-bold">1132527 (GAF Certified™)</span>
                </div>
                <div>
                  <span className="text-stone-500 block text-[10px]">DOCUMENTED PERMIT</span>
                  <span className="text-emerald-400 font-bold">Bunker Hill Village #20220639</span>
                </div>
              </div>
            </div>

            <div className="bg-mocha-900/90 border border-gold/40 rounded-xl p-6 text-center space-y-3 shadow-xl">
              <h4 className="font-serif font-bold text-gold-100 text-base">
                Experience Hand-Crafted Roofing
              </h4>
              <p className="text-xs text-stone-400">
                Work directly with seasoned Texas metal artisans and certified installers.
              </p>
              <button
                onClick={() => openQuoteModal()}
                className="w-full bg-amber hover:bg-amber-light text-mocha-950 font-bold py-2.5 rounded-md text-xs uppercase tracking-wider transition-all shadow-amber"
              >
                Request Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
