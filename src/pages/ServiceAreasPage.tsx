import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ServiceAreaMap } from '../components/home/ServiceAreaMap';
import { SERVICE_AREAS, COMPANY_INFO } from '../data/companyData';
import { MapPin, FileCheck, ArrowRight, ShieldCheck } from 'lucide-react';

export const ServiceAreasPage: React.FC = () => {
  const { openQuoteModal } = useNavigation();

  return (
    <div className="py-12 sm:py-16 bg-mocha-950 text-stone-300 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <Breadcrumbs items={[{ label: 'Service Areas' }]} />

        {/* Hero Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-mocha-900/90 border border-gold/40 px-3.5 py-1.5 rounded-full text-gold text-xs font-mono uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-amber" />
            <span>Houston Metro Coverage</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl text-gold-100 font-bold leading-tight">
            Houston Service Areas & Municipal Permitting Jurisdictions
          </h1>

          <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-sans">
            Centrally anchored at our 2307 Knight Street fabrication facility, Jay-Co provides specialized standing seam metal roofing, architectural copper, and GAF certified residential re-roofing across Houston's most prestigious enclaves.
          </p>
        </div>

        {/* Interactive Service Area Map Module */}
        <div className="mb-20">
          <ServiceAreaMap />
        </div>

        {/* Individual Neighborhood Intelligence Cards */}
        <div className="space-y-6 mb-20">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-gold">
              District Architecture Guides
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-gold-100 font-bold mt-1">
              Verified Neighborhood Coverage & Local Codes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICE_AREAS.map(area => (
              <div
                key={area.name}
                className="bg-mocha-900/90 border border-gold/30 rounded-xl p-6 space-y-4 flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono text-gold uppercase tracking-wider">
                      {area.region}
                    </span>
                    <span className="text-xs font-mono text-stone-400">
                      {area.distanceFromShop}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-gold-100">
                    {area.name}
                  </h3>
                  <p className="text-xs text-stone-400 font-mono mt-0.5">
                    ZIP Codes: {area.zipCodes.join(', ')}
                  </p>
                  <p className="text-xs sm:text-sm text-stone-300 mt-3 leading-relaxed">
                    {area.description}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-mocha-800/80">
                  <div className="bg-mocha-950 p-2.5 rounded-lg border border-mocha-800 text-xs">
                    <span className="text-stone-400 block mb-0.5 font-mono text-[11px]">ARCHITECTURAL CONTEXT:</span>
                    <span className="text-stone-300">{area.notableArchitecture}</span>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-xs font-mono text-gold font-medium flex items-center gap-1">
                      <FileCheck className="w-3.5 h-3.5 text-amber" />
                      <span>{area.verifiedProjectsCount}</span>
                    </span>

                    <button
                      onClick={() => openQuoteModal({ service: `Roofing Inquiry for ${area.name}` })}
                      className="text-stone-300 hover:text-gold text-xs font-semibold uppercase tracking-wider flex items-center gap-1 transition-colors"
                    >
                      <span>Inquire In Area</span>
                      <ArrowRight className="w-3.5 h-3.5 text-amber" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
