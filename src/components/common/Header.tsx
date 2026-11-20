import React, { useState } from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { COMPANY_INFO } from '../../data/companyData';
import { 
  Phone, 
  MapPin, 
  ShieldCheck, 
  Menu, 
  X, 
  ChevronDown, 
  Calculator, 
  Sparkles, 
  FileText,
  Hammer
} from 'lucide-react';
import { PageRoute } from '../../types';

export const Header: React.FC = () => {
  const { currentRoute, navigateTo, openQuoteModal, openAssistant } = useNavigation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);

  const handleNav = (route: PageRoute) => {
    navigateTo(route);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setCompanyDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-mocha-950/95 backdrop-blur-md border-b border-mocha-800 transition-all duration-300">
      {/* Top Utility Announcement Bar */}
      <div className="bg-mocha-900 border-b border-mocha-800/80 text-xs py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 text-stone-300">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-gold font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-amber" />
              <span>GAF Certified™ Contractor #1132527</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-stone-300 hover:text-gold transition-colors">
              <MapPin className="w-3.5 h-3.5 text-amber" />
              <span>2307 Knight St, Houston, TX 77093</span>
            </span>
            <span className="hidden lg:inline text-mocha-700">|</span>
            <span className="hidden lg:inline text-stone-300">Shop Fabrication & Roofing Specialists</span>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <button 
              onClick={openAssistant}
              className="flex items-center gap-1.5 text-gold hover:text-gold-light transition-colors font-medium bg-mocha-850 px-2.5 py-1 rounded border border-gold/30 text-xs shadow-sm"
              title="Open Jay-Co Architectural Assistant"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber animate-pulse" />
              <span>AI Assistant</span>
            </button>
            <a 
              href={`tel:${COMPANY_INFO.phone}`} 
              className="flex items-center gap-1.5 text-ivory hover:text-gold transition-colors font-semibold tracking-wide"
            >
              <Phone className="w-3.5 h-3.5 text-amber" />
              <span>{COMPANY_INFO.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-8 h-20 flex items-center justify-between gap-2 sm:gap-4">
        {/* Brand Logo */}
        <button 
          onClick={() => handleNav('home')} 
          className="text-left group flex items-center gap-3.5 focus:outline-none"
        >
          <div className="w-11 h-11 rounded-sm bg-gradient-to-br from-mocha-850 to-mocha-900 border border-gold/40 p-2 flex items-center justify-center shadow-gold transition-transform group-hover:scale-105">
            <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
              <polygon points="50,10 90,40 75,40 50,22 25,40 10,40" fill="#C8792C" />
              <rect x="22" y="44" width="56" height="46" fill="#1C1612" stroke="#F4D9A0" strokeWidth="4" />
              <path d="M34 90 L34 60 L66 60 L66 90" fill="#C8792C" />
              <circle cx="50" cy="35" r="4" fill="#F4D9A0" />
            </svg>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-ivory group-hover:text-gold transition-colors">
                Jay-Co
              </span>
              <span className="text-[10px] tracking-widest uppercase bg-mocha-850 text-gold px-1.5 py-0.5 rounded border border-gold/30 font-mono">
                Houston
              </span>
            </div>
            <p className="text-xs text-stone-400 font-sans tracking-wider uppercase">
              Sheet Metal & Roofing
            </p>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-7 text-sm font-medium">
          <button 
            onClick={() => handleNav('home')}
            className={`transition-colors py-2 flex items-center gap-1.5 ${currentRoute === 'home' ? 'text-gold font-semibold' : 'text-stone-300 hover:text-gold'}`}
          >
            {currentRoute === 'home' && <span className="w-1.5 h-1.5 rounded-full bg-amber" />}
            <span>Home</span>
          </button>

          {/* Services Megamenu Dropdown */}
          <div className="relative" onMouseLeave={() => setServicesDropdownOpen(false)}>
            <button 
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              className={`flex items-center gap-1.5 py-2 transition-colors ${currentRoute.startsWith('service') ? 'text-gold font-semibold' : 'text-stone-300 hover:text-gold'}`}
            >
              {currentRoute.startsWith('service') && <span className="w-1.5 h-1.5 rounded-full bg-amber" />}
              <span>Services</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesDropdownOpen ? 'rotate-180 text-gold' : ''}`} />
            </button>

            {servicesDropdownOpen && (
              <div 
                className="absolute top-full left-0 w-80 bg-mocha-900 border border-gold/30 rounded-sm shadow-luxury p-3 z-50 animate-fadeIn"
                onMouseEnter={() => setServicesDropdownOpen(true)}
              >
                <div className="text-[11px] font-mono text-gold uppercase tracking-wider px-3 py-1.5 border-b border-mocha-800">
                  Architectural Divisions
                </div>
                <div className="py-1">
                  <button onClick={() => handleNav('service-standing-seam')} className="w-full text-left px-3 py-2 rounded hover:bg-mocha-800 text-stone-200 hover:text-gold text-xs transition-colors flex items-center justify-between">
                    <span>Standing Seam Metal Roofing</span>
                    <span className="text-[10px] text-amber font-mono">24-Ga</span>
                  </button>
                  <button onClick={() => handleNav('service-copper-roofing')} className="w-full text-left px-3 py-2 rounded hover:bg-mocha-800 text-stone-200 hover:text-gold text-xs transition-colors flex items-center justify-between">
                    <span>Architectural Copper Fabrication</span>
                    <span className="text-[10px] text-amber font-mono">16/20oz</span>
                  </button>
                  <button onClick={() => handleNav('service-sheet-metal')} className="w-full text-left px-3 py-2 rounded hover:bg-mocha-800 text-stone-200 hover:text-gold text-xs transition-colors flex items-center justify-between">
                    <span>Custom Shop Fabrication</span>
                    <span className="text-[10px] text-gold font-mono">Knight St</span>
                  </button>
                  <button onClick={() => handleNav('service-slate-tile')} className="w-full text-left px-3 py-2 rounded hover:bg-mocha-800 text-stone-200 hover:text-gold text-xs transition-colors flex items-center justify-between">
                    <span>Slate & Clay Tile Roofing</span>
                    <span className="text-[10px] text-stone-400 font-mono">S-1 Stone</span>
                  </button>
                  <button onClick={() => handleNav('service-composition-shingle')} className="w-full text-left px-3 py-2 rounded hover:bg-mocha-800 text-stone-200 hover:text-gold text-xs transition-colors flex items-center justify-between">
                    <span>Composition Shingles & GAF</span>
                    <span className="text-[10px] text-gold font-mono">ID:1132527</span>
                  </button>
                  <button onClick={() => handleNav('service-roof-replacement')} className="w-full text-left px-3 py-2 rounded hover:bg-mocha-800 text-stone-200 hover:text-gold text-xs transition-colors">
                    <span>Roof Replacement & Re-Roofing</span>
                  </button>
                  <button onClick={() => handleNav('service-gutters-downspouts')} className="w-full text-left px-3 py-2 rounded hover:bg-mocha-800 text-stone-200 hover:text-gold text-xs transition-colors">
                    <span>Architectural Gutters & Scuppers</span>
                  </button>
                  <button onClick={() => handleNav('service-custom-flashing')} className="w-full text-left px-3 py-2 rounded hover:bg-mocha-800 text-stone-200 hover:text-gold text-xs transition-colors">
                    <span>Chimney Caps & Custom Flashing</span>
                  </button>
                  <button onClick={() => handleNav('service-roof-repairs')} className="w-full text-left px-3 py-2 rounded hover:bg-mocha-800 text-stone-200 hover:text-gold text-xs transition-colors">
                    <span>Roof Repairs & Diagnostics</span>
                  </button>
                  <button onClick={() => handleNav('service-waterproofing')} className="w-full text-left px-3 py-2 rounded hover:bg-mocha-800 text-stone-200 hover:text-gold text-xs transition-colors">
                    <span>Low-Slope & Balcony Waterproofing</span>
                  </button>
                </div>
                <div className="pt-2 border-t border-mocha-800">
                  <button 
                    onClick={() => handleNav('services')} 
                    className="w-full text-center py-1.5 text-xs text-gold font-medium hover:underline"
                  >
                    View All Services Directory →
                  </button>
                </div>
              </div>
            )}
          </div>

          <button 
            onClick={() => handleNav('architectural-metal')}
            className={`transition-colors py-2 flex items-center gap-1.5 ${currentRoute === 'architectural-metal' ? 'text-gold font-semibold' : 'text-stone-300 hover:text-gold'}`}
          >
            {currentRoute === 'architectural-metal' && <span className="w-1.5 h-1.5 rounded-full bg-amber" />}
            <span>Metal Fabrication</span>
          </button>

          <button 
            onClick={() => handleNav('materials')}
            className={`transition-colors py-2 flex items-center gap-1.5 ${currentRoute === 'materials' ? 'text-gold font-semibold' : 'text-stone-300 hover:text-gold'}`}
          >
            {currentRoute === 'materials' && <span className="w-1.5 h-1.5 rounded-full bg-amber" />}
            <span>Materials</span>
          </button>

          <button 
            onClick={() => handleNav('projects')}
            className={`transition-colors py-2 flex items-center gap-1.5 ${currentRoute === 'projects' || currentRoute === 'project-bunker-hill' ? 'text-gold font-semibold' : 'text-stone-300 hover:text-gold'}`}
          >
            {(currentRoute === 'projects' || currentRoute === 'project-bunker-hill') && <span className="w-1.5 h-1.5 rounded-full bg-amber" />}
            <span>Portfolio</span>
          </button>

          {/* Company Dropdown */}
          <div className="relative" onMouseLeave={() => setCompanyDropdownOpen(false)}>
            <button 
              onMouseEnter={() => setCompanyDropdownOpen(true)}
              onClick={() => setCompanyDropdownOpen(!companyDropdownOpen)}
              className={`flex items-center gap-1.5 py-2 transition-colors ${['about', 'heritage', 'certifications', 'gaf-certification', 'service-areas', 'reviews', 'faqs'].includes(currentRoute) ? 'text-gold font-semibold' : 'text-stone-300 hover:text-gold'}`}
            >
              {['about', 'heritage', 'certifications', 'gaf-certification', 'service-areas', 'reviews', 'faqs'].includes(currentRoute) && <span className="w-1.5 h-1.5 rounded-full bg-amber" />}
              <span>Company & Trust</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${companyDropdownOpen ? 'rotate-180 text-gold' : ''}`} />
            </button>

            {companyDropdownOpen && (
              <div 
                className="absolute top-full left-0 w-64 bg-mocha-900 border border-gold/30 rounded-sm shadow-luxury p-2 z-50 animate-fadeIn"
                onMouseEnter={() => setCompanyDropdownOpen(true)}
              >
                <button onClick={() => handleNav('about')} className="w-full text-left px-3 py-2 rounded hover:bg-mocha-800 text-stone-200 hover:text-gold text-xs transition-colors">
                  About Jay-Co
                </button>
                <button onClick={() => handleNav('heritage')} className="w-full text-left px-3 py-2 rounded hover:bg-mocha-800 text-stone-200 hover:text-gold text-xs transition-colors">
                  Company Heritage & History
                </button>
                <button onClick={() => handleNav('gaf-certification')} className="w-full text-left px-3 py-2 rounded hover:bg-mocha-800 text-stone-200 hover:text-gold text-xs transition-colors flex items-center justify-between">
                  <span>GAF Certification</span>
                  <span className="text-[10px] text-amber font-mono">#1132527</span>
                </button>
                <button onClick={() => handleNav('certifications')} className="w-full text-left px-3 py-2 rounded hover:bg-mocha-800 text-stone-200 hover:text-gold text-xs transition-colors">
                  Certifications & Standards
                </button>
                <button onClick={() => handleNav('reviews')} className="w-full text-left px-3 py-2 rounded hover:bg-mocha-800 text-stone-200 hover:text-gold text-xs transition-colors flex items-center justify-between">
                  <span>Google & Client Reviews</span>
                  <span className="text-[10px] text-gold font-bold">4.5 ★</span>
                </button>
                <button onClick={() => handleNav('service-areas')} className="w-full text-left px-3 py-2 rounded hover:bg-mocha-800 text-stone-200 hover:text-gold text-xs transition-colors">
                  Houston Service Areas
                </button>
                <button onClick={() => handleNav('faqs')} className="w-full text-left px-3 py-2 rounded hover:bg-mocha-800 text-stone-200 hover:text-gold text-xs transition-colors">
                  Architectural FAQs
                </button>
              </div>
            )}
          </div>

          <button 
            onClick={() => handleNav('estimator')}
            className={`flex items-center gap-1.5 transition-colors py-2 ${currentRoute === 'estimator' ? 'text-gold font-semibold' : 'text-stone-300 hover:text-gold'}`}
          >
            <Calculator className="w-3.5 h-3.5 text-amber" />
            <span>Roof Estimator</span>
          </button>
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <button 
            onClick={() => handleNav('contact')} 
            className="text-stone-300 hover:text-gold text-xs uppercase tracking-wider font-medium px-3 py-2.5 transition-colors"
          >
            Contact
          </button>
          <button 
            onClick={() => openQuoteModal()} 
            className="amber-button-glow font-bold text-xs tracking-wider uppercase px-5 py-2.5 rounded-sm relative-shimmer flex items-center gap-2 group"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Request a Quote</span>
          </button>
        </div>

        {/* Mobile Menu Hamburger Button */}
        <div className="flex xl:hidden items-center gap-2">
          <button 
            onClick={() => openQuoteModal()}
            className="amber-button-glow px-3.5 py-2 min-h-[44px] rounded-sm text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center sm:hidden"
            aria-label="Request roofing quote"
          >
            Quote
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="min-w-[44px] min-h-[44px] p-2 flex items-center justify-center text-stone-300 hover:text-gold rounded focus:outline-none focus:ring-1 focus:ring-gold/40 active:bg-mocha-900 transition-colors"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-gold" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu & Backdrop */}
      {mobileMenuOpen && (
        <>
          <div 
            className="fixed inset-0 top-[116px] z-30 bg-black/80 backdrop-blur-sm xl:hidden animate-fadeIn" 
            onClick={() => setMobileMenuOpen(false)} 
            aria-hidden="true" 
          />
          <div className="relative z-40 xl:hidden bg-mocha-950 border-b border-mocha-800 px-4 sm:px-6 py-6 max-h-[80vh] overflow-y-auto animate-fadeIn shadow-2xl">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-2 pb-4 border-b border-mocha-800">
                <button 
                  onClick={() => handleNav('home')} 
                  className="text-left py-3 px-3.5 min-h-[44px] flex items-center rounded bg-mocha-900 text-stone-200 text-sm font-medium hover:text-gold hover:bg-mocha-850 active:bg-mocha-800 transition-colors"
                >
                  Home
                </button>
                <button 
                  onClick={() => handleNav('about')} 
                  className="text-left py-3 px-3.5 min-h-[44px] flex items-center rounded bg-mocha-900 text-stone-200 text-sm font-medium hover:text-gold hover:bg-mocha-850 active:bg-mocha-800 transition-colors"
                >
                  About Jay-Co
                </button>
                <button 
                  onClick={() => handleNav('heritage')} 
                  className="text-left py-3 px-3.5 min-h-[44px] flex items-center rounded bg-mocha-900 text-stone-200 text-sm font-medium hover:text-gold hover:bg-mocha-850 active:bg-mocha-800 transition-colors"
                >
                  Heritage (1988)
                </button>
                <button 
                  onClick={() => handleNav('architectural-metal')} 
                  className="text-left py-3 px-3.5 min-h-[44px] flex items-center rounded bg-mocha-900 text-stone-200 text-sm font-medium hover:text-gold hover:bg-mocha-850 active:bg-mocha-800 transition-colors"
                >
                  Metal Fabrication
                </button>
                <button 
                  onClick={() => handleNav('materials')} 
                  className="text-left py-3 px-3.5 min-h-[44px] flex items-center rounded bg-mocha-900 text-stone-200 text-sm font-medium hover:text-gold hover:bg-mocha-850 active:bg-mocha-800 transition-colors"
                >
                  Materials
                </button>
                <button 
                  onClick={() => handleNav('projects')} 
                  className="text-left py-3 px-3.5 min-h-[44px] flex items-center rounded bg-mocha-900 text-stone-200 text-sm font-medium hover:text-gold hover:bg-mocha-850 active:bg-mocha-800 transition-colors"
                >
                  Portfolio
                </button>
                <button 
                  onClick={() => handleNav('before-after')} 
                  className="text-left py-3 px-3.5 min-h-[44px] flex items-center rounded bg-mocha-900 text-stone-200 text-sm font-medium hover:text-gold hover:bg-mocha-850 active:bg-mocha-800 transition-colors"
                >
                  Before & After
                </button>
                <button 
                  onClick={() => handleNav('reviews')} 
                  className="text-left py-3 px-3.5 min-h-[44px] flex items-center rounded bg-mocha-900 text-stone-200 text-sm font-medium hover:text-gold hover:bg-mocha-850 active:bg-mocha-800 transition-colors"
                >
                  Reviews (4.5★)
                </button>
                <button 
                  onClick={() => handleNav('gaf-certification')} 
                  className="text-left py-3 px-3.5 min-h-[44px] flex items-center rounded bg-mocha-900 text-gold text-sm font-medium hover:bg-mocha-850 active:bg-mocha-800 transition-colors"
                >
                  GAF Certified (#1132527)
                </button>
                <button 
                  onClick={() => handleNav('service-areas')} 
                  className="text-left py-3 px-3.5 min-h-[44px] flex items-center rounded bg-mocha-900 text-stone-200 text-sm font-medium hover:text-gold hover:bg-mocha-850 active:bg-mocha-800 transition-colors"
                >
                  Houston Areas
                </button>
              </div>

              {/* Services List for Mobile */}
              <div>
                <div className="text-xs font-mono text-gold uppercase tracking-wider mb-2">
                  Services Directory
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-stone-300">
                  <button onClick={() => handleNav('service-standing-seam')} className="text-left p-2.5 min-h-[40px] flex items-center rounded hover:bg-mocha-900 text-stone-200 hover:text-gold">
                    • Standing Seam Metal
                  </button>
                  <button onClick={() => handleNav('service-copper-roofing')} className="text-left p-2.5 min-h-[40px] flex items-center rounded hover:bg-mocha-900 text-stone-200 hover:text-gold">
                    • Architectural Copper
                  </button>
                  <button onClick={() => handleNav('service-sheet-metal')} className="text-left p-2.5 min-h-[40px] flex items-center rounded hover:bg-mocha-900 text-stone-200 hover:text-gold">
                    • Shop Sheet Metal
                  </button>
                  <button onClick={() => handleNav('service-slate-tile')} className="text-left p-2.5 min-h-[40px] flex items-center rounded hover:bg-mocha-900 text-stone-200 hover:text-gold">
                    • Natural Slate & Tile
                  </button>
                  <button onClick={() => handleNav('service-composition-shingle')} className="text-left p-2.5 min-h-[40px] flex items-center rounded hover:bg-mocha-900 text-stone-200 hover:text-gold">
                    • Composition & GAF
                  </button>
                  <button onClick={() => handleNav('service-roof-replacement')} className="text-left p-2.5 min-h-[40px] flex items-center rounded hover:bg-mocha-900 text-stone-200 hover:text-gold">
                    • Re-Roofing Replacement
                  </button>
                  <button onClick={() => handleNav('service-gutters-downspouts')} className="text-left p-2.5 min-h-[40px] flex items-center rounded hover:bg-mocha-900 text-stone-200 hover:text-gold">
                    • Gutters & Scuppers
                  </button>
                  <button onClick={() => handleNav('service-custom-flashing')} className="text-left p-2.5 min-h-[40px] flex items-center rounded hover:bg-mocha-900 text-stone-200 hover:text-gold">
                    • Chimney Caps & Flashing
                  </button>
                  <button onClick={() => handleNav('service-roof-repairs')} className="text-left p-2.5 min-h-[40px] flex items-center rounded hover:bg-mocha-900 text-stone-200 hover:text-gold">
                    • Repairs & Leak Diagnostics
                  </button>
                  <button onClick={() => handleNav('service-waterproofing')} className="text-left p-2.5 min-h-[40px] flex items-center rounded hover:bg-mocha-900 text-stone-200 hover:text-gold">
                    • Balcony Waterproofing
                  </button>
                </div>
              </div>

              {/* Conversion Tools */}
              <div className="pt-2 border-t border-mocha-800 space-y-2.5">
                <button 
                  onClick={() => handleNav('estimator')}
                  className="w-full min-h-[44px] py-3 px-4 bg-mocha-900 border border-mocha-700 text-stone-200 text-xs uppercase tracking-wider rounded font-medium flex items-center justify-center gap-2 hover:border-gold/50"
                >
                  <Calculator className="w-4 h-4 text-amber" />
                  <span>Interactive Roof Estimator</span>
                </button>
                <button 
                  onClick={() => handleNav('financing')}
                  className="w-full min-h-[44px] py-3 px-4 bg-mocha-900 border border-mocha-700 text-stone-200 text-xs uppercase tracking-wider rounded font-medium flex items-center justify-center gap-2 hover:border-gold/50"
                >
                  <span>Financing Calculator</span>
                </button>
                <button 
                  onClick={() => { setMobileMenuOpen(false); openQuoteModal(); }}
                  className="w-full min-h-[48px] py-3 px-4 amber-button-glow text-xs uppercase tracking-wider font-bold rounded flex items-center justify-center gap-2 relative-shimmer"
                >
                  <FileText className="w-4 h-4" />
                  <span>Request a Detailed Quote</span>
                </button>
                <a 
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="w-full min-h-[48px] py-3 px-4 bg-mocha-850 hover:bg-mocha-800 text-ivory text-xs uppercase tracking-wider font-bold rounded flex items-center justify-center gap-2 border border-mocha-700 transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber" />
                  <span>Call {COMPANY_INFO.phoneFormatted}</span>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};
