import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { COMPANY_INFO } from '../data/companyData';
import { 
  Hammer, 
  ShieldCheck, 
  MapPin, 
  Award, 
  Flame, 
  Compass, 
  ArrowRight,
  Phone,
  FileCheck
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { navigateTo, openQuoteModal } = useNavigation();

  return (
    <div className="py-12 sm:py-16 bg-charcoal-950 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <Breadcrumbs items={[{ label: 'About Jay-Co' }]} />

        {/* Hero Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-charcoal-900 border border-copper/50 px-3.5 py-1.5 rounded-full text-copper text-xs font-mono uppercase tracking-wider">
            <Hammer className="w-3.5 h-3.5" />
            <span>Houston Architectural Authority</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl text-ivory font-bold leading-tight">
            Old-World Sheet Metal Artistry. Gulf Coast Engineering.
          </h1>

          <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-sans">
            Operating from our physical fabrication shop at <strong>2307 Knight St in Houston, Texas</strong>, Jay-Co Sheet Metal & Roofing (Jay-Co Enterprises, LLC) bridges the gap between historical coppersmith traditions and hurricane-rated modern roofing systems.
          </p>
        </div>

        {/* 2-Column Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-serif text-2xl sm:text-3xl text-ivory font-bold">
              The Knight Street Fabrication Advantage
            </h2>

            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              In an era when most roofing contractors have abandoned hands-on craftsmanship to become sales marketing brokers who subcontract all labor and buy pre-fabricated flashings from supply yards, Jay-Co maintains a dedicated in-house sheet metal facility.
            </p>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              Equipped with 10-foot mechanical bending brakes, precision shears, and soldering stations, our artisans fabricate every component to match the unique dimensions of each roof. Whether brake-forming 24-gauge standing seam metal panels or hand-soldering copper bay window caps, we control the entire fabrication and installation sequence.
            </p>

            <div className="bg-charcoal-900 border border-charcoal-800 p-4 rounded text-xs space-y-2">
              <div className="flex items-center gap-2 text-ivory font-semibold">
                <ShieldCheck className="w-4 h-4 text-copper" />
                <span>Verified GAF Certified™ Contractor #1132527</span>
              </div>
              <p className="text-stone-400">
                Audited manufacturer installation standards qualifying residential homeowners for enhanced GAF factory warranties across Houston.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="rounded overflow-hidden border border-charcoal-800 shadow-elevated">
              <img
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
                alt="Jay-Co Hand Soldered Copper Detailing"
                className="w-full h-[400px] object-cover"
              />
              <div className="p-4 bg-charcoal-900 text-xs text-stone-400 border-t border-charcoal-800 flex items-center justify-between">
                <span>Hand-Soldered Architectural Copper Craft</span>
                <span className="text-copper font-mono">2307 Knight St Shop</span>
              </div>
            </div>
          </div>
        </div>

        {/* Company Principles & Factual Integrity */}
        <div className="bg-charcoal-900 border border-charcoal-800 rounded p-8 sm:p-12 mb-20 space-y-6">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-copper">
              Core Principles
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-ivory font-bold mt-1">
              Factual Transparency & Proven Municipal Records
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 mt-2 leading-relaxed">
              We hold ourselves to strict standards of truthfulness in an industry plagued by exaggerated marketing:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-5 bg-charcoal-950 border border-charcoal-800 rounded space-y-2">
              <FileCheck className="w-5 h-5 text-copper" />
              <h4 className="font-serif font-bold text-sm text-ivory">Verifiable Building Permits</h4>
              <p className="text-xs text-stone-400 leading-relaxed">
                We document real project history through public municipal records—such as our City of Bunker Hill Village Permit #20220639 (11838 Brandywine Ln, valuation $23,752).
              </p>
            </div>

            <div className="p-5 bg-charcoal-950 border border-charcoal-800 rounded space-y-2">
              <Award className="w-5 h-5 text-copper" />
              <h4 className="font-serif font-bold text-sm text-ivory">Accurate Credentials</h4>
              <p className="text-xs text-stone-400 leading-relaxed">
                We hold verified GAF Certified™ Residential status (ID: 1132527). We never misrepresent higher unverified designations or claim unearned affiliations.
              </p>
            </div>

            <div className="p-5 bg-charcoal-950 border border-charcoal-800 rounded space-y-2">
              <Hammer className="w-5 h-5 text-copper" />
              <h4 className="font-serif font-bold text-sm text-ivory">Authentic Craft Infrastructure</h4>
              <p className="text-xs text-stone-400 leading-relaxed">
                We maintain active machinery, shears, and soldering benches at 2307 Knight St rather than presenting virtual offices or stock photos of models as our team.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center max-w-xl mx-auto space-y-4">
          <h3 className="font-serif text-2xl text-ivory font-bold">
            Ready to Discuss Your Architectural Project?
          </h3>
          <p className="text-xs text-stone-400">
            Consult with our senior estimating team for standing seam, copper, or GAF re-roofing.
          </p>
          <div className="flex items-center justify-center gap-3 pt-2">
            <button
              onClick={() => openQuoteModal()}
              className="bg-copper hover:bg-copper-light text-charcoal-950 font-bold px-6 py-3 rounded-sm shadow-copper text-xs uppercase tracking-wider transition-all"
            >
              Request Consultation
            </button>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="bg-charcoal-900 hover:bg-charcoal-850 border border-charcoal-700 text-ivory px-6 py-3 rounded-sm text-xs uppercase tracking-wider font-semibold transition-colors"
            >
              Call {COMPANY_INFO.phoneFormatted}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
