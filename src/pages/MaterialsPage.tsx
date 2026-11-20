import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { MaterialsShowcase } from '../components/home/MaterialsShowcase';
import { Layers, ShieldCheck, Flame, Sun, Wind, Check, ArrowRight } from 'lucide-react';

export const MaterialsPage: React.FC = () => {
  const { openQuoteModal } = useNavigation();

  return (
    <div className="py-12 sm:py-16 bg-mocha-950 text-stone-300 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <Breadcrumbs items={[{ label: 'Materials & Metallurgy' }]} />

        {/* Hero Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-mocha-900/90 border border-gold/40 px-3.5 py-1.5 rounded-full text-gold text-xs font-mono uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5 text-amber" />
            <span>Architectural Metallurgy Standards</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl text-gold-100 font-bold leading-tight">
            Materials, Alloys & Gulf Coast Engineering Specifications
          </h1>

          <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-sans">
            Every architectural metal and roofing material installed by Jay-Co is selected to withstand Houston's extreme UV solar radiation, sudden tropical downpours, and severe hurricane wind uplifts.
          </p>
        </div>

        {/* Interactive Materials Showcase Module */}
        <div className="mb-20">
          <MaterialsShowcase />
        </div>

        {/* Detailed Metallurgy Comparison Table */}
        <div className="space-y-6 mb-20">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-gold">
              Comparative Analysis
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-gold-100 font-bold mt-1">
              Material Engineering & Performance Matrix
            </h2>
          </div>

          <div className="overflow-x-auto bg-mocha-900/90 border border-gold/30 rounded-xl shadow-xl">
            <table className="w-full text-xs text-left">
              <thead className="bg-mocha-950 text-gold font-mono uppercase tracking-wider border-b border-mocha-800">
                <tr>
                  <th className="py-4 px-4">Material System</th>
                  <th className="py-4 px-4">Expected Lifespan</th>
                  <th className="py-4 px-4">Wind Rating</th>
                  <th className="py-4 px-4">Fire Rating</th>
                  <th className="py-4 px-4">Solar Reflectance</th>
                  <th className="py-4 px-4">Houston Specialty Application</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-mocha-800/80 text-stone-300 font-sans">
                <tr className="hover:bg-mocha-850/60 transition-colors">
                  <td className="py-4 px-4 font-serif font-bold text-gold-100">
                    16/20-oz Cold-Rolled Copper
                  </td>
                  <td className="py-4 px-4 font-mono text-gold font-bold">100+ Years</td>
                  <td className="py-4 px-4">150+ MPH</td>
                  <td className="py-4 px-4 text-emerald-400">Class A Non-Combustible</td>
                  <td className="py-4 px-4">High Thermal Dissipation</td>
                  <td className="py-4 px-4">Bay windows, copper dormers, chimney crickets, half-round gutters</td>
                </tr>
                <tr className="hover:bg-mocha-850/60 transition-colors">
                  <td className="py-4 px-4 font-serif font-bold text-gold-100">
                    24-Ga Galvalume Standing Seam
                  </td>
                  <td className="py-4 px-4 font-mono text-gold font-bold">50+ Years</td>
                  <td className="py-4 px-4">140+ MPH (UL 580)</td>
                  <td className="py-4 px-4 text-emerald-400">UL Class A</td>
                  <td className="py-4 px-4">Up to 70% (Kynar 500)</td>
                  <td className="py-4 px-4">Concealed-clip residential roofing, modern Hill Country estates</td>
                </tr>
                <tr className="hover:bg-mocha-850/60 transition-colors">
                  <td className="py-4 px-4 font-serif font-bold text-gold-100">
                    Vermont S-1 Natural Slate
                  </td>
                  <td className="py-4 px-4 font-mono text-gold font-bold">75 - 100+ Years</td>
                  <td className="py-4 px-4">130+ MPH</td>
                  <td className="py-4 px-4 text-emerald-400">Class A Natural Stone</td>
                  <td className="py-4 px-4">High Thermal Mass</td>
                  <td className="py-4 px-4">European manor architecture, historic River Oaks estates</td>
                </tr>
                <tr className="hover:bg-mocha-850/60 transition-colors">
                  <td className="py-4 px-4 font-serif font-bold text-gold-100">
                    GAF Timberline HDZ® Shingles
                  </td>
                  <td className="py-4 px-4 font-mono text-gold font-bold">25 - 30+ Years</td>
                  <td className="py-4 px-4">WindProven™ Infinite</td>
                  <td className="py-4 px-4 text-emerald-400">UL Class A</td>
                  <td className="py-4 px-4">Standard Reflectance</td>
                  <td className="py-4 px-4">GAF System Plus residential re-roofing, Memorial Village estates</td>
                </tr>
                <tr className="hover:bg-mocha-850/60 transition-colors">
                  <td className="py-4 px-4 font-serif font-bold text-gold-100">
                    SBS Modified Bitumen Flat Membrane
                  </td>
                  <td className="py-4 px-4 font-mono text-gold font-bold">20 - 25+ Years</td>
                  <td className="py-4 px-4">High Uplift Resistance</td>
                  <td className="py-4 px-4 text-emerald-400">UL Class A Cap Sheet</td>
                  <td className="py-4 px-4">Bright White Granules</td>
                  <td className="py-4 px-4">Second-story walk-out balconies, outdoor terrace waterproofing</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Consultation Callout */}
        <div className="bg-mocha-900/90 border border-gold/30 rounded-xl p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-4 shadow-xl">
          <h3 className="font-serif text-2xl text-gold-100 font-bold">
            Need Guidance on the Right Architectural Material?
          </h3>
          <p className="text-xs sm:text-sm text-stone-300">
            Our fabrication specialists can provide physical metal samples, copper finish swatches, and structural load assessments for your residence.
          </p>
          <button
            onClick={() => openQuoteModal({ service: 'Material Consultation & Samples' })}
            className="bg-amber hover:bg-amber-light text-mocha-950 font-bold px-6 py-3 rounded-md shadow-amber text-xs uppercase tracking-wider transition-all"
          >
            Request Material Consultation
          </button>
        </div>
      </div>
    </div>
  );
};
