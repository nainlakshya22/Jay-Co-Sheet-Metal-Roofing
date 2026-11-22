import React, { useState } from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { SERVICE_AREAS, COMPANY_INFO } from '../../data/companyData';
import { MapPin, Navigation, FileCheck, ArrowRight } from 'lucide-react';
import { ServiceArea } from '../../types';

export const ServiceAreaMap: React.FC = () => {
  const { openQuoteModal } = useNavigation();
  const [selectedArea, setSelectedArea] = useState<ServiceArea>(SERVICE_AREAS[0]); // Default to Bunker Hill Village

  return (
    <div className="bg-mocha-900 border border-gold/30 rounded-sm shadow-luxury p-6 sm:p-10">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 border-b border-mocha-800 pb-8 mb-8">
        <div className="space-y-2 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="p-1.5 bg-mocha-850 text-gold rounded border border-gold/30">
              <MapPin className="w-4 h-4 text-amber" />
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-gold font-semibold">
              Verified Regional Coverage
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-ivory font-bold leading-tight">
            Houston Service Areas & Municipal Permitting Map
          </h2>
          <p className="text-base sm:text-lg text-stone-300 leading-relaxed font-sans pt-1">
            Operating from our Knight Street facility, Jay-Co provides storm-engineered roofing and custom metalwork across Houston's premier residential enclaves.
          </p>
        </div>
        <div className="text-right hidden md:block flex-shrink-0">
          <span className="text-xs text-stone-400 block font-mono">Central Fabrication Facility</span>
          <span className="text-xs text-gold font-medium font-mono">2307 Knight St, Houston, TX 77093</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Interactive District Selector / Visual Map (7 Cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="relative w-full h-[360px] sm:h-[420px] bg-mocha-950 border border-mocha-800 rounded p-4 flex flex-col justify-between overflow-hidden shadow-inner">
            {/* Visual Schematic Grid of Houston Metro with Warm Gold & Amber */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                    <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#F4D9A0" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
                <circle cx="50%" cy="50%" r="90" fill="none" stroke="#C8792C" strokeWidth="1" strokeDasharray="4 4" />
                <circle cx="50%" cy="50%" r="160" fill="none" stroke="#F4D9A0" strokeWidth="1" strokeDasharray="6 6" />
              </svg>
            </div>

            {/* Central Shop Anchor Pin */}
            <div className="absolute top-[28%] left-[55%] -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none text-center">
              <div className="w-8 h-8 rounded-full bg-amber text-mocha-950 font-bold flex items-center justify-center mx-auto shadow-amber border-2 border-gold animate-bounce">
                <Navigation className="w-4 h-4" />
              </div>
              <span className="bg-mocha-950 text-gold border border-gold/50 text-[10px] font-mono px-2 py-0.5 rounded shadow mt-1 inline-block whitespace-nowrap">
                Jay-Co Shop (2307 Knight St)
              </span>
            </div>

            {/* District Interactive Pins */}
            <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
              {SERVICE_AREAS.map(area => {
                const isSelected = selectedArea.name === area.name;
                const isBunkerHill = area.name.includes('Bunker Hill');
                return (
                  <button
                    key={area.name}
                    onClick={() => setSelectedArea(area)}
                    className={`p-2.5 rounded text-left transition-all border ${
                      isSelected
                        ? 'bg-mocha-850 border-gold shadow-gold text-ivory'
                        : 'bg-mocha-900/90 border-mocha-800 hover:border-gold/50 text-stone-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-serif font-bold text-ivory truncate">{area.name}</span>
                      {isBunkerHill && (
                        <FileCheck className="w-3.5 h-3.5 text-amber flex-shrink-0" title="Permit Documented" />
                      )}
                    </div>
                    <span className="text-[10px] text-stone-400 block font-mono">{area.zipCodes.join(', ')}</span>
                  </button>
                );
              })}
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1.5 sm:gap-0 text-[11px] font-mono text-stone-400 pt-3 border-t border-mocha-800 bg-mocha-950/90 px-2.5 py-1 rounded">
              <span className="flex items-center gap-1.5 text-gold">
                <FileCheck className="w-3.5 h-3.5 text-amber flex-shrink-0" />
                <span>Bunker Hill Village Permit #20220639 on File</span>
              </span>
              <span className="text-[10px] text-stone-400">Harris County Code Jurisdiction</span>
            </div>
          </div>
        </div>

        {/* Right: Selected District Intelligence Card (5 Cols) */}
        <div className="lg:col-span-5">
          <div className="bg-mocha-950 border border-gold/30 rounded p-6 sm:p-8 space-y-5 shadow-luxury">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-mono uppercase tracking-widest text-gold font-semibold">
                  {selectedArea.region}
                </span>
                <span className="text-xs font-mono text-stone-400">
                  {selectedArea.distanceFromShop}
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-ivory">
                {selectedArea.name}
              </h3>
              <p className="text-xs text-stone-400 font-mono mt-0.5">
                ZIP Codes: {selectedArea.zipCodes.join(', ')}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed border-t border-mocha-800 pt-3">
              {selectedArea.description}
            </p>

            <div className="space-y-2 text-xs bg-mocha-900 p-3.5 rounded border border-mocha-800">
              <div className="flex justify-between border-b border-mocha-800/80 pb-1.5">
                <span className="text-stone-400">Verification Status:</span>
                <span className="text-gold font-medium">{selectedArea.verifiedProjectsCount}</span>
              </div>
              <div className="pt-1">
                <span className="text-stone-400 block mb-1">Architectural Context:</span>
                <span className="text-stone-300">{selectedArea.notableArchitecture}</span>
              </div>
            </div>

            <button
              onClick={() => openQuoteModal({
                service: `Roofing & Metalwork Consultation for ${selectedArea.name}`,
                estimatedCostRange: `Location: ${selectedArea.name} (${selectedArea.zipCodes[0]})`
              })}
              className="w-full amber-button-glow font-bold py-3.5 px-6 rounded-sm text-xs uppercase tracking-wider flex items-center justify-center gap-2 relative-shimmer group"
            >
              <span>Consult On {selectedArea.name} Project</span>
              <ArrowRight className="w-4 h-4 text-mocha-950 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
