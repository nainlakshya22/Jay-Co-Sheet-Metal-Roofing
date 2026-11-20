import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { COMPANY_INFO } from '../data/companyData';
import { 
  Hammer, 
  Flame, 
  Wrench, 
  Compass, 
  Layers, 
  ShieldCheck, 
  ArrowRight,
  Maximize2 
} from 'lucide-react';

export const ArchitecturalMetalPage: React.FC = () => {
  const { navigateTo, openQuoteModal, openLightbox } = useNavigation();

  return (
    <div className="py-12 sm:py-16 bg-mocha-950 text-stone-300 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <Breadcrumbs
          items={[
            { label: 'Services', route: 'services' },
            { label: 'Architectural Sheet Metal Fabrication' }
          ]}
        />

        {/* Hero Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-mocha-900/90 border border-gold/40 px-3.5 py-1.5 rounded-full text-gold text-xs font-mono uppercase tracking-wider">
            <Hammer className="w-3.5 h-3.5 text-amber" />
            <span>2307 Knight Street Fabrication Facility</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl text-gold-100 font-bold leading-tight">
            Custom Architectural Sheet Metal & Coppersmithing
          </h1>

          <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-sans">
            In our Houston Knight St facility, raw coils of 16-oz and 20-oz cold-rolled copper, 24-gauge Galvalume, and architectural stainless steel are sheared, brake-folded, and hand-soldered into permanent building envelopes.
          </p>
        </div>

        {/* Shop Machinery & Facility Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-serif text-2xl sm:text-3xl text-gold-100 font-bold">
              Heavy Industrial Bending Brakes & Hydraulic Shearing
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              Precision architectural metalwork begins with true mechanical rigidity. We utilize 10-foot mechanical bending brakes capable of folding heavy 24-gauge and 22-gauge architectural alloys with razor-sharp hemmed drip edges and stiffening ribs.
            </p>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              By fabricating in-house, we eliminate field-spliced shortcuts, sloppy caulking joints, and thin mass-market flashings. Every flashing profile is custom-formed to the exact rake, valley, and parapet angle of your residence.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-mono">
              <div className="p-3 bg-mocha-900 border border-mocha-800 rounded-lg">
                <span className="text-stone-500 block text-[10px]">BRAKE CAPACITY</span>
                <span className="text-gold font-bold">Up to 10-Foot Continuous</span>
              </div>
              <div className="p-3 bg-mocha-900 border border-mocha-800 rounded-lg">
                <span className="text-stone-500 block text-[10px]">ALLOY CAPABILITY</span>
                <span className="text-gold-100 font-bold">Copper, Galvalume, Steel</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-xl overflow-hidden border border-gold/30 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
                alt="Jay-Co Shop Brake Machinery"
                className="w-full h-[400px] object-cover"
              />
              <div className="p-4 bg-mocha-900 border-t border-mocha-800 text-xs text-stone-400 flex justify-between">
                <span>Heavy Bending Brake in Action</span>
                <span className="text-gold font-mono">2307 Knight St Shop</span>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Custom Fabrication Specializations */}
        <div className="space-y-6 mb-20">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-gold">
              Shop Divisions
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-gold-100 font-bold mt-1">
              Custom Sheet Metal Capabilities
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Custom Copper Chimney Shrouds',
                desc: 'Arched European, pyramid, and classical radius chimney caps fabricated in 20-oz copper with stainless steel spark mesh.'
              },
              {
                title: 'Continuous Half-Round Gutters',
                desc: '6\" and 7\" seamless half-round cold-rolled copper and heavy aluminum gutters with cast brass fascia brackets.'
              },
              {
                title: 'Architectural Collector Heads & Scuppers',
                desc: 'Decorative conductor boxes regulating high-velocity rainwater flow while establishing distinctive architectural accents.'
              },
              {
                title: 'Hand-Soldered Bay Window Hoods',
                desc: 'Flat seam soldered copper panels forming an impenetrable monolithic metal roof over arched and rectangular bay windows.'
              },
              {
                title: 'Parapet Wall Coping & Gravel Stops',
                desc: 'Continuous cleated parapet caps with hemmed drip edges preventing water seepage down masonry and stucco walls.'
              },
              {
                title: 'Custom Copper Dormers & Louvers',
                desc: 'Bespoke dormer cladding, louvered ventilation grilles, and decorative finials built to architect blueprints.'
              }
            ].map(item => (
              <div
                key={item.title}
                className="p-6 bg-mocha-900/90 border border-mocha-800/80 rounded-xl hover:border-gold/40 transition-colors space-y-3 shadow-lg"
              >
                <div className="w-10 h-10 rounded-lg bg-mocha-950 border border-gold/30 flex items-center justify-center text-gold">
                  <Hammer className="w-5 h-5 text-amber" />
                </div>
                <h4 className="font-serif font-bold text-lg text-gold-100">{item.title}</h4>
                <p className="text-xs text-stone-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Conversion CTA */}
        <div className="bg-mocha-900/90 border border-gold/30 rounded-xl p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-4 shadow-xl">
          <h3 className="font-serif text-2xl sm:text-3xl text-gold-100 font-bold">
            Need Custom Metal Components Fabricated?
          </h3>
          <p className="text-xs sm:text-sm text-stone-300">
            Send us your architectural blueprints or consult with our shop estimators for custom brake work, copper caps, or gutter fabrication.
          </p>
          <div className="flex items-center justify-center gap-4 pt-2">
            <button
              onClick={() => openQuoteModal({ service: 'Custom Sheet Metal Fabrication' })}
              className="bg-amber hover:bg-amber-light text-mocha-950 font-bold px-6 py-3 rounded-md shadow-amber text-xs uppercase tracking-wider transition-all"
            >
              Request Fabrication Quote
            </button>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="bg-mocha-950 hover:bg-mocha-850 border border-gold/40 text-gold-100 px-6 py-3 rounded-md text-xs uppercase tracking-wider font-semibold transition-colors"
            >
              Call {COMPANY_INFO.phoneFormatted}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
