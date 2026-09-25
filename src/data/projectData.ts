import {
  ProjectConfig,
  PlotOption,
  MasterplanHotspot,
  Amenity,
  LocationItem,
  GalleryImage,
  HomePlanConcept,
  DeveloperStat,
  Testimonial,
  FAQItem
} from '../types';

export const projectConfig: ProjectConfig = {
  companyName: "VIP Housing",
  projectName: "VIP Growth Town",
  logoUrl: "https://res.cloudinary.com/ed36wlmb/image/upload/v1790348953/gwth.png",
  tagline: "Own Your Land. Build Your Future.",
  subTagline: "Premium Villa Plots at VIP Growth Town",
  location: "Chengalpattu – Padalam",
  state: "Tamil Nadu",
  phone: "7305401438",
  phoneDisplay: "73054 01438",
  whatsappNumber: "+917305401438",
  whatsappMessage: "Hi, I'm interested in VIP Growth Town at Chengalpattu – Padalam. Please share the project details and plot availability.",
  startingPrice: "₹12 Lakhs",
  startingPriceNumeric: 1200000,
  plotSizeRange: "600–2400 sq.ft",
  approvals: ["DTCP Approved", "RERA Approved"],
  communityType: "Gated Community",
  registrationStatus: "Ready for Registration",
  pricingDisclaimer: "*Starting price is indicative and subject to plot availability and applicable terms.",
  generalDisclaimer: "Images, layouts and representations are for illustrative purposes. Pricing, availability, specifications and project details are subject to change. Please verify all project information and approvals with VIP Housing before making any purchase decision."
};

export const plotOptions: PlotOption[] = [
  {
    id: "plot-600",
    name: "Smart Start",
    sizeSqFt: 600,
    dimensions: "20 ft × 30 ft",
    priceDisplay: "Starting from ₹12 Lakhs*",
    priceTag: "₹12 Lakhs*",
    suitableFor: "Compact residential planning",
    idealFor: "Ideal for first-time buyers & starter home villas",
    features: [
      "Compact 2BHK Villa Layout fit",
      "Ready for immediate registration",
      "Clear title & DTCP approval",
      "Street frontage with utility access"
    ]
  },
  {
    id: "plot-1200",
    name: "Family Plot",
    sizeSqFt: 1200,
    dimensions: "30 ft × 40 ft",
    priceDisplay: "Price on Enquiry",
    priceTag: "Price on Enquiry",
    suitableFor: "Spacious family home planning",
    idealFor: "Perfect for independent 3BHK duplex homes with garden",
    features: [
      "Spacious 3BHK Duplex design readiness",
      "Dedicated car park and garden space",
      "Gated community security & infrastructure",
      "Wide internal blacktop road access"
    ],
    popular: true
  },
  {
    id: "plot-1800",
    name: "Premium Plot",
    sizeSqFt: 1800,
    dimensions: "30 ft × 60 ft",
    priceDisplay: "Price on Enquiry",
    priceTag: "Price on Enquiry",
    suitableFor: "Large home and lifestyle planning",
    idealFor: "Custom luxury villas with open sit-outs & green terrace",
    features: [
      "Generous frontage for grand elevation",
      "Ample setback for private landscaping",
      "DTCP & RERA certified layout",
      "High architectural freedom"
    ]
  },
  {
    id: "plot-2400",
    name: "Elite Plot",
    sizeSqFt: 2400,
    dimensions: "40 ft × 60 ft",
    priceDisplay: "Price on Enquiry",
    priceTag: "Price on Enquiry",
    suitableFor: "Large premium residence planning",
    idealFor: "Expansive estate villa with private driveway & deck",
    features: [
      "Premium corner & avenue location options",
      "Maximum plot frontage & aesthetic presence",
      "Highest space flexibility for custom architecture",
      "Ready for immediate registration"
    ]
  }
];

export const masterplanHotspots: MasterplanHotspot[] = [
  {
    id: "spot-1",
    title: "Grand Entrance Arch",
    category: "entrance",
    x: 14,
    y: 82,
    description: "Architectural security gateway with 24/7 boom barriers and perimeter surveillance."
  },
  {
    id: "spot-2",
    title: "Internal Wide Roads",
    category: "roads",
    x: 48,
    y: 52,
    description: "Well-paved, wide blacktop roads engineered with storm water drains and avenue tree lines."
  },
  {
    id: "spot-3",
    title: "Residential Villa Plots",
    category: "plots",
    x: 62,
    y: 35,
    description: "Demarcated rectangular plots (600 - 2400 sq.ft) with clear boundary corner stones and electricity points."
  },
  {
    id: "spot-4",
    title: "Green Spaces & Parks",
    category: "green",
    x: 78,
    y: 22,
    description: "Dedicated landscaped open recreational greens designed for family leisure and fresh air."
  },
  {
    id: "spot-5",
    title: "Community Area",
    category: "community",
    x: 32,
    y: 28,
    description: "Reserved community spaces for neighborhood gatherings, walking promenades, and sit-outs."
  },
  {
    id: "spot-6",
    title: "Street Lighting System",
    category: "lighting",
    x: 38,
    y: 65,
    description: "Evenly spaced energy-efficient street lamps illuminating all avenues and internal lanes."
  }
];

export const amenitiesList: Amenity[] = [
  {
    id: "amenity-1",
    title: "Black Top Road",
    description: "Blacktop internal roads throughout the layout.",
    iconName: "Route",
    category: "Infrastructure"
  },
  {
    id: "amenity-2",
    title: "Round the Clock Security",
    description: "24/7 security for the full gated community.",
    iconName: "ShieldCheck",
    category: "Security"
  },
  {
    id: "amenity-3",
    title: "Avenue Trees",
    description: "Tree-lined avenues across the layout.",
    iconName: "Trees",
    category: "Environment"
  },
  {
    id: "amenity-4",
    title: "Gated Community",
    description: "A secure, fully gated villa plot community.",
    iconName: "Lock",
    category: "Security"
  },
  {
    id: "amenity-5",
    title: "Compound Wall",
    description: "Boundary compound wall around the entire community.",
    iconName: "ShieldCheck",
    category: "Security"
  },
  {
    id: "amenity-6",
    title: "Beautiful Park",
    description: "Landscaped park within the layout.",
    iconName: "Sparkles",
    category: "Environment"
  },
  {
    id: "amenity-7",
    title: "Solar Street Lights",
    description: "Solar-powered street lighting throughout.",
    iconName: "Lightbulb",
    category: "Infrastructure"
  },
  {
    id: "amenity-8",
    title: "Grand Arch",
    description: "A grand entrance arch marking the community.",
    iconName: "Building2",
    category: "Infrastructure"
  },
  {
    id: "amenity-9",
    title: "Quality Ground Water",
    description: "Dedicated groundwater facility for the community.",
    iconName: "Droplets",
    category: "Utilities"
  }
];

export const locationAdvantages: LocationItem[] = [
  {
    id: "loc-padalam-bus",
    title: "Padalam Junction Bus Stand",
    tag: "1 min",
    description: "Direct access to bus transit on GST Road (NH-45) linking Chengalpattu and Melmaruvathur.",
    details: "1 min from project layout entrance",
    iconName: "Navigation"
  },
  {
    id: "loc-padalam-rail",
    title: "Padalam Railway Station",
    tag: "3 min",
    description: "Southern Railway regional train network connecting Chennai and southern Tamil Nadu.",
    details: "3 min drive from the layout",
    iconName: "Train"
  },
  {
    id: "loc-melavalam",
    title: "Melavalam Pettai Bus Stand",
    tag: "7 min",
    description: "Convenient local transit point for daily commuting.",
    details: "7 min drive",
    iconName: "Navigation"
  },
  {
    id: "loc-cpt-bus",
    title: "Chengalpattu New Bus Stand",
    tag: "10 min",
    description: "Major interstate and regional bus terminus connecting across Tamil Nadu.",
    details: "10 min drive via GST Road",
    iconName: "Compass"
  },
  {
    id: "loc-ramar-temple",
    title: "Sri Eri Katha Ramar Temple",
    tag: "13 min",
    description: "Historic cultural landmark at Maduranthagam.",
    details: "13 min drive",
    iconName: "Building2"
  },
  {
    id: "loc-cpt-rail",
    title: "Chengalpattu Railway Station",
    tag: "15 min",
    description: "Major junction with express train and suburban EMU connectivity to Chennai Beach/Tambaram.",
    details: "15 min drive",
    iconName: "Train"
  },
  {
    id: "loc-vedanthangal",
    title: "Vedanthangal Bird Sanctuary",
    tag: "19 min",
    description: "World-renowned natural ecological tourist hotspot.",
    details: "19 min drive",
    iconName: "Trees"
  }
];

export const galleryImages: GalleryImage[] = [
  {
    id: "gal-site-1",
    title: "Site View & Development",
    category: "plots",
    url: "https://res.cloudinary.com/ed36wlmb/image/upload/v1790346106/WhatsApp_Image_2026-09-21_at_11.34.49_AM_2.jpg",
    caption: "Actual on-site development view of VIP Growth Town at Padalam Junction with clear boundary demarcations."
  },
  {
    id: "gal-site-2",
    title: "Avenue Roads & Layout",
    category: "roads",
    url: "https://res.cloudinary.com/ed36wlmb/image/upload/v1790346098/WhatsApp_Image_2026-09-21_at_11.34.49_AM_1.jpg",
    caption: "Wide internal blacktop road alignment and ready-to-construct demarcated villa plots."
  },
  {
    id: "gal-site-3",
    title: "Gated Township Infrastructure",
    category: "project",
    url: "https://res.cloudinary.com/ed36wlmb/image/upload/v1790346378/WhatsApp_Image_2026-09-21_at_11.34.47_AM.jpg",
    caption: "Comprehensive 6.32-acre master township layout and road network at Padalam Junction."
  },
  {
    id: "gal-site-4",
    title: "Site Boundary & Green Surroundings",
    category: "surroundings",
    url: "https://res.cloudinary.com/ed36wlmb/image/upload/v1790346110/WhatsApp_Image_2026-09-21_at_11.34.49_AM.jpg",
    caption: "Lush green surroundings and secure boundary compound wall across the layout."
  },
  {
    id: "gal-1",
    title: "Grand Entrance Arch & Security",
    category: "entrance",
    url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1600&auto=format&fit=crop",
    caption: "Growth Town entrance gateway with 24/7 security and access control, Padalam Junction."
  },
  {
    id: "gal-4",
    title: "Phase 2 Approved Layout Plan",
    category: "project",
    url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1600&auto=format&fit=crop",
    caption: "DTCP 246/2026 technical approval layout with 176 plots across 6.32 acres."
  }
];

export const homePlanConcepts: HomePlanConcept[] = [
  {
    id: "plan-1",
    title: "Compact 2BHK Villa Concept",
    type: "2BHK Single-Floor Villa",
    plotSize: "600–800 sq.ft",
    dimensions: "20 ft × 30 ft",
    builtUpArea: "Approx. 750 sq.ft Built-Up",
    bedrooms: "2 Bedrooms + Living + Kitchen + Sitout",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    description: "A smart, cost-effective architectural footprint making optimal use of a 600 sq.ft plot with zero space wastage.",
    highlights: ["Front two-wheeler parking", "Spacious open living area", "Ventilated kitchen & utility", "Private rooftop terrace"]
  },
  {
    id: "plan-2",
    title: "Classic 3BHK Duplex Villa Concept",
    type: "3BHK Contemporary Duplex",
    plotSize: "1200 sq.ft",
    dimensions: "30 ft × 40 ft",
    builtUpArea: "Approx. 1,600 sq.ft Built-Up",
    bedrooms: "3 Bedrooms + 3 Baths + Family Hall + Balcony",
    imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
    description: "Designed for nuclear and growing families desiring a grand duplex lifestyle with dedicated covered car parking and lush side lawn.",
    highlights: ["Covered car parking bay", "Double-height living space", "Master bedroom with private balcony", "Dedicated puja room & pantry"]
  },
  {
    id: "plan-3",
    title: "Luxury 4BHK Grand Villa Concept",
    type: "4BHK Luxury Villa with Garden",
    plotSize: "1800–2400 sq.ft",
    dimensions: "30 ft × 60 ft / 40 ft × 60 ft",
    builtUpArea: "Approx. 2,400+ sq.ft Built-Up",
    bedrooms: "4 Bedrooms + Home Office + Private Deck + Portico",
    imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
    description: "An expansive estate villa design allowing open courtyard layouts, multi-car parking, and landscaped garden terraces.",
    highlights: ["Dual vehicle covered portico", "Landscaped private backyard", "Work-from-home study zone", "Large leisure terrace & pergola"]
  }
];

export const developerStats: DeveloperStat[] = [
  {
    label: "Years of Experience",
    value: "20+",
    description: "Decades of proven excellence and market trust in Tamil Nadu real estate."
  },
  {
    label: "Delivered Projects",
    value: "100+",
    description: "Successfully approved and delivered residential layouts across key growth hubs."
  },
  {
    label: "Satisfied Customers",
    value: "50,000+",
    description: "Homeowners and land investors who built their dreams with clear legal titles."
  },
  {
    label: "Prime Locations",
    value: "15+",
    description: "Strategic developmental corridors across Chennai and suburban Tamil Nadu."
  }
];

export const testimonialsList: Testimonial[] = [
  {
    id: "test-1",
    name: "K. Senthil Nathan",
    location: "IT Professional, Tambaram",
    plotPurchased: "1200 sq.ft Plot Buyer",
    rating: 5,
    quote: "Purchasing a plot at VIP Growth Town was a completely hassle-free experience. The DTCP approvals and title deeds were 100% transparent, and the location near Chengalpattu gives great peace of mind.",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
    verified: true
  },
  {
    id: "test-2",
    name: "R. Meenakshi & Suresh Kumar",
    location: "Resident, Chengalpattu",
    plotPurchased: "1800 sq.ft Villa Plot Buyer",
    rating: 5,
    quote: "We were looking for a secure gated community with ready registration to construct our dream independent villa. VIP Growth Town offered the ideal plot dimensions and broad internal roads.",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop",
    verified: true
  },
  {
    id: "test-3",
    name: "Dr. Anand Parthasarathy",
    location: "Healthcare Consultant, Chennai",
    plotPurchased: "2400 sq.ft Plot Owner",
    rating: 5,
    quote: "VIP Housing has a solid reputation for delivering clear-title land. The road connectivity along the Padalam corridor is very convenient for future family settlement.",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
    verified: true
  }
];

export const faqList: FAQItem[] = [
  {
    question: "What is VIP Growth Town?",
    answer: "VIP Growth Town is a premium villa plot development located at Chengalpattu – Padalam, designed for families and individuals looking for a secure and well-connected place to build their future home."
  },
  {
    question: "What is the starting price?",
    answer: "Plots start from ₹12 Lakhs, subject to availability and applicable terms."
  },
  {
    question: "What are the available plot sizes?",
    answer: "Available plot sizes range from 600 to 2400 sq.ft (e.g., 600 sq.ft, 800 sq.ft, 1000 sq.ft, 1200 sq.ft, 1500 sq.ft, 1800 sq.ft, and 2400 sq.ft)."
  },
  {
    question: "Is the project approved?",
    answer: "Yes. The project is presented as DTCP & RERA approved development. Official approval documentation and copy of sanctions can be reviewed upon request."
  },
  {
    question: "Is the project ready for registration?",
    answer: "Yes, the supplied project information states that VIP Growth Town is ready for registration, allowing buyers to complete documentation seamlessly."
  },
  {
    question: "Is it a gated community?",
    answer: "Yes, the project is designed as a secure gated community featuring entrance security, wide internal blacktop roads, street lighting, and green spaces."
  },
  {
    question: "How can I enquire?",
    answer: "You can call 7305401438, message on WhatsApp (+91 7305401438), or submit the online enquiry form to connect with our official property advisor."
  },
  {
    question: "Can I get the exact location?",
    answer: "Yes. Visitors can request the exact project location and Google Maps route details through the enquiry form or by speaking with our property advisor."
  }
];
