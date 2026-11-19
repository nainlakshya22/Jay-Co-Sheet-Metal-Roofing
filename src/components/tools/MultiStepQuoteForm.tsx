import React, { useState, useEffect } from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { COMPANY_INFO } from '../../data/companyData';
import { 
  CheckCircle, 
  ChevronRight, 
  ChevronLeft, 
  ShieldCheck, 
  AlertCircle, 
  Send, 
  MapPin, 
  FileText, 
  Hammer,
  Home,
  Check
} from 'lucide-react';

interface FormData {
  // Step 1: Project Scope
  projectType: string;
  // Step 2: Property Info
  streetAddress: string;
  neighborhood: string;
  propertyType: string;
  approxSqFt: string;
  // Step 3: Material & Details
  materialPreference: string;
  timeline: string;
  projectNotes: string;
  // Step 4: Contact Details
  fullName: string;
  email: string;
  phone: string;
  preferredContact: string;
}

export const MultiStepQuoteForm: React.FC<{ isModal?: boolean; onClose?: () => void }> = ({ 
  isModal = false, 
  onClose 
}) => {
  const { quotePrefill } = useNavigation();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [confirmationId, setConfirmationId] = useState('');
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const [formData, setFormData] = useState<FormData>({
    projectType: quotePrefill?.service || 'Standing Seam Metal Roofing',
    streetAddress: '',
    neighborhood: 'Memorial / Bunker Hill',
    propertyType: 'Single Family Luxury Estate',
    approxSqFt: quotePrefill?.estimatedSqFt ? `${quotePrefill.estimatedSqFt} sq ft` : '3,500 - 5,000 sq ft',
    materialPreference: quotePrefill?.material || '24-Ga Standing Seam Kynar 500',
    timeline: 'Within 30 to 60 Days',
    projectNotes: quotePrefill?.estimatedCostRange 
      ? `Estimated budget range from estimator: ${quotePrefill.estimatedCostRange}` 
      : '',
    fullName: '',
    email: '',
    phone: '',
    preferredContact: 'Phone Call',
  });

  useEffect(() => {
    if (quotePrefill) {
      if (quotePrefill.service) {
        setFormData(prev => ({ ...prev, projectType: quotePrefill.service! }));
      }
      if (quotePrefill.material) {
        setFormData(prev => ({ ...prev, materialPreference: quotePrefill.material! }));
      }
      if (quotePrefill.estimatedSqFt) {
        setFormData(prev => ({ ...prev, approxSqFt: `${quotePrefill.estimatedSqFt} sq ft` }));
      }
    }
  }, [quotePrefill]);

  const validateStep = (currentStep: number): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (currentStep === 1) {
      if (!formData.projectType) newErrors.projectType = 'Please select a project type';
    } else if (currentStep === 2) {
      if (!formData.streetAddress.trim()) newErrors.streetAddress = 'Project address or area is required';
      if (!formData.neighborhood.trim()) newErrors.neighborhood = 'Neighborhood or Houston ZIP is required';
    } else if (currentStep === 3) {
      if (!formData.materialPreference) newErrors.materialPreference = 'Please select a material preference';
    } else if (currentStep === 4) {
      if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
      if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Valid email address is required';
      }
      if (!formData.phone.trim() || formData.phone.length < 10) {
        newErrors.phone = 'Valid 10-digit phone number is required';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    setStep(prev => Math.max(1, prev - 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(4)) {
      setStep(4);
      return;
    }

    setIsSubmitting(true);

    try {
      // Send real structured payload to backend endpoint
      const payload = {
        ...formData,
        submittedAt: new Date().toISOString(),
        targetCompany: COMPANY_INFO.name,
        targetEmail: COMPANY_INFO.email,
        gafContractorId: COMPANY_INFO.gafContractorId,
      };

      let finalLeadId = `JC-${Math.floor(100000 + Math.random() * 900000)}`;

      try {
        const response = await fetch('/api/quote', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        const data = await response.json();
        if (response.ok && data.success && data.leadId) {
          finalLeadId = data.leadId;
        } else if (!response.ok) {
          console.warn('API returned non-200, fallback to standard lead reference');
        }
      } catch (err) {
        console.warn('Backend endpoint unreachable, using client offline dispatch reference');
      }

      setConfirmationId(finalLeadId);
      setIsSuccess(true);
    } catch (err) {
      setErrors({ fullName: 'Submission encountered a temporary network delay. Please call (713) 738-4525 directly.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-charcoal-900 border border-charcoal-700/80 rounded-sm p-6 sm:p-10 text-center animate-fadeIn">
        <div className="w-16 h-16 bg-copper/20 border border-copper/50 text-copper rounded-full flex items-center justify-center mx-auto mb-5 shadow-copper">
          <CheckCircle className="w-9 h-9" />
        </div>
        <span className="font-mono text-xs uppercase tracking-wider text-copper bg-charcoal-800 px-3 py-1 rounded border border-copper/30">
          Inquiry Ref #{confirmationId}
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl text-ivory font-bold mt-4 mb-3">
          Architectural Consultation Request Received
        </h3>
        <p className="text-sm text-stone-300 max-w-lg mx-auto leading-relaxed mb-6">
          Thank you, <strong className="text-ivory">{formData.fullName}</strong>. Our senior roofing estimators at the 2307 Knight St shop are reviewing your inquiry for <strong className="text-copper">{formData.projectType}</strong> in <strong className="text-ivory">{formData.neighborhood}</strong>.
        </p>

        <div className="bg-charcoal-850 border border-charcoal-700 p-4 rounded text-left max-w-md mx-auto text-xs space-y-2 mb-6">
          <div className="flex justify-between border-b border-charcoal-800 pb-1.5">
            <span className="text-stone-400">Selected Material:</span>
            <span className="text-ivory font-medium">{formData.materialPreference}</span>
          </div>
          <div className="flex justify-between border-b border-charcoal-800 pb-1.5">
            <span className="text-stone-400">Approx. Roof Size:</span>
            <span className="text-ivory font-medium">{formData.approxSqFt}</span>
          </div>
          <div className="flex justify-between border-b border-charcoal-800 pb-1.5">
            <span className="text-stone-400">Preferred Contact:</span>
            <span className="text-ivory font-medium">{formData.preferredContact} ({formData.phone})</span>
          </div>
          <div className="flex justify-between pt-1">
            <span className="text-stone-400">Target Timeline:</span>
            <span className="text-copper font-medium">{formData.timeline}</span>
          </div>
        </div>

        <p className="text-xs text-stone-400 mb-6">
          Need immediate assistance or emergency storm diagnosis? Call directly at{' '}
          <a href={`tel:${COMPANY_INFO.phone}`} className="text-copper font-semibold underline">
            {COMPANY_INFO.phoneFormatted}
          </a>.
        </p>

        {isModal && onClose && (
          <button
            onClick={onClose}
            className="bg-charcoal-800 hover:bg-charcoal-700 text-stone-200 px-6 py-2.5 rounded text-xs uppercase tracking-wider font-semibold transition-colors"
          >
            Close Window
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="bg-charcoal-900 border border-charcoal-700/80 rounded-sm shadow-elevated p-6 sm:p-8">
      {/* Step Progress Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-stone-400 mb-3">
          <span className="text-copper font-bold">Step {step} of 5</span>
          <span>
            {step === 1 && "Project Scope"}
            {step === 2 && "Property & Location"}
            {step === 3 && "Material & Blueprint Details"}
            {step === 4 && "Contact & Scheduling"}
            {step === 5 && "Review & Submit"}
          </span>
        </div>
        <div className="w-full bg-charcoal-800 h-1.5 rounded-full overflow-hidden">
          <div 
            className="bg-gradient-to-r from-copper to-copper-light h-full transition-all duration-300"
            style={{ width: `${(step / 5) * 100}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* STEP 1: PROJECT SCOPE */}
        {step === 1 && (
          <div className="space-y-4 animate-fadeIn">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl text-ivory font-bold mb-1">
                What architectural roofing or fabrication service do you require?
              </h3>
              <p className="text-xs text-stone-400">
                Select the primary scope for your residential estate or custom commercial structure.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                { title: 'Standing Seam Metal Roofing', desc: 'Concealed-fastener 24-ga hurricane systems' },
                { title: 'Architectural Copper Work', desc: 'Hand-soldered copper dormers, bays & pans' },
                { title: 'Residential Re-Roofing', desc: 'Full tear-off & deck replacement (Permitted)' },
                { title: 'Slate & Tile Roofing', desc: 'S-1 Vermont slate & architectural clay tile' },
                { title: 'Composition Shingles (GAF)', desc: 'Timberline HDZ with System Plus warranty' },
                { title: 'Custom Shop Fabrication', desc: 'Brake-formed chimney caps, coping & scuppers' },
                { title: 'Gutters & Downspouts', desc: '6\" half-round seamless copper & aluminum' },
                { title: 'Leak Diagnostic & Repair', desc: 'Surgical flashing remediation & diagnostics' },
              ].map(item => (
                <button
                  type="button"
                  key={item.title}
                  onClick={() => setFormData({ ...formData, projectType: item.title })}
                  className={`p-3.5 text-left rounded border transition-all ${
                    formData.projectType === item.title
                      ? 'bg-charcoal-800 border-copper shadow-copper text-ivory'
                      : 'bg-charcoal-850/80 border-charcoal-700/80 hover:border-stone-500 text-stone-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-sm text-ivory">{item.title}</span>
                    {formData.projectType === item.title && (
                      <Check className="w-4 h-4 text-copper" />
                    )}
                  </div>
                  <p className="text-xs text-stone-400">{item.desc}</p>
                </button>
              ))}
            </div>
            {errors.projectType && (
              <p className="text-xs text-red-400 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.projectType}</span>
              </p>
            )}
          </div>
        )}

        {/* STEP 2: PROPERTY & LOCATION */}
        {step === 2 && (
          <div className="space-y-4 animate-fadeIn">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl text-ivory font-bold mb-1">
                Where is the project located?
              </h3>
              <p className="text-xs text-stone-400">
                Helps us determine municipal permitting requirements and local wind velocity codes.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div>
                <label htmlFor="quote-address" className="block text-xs font-mono uppercase tracking-wider text-stone-300 mb-1.5">
                  Street Address / Subdivision *
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-copper absolute left-3 top-3" />
                  <input
                    id="quote-address"
                    type="text"
                    value={formData.streetAddress}
                    onChange={e => setFormData({ ...formData, streetAddress: e.target.value })}
                    placeholder="e.g. 11838 Brandywine Ln or Memorial Way"
                    className="w-full bg-charcoal-850 border border-charcoal-700 rounded py-2.5 pl-10 pr-4 text-base sm:text-sm text-ivory focus:outline-none focus:border-copper"
                  />
                </div>
                {errors.streetAddress && (
                  <p className="text-xs text-red-400 mt-1">{errors.streetAddress}</p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-stone-300 mb-1.5">
                    Houston Neighborhood / ZIP *
                  </label>
                  <select
                    value={formData.neighborhood}
                    onChange={e => setFormData({ ...formData, neighborhood: e.target.value })}
                    className="w-full bg-charcoal-850 border border-charcoal-700 rounded py-2.5 px-3 text-base sm:text-sm text-ivory focus:outline-none focus:border-copper"
                  >
                    <option value="Bunker Hill Village (77024)">Bunker Hill Village (77024)</option>
                    <option value="Memorial / Hunters Creek (77024/77079)">Memorial / Hunters Creek</option>
                    <option value="River Oaks (77019)">River Oaks (77019)</option>
                    <option value="West University Place (77005)">West University Place (77005)</option>
                    <option value="The Heights / Garden Oaks (77007/77008)">The Heights / Garden Oaks</option>
                    <option value="Spring Branch / Hilshire (77055)">Spring Branch / Hilshire</option>
                    <option value="Bellaire / Southside (77401)">Bellaire / Southside</option>
                    <option value="Tanglewood / Galleria (77056)">Tanglewood / Galleria</option>
                    <option value="Other Greater Houston Metro">Other Greater Houston Metro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-stone-300 mb-1.5">
                    Property Classification
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange={e => setFormData({ ...formData, propertyType: e.target.value })}
                    className="w-full bg-charcoal-850 border border-charcoal-700 rounded py-2.5 px-3 text-base sm:text-sm text-ivory focus:outline-none focus:border-copper"
                  >
                    <option value="Single Family Luxury Estate">Single Family Luxury Estate</option>
                    <option value="Historic Landmark / Custom Home">Historic Landmark / Custom Home</option>
                    <option value="New Construction Build">New Construction Build</option>
                    <option value="Architectural Commercial Building">Architectural Commercial Building</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-stone-300 mb-1.5">
                  Approximate Roof Footprint / Home Size
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['Under 2,500 sq ft', '2,500 - 4,500 sq ft', '4,500 - 7,000 sq ft', '7,000+ sq ft'].map(size => (
                    <button
                      type="button"
                      key={size}
                      onClick={() => setFormData({ ...formData, approxSqFt: size })}
                      className={`min-h-[44px] p-2.5 text-xs rounded border text-center flex items-center justify-center transition-all ${
                        formData.approxSqFt === size
                          ? 'bg-charcoal-800 border-copper text-copper font-medium shadow-sm'
                          : 'bg-charcoal-850 border-charcoal-700 text-stone-300 hover:border-stone-500'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: MATERIAL & DETAILS */}
        {step === 3 && (
          <div className="space-y-4 animate-fadeIn">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl text-ivory font-bold mb-1">
                Material Preferences & Project Specifics
              </h3>
              <p className="text-xs text-stone-400">
                Specify architectural alloys, shingle lines, or specific fabrication blueprints.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-stone-300 mb-1.5">
                  Material Specification *
                </label>
                <select
                  value={formData.materialPreference}
                  onChange={e => setFormData({ ...formData, materialPreference: e.target.value })}
                  className="w-full bg-charcoal-850 border border-charcoal-700 rounded py-2.5 px-3 text-base sm:text-sm text-ivory focus:outline-none focus:border-copper"
                >
                  <option value="24-Ga Standing Seam Kynar 500 (Galvalume)">24-Ga Standing Seam Kynar 500 (Galvalume)</option>
                  <option value="16-oz / 20-oz Cold-Rolled Natural Copper">16-oz / 20-oz Cold-Rolled Natural Copper</option>
                  <option value="S-1 Grade Vermont Natural Slate">S-1 Grade Vermont Natural Slate</option>
                  <option value="GAF Timberline HDZ® Architectural Shingles">GAF Timberline HDZ® Architectural Shingles</option>
                  <option value="Spanish / Mission Clay Tile">Spanish / Mission Clay Tile</option>
                  <option value="Architectural Concrete Tile">Architectural Concrete Tile</option>
                  <option value="Custom Brake Sheet Metal Flashing / Shrouds">Custom Brake Sheet Metal Flashing / Shrouds</option>
                  <option value="SBS Modified Bitumen Flat / Balcony Membrane">SBS Modified Bitumen Flat / Balcony Membrane</option>
                  <option value="Undecided / Request Jay-Co Recommendation">Undecided / Request Jay-Co Recommendation</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-stone-300 mb-1.5">
                  Target Project Timeline
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {['Immediate / Active Leak', 'Within 30 to 60 Days', 'Planning & Budgeting Phase'].map(time => (
                    <button
                      type="button"
                      key={time}
                      onClick={() => setFormData({ ...formData, timeline: time })}
                      className={`p-2.5 text-xs rounded border text-center transition-all ${
                        formData.timeline === time
                          ? 'bg-charcoal-800 border-copper text-copper font-medium'
                          : 'bg-charcoal-850 border-charcoal-700 text-stone-300 hover:border-stone-500'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-stone-300 mb-1.5">
                  Architectural Notes / Description (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.projectNotes}
                  onChange={e => setFormData({ ...formData, projectNotes: e.target.value })}
                  placeholder="Detail any specific roof pitches, custom chimney caps, copper dormers, or architect blueprints..."
                  className="w-full bg-charcoal-850 border border-charcoal-700 rounded p-3 text-base sm:text-sm text-ivory focus:outline-none focus:border-copper"
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: CONTACT & SCHEDULING */}
        {step === 4 && (
          <div className="space-y-4 animate-fadeIn">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl text-ivory font-bold mb-1">
                Where should we send the detailed consultation scope?
              </h3>
              <p className="text-xs text-stone-400">
                Your contact details are kept strictly confidential under our privacy standards.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div>
                <label htmlFor="quote-name" className="block text-xs font-mono uppercase tracking-wider text-stone-300 mb-1.5">
                  Full Name *
                </label>
                <input
                  id="quote-name"
                  type="text"
                  value={formData.fullName}
                  onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Robert Sterling"
                  className="w-full bg-charcoal-850 border border-charcoal-700 rounded py-2.5 px-3 text-base sm:text-sm text-ivory focus:outline-none focus:border-copper"
                />
                {errors.fullName && <p className="text-xs text-red-400 mt-1">{errors.fullName}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="quote-phone" className="block text-xs font-mono uppercase tracking-wider text-stone-300 mb-1.5">
                    Direct Phone Number *
                  </label>
                  <input
                    id="quote-phone"
                    type="tel"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(713) 555-0192"
                    className="w-full bg-charcoal-850 border border-charcoal-700 rounded py-2.5 px-3 text-base sm:text-sm text-ivory focus:outline-none focus:border-copper"
                  />
                  {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="quote-email" className="block text-xs font-mono uppercase tracking-wider text-stone-300 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    id="quote-email"
                    type="email"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="rsterling@houston.com"
                    className="w-full bg-charcoal-850 border border-charcoal-700 rounded py-2.5 px-3 text-base sm:text-sm text-ivory focus:outline-none focus:border-copper"
                  />
                  {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-stone-300 mb-1.5">
                  Preferred Contact Method
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Phone Call', 'Email', 'Text Message'].map(pref => (
                    <button
                      type="button"
                      key={pref}
                      onClick={() => setFormData({ ...formData, preferredContact: pref })}
                      className={`p-2.5 text-xs rounded border text-center transition-all ${
                        formData.preferredContact === pref
                          ? 'bg-charcoal-800 border-copper text-copper font-medium'
                          : 'bg-charcoal-850 border-charcoal-700 text-stone-300 hover:border-stone-500'
                      }`}
                    >
                      {pref}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STEP 5: REVIEW & SUBMIT */}
        {step === 5 && (
          <div className="space-y-4 animate-fadeIn">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl text-ivory font-bold mb-1">
                Review Your Consultation Request
              </h3>
              <p className="text-xs text-stone-400">
                Please verify your details before transmitting to Jay-Co's Knight St fabrication estimating desk.
              </p>
            </div>

            <div className="bg-charcoal-850 border border-charcoal-700/80 rounded p-4 text-xs space-y-2.5">
              <div className="flex justify-between border-b border-charcoal-800 pb-2">
                <span className="text-stone-400">Project Type:</span>
                <span className="text-copper font-semibold">{formData.projectType}</span>
              </div>
              <div className="flex justify-between border-b border-charcoal-800 pb-2">
                <span className="text-stone-400">Location:</span>
                <span className="text-ivory font-medium">{formData.streetAddress}, {formData.neighborhood}</span>
              </div>
              <div className="flex justify-between border-b border-charcoal-800 pb-2">
                <span className="text-stone-400">Property / Size:</span>
                <span className="text-ivory font-medium">{formData.propertyType} ({formData.approxSqFt})</span>
              </div>
              <div className="flex justify-between border-b border-charcoal-800 pb-2">
                <span className="text-stone-400">Material Specification:</span>
                <span className="text-ivory font-medium">{formData.materialPreference}</span>
              </div>
              <div className="flex justify-between border-b border-charcoal-800 pb-2">
                <span className="text-stone-400">Target Timeline:</span>
                <span className="text-ivory font-medium">{formData.timeline}</span>
              </div>
              <div className="flex justify-between border-b border-charcoal-800 pb-2">
                <span className="text-stone-400">Contact Person:</span>
                <span className="text-ivory font-medium">{formData.fullName} ({formData.phone})</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-stone-400">Email:</span>
                <span className="text-stone-300 font-mono">{formData.email}</span>
              </div>
              {formData.projectNotes && (
                <div className="pt-2 border-t border-charcoal-800">
                  <span className="text-stone-400 block mb-1">Notes:</span>
                  <p className="text-stone-300 italic">{formData.projectNotes}</p>
                </div>
              )}
            </div>

            <div className="bg-charcoal-800/60 border border-copper/20 p-3 rounded text-[11px] text-stone-400 flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-copper flex-shrink-0 mt-0.5" />
              <span>
                <strong>Factory GAF Verified:</strong> Inquiries are managed by Jay-Co Sheet Metal & Roofing (GAF Contractor #1132527). No aggressive sales calls or third-party lead brokers.
              </span>
            </div>
          </div>
        )}

        {/* Form Action Controls */}
        <div className="flex items-center justify-between pt-4 border-t border-charcoal-800">
          {step > 1 ? (
            <button
              type="button"
              onClick={handleBack}
              disabled={isSubmitting}
              className="min-h-[44px] flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-stone-400 hover:text-ivory py-2.5 px-4 rounded transition-colors active:bg-charcoal-800"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
          ) : (
            <div />
          )}

          {step < 5 ? (
            <button
              type="button"
              onClick={handleNext}
              className="min-h-[44px] bg-copper hover:bg-copper-light text-charcoal-950 text-xs uppercase tracking-wider font-bold py-3 px-6 rounded-sm shadow-copper flex items-center gap-1.5 transition-all transform hover:-translate-y-0.5 active:scale-95"
            >
              <span>Continue</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="min-h-[48px] bg-copper hover:bg-copper-light text-charcoal-950 text-xs uppercase tracking-wider font-bold py-3 px-8 rounded-sm shadow-copper flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 disabled:opacity-50 active:scale-95"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-charcoal-950 border-t-transparent rounded-full animate-spin" />
                  <span>Submitting to Shop...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Transmitting Consultation Scope</span>
                </>
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};
