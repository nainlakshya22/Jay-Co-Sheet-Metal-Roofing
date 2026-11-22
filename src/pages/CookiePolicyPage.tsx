import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { useCookieConsent } from '../context/CookieConsentContext';
import { ShieldCheck, Sliders, ExternalLink, Scale, CheckCircle2, AlertCircle } from 'lucide-react';

export const CookiePolicyPage: React.FC = () => {
  const { openPreferences, consent } = useCookieConsent();

  return (
    <div className="py-12 sm:py-16 bg-mocha-950 text-stone-300 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 sm:px-8 relative z-10">
        <Breadcrumbs items={[{ label: 'Cookie Policy' }]} />

        {/* Page Header */}
        <div className="space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 bg-mocha-900/90 border border-gold/40 px-3.5 py-1.5 rounded-full text-gold text-xs font-mono uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-amber" />
            <span>Transparency & Privacy Governance</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl text-gold-100 font-bold leading-tight">
            Cookie & Tracking Technologies Policy
          </h1>

          <p className="text-xs font-mono text-stone-400">
            Last Updated: November 2026 • Jay-Co Enterprises, LLC (Houston, TX)
          </p>
        </div>

        {/* Quick Consent Status Box */}
        <div className="p-5 sm:p-6 mb-10 bg-mocha-900/90 border border-gold/30 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-luxury">
          <div className="space-y-1">
            <div className="font-serif font-bold text-base text-gold-100 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Current Privacy Configuration</span>
            </div>
            <p className="text-xs text-stone-300">
              {consent?.hasConsented
                ? `You have configured active preferences (Recorded: ${new Date(consent.timestamp).toLocaleDateString()}).`
                : 'Default configuration active (Strictly necessary cookies only; analytics and marketing signals default to denied).'}
            </p>
          </div>

          <button
            type="button"
            onClick={() => openPreferences('categories')}
            className="min-h-[44px] inline-flex items-center gap-2 px-5 py-2.5 bg-mocha-800 hover:bg-mocha-750 text-gold border border-gold/40 hover:border-gold rounded-lg font-semibold text-xs sm:text-sm transition-all active:scale-95"
          >
            <Sliders className="w-4 h-4 text-amber" />
            <span>Manage Preferences</span>
          </button>
        </div>

        {/* Policy Content */}
        <div className="space-y-10 text-base text-stone-300 leading-relaxed font-sans border-t border-mocha-800/80 pt-8">
          
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-gold-100 leading-snug">
              1. What Are Cookies and Local Storage?
            </h2>
            <p>
              Cookies are small data files placed on your computer or mobile device when you visit a website. Local storage (such as browser HTML5 <code className="text-gold">localStorage</code>) provides a similar mechanism to store key-value data directly in your browser.
            </p>
            <p>
              Jay-Co Sheet Metal & Roofing (operating legally as Jay-Co Enterprises, LLC) uses cookies and browser storage technologies to provide essential security functions, facilitate our multi-step architectural consultation forms, retain technical calculator parameters, and analyze anonymous site traffic.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-gold-100 leading-snug">
              2. Cookie Classification & Categories
            </h2>
            <p>
              We categorize tracking mechanisms into four discrete categories, allowing you granular control over your data:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-mocha-900 border border-mocha-800 space-y-2">
                <div className="font-serif font-bold text-gold text-base">Strictly Necessary Cookies</div>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Crucial for basic operations, including form token authentication, quote request routing, and remembering your consent state. These cannot be disabled.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-mocha-900 border border-mocha-800 space-y-2">
                <div className="font-serif font-bold text-gold text-base">Analytics & Telemetry</div>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Helps us evaluate traffic volume and route performance. Governed by Google Consent Mode v2 (<code className="text-gold">analytics_storage</code>).
                </p>
              </div>

              <div className="p-4 rounded-xl bg-mocha-900 border border-mocha-800 space-y-2">
                <div className="font-serif font-bold text-gold text-base">Marketing & Remarketing</div>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Measures the effectiveness of digital campaigns and presents relevant architectural roofing showcases on external platforms.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-mocha-900 border border-mocha-800 space-y-2">
                <div className="font-serif font-bold text-gold text-base">Functional Preferences</div>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Retains client estimates in our Interactive Roof Estimator and remembers custom financing budget terms between page visits.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Technical Inventory */}
          <section className="space-y-4">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-gold-100 leading-snug">
              3. Inventory of Tracking Technologies
            </h2>
            <div className="overflow-x-auto rounded-xl border border-mocha-800 bg-mocha-900/60">
              <table className="w-full text-left text-xs">
                <thead className="bg-mocha-950 text-gold border-b border-mocha-800 font-mono uppercase tracking-wider">
                  <tr>
                    <th className="py-3 px-4">Identifier</th>
                    <th className="py-3 px-4">Provider</th>
                    <th className="py-3 px-4">Category</th>
                    <th className="py-3 px-4">Purpose</th>
                    <th className="py-3 px-4">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-mocha-850 font-sans text-stone-300">
                  <tr>
                    <td className="py-3 px-4 font-mono text-gold">jayco_cookie_consent_v1</td>
                    <td className="py-3 px-4">Jay-Co (1st Party)</td>
                    <td className="py-3 px-4">Strictly Necessary</td>
                    <td className="py-3 px-4">Stores granular user consent choices</td>
                    <td className="py-3 px-4">12 Months</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-mono text-gold">jayco_cookie_consent</td>
                    <td className="py-3 px-4">Jay-Co (1st Party)</td>
                    <td className="py-3 px-4">Strictly Necessary</td>
                    <td className="py-3 px-4">Edge cookie sync for server verification</td>
                    <td className="py-3 px-4">12 Months</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-mono text-gold">_ga, _ga_*</td>
                    <td className="py-3 px-4">Google Analytics</td>
                    <td className="py-3 px-4">Analytics</td>
                    <td className="py-3 px-4">Calculates visitor sessions and site telemetry</td>
                    <td className="py-3 px-4">24 Months</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-mono text-gold">_gcl_au</td>
                    <td className="py-3 px-4">Google AdSense / Ads</td>
                    <td className="py-3 px-4">Marketing</td>
                    <td className="py-3 px-4">Conversion attribution for architectural campaigns</td>
                    <td className="py-3 px-4">90 Days</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-mono text-gold">jayco_estimator_prefill</td>
                    <td className="py-3 px-4">Jay-Co (1st Party)</td>
                    <td className="py-3 px-4">Functional</td>
                    <td className="py-3 px-4">Retains calculator figures for consultation form</td>
                    <td className="py-3 px-4">Session / Local</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 4: Google Consent Mode v2 */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-gold-100 leading-snug">
              4. Google Consent Mode v2 Implementation
            </h2>
            <p>
              In compliance with industry standards, our platform has implemented <strong>Google Consent Mode v2</strong>. When you visit our website for the first time, our systems establish default denied states for all advertising and telemetry signals prior to any tracking tags loading:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-stone-300">
              <li><code className="text-gold font-mono">analytics_storage</code>: Denied until explicit consent is recorded.</li>
              <li><code className="text-gold font-mono">ad_storage</code>: Denied until explicit consent is recorded.</li>
              <li><code className="text-gold font-mono">ad_user_data</code>: Denied until explicit consent is recorded.</li>
              <li><code className="text-gold font-mono">ad_personalization</code>: Denied until explicit consent is recorded.</li>
            </ul>
            <p>
              These signals are only elevated to &quot;granted&quot; when you click &quot;Accept All&quot; or enable the respective categories within the preferences panel.
            </p>
          </section>

          {/* Section 5: US State Privacy Laws */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-gold-100 leading-snug">
              5. California (CCPA/CPRA) & US State Privacy Rights
            </h2>
            <p>
              Under the California Consumer Privacy Act, as amended by the California Privacy Rights Act (CCPA/CPRA), and the Texas Data Privacy and Security Act (TDPSA), residents have the right to opt out of the &quot;sale&quot; or &quot;sharing&quot; of personal information for cross-context behavioral advertising.
            </p>
            <p>
              Jay-Co Sheet Metal & Roofing does not exchange your personal consultation information or property address for monetary compensation. However, if third-party retargeting scripts operate, state laws consider this data sharing.
            </p>
            <p>
              You can exercise your right to opt out at any time by clicking the <strong className="text-gold">&quot;Do Not Sell or Share My Personal Information&quot;</strong> button in our website footer or toggling the state opt-out switch in your preferences.
            </p>
          </section>

          {/* Section 6: Withdrawing Consent */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-gold-100 leading-snug">
              6. How to Modify or Withdraw Consent
            </h2>
            <p>
              You may review, modify, or completely withdraw your consent at any time. Our website provides persistent access via the <strong>&quot;Cookie Preferences&quot;</strong> link located in the footer of every page.
            </p>
            <p>
              Additionally, you may instruct your browser to reject all cookies or delete existing cookies via your browser&apos;s privacy settings. Note that disabling strictly necessary cookies may impair the functionality of our interactive roof estimator and quote consultation wizard.
            </p>
          </section>

          {/* Section 7: Legal Disclaimer & Contact */}
          <section className="space-y-3 border-t border-mocha-800/80 pt-6">
            <div className="flex items-start gap-2.5 p-4 rounded-xl bg-mocha-900 border border-mocha-800 text-xs text-stone-400">
              <AlertCircle className="w-4 h-4 text-amber flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-stone-300">Compliance & Legal Review Notice:</strong> This policy reflects Jay-Co&apos;s technical data architecture and privacy controls as of November 2026. While designed to conform to applicable standards, this document does not constitute formal legal counsel and remains subject to periodic review under evolving US federal and state statutes.
              </div>
            </div>

            <h3 className="font-serif text-lg font-bold text-gold-100 pt-3">
              Privacy Inquiries & Houston Estimating Desk
            </h3>
            <p className="text-sm">
              For questions regarding our privacy practices or cookie management, please reach out to our shop:
            </p>
            <div className="p-5 bg-mocha-900 border border-gold/30 rounded-lg font-mono text-xs sm:text-sm text-stone-300 space-y-1.5 shadow-md">
              <div className="text-gold-100 font-semibold text-base">Jay-Co Enterprises, LLC</div>
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
