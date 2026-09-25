import React, { useState } from 'react';
import { Sparkles, ChevronDown, ArrowRight, Phone, AlertCircle, FileText } from 'lucide-react';
import { officialFaqList, officialFaqBanner } from '../data/officialFaqData';

interface FAQSectionProps {
  onOpenEnquiry: (source?: string) => void;
  onNavigateToFaqPage?: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenEnquiry, onNavigateToFaqPage }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Display top 6 questions on the landing page preview with a button to view all 19
  const previewFaqs = officialFaqList.slice(0, 6);

  const toggleFAQ = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="py-8 sm:py-12 lg:py-14 bg-white border-b border-[#DDE4DE]">
      <div className="max-w-3xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#F8F6EF] border border-[#C9A227]/40 text-[#0B3B2E] text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3 h-3 text-[#C9A227]" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0B3B2E] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-[#66736B]">
            Everything buyers usually ask before booking a site visit to Growth Town.
          </p>
        </div>

        {/* Phase 1 & 2 Status Notice */}
        <div className="mb-5 p-3 sm:p-4 bg-gradient-to-r from-[#0B3B2E] to-[#166534] text-white rounded-xl shadow-xs border border-emerald-800 flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-[#ECC850] shrink-0 mt-0.5" />
          <div className="text-[11px] sm:text-xs">
            <span className="font-bold text-[#ECC850] uppercase tracking-wider text-[10px] block mb-0.5">
              Official Project Status
            </span>
            <p className="text-gray-100 font-medium leading-relaxed">
              {officialFaqBanner.phaseNotice}
            </p>
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-2.5 sm:space-y-3">
          {previewFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.id}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#F8F6EF] border-[#166534]/50 shadow-xs'
                    : 'bg-white border-[#DDE4DE] hover:border-gray-300'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left p-3 sm:p-3.5 flex items-center justify-between gap-2.5 sm:gap-3 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-xs sm:text-sm font-semibold text-[#17201B] flex items-center gap-2">
                    <span className="text-[10px] sm:text-[11px] font-mono font-bold text-[#166534] bg-white px-1.5 py-0.5 rounded border border-[#DDE4DE] shrink-0">
                      Q{idx + 1}
                    </span>
                    {faq.question}
                  </span>
                  <div
                    className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white flex items-center justify-center text-[#0B3B2E] border border-[#DDE4DE] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#0B3B2E] text-white border-[#0B3B2E]' : ''
                    }`}
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-3 pb-3 sm:px-4 sm:pb-3.5 pt-0 text-[11px] sm:text-xs text-[#4A5550] leading-relaxed border-t border-gray-200/50">
                    <p className="pt-2 text-gray-800 leading-relaxed font-normal">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* View All 19 Questions CTA Button */}
        {onNavigateToFaqPage && (
          <div className="mt-4 sm:mt-5 text-center">
            <button
              id="view-all-faqs-btn"
              onClick={onNavigateToFaqPage}
              className="inline-flex items-center gap-1.5 bg-[#0B3B2E] hover:bg-[#166534] text-[#ECC850] font-semibold text-[11px] sm:text-xs py-2 px-3.5 rounded-lg sm:rounded-xl shadow-xs transition-all cursor-pointer group"
            >
              <FileText className="w-3.5 h-3.5 text-[#ECC850]" />
              <span>View All 19 Questions on Dedicated FAQ Page</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        )}

        {/* Still have questions banner */}
        <div className="mt-6 sm:mt-8 p-3.5 sm:p-4 bg-[#F7F8F5] rounded-xl sm:rounded-2xl border border-[#DDE4DE] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-center sm:text-left">
            <h4 className="text-xs sm:text-sm font-semibold text-[#0B3B2E]">
              Still have a question? Book a free site visit
            </h4>
            <p className="text-[10px] sm:text-[11px] text-gray-500 mt-0.5">
              Speak directly with our authorized sales desk at {officialFaqBanner.contactNumber} for site visit transport.
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto justify-center">
            <button
              onClick={() => onOpenEnquiry('FAQ Section Question')}
              className="bg-[#166534] hover:bg-[#0B3B2E] text-white text-[11px] sm:text-xs font-semibold py-1.5 sm:py-2 px-3 sm:px-3.5 rounded-lg shadow-xs transition-all cursor-pointer"
            >
              Book Site Visit
            </button>
            <a
              href={`tel:${officialFaqBanner.phoneRaw}`}
              className="bg-white border border-[#DDE4DE] hover:bg-gray-50 text-[#0B3B2E] text-[11px] sm:text-xs font-semibold py-1.5 sm:py-2 px-3 rounded-lg flex items-center gap-1.5 transition-all"
            >
              <Phone className="w-3 h-3 text-[#166534]" />
              <span className="font-mono text-[11px] sm:text-xs">{officialFaqBanner.contactNumber}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
