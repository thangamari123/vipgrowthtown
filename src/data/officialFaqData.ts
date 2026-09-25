export interface DetailedFAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Overview & Phase 2' | 'Approvals & Legal' | 'Pricing & Finance' | 'Location & Connectivity' | 'Infrastructure & Amenities' | 'Site Visit & Booking';
  highlightTag?: string;
  relatedLinks?: {
    label: string;
    actionType: 'enquiry' | 'call' | 'whatsapp' | 'email' | 'download';
    value?: string;
  }[];
}

export const officialFaqBanner = {
  phaseNotice: "Phase 1 (210 plots, 8.6 acres, DTCP 140/2025) is sold out. Phase 2 (176 plots, 6.32 acres, DTCP 246/2026) is now open for booking.",
  title: "Frequently Asked Questions",
  subtitle: "Everything buyers usually ask before booking a site visit to Growth Town.",
  contactNumber: "+91 73054 01438",
  phoneRaw: "7305401438",
  email: "namma.adithalam@gmail.com",
  officialWebsite: "growthtown.viphousing.in",
  reraNumber: "TNRERA/35/LO/3821/2025",
  phase1Approval: "DTCP Approval No. 140/2025 (210 plots, 8.6 acres - Sold Out)",
  phase2Approval: "DTCP Technical Approval No. 246/2026 (176 plots, 6.32 acres - Open for Booking)",
};

export const officialFaqList: DetailedFAQItem[] = [
  {
    id: "faq-1",
    question: "What is the contact number for Growth Town / VIP Growth Town Padalam?",
    answer: "The official contact number for Growth Town (also known as VIP Growth Town, Growth Town Padalam) is +91 73054 01438, and the official email is namma.adithalam@gmail.com. This is the only number authorized by VIP Housing and Properties for Growth Town enquiries and site visits. Some third-party listing websites display different, unauthorized phone numbers for this project — always verify against growthtown.viphousing.in before calling a number found elsewhere.",
    category: "Site Visit & Booking",
    highlightTag: "Official Contact",
    relatedLinks: [
      { label: "Call +91 73054 01438", actionType: "call", value: "7305401438" },
      { label: "Email Sales Desk", actionType: "email", value: "namma.adithalam@gmail.com" }
    ]
  },
  {
    id: "faq-2",
    question: "Is Growth Town sold out?",
    answer: "Phase 1 of Growth Town — 210 plots across 8.6 acres, DTCP Approval No. 140/2025 — is completely sold out. Phase 2 is now open for booking: 176 new plots across 6.32 acres, approved under DTCP Technical Approval No. 246/2026, covering Survey Nos. 125/1 to 126/8B at Pazhayanur Village.",
    category: "Overview & Phase 2",
    highlightTag: "Phase 2 Open",
    relatedLinks: [
      { label: "Enquire Phase 2 Plots", actionType: "enquiry" }
    ]
  },
  {
    id: "faq-3",
    question: "What is Growth Town Phase 2?",
    answer: "Growth Town Phase 2 is a newly DTCP-approved extension of the project, released for booking after Phase 1 sold out. It covers 176 plots across 6.32 acres under DTCP Technical Approval No. 246/2026, with two landscaped parks, 7.2m to 12m wide approved internal roads, and EWS/affordable-housing plots reserved as required by TNCD&BR 2019, 47(8). See the full layout plan and specifications.",
    category: "Overview & Phase 2",
    highlightTag: "DTCP 246/2026",
    relatedLinks: [
      { label: "Download Phase 2 Layout Plan", actionType: "download" }
    ]
  },
  {
    id: "faq-4",
    question: "Is Growth Town DTCP and RERA approved?",
    answer: "Yes. Growth Town Phase 1 holds DTCP Approval No. 140/2025 (sold out) and Phase 2 holds DTCP Technical Approval No. 246/2026 (now open). The project is registered under RERA as TNRERA/35/LO/3821/2025.",
    category: "Approvals & Legal",
    highlightTag: "RERA & DTCP Certified",
    relatedLinks: [
      { label: "Request Approval Copies", actionType: "enquiry" }
    ]
  },
  {
    id: "faq-5",
    question: "Is Growth Town also called VIP Growth Town or Growth Town Padalam?",
    answer: "Yes. This project is also searched online as VIP Growth Town, Growth Town Padalam, VIP Growth Town Padalam, and Growth Town Villa Plots Chengalpattu — all referring to this same DTCP & RERA approved gated community near Padalam Junction (also known locally as Padalam X Road) on the GST Road (NH-45) corridor, developed by VIP Housing and Properties. growthtown.viphousing.in is the official website for the project.",
    category: "Overview & Phase 2",
    highlightTag: "Official Project Identity"
  },
  {
    id: "faq-6",
    question: "I've seen different plot counts or acreage for Growth Town on other websites — which figures are correct?",
    answer: "The official figures from VIP Housing and Properties are: Phase 1 — 210 plots across 8.6 acres, DTCP Approval No. 140/2025 (sold out); Phase 2 — 176 plots across 6.32 acres, DTCP Technical Approval No. 246/2026 (now open). Some third-party listing sites carry outdated or inaccurate figures for this project. growthtown.viphousing.in is the official website and is kept current — please verify project details here or by calling +91 73054 01438 before relying on other listings.",
    category: "Overview & Phase 2",
    highlightTag: "Verified Figures",
    relatedLinks: [
      { label: "Call Official Desk", actionType: "call", value: "7305401438" }
    ]
  },
  {
    id: "faq-7",
    question: "Are Growth Town plots suitable for residential, individual house, or investment use?",
    answer: "Yes. Growth Town's DTCP-approved residential plots (also referred to as open plots or individual house plots) suit both families looking to build a home and investors looking for a bank-loan-eligible plot with clear title in a fast-developing corridor south of Chennai.",
    category: "Overview & Phase 2",
    highlightTag: "Residential & Investment"
  },
  {
    id: "faq-8",
    question: "How do I download the Growth Town Phase 2 approved layout plan?",
    answer: "Use the \"Download Full Approved Layout (PDF)\" button on the Project Details page. You'll be asked for your name, WhatsApp number and email, and the DTCP-approved layout plan (No. 246/2026) will download automatically.",
    category: "Overview & Phase 2",
    highlightTag: "Layout PDF",
    relatedLinks: [
      { label: "Download Approved Layout (PDF)", actionType: "download" }
    ]
  },
  {
    id: "faq-9",
    question: "What is the starting price of plots at Growth Town?",
    answer: "Plot-wise pricing varies by size, facing and location within the layout. Contact us at +91 73054 01438 for current Phase 2 plot-wise pricing.",
    category: "Pricing & Finance",
    highlightTag: "Phase 2 Pricing",
    relatedLinks: [
      { label: "Get Phase 2 Price List", actionType: "enquiry" },
      { label: "Call +91 73054 01438", actionType: "call", value: "7305401438" }
    ]
  },
  {
    id: "faq-10",
    question: "What plot sizes are available at Growth Town?",
    answer: "Growth Town Phase 2 offers 176 plots across 6.32 acres. For exact plot-wise dimensions and facing, download the approved layout plan on the Project Details page or contact us at +91 73054 01438.",
    category: "Overview & Phase 2",
    highlightTag: "176 Plots / 6.32 Acres",
    relatedLinks: [
      { label: "View Plot Sizes", actionType: "download" }
    ]
  },
  {
    id: "faq-11",
    question: "Where is Growth Town located?",
    answer: "Growth Town is located near Padalam Junction at Pazhayanur Village, Maduranthagam Taluk, Chengalpattu District, Tamil Nadu — 1 minute from Padalam Junction Bus Stand, 3 minutes from Padalam Railway Station, and 15 minutes from Chengalpattu Railway Station.",
    category: "Location & Connectivity",
    highlightTag: "Padalam Junction / GST Rd",
    relatedLinks: [
      { label: "Get Location & Directions", actionType: "enquiry" }
    ]
  },
  {
    id: "faq-12",
    question: "Is bank loan facility available for Growth Town plots?",
    answer: "Yes, home loan facility is available through partner banks for eligible buyers. Contact VIP Housing and Properties for current loan-to-value terms.",
    category: "Pricing & Finance",
    highlightTag: "Bank Loan Eligible",
    relatedLinks: [
      { label: "Check Bank Loan Eligibility", actionType: "enquiry" }
    ]
  },
  {
    id: "faq-13",
    question: "What amenities does Growth Town offer?",
    answer: "Growth Town is a gated community with 24/7 security, 40 ft and 33 ft blacktop internal roads, a 6 ft compound wall, solar-powered street lighting, landscaped parks, avenue trees, a dedicated groundwater facility, and a grand entrance arch.",
    category: "Infrastructure & Amenities",
    highlightTag: "Gated Community Infrastructure"
  },
  {
    id: "faq-14",
    question: "How do I book a site visit to Growth Town?",
    answer: "Call or WhatsApp VIP Housing and Properties at +91 73054 01438, or use the site-visit form on this website.",
    category: "Site Visit & Booking",
    highlightTag: "Book Free Site Visit",
    relatedLinks: [
      { label: "Book Free Site Visit", actionType: "enquiry" },
      { label: "WhatsApp Desk", actionType: "whatsapp", value: "7305401438" }
    ]
  },
  {
    id: "faq-15",
    question: "What schools, hospitals and colleges are near Growth Town?",
    answer: "Nearby schools include MCSM Government Hr. Secondary School Padalam, Karpaga Vinayaga Global School, Everwin Vidhyashram School, Government High School and SCAD World School (3–13 minutes). Nearby hospitals include Siva Hospital, Govt. Hospital Chengalpattu, Balaji Hospital, JJ Multi Speciality Hospital, Sundaram Hospital and Sree Renga Hospital (16–17 minutes). Nearby colleges include Karpaga Vinayaga Educational Group, Sri Malolan College of Arts and Science, Shri Andal Alagar College of Engineering, Vidhya Sagar Women's College, Chengalpattu Medical College and Rajeswari Vedachalam Gov. Arts College (4–16 minutes).",
    category: "Location & Connectivity",
    highlightTag: "Top Educational & Medical Hubs"
  },
  {
    id: "faq-16",
    question: "Does Growth Town have a clear title?",
    answer: "Yes, every plot at Growth Town comes with a clear, marketable title.",
    category: "Approvals & Legal",
    highlightTag: "100% Clear Marketable Title"
  },
  {
    id: "faq-17",
    question: "Are the internal roads and infrastructure already built at Growth Town?",
    answer: "In the sold-out Phase 1 layout, 40 ft and 33 ft blacktop internal roads, compound wall, solar street lighting and groundwater facility are already in place. Phase 2's roads (7.2m–12m wide) and two parks are part of the DTCP-approved layout (No. 246/2026); contact us at +91 73054 01438 for the current on-ground construction status of Phase 2 amenities before booking.",
    category: "Infrastructure & Amenities",
    highlightTag: "Internal Roads & Parks Status",
    relatedLinks: [
      { label: "Inquire Construction Status", actionType: "call", value: "7305401438" }
    ]
  },
  {
    id: "faq-18",
    question: "How far is Growth Town from Chennai?",
    answer: "Growth Town is on the GST Road (NH-45) corridor at Padalam Junction, Chengalpattu district, south of Chennai, with direct bus and rail connectivity via Padalam Railway Station and Chengalpattu Railway Station.",
    category: "Location & Connectivity",
    highlightTag: "GST Road (NH-45) Corridor"
  },
  {
    id: "faq-19",
    question: "Who is the developer of Growth Town?",
    answer: "Growth Town is developed by VIP Housing and Properties, a Chennai-based real estate development company.",
    category: "Overview & Phase 2",
    highlightTag: "VIP Housing & Properties"
  }
];
