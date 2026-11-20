import React from 'react';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { StickyMobileBar } from './components/common/StickyMobileBar';
import { Lightbox } from './components/common/Lightbox';
import { AIAssistantModal } from './components/tools/AIAssistantModal';
import { MultiStepQuoteForm } from './components/tools/MultiStepQuoteForm';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { HeritagePage } from './pages/HeritagePage';
import { ServicesDirectoryPage } from './pages/ServicesDirectoryPage';
import { ArchitecturalMetalPage } from './pages/ArchitecturalMetalPage';
import { MaterialsPage } from './pages/MaterialsPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { BunkerHillProjectPage } from './pages/BunkerHillProjectPage';
import { BeforeAfterPage } from './pages/BeforeAfterPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { CertificationsPage } from './pages/CertificationsPage';
import { GAFCertificationPage } from './pages/GAFCertificationPage';
import { ServiceAreasPage } from './pages/ServiceAreasPage';
import { EstimatorPage } from './pages/EstimatorPage';
import { FinancingPage } from './pages/FinancingPage';
import { QuotePage } from './pages/QuotePage';
import { ContactPage } from './pages/ContactPage';
import { FaqPage } from './pages/FaqPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { Sparkles, X } from 'lucide-react';

const MainContent: React.FC = () => {
  const { currentRoute, isQuoteModalOpen, closeQuoteModal, openAssistant } = useNavigation();

  const renderRoute = () => {
    switch (currentRoute) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'heritage':
        return <HeritagePage />;
      case 'services':
        return <ServicesDirectoryPage />;
      case 'architectural-metal':
        return <ArchitecturalMetalPage />;
      case 'materials':
        return <MaterialsPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'project-bunker-hill':
        return <BunkerHillProjectPage />;
      case 'before-after':
        return <BeforeAfterPage />;
      case 'reviews':
        return <ReviewsPage />;
      case 'certifications':
        return <CertificationsPage />;
      case 'gaf-certification':
        return <GAFCertificationPage />;
      case 'service-areas':
        return <ServiceAreasPage />;
      case 'estimator':
        return <EstimatorPage />;
      case 'financing':
        return <FinancingPage />;
      case 'quote':
        return <QuotePage />;
      case 'contact':
        return <ContactPage />;
      case 'faqs':
        return <FaqPage />;
      case 'privacy':
        return <PrivacyPage />;
      case 'terms':
        return <TermsPage />;
      // Dynamic service detail routes
      case 'service-standing-seam':
      case 'service-copper-roofing':
      case 'service-sheet-metal':
      case 'service-slate-tile':
      case 'service-composition-shingle':
      case 'service-roof-replacement':
      case 'service-gutters-downspouts':
      case 'service-custom-flashing':
      case 'service-flashing-chimney-caps':
      case 'service-roof-repairs':
      case 'service-waterproofing':
      case 'service-balcony-waterproofing':
        return <ServiceDetailPage slug={currentRoute} />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-mocha-950 text-stone-200 overflow-x-hidden">
      <Header />
      <main className="flex-1 w-full overflow-x-hidden">
        {renderRoute()}
      </main>
      <Footer />
      <StickyMobileBar />
      <Lightbox />
      <AIAssistantModal />

      {/* Floating Concierge AI Trigger Button (Desktop & Tablet) */}
      <button
        onClick={openAssistant}
        className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center gap-2.5 bg-mocha-900/95 hover:bg-mocha-850 text-gold border border-gold/40 hover:border-gold px-4 py-3 rounded-full shadow-gold-lg backdrop-blur-md transition-all transform hover:scale-105 group gold-border-glow"
        aria-label="Open Jay-Co Architectural Assistant"
      >
        <div className="w-6 h-6 rounded-full bg-gold/15 flex items-center justify-center text-amber">
          <Sparkles className="w-4 h-4 text-amber animate-pulse" />
        </div>
        <span className="font-serif font-bold text-xs text-ivory tracking-wider group-hover:text-gold transition-colors">
          Ask Concierge
        </span>
        <span className="w-2 h-2 rounded-full bg-emerald-400" />
      </button>

      {/* Modal Dialog for Quote Request */}
      {isQuoteModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn"
          onClick={closeQuoteModal}
        >
          <div 
            className="w-full max-w-2xl my-8 relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={closeQuoteModal}
              className="absolute top-2 right-2 sm:-top-3 sm:-right-3 z-10 min-w-[44px] min-h-[44px] flex items-center justify-center bg-mocha-850 text-stone-300 hover:text-gold p-2 rounded-full border border-gold/40 shadow-lg active:scale-95 transition-all"
              aria-label="Close quote modal"
            >
              <X className="w-5 h-5" />
            </button>
            <MultiStepQuoteForm isModal={true} onClose={closeQuoteModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <NavigationProvider>
      <MainContent />
    </NavigationProvider>
  );
};

export default App;
