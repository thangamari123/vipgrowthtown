import React from 'react';
import { Sparkles, ShieldCheck, TrendingUp, Landmark, Construction, Award, CheckCircle2, Phone, ArrowRight, Route } from 'lucide-react';
import { projectConfig } from '../data/projectData';

interface InvestmentSectionProps {
  onOpenEnquiry: (source?: string) => void;
}

export const InvestmentSection: React.FC<InvestmentSectionProps> = ({ onOpenEnquiry }) => {
  const growthDrivers = [
    {
      title: 'DTCP & RERA Approved',
      desc: 'DTCP Technical Approval No. 246/2026 for Phase 2. Clear, marketable titles with complete legal documentation ready for verification.',
      icon: ShieldCheck,
      highlight: 'DTCP 246/2026'
    },
    {
      title: 'Direct GST Road Corridor',
      desc: 'Padalam Junction is strategically positioned along the Chennai–Trichy Highway (NH-45), connecting Chengalpattu with industrial and commercial hubs.',
      icon: Route,
      highlight: 'NH-45 Highway Access'
    },
    {
      title: 'Up to 80% Bank Loan Available',
      desc: 'Project approved by leading nationalized and private banks — SBI, HDFC, ICICI, Axis Bank, and LIC Housing Finance.',
      icon: Landmark,
      highlight: 'SBI • HDFC • ICICI'
    },
    {
      title: 'High Appreciation Potential',
      desc: 'Padalam and the Chengalpattu peripheral belt are witnessing steady appreciation driven by industrial growth, infrastructure projects, and residential demand.',
      icon: TrendingUp,
      highlight: 'Rapid Growth Zone'
    },
    {
      title: 'Ready Infrastructure',
      desc: 'Internal roads, boundary walls, street lighting, and water facilities already developed on site — not promised for a later date.',
      icon: Construction,
      highlight: 'Already In Place'
    },
    {
      title: 'VIP Housing Trust',
      desc: 'Over 25+ years of real estate excellence in Tamil Nadu, 50,000+ satisfied customers, and a track record of delivering 200+ landmark projects.',
      icon: Award,
      highlight: '25+ Years of Trust'
    }
  ];

  const buyerBenefits = [
    'DTCP approved layout with clear title',
    'Ready infrastructure — internal roads, boundary wall, street lighting',
    'Nationalized and private bank loan assistance up to 80%',
    'Free site visit transport assistance from Chengalpattu / GST Road',
    'Transparent paperwork and registration support',
    'Clear demarcated plots with individual boundary stones',
    '24/7 security and maintenance support'
  ];

  return (
    <section className="py-12 sm:py-20 lg:py-24 bg-[#0B3B2E] text-white relative overflow-hidden border-b border-green-900/60">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(#C9A227_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 border border-[#ECC850]/40 text-[#ECC850] text-xs font-bold uppercase tracking-widest mb-3 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Clear Growth Drivers</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-serif tracking-tight">
            Why Invest in Growth Town
          </h2>
          <p className="mt-3 text-sm sm:text-base text-emerald-100/80 leading-relaxed">
            Strategic location on the GST Road corridor with rapid infrastructure growth, approved status, and strong developer backing.
          </p>
        </div>

        {/* 6 Growth Driver Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-12">
          {growthDrivers.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="bg-white/5 hover:bg-white/10 border border-white/15 rounded-2xl p-6 sm:p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#ECC850]/50 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#166534] to-[#0B3B2E] text-[#ECC850] border border-white/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#ECC850] bg-white/10 px-2.5 py-1 rounded-full border border-white/10">
                      {item.highlight}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white font-serif mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Growth Town Buyers Enjoy Checklist Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20">
          <h3 className="text-lg sm:text-xl font-bold font-serif text-[#ECC850] mb-4 text-center sm:text-left">
            Growth Town buyers enjoy:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
            {buyerBenefits.map((benefit, i) => (
              <div key={i} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-black/20 border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-[#ECC850] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-gray-200 leading-snug">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <p className="text-sm font-semibold text-white">Book a free site visit to see Phase 2 in person</p>
              <p className="text-xs text-gray-300">Plots demarcated with clear boundary stones ready for inspection.</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <button
                onClick={() => onOpenEnquiry('Why Invest Section')}
                className="bg-gradient-to-r from-[#ECC850] via-[#C9A227] to-[#9E7D14] hover:from-[#f3d46a] hover:to-[#b08b1a] text-[#0B3B2E] font-black py-3 px-6 rounded-xl text-xs sm:text-sm shadow transition-all cursor-pointer"
              >
                Book a Site Visit
              </button>
              <a
                href={`tel:${projectConfig.phone}`}
                className="bg-white/15 hover:bg-white/25 text-white font-bold py-3 px-5 rounded-xl text-xs sm:text-sm flex items-center gap-2 transition-all"
              >
                <Phone className="w-4 h-4 text-[#ECC850]" />
                <span>Call: {projectConfig.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
