import React from 'react';
import { Sparkles, MapPin, Phone, Mail, Clock, ShieldCheck, MessageSquare, Building2 } from 'lucide-react';
import { projectConfig } from '../data/projectData';
import { LeadForm } from './LeadForm';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-10 sm:py-20 lg:py-24 bg-[#F7F8F5]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3.5 sm:py-1 rounded-full bg-[#F8F6EF] border border-[#C9A227]/40 text-[#0B3B2E] text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-2 sm:mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" />
            <span>DIRECT CONNECT</span>
          </div>
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B3B2E] font-serif tracking-tight">
            Schedule a Site Visit &amp; Enquire
          </h2>
          <p className="mt-1.5 sm:mt-3 text-xs sm:text-base text-[#66736B]">
            Connect with our dedicated property advisory team to arrange a free guided site tour or receive complete plot sanction documents.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
          
          {/* Left Column: Visit / Enquire Info */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            <div className="bg-[#0B3B2E] text-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-xl border border-green-900/40 relative overflow-hidden">
              {/* Background gradient */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#166534]/30 rounded-full blur-3xl -z-0"></div>

              <div className="relative z-10 space-y-4 sm:space-y-6">
                <div>
                  <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-[#ECC850] block mb-0.5 sm:mb-1">
                    Visit / Enquire
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
                    {projectConfig.companyName}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-emerald-200/80">
                    Official Project Sales &amp; Experience Desk
                  </p>
                </div>

                {/* Contact Points */}
                <div className="space-y-3 sm:space-y-4 pt-2 border-t border-white/10 text-xs sm:text-sm">
                  {/* Project */}
                  <div className="flex items-start gap-2.5 sm:gap-3.5">
                    <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-white/10 text-[#ECC850] flex items-center justify-center shrink-0">
                      <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] sm:text-xs text-gray-400 block font-medium">Project Name:</span>
                      <strong className="text-white font-bold text-xs sm:text-sm">{projectConfig.projectName}</strong>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-2.5 sm:gap-3.5">
                    <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-white/10 text-[#ECC850] flex items-center justify-center shrink-0">
                      <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] sm:text-xs text-gray-400 block font-medium">Location:</span>
                      <strong className="text-white font-bold text-xs sm:text-sm">{projectConfig.location}, {projectConfig.state}</strong>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-2.5 sm:gap-3.5">
                    <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-white/10 text-[#ECC850] flex items-center justify-center shrink-0">
                      <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] sm:text-xs text-gray-400 block font-medium">Direct Telephone:</span>
                      <a
                        href={`tel:${projectConfig.phone}`}
                        className="text-base sm:text-lg font-black text-[#ECC850] hover:underline"
                      >
                        {projectConfig.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-start gap-2.5 sm:gap-3.5">
                    <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-white/10 text-[#ECC850] flex items-center justify-center shrink-0">
                      <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] sm:text-xs text-gray-400 block font-medium">Site Visit Desk:</span>
                      <span className="text-gray-200 text-xs sm:text-sm">Monday to Sunday: 9:00 AM – 7:00 PM</span>
                    </div>
                  </div>
                </div>

                {/* Direct WhatsApp Callout */}
                <div className="p-3 sm:p-4 bg-white/10 rounded-xl sm:rounded-2xl border border-white/15">
                  <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                    <span className="text-[11px] sm:text-xs font-bold text-[#ECC850]">WhatsApp Enquiries</span>
                    <span className="text-[9px] sm:text-[10px] bg-[#25D366] text-white font-bold px-2 py-0.5 rounded-full">Active</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-gray-300 mb-2.5 sm:mb-3 leading-snug">
                    Message our team for instant price list PDFs and video walkthroughs of the layout.
                  </p>
                  <a
                    href={`https://wa.me/${projectConfig.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(projectConfig.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-2 sm:py-2.5 px-3 sm:px-4 rounded-xl text-xs flex items-center justify-center gap-1.5 sm:gap-2 transition-all shadow"
                  >
                    <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span>Chat on WhatsApp (+91 {projectConfig.phoneDisplay})</span>
                  </a>
                </div>

              </div>
            </div>

            {/* Free Cab / Transport Notice */}
            <div className="p-3 sm:p-4 bg-white rounded-xl sm:rounded-2xl border border-[#DDE4DE] flex items-center gap-2.5 sm:gap-3 text-[11px] sm:text-xs text-gray-600 shadow-sm">
              <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#166534] shrink-0" />
              <span>Complimentary site visit pick-up assistance available from major junctions upon prior appointment.</span>
            </div>
          </div>

          {/* Right Column: Full Lead Form */}
          <div className="lg:col-span-7">
            <LeadForm
              source="Contact Section Form"
              title="Request Project Details & Price Sheet"
              submitButtonText="Request Project Details"
              compact={false}
            />
          </div>

        </div>

      </div>
    </section>
  );
};
