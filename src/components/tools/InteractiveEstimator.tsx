import React, { useState, useMemo } from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { COMPANY_INFO } from '../../data/companyData';
import { Calculator, ArrowRight, ShieldAlert, Sparkles, Check, Info, RotateCcw } from 'lucide-react';

interface MaterialOption {
  id: string;
  name: string;
  tier: string;
  baseCostPerSqFtMin: number;
  baseCostPerSqFtMax: number;
  lifespan: string;
  windRating: string;
  description: string;
}

const DEFAULT_SQFT = 3500;
const DEFAULT_PITCH_MULT = 1.15;
const DEFAULT_PITCH_NAME = 'Standard Architectural (5:12 - 7:12)';
const DEFAULT_STORIES_MULT = 1.05;
const DEFAULT_STORIES_NAME = '2 Stories';
const DEFAULT_MATERIAL_ID = 'metal';

const MATERIALS: MaterialOption[] = [
  {
    id: 'shingle',
    name: 'GAF Timberline HDZ® Composition Shingles',
    tier: 'GAF Certified™ Residential',
    baseCostPerSqFtMin: 4.80,
    baseCostPerSqFtMax: 7.20,
    lifespan: '25 - 30+ Years',
    windRating: '130 - 150 MPH (LayerLock™)',
    description: 'High-definition architectural shingles backed by GAF factory System Plus warranty.'
  },
  {
    id: 'metal',
    name: '24-Gauge Galvalume Standing Seam (Kynar 500®)',
    tier: 'Architectural Concealed Fastener',
    baseCostPerSqFtMin: 11.50,
    baseCostPerSqFtMax: 16.50,
    lifespan: '50+ Years',
    windRating: '140+ MPH Hurricane Uplift',
    description: 'Concealed clip standing seam engineered for severe Gulf Coast storm exposure and solar cooling.'
  },
  {
    id: 'copper',
    name: 'Architectural Cold-Rolled Copper (16-oz / 20-oz)',
    tier: 'Old-World Coppersmith Heritage',
    baseCostPerSqFtMin: 22.00,
    baseCostPerSqFtMax: 34.00,
    lifespan: '100+ Years',
    windRating: 'Severe Hurricane Resistant',
    description: 'Shop-folded hand-soldered copper pans, dormers, and valleys developing natural verdigris patina.'
  },
  {
    id: 'slate',
    name: 'Natural Vermont Slate / Spanish Clay Tile',
    tier: 'Historic Heritage Stone & Tile',
    baseCostPerSqFtMin: 20.00,
    baseCostPerSqFtMax: 32.00,
    lifespan: '75 - 100+ Years',
    windRating: 'Class 4 Impact / Class A Fire',
    description: 'Genuine quarried S-1 slate and high-fired clay tiles installed with solid copper fasteners.'
  }
];

export const InteractiveEstimator: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const { openQuoteModal } = useNavigation();

  const [sqFt, setSqFt] = useState<number>(DEFAULT_SQFT);
  const [pitchMultiplier, setPitchMultiplier] = useState<number>(DEFAULT_PITCH_MULT);
  const [pitchName, setPitchName] = useState<string>(DEFAULT_PITCH_NAME);
  const [storiesMultiplier, setStoriesMultiplier] = useState<number>(DEFAULT_STORIES_MULT);
  const [storiesName, setStoriesName] = useState<string>(DEFAULT_STORIES_NAME);
  const [selectedMaterialId, setSelectedMaterialId] = useState<string>(DEFAULT_MATERIAL_ID);

  const resetDefaults = () => {
    setSqFt(DEFAULT_SQFT);
    setPitchMultiplier(DEFAULT_PITCH_MULT);
    setPitchName(DEFAULT_PITCH_NAME);
    setStoriesMultiplier(DEFAULT_STORIES_MULT);
    setStoriesName(DEFAULT_STORIES_NAME);
    setSelectedMaterialId(DEFAULT_MATERIAL_ID);
  };

  const selectedMaterial = useMemo(() => {
    return MATERIALS.find(m => m.id === selectedMaterialId) || MATERIALS[1];
  }, [selectedMaterialId]);

  const calculations = useMemo(() => {
    const safeSqFt = Math.max(1000, Math.min(15000, sqFt || 1000));
    const totalMultiplier = pitchMultiplier * storiesMultiplier;
    const minTotal = Math.round(safeSqFt * selectedMaterial.baseCostPerSqFtMin * totalMultiplier);
    const maxTotal = Math.round(safeSqFt * selectedMaterial.baseCostPerSqFtMax * totalMultiplier);

    const minPerSqFt = (minTotal / safeSqFt).toFixed(2);
    const maxPerSqFt = (maxTotal / safeSqFt).toFixed(2);

    return {
      safeSqFt,
      minTotal,
      maxTotal,
      minFormatted: minTotal.toLocaleString(),
      maxFormatted: maxTotal.toLocaleString(),
      minPerSqFt,
      maxPerSqFt
    };
  }, [sqFt, pitchMultiplier, storiesMultiplier, selectedMaterial]);

  const handleTransferToQuote = () => {
    openQuoteModal({
      service: selectedMaterial.name,
      material: selectedMaterial.name,
      estimatedSqFt: calculations.safeSqFt,
      estimatedCostRange: `$${calculations.minFormatted} – $${calculations.maxFormatted}`
    });
  };

  return (
    <div className="bg-mocha-900 border border-gold/30 rounded-sm shadow-luxury p-6 sm:p-10">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-mocha-800 pb-6 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="p-1.5 bg-mocha-850 text-gold rounded border border-gold/30">
              <Calculator className="w-4 h-4 text-amber" />
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-gold font-semibold">
              Interactive Planning Calculator
            </span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl text-ivory font-bold">
            Interactive Roof Investment Estimator
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <button
            id="estimator-reset-btn"
            onClick={resetDefaults}
            type="button"
            className="flex items-center gap-1.5 text-xs text-stone-300 hover:text-gold bg-mocha-850 hover:bg-mocha-800 border border-mocha-700 px-3 py-1.5 rounded transition-colors font-mono"
            title="Reset calculator inputs to default parameters"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset to Defaults</span>
          </button>
          <div className="text-right hidden md:block">
            <span className="text-xs text-stone-400 block font-mono">Houston Regional Benchmark</span>
            <span className="text-xs text-gold font-medium">GAF Certified™ Contractor #1132527</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Controls: Sliders and Selectors (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* 1. Square Footage Slider & Manual Entry */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="roof-sqft-input" className="text-xs font-mono uppercase tracking-wider text-stone-300">
                Estimated Roof Footprint / Area
              </label>
              <div className="flex items-center gap-1.5">
                <input
                  id="roof-sqft-input"
                  aria-label="Roof Square Footage Input"
                  type="number"
                  min="1000"
                  max="15000"
                  step="50"
                  value={sqFt}
                  onChange={e => {
                    const val = Number(e.target.value);
                    setSqFt(val);
                  }}
                  className="font-mono text-sm font-bold text-gold bg-mocha-950 px-2.5 py-1 rounded-md border border-gold/40 w-28 text-right focus:outline-none focus:border-gold"
                />
                <span className="text-xs font-mono text-stone-400">sq. ft.</span>
              </div>
            </div>
            <input
              type="range"
              aria-label="Roof Square Footage Slider"
              min="1000"
              max="12000"
              step="100"
              value={sqFt}
              onChange={e => setSqFt(Number(e.target.value))}
              className="w-full h-2 bg-mocha-950 rounded-lg appearance-none cursor-pointer accent-amber"
            />
            <div className="flex justify-between text-[11px] text-stone-500 font-mono mt-1">
              <span>1,000 sq ft</span>
              <span>Bunker Hill Permit Avg (6,122 sq ft)</span>
              <span>12,000 sq ft</span>
            </div>
          </div>

          {/* 2. Roof Pitch & Architectural Complexity */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-stone-300 mb-2">
              Roof Pitch & Architectural Complexity
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {[
                { name: 'Low / Walkable (3:12 - 4:12)', mult: 1.0, label: 'Low Pitch' },
                { name: 'Standard Architectural (5:12 - 7:12)', mult: 1.15, label: 'Standard (6:12)' },
                { name: 'Steep / Multi-Gable (8:12 - 12:12+)', mult: 1.35, label: 'Steep Chateau' },
              ].map(p => (
                <button
                  type="button"
                  key={p.name}
                  onClick={() => {
                    setPitchMultiplier(p.mult);
                    setPitchName(p.name);
                  }}
                  className={`p-3 text-xs rounded-lg border text-left transition-all ${
                    pitchMultiplier === p.mult
                      ? 'bg-mocha-800 border-gold text-gold font-semibold shadow-gold-sm'
                      : 'bg-mocha-950 border-mocha-800 text-stone-300 hover:border-gold/30'
                  }`}
                >
                  <span className="block font-medium text-gold-100 mb-0.5">{p.label}</span>
                  <span className="text-[10px] text-stone-400 block">{p.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* 3. Number of Stories */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-stone-300 mb-2">
              Building Stories / Staging Height
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { name: '1 Story Ranch / Bungalow', mult: 1.0, label: '1 Story' },
                { name: '2 Stories Estate', mult: 1.05, label: '2 Stories' },
                { name: '3+ Stories Manor', mult: 1.15, label: '3+ Stories' },
              ].map(s => (
                <button
                  type="button"
                  key={s.name}
                  onClick={() => {
                    setStoriesMultiplier(s.mult);
                    setStoriesName(s.name);
                  }}
                  className={`p-2.5 text-xs rounded-lg border text-center transition-all ${
                    storiesMultiplier === s.mult
                      ? 'bg-mocha-800 border-gold text-gold font-semibold'
                      : 'bg-mocha-950 border-mocha-800 text-stone-300 hover:border-gold/30'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* 4. Material Selection Cards */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-stone-300 mb-2">
              Architectural Material System
            </label>
            <div className="space-y-2">
              {MATERIALS.map(m => (
                <button
                  type="button"
                  key={m.id}
                  onClick={() => setSelectedMaterialId(m.id)}
                  className={`w-full p-3.5 rounded-lg border text-left transition-all flex items-start justify-between gap-3 ${
                    selectedMaterialId === m.id
                      ? 'bg-mocha-800 border-gold shadow-gold-sm'
                      : 'bg-mocha-950 border-mocha-800 hover:border-gold/30'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-serif font-bold text-sm text-gold-100">{m.name}</span>
                      <span className="text-[10px] bg-mocha-950 text-gold px-2 py-0.5 rounded font-mono border border-gold/20">
                        {m.tier}
                      </span>
                    </div>
                    <p className="text-xs text-stone-400">{m.description}</p>
                    <div className="flex items-center gap-4 text-[11px] font-mono text-stone-400 mt-2">
                      <span>Lifespan: <strong className="text-stone-300">{m.lifespan}</strong></span>
                      <span>Wind: <strong className="text-stone-300">{m.windRating}</strong></span>
                    </div>
                  </div>
                  {selectedMaterialId === m.id && (
                    <div className="p-1 bg-copper text-charcoal-950 rounded-full flex-shrink-0 mt-1">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Output: Dynamic Calculation Display (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div className="bg-mocha-950 border border-gold/40 rounded p-6 sm:p-8 space-y-6 shadow-luxury">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-stone-400 block mb-1">
                Estimated Planning Range
              </span>
              <div className="flex flex-wrap items-baseline gap-2">
                <span id="estimator-min-price" className="font-serif text-2xl sm:text-4xl font-bold text-gold">
                  ${calculations.minFormatted}
                </span>
                <span className="text-stone-400 font-serif text-xl sm:text-2xl">–</span>
                <span id="estimator-max-price" className="font-serif text-2xl sm:text-4xl font-bold text-ivory">
                  ${calculations.maxFormatted}
                </span>
              </div>
              <p className="text-xs text-stone-400 mt-1 font-mono">
                Approx. ${calculations.minPerSqFt} – ${calculations.maxPerSqFt} per sq. ft. installed
              </p>
            </div>

            {/* Parameter Summary */}
            <div className="space-y-2 text-xs border-t border-b border-mocha-800 py-4">
              <div className="flex justify-between">
                <span className="text-stone-400">Selected Material:</span>
                <span className="text-ivory font-medium text-right max-w-[200px] truncate">
                  {selectedMaterial.name}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">Total Roof Area:</span>
                <span className="text-ivory font-mono">{sqFt.toLocaleString()} sq. ft.</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">Pitch Complexity:</span>
                <span className="text-ivory">{pitchName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">Staging Elevation:</span>
                <span className="text-ivory">{storiesName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">Shop Flashing:</span>
                <span className="text-gold font-medium">Knight St In-House Brake Fabricated</span>
              </div>
            </div>

            {/* Compulsory Disclaimer */}
            <div className="bg-mocha-900 border border-amber/30 p-3.5 rounded text-xs text-stone-300 space-y-1.5 leading-relaxed">
              <div className="flex items-center gap-1.5 text-amber font-semibold uppercase tracking-wider text-xs">
                <ShieldAlert className="w-3.5 h-3.5 flex-shrink-0" />
                <span>Illustrative Planning Basis Only</span>
              </div>
              <p>
                This calculation provides an illustrative planning budget range based on regional Houston averages. It does <strong>not</strong> constitute a binding quotation. Actual project investment requires a diagnostic on-site inspection by Jay-Co to evaluate wood roof decking conditions, rafter structural loads, custom flashing angles, and municipal permitting fees.
              </p>
            </div>

            {/* Direct CTA */}
            <button
              onClick={handleTransferToQuote}
              className="w-full amber-button-glow font-bold py-3.5 px-6 rounded-sm text-xs uppercase tracking-wider flex items-center justify-center gap-2 relative-shimmer group"
            >
              <span>Transfer to Detailed Quote Request</span>
              <ArrowRight className="w-4 h-4 text-mocha-950 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="mt-4 text-center">
            <span className="text-xs text-stone-400">
              Prefer speaking directly with an estimator? Call{' '}
              <a href={`tel:${COMPANY_INFO.phone}`} className="text-gold font-semibold hover:underline">
                {COMPANY_INFO.phoneFormatted}
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
