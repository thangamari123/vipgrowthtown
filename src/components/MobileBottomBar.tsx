import React from 'react';
import { Phone, FileText } from 'lucide-react';
import { projectConfig } from '../data/projectData';

export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12.01 2.002C6.49 2.002 2.01 6.482 2.01 12.002c0 1.76.46 3.47 1.33 4.98L2 22l5.16-1.31c1.47.8 3.12 1.23 4.85 1.23 5.52 0 10-4.48 10-10s-4.48-9.918-10-9.918zm0 18.148c-1.53 0-3.03-.41-4.34-1.19l-.31-.18-3.07.78.82-2.99-.2-.32a8.164 8.164 0 0 1-1.26-4.328c0-4.51 3.67-8.178 8.18-8.178 4.51 0 8.18 3.668 8.18 8.178 0 4.51-3.67 8.228-8.18 8.228zm4.49-6.138c-.25-.13-1.47-.73-1.7-.81-.23-.08-.4-.13-.57.13-.17.25-.65.81-.8 1-.15.18-.3.2-.55.08-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.25-1.5-1.4-1.75-.15-.25-.02-.38.11-.5.11-.11.25-.28.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.13-.57-1.37-.78-1.88-.2-.5-.41-.43-.57-.44l-.49-.01c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.02 2.61c.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29z" />
  </svg>
);

interface MobileBottomBarProps {
  onOpenEnquiry: (source?: string) => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenEnquiry }) => {
  const cleanPhone = projectConfig.whatsappNumber.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(projectConfig.whatsappMessage)}`;

  return (
    <nav
      aria-label="Mobile Quick Action Bar"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0B3B2E] border-t border-green-700/60 shadow-[0_-4px_20px_rgba(0,0,0,0.35)] px-2 py-2 safe-area-pb"
    >
      <div className="grid grid-cols-3 gap-1.5 max-w-md mx-auto">
        {/* Call Now */}
        <a
          id="mobile-bar-call"
          href={`tel:${projectConfig.phone}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-white/10 active:bg-white/20 text-white transition-colors"
        >
          <Phone className="w-4 h-4 text-[#ECC850] mb-0.5" />
          <span className="text-[11px] font-bold tracking-tight">Call Now</span>
        </a>

        {/* Real WhatsApp Button */}
        <a
          id="mobile-bar-whatsapp"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] active:bg-[#1caa4e] text-white shadow-md transition-all duration-200 active:scale-95"
          aria-label="Chat on WhatsApp"
        >
          <WhatsAppIcon className="w-5 h-5 mb-0.5 text-white" />
          <span className="text-[11px] font-bold tracking-tight">WhatsApp</span>
        </a>

        {/* Enquire Now */}
        <button
          id="mobile-bar-enquire"
          onClick={() => onOpenEnquiry('Sticky Mobile Bottom Bar')}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#ECC850] active:bg-[#d8b02c] text-[#0B3B2E] font-extrabold shadow-sm transition-colors cursor-pointer"
        >
          <FileText className="w-4 h-4 mb-0.5" />
          <span className="text-[11px] font-extrabold tracking-tight">Enquire Now</span>
        </button>
      </div>
    </nav>
  );
};
