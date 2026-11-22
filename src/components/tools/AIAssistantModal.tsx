import React, { useState, useRef, useEffect } from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { COMPANY_INFO, FAQS, VERIFIED_REVIEWS } from '../../data/companyData';
import { 
  Sparkles, 
  X, 
  Send, 
  Bot, 
  User, 
  Phone, 
  FileText, 
  ShieldCheck, 
  MapPin, 
  ArrowRight 
} from 'lucide-react';

interface Message {
  id: string;
  sender: 'assistant' | 'user';
  text: string;
  timestamp: string;
  action?: {
    type: 'quote' | 'call' | 'navigate';
    label: string;
    payload?: string;
  };
}

const QUICK_PROMPTS = [
  "What services do you offer?",
  "What is your GAF certification ID?",
  "Where are you located & phone number?",
  "Do you offer financing?",
  "Do you provide free inspections?",
  "Tell me about the Bunker Hill Village project"
];

export const AIAssistantModal: React.FC = () => {
  const { isAssistantOpen, closeAssistant, openQuoteModal, navigateTo } = useNavigation();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'm-1',
      sender: 'assistant',
      text: `Hello. I am the Jay-Co Architectural Concierge — an automated technical knowledge engine programmed with verified company records, GAF specifications, and Houston estate installation data.\n\nHow may I assist your roofing or architectural metalwork project today?`,
      timestamp: 'Just now'
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  if (!isAssistantOpen) return null;

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    const userMessage: Message = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    setTimeout(() => {
      generateResponse(query);
      setIsTyping(false);
    }, 600);
  };

  const generateResponse = (query: string) => {
    const q = query.toLowerCase();
    let replyText = "";
    let action: Message['action'] = undefined;

    // 1. Services offered
    if (q.includes('what services') || (q.includes('services') && (q.includes('offer') || q.includes('provide') || q.includes('do you'))) || q.includes('what do you do') || q.includes('scope of work')) {
      replyText = `Jay-Co Sheet Metal & Roofing specializes in high-end architectural metalwork and premium residential roofing across Houston. Our primary divisions include:\n\n• Standing Seam Metal Roofing (24-ga Galvalume with Kynar 500®)\n• Architectural Copper Roofing & Cladding (16-oz / 20-oz hand-soldered)\n• In-House Custom Sheet Metal Brake Fabrication\n• Premium Slate & Spanish Tile Restoration\n• Composition Shingle Replacement (GAF Certified™)\n• Full Residential Roof Replacements & Re-Roofing\n• Custom Flashing, Chimney Caps, Louvers & Finials\n• Heavy-Gauge Seamless Gutters & Downspouts\n• Architectural Balcony Waterproofing & Lead-Coated Pans\n• Diagnostic Leak Detection & Emergency Storm Repairs`;
      action = { type: 'navigate', label: 'View Complete Services Directory', payload: 'services' };
    }
    // 2. Phone number
    else if (q.includes('phone') || q.includes('telephone') || q.includes('call') || q.includes('number')) {
      replyText = `Our primary telephone line is (713) 738-4525. Our office and fabrication shop hours are Monday through Friday, 7:00 AM – 5:00 PM CST, with weekend consultations available by appointment.`;
      action = { type: 'call', label: 'Call Shop: (713) 738-4525' };
    }
    // 3. Location / Address
    else if (q.includes('where are you') || q.includes('located') || q.includes('address') || q.includes('location') || q.includes('shop address') || q.includes('knight')) {
      replyText = `Jay-Co operates from our owned physical fabrication facility located at 2307 Knight St, Houston, TX 77093. This facility houses our computerized sheet metal brakes, hand-soldering stations, and dispatch headquarters.`;
      action = { type: 'navigate', label: 'View Contact & Shop Map', payload: 'contact' };
    }
    // 4. GAF certification ID
    else if (q.includes('gaf') || q.includes('contractor id') || (q.includes('certification') && !q.includes('area'))) {
      replyText = `Jay-Co Sheet Metal & Roofing is an officially verified GAF Certified™ Residential Contractor under GAF Contractor ID #1132527. This certification allows us to furnish GAF factory-backed warranties, including the System Plus Lifetime Warranty. Note: Our verified credential is GAF Certified™ (we do not claim unverified designations such as Master Elite).`;
      action = { type: 'navigate', label: 'Review GAF Credential Verification', payload: 'gaf-certification' };
    }
    // 5. Financing
    else if (q.includes('financ') || q.includes('payment plan') || q.includes('monthly payment') || q.includes('apr')) {
      replyText = `Yes, Jay-Co offers flexible residential roof financing options ranging from 12 to 60 months with competitive interest rates and no prepayment penalties. Homeowners can finance complete standing seam, slate, copper, or GAF shingle replacements with predictable monthly payments.`;
      action = { type: 'navigate', label: 'Open Financing Calculator', payload: 'financing' };
    }
    // 6. Free inspections
    else if (q.includes('inspection') || q.includes('free inspection') || q.includes('diagnostic') || q.includes('assess') || q.includes('evaluate')) {
      replyText = `Yes. Jay-Co provides comprehensive, complimentary diagnostic roof inspections across Greater Houston. Our technical specialists inspect deck integrity, flashing junctions, underlayment condition, and storm impact, providing an itemized written assessment with zero obligation.`;
      action = { type: 'quote', label: 'Schedule Free Roof Inspection' };
    }
    // 7. Warranties
    else if (q.includes('warrant') || q.includes('guarantee')) {
      replyText = `We provide multi-tiered warranty coverage:\n\n1. GAF System Plus Limited Warranty: Up to 50 years of non-prorated factory material coverage on certified residential shingle installations.\n2. Kynar 500® Finish Warranty: 30-year manufacturer warranty against chalking, fading, and peeling on Galvalume standing seam panels.\n3. Jay-Co Craftsmanship Guarantee: 10-year workmanship warranty on architectural standing seam, soldered copper, and complete re-roof installations.\n4. Copper Solder Guarantee: Lifetime metallurgical bond warranty on in-house soldered flat-lock copper pans.`;
      action = { type: 'navigate', label: 'View Certifications & Warranties', payload: 'certifications' };
    }
    // 8. Service areas
    else if (q.includes('area') || q.includes('serve') || q.includes('service territory') || q.includes('where do you') || q.includes('neighborhood') || q.includes('city') || q.includes('harris county')) {
      replyText = `Jay-Co serves premier residential estates and commercial properties across Greater Houston and Harris County, with focused experience in:\n\n• Bunker Hill Village (Permit #20220639 recorded)\n• Piney Point Village & Hunters Creek Village\n• Memorial & Spring Branch\n• River Oaks & Tanglewood\n• West University Place & Southside Place\n• Bellaire & Meyerland\n• The Heights & Montrose`;
      action = { type: 'navigate', label: 'View Interactive Service Area Map', payload: 'service-areas' };
    }
    // Bunker Hill project
    else if (q.includes('bunker hill') || q.includes('brandywine') || q.includes('permit') || q.includes('20220639')) {
      replyText = `Our verified municipal portfolio includes City of Bunker Hill Village Permit #20220639 for 11838 Brandywine Ln, Houston, TX 77024. Completed on April 27, 2023 with an official permit valuation of $23,752, this project encompassed an extensive residential re-roof on a 6,122 sq. ft. luxury wooded property.`;
      action = { type: 'navigate', label: 'Read Bunker Hill Case Study', payload: 'project-bunker-hill' };
    }
    // Copper details
    else if (q.includes('copper') || q.includes('solder') || q.includes('verdigris') || q.includes('patina')) {
      replyText = `Jay-Co fabricates architectural copper in-house using heavy 16-oz and 20-oz cold-rolled copper sheet. While inferior contractors rely on silicone or polyurethane caulks that degrade under Houston UV within 5 years, Jay-Co artisans hand-solder all critical transitions using 50/50 tin-lead solder for a permanent metallurgical weld. Natural copper evolves through rich chocolate brown to a protective verdigris patina.`;
      action = { type: 'navigate', label: 'View Copper Roofing Details', payload: 'service-copper-roofing' };
    }
    // Standing seam
    else if (q.includes('standing seam') || q.includes('galvalume') || q.includes('kynar')) {
      replyText = `Our architectural standing seam systems utilize 24-gauge Galvalume with factory-baked Kynar 500® (PVDF) resin finishes. Engineered with concealed expansion clips, 1.5" or 2" mechanical seams, and rated for 140+ MPH hurricane wind uplifts and Class 4 impact resistance.`;
      action = { type: 'navigate', label: 'View Standing Seam Details', payload: 'service-standing-seam' };
    }
    // BBB status
    else if (q.includes('bbb') || q.includes('better business bureau')) {
      replyText = `In accordance with our strict factual integrity standards: Jay-Co Sheet Metal & Roofing is not BBB accredited and holds an unrated status with the Better Business Bureau. We maintain our reputation through 35+ years of continuous Houston builder referrals and our official GAF Certified™ standing (ID #1132527).`;
    }
    // General quote / estimate request
    else if (q.includes('quote') || q.includes('estimate') || q.includes('cost') || q.includes('price')) {
      replyText = `Because architectural metal and luxury roofing depend on roof geometry, pitch, structural decking, and material choices, we provide detailed written proposals following an on-site consultation. You can submit your project parameters through our online 5-step quote tool or call (713) 738-4525.`;
      action = { type: 'quote', label: 'Launch 5-Step Quote Form' };
    }
    // Fallback response
    else {
      replyText = `Thank you for your inquiry. As the Jay-Co Architectural Concierge, I answer questions regarding our GAF-certified roofing (ID #1132527), custom 2307 Knight St sheet metal brake fabrication, standing seam systems, copper craft, and Houston municipal projects. Would you like to schedule an on-site diagnostic inspection or explore our portfolio?`;
      action = { type: 'quote', label: 'Request an On-Site Consultation' };
    }

    const assistantMessage: Message = {
      id: `a-${Date.now()}`,
      sender: 'assistant',
      text: replyText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      action
    };

    setMessages(prev => [...prev, assistantMessage]);
  };

  const handleActionClick = (action: Message['action']) => {
    if (!action) return;
    if (action.type === 'quote') {
      closeAssistant();
      openQuoteModal();
    } else if (action.type === 'call') {
      window.location.href = `tel:${COMPANY_INFO.phone}`;
    } else if (action.type === 'navigate' && action.payload) {
      closeAssistant();
      navigateTo(action.payload as any);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-mocha-950/85 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4 animate-fadeIn">
      <div 
        className="w-full max-w-xl h-[85vh] sm:h-[650px] bg-mocha-950 border border-gold/40 rounded-t-2xl sm:rounded-xl shadow-2xl flex flex-col overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-mocha-900 border-b border-mocha-800/80 p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-mocha-950 border border-gold/40 p-1.5 flex items-center justify-center text-gold">
              <Sparkles className="w-5 h-5 text-gold animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif font-bold text-gold-100 text-sm">
                  Jay-Co Architectural Assistant
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400" title="Online Concierge" />
              </div>
              <span className="text-[11px] text-stone-400 font-mono">
                Trained on Verified Company & GAF #1132527 Records
              </span>
            </div>
          </div>

          <button
            onClick={closeAssistant}
            className="min-w-[44px] min-h-[44px] p-2 flex items-center justify-center text-stone-400 hover:text-gold rounded hover:bg-mocha-850 transition-colors"
            aria-label="Close assistant"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Message Thread */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 text-sm sm:text-base">
          {messages.map(msg => (
            <div
              key={msg.id}
              className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'assistant' && (
                <div className="w-7 h-7 rounded-md bg-mocha-900 border border-gold/30 flex items-center justify-center text-gold flex-shrink-0 mt-0.5">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div className={`max-w-[85%] space-y-2`}>
                <div
                  className={`p-3.5 rounded-lg leading-relaxed whitespace-pre-wrap ${
                    msg.sender === 'user'
                      ? 'bg-amber text-mocha-950 font-medium ml-auto shadow-sm'
                      : 'bg-mocha-900 border border-gold/20 text-stone-200'
                  }`}
                >
                  {msg.text}
                </div>

                {msg.action && (
                  <button
                    onClick={() => handleActionClick(msg.action)}
                    className="min-h-[44px] flex items-center gap-2 text-xs font-semibold text-gold hover:text-gold-100 bg-mocha-900 border border-gold/40 hover:border-gold px-3.5 py-2.5 rounded-md transition-all shadow-sm"
                  >
                    <span>{msg.action.label}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber" />
                  </button>
                )}

                <div className={`text-[10px] text-stone-500 font-mono ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                  {msg.timestamp}
                </div>
              </div>

              {msg.sender === 'user' && (
                <div className="w-7 h-7 rounded-md bg-mocha-800 border border-mocha-700 flex items-center justify-center text-gold-100 flex-shrink-0 mt-0.5">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2 text-stone-400 text-xs pl-10">
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-bounce [animation-delay:0.4s]" />
              </div>
              <span className="font-mono text-[11px] text-gold/80">Consulting technical records...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Prompts Bar */}
        <div className="px-4 py-2 border-t border-mocha-800/80 bg-mocha-900/80 overflow-x-auto flex gap-2 no-scrollbar">
          {QUICK_PROMPTS.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(prompt)}
              className="min-h-[38px] text-[11px] sm:text-xs text-stone-300 hover:text-gold bg-mocha-950 border border-mocha-800 hover:border-gold/40 px-3 py-1.5 rounded-md whitespace-nowrap transition-colors flex-shrink-0 flex items-center"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Input Controls */}
        <div className="p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] bg-mocha-900 border-t border-mocha-800">
          <form
            onSubmit={e => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Ask about standing seam, GAF warranty, copper, or Bunker Hill..."
              className="flex-1 bg-mocha-950 border border-mocha-800 rounded-lg py-2.5 px-3 text-base sm:text-sm text-gold-100 placeholder-stone-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="min-w-[44px] min-h-[44px] p-2.5 bg-amber hover:bg-amber-light disabled:opacity-40 text-mocha-950 rounded-lg transition-colors flex items-center justify-center flex-shrink-0 shadow-amber"
              aria-label="Send inquiry"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
          <div className="flex items-center justify-between mt-2 text-[10px] text-stone-500 font-mono">
            <span>Verified Knowledge Base • Houston, TX</span>
            <span className="text-gold/80">Direct Call: (713) 738-4525</span>
          </div>
        </div>
      </div>
    </div>
  );
};
