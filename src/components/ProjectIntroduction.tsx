import React from 'react';
import { CheckCircle2, ArrowRight, ShieldCheck, MapPin, Sparkles, Building } from 'lucide-react';
import { projectConfig } from '../data/projectData';

interface ProjectIntroductionProps {
  onOpenEnquiry: (source?: string) => void;
}

export const ProjectIntroduction: React.FC<ProjectIntroductionProps> = ({ onOpenEnquiry }) => {
  const highlights = [
    'Premium villa plots',
    'Gated community',
    'DTCP & RERA approved',
    'Ready for registration',
    'Excellent connectivity',
    'Multiple plot size options (600–2400 sq.ft)'
  ];

  return (
    <section id="about" className="py-10 sm:py-20 lg:py-24 bg-[#F7F8F5]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-14 items-center">
          
          {/* Left Column: Image with Floating Card Badges */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 sm:border-4 border-white">
              <img
                src="https://res.cloudinary.com/ed36wlmb/image/upload/v1790346106/WhatsApp_Image_2026-09-21_at_11.34.49_AM_2.jpg"
                alt="VIP Growth Town Site View & Development"
                className="w-full h-[240px] sm:h-[420px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Image Bottom Pill */}
              <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-4 sm:left-4 sm:right-4 bg-white/95 backdrop-blur-md rounded-xl p-2.5 sm:p-4 shadow-lg flex items-center justify-between border border-gray-200">
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#0B3B2E] text-[#ECC850] flex items-center justify-center font-bold">
                    <Building className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#17201B]">
                      {projectConfig.projectName}
                    </h4>
                    <p className="text-[10px] sm:text-[11px] text-gray-500 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#166534]" />
                      Chengalpattu – Padalam
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[9px] sm:text-[10px] text-gray-400 uppercase font-bold tracking-wider block">Status</span>
                  <span className="text-xs sm:text-sm font-extrabold text-[#166534]">Ready to Register</span>
                </div>
              </div>
            </div>

            {/* Floating Top Trust Badge */}
            <div className="absolute -top-3 -right-2 sm:-top-5 sm:-right-5 bg-gradient-to-br from-[#0B3B2E] to-[#166534] text-white p-2.5 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl border-2 border-white flex items-center gap-2 sm:gap-3">
              <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-[#ECC850] text-[#0B3B2E] flex items-center justify-center font-black">
                <ShieldCheck className="w-4 h-4 sm:w-6 sm:h-6" />
              </div>
              <div>
                <span className="text-[9px] sm:text-[10px] uppercase font-extrabold text-[#ECC850] tracking-wider block">
                  Official Sanctions
                </span>
                <span className="text-[11px] sm:text-sm font-bold text-white">
                  DTCP &amp; RERA Approved
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Project Story & Details */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#F8F6EF] border border-[#C9A227]/50 text-[#0B3B2E] text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-2 sm:mb-3">
                <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C9A227]" />
                <span>Overview</span>
              </div>
              
              <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B3B2E] font-serif tracking-tight leading-snug">
                A gated villa-plot community on the Chengalpattu side of the GST Road corridor.
              </h2>
            </div>

            <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base text-[#4A5568] leading-relaxed">
              <p>
                <strong className="text-[#17201B] font-semibold">Growth Town</strong> is a gated, DTCP-approved villa plot community developed by <strong>VIP Housing and Properties</strong> near Padalam Junction, at Pazhayanur Village, Maduranthagam Taluk, Chengalpattu District. Across both phases, the project spans 8.6 acres and 210 plots, DTCP approved under Approval No. 140/2025. Phase 1 is completely sold out. Phase 2 is now open — 176 new plots across 6.32 acres, separately approved under DTCP Technical Approval No. 246/2026 (Survey Nos. 125/1 to 126/8B, Pazhayanur Village), ranging in size to suit both compact investment plots and larger villa-sized plots. Every plot comes with a clear, marketable title.
              </p>
              <p>
                The project suits two kinds of buyers: families looking to build a home within easy reach of Chengalpattu town and the GST Road industrial corridor, and investors looking for a DTCP-approved, bank-loan-eligible plot in one of South Chennai's fastest-developing peripheral markets.
              </p>
              <p className="text-xs sm:text-xs text-gray-500 bg-white/80 p-3 rounded-xl border border-gray-200">
                Whether you're searching for villa plots for sale near Padalam, open plots on GST Road, residential plots in Chengalpattu, or individual house plots for an investment property, Growth Town is also known online as <em>VIP Growth Town</em>, <em>Growth Town Padalam</em>, and <em>VIP Growth Town Padalam</em> — all referring to this same DTCP &amp; RERA approved gated community near Padalam Junction (Padalam X Road) on the GST Road (NH-45) corridor.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#masterplan"
                className="bg-[#166534] hover:bg-[#0B3B2E] text-white font-bold py-2.5 sm:py-3.5 px-5 sm:px-7 rounded-xl shadow-lg shadow-green-900/15 flex items-center gap-2 text-xs sm:text-base transition-all duration-200"
              >
                <span>See Phase 2 Layout &amp; Plot Details</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ECC850]" />
              </a>

              <div className="text-[11px] sm:text-xs text-gray-500">
                <span>Free site visit assistance available</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
