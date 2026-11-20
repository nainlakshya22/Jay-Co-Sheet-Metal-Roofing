import React from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { ArrowRight, Sparkles, ShieldCheck, Hammer, Layers, Award } from 'lucide-react';

export const EditorialPosterBanner: React.FC = () => {
  const { openQuoteModal, navigateTo } = useNavigation();

  const ARCHITECTURAL_PILLARS = [
    {
      icon: Hammer,
      title: 'In-Shop CNC Brake',
      subtitle: 'Custom Fabrication',
      desc: 'Precision double-lock standing seams, custom dormers, and radiused flashings formed in-house.'
    },
    {
      icon: Layers,
      title: '16-oz Copper & 24ga Steel',
      subtitle: 'Architectural Alloys',
      desc: 'Cold-rolled solid copper, VMZinc, and Kynar 500® PVDF-coated steel built for multi-decade life.'
    },
    {
      icon: Award,
      title: '140+ MPH Wind Rating',
      subtitle: 'Engineered Anchoring',
      desc: 'Concealed thermal clip systems engineered to meet Texas Department of Insurance windstorm codes.'
    }
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-mocha-950 overflow-hidden border-y border-mocha-800">
      {/* Cinematic Golden Light Sweep & Radial Ambient Atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[700px] h-[500px] bg-gold/10 rounded-full blur-[140px] animate-ambient-glow" />
        <div className="absolute bottom-0 right-10 w-[500px] h-[400px] bg-amber/10 rounded-full blur-[120px]" />
        
        {/* Subtle Diagonal Architectural Golden Light Bleed */}
        <div className="absolute -top-32 -right-32 w-96 h-[800px] bg-gradient-to-b from-gold/12 via-amber/6 to-transparent rotate-12 blur-2xl pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Top Editorial Magazine Line */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-12 border-b border-gold/20 text-xs font-mono uppercase tracking-[0.25em] text-stone-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber animate-pulse" />
            <span className="text-gold font-semibold">Architectural Edition • Vol. 1988</span>
          </div>
          <div className="hidden sm:flex items-center gap-6">
            <span>Houston, Texas</span>
            <span>•</span>
            <span>2307 Knight St Brake Facility</span>
            <span>•</span>
            <span className="text-gold">GAF Certified™ #1132527</span>
          </div>
        </div>

        {/* Master Asymmetric Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Typography & Brand Narrative */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-mocha-900 border border-gold/30 rounded-full text-[11px] font-mono tracking-widest uppercase text-gold">
                <Sparkles className="w-3.5 h-3.5 text-amber" />
                <span>The Art of Architectural Metal</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-ivory font-bold leading-[1.12] tracking-tight">
                THE ART OF <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-amber">
                  ARCHITECTURAL METAL.
                </span>
              </h2>

              <p className="font-serif italic text-lg sm:text-xl text-gold-muted leading-relaxed">
                "Precision craftsmanship. Timeless architectural character."
              </p>
            </div>

            <p className="text-sm sm:text-base text-stone-300 leading-relaxed max-w-xl font-sans">
              Hand-fabricated custom metalwork shaped on heavy mechanical brakes inside our 2307 Knight Street facility. From 16-ounce cold-rolled copper dormers and standing seam roofing to bespoke chimney shrouds, every piece is sculpted to withstand Gulf Coast weather while elevating luxury estates to museum-grade beauty.
            </p>

            {/* Architectural Craftsmanship Standards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {ARCHITECTURAL_PILLARS.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="p-4 rounded-xl bg-mocha-900/90 border border-mocha-800 hover:border-gold/50 shadow-luxury transition-all duration-300 group hover:-translate-y-0.5"
                  >
                    <div className="w-8 h-8 rounded-lg bg-mocha-850 border border-gold/30 flex items-center justify-center mb-3 text-gold group-hover:text-amber transition-colors">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-amber block mb-1">
                      {pillar.subtitle}
                    </span>
                    <h4 className="font-serif font-bold text-sm text-ivory group-hover:text-gold transition-colors mb-1.5 leading-snug">
                      {pillar.title}
                    </h4>
                    <p className="text-[11px] text-stone-400 leading-relaxed font-sans">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Editorial CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => openQuoteModal({ service: 'Architectural Sheet Metal Fabrication' })}
                className="w-full sm:w-auto amber-button-glow font-bold px-8 py-4 rounded-sm text-xs uppercase tracking-widest flex items-center justify-center gap-2.5 relative-shimmer group"
              >
                <span>Consult Our Artisans</span>
                <ArrowRight className="w-4 h-4 text-mocha-950 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => navigateTo('architectural-metal')}
                className="w-full sm:w-auto bg-mocha-900/90 hover:bg-mocha-850 text-gold-light border border-gold/40 hover:border-gold font-medium px-8 py-4 rounded-sm text-xs uppercase tracking-widest transition-all duration-300 gold-border-glow"
              >
                <span>View Sheet Metal Division</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Poster Composition with Metallic Lighting */}
          <div className="lg:col-span-5 relative">
            
            {/* Outer Luxury Framing Card */}
            <div className="relative rounded-sm overflow-hidden border border-gold/40 bg-mocha-900 shadow-luxury group active-shimmer">
              
              {/* Architectural Metal Roofing Photography */}
              <div className="relative h-[480px] sm:h-[560px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
                  alt="Jay-Co Handcrafted Standing Seam and Architectural Copper Roofing"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Layered Golden-Hour Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-mocha-950 via-mocha-950/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-mocha-950/50 via-transparent to-mocha-950/20" />
                
                {/* Floating Architectural Badge */}
                <div className="absolute top-4 left-4 bg-mocha-950/90 backdrop-blur-md border border-gold/40 px-3 py-1.5 rounded text-xs font-mono text-gold flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber" />
                  <span>Kynar 500® & 16-oz Copper</span>
                </div>

                {/* Bottom Poster Caption Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-mocha-950 via-mocha-950/90 to-transparent">
                  <span className="text-[10px] font-mono tracking-widest text-amber uppercase block mb-1">
                    Houston Estate Installation
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-ivory font-bold mb-1">
                    Bespoke Standing Seam & Soldered Copper
                  </h3>
                  <p className="text-xs text-stone-300 leading-relaxed font-sans">
                    Hand-locked double folds and continuous hidden clip anchoring designed for 140+ MPH hurricane wind uplift.
                  </p>
                </div>
              </div>

              {/* Gold Framing Accent Corners */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-gold pointer-events-none" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-gold pointer-events-none" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-gold pointer-events-none" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-gold pointer-events-none" />
            </div>

            {/* Architectural Floating Specification Card */}
            <div className="absolute -bottom-6 -left-6 hidden sm:block bg-mocha-900/95 backdrop-blur-md border border-gold/40 p-4 rounded-sm shadow-gold-lg max-w-xs animate-fadeIn">
              <div className="flex items-center gap-2 text-gold font-serif font-bold text-sm mb-1">
                <span>In-Shop Heavy Brake</span>
              </div>
              <p className="text-[11px] text-stone-300 leading-tight">
                2307 Knight St facility allows custom tapering, radiused standing seams, and zero-leak soldering.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
