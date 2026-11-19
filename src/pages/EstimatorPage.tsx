import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { InteractiveEstimator } from '../components/tools/InteractiveEstimator';
import { Calculator } from 'lucide-react';

export const EstimatorPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-16 bg-charcoal-950 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <Breadcrumbs items={[{ label: 'Interactive Roof Estimator' }]} />

        {/* Hero Header */}
        <div className="max-w-3xl space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 bg-charcoal-900 border border-copper/50 px-3.5 py-1.5 rounded-full text-copper text-xs font-mono uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Cost Calculator</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl text-ivory font-bold leading-tight">
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
