import React, { useState } from 'react';
import {
  Download,
  CheckCircle2,
  ArrowRight,
  Eye,
  Layers,
  ShieldCheck,
  X,
  User,
  Phone,
  Mail,
  Loader2,
  FileText,
  MessageSquare,
  Maximize2,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Sparkles,
  MapPin
} from 'lucide-react';
import layoutPlanImg from '../images/growth-town-phase2-layout-plan.jpg';
import { projectConfig } from '../data/projectData';
import { saveLead } from '../utils/leadStorage';

const layoutPdfUrl = '/Growth-Town-Phase2-Approved-Layout.pdf';

interface MasterPlanSectionProps {
  onOpenEnquiry: (source?: string) => void;
}

export const MasterPlanSection: React.FC<MasterPlanSectionProps> = ({ onOpenEnquiry }) => {
  // Lightbox / Fullscreen Image Zoom State
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  // PDF Download Modal States
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    plotSize: 'Any Size'
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);

  const triggerPdfDownload = () => {
    try {
      const link = document.createElement('a');
      link.href = layoutPdfUrl;
      link.setAttribute('download', 'Growth-Town-Phase2-Approved-Layout.pdf');
      link.setAttribute('target', '_blank');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (e) {
      console.error('Failed to trigger automatic download:', e);
      window.open(layoutPdfUrl, '_blank');
    }
  };

  const handleOpenDownloadModal = () => {
    setErrors({});
    setIsDownloaded(false);
    setIsDownloadModalOpen(true);
  };

  const handleCloseDownloadModal = () => {
    setIsDownloadModalOpen(false);
    setIsDownloaded(false);
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your full name';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    const cleanPhone = formData.phone.replace(/[\s\-+]/g, '');
    const standard10 = cleanPhone.startsWith('91') && cleanPhone.length === 12
      ? cleanPhone.slice(2)
      : cleanPhone;

    if (!cleanPhone) {
      newErrors.phone = 'Please enter your 10-digit mobile number';
    } else if (!/^[6-9]\d{9}$/.test(standard10)) {
      newErrors.phone = 'Enter valid 10-digit Indian mobile number';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmitAndDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      // Save lead to local storage / CRM store
      saveLead({
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        plotSize: formData.plotSize,
        source: 'Phase 2 Masterplan PDF Download',
        message: 'Requested DTCP Approval No. 246/2026 Layout PDF'
      });

      // Immediately trigger the PDF download
      triggerPdfDownload();

      setIsSubmitting(false);
      setIsDownloaded(true);
    }, 600);
  };

  const whatsappUrl = `https://wa.me/${projectConfig.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    `Hello VIP Housing, I have reviewed the Growth Town Phase 2 DTCP Approved Layout (Approval No. 246/2026). My Name: ${formData.name || 'Interested Buyer'}. Please share the current plot availability sheet and pricing.`
  )}`;

  return (
    <section id="masterplan" className="py-8 sm:py-12 lg:py-14 bg-white border-b border-[#DDE4DE]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-5 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#F8F6EF] border border-[#C9A227]/40 text-[#0B3B2E] text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C9A227]" />
            <span>DTCP Technical Approval No. 246/2026</span>
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0B3B2E] tracking-tight">
            Growth Town Phase 2 — Now Open
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-[#66736B]">
            The newly DTCP-approved extension to Growth Town, released for booking after Phase 1 sold out.
          </p>
        </div>

        {/* 3 Key Spec Cards (Compact 3-Col Responsive on Mobile & Desktop) */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4 mb-5 sm:mb-7 max-w-4xl mx-auto">
          <div className="p-2.5 sm:p-3.5 rounded-xl bg-[#F8F6EF] border border-[#DDE4DE] hover:border-[#166534] transition-all text-center">
            <span className="text-sm sm:text-xl lg:text-2xl font-bold text-[#0B3B2E] block leading-tight">
              176 Plots
            </span>
            <p className="text-[10px] sm:text-xs text-[#66736B] mt-0.5 leading-tight">
              Across 6.32-acre layout
            </p>
          </div>
          <div className="p-2.5 sm:p-3.5 rounded-xl bg-[#F8F6EF] border border-[#DDE4DE] hover:border-[#166534] transition-all text-center">
            <span className="text-sm sm:text-xl lg:text-2xl font-bold text-[#166534] block leading-tight">
              DTCP 246/2026
            </span>
            <p className="text-[10px] sm:text-xs text-[#66736B] mt-0.5 leading-tight">
              Survey Nos. 125/1–126/8B
            </p>
          </div>
          <div className="p-2.5 sm:p-3.5 rounded-xl bg-[#F8F6EF] border border-[#DDE4DE] hover:border-[#166534] transition-all text-center">
            <span className="text-sm sm:text-xl lg:text-2xl font-bold text-[#0B3B2E] block leading-tight">
              2 Parks + Roads
            </span>
            <p className="text-[10px] sm:text-xs text-[#66736B] mt-0.5 leading-tight">
              7.2m–12m wide avenues
            </p>
          </div>
        </div>

        {/* Masterplan Visual & Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-start">
          
          {/* Main Layout Plan Image Card */}
          <div className="lg:col-span-8">
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-sm border border-[#DDE4DE] bg-[#F8F6EF] group">
              
              {/* Top Tag & Fullscreen Trigger */}
              <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-10 flex items-center gap-1.5 bg-[#0B3B2E]/90 backdrop-blur-md px-2 sm:px-3 py-1 rounded-lg text-white text-[10px] sm:text-xs font-semibold shadow-xs">
                <Layers className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#ECC850]" />
                <span>Phase 2 Approved Layout Plan</span>
              </div>

              <button
                onClick={() => {
                  setZoomLevel(1);
                  setIsLightboxOpen(true);
                }}
                className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10 bg-white/90 hover:bg-white text-[#0B3B2E] px-2 sm:px-2.5 py-1 rounded-lg text-[10px] sm:text-xs font-semibold shadow flex items-center gap-1 cursor-pointer transition-all border border-gray-200"
                title="View Fullscreen"
              >
                <Maximize2 className="w-3 h-3 text-[#166534]" />
                <span className="hidden sm:inline">Enlarge Map</span>
                <span className="sm:hidden">Zoom</span>
              </button>

              {/* Layout Plan Image Display */}
              <div
                onClick={() => {
                  setZoomLevel(1);
                  setIsLightboxOpen(true);
                }}
                className="cursor-pointer overflow-hidden flex items-center justify-center p-2 sm:p-3 bg-white"
              >
                <img
                  src={layoutPlanImg}
                  alt="Growth Town Phase 2 DTCP-approved layout plan map, Padalam Junction, Chengalpattu"
                  className="w-full h-auto max-h-[420px] sm:max-h-[500px] object-contain rounded-lg transition-transform duration-300 group-hover:scale-[1.01]"
                  loading="lazy"
                />
              </div>

              {/* Bottom Quick Bar */}
              <div className="flex items-center justify-between gap-2 bg-[#0B3B2E] px-3 py-2 text-white text-[10px] sm:text-xs">
                <div className="flex items-center gap-1.5 text-gray-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ECC850] animate-pulse"></span>
                  <span className="truncate">DTCP Tech Sanction 246/2026 • 176 Plots</span>
                </div>
                <button
                  onClick={() => {
                    setZoomLevel(1);
                    setIsLightboxOpen(true);
                  }}
                  className="text-[#ECC850] hover:underline font-semibold flex items-center gap-1 shrink-0 cursor-pointer"
                >
                  <Eye className="w-3 h-3" />
                  <span>Tap to Zoom</span>
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] sm:text-xs text-[#66736B] mt-1.5 px-1">
              <span>* High-resolution official master layout plan (Pazhayanur, Chengalpattu)</span>
              <button
                onClick={handleOpenDownloadModal}
                className="text-[#166534] font-semibold hover:underline cursor-pointer"
              >
                Request Layout PDF →
              </button>
            </div>
          </div>

          {/* Right Info: Layout Specifications & CTAs */}
          <div className="lg:col-span-4 space-y-3 sm:space-y-4">
            
            {/* Key Layout Features Card */}
            <div className="bg-[#F8F6EF] rounded-xl sm:rounded-2xl p-3.5 sm:p-4 border border-[#C9A227]/40 shadow-xs">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#166534] bg-white px-2 py-0.5 rounded-full border border-green-200">
                  Approved Features
                </span>
                <span className="text-[10px] font-mono font-bold text-gray-500">
                  Phase 2 Extension
                </span>
              </div>

              <h3 className="text-sm sm:text-base font-bold text-[#0B3B2E] mb-2">
                DTCP Approved Layout Highlights
              </h3>

              <div className="space-y-2 text-[11px] sm:text-xs text-gray-700">
                <div className="flex items-start gap-2 bg-white/70 p-2 rounded-lg border border-gray-200/60">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#166534] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0B3B2E] block">176 Demarcated Plots</strong>
                    <span className="text-gray-500 text-[10px] sm:text-[11px]">Sizes from 600 sq.ft to 2400 sq.ft with corner boundary stones.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 bg-white/70 p-2 rounded-lg border border-gray-200/60">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#166534] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0B3B2E] block">24ft, 30ft &amp; 40ft Blacktop Roads</strong>
                    <span className="text-gray-500 text-[10px] sm:text-[11px]">Engineered storm drains and avenue plantations.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 bg-white/70 p-2 rounded-lg border border-gray-200/60">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#166534] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0B3B2E] block">2 Landscaped Parks</strong>
                    <span className="text-gray-500 text-[10px] sm:text-[11px]">Dedicated open recreational green zones for families.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 bg-white/70 p-2 rounded-lg border border-gray-200/60">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#166534] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0B3B2E] block">Direct Padalam Junction Connectivity</strong>
                    <span className="text-gray-500 text-[10px] sm:text-[11px]">Seconds from GST Road (NH-45) with wide access.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Masterplan Action Buttons */}
            <div className="space-y-2 pt-0.5">
              <button
                id="download-masterplan-pdf-btn"
                onClick={handleOpenDownloadModal}
                className="w-full bg-[#166534] hover:bg-[#0B3B2E] text-white font-semibold py-2.5 sm:py-3 px-3.5 rounded-xl shadow-xs flex items-center justify-center gap-2 text-xs sm:text-sm transition-all duration-200 cursor-pointer active:scale-98"
              >
                <Download className="w-3.5 h-3.5 text-[#ECC850]" />
                <span>Download Approved Layout (PDF)</span>
              </button>

              <button
                id="book-phase2-site-visit-btn"
                onClick={() => onOpenEnquiry('Book a Phase 2 Site Visit')}
                className="w-full bg-[#F8F6EF] hover:bg-[#eae6d6] border border-[#C9A227]/50 text-[#0B3B2E] font-semibold py-2.5 sm:py-3 px-3.5 rounded-xl flex items-center justify-center gap-1.5 text-xs sm:text-sm transition-all duration-200 cursor-pointer active:scale-98"
              >
                <span>Book a Phase 2 Site Visit</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#166534]" />
              </button>

              <button
                onClick={() => {
                  setZoomLevel(1);
                  setIsLightboxOpen(true);
                }}
                className="w-full bg-white hover:bg-gray-50 border border-[#DDE4DE] text-[#0B3B2E] font-semibold py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 text-[11px] sm:text-xs transition-all cursor-pointer"
              >
                <Maximize2 className="w-3 h-3 text-[#166534]" />
                <span>View Fullscreen High-Res Layout Map</span>
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* ================= FULLSCREEN / LIGHTBOX MODAL ================= */}
      {isLightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col justify-between p-2 sm:p-4 animate-in fade-in duration-200"
        >
          {/* Lightbox Header Bar */}
          <div className="flex items-center justify-between gap-2 bg-[#0B3B2E] text-white p-2.5 sm:p-3 rounded-xl border border-white/10 shadow-lg shrink-0">
            <div className="flex items-center gap-2 truncate">
              <div className="w-7 h-7 rounded-lg bg-[#ECC850] text-[#0B3B2E] flex items-center justify-center font-bold text-xs shrink-0">
                <FileText className="w-4 h-4" />
              </div>
              <div className="truncate">
                <h3 className="text-xs sm:text-sm font-bold text-white truncate">
                  Growth Town Phase 2 — Approved Layout Plan
                </h3>
                <p className="text-[10px] text-emerald-200">
                  DTCP Tech Sanction 246/2026 • Pazhayanur, Chengalpattu
                </p>
              </div>
            </div>

            {/* Zoom Controls & Close */}
            <div className="flex items-center gap-1.5 shrink-0">
              <button
                onClick={() => setZoomLevel((z) => Math.max(0.75, z - 0.25))}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer transition-colors"
                title="Zoom Out"
              >
                <ZoomOut className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
              <button
                onClick={() => setZoomLevel(1)}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer transition-colors"
                title="Reset Zoom"
              >
                <RotateCcw className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </button>
              <button
                onClick={() => setZoomLevel((z) => Math.min(2.5, z + 0.25))}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer transition-colors"
                title="Zoom In"
              >
                <ZoomIn className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
              <button
                onClick={handleOpenDownloadModal}
                className="hidden sm:inline-flex items-center gap-1 bg-[#166534] hover:bg-[#1f8043] text-white text-xs font-semibold px-2.5 py-1.5 rounded-lg cursor-pointer transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-[#ECC850]" />
                <span>PDF</span>
              </button>
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/20 hover:bg-red-600 text-white flex items-center justify-center cursor-pointer transition-colors ml-1"
                aria-label="Close Lightbox"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Lightbox Image Container (Scrollable/Pannable) */}
          <div className="flex-1 overflow-auto flex items-center justify-center p-2 sm:p-4 my-2">
            <div
              className="transition-transform duration-200 ease-out origin-center flex items-center justify-center min-w-full min-h-full"
              style={{ transform: `scale(${zoomLevel})` }}
            >
              <img
                src={layoutPlanImg}
                alt="Growth Town Phase 2 DTCP Approved Layout Full Map"
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl bg-white p-1"
              />
            </div>
          </div>

          {/* Lightbox Footer Actions */}
          <div className="flex items-center justify-between gap-2 bg-[#0B3B2E]/90 backdrop-blur-md text-white p-2 rounded-xl text-[10px] sm:text-xs shrink-0">
            <span className="text-gray-300">
              Zoom: <strong>{Math.round(zoomLevel * 100)}%</strong> • Pinch or use buttons to adjust
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handleOpenDownloadModal}
                className="bg-[#166534] hover:bg-[#1f8043] text-white font-semibold px-3 py-1 rounded-lg flex items-center gap-1 cursor-pointer"
              >
                <Download className="w-3 h-3 text-[#ECC850]" />
                <span>Download PDF</span>
              </button>
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="bg-white/10 hover:bg-white/20 text-white font-medium px-2.5 py-1 rounded-lg cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= LEAD GATE MODAL FOR PDF DOWNLOAD ================= */}
      {isDownloadModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4"
        >
          {/* Backdrop */}
          <div className="fixed inset-0" onClick={handleCloseDownloadModal}></div>

          <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-200 max-w-md w-full z-10 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#0B3B2E] via-[#166534] to-[#0B3B2E] p-3.5 sm:p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#ECC850] text-[#0B3B2E] flex items-center justify-center font-black">
                  <FileText className="w-4 h-4 text-[#0B3B2E]" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold leading-tight">
                    Download Approved Layout Plan
                  </h3>
                  <p className="text-[10px] text-emerald-200">
                    DTCP Approval No. 246/2026 • PDF
                  </p>
                </div>
              </div>

              <button
                onClick={handleCloseDownloadModal}
                className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close Modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-3.5 sm:p-5">
              {!isDownloaded ? (
                <div>
                  <div className="mb-3 bg-[#F8F6EF] p-2.5 rounded-xl border border-[#DDE4DE] flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#166534] shrink-0" />
                    <p className="text-[10px] sm:text-xs text-[#0B3B2E] font-medium leading-tight">
                      Fill your details below to immediately download the high-resolution DTCP approved layout map.
                    </p>
                  </div>

                  <form onSubmit={handleSubmitAndDownload} className="space-y-3">
                    {/* Name */}
                    <div>
                      <label className="block text-[11px] sm:text-xs font-semibold text-gray-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Ramesh Kumar"
                          className={`w-full pl-8 pr-3 py-1.5 sm:py-2 text-xs bg-gray-50 border rounded-lg sm:rounded-xl focus:bg-white focus:outline-none transition-all ${
                            errors.name ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-200 focus:border-[#166534]'
                          }`}
                        />
                      </div>
                      {errors.name && <p className="text-[10px] text-red-500 mt-0.5">{errors.name}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-[11px] sm:text-xs font-semibold text-gray-700 mb-1">
                        Mobile Number (WhatsApp) <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute left-2.5 top-1/2 -translate-y-1/2 flex items-center gap-1 text-gray-500 font-semibold text-xs border-r pr-1.5">
                          <span>+91</span>
                        </div>
                        <input
                          type="tel"
                          maxLength={10}
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })}
                          placeholder="98765 43210"
                          className={`w-full pl-14 pr-3 py-1.5 sm:py-2 text-xs bg-gray-50 border rounded-lg sm:rounded-xl focus:bg-white focus:outline-none transition-all ${
                            errors.phone ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-200 focus:border-[#166534]'
                          }`}
                        />
                      </div>
                      {errors.phone && <p className="text-[10px] text-red-500 mt-0.5">{errors.phone}</p>}
                    </div>

                    {/* Email (Optional) */}
                    <div>
                      <label className="block text-[11px] sm:text-xs font-semibold text-gray-700 mb-1">
                        Email Address <span className="text-gray-400 font-normal">(Optional)</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="ramesh@example.com"
                          className="w-full pl-8 pr-3 py-1.5 sm:py-2 text-xs bg-gray-50 border border-gray-200 rounded-lg sm:rounded-xl focus:bg-white focus:outline-none focus:border-[#166534] transition-all"
                        />
                      </div>
                      {errors.email && <p className="text-[10px] text-red-500 mt-0.5">{errors.email}</p>}
                    </div>

                    {/* Preferred Plot Size */}
                    <div>
                      <label className="block text-[11px] sm:text-xs font-semibold text-gray-700 mb-1">
                        Interested Plot Size
                      </label>
                      <select
                        value={formData.plotSize}
                        onChange={(e) => setFormData({ ...formData, plotSize: e.target.value })}
                        className="w-full px-2.5 py-1.5 sm:py-2 text-xs bg-gray-50 border border-gray-200 rounded-lg sm:rounded-xl focus:bg-white focus:outline-none focus:border-[#166534] transition-all"
                      >
                        <option value="Any Size">All Plot Sizes (600–2400 sq.ft)</option>
                        <option value="600 sq.ft">600 sq.ft (Smart Starter Plot)</option>
                        <option value="1200 sq.ft">1200 sq.ft (Family Duplex Plot)</option>
                        <option value="1800 sq.ft">1800 sq.ft (Premium Villa Plot)</option>
                        <option value="2400 sq.ft">2400 sq.ft (Elite Estate Plot)</option>
                      </select>
                    </div>

                    {/* Submit & Download Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-2.5 px-4 bg-[#166534] hover:bg-[#0B3B2E] text-white font-semibold rounded-xl text-xs sm:text-sm shadow-sm flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-98 mt-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-[#ECC850]" />
                          <span>Generating &amp; Downloading PDF...</span>
                        </>
                      ) : (
                        <>
                          <Download className="w-3.5 h-3.5 text-[#ECC850]" />
                          <span>Submit &amp; Download Layout (PDF)</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>
              ) : (
                /* Success State with Re-Download Option */
                <div className="text-center py-2 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-[#166534] flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-[#0B3B2E]">
                      PDF Download Started!
                    </h4>
                    <p className="text-[11px] sm:text-xs text-[#66736B] mt-1 max-w-xs mx-auto">
                      Thank you, <strong className="text-gray-900">{formData.name}</strong>! Your copy of <strong>Growth Town Phase 2 DTCP Approved Layout (No. 246/2026)</strong> has been initiated.
                    </p>
                  </div>

                  <div className="bg-[#F8F6EF] p-2.5 rounded-xl border border-[#DDE4DE] space-y-1.5 text-left text-xs">
                    <div className="flex items-center justify-between text-gray-600">
                      <span>Document:</span>
                      <strong className="text-gray-900 text-[11px]">Growth-Town-Phase2-Approved-Layout.pdf</strong>
                    </div>
                    <div className="flex items-center justify-between text-gray-600">
                      <span>Approval:</span>
                      <strong className="text-[#166534] text-[11px]">DTCP Tech Sanction 246/2026</strong>
                    </div>
                  </div>

                  <div className="space-y-2 pt-1">
                    <button
                      onClick={triggerPdfDownload}
                      className="w-full py-2 px-3 bg-[#0B3B2E] hover:bg-[#166534] text-[#ECC850] font-semibold rounded-xl text-xs flex items-center justify-center gap-1.5 shadow cursor-pointer transition-all active:scale-98"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Click Here to Re-Download PDF</span>
                    </button>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2 px-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold rounded-xl text-xs flex items-center justify-center gap-1.5 shadow cursor-pointer transition-all active:scale-98"
                    >
                      <MessageSquare className="w-3.5 h-3.5 fill-current" />
                      <span>Chat with Advisor on WhatsApp</span>
                    </a>
                  </div>

                  <button
                    onClick={handleCloseDownloadModal}
                    className="text-xs text-gray-500 hover:text-gray-700 underline font-medium cursor-pointer pt-0.5 block mx-auto"
                  >
                    Done &amp; Return to Website
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
