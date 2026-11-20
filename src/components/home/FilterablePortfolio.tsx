import React, { useState } from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { FEATURED_PROJECTS } from '../../data/companyData';
import { 
  FolderGit2, 
  FileCheck, 
  Maximize2, 
  ArrowRight, 
  MapPin 
} from 'lucide-react';

export const FilterablePortfolio: React.FC = () => {
  const { openLightbox, navigateTo, openQuoteModal } = useNavigation();
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = [
    'All',
    'Metal Roofing',
    'Architectural Copper',
    'Residential Re-Roof',
    'Slate & Tile',
    'Custom Fabrication'
  ];

  const filteredProjects = activeFilter === 'All' 
    ? FEATURED_PROJECTS 
    : FEATURED_PROJECTS.filter(p => p.category === activeFilter);

  return (
    <div className="bg-mocha-900 border border-gold/30 rounded-sm shadow-luxury p-6 sm:p-10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-mocha-800 pb-6 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="p-1.5 bg-mocha-850 text-gold rounded border border-gold/30">
              <FolderGit2 className="w-4 h-4 text-amber" />
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-gold font-semibold">
              Verified Project Showcase
            </span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl text-ivory font-bold">
            Top Featured Projects & Craftsmanship Portfolio
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-2xl">
            Highlighting documented municipal permit re-roofs and authentic architectural metalwork fabricated in our Houston facility.
          </p>
        </div>

        <div className="text-right">
          <button
            onClick={() => navigateTo('project-bunker-hill')}
            className="inline-flex items-center gap-2 bg-mocha-850 hover:bg-mocha-800 border border-gold/40 hover:border-gold px-4 py-2 rounded text-xs text-gold-light hover:text-gold font-medium transition-colors gold-border-glow shadow-sm"
          >
            <FileCheck className="w-4 h-4 text-amber" />
            <span>Read Bunker Hill Permit Case Study →</span>
          </button>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-2.5 mb-8">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`min-h-[40px] px-4 py-2.5 rounded text-xs font-medium uppercase tracking-wider transition-all border flex items-center justify-center ${
              activeFilter === cat
                ? 'amber-button-glow font-bold border-amber text-mocha-950 relative-shimmer'
                : 'bg-mocha-950 border-mocha-800 text-stone-300 hover:border-gold/50 hover:text-gold'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map(project => (
          <div
            key={project.id}
            className="group bg-mocha-950 border border-mocha-800 hover:border-gold/60 rounded overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-luxury hover:-translate-y-1"
          >
            {/* Image Container with Hover Lightbox Icon */}
            <div className="relative h-60 overflow-hidden bg-mocha-900">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-mocha-950 via-transparent to-transparent opacity-85" />

              {/* Status Badge */}
              <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                {project.isDocumentedPermit ? (
                  <span className="bg-amber text-mocha-950 font-bold text-[10px] font-mono px-2 py-0.5 rounded shadow flex items-center gap-1">
                    <FileCheck className="w-3 h-3" />
                    <span>Verified Municipal Permit</span>
                  </span>
                ) : (
                  <span className="bg-mocha-900/90 text-gold border border-gold/40 text-[10px] font-mono px-2 py-0.5 rounded shadow">
                    Architectural Craftsmanship
                  </span>
                )}
                <span className="bg-mocha-950/80 text-stone-300 text-[10px] px-2 py-0.5 rounded font-mono border border-mocha-800">
                  {project.category}
                </span>
              </div>

              {/* Lightbox Zoom Button */}
              <button
                onClick={() => openLightbox(project.image, `${project.title} — ${project.location}`)}
                className="absolute bottom-3 right-3 p-2 bg-mocha-900/90 hover:bg-gold hover:text-mocha-950 text-gold-light rounded-full transition-colors border border-gold/40"
                aria-label={`View enlarged photo of ${project.title}`}
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>

            {/* Project Details */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center gap-1 text-xs text-stone-300 mb-1">
                  <MapPin className="w-3.5 h-3.5 text-amber flex-shrink-0" />
                  <span className="truncate">{project.location}</span>
                </div>
                <h3 className="font-serif text-lg text-ivory font-bold group-hover:text-gold transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-stone-300 mt-2 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="space-y-3 pt-2 border-t border-mocha-850">
                {/* Specific Permit or Technical Highlights */}
                {project.permitId && (
                  <div className="bg-mocha-900 p-2.5 rounded border border-mocha-800 text-[11px] space-y-1 font-mono">
                    <div className="flex justify-between text-stone-300">
                      <span>Permit Record:</span>
                      <span className="text-gold font-bold">{project.permitId}</span>
                    </div>
                    {project.valuation && (
                      <div className="flex justify-between text-stone-300">
                        <span>Valuation:</span>
                        <span className="text-ivory">{project.valuation}</span>
                      </div>
                    )}
                    {project.completionDate && (
                      <div className="flex justify-between text-stone-300">
                        <span>Status:</span>
                        <span className="text-emerald-400">{project.completionDate}</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Materials Used Tags */}
                <div className="flex flex-wrap gap-1">
                  {project.materials.slice(0, 3).map((mat, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] bg-mocha-900 text-stone-300 px-2 py-0.5 rounded border border-mocha-800 font-mono"
                    >
                      {mat}
                    </span>
                  ))}
                </div>

                {/* Card CTA */}
                {project.isDocumentedPermit ? (
                  <button
                    onClick={() => navigateTo('project-bunker-hill')}
                    className="w-full py-2 bg-mocha-850 hover:bg-mocha-800 border border-gold/40 hover:border-gold text-gold-light hover:text-gold rounded text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors gold-border-glow"
                  >
                    <span>Inspect Full Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber" />
                  </button>
                ) : (
                  <button
                    onClick={() => openQuoteModal({ service: project.title, material: project.materials[0] })}
                    className="w-full py-2 bg-mocha-900 hover:bg-gold hover:text-mocha-950 border border-mocha-800 hover:border-gold text-stone-300 rounded text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all"
                  >
                    <span>Inquire on Similar Scope</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
