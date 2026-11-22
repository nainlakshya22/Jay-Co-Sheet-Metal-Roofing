import React, { createContext, useContext, useState, useEffect } from 'react';
import { PageRoute } from '../types';

interface QuotePrefillData {
  service?: string;
  material?: string;
  estimatedSqFt?: number;
  estimatedCostRange?: string;
}

interface NavigationContextType {
  currentRoute: PageRoute;
  navigateTo: (route: PageRoute) => void;
  isQuoteModalOpen: boolean;
  openQuoteModal: (prefill?: QuotePrefillData) => void;
  closeQuoteModal: () => void;
  quotePrefill: QuotePrefillData | null;
  isAssistantOpen: boolean;
  toggleAssistant: () => void;
  openAssistant: () => void;
  closeAssistant: () => void;
  lightboxImage: { src: string; caption?: string } | null;
  openLightbox: (src: string, caption?: string) => void;
  closeLightbox: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('home');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quotePrefill, setQuotePrefill] = useState<QuotePrefillData | null>(null);
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<{ src: string; caption?: string } | null>(null);

  // Synchronize with URL hash for direct bookmarking and back button
  useEffect(() => {
    const handleHashChange = () => {
      let raw = window.location.hash.replace(/^#\/?/, '') as PageRoute;
      
      // Support friendly route aliases
      if (raw === 'service-flashing-chimney-caps') raw = 'service-custom-flashing';
      if (raw === 'service-balcony-waterproofing') raw = 'service-waterproofing';
      if ((raw as string) === 'bunker-hill') raw = 'project-bunker-hill';
      if ((raw as string) === 'before-and-after') raw = 'before-after';
      if ((raw as string) === 'cookie-policy' || (raw as string) === 'cookie') raw = 'cookies';

      if (raw) {
        setCurrentRoute(raw);
      } else {
        setCurrentRoute('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (route: PageRoute) => {
    setCurrentRoute(route);
    window.location.hash = route === 'home' ? '' : route;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openQuoteModal = (prefill?: QuotePrefillData) => {
    if (prefill) setQuotePrefill(prefill);
    setIsQuoteModalOpen(true);
  };

  const closeQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };

  const toggleAssistant = () => setIsAssistantOpen(prev => !prev);
  const openAssistant = () => setIsAssistantOpen(true);
  const closeAssistant = () => setIsAssistantOpen(false);

  const openLightbox = (src: string, caption?: string) => {
    setLightboxImage({ src, caption });
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <NavigationContext.Provider
      value={{
        currentRoute,
        navigateTo,
        isQuoteModalOpen,
        openQuoteModal,
        closeQuoteModal,
        quotePrefill,
        isAssistantOpen,
        toggleAssistant,
        openAssistant,
        closeAssistant,
        lightboxImage,
        openLightbox,
        closeLightbox,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
