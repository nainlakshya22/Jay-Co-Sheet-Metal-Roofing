import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { COMPANY_INFO } from '../data/companyData';
import { 
  FileCheck, 
  MapPin, 
  Calendar, 
  DollarSign, 
  ShieldCheck, 
  Check, 
  Maximize2, 
  ArrowRight, 
  Hammer 
} from 'lucide-react';

export const BunkerHillProjectPage: React.FC = () => {
  const { openLightbox, openQuoteModal, navigateTo } = useNavigation();

  return (
    <div className="py-12 sm:py-16 bg-mocha-950 text-stone-300 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <Breadcrumbs
          items={[
            { label: 'Portfolio', route: 'projects' },
            { label: 'Bunker Hill Village Estate Re-Roof (Permit #20220639)' }
          ]}
        />

        {/* Hero Header */}
        <div className="space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 bg-mocha-900/90 border border-gold/40 px-3.5 py-1.5 rounded-full text-gold text-xs font-mono uppercase tracking-wider">
            <FileCheck className="w-3.5 h-3.5 text-amber" />
            <span>Documented Municipal Permit Record</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl text-gold-100 font-bold max-w-4xl leading-tight">
            Bunker Hill Village Estate Re-Roof & Architectural Metal Detailing
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-xs text-stone-400 font-mono pt-1">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-gold" />
              <span>11838 Brandywine Ln, Bunker Hill Village, TX 77024</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-gold" />
              <span>Issued Oct 7, 2022 • Completed Apr 27, 2023</span>
            </span>
            <span className="flex items-center gap-1.5 text-gold-100 font-semibold">
              <DollarSign className="w-3.5 h-3.5 text-amber" />
              <span>Valuation: $23,752</span>
            </span>
          </div>
        </div>

        {/* Primary Case Study Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          {/* Main Content (8 Cols) */}
          <div className="lg:col-span-8 space-y-8">
            {/* Featured Image with Zoom */}
            <div className="relative rounded-xl overflow-hidden border border-gold/30 bg-mocha-900 group shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                alt="11838 Brandywine Ln Bunker Hill Village Luxury Residence"
                className="w-full h-[400px] sm:h-[500px] object-cover"
              />
              <button
                onClick={() => openLightbox(
                  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
                  "11838 Brandywine Ln, Bunker Hill Village, TX 77024 — Permit #20220639 Complete Re-Roof"
                )}
                className="absolute bottom-4 right-4 bg-mocha-900/90 text-stone-200 hover:text-gold p-2.5 rounded-full border border-gold/40 transition-colors shadow-lg"
                aria-label="Enlarge case study photograph"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>

            {/* In-Depth Project Narrative */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl text-gold-100 font-bold">
                Project Overview & Scope of Work
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-stone-300">
                In October 2022, Jay-Co Enterprises, LLC was awarded the residential re-roofing contract for the luxury estate located at <strong className="text-gold-100">11838 Brandywine Lane</strong> in the City of Bunker Hill Village, Texas. This property is an expansive <strong className="text-gold-100">6,122 square-foot custom residence</strong> situated on a 0.80-acre wooded lot within the prestigious Memorial Villages corridor.
              </p>
              <p className="text-xs sm:text-sm leading-relaxed text-stone-400">
                Due to dense pine and oak canopy exposure, the original roof had suffered moisture accumulation, leaf-dam debris pooling, and degraded flashing transitions. Under City of Bunker Hill Village Building Permit <strong className="text-gold">#20220639</strong>, Jay-Co executed a comprehensive tear-off down to the bare wooden decking, inspected all rafter sheathing for moisture soundness, and engineered a complete high-wind roofing system with custom sheet metal flashings shop-fabricated at our Knight Street facility.
              </p>
            </div>

            {/* Key Technical Execution Steps */}
            <div className="space-y-4">
              <h3 className="font-serif text-xl text-gold-100 font-bold">
                Key Technical Execution Milestones
              </h3>

              <div className="space-y-3">
                {[
                  {
                    title: '100% Tear-Off & Structural Sheathing Inspection',
                    desc: 'Complete removal of aged substrates down to solid CDX wood decking. Rafter-nailing inspection performed to comply with municipal high-wind windstorm codes.'
                  },
                  {
                    title: 'Custom In-House Sheet Metal Fabrication',
                    desc: 'Fabricated custom valleys, heavy 24-ga drip edges, and step flashings in our 2307 Knight St shop, eliminating store-bought seams in high-runoff valley intersections.'
                  },
                  {
                    title: 'High-Temperature Self-Adhered Waterproof Barriers',
                    desc: 'Installed dual-layer self-adhering modified bitumen underlayment across all eaves, valleys, rakes, and masonry chimney intersections.'
                  },
                  {
                    title: 'Municipal Inspection & Completion Certification',
                    desc: 'Project finalized and recorded complete by the City of Bunker Hill Village on April 27, 2023 with a recorded valuation of $23,752.'
                  }
                ].map((step, idx) => (
                  <div key={idx} className="p-4 bg-mocha-900/90 border border-mocha-800/80 rounded-lg flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gold/20 text-gold flex items-center justify-center flex-shrink-0 mt-0.5 font-mono text-xs font-bold border border-gold/40">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-sm text-gold-100">{step.title}</h4>
                      <p className="text-xs text-stone-400 mt-0.5 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Metadata & Verification Record (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Official Permit Record Card */}
            <div className="bg-mocha-900/90 border border-gold/30 rounded-xl p-6 space-y-4 shadow-xl">
              <div className="flex items-center gap-2 text-gold border-b border-mocha-800/80 pb-3">
                <FileCheck className="w-5 h-5 text-amber" />
                <span className="font-serif font-bold text-sm text-gold-100 uppercase tracking-wider">
                  Municipal Record Audit
                </span>
              </div>

              <div className="space-y-2.5 text-xs font-mono">
                <div className="flex justify-between border-b border-mocha-800/60 pb-1.5">
                  <span className="text-stone-400">Permit Number:</span>
                  <span className="text-gold font-bold">20220639</span>
                </div>
                <div className="flex justify-between border-b border-mocha-800/60 pb-1.5">
                  <span className="text-stone-400">Jurisdiction:</span>
                  <span className="text-gold-100">City of Bunker Hill Village</span>
                </div>
                <div className="flex justify-between border-b border-mocha-800/60 pb-1.5">
                  <span className="text-stone-400">Contractor:</span>
                  <span className="text-gold-100">Jay-Co Enterprises, LLC</span>
                </div>
                <div className="flex justify-between border-b border-mocha-800/60 pb-1.5">
                  <span className="text-stone-400">Classification:</span>
                  <span className="text-gold-100">Residential Re-Roof</span>
                </div>
                <div className="flex justify-between border-b border-mocha-800/60 pb-1.5">
                  <span className="text-stone-400">Date Issued:</span>
                  <span className="text-gold-100">October 7, 2022</span>
                </div>
                <div className="flex justify-between border-b border-mocha-800/60 pb-1.5">
                  <span className="text-stone-400">Completion Date:</span>
                  <span className="text-emerald-400 font-bold">April 27, 2023</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-stone-400">Valuation:</span>
                  <span className="text-amber font-bold">$23,752</span>
                </div>
              </div>

              <div className="p-3 bg-mocha-950 rounded-lg text-[11px] text-stone-400 leading-relaxed border border-mocha-800/80">
                Source: City of Bunker Hill Village Public Building Permit Register (PDF reference verified).
              </div>
            </div>

            {/* Property Characteristics */}
            <div className="bg-mocha-900/90 border border-mocha-800/80 rounded-xl p-6 space-y-3 shadow-lg">
              <h4 className="font-serif font-bold text-sm text-gold-100">Property Specifications</h4>
              <ul className="space-y-1.5 text-xs text-stone-300">
                <li>• Square Footage: ~6,122 sq. ft. Living Area</li>
                <li>• Parcel Size: ~0.80 Acres (Wooded Estate)</li>
                <li>• Architectural Style: Custom Memorial Luxury Manor</li>
                <li>• Year Built: 1994</li>
                <li>• County: Harris County, Texas</li>
              </ul>
            </div>

            {/* CTA Box */}
            <div className="bg-gradient-to-br from-mocha-900 to-mocha-950 border border-gold/40 rounded-xl p-6 text-center space-y-4 shadow-xl">
              <h4 className="font-serif text-lg font-bold text-gold-100">
                Planning a Re-Roof in the Memorial Villages?
              </h4>
              <p className="text-xs text-stone-400">
                We handle all village municipal permit filings, tree protection plans, and engineering code compliance.
              </p>
              <button
                onClick={() => openQuoteModal({
                  service: 'Bunker Hill / Memorial Residential Re-Roof',
                  estimatedCostRange: 'Municipal Permit Benchmark ($20k-$35k+)'
                })}
                className="w-full bg-amber hover:bg-amber-light text-mocha-950 font-bold py-3 px-4 rounded-md text-xs uppercase tracking-wider shadow-amber transition-all"
              >
                Request Village Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
