import React from 'react';
import { Sparkles, Award, ShieldCheck, HeartHandshake, CheckCircle2, ArrowRight, Phone, Building } from 'lucide-react';
import { developerStats, projectConfig } from '../data/projectData';

interface DeveloperSectionProps {
  onOpenEnquiry: (source?: string) => void;
}

export const DeveloperSection: React.FC<DeveloperSectionProps> = ({ onOpenEnquiry }) => {
  const commitments = [
    {
      title: '100% Clear Titles & Approvals',
      desc: 'Every layout is legally scrutinized and sanctions obtained from DTCP & RERA before project launch.',
      icon: ShieldCheck
    },
    {
      title: 'Customer-Centric Documentation',
      desc: 'Transparent handover processes with end-to-end registration assistance and bank loan coordination.',
      icon: HeartHandshake
    },
    {
      title: 'Infrastructure Integrity',
      desc: 'High engineering standards for internal roads, street lighting, drainage channels, and green avenues.',
      icon: Award
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#DDE4DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F8F6EF] border border-[#C9A227]/40 text-[#0B3B2E] text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" />
            <span>DEVELOPER LEGACY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B3B2E] font-serif tracking-tight">
            About VIP Housing
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#66736B]">
            A trusted real-estate brand dedicated to creating thoughtfully planned residential layouts and empowering families with secure land ownership.
          </p>
        </div>

        {/* 4 Editable Stat Counters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-14">
          {developerStats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-[#F7F8F5] rounded-2xl p-6 border border-[#DDE4DE] text-center hover:border-[#166534] transition-colors"
            >
              <span className="text-3xl sm:text-4xl font-black text-[#166534] font-mono tracking-tight block mb-1">
                {stat.value}
              </span>
              <h3 className="text-xs sm:text-sm font-bold text-[#17201B] uppercase tracking-wider mb-2">
                {stat.label}
              </h3>
              <p className="text-xs text-gray-500 leading-snug">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Philosophy & Approach Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#F8F6EF] rounded-3xl p-6 sm:p-10 border border-[#C9A227]/30">
          
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#166534] bg-white px-3 py-1 rounded-full border border-green-200">
              Our Vision &amp; Commitment
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0B3B2E] font-serif">
              Building Trust Through Transparency and Quality
            </h3>
            <p className="text-sm text-[#66736B] leading-relaxed">
              At <strong className="text-gray-900">VIP Housing</strong>, our mission is to make premium residential plot ownership accessible, legally unencumbered, and rewarding. We select prime growth corridors in Tamil Nadu and equip every layout with comprehensive infrastructure for long-term community living.
            </p>
            <p className="text-sm text-[#66736B] leading-relaxed">
              Our projects are designed with careful attention to road widths, water provisions, green parks, and clear demarcation, ensuring a seamless experience from your first enquiry to your final deed registration.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                id="talk-to-advisor-btn"
                onClick={() => onOpenEnquiry('About VIP Housing - Talk to Advisor')}
                className="bg-[#166534] hover:bg-[#0B3B2E] text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-green-900/15 flex items-center gap-2 text-sm transition-all cursor-pointer"
              >
                <span>Talk to Our Property Advisor</span>
                <ArrowRight className="w-4 h-4 text-[#ECC850]" />
              </button>
              <a
                href={`tel:${projectConfig.phone}`}
                className="text-xs font-bold text-[#0B3B2E] hover:text-[#166534] flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#166534]" />
                <span>Call {projectConfig.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Right 3 Pillars */}
          <div className="lg:col-span-6 space-y-3.5">
            {commitments.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-5 border border-[#DDE4DE] shadow-sm flex items-start gap-4 hover:border-green-300 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#0B3B2E] text-[#ECC850] flex items-center justify-center shrink-0">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#17201B] font-serif mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#66736B] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
