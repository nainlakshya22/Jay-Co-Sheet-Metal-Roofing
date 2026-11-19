import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SERVICES } from '../data/companyData';
import { Hammer, ArrowRight, ShieldCheck, Check } from 'lucide-react';

export const ServicesDirectoryPage: React.FC = () => {
  const { navigateTo, openQuoteModal } = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Roofing Systems',
    'Architectural Metal Fabrication',
    'Specialty & Restoration'
  ];

  const filteredServices = selectedCategory === 'All'
    ? SERVICES
    : SERVICES.filter(s => s.category === selectedCategory);

  return (
    <div className="py-12 sm:py-16 bg-charcoal-950 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <Breadcrumbs items={[{ label: 'Services Directory' }]} />

        {/* Hero Header */}
        <div className="max-w-3xl space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 bg-charcoal-900 border border-copper/50 px-3.5 py-1.5 rounded-full text-copper text-xs font-mono uppercase tracking-wider">
            <Hammer className="w-3.5 h-3.5" />
            <span>Complete Architectural Directory</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl text-ivory font-bold leading-tight">
            Specialized Roofing & Sheet Metal Fabrication Directory
          </h1>

          <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-sans">
            Every service below is directly performed by Jay-Co Sheet Metal & Roofing, utilizing shop fabrication at our 2307 Knight St Houston facility and factory-certified GAF installation standards.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded text-xs font-medium uppercase tracking-wider transition-all border ${
                selectedCategory === cat
                  ? 'bg-copper text-charcoal-950 font-bold border-copper shadow-copper'
                  : 'bg-charcoal-850 border-charcoal-700/80 text-stone-300 hover:border-stone-500 hover:text-ivory'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid (All 10 Services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredServices.map(service => (
            <div
              key={service.id}
              className="bg-charcoal-900 border border-charcoal-800 hover:border-copper/60 rounded overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-elevated group"
            >
              <div className="relative h-60 overflow-hidden bg-charcoal-950">
                <img
                  src={service.heroImage}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/30 to-transparent" />
                <span className="absolute top-4 left-4 bg-charcoal-950/90 text-copper border border-copper/30 text-xs font-mono px-2.5 py-1 rounded">
                  {service.category}
                </span>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-xs font-mono text-copper uppercase tracking-wider block mb-1">
                    {service.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-ivory group-hover:text-copper transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-300 mt-2 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-charcoal-800">
                  <div className="flex flex-wrap gap-1.5">
                    {service.materialsUsed.slice(0, 3).map((mat, i) => (
                      <span key={i} className="text-[10px] bg-charcoal-850 text-stone-400 px-2 py-0.5 rounded border border-charcoal-750 font-mono">
                        {mat}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <button
                      onClick={() => navigateTo(service.slug)}
                      className="text-copper hover:text-copper-light text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                    >
                      <span>Detailed Technical Specifications</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => openQuoteModal({ service: service.title })}
                      className="bg-charcoal-850 hover:bg-copper hover:text-charcoal-950 text-stone-300 border border-charcoal-700 hover:border-copper px-3 py-1.5 rounded text-xs uppercase tracking-wider font-semibold transition-all"
                    >
                      Quote
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
