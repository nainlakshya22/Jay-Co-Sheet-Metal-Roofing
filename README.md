# Jay-Co Sheet Metal & Roofing — Frontend Web Application

> **Architectural Sheet Metal Artistry & Precision Roofing for Houston Estates**  
> Serving River Oaks, Memorial, Bunker Hill Village, West University, and The Heights since 1980.

A high-performance, mobile-optimized, luxury front-end web application built for **Jay-Co Sheet Metal & Roofing** (Houston, TX). Engineered to agency standards ($10,000–$15,000 positioning) with precision typography, responsive touch ergonomics, and rich interactive conversion tools.

---

## 🌟 Key Features

- **Cinematic Video Hero:** Full-bleed background video with WebP fallback poster and accessible play/pause controls.
- **Interactive Roof Investment Estimator:** Instant estimation across 5 premium materials (Standing Seam 24-ga Steel, 16-oz Architectural Copper, Natural Slate, Spanish Clay Tile, Timberline HDZ Shingles) and custom square footage.
- **Before/After Transformation Slider:** Touch-interactive slider with dual WebP images and 48px ergonomic drag handle.
- **Filterable Portfolio Gallery:** Architectural categories (Standing Seam, Copper, Commercial Metal, Historic Restoration) with high-res modal lightboxes.
- **Multi-Step Quote Consultation Flow:** 5-step guided estimation request with 16px iOS auto-zoom prevention and client-side validation.
- **Roofing Financing Calculator:** Real-time monthly payment calculation using standard amortization modeling.
- **AI Architectural Concierge:** Interactive conversational assistant answering technical metal alloy, contractor verification, and wind-rating inquiries.
- **10 Dedicated SEO Service Pages:** Deep technical content for standing seam, architectural copper, sheet metal fabrication, slate, tile, gutters, flashing, and balcony waterproofing.
- **Sticky Mobile Conversion Bar:** Persistent thumb-zone dialer (`tel:+17137384525`) and one-tap quote modal trigger with iOS safe-area inset protection.
- **100% WCAG 2.2 AA Accessible:** High-contrast palette ($\ge$ 4.5:1), visible focus indicators, explicit ARIA dialog roles, and $\ge$ 44px primary touch targets.

---

## 🛠️ Technology Stack

- **Framework:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Build Tool:** [Vite 6](https://vitejs.dev/)
- **Styling:** [Tailwind CSS 3](https://tailwindcss.com/) with custom luxury copper & charcoal theme
- **Icons:** [Lucide React](https://lucide.dev/) (Scalable vector SVGs)
- **Routing:** React HashRouter (Frictionless static & single-page hosting support)
- **Design System:** Cinzel (Architectural Serif) + Inter (Precision Sans)

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
- `npm` or `pnpm`

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd jay-co-sheet-metal-roofing

# Install frontend dependencies
npm install
```

### Development Server

```bash
# Start Vite development server at http://localhost:5173
npm run dev
```

### Production Build

```bash
# Compile and optimize production assets to dist/
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Project Structure

```
├── public/                 # Static assets, WebP project images, robots.txt, sitemap.xml
├── src/
│   ├── assets/             # Brand logos and vector graphics
│   ├── components/         # Reusable React components (Header, Hero, Estimator, Modals, etc.)
│   ├── data/               # Company profile, service catalog, and project portfolio datasets
│   ├── pages/              # 31 route views (Home, About, Heritage, Portfolio, 10 SEO Service Pages)
│   ├── types/              # TypeScript interface definitions
│   ├── App.tsx             # Root router, modal controller & layout wrapper
│   ├── index.css           # Global Tailwind directives & custom animations
│   └── main.tsx            # Application entry point
├── index.html              # HTML5 template with safe-area viewport & SEO meta tags
├── tailwind.config.js      # Custom theme colors (copper, charcoal, slate) and breakpoints
├── tsconfig.json           # TypeScript compilation configuration
└── vite.config.ts          # Vite configuration & React plugin setup
```

---

## 🛡️ License & Attributions

© 2026 Jay-Co Enterprises, LLC. All rights reserved.  
Physical Shop: 2307 Knight St, Houston, TX 77093.  
Licensed & Insured. GAF Certified™ Residential Contractor #1132527.
