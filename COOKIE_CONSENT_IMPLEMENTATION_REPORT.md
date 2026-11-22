# Jay-Co Sheet Metal & Roofing — Premium Cookie Consent System Report
**Enterprise Privacy, Google Consent Mode v2 & CCPA/CPRA Compliance Implementation**  
**Project:** Jay-Co Sheet Metal & Roofing (`https://jay-co-sheet-metal-roofing-six.vercel.app/`)  
**Completed & Verified:** November 22, 2026

---

## 1. Executive Implementation Plan

### A. Files Modified (5)
1. `index.html`:
   - Configured early-execution **Google Consent Mode v2** defaults in `<head>`.
   - Synchronously reads prior consent from `localStorage` before tag evaluation.
   - Guaranteed `analytics_storage`, `ad_storage`, `ad_user_data`, and `ad_personalization` default to `'denied'` for first-time visitors with a 500ms update window.
2. `src/types/index.ts`:
   - Added `'cookies'` route to `PageRoute` union type.
3. `src/context/NavigationContext.tsx`:
   - Added route alias mapping for `cookie-policy` and `cookie` to `'cookies'`.
4. `src/App.tsx`:
   - Wrapped application tree with `<CookieConsentProvider>`.
   - Mounted `<CookieConsentBanner />` and `<CookiePreferencesModal />`.
   - Registered `'cookies'` route in `renderRoute` to render `<CookiePolicyPage />`.
5. `src/components/common/Footer.tsx`:
   - Integrated `useCookieConsent` hook.
   - Added **"Cookie Policy"** link (`navigateTo('cookies')`).
   - Added persistent **"Cookie Preferences"** button (re-opens customization modal).
   - Added dedicated **"Do Not Sell or Share My Info"** button (opens directly to CCPA/TDPSA opt-out tab).

### B. Files Created (5)
1. `src/services/cookieConsent.ts`:
   - Atomic localStorage persistence (`STORAGE_KEY = 'jayco_cookie_consent_v1'`).
   - 1st-party cookie synchronization (`COOKIE_NAME = 'jayco_cookie_consent'` with `SameSite=Lax`, 365-day lifespan).
   - Category management engine (Strictly Necessary, Analytics, Marketing, Functional).
   - Google Consent Mode v2 dispatcher (`gtag('consent', 'update', ...)`).
   - Non-consented cookie purge helper (`removeBlockedCookies`).
   - Event dispatcher for real-time reactivity (`window.dataLayer` and custom DOM event `jayco_consent_change`).
2. `src/context/CookieConsentContext.tsx`:
   - Global React state provider managing banner visibility, modal dialog state, active tabs, and consent record lifecycle.
3. `src/components/cookie/CookieConsentBanner.tsx`:
   - Luxury-styled bottom dock popup matching Jay-Co's mocha, champagne gold, and burnt amber aesthetic.
   - Dual policy links (Privacy Policy & Cookie Policy).
   - Three discrete user actions: **Accept All**, **Reject All**, and **Customize**.
4. `src/components/cookie/CookiePreferencesModal.tsx`:
   - Comprehensive customization dialog (`role="dialog"`, `aria-modal="true"`).
   - Granular interactive switches for all 4 cookie categories with examples, providers, and expiration lifespans.
   - Strictly necessary cookies locked and marked "Always Active".
   - Dedicated tab for **US State Privacy Rights (CCPA / TDPSA)** with one-click "Do Not Sell or Share" opt-out.
   - Full keyboard accessibility (Tab navigation, ESC key dismissal, Space/Enter switch triggers).
   - One-click "Withdraw Consent" capability for returning visitors.
5. `src/pages/CookiePolicyPage.tsx`:
   - Dedicated compliance page (`/#/cookies`) matching `PrivacyPage.tsx`.
   - Full inventory table of tracking technologies, duration, and providers.
   - Interactive "Manage Preferences" button directly on the policy page.

---

## 2. Technical Architecture & Tracking Integrations

### A. Google Consent Mode v2 Integration
The system integrates with Google Consent Mode v2 specifications:
- **Default State (Pre-Interaction)**:
  ```javascript
  gtag('consent', 'default', {
    'analytics_storage': 'denied',
    'ad_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'functionality_storage': 'denied',
    'personalization_storage': 'denied',
    'security_storage': 'granted',
    'wait_for_update': 500
  });
  ```
- **Update State (Post-Selection)**:
  ```javascript
  gtag('consent', 'update', {
    'analytics_storage': categories.analytics ? 'granted' : 'denied',
    'ad_storage': (categories.marketing && !ccpaOptOut) ? 'granted' : 'denied',
    'ad_user_data': (categories.marketing && !ccpaOptOut) ? 'granted' : 'denied',
    'ad_personalization': (categories.marketing && !ccpaOptOut) ? 'granted' : 'denied',
    'functionality_storage': categories.functional ? 'granted' : 'denied',
    'personalization_storage': categories.functional ? 'granted' : 'denied',
    'security_storage': 'granted'
  });
  ```

### B. Tracking Script Handling
- The codebase currently operates 0 unnecessary third-party tracking scripts.
- No fake tracking scripts were injected.
- The Consent Mode v2 foundation ensures that whenever a marketing team adds Google Analytics (`G-XXXXXXXXXX`) or Google Ads tags in the future, the tags will automatically obey user consent signals with zero code modifications.

### C. CCPA / CPRA & Texas TDPSA Compliance
- **Opt-Out Mechanism**: Clear footer link labeled `"Do Not Sell or Share My Info"`.
- **Behavior**: Directs to the State Privacy Rights tab; activating the opt-out switch immediately disallows marketing cookies and sets `ad_storage`, `ad_user_data`, and `ad_personalization` to `'denied'`.
- **Honest Legal Disclosure**: Transparently informs visitors that Jay-Co does not sell personal information for money, but provides statutory opt-outs for cross-context behavioral advertising.

---

## 3. Empirical Test Results (22 / 22 Passed)

Automated headless Chromium testing executed via `scripts/test-cookie-consent.js`:

| # | Test Scenario | Target Verified | Result | Details |
| :---: | :--- | :--- | :---: | :--- |
| **1** | First-Time Visitor Experience | `[role="region"][aria-label="Cookie and Privacy Consent"]` | 🟢 **PASS** | Banner element detected in DOM upon arrival |
| **1b** | Banner Elements & Links | Title, Accept All, Reject All, Customize, Privacy & Cookie links | 🟢 **PASS** | All interactive triggers verified with accessible touch targets |
| **2** | Consent Mode v2 Defaults | `dataLayer` initial default signals | 🟢 **PASS** | `analytics_storage: 'denied'`, `ad_storage: 'denied'`, `security_storage: 'granted'` |
| **3a** | Accept All Banner Dismissal | Banner state post-acceptance | 🟢 **PASS** | Banner cleanly closes from DOM |
| **3b** | Storage Persistence | `localStorage.getItem('jayco_cookie_consent_v1')` | 🟢 **PASS** | Saves all categories (`analytics: true`, `marketing: true`, `functional: true`) |
| **3c** | 1st-Party Cookie Synchronization | `document.cookie` header | 🟢 **PASS** | `jayco_cookie_consent` set with `SameSite=Lax` and 365-day max-age |
| **3d** | Consent Mode v2 Update | `gtag('consent', 'update')` | 🟢 **PASS** | All optional signals updated to `'granted'` |
| **4a** | Reload Persistence | Page reload with stored consent | 🟢 **PASS** | Banner remains hidden; no UI flicker or flash |
| **4b** | Instant Reload Consent Signals | `dataLayer` default on boot | 🟢 **PASS** | Defaults immediately load saved granted preferences on startup |
| **5** | Footer Preferences Trigger | `footer button: 'Cookie Preferences'` | 🟢 **PASS** | Reopens `[role="dialog"]` preferences modal |
| **6** | Withdraw Consent Flow | Modal button: 'Withdraw Consent' | 🟢 **PASS** | Clears storage, resets signals to denied, and restores banner |
| **7** | Reject All Flow | Banner button: 'Reject All' | 🟢 **PASS** | Saves strictly necessary only; analytics & marketing blocked |
| **8** | Granular Category Customization | Modal category toggles + Save | 🟢 **PASS** | Saved `analytics: true, marketing: false`; Consent Mode reflects signals |
| **9a** | CCPA Direct Navigation | `footer button: 'Do Not Sell or Share My Info'` | 🟢 **PASS** | Opens modal directly to State Privacy Rights tab |
| **9b** | CCPA Opt-Out Activation | State privacy switch toggle + Save | 🟢 **PASS** | `ccpaOptOut: true` saved; marketing automatically blocked |
| **10a**| Dedicated Policy Page | Route `/#/cookies` | 🟢 **PASS** | Heading & statutory disclosures render properly |
| **10b**| Cookie Inventory Table | Technical table of cookies & tokens | 🟢 **PASS** | Identifiers, providers, purposes, and lifespans displayed |
| **10c**| Policy Page Interactive Trigger | Button: 'Manage Preferences' | 🟢 **PASS** | Launches preferences modal directly from policy text |
| **11a**| Mobile Viewport (390px) Overflow| `scrollWidth` vs `innerWidth` on iPhone 14 | 🟢 **PASS** | Exactly **0px horizontal overflow** (`scrollWidth: 390px`) |
| **11b**| Mobile Banner Docking | Position and z-index on mobile | 🟢 **PASS** | Docked cleanly at bottom above safe-area insets |
| **11c**| Mobile Modal Responsiveness | Modal width and scrollability on 390px | 🟢 **PASS** | Fits screen with internal scrolling; 0px overflow |
| **12** | Console & Network Health | Browser error listeners | 🟢 **PASS** | **0 unhandled console errors** throughout lifecycle |

---

## 4. Verification Screenshots

High-resolution screenshots captured during automated test execution:

- [Desktop Cookie Consent Banner (1440px)](file:///C:/Users/nainl/.gemini/antigravity/brain/9c6db383-13b8-4c5d-8258-f3ef1d390f05/desktop-cookie-banner.png)
- [Desktop Cookie Preferences Customization Modal (1440px)](file:///C:/Users/nainl/.gemini/antigravity/brain/9c6db383-13b8-4c5d-8258-f3ef1d390f05/desktop-cookie-preferences-modal.png)
- [Desktop Dedicated Cookie Policy Page (1440px)](file:///C:/Users/nainl/.gemini/antigravity/brain/9c6db383-13b8-4c5d-8258-f3ef1d390f05/desktop-cookie-policy-page.png)
- [Mobile Cookie Consent Banner (390px iPhone)](file:///C:/Users/nainl/.gemini/antigravity/brain/9c6db383-13b8-4c5d-8258-f3ef1d390f05/mobile-cookie-banner.png)
- [Mobile Cookie Preferences Modal (390px iPhone)](file:///C:/Users/nainl/.gemini/antigravity/brain/9c6db383-13b8-4c5d-8258-f3ef1d390f05/mobile-cookie-preferences-modal.png)
