import React from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { COMPANY_INFO } from '../../data/companyData';
import { ShieldCheck, ExternalLink, Check, Award, AlertCircle } from 'lucide-react';

export const GAFCertificationSection: React.FC = () => {
  const { navigateTo, openQuoteModal } = useNavigation();

  return (
    <div className="bg-mocha-900 border border-gold/30 rounded-sm shadow-luxury p-6 sm:p-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Official Badge & Verification Credentials (5 Cols) */}
        <div className="lg:col-span-5 bg-mocha-950 border border-gold/30 rounded p-6 sm:p-8 flex flex-col justify-between shadow-gold">
          <div className="space-y-4">
            <div className="w-14 h-14 rounded bg-mocha-900 border-2 border-gold p-2.5 flex items-center justify-center text-amber shadow-gold">
              <Award className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-gold font-semibold block mb-1">
                Official Manufacturer Credential
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ivory">
                GAF Certified™ Residential Contractor
              </h3>
              <p className="text-xs text-stone-300 font-mono mt-1">
                Contractor ID: <strong className="text-gold font-bold">{COMPANY_INFO.gafContractorId}</strong>
              </p>
            </div>

            <p className="text-xs text-stone-300 leading-relaxed">
              As a verified GAF Certified™ contractor, Jay-Co Sheet Metal & Roofing has met rigorous manufacturer standards for proper licensing, insurance coverage, and manufacturer-specified installation practices.
            </p>
          </div>

          <div className="pt-6 border-t border-mocha-800 space-y-3">
            <a
              href="https://www.gaf.com/en-us/roofing-contractors/residential/usa/tx/houston/jay-co-sheet-metal-and-roofing-1132527"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 bg-mocha-850 hover:bg-mocha-800 border border-gold/40 hover:border-gold text-gold-light hover:text-gold rounded text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors gold-border-glow shadow-sm"
            >
              <span>Verify on GAF Contractor Registry</span>
              <ExternalLink className="w-3.5 h-3.5 text-amber" />
            </a>

            <div className="bg-mocha-900 border border-mocha-800 p-3 rounded text-[11px] text-stone-300 flex items-start gap-2">
              <AlertCircle className="w-3.5 h-3.5 text-amber flex-shrink-0 mt-0.5" />
              <span>
                <strong className="text-gold">Accurate Designation:</strong> Official designation is GAF Certified™ (Residential). Jay-Co never exaggerates credentials or misrepresents designations such as Master Elite.
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Warranty Coverage & Technical Standards (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-gold font-semibold">
              Enhanced Factory Warranty Protection
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-ivory font-bold mt-1">
              GAF System Plus® Limited Warranty Eligibility
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 mt-2 leading-relaxed">
              Standard non-certified roofing contractors can only offer basic material warranties with steep depreciation. Jay-Co's GAF Certified status grants our residential clients access to enhanced factory warranty protection backed directly by North America's largest roofing manufacturer.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: '50-Year Non-Prorated Coverage',
                desc: 'Comprehensive 100% material defect coverage on qualifying GAF Lifetime shingles.'
              },
              {
                title: 'WindProven™ Wind Speed Protection',
                desc: 'Infinite wind speed limited warranty protection with 4 qualifying GAF accessory items.'
              },
              {
                title: 'Factory Workmanship Auditing',
                desc: 'Random manufacturer field audits ensuring continuous technical code compliance.'
              },
              {
                title: 'StainGuard Plus™ Algae Defense',
                desc: '25-year manufacturer warranty against dark cyanobacteria and algae discoloration.'
              }
            ].map(item => (
              <div key={item.title} className="p-4 bg-mocha-950 border border-mocha-800 rounded hover:border-gold/30 transition-colors">
                <div className="flex items-center gap-2 text-ivory font-semibold text-xs mb-1">
                  <div className="w-4 h-4 rounded-full bg-gold/15 text-gold flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>{item.title}</span>
                </div>
                <p className="text-xs text-stone-300 pl-6 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <button
              onClick={() => openQuoteModal({ service: 'GAF Certified Residential Re-Roof' })}
              className="w-full sm:w-auto amber-button-glow font-bold px-6 py-3.5 rounded-sm text-xs uppercase tracking-wider transition-all relative-shimmer group"
            >
              Request GAF System Plus Quote
            </button>
            <button
              onClick={() => navigateTo('gaf-certification')}
              className="text-stone-300 hover:text-gold text-xs uppercase tracking-wider font-semibold transition-colors"
            >
              Read Detailed GAF Certification Guide →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
