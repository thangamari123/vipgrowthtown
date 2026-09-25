import React, { useState, useMemo } from 'react';
import {
  Sparkles,
  Search,
  ChevronDown,
  Phone,
  Mail,
  FileText,
  ShieldCheck,
  MapPin,
  MessageSquare,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ExternalLink,
  Building2,
  Calendar,
  Layers,
  Award
} from 'lucide-react';
import {
  officialFaqList,
  officialFaqBanner,
  DetailedFAQItem
} from '../data/officialFaqData';

interface FAQPageProps {
  onNavigateHome: () => void;
  onOpenEnquiry: (source?: string, defaultPlotSize?: string) => void;
}

export const FAQPage: React.FC<FAQPageProps> = ({ onNavigateHome, onOpenEnquiry }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [openFaqIds, setOpenFaqIds] = useState<string[]>([]);

  const categories = [
    'All',
    'Overview & Phase 2',
    'Approvals & Legal',
    'Pricing & Finance',
    'Location & Connectivity',
    'Infrastructure & Amenities',
    'Site Visit & Booking'
  ];

  const filteredFaqs = useMemo(() => {
    return officialFaqList.filter((item) => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesQuery =
        item.question.toLowerCase().includes(query) ||
        item.answer.toLowerCase().includes(query) ||
        (item.highlightTag && item.highlightTag.toLowerCase().includes(query)) ||
        item.category.toLowerCase().includes(query);

      return matchesCategory && matchesQuery;
    });
  }, [searchQuery, selectedCategory]);

  const toggleFaq = (id: string) => {
    setOpenFaqIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleExpandAll = () => {
    setOpenFaqIds(filteredFaqs.map((f) => f.id));
  };

  const handleCollapseAll = () => {
    setOpenFaqIds([]);
  };

  const handleActionClick = (link: { label: string; actionType: string; value?: string }, question: string) => {
    if (link.actionType === 'call') {
      window.location.href = `tel:${link.value || officialFaqBanner.phoneRaw}`;
    } else if (link.actionType === 'email') {
      window.location.href = `mailto:${link.value || officialFaqBanner.email}`;
    } else if (link.actionType === 'whatsapp') {
      const msg = encodeURIComponent(`Hi, I was reading the FAQ: "${question}" and would like more details on Growth Town.`);
      window.open(`https://wa.me/91${link.value || officialFaqBanner.phoneRaw}?text=${msg}`, '_blank');
    } else if (link.actionType === 'download') {
      onOpenEnquiry(`FAQ Page - Download Layout PDF (${question})`);
    } else {
      onOpenEnquiry(`FAQ Page - ${link.label}`);
    }
  };

  return (
    <main className="pt-20 sm:pt-24 pb-20 bg-[#F7F8F5] min-h-screen">
      <div className="max-w-5xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Top Breadcrumb & Navigation */}
        <div className="flex items-center justify-between py-3 mb-4 border-b border-[#DDE4DE]">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-[#66736B]">
            <button
              onClick={onNavigateHome}
              className="hover:text-[#0B3B2E] font-medium flex items-center gap-1 cursor-pointer transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </button>
            <span>/</span>
            <span className="text-[#0B3B2E] font-bold">Frequently Asked Questions</span>
          </div>

          <button
            onClick={() => onOpenEnquiry('FAQ Page Header CTA')}
            className="bg-[#166534] hover:bg-[#0B3B2E] text-white text-[11px] sm:text-xs font-bold py-1.5 px-3 rounded-lg flex items-center gap-1 shadow transition-colors cursor-pointer"
          >
            <span>Book Site Visit</span>
          </button>
        </div>

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F8F6EF] border border-[#C9A227]/40 text-[#0B3B2E] text-[11px] sm:text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" />
            <span>OFFICIAL BUYER KNOWLEDGE BASE</span>
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B3B2E] font-serif tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="mt-3 text-sm sm:text-base lg:text-lg text-[#66736B] leading-relaxed">
            Everything buyers usually ask before booking a site visit to Growth Town.
          </p>
        </div>

        {/* Official Phase Notice Banner */}
        <div className="mb-8 p-4 sm:p-6 bg-gradient-to-r from-[#0B3B2E] to-[#166534] text-white rounded-2xl sm:rounded-3xl shadow-xl border border-emerald-800 relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#ECC850]/10 rounded-full blur-2xl pointer-events-none"></div>
          
          <div className="relative z-10">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#ECC850] text-[#0B3B2E] flex items-center justify-center shrink-0 shadow">
                <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="space-y-1.5 flex-1">
                <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-[#ECC850] block">
                  Official Project Status Update
                </span>
                <p className="text-sm sm:text-base font-bold text-white leading-snug">
                  {officialFaqBanner.phaseNotice}
                </p>
              </div>
            </div>

            {/* Verification Metadata Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mt-4 pt-4 border-t border-white/15 text-[11px] sm:text-xs">
              <div className="bg-white/10 p-2.5 rounded-xl border border-white/10">
                <span className="text-gray-300 block text-[10px]">Phase 1 Approval</span>
                <strong className="text-white font-semibold">DTCP 140/2025</strong>
                <span className="text-rose-300 text-[10px] block font-bold mt-0.5">● Sold Out</span>
              </div>
              <div className="bg-white/10 p-2.5 rounded-xl border border-white/10">
                <span className="text-gray-300 block text-[10px]">Phase 2 Approval</span>
                <strong className="text-[#ECC850] font-semibold">DTCP 246/2026</strong>
                <span className="text-emerald-300 text-[10px] block font-bold mt-0.5">● Open for Booking</span>
              </div>
              <div className="bg-white/10 p-2.5 rounded-xl border border-white/10">
                <span className="text-gray-300 block text-[10px]">RERA Registration</span>
                <strong className="text-white font-mono text-[10px] sm:text-xs font-semibold">TNRERA/35/LO/3821/2025</strong>
              </div>
              <div className="bg-white/10 p-2.5 rounded-xl border border-white/10">
                <span className="text-gray-300 block text-[10px]">Authorized Phone</span>
                <a href={`tel:${officialFaqBanner.phoneRaw}`} className="text-[#ECC850] font-bold hover:underline block">
                  {officialFaqBanner.contactNumber}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl sm:rounded-3xl border border-[#DDE4DE] shadow-sm mb-6 space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search all 19 questions (e.g., Phase 2, DTCP, contact number, price, schools, title...)"
              className="w-full pl-11 pr-4 py-3 bg-[#F7F8F5] border border-gray-200 rounded-xl text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#166534] focus:bg-white transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-700 font-semibold"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Chips */}
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <div className="flex gap-1.5 sm:gap-2 flex-wrap overflow-x-auto pb-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#0B3B2E] text-[#ECC850] shadow-sm'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Bulk Expand / Collapse Controls */}
            <div className="flex items-center gap-2 text-xs text-[#166534] font-semibold">
              <button
                onClick={handleExpandAll}
                className="hover:underline cursor-pointer"
              >
                Expand All
              </button>
              <span>•</span>
              <button
                onClick={handleCollapseAll}
                className="hover:underline cursor-pointer"
              >
                Collapse All
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Count Indicator */}
        <div className="flex items-center justify-between mb-4 px-1 text-xs text-[#66736B]">
          <span>
            Showing <strong>{filteredFaqs.length}</strong> of <strong>{officialFaqList.length}</strong> questions
          </span>
          {searchQuery && (
            <span className="text-emerald-700 font-medium">
              Filtered by "{searchQuery}"
            </span>
          )}
        </div>

        {/* Accordion Questions List */}
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-gray-300 p-6">
            <HelpCircle className="w-10 h-10 text-gray-300 mx-auto mb-2" />
            <h3 className="text-base font-bold text-gray-800">No questions found matching your search</h3>
            <p className="text-xs text-gray-500 mt-1 mb-4">
              Try searching with different terms or contact our advisory team directly.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="bg-[#166534] text-white text-xs font-bold py-2 px-4 rounded-lg cursor-pointer"
            >
              Reset Search &amp; Filters
            </button>
          </div>
        ) : (
          <div className="space-y-3 sm:space-y-4">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = openFaqIds.includes(faq.id);
              const originalIndex = officialFaqList.findIndex((item) => item.id === faq.id) + 1;

              return (
                <article
                  key={faq.id}
                  id={faq.id}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-white border-[#166534] shadow-md ring-1 ring-[#166534]/20'
                      : 'bg-white border-[#DDE4DE] hover:border-gray-300 shadow-sm'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left p-4 sm:p-5 flex items-start sm:items-center justify-between gap-3 sm:gap-4 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start sm:items-center gap-2.5 sm:gap-3 flex-1">
                      <span className="text-xs font-mono font-black text-[#166534] bg-[#F8F6EF] px-2 py-1 rounded-md border border-[#DDE4DE] shrink-0">
                        Q{originalIndex}
                      </span>
                      <div>
                        <h2 className="text-sm sm:text-base font-bold text-[#17201B] font-serif leading-snug">
                          {faq.question}
                        </h2>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-[10px] uppercase tracking-wider font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60">
                            {faq.category}
                          </span>
                          {faq.highlightTag && (
                            <span className="text-[10px] font-semibold text-amber-900 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/60">
                              {faq.highlightTag}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 mt-1 sm:mt-0 ${
                        isOpen
                          ? 'bg-[#0B3B2E] text-white rotate-180'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 text-xs sm:text-sm text-[#4A5550] leading-relaxed border-t border-gray-100 bg-[#FAFAF8]">
                      <div className="pt-3.5 space-y-3">
                        <p className="whitespace-pre-line text-gray-800 leading-relaxed font-normal">
                          {faq.answer}
                        </p>

                        {/* Interactive Quick Links Inside the Answer */}
                        {faq.relatedLinks && faq.relatedLinks.length > 0 && (
                          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-gray-200/60">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                              Direct Actions:
                            </span>
                            {faq.relatedLinks.map((link, lIdx) => (
                              <button
                                key={lIdx}
                                onClick={() => handleActionClick(link, faq.question)}
                                className="inline-flex items-center gap-1 text-[11px] font-bold text-[#166534] hover:text-[#0B3B2E] bg-white hover:bg-emerald-50 border border-emerald-300/80 px-2.5 py-1 rounded-lg shadow-xs transition-colors cursor-pointer"
                              >
                                {link.actionType === 'call' && <Phone className="w-3 h-3 text-[#166534]" />}
                                {link.actionType === 'email' && <Mail className="w-3 h-3 text-[#166534]" />}
                                {link.actionType === 'whatsapp' && <MessageSquare className="w-3 h-3 text-[#25D366]" />}
                                {link.actionType === 'download' && <FileText className="w-3 h-3 text-[#C9A227]" />}
                                <span>{link.label}</span>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        )}

        {/* Bottom Callout: Still have a question? Book a free site visit */}
        <section className="mt-12 sm:mt-16 bg-[#0B3B2E] text-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-emerald-900/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#166534]/40 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#ECC850] text-[11px] sm:text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-[#ECC850]" />
              <span>DIRECT DEVELOPER SUPPORT</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-serif text-white tracking-tight">
              Still have a question? Book a free site visit
            </h2>

            <p className="text-xs sm:text-base text-gray-200 leading-relaxed max-w-2xl mx-auto">
              Our sales advisors can arrange guided site visit transport from Chengalpattu Railway Junction or Padalam Bus Stand, provide live GPS pins, and share complete DTCP 246/2026 sanction copies.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                id="faq-book-site-visit-btn"
                onClick={() => onOpenEnquiry('FAQ Page Bottom - Book a free site visit')}
                className="w-full sm:w-auto bg-[#ECC850] hover:bg-[#dfba38] active:bg-[#c9a227] text-[#0B3B2E] font-black text-xs sm:text-sm py-3 px-6 rounded-xl shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book a Free Site Visit</span>
              </button>

              <a
                id="faq-call-btn"
                href={`tel:${officialFaqBanner.phoneRaw}`}
                className="w-full sm:w-auto bg-[#166534] hover:bg-[#1b7a3f] text-white font-bold text-xs sm:text-sm py-3 px-6 rounded-xl border border-emerald-400/40 shadow-lg flex items-center justify-center gap-2 transition-all"
              >
                <Phone className="w-4 h-4 text-[#ECC850]" />
                <span>Call {officialFaqBanner.contactNumber}</span>
              </a>

              <a
                id="faq-whatsapp-btn"
                href={`https://wa.me/91${officialFaqBanner.phoneRaw}?text=${encodeURIComponent("Hi VIP Housing, I am interested in Growth Town Phase 2. Please share details and arrange a site visit.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm py-3 px-6 rounded-xl shadow flex items-center justify-center gap-2 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-[11px] text-gray-300 border-t border-white/10">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#ECC850]" />
                Official Email: <a href={`mailto:${officialFaqBanner.email}`} className="text-white underline hover:text-[#ECC850] ml-1">{officialFaqBanner.email}</a>
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#ECC850]" />
                Official Domain: <span className="text-white font-semibold ml-1">{officialFaqBanner.officialWebsite}</span>
              </span>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
};
