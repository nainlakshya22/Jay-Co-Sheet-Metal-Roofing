import React from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { COMPANY_INFO } from '../../data/companyData';
import { Hammer, ShieldCheck, Flame, Compass, ArrowRight } from 'lucide-react';

export const CompanyIntro: React.FC = () => {
  const { navigateTo, openQuoteModal } = useNavigation();

  return (
    <section className="py-20 lg:py-28 bg-mocha-950 text-stone-300 relative overflow-hidden">
      {/* Subtle Ambient Background Light */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Editorial 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-8 h-[1px] bg-gold" />
              <span className="text-xs font-mono uppercase tracking-wider text-gold font-semibold">
                Houston Fabrication Authority
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory font-bold leading-[1.16]">
              Where Heavy Metal Machinery Meets Architectural Precision.
            </h2>

            <p className="text-base sm:text-lg text-stone-200 leading-[1.75] font-sans">
              Most roofing companies operate as sales brokers—outsourcing fabrication to generic supply houses. At Jay-Co Sheet Metal & Roofing, we operate our own full-scale architectural sheet metal facility at <strong className="text-gold font-medium">2307 Knight St in Houston, Texas</strong>.
            </p>

            <p className="text-base sm:text-lg text-stone-300 leading-[1.75]">
              Equipped with industrial bending brakes, shear cutters, and precision roll-formers, our coppersmiths and sheet metal artisans fabricate every custom standing seam panel, soldered chimney cap, continuous copper gutter, and wall coping to the exact millimeter dimensions of your architectural blueprints.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <button
                onClick={() => navigateTo('architectural-metal')}
                className="bg-mocha-900 hover:bg-mocha-850 border border-gold/40 hover:border-gold text-gold-light hover:text-gold font-semibold px-6 py-3.5 rounded-sm text-xs uppercase tracking-wider transition-all inline-flex items-center gap-2 gold-border-glow shadow-sm"
              >
                <span>Tour Our Fabrication Facility</span>
                <ArrowRight className="w-4 h-4 text-amber" />
              </button>

              <button
                onClick={() => navigateTo('about')}
                className="text-stone-300 hover:text-gold px-4 py-3.5 text-xs uppercase tracking-wider font-semibold transition-colors"
              >
                About Our Heritage →
              </button>
            </div>
          </div>

          {/* Right Architectural Image Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded overflow-hidden border border-gold/30 shadow-luxury group">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
                alt="Jay-Co Sheet Metal Fabrication Shop"
                className="w-full h-[420px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-mocha-950 via-mocha-950/20 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 bg-mocha-950/95 backdrop-blur-md border border-gold/30 p-5 rounded">
                <span className="text-xs font-mono text-gold uppercase tracking-wider block mb-1">
                  Shop Address: 2307 Knight St, Houston, TX 77093
                </span>
                <p className="text-sm text-stone-200 font-sans leading-relaxed">
                  In-house shearing and brake-forming of 24-ga Galvalume, 16/20-oz cold-rolled copper, stainless steel, and heavy aluminum.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Craftsmanship Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Hammer,
              title: 'In-House Shop Fabrication',
              desc: 'Custom-sheared and brake-bent at our Knight St facility. No generic pre-stamped store flashings.'
            },
            {
              icon: Flame,
              title: 'Hand-Soldered Copper Mastery',
              desc: 'Permanent metallurgical fusion on flat lock seams, bay windows, and crickets outlasting caulking by decades.'
            },
            {
              icon: Compass,
              title: 'Concealed-Fastener Engineering',
              desc: 'Mechanical lock standing seam systems with floating thermal expansion clips rated for 140+ MPH winds.'
            },
            {
              icon: ShieldCheck,
              title: 'GAF Certified™ Standard',
              desc: 'Factory-audited residential installations under Contractor ID #1132527 with System Plus warranty eligibility.'
            }
          ].map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 bg-mocha-900 border border-mocha-800 rounded hover:border-gold/50 transition-all duration-300 space-y-3.5 hover:-translate-y-1 hover:shadow-luxury group"
              >
                <div className="w-11 h-11 rounded bg-mocha-850 border border-gold/30 flex items-center justify-center text-amber group-hover:border-gold transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-ivory group-hover:text-gold transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-stone-300 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
