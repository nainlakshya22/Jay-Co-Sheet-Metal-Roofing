import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { FilterablePortfolio } from '../components/home/FilterablePortfolio';
import { FolderGit2, FileCheck, ArrowRight } from 'lucide-react';

export const ProjectsPage: React.FC = () => {
  const { navigateTo } = useNavigation();

  return (
    <div className="py-12 sm:py-16 bg-mocha-950 text-stone-300 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <Breadcrumbs items={[{ label: 'Our Projects' }]} />

        {/* Hero Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-mocha-900/90 border border-gold/40 px-3.5 py-1.5 rounded-full text-gold text-xs font-mono uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5 text-amber" />
            <span>Proven Craftsmanship</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl text-gold-100 font-bold leading-tight">
            Our Architectural Projects & Documented Municipal Records
          </h1>

          <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-sans">
            Explore authentic completed roofing and architectural sheet metal projects across Houston, backed by verified municipal building permits and Knight Street shop fabrication.
          </p>
        </div>

        {/* Highlighted Banner: Bunker Hill Village Case Study */}
        <div className="bg-gradient-to-r from-mocha-900 via-mocha-900/90 to-mocha-950 border border-gold/40 rounded-xl p-6 sm:p-8 mb-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-gold font-mono text-xs uppercase tracking-wider">
              <FileCheck className="w-4 h-4 text-amber" />
              <span>Documented Public Building Record</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-gold-100">
              City of Bunker Hill Village Permit #20220639
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 max-w-xl">
              11838 Brandywine Ln, Houston, TX 77024 — Complete residential re-roof on a 6,122 sq. ft. luxury wooded Memorial estate. Recorded completion April 27, 2023. Valuation: $23,752.
            </p>
          </div>

          <button
            onClick={() => navigateTo('project-bunker-hill')}
            className="bg-amber hover:bg-amber-light text-mocha-950 font-bold px-6 py-3 rounded-md text-xs uppercase tracking-wider shadow-amber transition-all flex items-center gap-2 flex-shrink-0"
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
