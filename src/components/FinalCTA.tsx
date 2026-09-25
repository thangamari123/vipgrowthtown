import React from 'react';
import { Award, ArrowRight, Phone, CheckCircle2, ShieldCheck } from 'lucide-react';
import { projectConfig } from '../data/projectData';

interface FinalCTAProps {
  onOpenEnquiry: (source?: string) => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenEnquiry }) => {
  return (
    <section className="relative py-20 sm:py-28 bg-[#0B3B2E] overflow-hidden text-white">
      {/* Aerial Background Image & Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop"
          alt="VIP Growth Town Aerial Plots"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B3B2E] via-[#0B3B2E]/90 to-[#0B3B2E]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#ECC850_1px,transparent_1px)] [background-size:28px_28px] opacity-15"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#ECC850]/50 text-[#ECC850] text-xs font-bold uppercase tracking-widest backdrop-blur-md shadow">
          <Award className="w-4 h-4" />
          <span>READY FOR REGISTRATION • DTCP &amp; RERA APPROVED</span>
        </div>

        {/* Main Headings */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif tracking-tight text-white leading-tight">
          Your Future Address <span className="gold-gradient-text">Starts Here</span>
        </h2>

        <p className="text-base sm:text-xl text-emerald-100/90 max-w-2xl mx-auto leading-relaxed">
          Own a premium villa plot at <strong>VIP Growth Town, Chengalpattu – Padalam</strong> starting from <strong>₹12 Lakhs*</strong>.
        </p>

        {/* Quick Highlights Bar */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-2 text-xs sm:text-sm text-gray-200">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#ECC850]" />
            600–2400 sq.ft Plots
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#ECC850]" />
            Gated Community
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#ECC850]" />
            Bank Loan Support
          </span>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <button
            id="final-register-btn"
            onClick={() => onOpenEnquiry('Final CTA Section')}
            className="bg-gradient-to-r from-[#ECC850] via-[#C9A227] to-[#9E7D14] hover:from-[#f3d46a] hover:to-[#b08b1a] text-[#0B3B2E] font-black py-4 px-8 sm:px-10 rounded-xl shadow-2xl shadow-amber-500/30 text-base sm:text-lg flex items-center gap-2.5 transition-transform duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Register Your Interest</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <a
            id="final-call-btn"
            href={`tel:${projectConfig.phone}`}
            className="bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold py-4 px-7 sm:px-8 rounded-xl backdrop-blur-md text-base sm:text-lg flex items-center gap-2.5 transition-all"
          >
            <Phone className="w-5 h-5 text-[#ECC850]" />
            <span>Call {projectConfig.phoneDisplay}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
