import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { COMPANY_INFO } from '../data/companyData';
import { 
  ShieldCheck, 
  Award, 
  Check, 
  ExternalLink, 
  AlertCircle, 
  FileCheck, 
  ArrowRight 
} from 'lucide-react';

export const GAFCertificationPage: React.FC = () => {
  const { openQuoteModal } = useNavigation();

  return (
    <div className="py-12 sm:py-16 bg-charcoal-950 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <Breadcrumbs
          items={[
            { label: 'Certifications', route: 'certifications' },
            { label: 'Official GAF Certification (#1132527)' }
          ]}
        />

        {/* Hero Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-charcoal-900 border border-copper/50 px-3.5 py-1.5 rounded-full text-copper text-xs font-mono uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Official GAF Contractor Verification</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl text-ivory font-bold leading-tight">
            GAF Certified™ Residential Contractor #1132527
          </h1>

          <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-sans">
            Jay-Co Sheet Metal & Roofing is an officially verified GAF Certified™ residential contractor located in Houston, Texas. Discover how this factory standing protects your investment through enhanced warranty backing.
          </p>
        </div>

        {/* 2-Column Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-serif text-2xl sm:text-3xl text-ivory font-bold">
              Why GAF Manufacturer Certification Matters
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              In the United States, less than 6% of roofing contractors qualify for certified status with GAF, North America's largest roofing manufacturer. To attain and maintain this credential, Jay-Co must continuously satisfy strict prerequisites:
            </p>

            <ul className="space-y-3 text-xs sm:text-sm text-stone-300">
              <li className="flex items-start gap-2.5">
                <div className="w-4 h-4 rounded-full bg-copper/20 text-copper flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span><strong>Proper Business Licensing & Registration:</strong> Fully documented corporate registration with the State of Texas as Jay-Co Enterprises, LLC.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-4 h-4 rounded-full bg-copper/20 text-copper flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span><strong>Adequate General Liability Insurance:</strong> Active commercial liability coverage protecting your residential property throughout installation.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-4 h-4 rounded-full bg-copper/20 text-copper flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span><strong>Proven Workmanship Reputation:</strong> Continuous track record of verified customer satisfaction and ethical business practices across Houston.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-4 h-4 rounded-full bg-copper/20 text-copper flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span><strong>Ongoing Factory Training:</strong> Ongoing education on GAF high-wind fastening specifications, attic ventilation balancing, and leak barrier details.</span>
              </li>
            </ul>
          </div>

          {/* Credential Card */}
          <div className="lg:col-span-5 bg-charcoal-900 border border-charcoal-700/80 rounded p-6 sm:p-8 space-y-6">
            <div className="w-14 h-14 rounded bg-charcoal-850 border border-copper p-2.5 flex items-center justify-center text-copper shadow-copper">
              <Award className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-mono text-copper uppercase tracking-wider block mb-1">
                Verified Registry ID
              </span>
              <h3 className="font-serif text-2xl font-bold text-ivory">
                GAF Contractor #1132527
              </h3>
              <p className="text-xs text-stone-400 font-mono mt-1">
                Company: Jay-Co Sheet Metal and Roofing
              </p>
              <p className="text-xs text-stone-400 font-mono">
                Address: 2307 Knight St, Houston, TX 77093
              </p>
            </div>

            <div className="pt-4 border-t border-charcoal-800 space-y-3">
              <a
                href="https://www.gaf.com/en-us/roofing-contractors/residential/usa/tx/houston/jay-co-sheet-metal-and-roofing-1132527"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-copper hover:bg-copper-light text-charcoal-950 font-bold rounded-sm text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-copper transition-all"
              >
                <span>Verify Live on GAF.com</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <div className="bg-charcoal-950 p-3 rounded text-[11px] text-stone-400 border border-charcoal-800 flex items-start gap-2">
                <AlertCircle className="w-3.5 h-3.5 text-copper flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Strict Integrity Policy:</strong> Our verified designation is <strong>GAF Certified™</strong>. We never falsely market ourselves as GAF Master Elite or President's Club.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* GAF System Plus Limited Warranty Deep Dive */}
        <div className="bg-charcoal-900 border border-charcoal-800 rounded p-8 sm:p-12 mb-20 space-y-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-copper">
              Enhanced Warranty Architecture
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-ivory font-bold mt-1">
              GAF System Plus® Limited Warranty Coverage
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 mt-2 max-w-3xl leading-relaxed">
              When Jay-Co installs a complete GAF Lifetime Roofing System—incorporating GAF shingles plus at least three qualifying accessories—your roof qualifies for the enhanced GAF System Plus Limited Warranty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 bg-charcoal-950 border border-charcoal-800 rounded space-y-2">
              <span className="text-copper font-serif font-bold text-xl block">50 Years</span>
              <h4 className="font-serif font-bold text-sm text-ivory">Non-Prorated Protection</h4>
              <p className="text-xs text-stone-400 leading-relaxed">
                100% material defect coverage with zero depreciation for 50 years on qualifying single-family residential properties.
              </p>
            </div>

            <div className="p-5 bg-charcoal-950 border border-charcoal-800 rounded space-y-2">
              <span className="text-copper font-serif font-bold text-xl block">100% Covered</span>
              <h4 className="font-serif font-bold text-sm text-ivory">Tear-Off & Labor Costs</h4>
              <p className="text-xs text-stone-400 leading-relaxed">
                Includes both tear-off labor costs and disposal costs if a covered manufacturing defect occurs during the smart choice protection period.
              </p>
            </div>

            <div className="p-5 bg-charcoal-950 border border-charcoal-800 rounded space-y-2">
              <span className="text-copper font-serif font-bold text-xl block">Transferable</span>
              <h4 className="font-serif font-bold text-sm text-ivory">Estate Home Value</h4>
              <p className="text-xs text-stone-400 leading-relaxed">
                Warranty can be transferred to the subsequent homeowner, adding tangible resale value and peace of mind.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center max-w-xl mx-auto space-y-4">
          <h3 className="font-serif text-2xl text-ivory font-bold">
            Protect Your Residence With a GAF System Plus Roof
          </h3>
          <p className="text-xs text-stone-400">
            Request an on-site consultation to review shingle styles, GAF underlayment packages, and warranty enrollment.
          </p>
          <button
            onClick={() => openQuoteModal({ service: 'GAF System Plus Roofing Consultation' })}
            className="bg-copper hover:bg-copper-light text-charcoal-950 font-bold px-6 py-3 rounded-sm shadow-copper text-xs uppercase tracking-wider transition-all"
          >
            Request GAF System Plus Quote
          </button>
        </div>
      </div>
    </div>
  );
};
