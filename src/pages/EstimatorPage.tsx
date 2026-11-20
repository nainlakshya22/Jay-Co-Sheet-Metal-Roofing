import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { InteractiveEstimator } from '../components/tools/InteractiveEstimator';
import { Calculator } from 'lucide-react';

export const EstimatorPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-16 bg-mocha-950 text-stone-300 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <Breadcrumbs items={[{ label: 'Interactive Roof Estimator' }]} />

        {/* Hero Header */}
        <div className="max-w-3xl space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 bg-mocha-900/90 border border-gold/40 px-3.5 py-1.5 rounded-full text-gold text-xs font-mono uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5 text-amber" />
            <span>Interactive Cost Calculator</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl text-gold-100 font-bold leading-tight">
            Interactive Roof Investment Estimator
          </h1>

          <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-sans">
            Calculate preliminary planning budget ranges for standing seam metal, architectural copper, natural slate, and GAF certified residential shingle roofing systems across Greater Houston.
          </p>
        </div>

        <div className="mb-20">
          <InteractiveEstimator />
        </div>
      </div>
    </div>
  );
};
