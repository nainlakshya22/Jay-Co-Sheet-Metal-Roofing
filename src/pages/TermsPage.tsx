import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { COMPANY_INFO } from '../data/companyData';
import { ShieldAlert } from 'lucide-react';

export const TermsPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-16 bg-mocha-950 text-stone-300 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 sm:px-8 relative z-10">
        <Breadcrumbs items={[{ label: 'Terms of Service' }]} />

        <div className="space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 bg-mocha-900/90 border border-gold/40 px-3.5 py-1.5 rounded-full text-gold text-xs font-mono uppercase tracking-wider">
            <ShieldAlert className="w-3.5 h-3.5 text-amber" />
            <span>Legal Disclosures & Agreements</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl text-gold-100 font-bold leading-tight">
            Terms of Service
          </h1>

          <p className="text-xs font-mono text-stone-400">
            Last Updated: November 2026 • Jay-Co Enterprises, LLC
          </p>
        </div>

        <div className="space-y-8 text-base text-stone-300 leading-relaxed font-sans border-t border-mocha-800/80 pt-8">
          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-gold-100 leading-snug">1. Website Scope & Factual Representation</h2>
            <p>
              This website is operated by Jay-Co Enterprises, LLC (operating as Jay-Co Sheet Metal & Roofing), with principal facilities located at 2307 Knight St, Houston, TX 77093. Content is provided for informational and architectural planning purposes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-gold-100 leading-snug">2. Online Roof Estimator & Financing Disclaimer</h2>
            <p>
              Calculations displayed via the Interactive Roof Estimator and Financing Calculator are illustrative budgeting estimates based on regional averages. They <strong>do not constitute binding contractual quotations</strong>, guarantees of pricing, or loan approvals. All formal roofing contracts require an on-site physical diagnostic survey and signed work authorization.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-gold-100 leading-snug">3. Domain Disambiguation Notice</h2>
            <p>
              The domain name <em>jay-co.com</em> historically and currently belongs to an unrelated underground directional boring entity based in Missouri. Jay-Co Sheet Metal & Roofing has no legal, corporate, or financial affiliation with that business.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-gold-100 leading-snug">4. Governing Law</h2>
            <p>
              All interactions, contracts, and municipal permitting matters are governed under the laws of the State of Texas and Harris County building codes.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
