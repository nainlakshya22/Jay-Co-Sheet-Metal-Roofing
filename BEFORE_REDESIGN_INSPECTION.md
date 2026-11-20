# Jay-Co Sheet Metal & Roofing — Baseline Inspection Report (Pre-Redesign)

**Document Reference:** `BEFORE_REDESIGN_INSPECTION.md`  
**Inspection Date:** November 20, 2026  
**Auditor / Roles:** Senior UI/UX Designer, Creative Director, Motion Designer, Senior Frontend Engineer  
**Inspection Scope:** Full Architecture, Multi-Viewport Analysis, Design Tokens, Visual Hierarchy, Interactive Workflows, Functional Integrity  
**Live Target Reference:** [https://jay-co-sheet-metal-roofing-six.vercel.app/](https://jay-co-sheet-metal-roofing-six.vercel.app/)

---

## 1. Executive Summary & Brand Positioning

The existing Jay-Co Sheet Metal & Roofing digital presence represents an authentic, high-end American roofing and architectural metal contractor serving Houston’s luxury enclaves (River Oaks, Memorial, Bunker Hill Village, West University, and The Heights).

### Core Strengths Observed:
- **Authentic Credentials:** Prominently highlights the 2307 Knight St shop, verified GAF Certified™ Contractor status (#1132527), and documented permit history (#20220639 in Bunker Hill Village).
- **Engineering Tools:** Interactive Roof Investment Estimator with dynamic mathematical calculations, interactive financing calculator, before/after transformation slider, and AI Architectural Concierge.
- **Robust Architecture:** Zero-dependency vanilla React 19 + TypeScript SPA utilizing client-side hash routing, responsive design with zero horizontal overflow, and accessible touch targets.

---

## 2. Multi-Viewport & Layout Inspection

| Viewport Category | Resolution (W × H) | Layout Adaptation | Observation & Findings |
| :--- | :--- | :--- | :--- |
| **Mobile SE** | 320px × 568px | Single-column stacked | Clean reflow, text sizes properly scaled, bottom action bar docks cleanly. |
| **Mobile Standard** | 375px × 812px | Single-column stacked | Tested live. Ergonomic tap targets (>48px), hamburger menu triggers full-screen drawer smoothly. |
| **Mobile Pro Max** | 430px × 932px | Single-column stacked | Generous padding, crisp cards, zero horizontal scrollbar. |
| **Tablet Portrait** | 768px × 1024px | 2-column grid reflow | Split hero actions, 2-column service cards, clean table layout. |
| **Laptop** | 1024px – 1280px | 3-column grid reflow | Full header navigation bar, dual CTAs, interactive calculator side-by-side. |
| **Desktop 1080p** | 1440px – 1920px | 12-column max-7xl | Expansive container, cinematic video backdrop, multi-card comparison matrices. |

---

## 3. Structural & Component Audit

### 3.1 Header & Navigation
- **Utility Bar:** Top ticker with GAF license `#1132527`, 2307 Knight St location, AI Assistant launcher pill, and formatted telephone link `(713) 738-4525`.
- **Primary Nav:** Custom architectural logo mark (roof & brake silhouette), direct route links to Services, Architectural Metal, Materials, Projects, Warranties, and Contact.
- **Conversion Trigger:** "Request Architectural Quote" button triggering global 5-step modal wizard.
- **Mobile Navigation:** Responsive slide-over drawer organizing links into 4 distinct divisions: *Roofing Systems*, *Shop Fabrication*, *Company & Trust*, and *Calculators & Tools*.

### 3.2 Hero Section
- **Backdrop:** Full-bleed video player with loop, mute, playsInline, poster fallback, and pause/play toggle.
- **Typography:** Playfair Display serif master headline with copper gradient text span.
- **Trust Elements:** Trust badge pill, 4-column metric cards (GAF Certified, 4.5/5.0 Stars, Bunker Hill Permit #20220639, Knight St Shop).
- **CTAs:** Dual actions — Primary ("Request an Architectural Quote") and Secondary ("Explore Our Craftsmanship").

### 3.3 Visual Identity & Existing Color Palette
- **Charcoal Base:** `#0B0D0E` (charcoal-950), `#121518` (charcoal-900), `#1F242B` (charcoal-800).
- **Existing Accents:** Burnished copper (`#C68642`), bronze (`#9C7A4A`), ivory (`#FAF8F5`), and stone neutrals (`#DFDAD1`).
- **Opportunity:** The current palette relies on cool charcoal blacks and standard copper. Transitioning to the user-specified **Mocha Brown (`#5B4632`)**, **Champagne Gold (`#F4D9A0`)**, and **Burnt Amber (`#C8792C`)** three-color theme will elevate the site into an ultra-luxury editorial aesthetic inspired by high-end architectural monographs.

### 3.4 Typography & Font Hierarchy
- **Serif Headline Font:** `Playfair Display` (font-serif), weights 600, 700, 900.
- **Body & UI Font:** `Inter` (font-sans), weights 300, 400, 500, 600, 700.
- **Technical & Badge Font:** `JetBrains Mono` (font-mono), weights 400, 500, 600.
- **Reading Comfort:** Excellent legibility and crisp contrast across all screens.

### 3.5 Roofing Imagery & Interactive Media
- **High-Res Assets:** Standing seam Galvalume, architectural copper bay window roofs, diamond copper shingles, Vermont slate, Spanish clay tile, and GAF Timberline HDZ installations.
- **Interactive Before/After Slider:** High-resolution split view with touch-draggable ergonomic thumb handle.
- **Filterable Portfolio:** Category filters (Metal Roofing, Architectural Copper, Slate & Tile, Residential Re-Roof, Custom Fabrication) with high-res Lightbox modal viewer.

### 3.6 Conversion Workflows & Interactive Tools
- **Interactive Roof Estimator:** Synchronized square-footage slider and manual number input, pitch selector, story selector, 5 material cost formulas, real-time total range generation, and seamless handoff to quote form.
- **Financing Calculator:** Amortization calculator for 60, 84, and 120-month financing terms at competitive APR rates with down-payment adjustments.
- **5-Step Quote Request Wizard:** Multi-step modal and standalone page with real-time client validation, system selection, square footage sync, contact fields, and Houston neighborhood dropdown.
- **AI Concierge Modal:** Conversational interface with 4 quick question chips and grounded answers about GAF status, Houston wind-ratings, and copper fabrication.

---

## 4. Complete Route Inventory

Every route operates via hash-based routing (`NavigationContext.tsx`), ensuring bookmarkability and zero 404s on static hosting:

1. `#/` — Homepage (Master architectural presentation)
2. `#/about` — About Jay-Co (Shop history, machinery, leadership)
3. `#/heritage` — Company Heritage (36+ year Houston craftsmanship timeline)
4. `#/services` — Services Directory (Full 10-service architectural index)
5. `#/architectural-metal` — Dedicated Sheet Metal & Custom Fabrication Page
6. `#/materials` — Materials Guide (24-ga Galvalume, 16-oz Copper, Slate, Tile, GAF Shingles)
7. `#/projects` — Filterable Project Portfolio Gallery
8. `#/project-bunker-hill` — Bunker Hill Village Case Study (Permit #20220639)
9. `#/before-after` — Interactive Before & After Transformations
10. `#/reviews` — Verified Reviews (Google Reviews 4.5/5.0 & GAF Directory)
11. `#/certifications` — Certifications, GAF System Plus Warranty, Wind Uplift Ratings
12. `#/gaf-certification` — Official GAF Certification Verification Portal
13. `#/service-areas` — Service Areas (River Oaks, Memorial, Bunker Hill, West U, etc.)
14. `#/estimator` — Standalone Interactive Roof Investment Estimator
15. `#/financing` — Roof Financing Calculator & Application Guide
16. `#/quote` — Standalone 5-Step Architectural Consultation Form
17. `#/contact` — Shop Desk Contact, Map Coordinates, and Direct Email
18. `#/faqs` — Comprehensive Houston Roofing FAQ
19. `#/privacy` — Privacy Policy & Data Handling
20. `#/terms` — Terms of Service & Warranty Conditions
21. 10 Dedicated SEO Service Landing Pages:
    - `#/service-standing-seam`
    - `#/service-copper-roofing`
    - `#/service-sheet-metal`
    - `#/service-slate-tile`
    - `#/service-composition-shingle`
    - `#/service-roof-replacement`
    - `#/service-gutters-downspouts`
    - `#/service-flashing-chimney-caps`
    - `#/service-roof-repairs`
    - `#/service-waterproofing` (and `service-balcony-waterproofing`)

---

## 5. Non-Negotiable Functionality & Integrity Rules

The following working systems must be **100% preserved and never broken**:
1. All 31 routing destinations and URL hash synchronization.
2. Dynamic state management in `NavigationContext.tsx` (modals, lightboxes, route history).
3. 5-step quote wizard submission flow and input validation.
4. Interactive roof investment math engine and financing calculator.
5. Interactive before/after drag slider.
6. Portfolio image lightbox with full-resolution display and captions.
7. Click-to-call `tel:+17137384525` and mailto links.
8. AI Concierge instant response system.
9. Verified company credentials: GAF #1132527, Bunker Hill Permit #20220639, 2307 Knight St shop.
10. Sticky mobile thumb navigation bar.
11. Full SEO schema in `index.html` (`RoofingContractor`, `AggregateRating`, `GeoCoordinates`).

---

## 6. Baseline Conclusion & Redesign Strategy

The website is structurally solid and functionally mature. The upgrade to the **Three-Color Luxury Theme** (Mocha Brown `#5B4632`, Champagne Gold `#F4D9A0`, Burnt Amber `#C8792C`), paired with the **Cinematic Architectural Hero**, **Editorial Poster Banner**, and **Sophisticated Motion Lighting Suite**, will elevate Jay-Co from a capable regional contractor to an elite, luxury architectural roofing authority.
