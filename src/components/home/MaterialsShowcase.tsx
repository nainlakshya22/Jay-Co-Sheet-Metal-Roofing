import React, { useState } from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { Layers, ShieldCheck, Sun, Wind, Flame, Check, ArrowRight } from 'lucide-react';

interface MaterialTab {
  id: string;
  name: string;
  gauge: string;
  category: string;
  image: string;
  description: string;
  lifespan: string;
  windRating: string;
  fireRating: string;
  houstonAdvantage: string;
  specs: { label: string; value: string }[];
}

const MATERIAL_TABS: MaterialTab[] = [
  {
    id: 'copper',
    name: '16-oz & 20-oz Cold-Rolled Natural Copper',
    gauge: '0.0216\" & 0.0270\" Solid Copper Alloy',
    category: 'The Noble Architectural Metal',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    description: 'The premier material for generational permanence. Copper develops an impervious verdigris patina that self-heals against atmospheric oxidation. Hand-soldered flat seams create 100% watertight barriers.',
    lifespan: '100+ Years',
    windRating: 'Severe Hurricane Uplift Rated',
    fireRating: 'Class A Non-Combustible',
    houstonAdvantage: 'High Gulf Coast atmospheric humidity accelerates the natural verdigris patina, developing dark bronze within 2 years and jade verdigris in 12-15 years.',
    specs: [
      { label: 'ASTM Standard', value: 'ASTM B370 Architectural Copper' },
      { label: 'Joining Method', value: '50/50 Hand-Soldered Lock Seams' },
      { label: 'Fasteners', value: 'Solid Copper Cleats (Concealed)' },
      { label: 'Maintenance', value: 'Zero Painting or Sealing Required' }
    ]
  },
  {
    id: 'standing-seam',
    name: '24-Gauge Galvalume Steel (Kynar 500®)',
    gauge: '24-Gauge AZ50 / AZ55 Substrate',
    category: 'Engineered Storm Resistance',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    description: 'Concealed-clip standing seam panels with 70% PVDF resin finish. Mechanical double-lock or snap-lock seams engineered with sliding expansion clips allowing metal movement during extreme Texas heat.',
    lifespan: '50+ Years',
    windRating: '140+ MPH Hurricane Rated (UL 580)',
    fireRating: 'UL Class A Fire Rating',
    houstonAdvantage: 'Kynar 500 solar-reflective pigments reflect up to 70% of infrared solar radiation, lowering attic temperatures by up to 35°F during Houston summers.',
    specs: [
      { label: 'Seam Height', value: '1.5\" to 2.0\" Double Lock' },
      { label: 'Finish Warranty', value: '30-40 Year Non-Chalking Finish' },
      { label: 'Impact Rating', value: 'UL 2218 Class 4 (Hail Resistant)' },
      { label: 'Expansion Type', value: 'Floating Stainless Steel Clips' }
    ]
  },
  {
    id: 'slate',
    name: 'Natural S-1 Vermont Roofing Slate',
    gauge: '1/4\" - 3/8\" Genuine Quarried Stone',
    category: 'Historic European Grandeur',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
    description: 'Authentic Vermont quarried natural slate, split by hand for rich stone cleft texture. Installed over reinforced solid wood decking with solid copper slating nails and heavy copper valleys.',
    lifespan: '75 to 100+ Years',
    windRating: '130+ MPH Wind Resistance',
    fireRating: 'Class A Non-Combustible Stone',
    houstonAdvantage: 'High thermal mass acts as a natural insulator, shielding living spaces from radiant thermal transfer while resisting torrential tropical downpours.',
    specs: [
      { label: 'Slate Grade', value: 'ASTM C406 S-1 (Unfading)' },
      { label: 'Fastening', value: 'Solid Copper Slating Nails' },
      { label: 'Valleys', value: '16-oz Open Copper Valleys' },
      { label: 'Headlap', value: '3\" Minimum Mechanical Lap' }
    ]
  },
  {
    id: 'shingle',
    name: 'GAF Timberline HDZ® Architectural Shingles',
    gauge: 'Heavyweight Fiberglass Asphalt Matrix',
    category: 'GAF Certified™ Residential Value',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
    description: 'North America\'s #1 architectural shingle installed by GAF Certified™ Contractor #1132527. Features LayerLock™ StrikeZone fastening technology and StainGuard Plus algae protection.',
    lifespan: '25 - 30+ Years',
    windRating: 'WindProven™ Infinite Wind Speed',
    fireRating: 'UL Class A Highest Rating',
    houstonAdvantage: 'StainGuard Plus time-release copper microcapsules prevent cyanobacteria black algae stains common in Houston\'s humid subtropical climate.',
    specs: [
      { label: 'Contractor ID', value: 'GAF Certified #1132527' },
      { label: 'Warranty Tier', value: 'GAF System Plus Factory Backed' },
      { label: 'Nailing Standard', value: '6-Nail Hurricane Pattern' },
      { label: 'Adhesive Tech', value: 'Dura Grip™ Heat-Activated Seal' }
    ]
  }
];

export const MaterialsShowcase: React.FC = () => {
  const { navigateTo, openQuoteModal } = useNavigation();
  const [activeTabId, setActiveTabId] = useState<string>('copper');

  const activeMaterial = MATERIAL_TABS.find(t => t.id === activeTabId) || MATERIAL_TABS[0];

  return (
    <section className="py-20 lg:py-28 bg-mocha-950 border-t border-mocha-800 text-stone-300 relative overflow-hidden">
      {/* Subtle Atmospheric Gold Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 border-b border-mocha-800 pb-8 mb-12">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="p-1.5 bg-mocha-900 text-gold rounded border border-gold/30">
                <Layers className="w-4 h-4 text-amber" />
              </span>
              <span className="text-xs font-mono uppercase tracking-wider text-gold font-semibold">
                Architectural Metallurgy
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ivory font-bold leading-tight">
              Premium Roofing & Metal Materials Showcase
            </h2>
            <p className="text-base sm:text-lg text-stone-300 leading-relaxed font-sans pt-1">
              Inspect the engineering specifications, chemical compositions, and Gulf Coast storm ratings of our core architectural materials.
            </p>
          </div>

          <button
            onClick={() => navigateTo('materials')}
            className="text-gold-light hover:text-gold text-xs uppercase tracking-wider font-semibold transition-colors border border-gold/40 hover:border-gold px-4 py-2.5 rounded bg-mocha-900 flex-shrink-0 gold-border-glow shadow-sm"
          >
            Explore Full Metallurgy Guide →
          </button>
        </div>

        {/* Material Selection Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 mb-10">
          {MATERIAL_TABS.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTabId(tab.id)}
              className={`p-4 sm:p-5 rounded text-left border transition-all duration-300 ${
                activeTabId === tab.id
                  ? 'bg-mocha-850 border-gold shadow-gold text-ivory'
                  : 'bg-mocha-900 border-mocha-800 hover:border-gold/40 text-stone-300'
              }`}
            >
              <span className="text-[11px] font-mono text-gold uppercase block mb-1">
                {tab.category}
              </span>
              <h4 className="font-serif font-bold text-sm sm:text-base text-ivory truncate">{tab.name}</h4>
              <span className="text-xs text-stone-400 block font-mono mt-1">{tab.gauge}</span>
            </button>
          ))}
        </div>

        {/* Selected Material Deep Dive Card */}
        <div className="bg-mocha-900 border border-gold/30 rounded p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center shadow-luxury">
          {/* Material Image */}
          <div className="lg:col-span-5 relative rounded overflow-hidden border border-mocha-800 h-80 sm:h-96 group">
            <img
              src={activeMaterial.image}
              alt={activeMaterial.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-mocha-950 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 bg-mocha-950/95 backdrop-blur-md p-3.5 rounded border border-gold/30">
              <span className="text-sm font-serif font-bold text-ivory block">{activeMaterial.name}</span>
              <span className="text-xs text-gold font-mono">{activeMaterial.gauge}</span>
            </div>
          </div>

          {/* Material Specifications & Performance */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-gold font-semibold">
                {activeMaterial.category}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-ivory font-bold mt-1.5 leading-snug">
                {activeMaterial.name}
              </h3>
              <p className="text-base text-stone-200 mt-3 leading-[1.75] font-sans">
                {activeMaterial.description}
              </p>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-3 text-xs bg-mocha-950 p-4 rounded border border-mocha-800 font-mono">
              <div>
                <span className="text-stone-400 block text-[11px]">LIFESPAN</span>
                <span className="text-gold font-bold text-sm sm:text-base">{activeMaterial.lifespan}</span>
              </div>
              <div>
                <span className="text-stone-400 block text-[11px]">WIND RATING</span>
                <span className="text-ivory font-bold text-sm sm:text-base">{activeMaterial.windRating}</span>
              </div>
              <div>
                <span className="text-stone-400 block text-[11px]">FIRE RATING</span>
                <span className="text-emerald-400 font-bold text-sm sm:text-base">{activeMaterial.fireRating}</span>
              </div>
            </div>

            {/* Houston Climate Advantage */}
            <div className="p-4 bg-mocha-950/80 border-l-2 border-amber rounded-r text-sm text-stone-200 space-y-1.5 leading-relaxed">
              <strong className="text-gold block font-mono text-xs uppercase tracking-wider">
                Houston Climate Engineering Consideration:
              </strong>
              <p>{activeMaterial.houstonAdvantage}</p>
            </div>

            {/* Technical Specs 2x2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              {activeMaterial.specs.map(s => (
                <div key={s.label} className="p-3 bg-mocha-950 rounded border border-mocha-800 flex justify-between items-center">
                  <span className="text-stone-400">{s.label}:</span>
                  <span className="text-gold-light font-mono font-medium">{s.value}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-2">
              <button
                onClick={() => openQuoteModal({ material: activeMaterial.name })}
                className="amber-button-glow font-bold px-7 py-3.5 rounded-sm text-xs uppercase tracking-wider inline-flex items-center gap-2 relative-shimmer group shadow-amber"
              >
                <span>Request Sample & Specification Quote</span>
                <ArrowRight className="w-4 h-4 text-mocha-950 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
