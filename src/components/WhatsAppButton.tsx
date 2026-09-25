import React from 'react';
import { projectConfig } from '../data/projectData';
import { WhatsAppIcon } from './MobileBottomBar';

export const WhatsAppButton: React.FC = () => {
  const cleanPhone = projectConfig.whatsappNumber.replace(/[^0-9]/g, '');
  const url = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(projectConfig.whatsappMessage)}`;

  return (
    <aside
      aria-label="Instant WhatsApp Contact"
      className="hidden sm:flex fixed bottom-6 right-6 z-40 group items-center gap-2"
    >
      {/* Tooltip Label */}
      <span className="hidden md:inline-block bg-[#0B3B2E] text-white text-xs font-bold py-1.5 px-3 rounded-full shadow-lg border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Chat with Property Advisor
      </span>

      {/* Floating Button */}
      <a
        id="floating-whatsapp-btn"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with VIP Housing on WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-2xl hover:shadow-[#25D366]/50 transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer border-2 border-white animate-pulse-subtle"
      >
        <WhatsAppIcon className="w-8 h-8 text-white" />
      </a>
    </aside>
  );
};
