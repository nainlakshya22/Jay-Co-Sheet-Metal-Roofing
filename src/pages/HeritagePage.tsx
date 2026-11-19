import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { COMPANY_INFO } from '../data/companyData';
import { History, Award, CheckCircle, ShieldCheck, MapPin, ArrowRight } from 'lucide-react';

export const HeritagePage: React.FC = () => {
  const { navigateTo, openQuoteModal } = useNavigation();

  return (
    <div className="py-12 sm:py-16 bg-charcoal-950 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <Breadcrumbs
          items={[
            { label: 'Company', route: 'about' },
            { label: 'Company Heritage & History' }
          ]}
        />

        {/* Hero Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-charcoal-900 border border-copper/50 px-3.5 py-1.5 rounded-full text-copper text-xs font-mono uppercase tracking-wider">
            <History className="w-3.5 h-3.5" />
            <span>Over 35 Years of Texas Metalworking</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl text-ivory font-bold leading-tight">
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
            <div className="border-l-2 border-copper pl-6 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-copper">
                1988 — The Inception of Metalcraft
              </span>
              <h2 className="font-serif text-2xl text-ivory font-bold">
                The Knight Street Fabrication Anchor & Hydraulic Metal Brakes
              </h2>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Founded with a core focus on architectural sheet metal and roofing craftsmanship, Jay-Co established its workshop at <strong>2307 Knight St in Houston, Texas</strong>. Equipped with dedicated 10-foot and 12-foot industrial sheet metal folding brakes, hydraulic shears, and coppersmithing benches, Jay-Co provided the heavy-gauge custom brake metalwork and architectural flashings that standard shingle contractors could not execute. In an era when Houston's premier neighborhoods—River Oaks, Memorial, and West University Place—were constructing grand architectural manors, our Knight St facility became the go-to shop for precision fabrication.
              </p>
            </div>

            {/* Heritage Narrative 2: Passing Down Coppersmithing Traditions */}
            <div className="border-l-2 border-copper pl-6 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-copper">
                Generational Continuity
              </span>
              <h2 className="font-serif text-2xl text-ivory font-bold">
                Preserving Hand-Soldering Artistry
              </h2>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                As mass production swept the construction industry, hand-soldering copper became a dying art in Texas. Jay-Co steadfastly maintained traditional coppersmithing benches at the Knight St shop. Our craftsmen continued to fold flat lock seams, hand-tin copper edges, and sweated-solder 50/50 virgin lead-tin alloy joints for bay window roofs, copper dormers, and masonry crickets—creating permanent, monolithic barriers that have lasted for decades without leaking.
              </p>
            </div>

            {/* Heritage Narrative 3: Modern Engineering & GAF Standards */}
            <div className="border-l-2 border-copper pl-6 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-copper">
                Modern Evolution
              </span>
              <h2 className="font-serif text-2xl text-ivory font-bold">
                GAF Certified™ Network & Municipal Permitting
              </h2>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Adapting to stricter Texas Gulf Coast windstorm codes and frequent hurricane events, Jay-Co formalized manufacturer partnerships, earning verified <strong>GAF Certified™ Residential Contractor standing (ID: 1132527)</strong>. This certification combined our shop metalwork with factory-warranted GAF Lifetime roofing systems, providing homeowners in enclaves like Bunker Hill Village (as documented in Permit #20220639) with verifiable municipal compliance and 50-year warranty eligibility.
              </p>
            </div>
          </div>

          {/* Sidebar Fact Box (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-charcoal-900 border border-charcoal-800 rounded p-6 space-y-4">
              <h3 className="font-serif font-bold text-lg text-ivory border-b border-charcoal-800 pb-2">
                Heritage Verification Record
              </h3>
              <div className="space-y-3 text-xs font-mono">
                <div>
                  <span className="text-stone-500 block text-[10px]">FOUNDING ERA</span>
                  <span className="text-copper font-bold">Circa 1988 (35+ Years Active)</span>
                </div>
                <div>
                  <span className="text-stone-500 block text-[10px]">CONTINUOUS FACILITY</span>
                  <span className="text-ivory">2307 Knight St, Houston, TX 77093</span>
                </div>
                <div>
                  <span className="text-stone-500 block text-[10px]">LEGAL ENTITY</span>
                  <span className="text-ivory">Jay-Co Enterprises, LLC</span>
                </div>
                <div>
                  <span className="text-stone-500 block text-[10px]">GAF CONTRACTOR ID</span>
                  <span className="text-copper font-bold">1132527 (GAF Certified™)</span>
                </div>
                <div>
                  <span className="text-stone-500 block text-[10px]">DOCUMENTED PERMIT</span>
                  <span className="text-emerald-400 font-bold">Bunker Hill Village #20220639</span>
                </div>
              </div>
            </div>

            <div className="bg-charcoal-900 border border-copper/30 rounded p-6 text-center space-y-3">
              <h4 className="font-serif font-bold text-ivory text-base">
                Experience Hand-Crafted Roofing
              </h4>
              <p className="text-xs text-stone-400">
                Work directly with seasoned Texas metal artisans and certified installers.
              </p>
              <button
                onClick={() => openQuoteModal()}
                className="w-full bg-copper hover:bg-copper-light text-charcoal-950 font-bold py-2.5 rounded text-xs uppercase tracking-wider transition-all"
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
