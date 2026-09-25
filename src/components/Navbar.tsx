import React, { useState, useEffect } from 'react';
import {
  Phone,
  Menu,
  X,
  ShieldCheck,
  MessageSquareText,
  Calendar,
  ChevronRight,
  Sparkles,
  MapPin
} from 'lucide-react';
import { projectConfig } from '../data/projectData';

interface NavbarProps {
  activePage: 'home' | 'faq';
  onNavigate: (page: 'home' | 'faq', sectionId?: string) => void;
  onOpenEnquiry: (source?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate, onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'About', sectionId: 'about' },
    { label: 'Why Growth Town', sectionId: 'why-us' },
    { label: 'Plots & Pricing', sectionId: 'plot-config' },
    { label: 'Location', sectionId: 'location' },
    { label: 'Gallery', sectionId: 'gallery' },
    { label: 'FAQs', isPage: true, page: 'faq' as const },
    { label: 'Contact', sectionId: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent, link: typeof navLinks[0]) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (link.isPage) {
      onNavigate('faq');
    } else {
      onNavigate('home', link.sectionId);
    }
  };

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || activePage === 'faq' || mobileMenuOpen
            ? 'bg-[#0B3B2E]/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-emerald-500/20 py-2 sm:py-2.5'
            : 'bg-[#0B3B2E]/90 backdrop-blur-sm border-b border-white/10 py-2 sm:py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-8">
          <div className="flex items-center justify-between gap-2 sm:gap-4 h-11 sm:h-12">
            
            {/* Brand Logo & Tagline */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('home', 'home');
              }}
              className="flex items-center gap-2 sm:gap-2.5 group text-left cursor-pointer border-none bg-transparent shrink-0"
              aria-label="VIP Growth Town Home"
            >
              <img
                src={projectConfig.logoUrl || "https://res.cloudinary.com/ed36wlmb/image/upload/v1790348953/gwth.png"}
                alt="VIP Growth Town Logo"
                className="h-8 sm:h-9 w-auto object-contain group-hover:scale-105 transition-transform duration-200"
              />
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-white font-extrabold tracking-wider text-xs sm:text-sm md:text-base leading-tight">
                    VIP HOUSING
                  </span>
                  <span className="hidden md:inline-block px-1.5 py-0.2 rounded bg-[#166534] text-[#ECC850] text-[9px] font-bold uppercase tracking-wider border border-[#ECC850]/30">
                    DTCP
                  </span>
                </div>
                <span className="text-[#ECC850] text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase leading-none">
                  Growth Town • Padalam
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links (Compact & Crisp) */}
            <nav className="hidden lg:flex items-center space-x-0.5 xl:space-x-1">
              {navLinks.map((link) => {
                const isActive = link.isPage ? activePage === 'faq' : false;
                return (
                  <button
                    key={link.label}
                    onClick={(e) => handleLinkClick(e, link)}
                    className={`px-2 xl:px-2.5 py-1.5 text-xs xl:text-xs font-semibold rounded-lg transition-all duration-150 cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'bg-[#ECC850] text-[#0B3B2E] shadow-sm font-bold'
                        : 'text-gray-200 hover:text-[#ECC850] hover:bg-white/10'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </nav>

            {/* Right Action Buttons (Desktop & Tablet) */}
            <div className="hidden sm:flex items-center gap-2 lg:gap-2.5 shrink-0">
              <button
                id="header-enquire-btn"
                onClick={() => onOpenEnquiry('Navbar Header - Enquire')}
                className="bg-[#ECC850] hover:bg-[#dfba38] active:bg-[#c9a227] text-[#0B3B2E] font-black text-xs py-1.5 sm:py-2 px-3 sm:px-3.5 rounded-xl transition-all duration-200 shadow-md flex items-center gap-1.5 cursor-pointer hover:shadow-amber-500/20 active:scale-95"
              >
                <MessageSquareText className="w-3.5 h-3.5" />
                <span>Enquire</span>
              </button>

              <a
                id="header-call-btn"
                href={`tel:${projectConfig.phone}`}
                className="bg-gradient-to-r from-[#166534] to-[#1e8243] hover:from-[#1b7a3f] hover:to-[#22974e] text-white text-xs font-bold py-1.5 sm:py-2 px-3 sm:px-3.5 rounded-xl flex items-center gap-1.5 shadow-md border border-green-400/30 transition-all duration-200 group active:scale-95"
                title={`Call ${projectConfig.phoneDisplay}`}
              >
                <Phone className="w-3.5 h-3.5 text-[#ECC850] group-hover:rotate-12 transition-transform" />
                <span className="font-mono">{projectConfig.phoneDisplay}</span>
              </a>
            </div>

            {/* Mobile Header Actions */}
            <div className="flex items-center gap-1.5 lg:hidden">
              {/* Mobile Quick Enquire Button */}
              <button
                onClick={() => onOpenEnquiry('Mobile Header Enquire')}
                className="bg-[#ECC850] text-[#0B3B2E] font-black text-[11px] py-1.5 px-2.5 rounded-lg flex items-center gap-1 shadow cursor-pointer active:scale-95 sm:hidden"
              >
                <span>Enquire</span>
              </button>

              {/* Mobile Call Icon */}
              <a
                id="mobile-header-call-btn"
                href={`tel:${projectConfig.phone}`}
                aria-label={`Call ${projectConfig.phoneDisplay}`}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#166534] border border-green-400/40 text-white flex items-center justify-center shadow transition-colors active:scale-95"
              >
                <Phone className="w-3.5 h-3.5 text-[#ECC850]" />
              </a>

              {/* Mobile Menu Hamburger Toggle */}
              <button
                id="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/10 hover:bg-white/15 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-[#ECC850]" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Menu Backdrop & Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden animate-fadeIn">
          {/* Backdrop click to dismiss */}
          <div
            className="fixed inset-0 bg-black/75 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Container */}
          <div className="fixed top-13 sm:top-14 inset-x-0 bottom-0 bg-[#0B3B2E] border-t border-emerald-500/30 overflow-y-auto px-4 pt-3 pb-8 flex flex-col justify-between shadow-2xl">
            <div className="space-y-3">
              {/* Approval & Location Banner */}
              <div className="p-2.5 bg-gradient-to-r from-[#166534]/80 to-[#0B3B2E] rounded-xl border border-emerald-500/30 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-gray-200">
                  <ShieldCheck className="w-4 h-4 text-[#ECC850] shrink-0" />
                  <span className="font-semibold text-[11px]">DTCP Approval No. 246/2026</span>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-[#ECC850] text-[#0B3B2E] text-[10px] font-black uppercase">
                  Phase 2
                </span>
              </div>

              {/* Navigation Links Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 pt-1">
                {navLinks.map((link) => {
                  const isActive = link.isPage ? activePage === 'faq' : false;
                  return (
                    <button
                      key={link.label}
                      onClick={(e) => handleLinkClick(e, link)}
                      className={`text-left px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all flex items-center justify-between cursor-pointer ${
                        isActive
                          ? 'bg-[#ECC850] text-[#0B3B2E] font-bold shadow-md'
                          : 'text-gray-200 hover:bg-white/10 active:bg-white/15'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronRight className={`w-4 h-4 ${isActive ? 'text-[#0B3B2E]' : 'text-gray-400'}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Mobile Menu Action CTAs */}
            <div className="pt-4 mt-4 border-t border-white/10 space-y-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry('Mobile Drawer - Book Visit');
                }}
                className="w-full bg-[#ECC850] hover:bg-[#dfba38] text-[#0B3B2E] font-black py-3 px-4 rounded-xl text-center text-sm shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-98 transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Site Visit Transport</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenEnquiry('Mobile Drawer - Enquire');
                  }}
                  className="w-full bg-white/10 hover:bg-white/20 text-white font-bold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 border border-white/15 cursor-pointer"
                >
                  <MessageSquareText className="w-3.5 h-3.5 text-[#ECC850]" />
                  <span>Enquire Form</span>
                </button>

                <a
                  href={`tel:${projectConfig.phone}`}
                  className="w-full bg-[#166534] hover:bg-[#1b7a3f] text-white font-bold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 border border-emerald-400/40 text-center"
                >
                  <Phone className="w-3.5 h-3.5 text-[#ECC850]" />
                  <span>Call Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

