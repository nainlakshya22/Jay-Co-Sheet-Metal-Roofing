import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  CookieCategories,
  ConsentRecord,
  DEFAULT_CATEGORIES,
  ALL_ACCEPTED_CATEGORIES,
  getStoredConsent,
  saveConsent,
  acceptAllConsent,
  rejectAllConsent,
  resetConsent as resetConsentService,
  applyConsentToGoogle,
} from '../services/cookieConsent';

interface CookieConsentContextType {
  consent: ConsentRecord | null;
  hasConsented: boolean;
  isBannerOpen: boolean;
  isPreferencesOpen: boolean;
  activeTab: 'categories' | 'ccpa';
  openPreferences: (tab?: 'categories' | 'ccpa') => void;
  closePreferences: () => void;
  acceptAll: () => void;
  rejectAll: () => void;
  savePreferences: (categories: Partial<CookieCategories>, ccpaOptOut?: boolean) => void;
  withdrawConsent: () => void;
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

export const CookieConsentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [consent, setConsent] = useState<ConsentRecord | null>(null);
  const [isBannerOpen, setIsBannerOpen] = useState<boolean>(false);
  const [isPreferencesOpen, setIsPreferencesOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'categories' | 'ccpa'>('categories');
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  useEffect(() => {
    const existing = getStoredConsent();
    if (existing && existing.hasConsented) {
      setConsent(existing);
      setIsBannerOpen(false);
      // Re-apply to Google Consent Mode on boot
      applyConsentToGoogle(existing);
    } else {
      // First time visitor: show banner
      setIsBannerOpen(true);
      // Ensure Google Consent Mode is default denied
      applyConsentToGoogle({
        hasConsented: false,
        timestamp: new Date().toISOString(),
        version: '1.0.0',
        categories: DEFAULT_CATEGORIES,
        ccpaOptOut: false,
      });
    }
    setIsInitialized(true);
  }, []);

  const openPreferences = (tab: 'categories' | 'ccpa' = 'categories') => {
    setActiveTab(tab);
    setIsPreferencesOpen(true);
  };

  const closePreferences = () => {
    setIsPreferencesOpen(false);
  };

  const handleAcceptAll = () => {
    const record = acceptAllConsent();
    setConsent(record);
    setIsBannerOpen(false);
    setIsPreferencesOpen(false);
  };

  const handleRejectAll = () => {
    const record = rejectAllConsent();
    setConsent(record);
    setIsBannerOpen(false);
    setIsPreferencesOpen(false);
  };

  const handleSavePreferences = (
    categories: Partial<CookieCategories>,
    ccpaOptOut: boolean = false
  ) => {
    const record = saveConsent(categories, ccpaOptOut);
    setConsent(record);
    setIsBannerOpen(false);
    setIsPreferencesOpen(false);
  };

  const handleWithdrawConsent = () => {
    resetConsentService();
    setConsent(null);
    setIsPreferencesOpen(false);
    setIsBannerOpen(true);
  };

  return (
    <CookieConsentContext.Provider
      value={{
        consent,
        hasConsented: Boolean(consent?.hasConsented),
        isBannerOpen: isInitialized && isBannerOpen,
        isPreferencesOpen,
        activeTab,
        openPreferences,
        closePreferences,
        acceptAll: handleAcceptAll,
        rejectAll: handleRejectAll,
        savePreferences: handleSavePreferences,
        withdrawConsent: handleWithdrawConsent,
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
};

export const useCookieConsent = (): CookieConsentContextType => {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error('useCookieConsent must be used within a CookieConsentProvider');
  }
  return context;
};
