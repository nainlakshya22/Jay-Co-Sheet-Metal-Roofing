import { CompanyInfo, ReviewItem, ProjectItem, ServiceItem, ServiceArea } from '../types';

export const COMPANY_INFO: CompanyInfo = {
  name: "Jay-Co Sheet Metal & Roofing",
  legalName: "Jay-Co Enterprises, LLC",
  address: "2307 Knight St",
  city: "Houston",
  state: "TX",
  zip: "77093",
  phone: "+17137384525",
  phoneFormatted: "(713) 738-4525",
  email: "jaycosm@sbcglobal.com",
  fax: "(713) 738-2184",
  gafContractorId: "1132527",
  gafCertification: "GAF Certified™ Residential Roofing Contractor",
  gafRating: 4.5,
  gafReviewCount: 13,
  bbbStatus: "Not BBB Accredited / Unrated (Factory GAF Audited)",
  shopFacility: "2307 Knight St Heavy Brake & Soldering Fabrication Facility",
  operatingSince: "1988 (Over 35 Years of Houston Craftsmanship)",
};

export const VERIFIED_REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Roger Passmore",
    rating: 5,
    date: "Verified Customer Review",
    source: "Google",
    text: "Best sheet metal in Texas. Their attention to detail and precision fabrication work is unmatched.",
    verified: true,
    highlight: "Best sheet metal in Texas"
  },
  {
    id: "rev-2",
    author: "T B (Gadget-13)",
    rating: 5,
    date: "Verified Customer Review",
    source: "Google",
    text: "Great group of professionals, who know their copper and are true craftsmen. Rare to find this level of old-world metalworking today.",
    verified: true,
    highlight: "Know their copper and are true craftsmen"
  },
  {
    id: "rev-3",
    author: "Francisco Bustamante",
    rating: 5,
    date: "Verified Customer Review",
    source: "Google",
    text: "Great service, Great people. Will definitely keep doing business with them. Reliable fabrication and roofing execution.",
    verified: true,
    highlight: "Great service, Great people"
  },
  {
    id: "rev-4",
    author: "Henry Rios",
    rating: 5,
    date: "Verified Customer Review",
    source: "Google",
    text: "Awesome work! Bard pride is the owner and he will take care of your roofing needs with personal care and integrity.",
    verified: true,
    highlight: "Awesome work and personal owner care"
  },
  {
    id: "rev-5",
    author: "Angel Flores",
    rating: 5,
    date: "Verified Customer Review",
    source: "Google",
    text: "Excellent customer service.. I was looking for solder wire in a roll, they helped me out in a flash!! Truly knowledgeable metal specialists.",
    verified: true,
    highlight: "Excellent customer service and material expertise"
  }
];

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: "bunker-hill-20220639",
    title: "Bunker Hill Village Estate Re-Roof",
    category: "Residential Re-Roof",
    location: "11838 Brandywine Ln, Bunker Hill Village, Houston, TX 77024",
    description: "Documented municipal permit re-roof on a 6,122 sq. ft. luxury residence in Bunker Hill Village. Complete tear-off, high-performance architectural underlayment, custom sheet metal valley flashing, and high-wind impact-rated roof installation.",
    materials: ["Architectural Roof System", "Custom Galvanized / Copper Valleys", "High-Temp Underlayment", "Custom Drip Edge"],
    scope: "Full Residential Re-Roof & Architectural Metal Detailing",
    architecturalStyle: "Custom Memorial Luxury Residence (6,122 sq ft on 0.8-acre estate)",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
    permitId: "Permit #20220639 (City of Bunker Hill Village)",
    valuation: "$23,752",
    completionDate: "Recorded April 27, 2023 (Issued Oct 7, 2022)",
    isDocumentedPermit: true,
    featured: true,
    highlights: [
      "City of Bunker Hill Village Verified Permit #20220639",
      "Completed April 27, 2023 with verified inspection sign-off",
      "6,122 sq. ft. luxury wooded Memorial estate parcel",
      "Hand-fabricated flashing transitions from Jay-Co's Knight St shop"
    ]
  },
  {
    id: "river-oaks-copper",
    title: "River Oaks Architectural Copper Detailing",
    category: "Architectural Copper",
    location: "River Oaks, Houston, TX",
    description: "Craftsmanship showcase of 16-oz cold-rolled copper standing seam dormers, hand-soldered bay window roofs, and continuous half-round copper gutter systems developing natural protective verdigris patina.",
    materials: ["16-oz Cold-Rolled Natural Copper", "Hand-Soldered Flat Seam Pans", "Continuous Half-Round Copper Gutters"],
    scope: "Custom Architectural Copper Fabrication & Precision Detailing",
    architecturalStyle: "Georgian & Traditional River Oaks Manor",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
    featured: true,
    highlights: [
      "Architectural Material Showcase: 100+ year service life",
      "Hand-soldered watertight flat lock seam joints",
      "Shop-brake folded at Knight St fabrication shop",
      "Zero exposed penetrations or caulked joints"
    ]
  },
  {
    id: "memorial-standing-seam",
    title: "Memorial Modern Standing Seam Metal System",
    category: "Metal Roofing",
    location: "Memorial / Hunters Creek, Houston, TX",
    description: "24-gauge Galvalume standing seam metal roof in Matte Charcoal Kynar 500 finish. Engineered with 1.5-inch mechanical double-lock seams to resist Houston's severe windstorms and torrential rainfall.",
    materials: ["24-Gauge Galvalume Steel", "Kynar 500® PVDF Finish", "Continuous Ridge Ventilation", "Ice & Water High-Temp Shield"],
    scope: "Complete Standing Seam Installation & Concealed Fastener Engineering",
    architecturalStyle: "Modern Texas Hill Country & Contemporary Architectural Estate",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80",
    featured: true,
    highlights: [
      "Architectural Material Showcase: Class 4 Impact Resistance",
      "140+ MPH Hurricane Wind Uplift Rating",
      "Concealed stainless steel thermal expansion clips",
      "Energy Star certified solar reflective cooling pigment"
    ]
  },
  {
    id: "west-u-slate",
    title: "West University Heritage Slate & Copper Valleys",
    category: "Slate & Tile",
    location: "West University Place, Houston, TX",
    description: "S-1 Grade natural Vermont unfading black roofing slate installed with 16-oz cold-rolled copper valleys, hand-formed copper crickets, and lead-coated ridge caps.",
    materials: ["Vermont S-1 Natural Slate", "Solid Copper Valleys", "Copper Nails", "Breathable Synthetic Deck Armor"],
    scope: "Natural Slate Restoration & Architectural Copper Transitions",
    architecturalStyle: "European Cottage & Historic Revival",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80",
    featured: true,
    highlights: [
      "Architectural Material Showcase: Century-long heritage performance",
      "Non-combustible Class A fire rating",
      "Copper nail fastening into reinforced solid decking",
      "Hand-formed custom copper chimney flashings"
    ]
  },
  {
    id: "tanglewood-chimney-caps",
    title: "Tanglewood Custom Architectural Metal Shrouds",
    category: "Custom Fabrication",
    location: "Tanglewood, Houston, TX",
    description: "Heavy-gauge custom copper chimney shrouds, decorative wall scuppers, and architectural conductor heads custom-measured, shop-brake formed, and installed on a premier custom estate.",
    materials: ["20-oz Architectural Copper", "Brass Screen Spark Arrestors", "Continuous Welded Seams"],
    scope: "Custom Shop Fabrication, Welding & Architectural Detailing",
    architecturalStyle: "Mediterranean Revival Estate",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80",
    featured: true,
    highlights: [
      "Fabricated at 2307 Knight St shop facility",
      "Custom decorative curve profiles with brass mesh",
      "Watertight expansion collars preventing brick saturation",
      "100% custom-fit to architectural blueprints"
    ]
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "standing-seam",
    slug: "service-standing-seam",
    title: "Standing Seam Metal Roofing",
    subtitle: "Architectural Precision. Hurricane-Rated Integrity.",
    category: "Roofing Systems",
    shortDescription: "Concealed-fastener 24-gauge Galvalume and aluminum standing seam roof systems engineered specifically for severe Gulf Coast storm exposure and enduring modern elegance.",
    fullDescription: "Jay-Co's standing seam metal roof systems represent the pinnacle of modern architectural roofing. Unlike agricultural corrugated roofs or exposed-screw systems that inevitably develop leak pathways around aged rubber washers, our standing seam systems utilize 100% concealed stainless steel expansion clips and mechanical double-lock or snap-lock seams. Every panel is fabricated to exacting tolerances, allowing natural thermal expansion under Texas heat while achieving certified resistance against 140+ MPH hurricane wind uplifts. Coated in ultra-durable Kynar 500® / Hylar 5000® PVDF resin finishes, these roofs reflect up to 70% of solar radiation to dramatically lower attic thermal load.",
    heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    materialsUsed: ["24-Gauge Galvalume Steel", "0.032 / 0.040 Architectural Aluminum", "Kynar 500® PVDF Finish", "High-Temp Underlayment", "Stainless Concealed Fasteners"],
    keyBenefits: [
      "50+ year anticipated lifespan with zero panel puncture penetrations",
      "Class 4 impact resistance rating qualifying for Texas insurance premium discounts",
      "Class A fire resistance rating protecting against airborne ember hazards",
      "Cool-roof solar reflectivity exceeding LEED and Energy Star thresholds"
    ],
    technicalSpecs: [
      { label: "Seam Height", value: "1.5\" to 2.0\" Mechanical or Snap Lock" },
      { label: "Panel Width", value: "16\" to 18\" Striated or Flat with Pencil Ribs" },
      { label: "Wind Uplift Rating", value: "UL 580 Class 90 / TAS 125 Hurricane Test" },
      { label: "Substrate Required", value: "5/8\" CDX Plywood or Solid Wood Decking" }
    ],
    applications: ["Modern Luxury Residences", "Hill Country Architecture", "Coastal Storm Enclaves", "Architectural Commercial Facilities"],
    houstonConsiderations: "Houston's extreme thermal cycling—swings between 100°F summer days and sudden thunderstorm cold fronts—causes heavy metal expansion. Jay-Co uses custom floating thermal clips rather than rigid fixed fastening, preventing oil canning and metal fatigue.",
    faqList: [
      {
        question: "Is a standing seam metal roof noisy during heavy Houston thunderstorms?",
        answer: "When installed over solid wood roof decking and premium high-density acoustic underlayment like Jay-Co installs, a metal roof produces no more sound than traditional composition shingles. The attic insulation and solid decking absorb sound vibrations."
      },
      {
        question: "Will standing seam metal roofing reduce my summer electricity bills?",
        answer: "Yes. Kynar 500 coatings reflect infrared solar heat away from the building envelope, reducing roof surface temperatures by up to 50°F compared to dark asphalt shingles and lowering attic cooling loads by up to 25%."
      }
    ]
  },
  {
    id: "copper-roofing",
    slug: "service-copper-roofing",
    title: "Architectural Copper Roofing & Fabrication",
    subtitle: "The Noble Metal. Hand-Soldered Old-World Mastery.",
    category: "Architectural Metal Fabrication",
    shortDescription: "Hand-crafted 16-oz and 20-oz cold-rolled copper roofing, flat seam soldered pans, custom dormers, and portico canopies built for generational permanence.",
    fullDescription: "Copper is the undisputed sovereign of architectural metals. At Jay-Co Sheet Metal & Roofing, copper is not merely an optional trim package—it is the bedrock of our company's craft heritage. In our 2307 Knight St shop, our coppersmiths hand-fold, cleat, and solder heavy 16-oz and 20-oz cold-rolled copper into continuous, impervious architectural envelopes. Over time, bare copper oxidizes from rich burnished bronze to deep chocolate brown, ultimately culminating in the iconic soft green verdigris patina that self-heals against atmospheric corrosion. Hand-soldered flat seam copper is the ultimate waterproof solution for low-slope dormers, dead valleys, and bay windows.",
    heroImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    materialsUsed: ["16-oz & 20-oz Cold-Rolled Natural Copper", "Lead-Coated Copper", "50/50 Virgin Soldering Alloy", "Solid Copper Cleats", "Tinned Copper Rivets"],
    keyBenefits: [
      "100+ year historic service lifespan with zero painting or coating required",
      "Hand-soldered watertight seams impervious to standing water and driving rain",
      "Natural antimicrobial and anti-fungal properties resisting algae in humid climates",
      "Exceptional aesthetic prestige that elevates property valuation"
    ],
    technicalSpecs: [
      { label: "Material Weight", value: "16 oz/sq ft (.0216\") & 20 oz/sq ft (.0270\")" },
      { label: "Joining Method", value: "Fully Hand-Soldered Lock Seams (Sweated 1.5\" Overlap)" },
      { label: "Solder Composition", value: "50% Tin / 50% Lead (ASTM B32 Standard)" },
      { label: "Fastening", value: "Solid Copper Cleats (Zero Direct Face Penetrations)" }
    ],
    applications: ["Bay Windows", "Cupolas & Dormers", "Low-Slope Entry Porticos", "Chimney Saddle Crickets", "Historical Estate Restorations"],
    houstonConsiderations: "Houston's high atmospheric humidity accelerates the natural patina progression, creating the classic European estate aesthetic within several seasons while safeguarding the metal core for generations.",
    faqList: [
      {
        question: "How long does copper take to develop its green patina in Houston?",
        answer: "In Houston's humid, subtropical climate with frequent rainfall and Gulf Coast moisture, natural copper transitions to dark bronze within 1 to 3 years and develops the soft verdigris green patina within 10 to 18 years."
      },
      {
        question: "Why must copper seams be soldered instead of sealed with polyurethane sealant?",
        answer: "Polyurethane and silicone caulking breakdown under UV radiation within 5 to 7 years. Solder forms a permanent metallurgical fusion between the copper sheets, creating a solid single piece of metal that lasts for over a century."
      }
    ]
  },
  {
    id: "sheet-metal-fabrication",
    slug: "service-sheet-metal",
    title: "Custom Sheet Metal Fabrication",
    subtitle: "Engineered in Our Houston Shop. Millimeter Precision.",
    category: "Architectural Metal Fabrication",
    shortDescription: "In-house custom shop fabrication at 2307 Knight St. Heavy brake bending, decorative louvers, finials, coping caps, gravel guards, and custom architectural flashing.",
    fullDescription: "Most roofing contractors buy mass-manufactured, paper-thin flashing off the shelf at supply warehouses. Jay-Co operates our own dedicated architectural sheet metal facility at 2307 Knight St in Houston, equipped with heavy industrial bending brakes, shear cutters, and specialized rolling equipment. We custom-fabricate every single trim, valley, wall coping, chimney shroud, gravel stop, and architectural accent to the exact physical dimensions of each roof. Whether matching historical profile blueprints for River Oaks restorations or custom-folding 10-foot parapet coping for contemporary Memorial residences, our shop delivers uncompromised fit, finish, and structural rigidity.",
    heroImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    materialsUsed: ["Kynar 500 Prefinished Steel", "Cold-Rolled Natural Copper", "304 / 316 Stainless Steel", "Paintgrip Galvanized Steel", "Heavy-Gauge Aluminum"],
    keyBenefits: [
      "Custom shop fabrication eliminates field-spliced shortcuts and ill-fitting transitions",
      "Heavy 24-gauge and 22-gauge materials preventing wind deflection and warping",
      "Direct trade fabricator pricing with no middleman markup",
      "Rapid turnaround for custom architectural profiles and urgent replacement flashings"
    ],
    technicalSpecs: [
      { label: "Shop Equipment", value: "Industrial Hydraulic Brakes, Precision Shears & Roll Formers" },
      { label: "Available Gauges", value: "26, 24, 22, 20 Gauge Steel & 16-24 oz Copper" },
      { label: "Bending Capacity", value: "Up to 10-Foot Continuous Seamless Lengths" },
      { label: "Custom Details", value: "Hemmed Drip Edges, Stiffening Beads, Welded Corners" }
    ],
    applications: ["Parapet Wall Coping", "Gravel Guards", "Decorative Louvers", "Custom Finials", "Chimney Shrouds", "Water Diverters"],
    houstonConsiderations: "Houston's intense hurricane downpours force water upward and backward behind standard trims. Jay-Co incorporates deep reverse hem returns and continuous cleating on all coping and drip edges to stop wind-driven rain penetration.",
    faqList: [
      {
        question: "Can Jay-Co fabricate custom architectural metal from architect blueprints?",
        answer: "Yes. We regularly work with Houston architects, custom luxury home builders, and structural designers to translate complex CAD details and hand sketches into precision shop-fabricated metal components."
      },
      {
        question: "What is Paintgrip metal and when is it used?",
        answer: "Paintgrip is galvanized steel treated with a phosphate wash that allows exterior paint to bond tenaciously to the metal without peeling, making it ideal for custom painted flashings matching home trim colors."
      }
    ]
  },
  {
    id: "slate-tile-roofing",
    slug: "service-slate-tile",
    title: "Natural Slate & Architectural Tile Roofing",
    subtitle: "Old-World Grandeur. Non-Combustible Longevity.",
    category: "Roofing Systems",
    shortDescription: "Genuine S-1 Vermont slate, Spanish clay barrel tile, and flat interlocking concrete tile systems installed with solid copper fasteners and high-temperature waterproof membranes.",
    fullDescription: "A natural slate or clay tile roof is the crowning jewel of fine architecture. At Jay-Co, our slate and tile craftsmen understand the critical engineering calculations—structural rafter load limits, batten layout geometry, and low-corrosion fastening—that distinguish a lasting tile installation from an early failure. We install authentic S-1 grade unfading Vermont natural slate, hand-split for distinctive texture, as well as high-fired Spanish clay tiles and reinforced concrete pavers. Every valley, headwall, and penetration is flashed in heavy 16-oz cold-rolled copper, fastened exclusively with solid copper or stainless steel ring-shank nails to ensure the flashing outlasts the stone itself.",
    heroImage: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
    materialsUsed: ["S-1 Grade Vermont Natural Slate", "Spanish 'S' & Mission Clay Tiles", "Flat Interlocking Concrete Tiles", "Solid Copper Nails", "Custom Copper Valleys"],
    keyBenefits: [
      "Historic service lifespan of 75 to 100+ years for natural stone slate",
      "Class A non-combustible fire rating offering the highest residential fire protection",
      "Outstanding thermal mass insulating living areas from Texas summer heat",
      "Unmatched architectural authenticity for French Chateau, Mediterranean, and Tudor homes"
    ],
    technicalSpecs: [
      { label: "Slate Grade", value: "ASTM C406 S-1 Grade (Unfading Green, Black, Purple)" },
      { label: "Headlap Standard", value: "3\" Minimum Headlap on Steep Slope (4:12+)" },
      { label: "Fasteners", value: "Solid Copper Slating Nails (Zero Galvanized Nails)" },
      { label: "Valley Linings", value: "16-oz Cold-Rolled Copper (Open Valley Design)" }
    ],
    applications: ["European Luxury Estates", "Historic Memorial Enclaves", "Mediterranean Mansions", "Chateau Architectural Properties"],
    houstonConsiderations: "Houston's heavy rainfall requires oversized open copper valleys and dual-layer self-adhering modified bitumen underlayments beneath all tile systems to manage torrential runoff volumes safely.",
    faqList: [
      {
        question: "Can any Houston home support a natural slate roof?",
        answer: "Slate weighs between 800 and 1,500 lbs per square (100 sq ft). An engineering rafter evaluation is necessary to verify structural load capacity. For homes requiring lighter loads, we also install high-grade synthetic slate."
      },
      {
        question: "How do you repair a single broken tile or slate without disturbing the roof?",
        answer: "Jay-Co uses specialized slate rippers to hook and cut the hidden nails of damaged slates, sliding in a replacement stone anchored with a concealed copper slate hook or copper tab."
      }
    ]
  },
  {
    id: "composition-shingle",
    slug: "service-composition-shingle",
    title: "Premium Composition Shingles & GAF Systems",
    subtitle: "GAF Certified™ Contractor (ID: 1132527). High-Definition Performance.",
    category: "Roofing Systems",
    shortDescription: "GAF Certified residential installations featuring Timberline HDZ® high-definition shingles, GAF System Plus enhanced warranty protection, and WindProven™ infinite wind speed warranties.",
    fullDescription: "For homeowners seeking the optimal balance of architectural curb appeal, hurricane wind durability, and cost efficiency, Jay-Co Sheet Metal & Roofing is an officially verified GAF Certified™ Residential Contractor (Contractor ID: 1132527). Rather than installing loose shingles with basic tar paper, we install the comprehensive GAF Lifetime Roofing System. This complete engineered envelope includes GAF WeatherWatch® leak barriers at all eaves and valleys, breathable Deck-Armor™ roof deck protection, StarterMatch™ starter strips, Timberline HDZ® shingles with LayerLock™ technology, and Cobra® ridge ventilation. Through our GAF Certified designation, our clients gain access to enhanced GAF System Plus factory warranty coverage.",
    heroImage: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
    materialsUsed: ["GAF Timberline HDZ® Shingles", "GAF WeatherWatch® Leak Barrier", "GAF Deck-Armor™ Synthetic Underlayment", "GAF Cobra® Attic Ridge Vents", "Jay-Co Custom Drip Edge"],
    keyBenefits: [
      "Installed by GAF Certified™ Contractor (Contractor ID: 1132527)",
      "LayerLock™ technology with Dura Grip™ adhesive for WindProven™ wind protection",
      "StainGuard Plus™ 25-year algae protection against Gulf Coast black streaks",
      "Eligibility for GAF System Plus extended factory-backed warranty coverage"
    ],
    technicalSpecs: [
      { label: "Certification ID", value: "GAF Contractor #1132527" },
      { label: "Wind Warranty", value: "Eligible for 150 MPH / Infinite Wind Speed (LayerLock)" },
      { label: "Fire Rating", value: "UL Class A (Highest Residential Rating)" },
      { label: "Nail Fastening", value: "6-Nail High-Wind Pattern with StrikeZone™ Alignment" }
    ],
    applications: ["Executive Memorial Residences", "Bunker Hill Village Re-Roofs", "Spring Branch Homes", "Suburban Family Estates"],
    houstonConsiderations: "Houston's intense solar UV quickly bakes standard shingle adhesives. Jay-Co uses a strict 6-nail high-wind mechanical fastening pattern combined with heat-activated sealant bands to prevent shingle uplift during tropical cyclones.",
    faqList: [
      {
        question: "What does GAF Certified™ status mean for my warranty?",
        answer: "As a GAF Certified™ contractor (ID: 1132527), Jay-Co is authorized to offer the GAF System Plus Limited Warranty, providing 50 years of non-prorated material defect coverage and factory inspection backing."
      },
      {
        question: "How do you protect against black algae stains on Houston roofs?",
        answer: "We specify GAF Timberline HDZ with StainGuard Plus™ technology, which incorporates time-release copper-containing micro-capsules that suppress gloeocapsa magma algae growth."
      }
    ]
  },
  {
    id: "roof-replacement",
    slug: "service-roof-replacement",
    title: "Roof Replacement & Residential Re-Roofing",
    subtitle: "Complete Deck-Up Renewal. Documented Municipal Permitting.",
    category: "Roofing Systems",
    shortDescription: "Full tear-off, structural decking inspection, code-compliant ventilation, and precision re-roofing backed by verifiable municipal permit standards (like Bunker Hill Village Permit #20220639).",
    fullDescription: "A full roof replacement is a critical structural investment that protects your home's foundation, interior framing, and family heirlooms. Jay-Co approaches every re-roofing project with uncompromising methodology: we never overlay new materials across old compromised shingles. We strip the roof down to the bare wooden deck, inspect every square foot of plywood or tongue-and-groove decking for rot or moisture softening, re-nail decking to meet current high-wind hurricane fastening codes, install heavy ice & water leak barriers at valleys and penetrations, and integrate custom shop-formed Knight St flashings before installing the new roof system. Every re-roof is properly permitted through local municipal authorities.",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    materialsUsed: ["High-Wind Fastening Patterns", "Self-Adhering Leak Barriers", "Custom Brake Drip Edge & Valley Metal", "Ridge & Soffit Balanced Ventilation"],
    keyBenefits: [
      "Documented municipal building permit compliance (e.g. Bunker Hill Permit #20220639)",
      "Zero overlay compromise—clean deck inspection guarantees underlying structural integrity",
      "Balanced attic intake and exhaust ventilation extending overall roof longevity",
      "Meticulous magnetic yard sweep protecting landscaping, family, and pets"
    ],
    technicalSpecs: [
      { label: "Tear-Off Process", value: "Complete 100% Removal to Bare Wood Decking" },
      { label: "Deck Inspection", value: "Replacement of Delaminated CDX Plywood / Spaced Sheathing" },
      { label: "Permit Compliance", value: "Harris County & Municipal Village Building Codes" },
      { label: "Clean-up Standard", value: "Multi-Pass Magnetic Nail Sweep & Debris Haul-Off" }
    ],
    applications: ["Aging Houston Roofs (15-25 Years)", "Storm Damaged Residences", "Pre-Sale Architectural Upgrades", "Estate Modernization"],
    houstonConsiderations: "Houston's high humidity requires proper attic ventilation balancing. Without adequate intake soffit vents and ridge exhausts, superheated attic air bakes shingles from the underside, leading to premature aging.",
    faqList: [
      {
        question: "How long does a full residential re-roof take to complete?",
        answer: "Most residential re-roofs are completed in 2 to 4 working days, depending on square footage, pitch complexity, and weather conditions. Jay-Co ensures the roof is fully watertight at the close of every working day."
      },
      {
        question: "Do you handle city building permits and inspections?",
        answer: "Yes. We manage all municipal permit filings, engineering documentation, and local building inspector sign-offs—just as recorded in our Bunker Hill Village Permit #20220639."
      }
    ]
  },
  {
    id: "gutters-downspouts",
    slug: "service-gutters-downspouts",
    title: "Architectural Gutters, Downspouts & Scuppers",
    subtitle: "Heavy-Flow Water Management. Custom Seamless Fabrication.",
    category: "Architectural Metal Fabrication",
    shortDescription: "Half-round seamless copper gutters, heavy 6-inch K-style troughs, custom collector conductor heads, and architectural wall scuppers engineered for Houston deluge rainfall.",
    fullDescription: "Houston is subject to intense tropical rainfall rates exceeding 3 to 4 inches per hour. Inadequate or undersized gutters result in foundation shifting, fascia board rot, and perimeter basement flooding. Jay-Co designs and fabricates heavy-gauge architectural gutter systems tailored to Houston's hydraulic demands. We specialize in 6-inch and 7-inch seamless half-round copper gutters supported by heavy cast brass brackets, box gutters for commercial and contemporary residences, and custom decorative collector heads (conductor boxes) that gracefully manage massive roof runoff while adding architectural prominence.",
    heroImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    materialsUsed: ["16-oz & 20-oz Cold-Rolled Copper", "Heavy-Gauge 0.032 Aluminum", "24-Gauge Prefinished Steel", "Cast Brass Brackets & Fascia Hooks"],
    keyBenefits: [
      "Custom continuous seamless runs eliminating mid-gutter joint leak points",
      "Oversized 4\" round or 3x4\" corrugated downspouts preventing debris clogs",
      "Heavy cast brackets spaced every 24\" to support maximum water and storm loads",
      "Integrated architectural collector heads regulating hydraulic velocity"
    ],
    technicalSpecs: [
      { label: "Gutter Profiles", value: "6\" Half-Round, 6\" & 7\" K-Style, Custom Architectural Box" },
      { label: "Bracket Spacing", value: "24\" On-Center Solid Deck Screwing" },
      { label: "Downspout Diameters", value: "4\" Round Smooth or Corrugated / 3\"x4\" Rectangular" },
      { label: "Joint Sealing", value: "Hand-Soldered Joints on Copper / 50-Year TriPolymer on Aluminum" }
    ],
    applications: ["Luxury Estate Drainage", "Foundation Protection", "Rainwater Harvesting Inlets", "Historic European Revivals"],
    houstonConsiderations: "Houston's expansive gumbo clay soils shrink and swell rapidly with moisture changes. Proper gutter downspout extensions directing water at least 5 to 10 feet away from foundation walls are essential to prevent structural slab cracking.",
    faqList: [
      {
        question: "Why choose 6-inch half-round gutters over standard 5-inch gutters?",
        answer: "A 6-inch gutter carries approximately 40% more water volume than a standard 5-inch gutter, preventing overflow during the torrential downpours typical of Houston hurricane seasons."
      },
      {
        question: "Do copper gutters require cleaning and maintenance?",
        answer: "Yes, regular debris clearing of leaves and pine needles is necessary, but the copper metal itself will never rust, rot, or require painting for over 80+ years."
      }
    ]
  },
  {
    id: "custom-flashing",
    slug: "service-custom-flashing",
    title: "Chimney Caps, Coping & Custom Flashing",
    subtitle: "Precision Transition Metalcraft. Zero Caulked Shortcuts.",
    category: "Architectural Metal Fabrication",
    shortDescription: "Custom shop-brake chimney shrouds, soldered step flashing, parapet wall coping, and cricket water diverters that permanently resolve chronic leak areas.",
    fullDescription: "Over 85% of residential roof leaks do not occur in the open shingle field—they occur at transitions: chimney shoulders, headwalls, parapet caps, dormer sidewalls, and valley intersections where different building planes meet. Most roofers smear temporary caulk over failed flashings, which cracks within two hot Texas summers. At Jay-Co, we fabricate permanent metal flashing assemblies in our Knight St shop. We create two-piece step-and-counter flashings ground into brick mortar joints, custom welded or soldered copper chimney crickets that divert water around masonry, and architectural chimney shrouds with built-in spark arrestors.",
    heroImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    materialsUsed: ["16-oz Cold-Rolled Copper", "24-Gauge Kynar 500 Galvalume", "Lead Counter-Flashing", "Stainless Steel Chimney Spark Mesh"],
    keyBenefits: [
      "Permanent metal-on-metal water diversion eliminating reliance on temporary caulk",
      "Two-piece counter-flashing allows building movement without buckling",
      "Custom decorative chimney caps protect flue tile from rain saturation and wildlife entry",
      "Engineered crickets prevent standing water pooling behind wide chimneys"
    ],
    technicalSpecs: [
      { label: "Mortar Joint Depth", value: "Reglet Ground 1.5\" Deep with Lead Wedges" },
      { label: "Chimney Cricket Slope", value: "Engineered 4:12 Minimum Diverter Pitch" },
      { label: "Cap Spark Arrestor", value: "100% Stainless Steel or Brass Screen Mesh" },
      { label: "Parapet Coping", value: "Continuous Cleated Edge with Sloped Drainage Wash" }
    ],
    applications: ["Masonry Chimney Waterproofing", "Stucco-to-Roof Transitions", "Parapet Walls", "Dormer Sidewalls"],
    houstonConsiderations: "Houston's brick chimneys expand and absorb moisture during heavy storms. Without custom soldered counter-flashings and full-coverage metal chimney caps, water permeates the brick core and damages interior ceilings.",
    faqList: [
      {
        question: "Why is a chimney cricket required by building code?",
        answer: "Any chimney wider than 30 inches acts as a dam against roof water. A cricket is an engineered ridge built behind the chimney that splits and diverts the water flow safely around both sides."
      },
      {
        question: "Can Jay-Co build decorative European-style chimney shrouds?",
        answer: "Yes, our coppersmiths build custom arched, pyramid, and classical radius chimney shrouds meeting all local fire and mechanical safety codes."
      }
    ]
  },
  {
    id: "roof-repairs",
    slug: "service-roof-repairs",
    title: "Roof Repairs & Diagnostic Maintenance",
    subtitle: "Precision Leak Remediation. Hurricane Season Hardening.",
    category: "Specialty & Restoration",
    shortDescription: "Thermal leak diagnostics, wind blow-off repairs, storm damage mitigation, and precision flashing restoration performed by seasoned craftsmen.",
    fullDescription: "Not every roof issue requires a complete tear-off and replacement. When an isolated leak develops around a plumbing vent, skylight, or damaged valley, Jay-Co provides expert diagnostic leak detection and permanent surgical repairs. Our technicians have spent decades working with metal, copper, tile, and composition shingles. We trace the true origin of water entry—which is often 10 to 15 feet away from where water drips inside the ceiling—and rebuild the compromised flashing, underlayment, and roof substrate correctly. We also provide storm hardening inspections to prepare Houston properties for hurricane season.",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    materialsUsed: ["Matching Gauge Sheet Metal", "GAF High-Grade Shingle Bundles", "Lead Pipe Boots", "High-Performance Sealant Alloys"],
    keyBenefits: [
      "Diagnostic leak detection identifying the true hidden origin of water intrusion",
      "Surgical repair preserves serviceable roof areas, saving thousands of dollars",
      "Replacement of deteriorated neoprene plumbing pipe jacks with permanent lead or copper boots",
      "Emergency tarping and storm damage stabilization"
    ],
    technicalSpecs: [
      { label: "Inspection Scope", value: "Complete Attic Diagnostic, Deck Inspection & Exterior Walk" },
      { label: "Plumbing Flashings", value: "Heavy Lead or Copper Boots (No Degraded Rubber Collars)" },
      { label: "Storm Hardening", value: "Fastener Reinforcement, Ridge Tightening & Flashing Resealing" },
      { label: "Documentation", value: "Photographic Before-and-After Leak Diagnostics" }
    ],
    applications: ["Active Ceiling Water Stains", "Post-Hail & Wind Inspections", "Plumbing Jack Leaks", "Skylight Perimeter Remediation"],
    houstonConsiderations: "Houston's intense summer sun degrades standard neoprene rubber plumbing pipe boots within 5 to 7 years, causing hidden ceiling leaks. Jay-Co replaces failed rubber boots with heavy lead or soldered copper boots that last the lifetime of the home.",
    faqList: [
      {
        question: "How quickly can Jay-Co inspect an active roof leak in Houston?",
        answer: "We prioritize emergency diagnostic inspections across Houston and the Memorial Villages. We inspect the leak, secure immediate temporary protection if required, and provide a clear repair scope."
      },
      {
        question: "How do I know if my roof needs a repair versus a full replacement?",
        answer: "If the shingles are flexible, retain granules, and the leak is localized to an isolated flashing or pipe boot, a precision repair is often ideal. If the shingle mat is brittle, curled, or nearing 20+ years of age, replacement is the more prudent long-term investment."
      }
    ]
  },
  {
    id: "waterproofing",
    slug: "service-waterproofing",
    title: "Low-Slope Roofing & Balcony Waterproofing",
    subtitle: "SBS Modified Bitumen. Seamless Terrace Envelopes.",
    category: "Specialty & Restoration",
    shortDescription: "Multi-ply SBS modified bitumen, cold-applied elastomeric membranes, and specialized balcony deck waterproofing for luxury residential terraces.",
    fullDescription: "Modern architecture frequently incorporates flat roof sections, covered outdoor kitchens, and second-story walk-out balconies over living spaces. These low-slope areas require completely different physics and materials than pitched roofs. Water does not shed quickly; it moves slowly and can pool during heavy storms. Jay-Co installs heavy-duty SBS modified bitumen multi-ply systems and pedestrian traffic waterproofing membranes engineered for extreme durability. Our balcony deck waterproofing creates a seamless, reinforced monolithic barrier under stone pavers or wood decking, protecting the living spaces below.",
    heroImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    materialsUsed: ["SBS Modified Bitumen Membranes", "Cold-Applied Adhesive Formulations", "Reinforced Polyester Scrim", "Custom Shop Edge Cleats"],
    keyBenefits: [
      "Monolithic multi-ply waterproofing impervious to ponding water",
      "Flexible elastomeric properties absorbing structural substrate movement",
      "Engineered drainage taper systems preventing standing puddle accumulation",
      "Pedestrian-rated solutions for luxury outdoor rooftop terraces and balconies"
    ],
    technicalSpecs: [
      { label: "System Type", value: "Multi-Ply SBS (Base Sheet + Heavy Mineral Granule Cap)" },
      { label: "Application Method", value: "Cold-Applied Self-Adhering or Low-Odor Cold Process" },
      { label: "Slope Minimum", value: "1/4\" per Foot (Tapered Polyiso Insulation Available)" },
      { label: "Perimeter Termination", value: "Custom Shop-Fabricated Knight St Metal Gravel Guards" }
    ],
    applications: ["Second-Story Walk-Out Balconies", "Rooftop Entertaining Decks", "Low-Slope Rear Home Additions", "Commercial Flat Porticos"],
    houstonConsiderations: "Houston's intense summer sun causes thermal expansion on flat surfaces. Jay-Co uses SBS elastomeric modified bitumen rather than brittle oxidized asphalt, allowing the membrane to flex without tearing.",
    faqList: [
      {
        question: "Can I install tile or decking over a Jay-Co waterproofed balcony?",
        answer: "Yes. We install heavy-duty pedestals or separation drainage mats over our waterproof membranes, allowing luxury porcelain pavers, ipe hardwood decking, or artificial turf to be installed without puncturing the membrane."
      },
      {
        question: "Why do low-slope roofs leak more often than steep roofs?",
        answer: "Gravity does not rapidly shed water from flat roofs. Any seam flaw or improper flashing allows standing water to seep inward. Jay-Co uses double-sealed seams and custom-welded edge metals to eliminate leak risks."
      }
    ]
  }
];

export const SERVICE_AREAS: ServiceArea[] = [
  {
    name: "Bunker Hill Village",
    region: "Memorial Villages",
    zipCodes: ["77024"],
    distanceFromShop: "14.2 miles (West Houston)",
    description: "The prestigious enclave of Bunker Hill Village is the location of our documented municipal re-roof project (Permit #20220639, 11838 Brandywine Ln, recorded completion April 27, 2023, valuation $23,752). Known for grand custom wooded estates requiring strict building code compliance.",
    verifiedProjectsCount: "Documented Municipal Permit Record on File",
    notableArchitecture: "Large-lot custom estates, French country manors, and sprawling modern residences requiring architectural metalwork."
  },
  {
    name: "Memorial & Memorial Forest",
    region: "West Houston / Memorial",
    zipCodes: ["77024", "77079"],
    distanceFromShop: "13.8 miles",
    description: "Heavily wooded luxury residential corridor where tree canopy exposure demands impact-resistant standing seam metal and premium GAF Timberline HDZ shingle roofing systems.",
    verifiedProjectsCount: "Active Core Service Corridor",
    notableArchitecture: "Mid-century architectural estates, transitional luxury residences, and heavily wooded custom homes."
  },
  {
    name: "River Oaks",
    region: "Central Houston Inner-Loop",
    zipCodes: ["77019", "77027"],
    distanceFromShop: "8.5 miles",
    description: "Houston's premier historic architectural neighborhood. Home to magnificent historic mansions featuring hand-soldered copper dormers, Vermont natural slate, and custom shop-brake chimney caps.",
    verifiedProjectsCount: "Heritage Architectural Metalwork Region",
    notableArchitecture: "Tudor Revival, English Manor, Spanish Colonial, and Neoclassical landmark residences."
  },
  {
    name: "West University Place",
    region: "Inner-Loop South",
    zipCodes: ["77005"],
    distanceFromShop: "9.6 miles",
    description: "Renowned for high-density luxury custom residences built by Houston's premier builders. High demand for custom half-round copper gutters, copper bay window caps, and standing seam accents.",
    verifiedProjectsCount: "Regular Fabrication & Gutter Installations",
    notableArchitecture: "Custom spec manors, Colonial revivals, and modern farmhouse estates."
  },
  {
    name: "The Heights & Garden Oaks",
    region: "Northwest Inner-Loop",
    zipCodes: ["77007", "77008", "77018"],
    distanceFromShop: "4.8 miles (Direct proximity to Knight St shop)",
    description: "Historic Victorian homes and modern industrial farmhouse builds located minutes from our Knight St metal shop. Quick dispatch for emergency repairs and custom standing seam accents.",
    verifiedProjectsCount: "Local Neighborhood Metalcraft",
    notableArchitecture: "Historic Victorian cottages, craftsman bungalows, and modern three-story metal-accented urban residences."
  },
  {
    name: "Spring Branch & Hilshire Village",
    region: "Northwest Houston",
    zipCodes: ["77055", "77080"],
    distanceFromShop: "10.1 miles",
    description: "Rapidly transforming custom estate community with extensive re-roofing, new construction standing seam roofs, and custom architectural sheet metal fabrication.",
    verifiedProjectsCount: "Frequent Re-Roofing & Metal Installations",
    notableArchitecture: "Texas Modern, Hill Country contemporary, and executive suburban residences."
  },
  {
    name: "Bellaire & Southside Place",
    region: "Inner-Loop Southwest",
    zipCodes: ["77001", "77401"],
    distanceFromShop: "11.4 miles",
    description: "City of Homes featuring extensive luxury new builds and storm re-roofing requiring strict municipal compliance, Class 4 impact resistance, and continuous gutter management.",
    verifiedProjectsCount: "Active Residential Corridor",
    notableArchitecture: "Contemporary Mediterranean, Prairie style, and luxury transitional custom estates."
  },
  {
    name: "Tanglewood & Post Oak",
    region: "Uptown / Galleria",
    zipCodes: ["77056", "77057"],
    distanceFromShop: "10.9 miles",
    description: "Prominent Houston enclave defined by oak-lined boulevards and expansive architectural residences featuring custom copper chimney shrouds, clay tile, and low-slope balcony decks.",
    verifiedProjectsCount: "Custom Metal & Tile Detailing",
    notableArchitecture: "Mediterranean villas, Georgian mansions, and contemporary luxury compounds."
  }
];

export const FAQS = [
  {
    question: "How do I verify Jay-Co's official GAF certification?",
    category: "Credentials & Trust",
    answer: "You can verify our official manufacturer credentials directly through the GAF contractor registry under Contractor ID #1132527. As a GAF Certified™ residential contractor, our installations comply with strict manufacturer workmanship standards and qualify for enhanced GAF factory-backed warranties such as the System Plus Limited Warranty."
  },
  {
    question: "What is Jay-Co's documented project history in Bunker Hill Village?",
    category: "Projects & Verification",
    answer: "Jay-Co Enterprises, LLC completed a fully documented municipal residential re-roof at 11838 Brandywine Ln, Bunker Hill Village, TX 77024 under Permit #20220639 (valuation $23,752, recorded completion April 27, 2023). This 6,122 sq. ft. luxury residence stands as verifiable public proof of our high-end residential roofing execution in the Memorial Villages."
  },
  {
    question: "Why is custom in-house sheet metal fabrication superior to store-bought flashing?",
    category: "Craftsmanship & Materials",
    answer: "Store-bought flashings are mass-stamped in thin 28-30 gauge metal with generic dimensions, forcing contractors to splice, overlap, and caulk gaps. At Jay-Co's 2307 Knight St shop, we custom-shear and brake-fold 24-gauge Galvalume steel, 16-oz copper, and heavy aluminum to the exact millimeter dimensions of your roof's valleys, dormers, and parapet walls—ensuring seamless, watertight fit and generational longevity."
  },
  {
    question: "Do you offer standing seam metal roofing for residential homes in Houston?",
    category: "Roofing Systems",
    answer: "Yes, standing seam metal roofing is one of our flagship specialties. We install 24-gauge Galvalume and aluminum concealed-fastener standing seam systems with Kynar 500® coatings that resist 140+ MPH hurricane winds, achieve Class 4 impact resistance, and lower attic temperatures by reflecting solar heat."
  },
  {
    question: "How does the Interactive Roof Estimator work?",
    category: "Estimates & Pricing",
    answer: "Our online roof estimator calculates an illustrative planning budget range based on your approximate square footage, roof pitch complexity, and preferred material (such as GAF Timberline shingles, Standing Seam Metal, Slate, or Copper). Because every architectural structure has unique substrate, decking, and flashing requirements, final binding quotes are provided following an in-person diagnostic roof survey by Jay-Co."
  },
  {
    question: "Are financing calculations on this site binding offers of credit?",
    category: "Estimates & Pricing",
    answer: "No. Our monthly payment calculator is an illustrative budgeting tool designed to help homeowners explore potential monthly amortization scenarios across various term lengths and interest rates. Jay-Co works directly with homeowners and their chosen financial institutions; we do not originate loans or guarantee credit approval."
  },
  {
    question: "What service areas in Greater Houston does Jay-Co cover?",
    category: "Service Areas",
    answer: "From our central metal fabrication shop at 2307 Knight St, Houston, TX 77093, we primarily serve Houston's premier architectural and residential communities including Bunker Hill Village, Memorial, River Oaks, West University Place, The Heights, Spring Branch, Bellaire, Piney Point Village, and Tanglewood across Greater Harris County."
  },
  {
    question: "How can I contact Jay-Co to request an on-site architectural consultation?",
    category: "Contact & Process",
    answer: "You can call our Houston office directly at (713) 738-4525, email us at jaycosm@sbcglobal.com, or complete our 5-Step Online Quote Request Form on this website. Our team will review your project parameters and schedule an on-site consultation."
  }
];
