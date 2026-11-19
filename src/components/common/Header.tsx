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
    <header className="sticky top-0 z-40 w-full bg-charcoal-950/95 backdrop-blur-md border-b border-charcoal-800 transition-all duration-300">
      {/* Top Utility Announcement Bar */}
      <div className="bg-charcoal-900 border-b border-charcoal-800/60 text-xs py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 text-stone-400">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-copper font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-copper" />
              <span>GAF Certified™ Contractor #1132527</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5 hover:text-stone-200 transition-colors">
              <MapPin className="w-3.5 h-3.5 text-copper" />
              <span>2307 Knight St, Houston, TX 77093</span>
            </span>
            <span className="hidden lg:inline text-stone-500">|</span>
            <span className="hidden lg:inline text-stone-400">Shop Fabrication & Roofing Specialists</span>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <button 
              onClick={openAssistant}
              className="flex items-center gap-1.5 text-copper hover:text-copper-light transition-colors font-medium bg-charcoal-800/80 px-2.5 py-1 rounded border border-copper/30 text-xs"
              title="Open Jay-Co Architectural Assistant"
            >
              <Sparkles className="w-3.5 h-3.5 text-copper animate-pulse" />
              <span>AI Assistant</span>
            </button>
            <a 
              href={`tel:${COMPANY_INFO.phone}`} 
              className="flex items-center gap-1.5 text-ivory hover:text-copper transition-colors font-semibold tracking-wide"
            >
              <Phone className="w-3.5 h-3.5 text-copper" />
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
          <div className="w-11 h-11 rounded-sm bg-gradient-to-br from-charcoal-850 to-charcoal-900 border border-copper/50 p-2 flex items-center justify-center shadow-copper transition-transform group-hover:scale-105">
            <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
              <polygon points="50,10 90,40 75,40 50,22 25,40 10,40" fill="#C68642" />
              <rect x="22" y="44" width="56" height="46" fill="#121518" stroke="#C68642" strokeWidth="4" />
              <path d="M34 90 L34 60 L66 60 L66 90" fill="#C68642" />
              <circle cx="50" cy="35" r="4" fill="#C68642" />
            </svg>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-ivory group-hover:text-copper transition-colors">
                Jay-Co
              </span>
              <span className="text-[10px] tracking-widest uppercase bg-copper/15 text-copper px-1.5 py-0.5 rounded border border-copper/30 font-mono">
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
            className={`transition-colors py-2 ${currentRoute === 'home' ? 'text-copper font-semibold' : 'text-stone-300 hover:text-ivory'}`}
          >
            Home
          </button>

          {/* Services Megamenu Dropdown */}
          <div className="relative" onMouseLeave={() => setServicesDropdownOpen(false)}>
            <button 
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              className={`flex items-center gap-1.5 py-2 transition-colors ${currentRoute.startsWith('service') ? 'text-copper font-semibold' : 'text-stone-300 hover:text-ivory'}`}
            >
              <span>Services</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesDropdownOpen ? 'rotate-180 text-copper' : ''}`} />
            </button>

            {servicesDropdownOpen && (
              <div 
                className="absolute top-full left-0 w-80 bg-charcoal-900 border border-charcoal-700/80 rounded-sm shadow-elevated p-3 z-50 animate-fadeIn"
                onMouseEnter={() => setServicesDropdownOpen(true)}
              >
                <div className="text-[11px] font-mono text-copper uppercase tracking-wider px-3 py-1.5 border-b border-charcoal-800">
                  Architectural Divisions
                </div>
                <div className="py-1">
                  <button onClick={() => handleNav('service-standing-seam')} className="w-full text-left px-3 py-2 rounded hover:bg-charcoal-800 text-stone-200 hover:text-copper text-xs transition-colors flex items-center justify-between">
                    <span>Standing Seam Metal Roofing</span>
                    <span className="text-[10px] text-copper/80 font-mono">24-Ga</span>
                  </button>
                  <button onClick={() => handleNav('service-copper-roofing')} className="w-full text-left px-3 py-2 rounded hover:bg-charcoal-800 text-stone-200 hover:text-copper text-xs transition-colors flex items-center justify-between">
                    <span>Architectural Copper Fabrication</span>
                    <span className="text-[10px] text-copper/80 font-mono">16/20oz</span>
                  </button>
                  <button onClick={() => handleNav('service-sheet-metal')} className="w-full text-left px-3 py-2 rounded hover:bg-charcoal-800 text-stone-200 hover:text-copper text-xs transition-colors flex items-center justify-between">
                    <span>Custom Shop Fabrication</span>
                    <span className="text-[10px] text-copper/80 font-mono">Knight St</span>
                  </button>
                  <button onClick={() => handleNav('service-slate-tile')} className="w-full text-left px-3 py-2 rounded hover:bg-charcoal-800 text-stone-200 hover:text-copper text-xs transition-colors flex items-center justify-between">
                    <span>Slate & Clay Tile Roofing</span>
                    <span className="text-[10px] text-copper/80 font-mono">S-1 Stone</span>
                  </button>
                  <button onClick={() => handleNav('service-composition-shingle')} className="w-full text-left px-3 py-2 rounded hover:bg-charcoal-800 text-stone-200 hover:text-copper text-xs transition-colors flex items-center justify-between">
                    <span>Composition Shingles & GAF</span>
                    <span className="text-[10px] text-copper/80 font-mono">ID:1132527</span>
                  </button>
                  <button onClick={() => handleNav('service-roof-replacement')} className="w-full text-left px-3 py-2 rounded hover:bg-charcoal-800 text-stone-200 hover:text-copper text-xs transition-colors">
                    <span>Roof Replacement & Re-Roofing</span>
                  </button>
                  <button onClick={() => handleNav('service-gutters-downspouts')} className="w-full text-left px-3 py-2 rounded hover:bg-charcoal-800 text-stone-200 hover:text-copper text-xs transition-colors">
                    <span>Architectural Gutters & Scuppers</span>
                  </button>
                  <button onClick={() => handleNav('service-custom-flashing')} className="w-full text-left px-3 py-2 rounded hover:bg-charcoal-800 text-stone-200 hover:text-copper text-xs transition-colors">
                    <span>Chimney Caps & Custom Flashing</span>
                  </button>
                  <button onClick={() => handleNav('service-roof-repairs')} className="w-full text-left px-3 py-2 rounded hover:bg-charcoal-800 text-stone-200 hover:text-copper text-xs transition-colors">
                    <span>Roof Repairs & Diagnostics</span>
                  </button>
                  <button onClick={() => handleNav('service-waterproofing')} className="w-full text-left px-3 py-2 rounded hover:bg-charcoal-800 text-stone-200 hover:text-copper text-xs transition-colors">
                    <span>Low-Slope & Balcony Waterproofing</span>
                  </button>
                </div>
                <div className="pt-2 border-t border-charcoal-800">
                  <button 
                    onClick={() => handleNav('services')} 
                    className="w-full text-center py-1.5 text-xs text-copper font-medium hover:underline"
                  >
                    View All Services Directory →
                  </button>
                </div>
              </div>
            )}
          </div>

          <button 
            onClick={() => handleNav('architectural-metal')}
            className={`transition-colors py-2 ${currentRoute === 'architectural-metal' ? 'text-copper font-semibold' : 'text-stone-300 hover:text-ivory'}`}
          >
            Metal Fabrication
          </button>

          <button 
            onClick={() => handleNav('materials')}
            className={`transition-colors py-2 ${currentRoute === 'materials' ? 'text-copper font-semibold' : 'text-stone-300 hover:text-ivory'}`}
          >
            Materials
          </button>

          <button 
            onClick={() => handleNav('projects')}
            className={`transition-colors py-2 ${currentRoute === 'projects' || currentRoute === 'project-bunker-hill' ? 'text-copper font-semibold' : 'text-stone-300 hover:text-ivory'}`}
          >
            Portfolio
          </button>

          {/* Company Dropdown */}
          <div className="relative" onMouseLeave={() => setCompanyDropdownOpen(false)}>
            <button 
              onMouseEnter={() => setCompanyDropdownOpen(true)}
              onClick={() => setCompanyDropdownOpen(!companyDropdownOpen)}
              className={`flex items-center gap-1.5 py-2 transition-colors ${['about', 'heritage', 'certifications', 'gaf-certification', 'service-areas', 'reviews', 'faqs'].includes(currentRoute) ? 'text-copper font-semibold' : 'text-stone-300 hover:text-ivory'}`}
            >
              <span>Company & Trust</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${companyDropdownOpen ? 'rotate-180 text-copper' : ''}`} />
            </button>

            {companyDropdownOpen && (
              <div 
                className="absolute top-full left-0 w-64 bg-charcoal-900 border border-charcoal-700/80 rounded-sm shadow-elevated p-2 z-50 animate-fadeIn"
                onMouseEnter={() => setCompanyDropdownOpen(true)}
              >
                <button onClick={() => handleNav('about')} className="w-full text-left px-3 py-2 rounded hover:bg-charcoal-800 text-stone-200 hover:text-copper text-xs transition-colors">
                  About Jay-Co
                </button>
                <button onClick={() => handleNav('heritage')} className="w-full text-left px-3 py-2 rounded hover:bg-charcoal-800 text-stone-200 hover:text-copper text-xs transition-colors">
                  Company Heritage & History
                </button>
                <button onClick={() => handleNav('gaf-certification')} className="w-full text-left px-3 py-2 rounded hover:bg-charcoal-800 text-stone-200 hover:text-copper text-xs transition-colors flex items-center justify-between">
                  <span>GAF Certification</span>
                  <span className="text-[10px] text-copper font-mono">#1132527</span>
                </button>
                <button onClick={() => handleNav('certifications')} className="w-full text-left px-3 py-2 rounded hover:bg-charcoal-800 text-stone-200 hover:text-copper text-xs transition-colors">
                  Certifications & Standards
                </button>
                <button onClick={() => handleNav('reviews')} className="w-full text-left px-3 py-2 rounded hover:bg-charcoal-800 text-stone-200 hover:text-copper text-xs transition-colors flex items-center justify-between">
                  <span>Google & Client Reviews</span>
                  <span className="text-[10px] text-amber-400 font-bold">4.5 ★</span>
                </button>
                <button onClick={() => handleNav('service-areas')} className="w-full text-left px-3 py-2 rounded hover:bg-charcoal-800 text-stone-200 hover:text-copper text-xs transition-colors">
                  Houston Service Areas
                </button>
                <button onClick={() => handleNav('faqs')} className="w-full text-left px-3 py-2 rounded hover:bg-charcoal-800 text-stone-200 hover:text-copper text-xs transition-colors">
                  Architectural FAQs
                </button>
              </div>
            )}
          </div>

          <button 
            onClick={() => handleNav('estimator')}
            className={`flex items-center gap-1.5 transition-colors py-2 ${currentRoute === 'estimator' ? 'text-copper font-semibold' : 'text-stone-300 hover:text-ivory'}`}
          >
            <Calculator className="w-3.5 h-3.5 text-copper" />
            <span>Roof Estimator</span>
          </button>
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <button 
            onClick={() => handleNav('contact')} 
            className="text-stone-300 hover:text-ivory text-xs uppercase tracking-wider font-medium px-3 py-2.5 transition-colors"
          >
            Contact
          </button>
          <button 
            onClick={() => openQuoteModal()} 
            className="bg-copper hover:bg-copper-light text-charcoal-950 font-semibold text-xs tracking-wider uppercase px-5 py-2.5 rounded-sm shadow-copper transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Request a Quote</span>
          </button>
        </div>

        {/* Mobile Menu Hamburger Button */}
        <div className="flex xl:hidden items-center gap-2">
          <button 
            onClick={() => openQuoteModal()}
            className="bg-copper hover:bg-copper-light text-charcoal-950 px-3.5 py-2 min-h-[44px] rounded-sm text-xs font-bold uppercase tracking-wider shadow-copper transition-all active:scale-[0.98] flex items-center justify-center sm:hidden"
            aria-label="Request roofing quote"
          >
            Quote
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="min-w-[44px] min-h-[44px] p-2 flex items-center justify-center text-stone-300 hover:text-ivory rounded focus:outline-none focus:ring-1 focus:ring-copper/40 active:bg-charcoal-900 transition-colors"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-copper" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu & Backdrop */}
      {mobileMenuOpen && (
        <>
          <div 
            className="fixed inset-0 top-[116px] z-30 bg-black/70 backdrop-blur-sm xl:hidden animate-fadeIn" 
            onClick={() => setMobileMenuOpen(false)} 
            aria-hidden="true" 
          />
          <div className="relative z-40 xl:hidden bg-charcoal-950 border-b border-charcoal-800 px-4 sm:px-6 py-6 max-h-[80vh] overflow-y-auto animate-fadeIn shadow-2xl">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-2 pb-4 border-b border-charcoal-800">
                <button 
                  onClick={() => handleNav('home')} 
                  className="text-left py-3 px-3.5 min-h-[44px] flex items-center rounded bg-charcoal-900 text-stone-200 text-sm font-medium hover:text-copper hover:bg-charcoal-850 active:bg-charcoal-800 transition-colors"
                >
                  Home
                </button>
                <button 
                  onClick={() => handleNav('about')} 
                  className="text-left py-3 px-3.5 min-h-[44px] flex items-center rounded bg-charcoal-900 text-stone-200 text-sm font-medium hover:text-copper hover:bg-charcoal-850 active:bg-charcoal-800 transition-colors"
                >
                  About Jay-Co
                </button>
                <button 
                  onClick={() => handleNav('heritage')} 
                  className="text-left py-3 px-3.5 min-h-[44px] flex items-center rounded bg-charcoal-900 text-stone-200 text-sm font-medium hover:text-copper hover:bg-charcoal-850 active:bg-charcoal-800 transition-colors"
                >
                  Heritage (1988)
                </button>
                <button 
                  onClick={() => handleNav('architectural-metal')} 
                  className="text-left py-3 px-3.5 min-h-[44px] flex items-center rounded bg-charcoal-900 text-stone-200 text-sm font-medium hover:text-copper hover:bg-charcoal-850 active:bg-charcoal-800 transition-colors"
                >
                  Metal Fabrication
                </button>
                <button 
                  onClick={() => handleNav('materials')} 
                  className="text-left py-3 px-3.5 min-h-[44px] flex items-center rounded bg-charcoal-900 text-stone-200 text-sm font-medium hover:text-copper hover:bg-charcoal-850 active:bg-charcoal-800 transition-colors"
                >
                  Materials
                </button>
                <button 
                  onClick={() => handleNav('projects')} 
                  className="text-left py-3 px-3.5 min-h-[44px] flex items-center rounded bg-charcoal-900 text-stone-200 text-sm font-medium hover:text-copper hover:bg-charcoal-850 active:bg-charcoal-800 transition-colors"
                >
                  Portfolio
                </button>
                <button 
                  onClick={() => handleNav('before-after')} 
                  className="text-left py-3 px-3.5 min-h-[44px] flex items-center rounded bg-charcoal-900 text-stone-200 text-sm font-medium hover:text-copper hover:bg-charcoal-850 active:bg-charcoal-800 transition-colors"
                >
                  Before & After
                </button>
                <button 
                  onClick={() => handleNav('reviews')} 
                  className="text-left py-3 px-3.5 min-h-[44px] flex items-center rounded bg-charcoal-900 text-stone-200 text-sm font-medium hover:text-copper hover:bg-charcoal-850 active:bg-charcoal-800 transition-colors"
                >
                  Reviews (4.5★)
                </button>
                <button 
                  onClick={() => handleNav('gaf-certification')} 
                  className="text-left py-3 px-3.5 min-h-[44px] flex items-center rounded bg-charcoal-900 text-copper text-sm font-medium hover:bg-charcoal-850 active:bg-charcoal-800 transition-colors"
                >
                  GAF Certified (#1132527)
                </button>
                <button 
                  onClick={() => handleNav('service-areas')} 
                  className="text-left py-3 px-3.5 min-h-[44px] flex items-center rounded bg-charcoal-900 text-stone-200 text-sm font-medium hover:text-copper hover:bg-charcoal-850 active:bg-charcoal-800 transition-colors"
                >
                  Houston Areas
                </button>
              </div>

              {/* Services List for Mobile */}
              <div>
                <div className="text-xs font-mono text-copper uppercase tracking-wider mb-2">
                  Services Directory
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-stone-300">
                  <button onClick={() => handleNav('service-standing-seam')} className="text-left p-2.5 min-h-[40px] flex items-center rounded hover:bg-charcoal-900">
                    • Standing Seam Metal
                  </button>
                  <button onClick={() => handleNav('service-copper-roofing')} className="text-left p-2.5 min-h-[40px] flex items-center rounded hover:bg-charcoal-900">
                    • Architectural Copper
                  </button>
                  <button onClick={() => handleNav('service-sheet-metal')} className="text-left p-2.5 min-h-[40px] flex items-center rounded hover:bg-charcoal-900">
                    • Shop Sheet Metal
                  </button>
                  <button onClick={() => handleNav('service-slate-tile')} className="text-left p-2.5 min-h-[40px] flex items-center rounded hover:bg-charcoal-900">
                    • Natural Slate & Tile
                  </button>
                  <button onClick={() => handleNav('service-composition-shingle')} className="text-left p-2.5 min-h-[40px] flex items-center rounded hover:bg-charcoal-900">
                    • Composition & GAF
                  </button>
                  <button onClick={() => handleNav('service-roof-replacement')} className="text-left p-2.5 min-h-[40px] flex items-center rounded hover:bg-charcoal-900">
                    • Re-Roofing Replacement
                  </button>
                  <button onClick={() => handleNav('service-gutters-downspouts')} className="text-left p-2.5 min-h-[40px] flex items-center rounded hover:bg-charcoal-900">
                    • Gutters & Scuppers
                  </button>
                  <button onClick={() => handleNav('service-custom-flashing')} className="text-left p-2.5 min-h-[40px] flex items-center rounded hover:bg-charcoal-900">
                    • Chimney Caps & Flashing
                  </button>
                  <button onClick={() => handleNav('service-roof-repairs')} className="text-left p-2.5 min-h-[40px] flex items-center rounded hover:bg-charcoal-900">
                    • Repairs & Leak Diagnostics
                  </button>
                  <button onClick={() => handleNav('service-waterproofing')} className="text-left p-2.5 min-h-[40px] flex items-center rounded hover:bg-charcoal-900">
                    • Balcony Waterproofing
                  </button>
                </div>
              </div>

              {/* Conversion Tools */}
              <div className="pt-2 border-t border-charcoal-800 space-y-2.5">
                <button 
                  onClick={() => handleNav('estimator')}
                  className="w-full min-h-[44px] py-3 px-4 bg-charcoal-900 border border-charcoal-700 text-stone-200 text-xs uppercase tracking-wider rounded font-medium flex items-center justify-center gap-2"
                >
                  <Calculator className="w-4 h-4 text-copper" />
                  <span>Interactive Roof Estimator</span>
                </button>
                <button 
                  onClick={() => handleNav('financing')}
                  className="w-full min-h-[44px] py-3 px-4 bg-charcoal-900 border border-charcoal-700 text-stone-200 text-xs uppercase tracking-wider rounded font-medium flex items-center justify-center gap-2"
                >
                  <span>Financing Calculator</span>
                </button>
                <button 
                  onClick={() => { setMobileMenuOpen(false); openQuoteModal(); }}
                  className="w-full min-h-[48px] py-3 px-4 bg-copper hover:bg-copper-light text-charcoal-950 text-xs uppercase tracking-wider font-bold rounded shadow-copper flex items-center justify-center gap-2 transition-all"
                >
                  <FileText className="w-4 h-4" />
                  <span>Request a Detailed Quote</span>
                </button>
                <a 
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="w-full min-h-[48px] py-3 px-4 bg-charcoal-800 hover:bg-charcoal-700 text-ivory text-xs uppercase tracking-wider font-bold rounded flex items-center justify-center gap-2 border border-charcoal-700 transition-colors"
                >
                  <Phone className="w-4 h-4 text-copper" />
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
