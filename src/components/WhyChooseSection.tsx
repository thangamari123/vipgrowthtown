import React from 'react';
import { MapPin, Maximize, ShieldCheck, Home, FileCheck2, TrendingUp, Sparkles } from 'lucide-react';

export const WhyChooseSection: React.FC = () => {
  const cards = [
    {
      num: '01',
      title: 'Strategic Location',
      description: 'Located in the Chengalpattu – Padalam growth corridor.',
      details: 'Seamless highway connectivity and proximity to key transit, commercial, and educational centers.',
      icon: MapPin,
    },
    {
      num: '02',
      title: 'Premium Plots',
      description: 'Plot sizes from 600 to 2400 sq.ft.',
      details: 'Demarcated plots with wide internal blacktop road access, suitable for diverse family home architectures.',
      icon: Maximize,
    },
    {
      num: '03',
      title: 'Approved Project',
      description: 'DTCP & RERA approved development.',
      details: 'Complete legal transparency with verified sanction orders, clear land titles, and regulatory compliance.',
      icon: ShieldCheck,
    },
    {
      num: '04',
      title: 'Gated Community',
      description: 'Designed for a secure and comfortable residential environment.',
      details: 'Features grand entrance arch, perimeter boundary, street lighting, and dedicated recreational areas.',
      icon: Home,
    },
    {
      num: '05',
      title: 'Ready for Registration',
      description: 'Move forward with your purchase with registration readiness.',
      details: 'Prompt documentation process with clear titles facilitating quick legal handover and bank loan support.',
      icon: FileCheck2,
    },
    {
      num: '06',
      title: 'Future Potential',
      description: 'Located in a developing corridor with long-term residential potential.',
      details: 'Positioned strategically within South Chennai’s established industrial and educational expansion zone.',
      icon: TrendingUp,
    },
  ];

  return (
    <section id="why-us" className="py-10 sm:py-20 lg:py-24 bg-white border-y border-[#DDE4DE]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3.5 sm:py-1 rounded-full bg-[#F8F6EF] border border-[#C9A227]/40 text-[#0B3B2E] text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-2 sm:mb-3">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C9A227]" />
            <span>VALUE &amp; TRUST</span>
          </div>
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B3B2E] font-serif tracking-tight">
            Why VIP Growth Town?
          </h2>
          <p className="mt-1.5 sm:mt-3 text-xs sm:text-base text-[#66736B]">
            Thoughtfully planned infrastructure, verified legal sanctions, and an ideal location crafted for your family's future.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-8">
          {cards.map((card, idx) => {
            const IconComp = card.icon;
            return (
              <div
                key={idx}
                className="group relative bg-[#F7F8F5] rounded-xl sm:rounded-2xl p-4 sm:p-7 border border-[#DDE4DE] hover:border-[#166534]/50 hover:bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  {/* Card Header: Number & Icon */}
                  <div className="flex items-center justify-between mb-3 sm:mb-5">
                    <span className="text-xl sm:text-2xl font-black text-[#C9A227] tracking-wider font-mono">
                      {card.num}
                    </span>
                    <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white group-hover:bg-[#0B3B2E] text-[#166534] group-hover:text-[#ECC850] flex items-center justify-center shadow-sm border border-[#DDE4DE] group-hover:border-[#0B3B2E] transition-all duration-300">
                      <IconComp className="w-4 h-4 sm:w-6 sm:h-6" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-base sm:text-xl font-bold text-[#17201B] mb-1 sm:mb-2 font-serif group-hover:text-[#0B3B2E] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-[#166534] mb-1 sm:mb-2 leading-snug">
                    {card.description}
                  </p>
                  <p className="text-xs sm:text-sm text-[#66736B] leading-relaxed">
                    {card.details}
                  </p>
                </div>

                <div className="mt-3.5 sm:mt-5 pt-2.5 sm:pt-4 border-t border-gray-200/80 flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-[#0B3B2E] group-hover:text-[#166534]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]"></span>
                  <span>Verified Advantage</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
