import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SERVICES, COMPANY_INFO } from '../data/companyData';
import { 
  ShieldCheck, 
  Check, 
  Layers, 
  HelpCircle, 
  Phone, 
  FileText, 
  ArrowRight,
  Maximize2 
} from 'lucide-react';
import { PageRoute } from '../types';

export const ServiceDetailPage: React.FC<{ slug: PageRoute }> = ({ slug }) => {
  const { navigateTo, openQuoteModal, openLightbox } = useNavigation();

  const normalizedSlug = 
    slug === ('service-flashing-chimney-caps' as any) ? 'service-custom-flashing' :
    slug === ('service-balcony-waterproofing' as any) ? 'service-waterproofing' : slug;

  const service = SERVICES.find(s => s.slug === normalizedSlug || s.slug === slug) || SERVICES[0];

  return (
    <div className="py-12 sm:py-16 bg-charcoal-950 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <Breadcrumbs
          items={[
            { label: 'Services Directory', route: 'services' },
            { label: service.title }
          ]}
        />

        {/* Hero Header */}
        <div className="max-w-4xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-charcoal-900 border border-copper/50 px-3.5 py-1.5 rounded-full text-copper text-xs font-mono uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{service.category}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl text-ivory font-bold leading-tight">
            {service.title}
          </h1>

          <p className="font-serif text-lg sm:text-xl text-copper font-medium">
            {service.subtitle}
          </p>

          <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-sans max-w-3xl">
            {service.shortDescription}
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Left Column: Image, Detailed Description, Specs (8 Cols) */}
          <div className="lg:col-span-8 space-y-10">
            {/* Hero Image with Lightbox Zoom */}
            <div className="relative rounded overflow-hidden border border-charcoal-800 bg-charcoal-900 group">
              <img
                src={service.heroImage}
                alt={service.title}
                className="w-full h-[400px] sm:h-[480px] object-cover"
              />
              <button
                onClick={() => openLightbox(service.heroImage, `${service.title} — Jay-Co Architectural Detailing`)}
                className="absolute bottom-4 right-4 bg-charcoal-900/90 text-stone-200 hover:text-copper p-2.5 rounded-full border border-charcoal-700 transition-colors"
                aria-label={`Enlarge photograph for ${service.title}`}
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>

            {/* In-Depth Description */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl text-ivory font-bold">
                Architectural Engineering & Craftsmanship Overview
              </h2>
              <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-sans">
                {service.fullDescription}
              </p>
            </div>

            {/* Houston Climate Engineering Considerations */}
            <div className="bg-charcoal-900 border-l-4 border-copper p-5 rounded-r space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-copper block font-semibold">
                Houston Climate Engineering Consideration
              </span>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                {service.houstonConsiderations}
              </p>
            </div>

            {/* Key Benefits Grid */}
            <div className="space-y-4">
              <h3 className="font-serif text-xl text-ivory font-bold">
                Performance Benefits & Lifetime Advantages
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.keyBenefits.map((benefit, idx) => (
                  <div key={idx} className="p-4 bg-charcoal-900 border border-charcoal-800 rounded flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-copper/20 text-copper flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm text-stone-300 font-sans leading-relaxed">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Specifications Table */}
            <div className="space-y-4">
              <h3 className="font-serif text-xl text-ivory font-bold">
                Technical Specifications & Testing Standards
              </h3>
              <div className="bg-charcoal-900 border border-charcoal-800 rounded overflow-hidden">
                <table className="w-full text-xs text-left">
                  <tbody className="divide-y divide-charcoal-800 font-sans">
                    {service.technicalSpecs.map((spec, idx) => (
                      <tr key={idx} className="hover:bg-charcoal-850/50 transition-colors">
                        <td className="py-3 px-4 text-stone-400 font-mono w-1/3">{spec.label}</td>
                        <td className="py-3 px-4 text-ivory font-medium">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Service-Specific FAQs */}
            {service.faqList && service.faqList.length > 0 && (
              <div className="space-y-4 pt-4 border-t border-charcoal-800">
                <h3 className="font-serif text-xl text-ivory font-bold flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-copper" />
                  <span>Frequently Asked Questions About This Service</span>
                </h3>
                <div className="space-y-3">
                  {service.faqList.map((faq, idx) => (
                    <div key={idx} className="bg-charcoal-900 border border-charcoal-800 rounded p-5 space-y-2">
                      <h4 className="font-serif font-bold text-sm text-ivory">{faq.question}</h4>
                      <p className="text-xs text-stone-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Sticky Sidebar with Quote Prefill & Shop Specs (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Quick Quote Card */}
            <div className="bg-charcoal-900 border border-copper/40 rounded p-6 sm:p-8 space-y-5">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-copper block mb-1">
                  On-Site Consultation
                </span>
                <h3 className="font-serif text-xl font-bold text-ivory">
                  Request a Quote for {service.title}
                </h3>
                <p className="text-xs text-stone-400 mt-1">
                  Our estimators will prepare a comprehensive technical scope and blueprint review.
                </p>
              </div>

              <div className="space-y-2 text-xs font-mono border-t border-b border-charcoal-800 py-3">
                <div className="flex justify-between">
                  <span className="text-stone-400">Shop Facility:</span>
                  <span className="text-ivory">2307 Knight St, Houston</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">GAF ID:</span>
                  <span className="text-copper font-bold">1132527 (Certified)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">Jurisdiction:</span>
                  <span className="text-ivory">Harris County & Villages</span>
                </div>
              </div>

              <button
                onClick={() => openQuoteModal({ service: service.title, material: service.materialsUsed[0] })}
                className="w-full bg-copper hover:bg-copper-light text-charcoal-950 font-bold py-3.5 px-4 rounded text-xs uppercase tracking-wider shadow-copper transition-all flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>Request {service.title} Quote</span>
              </button>

              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="w-full bg-charcoal-850 hover:bg-charcoal-800 border border-charcoal-700 text-ivory font-semibold py-3 px-4 rounded text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-copper" />
                <span>Call {COMPANY_INFO.phoneFormatted}</span>
              </a>
            </div>

            {/* Materials Used in this System */}
            <div className="bg-charcoal-900 border border-charcoal-800 rounded p-6 space-y-3">
              <h4 className="font-serif font-bold text-sm text-ivory flex items-center gap-2">
                <Layers className="w-4 h-4 text-copper" />
                <span>Architectural Materials Specified</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-stone-300">
                {service.materialsUsed.map((mat, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-copper" />
                    <span>{mat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Typical Applications */}
            <div className="bg-charcoal-900 border border-charcoal-800 rounded p-6 space-y-3">
              <h4 className="font-serif font-bold text-sm text-ivory">Primary Applications</h4>
              <ul className="space-y-1.5 text-xs text-stone-300">
                {service.applications.map((app, idx) => (
                  <li key={idx}>• {app}</li>
                ))}
              </ul>
            </div>

            {/* Back to All Services Link */}
            <button
              onClick={() => navigateTo('services')}
              className="w-full py-2.5 text-center text-xs text-copper hover:underline font-mono"
            >
              ← Back to Complete Services Directory
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
