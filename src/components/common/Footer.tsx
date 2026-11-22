import React from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { useCookieConsent } from '../../context/CookieConsentContext';
import { COMPANY_INFO } from '../../data/companyData';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Printer, 
  ShieldCheck, 
  ExternalLink, 
  FileCheck, 
  Sparkles
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { navigateTo, openQuoteModal, openAssistant } = useNavigation();
  const { openPreferences } = useCookieConsent();

  return (
    <footer className="bg-mocha-950 border-t border-mocha-800 text-stone-300 text-sm">
      {/* Top Pre-Footer Banner */}
      <div className="bg-gradient-to-r from-mocha-900 via-mocha-850 to-mocha-900 border-b border-mocha-800/80 py-8 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded bg-mocha-800 border border-gold/40 p-2.5 flex items-center justify-center flex-shrink-0 text-amber shadow-gold">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <span className="font-serif text-ivory font-bold text-base sm:text-lg">
                  GAF Certified™ Residential Roofing Contractor
                </span>
                <span className="bg-mocha-850 text-gold text-xs px-2 py-0.5 rounded font-mono border border-gold/30">
                  ID: {COMPANY_INFO.gafContractorId}
                </span>
              </div>
              <p className="text-xs text-stone-300 mt-0.5">
                Eligible for factory-inspected GAF System Plus® extended warranties across Greater Houston.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => openQuoteModal()}
              className="amber-button-glow font-bold px-5 py-2.5 rounded-sm text-xs uppercase tracking-wider relative-shimmer"
            >
              Request On-Site Inspection
            </button>
            <a
              href="https://www.gaf.com/en-us/roofing-contractors/residential/usa/tx/houston/jay-co-sheet-metal-and-roofing-1132527"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-300 hover:text-gold border border-mocha-700 hover:border-gold/40 px-4 py-2.5 rounded-sm text-xs font-medium transition-colors flex items-center gap-1.5 bg-mocha-850"
            >
              <span>Verify on GAF.com</span>
              <ExternalLink className="w-3.5 h-3.5 text-amber" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Multi-Column Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Column 1: Identity & Facility */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-sm bg-mocha-900 border border-gold/40 p-2 flex items-center justify-center shadow-gold">
              <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
                <polygon points="50,10 90,40 75,40 50,22 25,40 10,40" fill="#C8792C" />
                <rect x="22" y="44" width="56" height="46" fill="#1C1612" stroke="#F4D9A0" strokeWidth="4" />
                <path d="M34 90 L34 60 L66 60 L66 90" fill="#C8792C" />
              </svg>
            </div>
            <div>
              <span className="font-serif text-xl font-bold text-ivory block">
                Jay-Co Sheet Metal & Roofing
              </span>
              <span className="text-xs text-stone-400 font-mono">
                Legal Entity: {COMPANY_INFO.legalName}
              </span>
            </div>
          </div>

          <p className="text-sm leading-relaxed text-stone-300">
            Houston's trusted architectural sheet metal fabricator and roofing contractor. From our 2307 Knight St fabrication shop, we deliver custom-folded 24-gauge standing seam metal, hand-soldered architectural copper, genuine slate, and GAF certified residential systems.
          </p>

          <div className="space-y-2.5 pt-2 text-sm">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-amber flex-shrink-0 mt-1" />
              <span className="leading-relaxed">{COMPANY_INFO.address}, {COMPANY_INFO.city}, {COMPANY_INFO.state} {COMPANY_INFO.zip}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-amber flex-shrink-0" />
              <a href={`tel:${COMPANY_INFO.phone}`} className="text-ivory hover:text-gold transition-colors font-medium">
                {COMPANY_INFO.phoneFormatted}
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-amber flex-shrink-0" />
              <a href={`mailto:${COMPANY_INFO.email}`} className="text-stone-300 hover:text-gold transition-colors">
                {COMPANY_INFO.email}
              </a>
            </div>
            <div className="flex items-center gap-2.5 text-stone-400">
              <Printer className="w-4 h-4 flex-shrink-0" />
              <span>Fax: {COMPANY_INFO.fax}</span>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={openAssistant}
              className="min-h-[44px] inline-flex items-center gap-2 bg-mocha-900 border border-gold/40 hover:border-gold px-3.5 py-2 rounded text-xs sm:text-sm text-gold font-medium transition-colors gold-border-glow"
            >
              <Sparkles className="w-4 h-4 text-amber" />
              <span>Ask Jay-Co Architectural Assistant</span>
            </button>
          </div>
        </div>

        {/* Column 2: Roofing Systems */}
        <div className="space-y-3">
          <h4 className="font-serif text-gold font-semibold text-base tracking-wide border-b border-mocha-800 pb-2">
            Roofing Systems
          </h4>
          <ul className="space-y-1 text-sm">
            <li>
              <button onClick={() => navigateTo('service-standing-seam')} className="hover:text-gold py-1.5 transition-colors text-left block w-full text-stone-300">
                Standing Seam Metal Roofing
              </button>
            </li>
            <li>
              <button onClick={() => navigateTo('service-copper-roofing')} className="hover:text-gold py-1.5 transition-colors text-left block w-full text-stone-300">
                Architectural Copper Roofing
              </button>
            </li>
            <li>
              <button onClick={() => navigateTo('service-slate-tile')} className="hover:text-gold py-1.5 transition-colors text-left block w-full text-stone-300">
                Natural Vermont Slate
              </button>
            </li>
            <li>
              <button onClick={() => navigateTo('service-slate-tile')} className="hover:text-gold py-1.5 transition-colors text-left block w-full text-stone-300">
                Clay & Concrete Tile
              </button>
            </li>
            <li>
              <button onClick={() => navigateTo('service-composition-shingle')} className="hover:text-gold py-1.5 transition-colors text-left block w-full text-stone-300">
                GAF Composition Shingles
              </button>
            </li>
            <li>
              <button onClick={() => navigateTo('service-roof-replacement')} className="hover:text-gold py-1.5 transition-colors text-left block w-full text-stone-300">
                Residential Re-Roofing
              </button>
            </li>
            <li>
              <button onClick={() => navigateTo('service-roof-repairs')} className="hover:text-gold py-1.5 transition-colors text-left block w-full text-stone-300">
                Leak Detection & Diagnostics
              </button>
            </li>
            <li>
              <button onClick={() => navigateTo('service-waterproofing')} className="hover:text-gold py-1.5 transition-colors text-left block w-full text-stone-300">
                Balcony Deck Waterproofing
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: Metal Fabrication */}
        <div className="space-y-3">
          <h4 className="font-serif text-gold font-semibold text-base tracking-wide border-b border-mocha-800 pb-2">
            Shop Fabrication
          </h4>
          <ul className="space-y-1 text-sm">
            <li>
              <button onClick={() => navigateTo('architectural-metal')} className="hover:text-gold py-1.5 transition-colors text-left block w-full text-stone-300">
                Knight St Shop Facility
              </button>
            </li>
            <li>
              <button onClick={() => navigateTo('service-custom-flashing')} className="hover:text-gold py-1.5 transition-colors text-left block w-full text-stone-300">
                Custom Chimney Shrouds
              </button>
            </li>
            <li>
              <button onClick={() => navigateTo('service-gutters-downspouts')} className="hover:text-gold py-1.5 transition-colors text-left block w-full text-stone-300">
                Seamless Half-Round Gutters
              </button>
            </li>
            <li>
              <button onClick={() => navigateTo('service-gutters-downspouts')} className="hover:text-gold py-1.5 transition-colors text-left block w-full text-stone-300">
                Architectural Wall Scuppers
              </button>
            </li>
            <li>
              <button onClick={() => navigateTo('service-sheet-metal')} className="hover:text-gold py-1.5 transition-colors text-left block w-full text-stone-300">
                Parapet Coping & Edge Metal
              </button>
            </li>
            <li>
              <button onClick={() => navigateTo('service-copper-roofing')} className="hover:text-gold py-1.5 transition-colors text-left block w-full text-stone-300">
                Hand-Soldered Flat Seams
              </button>
            </li>
            <li>
              <button onClick={() => navigateTo('materials')} className="hover:text-gold py-1.5 transition-colors text-left block w-full text-stone-300">
                Materials & Metal Gauges
              </button>
            </li>
          </ul>
        </div>

        {/* Column 4: Trust & Navigation */}
        <div className="space-y-3">
          <h4 className="font-serif text-gold font-semibold text-base tracking-wide border-b border-mocha-800 pb-2">
            Company & Trust
          </h4>
          <ul className="space-y-1 text-sm">
            <li>
              <button onClick={() => navigateTo('about')} className="hover:text-gold py-1.5 transition-colors text-left block w-full text-stone-300">
                About Jay-Co
              </button>
            </li>
            <li>
              <button onClick={() => navigateTo('heritage')} className="hover:text-gold py-1.5 transition-colors text-left block w-full text-stone-300">
                Company Heritage (c. 1988)
              </button>
            </li>
            <li>
              <button onClick={() => navigateTo('projects')} className="hover:text-gold py-1.5 transition-colors text-left block w-full text-stone-300">
                Project Portfolio
              </button>
            </li>
            <li>
              <button onClick={() => navigateTo('project-bunker-hill')} className="hover:text-gold py-1.5 transition-colors text-left flex items-center gap-1 text-gold font-medium block w-full">
                <FileCheck className="w-3.5 h-3.5 text-amber flex-shrink-0 inline" />
                <span>Bunker Hill Case Study</span>
              </button>
            </li>
            <li>
              <button onClick={() => navigateTo('before-after')} className="hover:text-gold py-1.5 transition-colors text-left block w-full text-stone-300">
                Before & After Transformations
              </button>
            </li>
            <li>
              <button onClick={() => navigateTo('reviews')} className="hover:text-gold py-1.5 transition-colors text-left block w-full text-stone-300">
                Verified Reviews (4.5★)
              </button>
            </li>
            <li>
              <button onClick={() => navigateTo('gaf-certification')} className="hover:text-gold py-1.5 transition-colors text-left block w-full text-stone-300">
                GAF Verification (#1132527)
              </button>
            </li>
            <li>
              <button onClick={() => navigateTo('service-areas')} className="hover:text-gold py-1.5 transition-colors text-left block w-full text-stone-300">
                Houston Service Areas
              </button>
            </li>
            <li>
              <button onClick={() => navigateTo('estimator')} className="hover:text-gold py-1.5 transition-colors text-left block w-full text-stone-300">
                Interactive Roof Estimator
              </button>
            </li>
            <li>
              <button onClick={() => navigateTo('financing')} className="hover:text-gold py-1.5 transition-colors text-left block w-full text-stone-300">
                Payment Budget Calculator
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Factual Integrity & Transparency Notice */}
      <div className="bg-mocha-900/60 border-t border-mocha-800 py-6 px-4 sm:px-8 text-xs text-stone-400">
        <div className="max-w-7xl mx-auto space-y-2">
          <p>
            <strong className="text-gold">Factual Integrity Disclosure:</strong> Jay-Co Sheet Metal & Roofing (operating legally as Jay-Co Enterprises, LLC) is located at 2307 Knight St, Houston, TX 77093. GAF Contractor ID #1132527 reflects verified GAF Certified™ Residential Contractor status. The company is not BBB accredited and is unrated by the Better Business Bureau. Documented re-roofing project reference corresponds to City of Bunker Hill Village public building permit #20220639 (11838 Brandywine Ln, completed April 27, 2023). Historical domain jay-co.com currently resolves to an unrelated Missouri directional boring entity and does not represent Jay-Co Sheet Metal & Roofing of Houston, TX.
          </p>
        </div>
      </div>

      {/* Copyright & Legal Sub-Footer */}
      <div className="bg-mocha-950 border-t border-mocha-900 pt-5 pb-[max(5.5rem,calc(4.5rem+env(safe-area-inset-bottom)))] sm:py-5 px-4 sm:px-8 text-xs text-stone-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Jay-Co Enterprises, LLC. All rights reserved. Houston, Texas.</p>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-6 gap-y-2">
            <button onClick={() => navigateTo('privacy')} className="hover:text-gold py-2 px-1 transition-colors">
              Privacy Policy
            </button>
            <button onClick={() => navigateTo('terms')} className="hover:text-gold py-2 px-1 transition-colors">
              Terms of Service
            </button>
            <button onClick={() => navigateTo('cookies')} className="hover:text-gold py-2 px-1 transition-colors">
              Cookie Policy
            </button>
            <button onClick={() => openPreferences('categories')} className="hover:text-gold py-2 px-1 transition-colors">
              Cookie Preferences
            </button>
            <button onClick={() => openPreferences('ccpa')} className="hover:text-amber py-2 px-1 transition-colors">
              Do Not Sell or Share My Info
            </button>
            <button onClick={() => navigateTo('faqs')} className="hover:text-gold py-2 px-1 transition-colors">
              FAQs
            </button>
            <button onClick={() => navigateTo('contact')} className="hover:text-gold py-2 px-1 transition-colors font-medium">
              Contact Shop
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
