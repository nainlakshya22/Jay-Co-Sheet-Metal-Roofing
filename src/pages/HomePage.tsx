import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { COMPANY_INFO, SERVICES } from '../data/companyData';
import { CinematicHero } from '../components/home/CinematicHero';
import { CompanyIntro } from '../components/home/CompanyIntro';
import { EditorialPosterBanner } from '../components/home/EditorialPosterBanner';
import { MaterialsShowcase } from '../components/home/MaterialsShowcase';
import { FilterablePortfolio } from '../components/home/FilterablePortfolio';
import { BeforeAfterSlider } from '../components/tools/BeforeAfterSlider';
import { HeritageSection } from '../components/home/HeritageSection';
import { GAFCertificationSection } from '../components/home/GAFCertificationSection';
import { GoogleReviewsSection } from '../components/home/GoogleReviewsSection';
import { InteractiveEstimator } from '../components/tools/InteractiveEstimator';
import { FinancingCalculator } from '../components/tools/FinancingCalculator';
import { ServiceAreaMap } from '../components/home/ServiceAreaMap';
import { CraftsmanshipSection } from '../components/home/CraftsmanshipSection';
import { FaqSection } from '../components/home/FaqSection';
import { 
  ArrowRight, 
  ShieldCheck, 
  Hammer, 
  Phone, 
  FileText 
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { navigateTo, openQuoteModal } = useNavigation();

  return (
    <div className="space-y-0 bg-mocha-950">
      {/* 1. Cinematic Video Hero */}
      <CinematicHero />

      {/* 2 & 3. Company Introduction & Core Expertise */}
      <CompanyIntro />

      {/* 4. Editorial Poster Banner with Three-Color Luxury Palette */}
      <EditorialPosterBanner />

      {/* 5. Roofing Services & Architectural Metal Divisions Overview */}
      <section className="py-20 lg:py-28 bg-mocha-900 border-t border-mocha-800 text-stone-300 relative overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-mocha-800 pb-6 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="p-1.5 bg-mocha-850 text-gold rounded border border-gold/30">
                  <Hammer className="w-4 h-4 text-amber" />
                </span>
                <span className="text-xs font-mono uppercase tracking-widest text-gold">
                  Houston Architectural Divisions
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-ivory font-bold">
                Specialized Roofing & Sheet Metal Services
              </h2>
              <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-2xl">
                Every service engineered for severe Gulf Coast storm exposure and hand-crafted in our Houston facility.
              </p>
            </div>

            <button
              onClick={() => navigateTo('services')}
              className="text-gold-light hover:text-gold text-xs uppercase tracking-wider font-semibold transition-colors flex items-center gap-1.5 border border-gold/30 px-3.5 py-2 rounded bg-mocha-850"
            >
              <span>View All 10 Services Directory</span>
              <ArrowRight className="w-4 h-4 text-amber" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.slice(0, 6).map(service => (
              <div
                key={service.id}
                className="group bg-mocha-950 border border-mocha-800 hover:border-gold/60 rounded overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-luxury hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden bg-mocha-900">
                  <img
                    src={service.heroImage}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-mocha-950 via-mocha-950/30 to-transparent" />
                  <span className="absolute top-3 left-3 bg-mocha-950/90 text-gold border border-gold/30 text-[10px] font-mono px-2 py-0.5 rounded">
                    {service.category}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-serif text-lg text-ivory font-bold group-hover:text-gold transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-stone-300 mt-2 line-clamp-3 leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-mocha-850 flex items-center justify-between">
                    <button
                      onClick={() => navigateTo(service.slug)}
                      className="text-amber hover:text-amber-light text-xs font-semibold uppercase tracking-wider flex items-center gap-1 transition-colors"
                    >
                      <span>Explore Technical Specs</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => openQuoteModal({ service: service.title })}
                      className="text-stone-300 hover:text-gold text-xs transition-colors"
                    >
                      Quote →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Materials Showcase */}
      <MaterialsShowcase />

      {/* 7 & 9. Top 5 Featured Projects & Filterable Project Portfolio */}
      <section className="py-20 lg:py-28 bg-mocha-950 border-t border-mocha-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <FilterablePortfolio />
        </div>
      </section>

      {/* 8. Interactive Before & After Slider */}
      <section className="py-20 lg:py-28 bg-mocha-900 border-t border-mocha-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <BeforeAfterSlider />
        </div>
      </section>

      {/* 10. Company Heritage Section */}
      <HeritageSection />

      {/* 11 & 12. GAF Certification & Credential Standards */}
      <section className="py-20 lg:py-28 bg-mocha-950 border-t border-mocha-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <GAFCertificationSection />
        </div>
      </section>

      {/* 13. Google Reviews Showcase */}
      <section className="py-20 lg:py-28 bg-mocha-900 border-t border-mocha-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <GoogleReviewsSection />
        </div>
      </section>

      {/* 14. Interactive Roof Estimator */}
      <section className="py-20 lg:py-28 bg-mocha-950 border-t border-mocha-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <InteractiveEstimator />
        </div>
      </section>

      {/* 15. Financing Calculator */}
      <section className="py-20 lg:py-28 bg-mocha-900 border-t border-mocha-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <FinancingCalculator />
        </div>
      </section>

      {/* 16. Interactive Houston Service Area Map */}
      <section className="py-20 lg:py-28 bg-mocha-950 border-t border-mocha-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <ServiceAreaMap />
        </div>
      </section>

      {/* 17. Craftsmanship & Infrastructure Standards */}
      <CraftsmanshipSection />

      {/* 18. Frequently Asked Questions */}
      <FaqSection />

      {/* 19. Premium Final Conversion Call To Action */}
      <section className="py-24 bg-gradient-to-b from-mocha-900 via-mocha-950 to-mocha-950 border-t border-mocha-800 text-center text-stone-200 relative overflow-hidden">
        {/* Ambient Golden Atmosphere Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gold/10 rounded-full blur-[130px] pointer-events-none animate-ambient-glow" />

        <div className="max-w-4xl mx-auto px-4 sm:px-8 relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 bg-mocha-850 border border-gold/40 px-3.5 py-1.5 rounded-full text-gold text-xs font-mono uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-amber" />
            <span>GAF Certified™ Contractor #1132527</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-ivory font-bold leading-tight">
            Consult With Houston's Premier Architectural Roofing & Sheet Metal Artisans.
          </h2>

          <p className="text-sm sm:text-base text-stone-300 max-w-2xl mx-auto leading-relaxed">
            Whether engineering a 24-gauge standing seam roof, hand-soldering architectural copper dormers, or planning a full residential re-roof, our senior estimators are ready to review your project.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => openQuoteModal()}
              className="w-full sm:w-auto amber-button-glow font-bold px-8 py-4 rounded-sm text-xs uppercase tracking-widest flex items-center justify-center gap-2 relative-shimmer group"
            >
              <FileText className="w-4 h-4 text-mocha-950" />
              <span>Request An On-Site Consultation</span>
            </button>

            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="w-full sm:w-auto bg-mocha-850 hover:bg-mocha-800 border border-gold/40 hover:border-gold text-gold-light font-semibold px-8 py-4 rounded-sm text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300 gold-border-glow"
            >
              <Phone className="w-4 h-4 text-amber" />
              <span>Call {COMPANY_INFO.phoneFormatted}</span>
            </a>
          </div>

          <p className="text-xs text-stone-400 font-mono pt-4">
            Physical Shop: 2307 Knight St, Houston, TX 77093 • No Obligation Technical Assessments
          </p>
        </div>
      </section>
    </div>
  );
};
