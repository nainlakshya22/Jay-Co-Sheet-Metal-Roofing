import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { COMPANY_INFO, SERVICES } from '../data/companyData';
import { CinematicHero } from '../components/home/CinematicHero';
import { CompanyIntro } from '../components/home/CompanyIntro';
import { MaterialsShowcase } from '../components/home/MaterialsShowcase';
import { FilterablePortfolio } from '../components/home/FilterablePortfolio';
import { BeforeAfterSlider } from '../components/tools/BeforeAfterSlider';
import { GAFCertificationSection } from '../components/home/GAFCertificationSection';
import { GoogleReviewsSection } from '../components/home/GoogleReviewsSection';
import { InteractiveEstimator } from '../components/tools/InteractiveEstimator';
import { ServiceAreaMap } from '../components/home/ServiceAreaMap';
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
      {/* STAGE 1: UNDERSTAND THE COMPANY */}
      {/* 1. Cinematic Architectural Hero */}
      <CinematicHero />

      {/* 2. Company Introduction & Knight Street Shop Facility */}
      <CompanyIntro />

      {/* STAGE 2: EXPLORE SERVICES & MATERIALS */}
      {/* 3. Core Roofing & Sheet Metal Architectural Divisions */}
      <section className="py-20 lg:py-28 bg-mocha-900 border-t border-mocha-800 text-stone-300 relative overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 border-b border-mocha-800 pb-8 mb-12">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="p-1.5 bg-mocha-850 text-gold rounded border border-gold/30">
                  <Hammer className="w-4 h-4 text-amber" />
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-gold font-semibold">
                  Architectural Divisions
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ivory font-bold leading-tight">
                Specialized Roofing & Sheet Metal Services
              </h2>
              <p className="text-base sm:text-lg text-stone-300 leading-relaxed font-sans pt-1">
                Every system engineered for severe Texas Gulf Coast storms and fabricated inside our Houston facility.
              </p>
            </div>

            <button
              onClick={() => navigateTo('services')}
              className="text-gold-light hover:text-gold text-xs uppercase tracking-wider font-semibold transition-colors flex items-center gap-2 border border-gold/40 hover:border-gold px-4 py-2.5 rounded bg-mocha-850 flex-shrink-0 gold-border-glow shadow-sm"
            >
              <span>View All 10 Services Directory</span>
              <ArrowRight className="w-4 h-4 text-amber" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {SERVICES.slice(0, 6).map(service => (
              <div
                key={service.id}
                className="group bg-mocha-950 border border-mocha-800 hover:border-gold/60 rounded overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-luxury hover:-translate-y-1"
              >
                <div className="relative h-52 overflow-hidden bg-mocha-900">
                  <img
                    src={service.heroImage}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-mocha-950 via-mocha-950/30 to-transparent" />
                  <span className="absolute top-3.5 left-3.5 bg-mocha-950/95 text-gold border border-gold/35 text-xs font-mono px-2.5 py-1 rounded backdrop-blur-sm">
                    {service.category}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div>
                    <h3 className="font-serif text-xl text-ivory font-bold group-hover:text-gold transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-sm text-stone-300 mt-2.5 line-clamp-3 leading-relaxed font-sans">
                      {service.shortDescription}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-mocha-850 flex items-center justify-between">
                    <button
                      onClick={() => navigateTo(service.slug)}
                      className="text-amber hover:text-amber-light text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                    >
                      <span>Explore Technical Specs</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => openQuoteModal({ service: service.title })}
                      className="text-stone-300 hover:text-gold text-xs uppercase tracking-wider font-medium transition-colors"
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

      {/* 4. Materials Metallurgy Showcase */}
      <MaterialsShowcase />

      {/* STAGE 3: SEE COMPLETED PROJECTS */}
      {/* 5. Filterable Portfolio of Documented Projects */}
      <section className="py-20 lg:py-28 bg-mocha-950 border-t border-mocha-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <FilterablePortfolio />
        </div>
      </section>

      {/* 6. Interactive Before & After Transformation Slider */}
      <section className="py-20 lg:py-28 bg-mocha-900 border-t border-mocha-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <BeforeAfterSlider />
        </div>
      </section>

      {/* STAGE 4: BUILD TRUST */}
      {/* 7. GAF Certification & Manufacturer Standards */}
      <section className="py-20 lg:py-28 bg-mocha-950 border-t border-mocha-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <GAFCertificationSection />
        </div>
      </section>

      {/* 8. Google & Client Reviews Showcase */}
      <section className="py-20 lg:py-28 bg-mocha-900 border-t border-mocha-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <GoogleReviewsSection />
        </div>
      </section>

      {/* 9. Interactive Houston Service Area Map */}
      <section className="py-20 lg:py-28 bg-mocha-950 border-t border-mocha-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <ServiceAreaMap />
        </div>
      </section>

      {/* 10. Frequently Asked Questions */}
      <FaqSection />

      {/* STAGE 5: REQUEST AN ESTIMATE */}
      {/* 11. Interactive Roof Investment Estimator */}
      <section className="py-20 lg:py-28 bg-mocha-950 border-t border-mocha-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <InteractiveEstimator />
        </div>
      </section>

      {/* 12. Final Consultation Call To Action */}
      <section className="py-24 lg:py-28 bg-gradient-to-b from-mocha-900 via-mocha-950 to-mocha-950 border-t border-mocha-800 text-center text-stone-200 relative overflow-hidden">
        {/* Ambient Golden Atmosphere Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gold/10 rounded-full blur-[130px] pointer-events-none animate-ambient-glow" />

        <div className="max-w-4xl mx-auto px-4 sm:px-8 relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 bg-mocha-850 border border-gold/40 px-4 py-2 rounded-full text-gold text-xs font-mono uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-amber" />
            <span>GAF Certified™ Contractor #1132527</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-ivory font-bold leading-[1.18] max-w-3xl mx-auto">
            Consult With Houston's Premier Architectural Roofing & Sheet Metal Artisans.
          </h2>

          <p className="text-base sm:text-lg text-stone-300 max-w-2xl mx-auto leading-relaxed font-sans">
            Whether engineering a 24-gauge standing seam roof, hand-soldering architectural copper dormers, or planning a full residential re-roof, our senior estimators are ready to review your project.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => openQuoteModal()}
              className="w-full sm:w-auto amber-button-glow font-bold px-8 py-4 rounded-sm text-xs uppercase tracking-widest flex items-center justify-center gap-2.5 relative-shimmer group shadow-amber"
            >
              <FileText className="w-4 h-4 text-mocha-950" />
              <span>Request An Estimate</span>
            </button>

            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="w-full sm:w-auto bg-mocha-850 hover:bg-mocha-800 border border-gold/40 hover:border-gold text-gold-light font-semibold px-8 py-4 rounded-sm text-xs uppercase tracking-widest flex items-center justify-center gap-2.5 transition-all duration-300 gold-border-glow"
            >
              <Phone className="w-4 h-4 text-amber" />
              <span>Call {COMPANY_INFO.phoneFormatted}</span>
            </a>
          </div>

          <p className="text-xs text-stone-400 font-mono pt-4">
            Physical Shop: 2307 Knight St, Houston, TX 77093 • No-Obligation Technical Assessments
          </p>
        </div>
      </section>
    </div>
  );
};
