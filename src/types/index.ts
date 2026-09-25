export interface ProjectConfig {
  companyName: string;
  projectName: string;
  logoUrl?: string;
  tagline: string;
  subTagline: string;
  location: string;
  state: string;
  phone: string;
  phoneDisplay: string;
  whatsappNumber: string;
  whatsappMessage: string;
  startingPrice: string;
  startingPriceNumeric: number;
  plotSizeRange: string;
  approvals: string[];
  communityType: string;
  registrationStatus: string;
  pricingDisclaimer: string;
  generalDisclaimer: string;
}

export interface PlotOption {
  id: string;
  name: string;
  sizeSqFt: number;
  dimensions: string;
  priceDisplay: string;
  priceTag: string;
  suitableFor: string;
  idealFor: string;
  features: string[];
  popular?: boolean;
}

export interface MasterplanHotspot {
  id: string;
  title: string;
  category: 'entrance' | 'roads' | 'plots' | 'green' | 'community' | 'lighting';
  x: number; // percentage
  y: number; // percentage
  description: string;
}

export interface Amenity {
  id: string;
  title: string;
  description: string;
  iconName: string;
  category: string;
}

export interface LocationItem {
  id: string;
  title: string;
  tag: string;
  description: string;
  details?: string;
  iconName: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  category: 'all' | 'project' | 'plots' | 'roads' | 'entrance' | 'surroundings' | 'location';
  url: string;
  caption: string;
}

export interface HomePlanConcept {
  id: string;
  title: string;
  type: string;
  plotSize: string;
  dimensions: string;
  builtUpArea: string;
  bedrooms: string;
  imageUrl: string;
  description: string;
  highlights: string[];
}

export interface DeveloperStat {
  label: string;
  value: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  plotPurchased: string;
  rating: number;
  quote: string;
  avatarUrl: string;
  verified: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface LeadSubmission {
  id: string;
  name: string;
  phone: string;
  email?: string;
  plotSize?: string;
  preferredTime?: string;
  message?: string;
  source: string;
  submittedAt: string;
}
