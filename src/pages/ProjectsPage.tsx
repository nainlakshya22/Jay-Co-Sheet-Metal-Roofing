import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { FilterablePortfolio } from '../components/home/FilterablePortfolio';
import { FolderGit2, FileCheck, ArrowRight } from 'lucide-react';

export const ProjectsPage: React.FC = () => {
  const { navigateTo } = useNavigation();

  return (
    <div className="py-12 sm:py-16 bg-charcoal-950 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <Breadcrumbs items={[{ label: 'Our Projects' }]} />

        {/* Hero Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-charcoal-900 border border-copper/50 px-3.5 py-1.5 rounded-full text-copper text-xs font-mono uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Proven Craftsmanship</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl text-ivory font-bold leading-tight">
            Our Architectural Projects & Documented Municipal Records
          </h1>

          <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-sans">
            Explore authentic completed roofing and architectural sheet metal projects across Houston, backed by verified municipal building permits and Knight Street shop fabrication.
          </p>
        </div>

        {/* Highlighted Banner: Bunker Hill Village Case Study */}
        <div className="bg-gradient-to-r from-charcoal-900 via-charcoal-850 to-charcoal-900 border border-copper/40 rounded p-6 sm:p-8 mb-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-copper font-mono text-xs uppercase tracking-wider">
              <FileCheck className="w-4 h-4" />
              <span>Documented Public Building Record</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-ivory">
              City of Bunker Hill Village Permit #20220639
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 max-w-xl">
              11838 Brandywine Ln, Houston, TX 77024 — Complete residential re-roof on a 6,122 sq. ft. luxury wooded Memorial estate. Recorded completion April 27, 2023. Valuation: $23,752.
            </p>
          </div>

          <button
            onClick={() => navigateTo('project-bunker-hill')}
            className="bg-copper hover:bg-copper-light text-charcoal-950 font-bold px-6 py-3 rounded-sm text-xs uppercase tracking-wider shadow-copper transition-all flex items-center gap-2 flex-shrink-0"
          >
            <span>Read Case Study</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Filterable Portfolio */}
        <div className="mb-16">
          <FilterablePortfolio />
        </div>
      </div>
    </div>
  );
};
