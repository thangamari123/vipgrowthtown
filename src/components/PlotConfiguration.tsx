import React, { useState, useRef } from 'react';
import { Check, ArrowRight, Sparkles, Home, ChevronLeft, ChevronRight } from 'lucide-react';
import { plotOptions, projectConfig } from '../data/projectData';

interface PlotConfigurationProps {
  onOpenEnquiry: (source?: string, defaultPlot?: string) => void;
}

export const PlotConfiguration: React.FC<PlotConfigurationProps> = ({ onOpenEnquiry }) => {
  const [activeTab, setActiveTab] = useState<'all' | '600' | '1200' | '1800' | '2400'>('all');
  const [mobileSlideIndex, setMobileSlideIndex] = useState<number>(0);

  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);

  const filteredPlots = activeTab === 'all'
    ? plotOptions
    : plotOptions.filter((p) => p.sizeSqFt.toString() === activeTab);

  const handleTabChange = (tab: 'all' | '600' | '1200' | '1800' | '2400') => {
    setActiveTab(tab);
    setMobileSlideIndex(0);
  };

  const nextMobileSlide = () => {
    setMobileSlideIndex((prev) => (prev + 1) % filteredPlots.length);
  };

  const prevMobileSlide = () => {
    setMobileSlideIndex((prev) => (prev - 1 + filteredPlots.length) % filteredPlots.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartXRef.current || !touchEndXRef.current) return;
    const distance = touchStartXRef.current - touchEndXRef.current;
    const minSwipeDistance = 40;
    if (distance > minSwipeDistance) {
      nextMobileSlide();
    } else if (distance < -minSwipeDistance) {
      prevMobileSlide();
    }
    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  return (
    <section id="plot-config" className="py-6 sm:py-10 lg:py-14 bg-[#F7F8F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-4 sm:mb-6">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#0B3B2E]/10 border border-[#0B3B2E]/20 text-[#0B3B2E] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1.5">
            <Sparkles className="w-3 h-3 text-[#C9A227]" />
            <span>Plot Configurations</span>
          </div>
          <h2 className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-[#0B3B2E] font-serif tracking-tight">
            Choose the Plot That Fits Your Plan
          </h2>
          <p className="mt-1 text-[11px] sm:text-xs lg:text-sm text-[#66736B]">
            From smart starter footprints to expansive corner villa sites, discover DTCP &amp; RERA approved plots ready for registration.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-1 sm:gap-1.5 mb-4 sm:mb-6">
          <button
            onClick={() => handleTabChange('all')}
            className={`px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg text-[11px] sm:text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'all'
                ? 'bg-[#0B3B2E] text-[#ECC850] shadow-xs'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            All Sizes
          </button>
          {plotOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => handleTabChange(opt.sizeSqFt.toString() as any)}
              className={`px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg text-[11px] sm:text-xs font-bold transition-all cursor-pointer ${
                activeTab === opt.sizeSqFt.toString()
                  ? 'bg-[#0B3B2E] text-[#ECC850] shadow-xs'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {opt.sizeSqFt} sq.ft
            </button>
          ))}
        </div>

        {/* ================= MOBILE ONLY SQUARE SLIDING CAROUSEL (< sm) ================= */}
        <div className="block sm:hidden">
          <div
            className="relative w-full max-w-[340px] mx-auto overflow-hidden touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Sliding Track */}
            <div
              className="flex transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${mobileSlideIndex * 100}%)` }}
            >
              {filteredPlots.map((plot) => {
                const isPopular = plot.popular;
                return (
                  <div key={plot.id} className="w-full shrink-0 px-1">
                    {/* Proper Square Card (Increased Size) */}
                    <div
                      className={`relative aspect-square w-full bg-white rounded-2xl p-4 sm:p-5 flex flex-col justify-between border shadow-lg transition-all ${
                        isPopular
                          ? 'border-[#C9A227] ring-2 ring-[#C9A227]/40'
                          : 'border-gray-200'
                      }`}
                    >
                      {/* Top Bar: Title & Size Badge */}
                      <div>
                        {isPopular && (
                          <div className="inline-block bg-gradient-to-r from-[#ECC850] to-[#C9A227] text-[#0B3B2E] text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-1.5 shadow-xs">
                            ★ Most Popular
                          </div>
                        )}
                        <div className="flex items-center justify-between gap-2">
                          <div>
                            <span className="text-[9px] font-bold uppercase tracking-wider text-[#66736B] block leading-none">
                              Villa Plot Tier
                            </span>
                            <h3 className="text-lg font-bold text-[#0B3B2E] font-serif leading-tight mt-0.5">
                              {plot.name}
                            </h3>
                          </div>
                          <div className="bg-[#0B3B2E]/10 px-2.5 py-1 rounded-xl border border-[#0B3B2E]/15 text-right shrink-0">
                            <span className="text-base font-black text-[#166534] leading-none block">
                              {plot.sizeSqFt}
                            </span>
                            <span className="text-[9px] text-gray-500 font-bold block leading-none mt-0.5">
                              sq.ft
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Middle: Dimension & Price Box */}
                      <div className="bg-[#F8F6EF] rounded-xl p-2.5 border border-[#DDE4DE] space-y-1">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-500 font-medium">Dimension:</span>
                          <strong className="text-gray-900 font-bold">{plot.dimensions}</strong>
                        </div>
                        <div className="flex items-center justify-between text-xs pt-1 border-t border-gray-200/60">
                          <span className="text-gray-500 font-medium">Starting Price:</span>
                          <strong className="text-sm font-black text-[#166534]">
                            {plot.priceTag}
                          </strong>
                        </div>
                      </div>

                      {/* Middle 2: Features / Fit */}
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5 text-xs text-[#0B3B2E] font-bold">
                          <Home className="w-3.5 h-3.5 text-[#C9A227] shrink-0" />
                          <span className="truncate">{plot.suitableFor}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-[11px] text-gray-600">
                          <Check className="w-3.5 h-3.5 text-[#166534] shrink-0" />
                          <span className="truncate">{plot.features[0]}</span>
                        </div>
                      </div>

                      {/* Bottom CTA Button */}
                      <button
                        onClick={() => onOpenEnquiry(`Plot Card - ${plot.name} (${plot.sizeSqFt} sq.ft)`, `${plot.sizeSqFt} sq.ft`)}
                        className={`w-full py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer transition-all active:scale-95 shadow-md ${
                          isPopular
                            ? 'bg-[#0B3B2E] text-[#ECC850] hover:bg-[#166534]'
                            : 'bg-[#166534] text-white hover:bg-[#0B3B2E]'
                        }`}
                      >
                        <span>
                          {plot.sizeSqFt === 600
                            ? 'Check Availability'
                            : plot.sizeSqFt === 2400
                            ? 'Enquire Now'
                            : 'Get Price Details'}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Floating Left & Right Prev/Next Arrows (Only if multiple items) */}
            {filteredPlots.length > 1 && (
              <>
                <button
                  onClick={prevMobileSlide}
                  aria-label="Previous Plot"
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center shadow-lg backdrop-blur-xs hover:bg-black/80 transition-all cursor-pointer z-10 active:scale-90"
                >
                  <ChevronLeft className="w-4 h-4 text-white" />
                </button>
                <button
                  onClick={nextMobileSlide}
                  aria-label="Next Plot"
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center shadow-lg backdrop-blur-xs hover:bg-black/80 transition-all cursor-pointer z-10 active:scale-90"
                >
                  <ChevronRight className="w-4 h-4 text-white" />
                </button>
              </>
            )}
          </div>

          {/* Mobile Sliding Pagination Dots */}
          {filteredPlots.length > 1 && (
            <div className="mt-3.5 flex flex-col items-center gap-1.5">
              <div className="flex items-center gap-1.5">
                {filteredPlots.map((plot, idx) => (
                  <button
                    key={plot.id}
                    onClick={() => setMobileSlideIndex(idx)}
                    className={`transition-all duration-300 rounded-full cursor-pointer ${
                      mobileSlideIndex === idx
                        ? 'w-7 h-2 bg-[#0B3B2E]'
                        : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to plot slide ${idx + 1}`}
                  />
                ))}
              </div>
              <span className="text-[11px] font-semibold text-[#66736B]">
                Swipe to browse • Plot {mobileSlideIndex + 1} of {filteredPlots.length}
              </span>
            </div>
          )}
        </div>

        {/* ================= DESKTOP & TABLET GRID VIEW (>= sm) ================= */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          {filteredPlots.map((plot) => {
            const isPopular = plot.popular;
            return (
              <div
                key={plot.id}
                className={`relative bg-white rounded-xl overflow-hidden border transition-all duration-200 flex flex-col justify-between hover:shadow-lg ${
                  isPopular
                    ? 'border-[#C9A227] shadow-md ring-1 ring-[#C9A227]/40'
                    : 'border-gray-200 shadow-xs hover:border-[#166534]/40'
                }`}
              >
                {/* Popular Pill */}
                {isPopular && (
                  <div className="bg-gradient-to-r from-[#ECC850] via-[#C9A227] to-[#9E7D14] text-[#0B3B2E] text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-center py-0.5">
                    ★ Most Popular Choice
                  </div>
                )}

                <div className="p-3 sm:p-3.5">
                  {/* Card Title & Size Badge */}
                  <div className="flex items-center justify-between gap-2 mb-2 pb-1.5 border-b border-gray-100">
                    <div>
                      <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-wider text-[#66736B] block leading-none">
                        Villa Plot
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-[#0B3B2E] font-serif leading-tight mt-0.5">
                        {plot.name}
                      </h3>
                    </div>
                    <div className="text-right shrink-0 bg-[#0B3B2E]/5 px-2 py-0.5 rounded-md border border-[#0B3B2E]/10">
                      <span className="text-sm sm:text-base font-black text-[#166534] leading-none block">
                        {plot.sizeSqFt}
                      </span>
                      <span className="text-[8px] text-gray-500 font-bold block leading-none mt-0.5">
                        sq.ft
                      </span>
                    </div>
                  </div>

                  {/* Compact Dimensions & Price Strip */}
                  <div className="bg-[#F8F6EF] rounded-md p-1.5 sm:p-2 mb-2 border border-[#DDE4DE] space-y-0.5">
                    <div className="flex items-center justify-between text-[10px] sm:text-[11px]">
                      <span className="text-gray-500 font-medium">Dimension:</span>
                      <strong className="text-gray-900 font-bold">{plot.dimensions}</strong>
                    </div>
                    <div className="flex items-center justify-between text-[10px] sm:text-[11px] pt-0.5 border-t border-gray-200/50">
                      <span className="text-gray-500 font-medium">Price:</span>
                      <strong className="text-[11px] sm:text-xs font-black text-[#166534]">
                        {plot.priceTag}
                      </strong>
                    </div>
                  </div>

                  {/* Suitable for */}
                  <div className="mb-2 text-[10px] sm:text-[11px]">
                    <div className="flex items-center gap-1 text-[#0B3B2E] font-bold">
                      <Home className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#C9A227] shrink-0" />
                      <span className="truncate">{plot.suitableFor}</span>
                    </div>
                    <p className="text-[9px] sm:text-[10px] text-gray-500 line-clamp-1 mt-0.5">
                      {plot.idealFor}
                    </p>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-0.5 border-t border-gray-100 pt-1.5">
                    {plot.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-1 text-[9px] sm:text-[10px] text-gray-600">
                        <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#166534] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Compact Card CTA */}
                <div className="p-3 sm:p-3.5 pt-0 mt-auto">
                  <button
                    onClick={() => onOpenEnquiry(`Plot Card - ${plot.name} (${plot.sizeSqFt} sq.ft)`, `${plot.sizeSqFt} sq.ft`)}
                    className={`w-full py-1.5 sm:py-2 px-2.5 rounded-md text-[11px] sm:text-xs font-bold flex items-center justify-center gap-1 cursor-pointer transition-all duration-150 active:scale-98 ${
                      isPopular
                        ? 'bg-[#0B3B2E] hover:bg-[#166534] text-[#ECC850] shadow-xs'
                        : 'bg-[#166534] hover:bg-[#0B3B2E] text-white'
                    }`}
                  >
                    <span>
                      {plot.sizeSqFt === 600
                        ? 'Check Availability'
                        : plot.sizeSqFt === 2400
                        ? 'Enquire Now'
                        : 'Get Price Details'}
                    </span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mandatory Disclaimer */}
        <div className="mt-3 sm:mt-4 text-center text-[9px] sm:text-[10px] text-gray-500 max-w-xl mx-auto italic">
          {projectConfig.pricingDisclaimer}
        </div>

      </div>
    </section>
  );
};
