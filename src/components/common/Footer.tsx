import React from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { COMPANY_INFO } from '../../data/companyData';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Printer, 
  ShieldCheck, 
  ExternalLink, 
  FileCheck, 
  Hammer,
  Sparkles
} from 'lucide-react';
import { PageRoute } from '../../types';

export const Footer: React.FC = () => {
  const { navigateTo, openQuoteModal, openAssistant } = useNavigation();

  return (
    <footer className="bg-charcoal-950 border-t border-charcoal-800 text-stone-400 text-sm">
      {/* Top Pre-Footer Banner */}
      <div className="bg-gradient-to-r from-charcoal-900 via-charcoal-850 to-charcoal-900 border-b border-charcoal-800/80 py-8 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded bg-charcoal-800 border border-copper/40 p-2.5 flex items-center justify-center flex-shrink-0 text-copper">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <span className="font-serif text-ivory font-bold text-base sm:text-lg">
                  GAF Certified™ Residential Roofing Contractor
                </span>
                <span className="bg-copper/20 text-copper text-xs px-2 py-0.5 rounded font-mono border border-copper/30">
                  ID: {COMPANY_INFO.gafContractorId}
                </span>
              </div>
              <p className="text-xs text-stone-400 mt-0.5">
                Eligible for factory-inspected GAF System Plus® extended warranties across Greater Houston.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => openQuoteModal()}
              className="bg-copper hover:bg-copper-light text-charcoal-950 font-semibold px-5 py-2.5 rounded-sm text-xs uppercase tracking-wider shadow-copper transition-all"
            >
              Request On-Site Inspection
            </button>
            <a
              href="https://www.gaf.com/en-us/roofing-contractors/residential/usa/tx/houston/jay-co-sheet-metal-and-roofing-1132527"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-300 hover:text-copper border border-charcoal-700 hover:border-copper/40 px-4 py-2.5 rounded-sm text-xs font-medium transition-colors flex items-center gap-1.5"
            >
              <span>Verify on GAF.com</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Multi-Column Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Column 1: Identity & Facility */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-sm bg-charcoal-900 border border-copper/50 p-2 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
                <polygon points="50,10 90,40 75,40 50,22 25,40 10,40" fill="#C68642" />
                <rect x="22" y="44" width="56" height="46" fill="#121518" stroke="#C68642" strokeWidth="4" />
                <path d="M34 90 L34 60 L66 60 L66 90" fill="#C68642" />
              </svg>
            </div>
            <div>
              <span className="font-serif text-xl font-bold text-ivory block">
                Jay-Co Sheet Metal & Roofing
              </span>
              <span className="text-xs text-stone-500 font-mono">
                Legal Entity: {COMPANY_INFO.legalName}
              </span>
            </div>
          </div>

          <p className="text-xs leading-relaxed text-stone-400">
            Houston's trusted architectural sheet metal fabricator and roofing contractor. From our 2307 Knight St fabrication shop, we deliver custom-folded 24-gauge standing seam metal, hand-soldered architectural copper, genuine slate, and GAF certified residential systems.
          </p>

          <div className="space-y-2 pt-2 text-xs">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-copper flex-shrink-0 mt-0.5" />
              <span>{COMPANY_INFO.address}, {COMPANY_INFO.city}, {COMPANY_INFO.state} {COMPANY_INFO.zip}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-copper flex-shrink-0" />
              <a href={`tel:${COMPANY_INFO.phone}`} className="text-ivory hover:text-copper transition-colors font-medium">
                {COMPANY_INFO.phoneFormatted}
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-copper flex-shrink-0" />
              <a href={`mailto:${COMPANY_INFO.email}`} className="text-stone-300 hover:text-copper transition-colors">
                {COMPANY_INFO.email}
              </a>
            </div>
            <div className="flex items-center gap-2.5 text-stone-500">
              <Printer className="w-4 h-4 flex-shrink-0" />
              <span>Fax: {COMPANY_INFO.fax}</span>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={openAssistant}
              className="inline-flex items-center gap-2 bg-charcoal-900 border border-copper/40 hover:border-copper px-3 py-1.5 rounded text-xs text-copper font-medium transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ask Jay-Co Architectural Assistant</span>
            </button>
          </div>
        </div>

        {/* Column 2: Roofing Systems */}
        <div className="space-y-3">
          <h4 className="font-serif text-ivory font-semibold text-sm tracking-wide border-b border-charcoal-800 pb-2">
            Roofing Systems
          </h4>
          <ul className="space-y-1 text-xs">
            <li>
              <button onClick={() => navigateTo('service-standing-seam')} className="hover:text-copper py-1.5 transition-colors text-left block w-full">
                Standing Seam Metal Roofing
              </button>
            </li>
            <li>
              <button onClick={() => navigateTo('service-copper-roofing')} className="hover:text-copper py-1.5 transition-colors text-left block w-full">
                Architectural Copper Roofing
              </button>
            </li>
            <li>
              <button onClick={() => navigateTo('service-slate-tile')} className="hover:text-copper py-1.5 transition-colors text-left block w-full">
                Natural Vermont Slate
              </button>
            </li>
            <li>
              <button onClick={() => navigateTo('service-slate-tile')} className="hover:text-copper py-1.5 transition-colors text-left block w-full">
                Clay & Concrete Tile
              </button>
            </li>
            <li>
              <button onClick={() => navigateTo('service-composition-shingle')} className="hover:text-copper py-1.5 transition-colors text-left block w-full">
                GAF Composition Shingles
              </button>
            </li>
            <li>
              <button onClick={() => navigateTo('service-roof-replacement')} className="hover:text-copper py-1.5 transition-colors text-left block w-full">
                Residential Re-Roofing
              </button>
            </li>
            <li>
              <button onClick={() => navigateTo('service-roof-repairs')} className="hover:text-copper py-1.5 transition-colors text-left block w-full">
                Leak Detection & Diagnostics
              </button>
            </li>
            <li>
              <button onClick={() => navigateTo('service-waterproofing')} className="hover:text-copper py-1.5 transition-colors text-left block w-full">
                Balcony Deck Waterproofing
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: Metal Fabrication */}
        <div className="space-y-3">
          <h4 className="font-serif text-ivory font-semibold text-sm tracking-wide border-b border-charcoal-800 pb-2">
            Shop Fabrication
          </h4>
          <ul className="space-y-1 text-xs">
            <li>
              <button onClick={() => navigateTo('architectural-metal')} className="hover:text-copper py-1.5 transition-colors text-left block w-full">
                Knight St Shop Facility
              </button>
            </li>
            <li>
              <button onClick={() => navigateTo('service-custom-flashing')} className="hover:text-copper py-1.5 transition-colors text-left block w-full">
                Custom Chimney Shrouds
              </button>
            </li>
            <li>
              <button onClick={() => navigateTo('service-gutters-downspouts')} className="hover:text-copper py-1.5 transition-colors text-left block w-full">
                Seamless Half-Round Gutters
              </button>
            </li>
            <li>
              <button onClick={() => navigateTo('service-gutters-downspouts')} className="hover:text-copper py-1.5 transition-colors text-left block w-full">
                Architectural Wall Scuppers
              </button>
            </li>
            <li>
              <button onClick={() => navigateTo('service-sheet-metal')} className="hover:text-copper py-1.5 transition-colors text-left block w-full">
                Parapet Coping & Edge Metal
              </button>
            </li>
            <li>
              <button onClick={() => navigateTo('service-copper-roofing')} className="hover:text-copper py-1.5 transition-colors text-left block w-full">
                Hand-Soldered Flat Seams
              </button>
            </li>
            <li>
              <button onClick={() => navigateTo('materials')} className="hover:text-copper py-1.5 transition-colors text-left block w-full">
                Materials & Metal Gauges
              </button>
            </li>
          </ul>
        </div>

        {/* Column 4: Trust & Navigation */}
        <div className="space-y-3">
          <h4 className="font-serif text-ivory font-semibold text-sm tracking-wide border-b border-charcoal-800 pb-2">
            Company & Trust
          </h4>
          <ul className="space-y-1 text-xs">
            <li>
              <button onClick={() => navigateTo('about')} className="hover:text-copper py-1.5 transition-colors text-left block w-full">
                About Jay-Co
              </button>
            </li>
            <li>
              <button onClick={() => navigateTo('heritage')} className="hover:text-copper py-1.5 transition-colors text-left block w-full">
                Company Heritage (c. 1988)
              </button>
            </li>
            <li>
              <button onClick={() => navigateTo('projects')} className="hover:text-copper py-1.5 transition-colors text-left block w-full">
                Project Portfolio
              </button>
            </li>
            <li>
              <button onClick={() => navigateTo('project-bunker-hill')} className="hover:text-copper py-1.5 transition-colors text-left flex items-center gap-1 text-copper font-medium block w-full">
                <FileCheck className="w-3 h-3 flex-shrink-0 inline" />
                <span>Bunker Hill Case Study</span>
              </button>
            </li>
            <li>
              <button onClick={() => navigateTo('before-after')} className="hover:text-copper py-1.5 transition-colors text-left block w-full">
                Before & After Transformations
              </button>
            </li>
            <li>
              <button onClick={() => navigateTo('reviews')} className="hover:text-copper py-1.5 transition-colors text-left block w-full">
                Verified Reviews (4.5★)
              </button>
            </li>
            <li>
              <button onClick={() => navigateTo('gaf-certification')} className="hover:text-copper py-1.5 transition-colors text-left block w-full">
                GAF Verification (#1132527)
              </button>
            </li>
            <li>
              <button onClick={() => navigateTo('service-areas')} className="hover:text-copper py-1.5 transition-colors text-left block w-full">
                Houston Service Areas
              </button>
            </li>
            <li>
              <button onClick={() => navigateTo('estimator')} className="hover:text-copper py-1.5 transition-colors text-left block w-full">
                Interactive Roof Estimator
              </button>
            </li>
            <li>
              <button onClick={() => navigateTo('financing')} className="hover:text-copper py-1.5 transition-colors text-left block w-full">
                Payment Budget Calculator
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Factual Integrity & Transparency Notice */}
      <div className="bg-charcoal-900/60 border-t border-charcoal-800 py-6 px-4 sm:px-8 text-xs text-stone-500">
        <div className="max-w-7xl mx-auto space-y-2">
          <p>
            <strong className="text-stone-400">Factual Integrity Disclosure:</strong> Jay-Co Sheet Metal & Roofing (operating legally as Jay-Co Enterprises, LLC) is located at 2307 Knight St, Houston, TX 77093. GAF Contractor ID #1132527 reflects verified GAF Certified™ Residential Contractor status. The company is not BBB accredited and is unrated by the Better Business Bureau. Documented re-roofing project reference corresponds to City of Bunker Hill Village public building permit #20220639 (11838 Brandywine Ln, completed April 27, 2023). Historical domain jay-co.com currently resolves to an unrelated Missouri directional boring entity and does not represent Jay-Co Sheet Metal & Roofing of Houston, TX.
          </p>
        </div>
      </div>

      {/* Copyright & Legal Sub-Footer */}
      <div className="bg-charcoal-950 border-t border-charcoal-900 pt-5 pb-[max(5.5rem,calc(4.5rem+env(safe-area-inset-bottom)))] sm:py-5 px-4 sm:px-8 text-xs text-stone-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Jay-Co Enterprises, LLC. All rights reserved. Houston, Texas.</p>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-6 gap-y-2">
            <button onClick={() => navigateTo('privacy')} className="hover:text-stone-300 py-1 transition-colors">
              Privacy Policy
            </button>
            <button onClick={() => navigateTo('terms')} className="hover:text-stone-300 py-1 transition-colors">
              Terms of Service
            </button>
            <button onClick={() => navigateTo('faqs')} className="hover:text-stone-300 py-1 transition-colors">
              FAQs
            </button>
            <button onClick={() => navigateTo('contact')} className="hover:text-copper py-1 transition-colors font-medium">
              Contact Shop
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
