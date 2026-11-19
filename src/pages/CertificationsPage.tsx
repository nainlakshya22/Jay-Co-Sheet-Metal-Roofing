import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { COMPANY_INFO } from '../data/companyData';
import { 
  Award, 
  ShieldCheck, 
  FileCheck, 
  Check, 
  ExternalLink, 
  AlertCircle,
  ArrowRight 
} from 'lucide-react';

export const CertificationsPage: React.FC = () => {
  const { navigateTo, openQuoteModal } = useNavigation();

  return (
    <div className="py-12 sm:py-16 bg-charcoal-950 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <Breadcrumbs items={[{ label: 'Certifications & Credentials' }]} />

        {/* Hero Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-charcoal-900 border border-copper/50 px-3.5 py-1.5 rounded-full text-copper text-xs font-mono uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Industry Credentials</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl text-ivory font-bold leading-tight">
            Certifications, Factory Authorizations & Permitting Standards
          </h1>

          <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-sans">
            Review the audited manufacturer certifications, municipal building permit compliance records, and business standing for Jay-Co Sheet Metal & Roofing (Jay-Co Enterprises, LLC).
          </p>
        </div>

        {/* Verified Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Credential 1: GAF Certified Residential Contractor */}
          <div className="bg-charcoal-900 border border-charcoal-700/80 rounded p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="p-2 bg-charcoal-850 text-copper rounded border border-copper/30">
                  <ShieldCheck className="w-6 h-6" />
                </span>
                <span className="text-xs font-mono bg-charcoal-950 text-copper px-2.5 py-1 rounded border border-copper/30">
                  GAF ID #1132527
                </span>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold text-ivory">
                  GAF Certified™ Residential Roofing Contractor
                </h3>
                <p className="text-xs text-stone-400 font-mono mt-1">
                  Issuing Authority: GAF Materials Corporation (North America)
                </p>
              </div>

              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Verified contractor network standing ensuring proper liability insurance, state registration, and continuous compliance with GAF's strict residential installation specifications. Authorizes Jay-Co to offer enhanced GAF System Plus® factory warranties.
              </p>

              <div className="bg-charcoal-950 p-3 rounded text-xs text-stone-400 border border-charcoal-800 space-y-1">
                <div className="flex items-center gap-1.5 text-copper font-medium">
                  <Check className="w-3.5 h-3.5" />
                  <span>Eligible for GAF System Plus 50-Year Coverage</span>
                </div>
                <div className="flex items-center gap-1.5 text-copper font-medium">
                  <Check className="w-3.5 h-3.5" />
                  <span>Factory-Audited Workmanship Practices</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-charcoal-800 flex items-center justify-between">
              <a
                href="https://www.gaf.com/en-us/roofing-contractors/residential/usa/tx/houston/jay-co-sheet-metal-and-roofing-1132527"
                target="_blank"
                rel="noopener noreferrer"
                className="text-copper hover:underline text-xs font-semibold flex items-center gap-1"
              >
                <span>Verify on GAF Registry</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => navigateTo('gaf-certification')}
                className="text-xs text-stone-300 hover:text-ivory font-medium transition-colors"
              >
                Detailed GAF Page →
              </button>
            </div>
          </div>

          {/* Credential 2: Texas Secretary of State Legal Standing */}
          <div className="bg-charcoal-900 border border-charcoal-700/80 rounded p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="p-2 bg-charcoal-850 text-copper rounded border border-copper/30">
                  <Award className="w-6 h-6" />
                </span>
                <span className="text-xs font-mono bg-charcoal-950 text-stone-300 px-2.5 py-1 rounded border border-charcoal-700">
                  Registered Texas LLC
                </span>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold text-ivory">
                  Jay-Co Enterprises, LLC
                </h3>
                <p className="text-xs text-stone-400 font-mono mt-1">
                  Jurisdiction: State of Texas • Principal Office: Houston, TX
                </p>
              </div>

              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Operating continuously from 2307 Knight St, Houston, TX 77093. All residential contracts, municipal permits, and commercial metalwork orders are formally executed through our registered Texas limited liability entity.
              </p>

              <div className="bg-charcoal-950 p-3 rounded text-xs text-stone-400 border border-charcoal-800 space-y-1">
                <div className="flex items-center gap-1.5 text-copper font-medium">
                  <Check className="w-3.5 h-3.5" />
                  <span>Physical Commercial Shop Facility at 2307 Knight St</span>
                </div>
                <div className="flex items-center gap-1.5 text-copper font-medium">
                  <Check className="w-3.5 h-3.5" />
                  <span>Full Commercial General Liability Insurance</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-charcoal-800">
              <span className="text-xs text-stone-500 font-mono">
                Documented in Harris County public records
              </span>
            </div>
          </div>
        </div>

        {/* Factual Integrity Audit Box: BBB Standing Transparency */}
        <div className="bg-charcoal-900 border border-charcoal-800 rounded p-6 sm:p-8 mb-20 space-y-4">
          <div className="flex items-center gap-2 text-stone-300">
            <AlertCircle className="w-5 h-5 text-copper" />
            <h3 className="font-serif font-bold text-lg text-ivory">
              Transparent Disclosure: Better Business Bureau Standing
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
            In adherence to our strict non-negotiable policy of factual integrity: Jay-Co Sheet Metal & Roofing (BBB Profile: 0915-49000304) is <strong>not BBB accredited</strong> and is unrated by the Better Business Bureau. Unlike less scrupulous contractors who display unauthorized BBB seals, we clearly state this status. Our technical accountability is verified directly through our GAF Certified™ manufacturer standing (#1132527) and over 35 years of Houston builder trust.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center max-w-xl mx-auto space-y-4">
          <h3 className="font-serif text-2xl text-ivory font-bold">
            Verify Our Credentials For Your Residence
          </h3>
          <p className="text-xs text-stone-400">
            Contact our office to request insurance certificates, GAF warranty enrollment packages, or municipal permit documentation.
          </p>
          <button
            onClick={() => openQuoteModal()}
            className="bg-copper hover:bg-copper-light text-charcoal-950 font-bold px-6 py-3 rounded-sm shadow-copper text-xs uppercase tracking-wider transition-all"
          >
            Request Official Credential Package
          </button>
        </div>
      </div>
    </div>
  );
};
