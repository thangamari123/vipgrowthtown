/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProjectStats } from './components/ProjectStats';
import { SiteReelsSection } from './components/SiteReelsSection';
import { ProjectIntroduction } from './components/ProjectIntroduction';
import { WhyChooseSection } from './components/WhyChooseSection';
import { PlotConfiguration } from './components/PlotConfiguration';
import { MasterPlanSection } from './components/MasterPlanSection';
import { AmenitiesSection } from './components/AmenitiesSection';
import { LocationSection } from './components/LocationSection';
import { LocationMapCTA } from './components/LocationMapCTA';
import { GallerySection } from './components/GallerySection';
import { InvestmentSection } from './components/InvestmentSection';
import { DeveloperSection } from './components/DeveloperSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { FAQPage } from './components/FAQPage';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { MobileBottomBar } from './components/MobileBottomBar';
import { EnquiryModal } from './components/EnquiryModal';
import { AdvisorConsoleModal } from './components/AdvisorConsoleModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'faq'>('home');
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    source: string;
    defaultPlotSize?: string;
  }>({
    isOpen: false,
    source: 'General Enquiry',
    defaultPlotSize: ''
  });

  const [advisorConsoleOpen, setAdvisorConsoleOpen] = useState(false);

  // Sync hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#faq-page' || hash === '#faq-all' || hash === '#faqs') {
        setCurrentPage('faq');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#home' || hash === '') {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: 'home' | 'faq', sectionId?: string) => {
    setCurrentPage(page);

    if (page === 'faq') {
      window.location.hash = '#faq-page';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (sectionId && sectionId !== 'home') {
        window.location.hash = `#${sectionId}`;
        // Timeout to ensure DOM is rendered if transitioning from FAQ page
        setTimeout(() => {
          const target = document.getElementById(sectionId);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        window.location.hash = '#home';
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handleOpenEnquiry = (source: string = 'General CTA', defaultPlotSize: string = '') => {
    setModalState({
      isOpen: true,
      source,
      defaultPlotSize
    });
  };

  const handleCloseEnquiry = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-[#F7F8F5] text-[#17201B] font-sans selection:bg-[#166534] selection:text-white">
      {/* Sticky Header */}
      <Navbar
        activePage={currentPage}
        onNavigate={handleNavigate}
        onOpenEnquiry={handleOpenEnquiry}
      />

      {currentPage === 'faq' ? (
        /* Dedicated Full FAQ Page with all 19 official Q&As */
        <FAQPage
          onNavigateHome={() => handleNavigate('home')}
          onOpenEnquiry={handleOpenEnquiry}
        />
      ) : (
        /* Standard Landing Page */
        <>
          {/* 1. Hero Section with Video Background */}
          <HeroSection onOpenEnquiry={handleOpenEnquiry} />

          {/* 2. Quick Project Stats Bar */}
          <ProjectStats />

          {/* 3. Site Walkthrough Reels (3 Reels in Vertical Format with Auto-Play) */}
          <SiteReelsSection onOpenEnquiry={handleOpenEnquiry} />

          {/* 4. Discover VIP Growth Town (Project Introduction) */}
          <ProjectIntroduction onOpenEnquiry={handleOpenEnquiry} />

          {/* 4. Why VIP Growth Town */}
          <WhyChooseSection />

          {/* 5. Plot Configurations & EMI Calculator */}
          <PlotConfiguration onOpenEnquiry={handleOpenEnquiry} />

          {/* 6. Layout Masterplan */}
          <MasterPlanSection onOpenEnquiry={handleOpenEnquiry} />

          {/* 7. Community Amenities */}
          <AmenitiesSection onOpenEnquiry={handleOpenEnquiry} />

          {/* 8. Location Advantage & Interactive Map */}
          <LocationSection onOpenEnquiry={handleOpenEnquiry} />

          {/* 9. Location CTA Banner */}
          <LocationMapCTA onOpenEnquiry={handleOpenEnquiry} />

          {/* 10. Photo Gallery */}
          <GallerySection onOpenEnquiry={handleOpenEnquiry} />

          {/* 11. Investment & Land Ownership */}
          <InvestmentSection onOpenEnquiry={handleOpenEnquiry} />

          {/* 13. About VIP Housing & Developer Legacy */}
          <DeveloperSection onOpenEnquiry={handleOpenEnquiry} />

          {/* 14. Buyer Testimonials */}
          <TestimonialsSection />

          {/* 15. FAQ Preview Section */}
          <FAQSection
            onOpenEnquiry={handleOpenEnquiry}
            onNavigateToFaqPage={() => handleNavigate('faq')}
          />

          {/* 16. Contact & Full Enquiry Form */}
          <ContactSection />
        </>
      )}

      {/* 18. Footer */}
      <Footer
        onOpenEnquiry={handleOpenEnquiry}
        onNavigate={handleNavigate}
      />

      {/* Floating WhatsApp Action */}
      <WhatsAppButton />

      {/* Sticky Mobile Bottom CTA Bar */}
      <MobileBottomBar onOpenEnquiry={handleOpenEnquiry} />

      {/* Global Lead Enquiry Modal */}
      <EnquiryModal
        isOpen={modalState.isOpen}
        onClose={handleCloseEnquiry}
        source={modalState.source}
        defaultPlotSize={modalState.defaultPlotSize}
      />

      {/* Sales Advisor Console Drawer */}
      <AdvisorConsoleModal
        isOpen={advisorConsoleOpen}
        onClose={() => setAdvisorConsoleOpen(false)}
      />
    </div>
  );
}
