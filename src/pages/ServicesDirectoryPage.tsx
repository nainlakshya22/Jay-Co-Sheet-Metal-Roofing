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
    <div className="py-12 sm:py-16 bg-mocha-950 text-stone-300 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <Breadcrumbs items={[{ label: 'Services Directory' }]} />

        {/* Hero Header */}
        <div className="max-w-3xl space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 bg-mocha-900/90 border border-gold/40 px-3.5 py-1.5 rounded-full text-gold text-xs font-mono uppercase tracking-wider">
            <Hammer className="w-3.5 h-3.5 text-amber" />
            <span>Complete Architectural Directory</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl text-gold-100 font-bold leading-tight">
            Specialized Roofing & Sheet Metal Fabrication Directory
          </h1>

          <p className="text-base sm:text-lg text-stone-300 leading-relaxed font-sans">
            Every service below is directly performed by Jay-Co Sheet Metal & Roofing, utilizing shop fabrication at our 2307 Knight St Houston facility and factory-certified GAF installation standards.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2.5 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`min-h-[44px] px-5 py-2.5 rounded-lg text-xs font-medium uppercase tracking-wider transition-all border flex items-center justify-center ${
                selectedCategory === cat
                  ? 'bg-amber text-mocha-950 font-bold border-amber shadow-amber'
                  : 'bg-mocha-900 border-mocha-800 text-stone-300 hover:border-gold/40 hover:text-gold-100'
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
              className="bg-mocha-900/90 border border-gold/30 hover:border-gold/60 rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl group shadow-lg"
            >
              <div className="relative h-60 overflow-hidden bg-mocha-950">
                <img
                  src={service.heroImage}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mocha-900 via-mocha-900/30 to-transparent" />
                <span className="absolute top-4 left-4 bg-mocha-950/90 text-gold border border-gold/30 text-xs font-mono px-2.5 py-1 rounded-md">
                  {service.category}
                </span>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-xs font-mono text-gold uppercase tracking-wider block mb-1">
                    {service.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-gold-100 group-hover:text-gold transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-stone-300 mt-2 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-mocha-800/80">
                  <div className="flex flex-wrap gap-1.5">
                    {service.materialsUsed.slice(0, 3).map((mat, i) => (
                      <span key={i} className="text-xs bg-mocha-950 text-stone-300 px-2.5 py-1 rounded-md border border-mocha-800 font-mono">
                        {mat}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <button
                      onClick={() => navigateTo(service.slug)}
                      className="min-h-[44px] text-gold hover:text-gold-light text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                    >
                      <span>Technical Specifications</span>
                      <ArrowRight className="w-4 h-4 text-amber" />
                    </button>

                    <button
                      onClick={() => openQuoteModal({ service: service.title })}
                      className="min-h-[44px] bg-mocha-950 hover:bg-amber hover:text-mocha-950 text-gold border border-gold/40 hover:border-amber px-4 py-2 rounded-md text-xs uppercase tracking-wider font-semibold transition-all shadow-sm"
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
