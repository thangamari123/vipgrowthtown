import React, { useState } from 'react';
import {
  Phone,
  MapPin,
  ShieldCheck,
  Mail,
  ArrowUp,
  ChevronDown,
  Building2,
  Compass,
  Info,
  Sparkles
} from 'lucide-react';
import { projectConfig } from '../data/projectData';
import { officialFaqBanner } from '../data/officialFaqData';

interface FooterProps {
  onOpenEnquiry: (source?: string) => void;
  onOpenAdvisorConsole?: () => void;
  onNavigate?: (page: 'home' | 'faq', sectionId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEnquiry, onNavigate }) => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'Home', sectionId: 'home' },
    { label: 'About Project', sectionId: 'about' },
    { label: 'Highlights', sectionId: 'why-us' },
    { label: 'Plot Configurations', sectionId: 'plot-config' },
    { label: 'Master Plan', sectionId: 'masterplan' },
    { label: 'Amenities', sectionId: 'amenities' },
    { label: 'Location Advantage', sectionId: 'location' },
    { label: 'Gallery', sectionId: 'gallery' },
    { label: 'Home Plans', sectionId: 'home-plans' },
    { label: 'FAQs (All 19 Q&As)', isPage: true, page: 'faq' as const },
    { label: 'Contact', sectionId: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent, link: typeof quickLinks[0]) => {
    e.preventDefault();
    if (onNavigate) {
      if (link.isPage) {
        onNavigate('faq');
      } else {
        onNavigate('home', link.sectionId);
      }
    } else {
      const target = document.querySelector(`#${link.sectionId}`);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0B3B2E] text-white pt-8 pb-24 md:pt-16 md:pb-12 border-t border-emerald-950">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* ======================================================== */}
        {/* 1. MOBILE ONLY: COMPACT FOLDING FOOTER ACCORDION (< md)   */}
        {/* ======================================================== */}
        <div className="md:hidden space-y-3 pb-6 border-b border-white/10">
          
          {/* Mobile Brand Bar */}
          <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/10">
            <div className="flex items-center gap-2.5">
              <img
                src={projectConfig.logoUrl || "https://res.cloudinary.com/ed36wlmb/image/upload/v1790348953/gwth.png"}
                alt="VIP Growth Town Logo"
                className="h-8 w-auto object-contain"
              />
              <div>
                <span className="text-white font-extrabold text-sm block leading-tight">
                  VIP HOUSING
                </span>
                <span className="text-[#ECC850] text-[10px] font-semibold tracking-wider uppercase">
                  Growth Town • Padalam
                </span>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-[#166534] text-[#ECC850] text-[9px] font-bold border border-[#ECC850]/30 uppercase">
              DTCP 246/2026
            </span>
          </div>

          {/* Folding Item 1: About & Approvals */}
          <div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden transition-all">
            <button
              onClick={() => toggleSection('about')}
              className="w-full p-3 flex items-center justify-between text-left text-xs font-bold text-white cursor-pointer"
              aria-expanded={openSection === 'about'}
            >
              <div className="flex items-center gap-2">
                <Info className="w-4 h-4 text-[#ECC850]" />
                <span>About Project &amp; Approvals</span>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-[#ECC850] transition-transform duration-200 ${
                  openSection === 'about' ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openSection === 'about' && (
              <div className="px-3 pb-3 pt-1 text-[11px] text-emerald-100/80 space-y-2 border-t border-white/10">
                <p className="leading-relaxed">
                  VIP Growth Town is a premium residential villa plot development in Chengalpattu – Padalam, Tamil Nadu. Phase 1 is sold out (DTCP 140/2025). Phase 2 is open for booking under DTCP 246/2026.
                </p>
                <div className="p-2 bg-emerald-950/60 rounded-lg border border-emerald-500/20 flex flex-col gap-1 text-[10px]">
                  <div className="flex items-center gap-1.5 text-[#ECC850] font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>DTCP 140/2025 &amp; DTCP 246/2026</span>
                  </div>
                  <span className="text-gray-300 font-mono">TNRERA/35/LO/3821/2025</span>
                </div>
              </div>
            )}
          </div>

          {/* Folding Item 2: Quick Links */}
          <div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden transition-all">
            <button
              onClick={() => toggleSection('links')}
              className="w-full p-3 flex items-center justify-between text-left text-xs font-bold text-white cursor-pointer"
              aria-expanded={openSection === 'links'}
            >
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#ECC850]" />
                <span>Quick Navigation</span>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-[#ECC850] transition-transform duration-200 ${
                  openSection === 'links' ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openSection === 'links' && (
              <div className="px-3 pb-3 pt-2 border-t border-white/10">
                <ul className="grid grid-cols-2 gap-2 text-[11px] text-gray-300">
                  {quickLinks.map((link) => (
                    <li key={link.label}>
                      <button
                        onClick={(e) => handleLinkClick(e, link)}
                        className="w-full text-left py-1 text-emerald-100/90 hover:text-[#ECC850] transition-colors cursor-pointer"
                      >
                        • {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Folding Item 3: Official Contact Desk */}
          <div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden transition-all">
            <button
              onClick={() => toggleSection('contact')}
              className="w-full p-3 flex items-center justify-between text-left text-xs font-bold text-white cursor-pointer"
              aria-expanded={openSection === 'contact'}
            >
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#ECC850]" />
                <span>Official Contact Desk</span>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-[#ECC850] transition-transform duration-200 ${
                  openSection === 'contact' ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openSection === 'contact' && (
              <div className="px-3 pb-3 pt-2 text-[11px] text-gray-300 space-y-2 border-t border-white/10">
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#ECC850] shrink-0 mt-0.5" />
                  <span>Pazhayanur Village, Padalam Junction, Chengalpattu District</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#ECC850] shrink-0" />
                  <a
                    href={`tel:${officialFaqBanner.phoneRaw}`}
                    className="font-bold text-[#ECC850] hover:underline"
                  >
                    {officialFaqBanner.contactNumber}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#ECC850] shrink-0" />
                  <a
                    href={`mailto:${officialFaqBanner.email}`}
                    className="text-gray-300 underline"
                  >
                    {officialFaqBanner.email}
                  </a>
                </div>
                <button
                  onClick={() => onOpenEnquiry('Mobile Footer - Book Visit')}
                  className="w-full mt-2 bg-[#166534] hover:bg-[#1b7a3f] text-white font-bold py-2 px-3 rounded-lg text-xs transition-colors cursor-pointer text-center"
                >
                  Book Free Site Visit Transport
                </button>
              </div>
            )}
          </div>

          {/* Folding Item 4: Phase 2 Project Summary */}
          <div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden transition-all">
            <button
              onClick={() => toggleSection('summary')}
              className="w-full p-3 flex items-center justify-between text-left text-xs font-bold text-white cursor-pointer"
              aria-expanded={openSection === 'summary'}
            >
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#ECC850]" />
                <span>Phase 2 Project Summary</span>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-[#ECC850] transition-transform duration-200 ${
                  openSection === 'summary' ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openSection === 'summary' && (
              <div className="px-3 pb-3 pt-2 text-[11px] text-gray-300 space-y-1.5 border-t border-white/10">
                <div className="flex justify-between items-center py-1 border-b border-white/5">
                  <span className="text-gray-400">Total Plots:</span>
                  <span className="font-bold text-[#ECC850]">176 Villa Plots</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-white/5">
                  <span className="text-gray-400">Total Land Area:</span>
                  <span className="font-semibold text-white">6.32 Acres</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-white/5">
                  <span className="text-gray-400">Plot Sizes:</span>
                  <span className="font-semibold text-white">600 – 2400 sq.ft</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-gray-400">Starting Price:</span>
                  <span className="font-bold text-[#ECC850]">₹12 Lakhs*</span>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Back to Top Button */}
          <div className="pt-2 text-center">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[11px] text-gray-300 hover:text-white bg-white/10 py-1.5 px-3 rounded-lg transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3 text-[#ECC850]" />
            </button>
          </div>

        </div>

        {/* ======================================================== */}
        {/* 2. DESKTOP & TABLET VIEW: FULL GRID (>= md)              */}
        {/* ======================================================== */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-10 pb-8 sm:pb-12 border-b border-white/10">
          
          {/* Col 1: VIP Housing Branding */}
          <div className="lg:col-span-4 space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <img
                src={projectConfig.logoUrl || "https://res.cloudinary.com/ed36wlmb/image/upload/v1790348953/gwth.png"}
                alt="VIP Growth Town Logo"
                className="h-9 sm:h-11 w-auto object-contain"
              />
              <div>
                <span className="text-white font-extrabold tracking-wider text-base sm:text-lg block leading-tight">
                  VIP HOUSING
                </span>
                <span className="text-[#ECC850] text-[10px] sm:text-xs font-semibold tracking-widest uppercase">
                  VIP Growth Town
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-emerald-100/75 leading-relaxed">
              Premium residential villa plot development in Chengalpattu – Padalam, Tamil Nadu. Phase 1 is sold out (DTCP 140/2025). Phase 2 is now open for booking under DTCP 246/2026.
            </p>

            <div className="flex flex-col gap-1 pt-1 text-[11px] sm:text-xs text-[#ECC850]">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>DTCP 140/2025 &amp; DTCP 246/2026 • RERA Approved</span>
              </div>
              <span className="text-gray-300 text-[10px] font-mono">TNRERA/35/LO/3821/2025</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-2.5 sm:space-y-3">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#ECC850] font-mono">
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-gray-300">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={(e) => handleLinkClick(e, link)}
                    className="hover:text-[#ECC850] transition-colors py-0.5 block text-left cursor-pointer border-none bg-transparent"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Project Contact Details */}
          <div className="lg:col-span-3 space-y-2.5 sm:space-y-3">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#ECC850] font-mono">
              Official Desk
            </h4>
            <div className="space-y-2 sm:space-y-2.5 text-[11px] sm:text-xs text-gray-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#ECC850] shrink-0 mt-0.5" />
                <span>Pazhayanur Village, Padalam Junction, Chengalpattu District</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#ECC850] shrink-0" />
                <a
                  href={`tel:${officialFaqBanner.phoneRaw}`}
                  className="font-bold text-white hover:text-[#ECC850] text-xs sm:text-sm"
                >
                  {officialFaqBanner.contactNumber}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#ECC850] shrink-0" />
                <a
                  href={`mailto:${officialFaqBanner.email}`}
                  className="text-gray-300 hover:text-white text-[11px] underline"
                >
                  {officialFaqBanner.email}
                </a>
              </div>
              <div className="pt-1.5 sm:pt-2">
                <button
                  onClick={() => onOpenEnquiry('Footer Quick Enquire')}
                  className="bg-[#166534] hover:bg-[#1b7a3f] text-white font-bold py-1.5 px-3 sm:py-2 sm:px-4 rounded-lg text-xs transition-colors cursor-pointer"
                >
                  Book Free Site Visit
                </button>
              </div>
            </div>
          </div>

          {/* Col 4: Project Summary & Back to Top */}
          <div className="lg:col-span-2 space-y-3 sm:space-y-4 text-left lg:text-right flex flex-col justify-between">
            <div>
              <span className="text-[10px] sm:text-xs uppercase tracking-wider text-gray-400 block mb-0.5">Phase 2 Open</span>
              <span className="text-xl sm:text-2xl font-black text-[#ECC850] block">
                176 Plots
              </span>
              <span className="text-[10px] sm:text-[11px] text-gray-300">6.32 Acres • DTCP 246/2026</span>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs text-gray-300 hover:text-white bg-white/10 hover:bg-white/20 py-1.5 px-2.5 sm:py-2 sm:px-3 rounded-lg transition-colors cursor-pointer self-start lg:self-end"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* ======================================================== */}
        {/* 3. COMMON BOTTOM BAR: COPYRIGHT                          */}
        {/* ======================================================== */}
        <div className="pt-5 sm:pt-6 flex flex-col sm:flex-row items-center justify-center gap-2 text-[10px] sm:text-xs text-gray-400 text-center">
          <p>
            © {new Date().getFullYear()} {projectConfig.companyName}. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};
