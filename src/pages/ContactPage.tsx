import React, { useState } from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { COMPANY_INFO } from '../data/companyData';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Printer, 
  Clock, 
  Send, 
  CheckCircle, 
  ShieldCheck, 
  AlertCircle 
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Standing Seam / Architectural Copper Inquiry',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setErrorMessage('Please complete all required fields.');
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setReferenceId(data.referenceId || `JC-MSG-${Math.floor(100000 + Math.random() * 900000)}`);
        setSubmitted(true);
      } else {
        setErrorMessage(data.error || (data.details ? data.details.join(', ') : 'Transmission failed.'));
      }
    } catch (err) {
      setErrorMessage('Network connection error. Please call our shop directly at (713) 738-4525.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-12 sm:py-16 bg-mocha-950 text-stone-300 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <Breadcrumbs items={[{ label: 'Contact Us' }]} />

        {/* Hero Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-mocha-900/90 border border-gold/40 px-3.5 py-1.5 rounded-full text-gold text-xs font-mono uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-amber" />
            <span>Houston Physical Facility</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl text-gold-100 font-bold leading-tight">
            Contact Jay-Co Sheet Metal & Roofing
          </h1>

          <p className="text-base sm:text-lg text-stone-300 leading-relaxed font-sans">
            Connect directly with our Houston estimating and fabrication team at our 2307 Knight Street facility.
          </p>
        </div>

        {/* 2-Column Contact Info & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Left Column: Contact Cards & Shop Details (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-mocha-900/90 border border-gold/30 rounded-xl p-6 sm:p-8 space-y-6 shadow-xl">
              <h3 className="font-serif text-2xl font-bold text-gold-100 border-b border-mocha-800/80 pb-3 leading-snug">
                Fabrication Shop & Office
              </h3>

              <div className="space-y-4 text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gold-100 block">Physical Shop Address</strong>
                    <span>{COMPANY_INFO.address}</span>
                    <span className="block text-stone-400">{COMPANY_INFO.city}, {COMPANY_INFO.state} {COMPANY_INFO.zip}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gold-100 block">Primary Telephone</strong>
                    <a href={`tel:${COMPANY_INFO.phone}`} className="text-gold hover:underline font-mono">
                      {COMPANY_INFO.phoneFormatted}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gold-100 block">Direct Email</strong>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-stone-300 hover:text-gold font-mono">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-stone-400">
                  <Printer className="w-5 h-5 flex-shrink-0 mt-1 text-stone-500" />
                  <div>
                    <strong className="text-stone-300 block">Facsimile (Fax)</strong>
                    <span className="font-mono">{COMPANY_INFO.fax}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 border-t border-mocha-800/80 pt-4">
                  <Clock className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gold-100 block">Operating Hours</strong>
                    <span>Monday – Friday: 7:00 AM – 5:00 PM CST</span>
                    <span className="block text-stone-400 text-xs sm:text-sm mt-0.5">Saturday & Sunday: By Appointment</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-mocha-800/80">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(COMPANY_INFO.address + ', ' + COMPANY_INFO.city + ', ' + COMPANY_INFO.state + ' ' + COMPANY_INFO.zip)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] w-full py-3 bg-mocha-950 hover:bg-mocha-850 border border-gold/40 text-gold rounded-lg text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>

            {/* Emergency Storm Damage Callout */}
            <div className="bg-mocha-900/90 border border-amber/30 p-5 rounded-xl space-y-2 shadow-lg">
              <div className="flex items-center gap-2 text-amber font-semibold text-xs uppercase tracking-wider font-mono">
                <AlertCircle className="w-4 h-4" />
                <span>Storm & Hurricane Damage Support</span>
              </div>
              <p className="text-sm text-stone-300 leading-relaxed">
                For active leaks following Gulf Coast tropical storms or severe wind events, please call our primary telephone line at <strong className="text-gold-100">(713) 738-4525</strong> for prioritized technical assessment.
              </p>
            </div>
          </div>

          {/* Right Column: Direct Message Form (7 Cols) */}
          <div className="lg:col-span-7 bg-mocha-900/90 border border-gold/30 rounded-xl p-6 sm:p-10 shadow-2xl">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-fadeIn">
                <div className="w-16 h-16 bg-gold/15 border border-gold/50 text-gold rounded-full flex items-center justify-center mx-auto shadow-gold-sm">
                  <CheckCircle className="w-9 h-9 text-amber" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-gold-100 leading-snug">
                  Message Transmitted Successfully
                </h3>
                <p className="text-base text-stone-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-gold-100">{formData.name}</strong>. Your inquiry has been logged in our dispatch database. Our estimating team at 2307 Knight St will review your project details and follow up within one business day.
                </p>
                {referenceId && (
                  <div className="inline-block bg-mocha-950 border border-gold/40 px-4 py-2 rounded-lg text-xs font-mono text-gold">
                    Dispatch Reference ID: <span className="text-gold-100 font-bold">{referenceId}</span>
                  </div>
                )}
                <div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        subject: 'Standing Seam / Architectural Copper Inquiry',
                        message: ''
                      });
                    }}
                    className="min-h-[44px] mt-4 text-sm text-gold hover:underline font-mono"
                  >
                    ← Send another inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-gold-100 mb-1 leading-snug">
                    Send an Inquiry to the Knight St Desk
                  </h3>
                  <p className="text-sm text-stone-300 leading-relaxed">
                    Submit your architectural questions, material inquiries, or project requests.
                  </p>
                </div>

                {errorMessage && (
                  <div className="p-3 bg-red-950/60 border border-red-500/50 rounded-lg text-xs text-red-200 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0 text-red-400" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono uppercase tracking-wider text-stone-300 mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Eleanor Vance"
                    className="w-full bg-mocha-950 border border-mocha-800 rounded-lg py-3 px-3.5 text-base text-gold-100 placeholder-stone-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-mono uppercase tracking-wider text-stone-300 mb-1.5">
                      Direct Phone Number *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(713) 555-0144"
                      className="w-full bg-mocha-950 border border-mocha-800 rounded-lg py-3 px-3.5 text-base text-gold-100 placeholder-stone-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-mono uppercase tracking-wider text-stone-300 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="evance@houstonestates.com"
                      className="w-full bg-mocha-950 border border-mocha-800 rounded-lg py-3 px-3.5 text-base text-gold-100 placeholder-stone-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-stone-300 mb-1.5">
                    Inquiry Topic
                  </label>
                  <select
                    value={formData.subject}
                    onChange={e => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-mocha-950 border border-mocha-800 rounded-lg py-3 px-3.5 text-base text-gold-100 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30"
                  >
                    <option value="Standing Seam / Architectural Copper Inquiry">Standing Seam / Architectural Copper Inquiry</option>
                    <option value="Residential Re-Roof & Permitting">Residential Re-Roof & Permitting</option>
                    <option value="Custom Shop Brake Fabrication">Custom Shop Brake Fabrication</option>
                    <option value="Slate & Tile Restoration">Slate & Tile Restoration</option>
                    <option value="GAF System Plus Warranty Question">GAF System Plus Warranty Question</option>
                    <option value="Architectural Blueprint Review">Architectural Blueprint Review</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono uppercase tracking-wider text-stone-300 mb-1.5">
                    Project Details / Questions *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details about your roof square footage, location, material preference, or questions..."
                    className="w-full bg-mocha-950 border border-mocha-800 rounded-lg p-3.5 text-base text-gold-100 placeholder-stone-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="min-h-[48px] w-full bg-amber hover:bg-amber-light disabled:opacity-50 text-mocha-950 font-bold py-3.5 px-6 rounded-md shadow-amber text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Sending Message...' : 'Send Message to Estimating Desk'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
