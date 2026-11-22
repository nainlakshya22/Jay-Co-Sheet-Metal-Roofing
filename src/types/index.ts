export type PageRoute = 
  | 'home'
  | 'about'
  | 'heritage'
  | 'services'
  | 'architectural-metal'
  | 'materials'
  | 'projects'
  | 'project-bunker-hill'
  | 'before-after'
  | 'reviews'
  | 'certifications'
  | 'gaf-certification'
  | 'service-areas'
  | 'faqs'
  | 'estimator'
  | 'financing'
  | 'quote'
  | 'contact'
  | 'privacy'
  | 'terms'
  | 'cookies'
  // Service detail routes
  | 'service-standing-seam'
  | 'service-copper-roofing'
  | 'service-sheet-metal'
  | 'service-slate-tile'
  | 'service-composition-shingle'
  | 'service-roof-replacement'
  | 'service-gutters-downspouts'
  | 'service-custom-flashing'
  | 'service-flashing-chimney-caps'
  | 'service-roof-repairs'
  | 'service-waterproofing'
  | 'service-balcony-waterproofing';

export interface CompanyInfo {
  name: string;
  legalName: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  phoneFormatted: string;
  email: string;
  fax: string;
  gafContractorId: string;
  gafCertification: string;
  gafRating: number;
  gafReviewCount: number;
  bbbStatus: string;
  shopFacility: string;
  operatingSince: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  source: 'Google' | 'GAF Contractor Network' | 'Houston Roofing Directory';
  text: string;
  verified: boolean;
  highlight: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Metal Roofing' | 'Architectural Copper' | 'Residential Re-Roof' | 'Slate & Tile' | 'Custom Fabrication';
  location: string;
  description: string;
  materials: string[];
  scope: string;
  architecturalStyle: string;
  image: string;
  thumbnail: string;
  permitId?: string;
  valuation?: string;
  completionDate?: string;
  isDocumentedPermit?: boolean;
  featured: boolean;
  highlights: string[];
}

export interface ServiceItem {
  id: string;
  slug: PageRoute;
  title: string;
  subtitle: string;
  category: 'Roofing Systems' | 'Architectural Metal Fabrication' | 'Specialty & Restoration';
  shortDescription: string;
  fullDescription: string;
  heroImage: string;
  materialsUsed: string[];
  keyBenefits: string[];
  technicalSpecs: { label: string; value: string }[];
  applications: string[];
  houstonConsiderations: string;
  faqList: { question: string; answer: string }[];
}

export interface ServiceArea {
  name: string;
  region: string;
  zipCodes: string[];
  distanceFromShop: string;
  description: string;
  verifiedProjectsCount: string;
  notableArchitecture: string;
}
