import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { BeforeAfterSlider } from '../components/tools/BeforeAfterSlider';
import { ArrowLeftRight, ShieldCheck, Check, ArrowRight } from 'lucide-react';

export const BeforeAfterPage: React.FC = () => {
  const { openQuoteModal } = useNavigation();

  return (
    <div className="py-12 sm:py-16 bg-charcoal-950 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <Breadcrumbs items={[{ label: 'Before & After' }]} />

        {/* Hero Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-charcoal-900 border border-copper/50 px-3.5 py-1.5 rounded-full text-copper text-xs font-mono uppercase tracking-wider">
            <ArrowLeftRight className="w-3.5 h-3.5" />
            <span>Interactive Transformations</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl text-ivory font-bold leading-tight">
            Before & After Architectural Transformations
          </h1>

          <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-sans">
            Compare failed, storm-damaged, and caulked flashing assemblies against Jay-Co's precision-engineered standing seam and hand-soldered architectural copper systems.
          </p>
        </div>

        {/* Slider 1: Standing Seam Metal Transformation */}
        <div className="mb-20">
          <BeforeAfterSlider
            beforeImage="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
            afterImage="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80"
            beforeLabel="Weathered Shingle Roof & Failed Valley Transitions"
            afterLabel="Jay-Co 24-Gauge Galvalume Standing Seam System"
            title="Transformation 1: Standing Seam Architectural Metal"
            description="Notice the transition from brittle, heat-aged asphalt shingles to sleek 24-gauge Galvalume standing seam panels with 100% concealed expansion clips rated for 140+ MPH winds."
          />
        </div>

        {/* Slider 2: Copper Dormer & Flashing Transformation */}
        <div className="mb-20">
          <BeforeAfterSlider
            beforeImage="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
            afterImage="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
            beforeLabel="Degraded Caulk Joints & Rusted Galvanized Flashing"
            afterLabel="Hand-Soldered 16-oz Cold-Rolled Copper Envelopes"
            title="Transformation 2: Hand-Soldered Coppersmithing"
            description="Slide to view how leaking caulked corners are replaced with shop-cleated, 50/50 hand-soldered copper lock seams that form a permanent metallurgical barrier."
          />
        </div>

        {/* Bottom CTA */}
        <div className="bg-charcoal-900 border border-copper/30 rounded p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-4">
          <h3 className="font-serif text-2xl sm:text-3xl text-ivory font-bold">
            Is Your Roof Showing Signs of Moisture Intrusion or Age?
          </h3>
          <p className="text-xs sm:text-sm text-stone-300">
            Schedule an on-site diagnostic inspection with Jay-Co to evaluate wood decking, flashing transitions, and architectural metal options.
          </p>
          <button
            onClick={() => openQuoteModal({ service: 'Roof Transformation Consultation' })}
            className="bg-copper hover:bg-copper-light text-charcoal-950 font-bold px-6 py-3 rounded-sm shadow-copper text-xs uppercase tracking-wider transition-all inline-flex items-center gap-2"
          >
            <span>Request Diagnostic Inspection</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
