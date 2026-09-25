import React from 'react';
import { IndianRupee, Maximize2, ShieldCheck, Home, FileCheck2, Sparkles } from 'lucide-react';

export const ProjectStats: React.FC = () => {
  const stats = [
    {
      label: 'Starting Price',
      value: '₹12 Lakhs',
      sub: 'Affordable Entry',
      icon: IndianRupee,
      highlight: true
    },
    {
      label: 'Plot Sizes',
      value: '600–2400 sq.ft',
      sub: 'Flexible Dimensions',
      icon: Maximize2
    },
    {
      label: 'Approval',
      value: 'DTCP & RERA',
      sub: '100% Clear Sanctions',
      icon: ShieldCheck
    },
    {
      label: 'Community',
      value: 'Gated Community',
      sub: 'Secure & Planned',
      icon: Home
    },
    {
      label: 'Registration',
      value: 'Ready',
      sub: 'Instant Documentation',
      icon: FileCheck2
    }
  ];

  return (
    <section className="relative z-20 -mt-5 sm:-mt-8 lg:-mt-10 max-w-6xl mx-auto px-2.5 sm:px-6 lg:px-8">
      
      {/* Mobile & Small Screen: Single Line Automatic Scrolling Ticker */}
      <div className="lg:hidden relative overflow-hidden bg-white/95 backdrop-blur-md rounded-xl shadow-lg border border-emerald-900/10 py-2 px-1">
        {/* Left & Right Fade Shadows */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-5 bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-5 bg-gradient-to-l from-white via-white/80 to-transparent z-10"></div>

        {/* Continuous Automatic Marquee Loop Track */}
        <div className="animate-marquee items-center gap-2">
          {[...stats, ...stats].map((stat, idx) => {
            const IconComp = stat.icon;
            return (
              <div
                key={idx}
                className={`inline-flex items-center gap-1.5 py-1 px-2.5 rounded-lg shrink-0 whitespace-nowrap text-xs border ${
                  stat.highlight
                    ? 'bg-[#0B3B2E] text-white border-[#ECC850]/40 shadow-xs'
                    : 'bg-[#F8F6EF] text-[#0B3B2E] border-gray-200/80'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded flex items-center justify-center shrink-0 ${
                    stat.highlight ? 'bg-[#ECC850] text-[#0B3B2E]' : 'bg-[#0B3B2E]/10 text-[#0B3B2E]'
                  }`}
                >
                  <IconComp className="w-3 h-3" />
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-wider ${stat.highlight ? 'text-[#ECC850]' : 'text-gray-500'}`}>
                  {stat.label}:
                </span>
                <span className="font-extrabold text-xs tracking-tight">
                  {stat.value}
                </span>
                <span className={`text-[10px] font-medium ${stat.highlight ? 'text-gray-300' : 'text-gray-500'}`}>
                  ({stat.sub})
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Desktop View: Compact 5-Column Grid */}
      <div className="hidden lg:block bg-white/95 backdrop-blur-md rounded-2xl shadow-xl shadow-black/10 border border-emerald-900/10 py-3.5 px-4">
        <div className="grid grid-cols-5 gap-2 divide-x divide-gray-100">
          {stats.map((stat, idx) => {
            const IconComp = stat.icon;
            return (
              <div
                key={idx}
                className={`flex flex-col items-center text-center px-3 rounded-xl transition-all ${
                  idx > 0 ? 'pl-4' : ''
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center mb-1 shadow-xs ${
                    stat.highlight
                      ? 'bg-[#0B3B2E] text-[#ECC850]'
                      : 'bg-[#0B3B2E]/10 text-[#0B3B2E]'
                  }`}
                >
                  <IconComp className="w-4 h-4" />
                </div>

                <div className="flex flex-col min-w-0">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 truncate leading-tight">
                    {stat.label}
                  </span>
                  <span
                    className={`text-sm font-extrabold tracking-tight leading-snug truncate ${
                      stat.highlight ? 'text-[#166534]' : 'text-[#0B3B2E]'
                    }`}
                  >
                    {stat.value}
                  </span>
                  <span className="text-[10px] text-gray-500 font-medium truncate leading-none mt-0.5">
                    {stat.sub}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
};


