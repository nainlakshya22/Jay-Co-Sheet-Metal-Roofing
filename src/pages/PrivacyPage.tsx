import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { COMPANY_INFO } from '../data/companyData';
import { ShieldCheck } from 'lucide-react';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-16 bg-charcoal-950 text-stone-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

        <div className="space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 bg-charcoal-900 border border-copper/50 px-3.5 py-1.5 rounded-full text-copper text-xs font-mono uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Data Protection Standards</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl text-ivory font-bold leading-tight">
            Privacy Policy
          </h1>

          <p className="text-xs font-mono text-stone-400">
            Last Updated: November 2026 • Jay-Co Enterprises, LLC
          </p>
        </div>

        <div className="space-y-8 text-xs sm:text-sm text-stone-300 leading-relaxed font-sans border-t border-charcoal-800 pt-8">
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-ivory">1. Information We Collect</h2>
            <p>
              Jay-Co Sheet Metal & Roofing (operating legally as Jay-Co Enterprises, LLC) collects contact information (including your name, email address, telephone number, and project address) exclusively when voluntarily submitted via our multi-step quote request forms, contact inquiries, or interactive roof estimator.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-ivory">2. How Your Data Is Utilized</h2>
            <p>
              Information collected is utilized solely to prepare technical roofing scopes, evaluate municipal building permitting criteria, dispatch diagnostic field inspectors, and transmit requested quotations. <strong>We do not sell, rent, lease, or monetize your personal contact information to third-party telemarketers, lead aggregation networks, or external contractors.</strong>
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-ivory">3. Communications & Security</h2>
            <p>
              When you submit a consultation request, you authorize our senior estimators at our 2307 Knight St Houston shop to contact you by telephone or email regarding your specific project. We implement industry-standard encryption protocols to protect data during transmission.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-ivory">4. Contact & Opt-Out Inquiries</h2>
            <p>
              If you wish to update, modify, or permanently remove your contact details from our estimating files, please contact us at:
            </p>
            <div className="p-4 bg-charcoal-900 border border-charcoal-800 rounded font-mono text-xs text-stone-400 space-y-1">
              <div>Jay-Co Enterprises, LLC</div>
              <div>2307 Knight St, Houston, TX 77093</div>
              <div>Telephone: (713) 738-4525</div>
              <div>Email: jaycosm@sbcglobal.com</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
