import React from 'react';
import { MapPin, Phone, ArrowRight, Navigation } from 'lucide-react';
import { projectConfig } from '../data/projectData';

interface LocationMapCTAProps {
  onOpenEnquiry: (source?: string) => void;
}

export const LocationMapCTA: React.FC<LocationMapCTAProps> = ({ onOpenEnquiry }) => {
  return (
    <section className="bg-gradient-to-br from-[#0B3B2E] via-[#104838] to-[#0B3B2E] py-12 sm:py-16 text-white border-y border-emerald-900/50 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(#ECC850_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 text-center lg:text-left">
          
          {/* Left Heading & Text */}
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#ECC850] text-xs font-bold uppercase tracking-wider mb-1">
              <Navigation className="w-3.5 h-3.5" />
              <span>Site Visit &amp; GPS Guidance</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-serif tracking-tight">
              Want to See the Location?
            </h2>
            <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed">
              Get the exact project location and route details from our property advisor.
            </p>
          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 shrink-0">
            <button
              onClick={() => onOpenEnquiry('Location Banner - Get Location')}
              className="bg-gradient-to-r from-[#ECC850] via-[#C9A227] to-[#9E7D14] hover:from-[#f3d46a] hover:to-[#b08b1a] text-[#0B3B2E] font-black py-3.5 px-6 sm:px-7 rounded-xl shadow-xl shadow-amber-500/20 text-sm flex items-center gap-2 cursor-pointer transition-transform duration-200 active:scale-95"
            >
              <span>Get Location</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`tel:${projectConfig.phone}`}
              className="bg-white/15 hover:bg-white/25 border border-white/25 text-white font-bold py-3.5 px-6 rounded-xl text-sm flex items-center gap-2.5 transition-all duration-200"
            >
              <Phone className="w-4 h-4 text-[#ECC850]" />
              <span>Call {projectConfig.phoneDisplay}</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
