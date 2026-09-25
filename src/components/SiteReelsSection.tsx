import React, { useState, useRef } from 'react';
import {
  Play,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Video,
  Eye,
  Heart,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  X
} from 'lucide-react';

interface SiteReelsSectionProps {
  onOpenEnquiry: (source?: string, defaultPlot?: string) => void;
}

interface ReelItem {
  id: string;
  youtubeId: string;
  tag: string;
  title: string;
  subtitle: string;
  statBadge: string;
  youtubeUrl: string;
  poster: string;
  views: string;
  likes: string;
}

const REELS: ReelItem[] = [
  {
    id: 'reel-dtcp-plots',
    youtubeId: '6_yQq9pO-0w',
    tag: 'DTCP & RERA Approved',
    title: 'DTCP & RERA Approved Plots in Padalam Junction!',
    subtitle: 'VIP Growth Town — 176 Villa Plots ready for immediate registration',
    statBadge: 'DTCP No. 246/2026',
    youtubeUrl: 'https://www.youtube.com/shorts/6_yQq9pO-0w',
    poster: 'https://i.ytimg.com/vi/6_yQq9pO-0w/hqdefault.jpg',
    views: '4.8K',
    likes: '420'
  },
  {
    id: 'reel-gst-road',
    youtubeId: 'lmpeuNBCFPs',
    tag: 'Prime Location',
    title: 'Just Minutes from GST Road! 🚀',
    subtitle: 'Growth Town Villa Plots directly near Padalam Junction corridor',
    statBadge: '1 Min from GST Road',
    youtubeUrl: 'https://www.youtube.com/shorts/lmpeuNBCFPs',
    poster: 'https://i.ytimg.com/vi/lmpeuNBCFPs/hqdefault.jpg',
    views: '5.6K',
    likes: '510'
  },
  {
    id: 'reel-investment-plot',
    youtubeId: 'dDvvNLr2qMY',
    tag: 'Best Investment',
    title: 'Best Investment Plot in Chengalpattu 📍',
    subtitle: 'Growth Town Padalam — High appreciation potential villa plots',
    statBadge: 'Starting from ₹12 Lakhs*',
    youtubeUrl: 'https://www.youtube.com/shorts/dDvvNLr2qMY',
    poster: 'https://i.ytimg.com/vi/dDvvNLr2qMY/hqdefault.jpg',
    views: '6.2K',
    likes: '580'
  }
];

export const SiteReelsSection: React.FC<SiteReelsSectionProps> = ({ onOpenEnquiry }) => {
  const [currentMobileIndex, setCurrentMobileIndex] = useState(0);
  const [modalVideoIndex, setModalVideoIndex] = useState<number | null>(null);
  const [likedStates, setLikedStates] = useState<{ [key: string]: boolean }>({});
  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);

  const toggleLike = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setLikedStates((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const nextMobileSlide = () => {
    setCurrentMobileIndex((prev) => (prev + 1) % REELS.length);
  };

  const prevMobileSlide = () => {
    setCurrentMobileIndex((prev) => (prev - 1 + REELS.length) % REELS.length);
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
    const minSwipeDistance = 45;
    if (distance > minSwipeDistance) {
      nextMobileSlide();
    } else if (distance < -minSwipeDistance) {
      prevMobileSlide();
    }
    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  const currentModalReel = modalVideoIndex !== null ? REELS[modalVideoIndex] : null;

  const renderReelCard = (reel: ReelItem, idx: number) => {
    const isLiked = likedStates[reel.id] ?? false;

    return (
      <div
        onClick={() => setModalVideoIndex(idx)}
        className="group relative aspect-[9/16] w-full rounded-3xl overflow-hidden bg-black shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-white/60 cursor-pointer"
      >
        {/* Poster Preview */}
        <img
          src={reel.poster}
          alt={reel.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Top & Bottom Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/25 to-black/70 pointer-events-none"></div>

        {/* Top Badges Bar */}
        <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10">
          <div className="flex items-center gap-1.5">
            <span className="px-2.5 py-1 rounded-full bg-red-600 text-white text-[10px] font-black uppercase tracking-wider flex items-center gap-1 shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
              SHORTS {idx + 1}
            </span>
            <span className="px-2 py-0.5 rounded-full bg-black/60 text-emerald-200 text-[10px] font-semibold backdrop-blur-md border border-white/10">
              {reel.tag}
            </span>
          </div>

          <a
            href={reel.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="w-8 h-8 rounded-full bg-black/60 hover:bg-red-600 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all cursor-pointer shadow-md"
            aria-label="Open on YouTube"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Center Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <div className="w-16 h-16 rounded-full bg-red-600 group-hover:scale-110 text-white flex items-center justify-center shadow-2xl transition-all duration-300 border-2 border-white/40 ring-4 ring-red-600/30">
            <Play className="w-8 h-8 fill-current ml-1" />
          </div>
        </div>

        {/* Right Floating Social Interaction Strip */}
        <div className="absolute right-3 bottom-24 flex flex-col items-center gap-3 z-10">
          {/* Like Button */}
          <button
            onClick={(e) => toggleLike(e, reel.id)}
            className="flex flex-col items-center text-white cursor-pointer"
          >
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-md transition-all ${
                isLiked ? 'bg-red-600 text-white' : 'bg-black/50 hover:bg-black/70 text-white border border-white/20'
              }`}
            >
              <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
            </div>
            <span className="text-[10px] font-bold mt-1 text-gray-200">
              {isLiked ? (parseInt(reel.likes) + 1).toString() : reel.likes}
            </span>
          </button>

          {/* Views Count */}
          <div className="flex flex-col items-center text-white">
            <div className="w-9 h-9 rounded-full bg-black/50 flex items-center justify-center backdrop-blur-md border border-white/20">
              <Eye className="w-4 h-4 text-emerald-300" />
            </div>
            <span className="text-[10px] font-bold mt-1 text-gray-200">{reel.views}</span>
          </div>
        </div>

        {/* Bottom Reel Caption & Call-to-Action */}
        <div className="absolute bottom-0 inset-x-0 p-3.5 sm:p-4 z-10 space-y-2 text-white">
          {/* Stat Highlight Pill */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#166534]/90 border border-[#ECC850]/40 text-[#ECC850] text-[10px] font-bold shadow-md backdrop-blur-sm">
            <ShieldCheck className="w-3 h-3 text-[#ECC850]" />
            <span>{reel.statBadge}</span>
          </div>

          {/* Title & Description */}
          <div>
            <h3 className="font-serif font-bold text-sm sm:text-base text-white leading-snug">
              {reel.title}
            </h3>
            <p className="text-[11px] text-gray-300 line-clamp-2 mt-0.5 leading-relaxed">
              {reel.subtitle}
            </p>
          </div>

          {/* Action Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenEnquiry(`YouTube Shorts CTA: ${reel.title}`);
            }}
            className="w-full bg-[#ECC850] hover:bg-[#dfba38] text-[#0B3B2E] font-black text-xs py-2 px-3 rounded-xl flex items-center justify-center gap-1.5 shadow-md cursor-pointer transition-transform active:scale-95 mt-1"
          >
            <span>Book Site Visit Transport</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    );
  };

  return (
    <section id="site-reels" className="py-10 sm:py-16 lg:py-20 bg-[#F7F8F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0B3B2E]/10 border border-[#0B3B2E]/20 text-[#0B3B2E] text-xs font-bold uppercase tracking-wider mb-2 sm:mb-3">
            <Video className="w-3.5 h-3.5 text-[#C9A227]" />
            <span>Site Experience in 30 Seconds</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B3B2E] font-serif tracking-tight">
            Watch VIP Growth Town in YouTube Shorts
          </h2>
          <p className="mt-1.5 sm:mt-2 text-xs sm:text-base text-[#66736B] leading-relaxed">
            Real vertical video walkthroughs capturing the master community layout, approved 40ft blacktop internal roads, and ready-for-registration villa plots.
          </p>
        </div>

        {/* MOBILE ONLY SLIDING VIEW (< lg) */}
        <div className="block lg:hidden">
          <div
            className="relative max-w-[310px] sm:max-w-[340px] mx-auto overflow-hidden touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Sliding Reel Track */}
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentMobileIndex * 100}%)` }}
            >
              {REELS.map((reel, idx) => (
                <div key={reel.id} className="w-full shrink-0 px-1">
                  {renderReelCard(reel, idx)}
                </div>
              ))}
            </div>

            {/* Left Prev Arrow Button */}
            <button
              onClick={prevMobileSlide}
              aria-label="Previous Reel"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/55 backdrop-blur-md text-white flex items-center justify-center border border-white/20 shadow-lg hover:bg-black/80 transition-all cursor-pointer z-20 active:scale-90"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>

            {/* Right Next Arrow Button */}
            <button
              onClick={nextMobileSlide}
              aria-label="Next Reel"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/55 backdrop-blur-md text-white flex items-center justify-center border border-white/20 shadow-lg hover:bg-black/80 transition-all cursor-pointer z-20 active:scale-90"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Mobile Sliding Pagination Controls & Indicator */}
          <div className="mt-4 flex flex-col items-center gap-2">
            <div className="flex items-center gap-2">
              {REELS.map((reel, idx) => (
                <button
                  key={reel.id}
                  onClick={() => setCurrentMobileIndex(idx)}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    currentMobileIndex === idx
                      ? 'w-7 h-2.5 bg-[#0B3B2E]'
                      : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to Reel ${idx + 1}`}
                />
              ))}
            </div>
            <span className="text-[11px] font-semibold text-[#66736B]">
              Swipe or tap arrows to view • Video {currentMobileIndex + 1} of {REELS.length}
            </span>
          </div>
        </div>

        {/* DESKTOP ONLY 3-COLUMN GRID (>= lg) */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
          {REELS.map((reel, idx) => (
            <div key={reel.id}>
              {renderReelCard(reel, idx)}
            </div>
          ))}
        </div>

        {/* Bottom Banner Note */}
        <div className="mt-8 text-center">
          <button
            onClick={() => onOpenEnquiry('Reels Section Full Layout CTA')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0B3B2E] hover:bg-[#166534] text-[#ECC850] text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#ECC850]" />
            <span>Want a 1-on-1 Guided Site Walkthrough? Book Free Transport</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </button>
        </div>

      </div>

      {/* FULLSCREEN SHORTS VIEWER MODAL (Single Video Instance) */}
      {currentModalReel && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-3 sm:p-6"
          onClick={() => setModalVideoIndex(null)}
        >
          {/* Top Close Bar */}
          <div
            className="w-full max-w-md flex items-center justify-between mb-3 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-full bg-red-600 text-white text-[10px] font-black uppercase tracking-wider">
                YouTube Shorts
              </span>
              <span className="text-xs text-gray-300 font-semibold line-clamp-1">
                {currentModalReel.title}
              </span>
            </div>
            <button
              onClick={() => setModalVideoIndex(null)}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all cursor-pointer"
              aria-label="Close Video Viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Centered 9:16 Video Player with Prev / Next */}
          <div
            className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[9/16] max-h-[75vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${currentModalReel.youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
              title={currentModalReel.title}
              className="w-full h-full rounded-2xl sm:rounded-3xl shadow-2xl border-2 border-white/20"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />

            {/* Modal Prev / Next Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setModalVideoIndex((prev) => (prev! - 1 + REELS.length) % REELS.length);
              }}
              className="absolute -left-4 sm:-left-14 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all cursor-pointer z-30"
              aria-label="Previous Video"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setModalVideoIndex((prev) => (prev! + 1) % REELS.length);
              }}
              className="absolute -right-4 sm:-right-14 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all cursor-pointer z-30"
              aria-label="Next Video"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Modal Bottom CTA Actions */}
          <div
            className="mt-4 flex items-center gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <a
              href={currentModalReel.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center gap-1.5 transition-all"
            >
              <ExternalLink className="w-3.5 h-3.5 text-red-400" />
              <span>Open on YouTube</span>
            </a>

            <button
              onClick={() => {
                const title = currentModalReel.title;
                setModalVideoIndex(null);
                onOpenEnquiry(`Modal Shorts CTA: ${title}`);
              }}
              className="px-5 py-2 rounded-xl bg-[#ECC850] hover:bg-[#dfba38] text-[#0B3B2E] text-xs font-bold shadow-lg cursor-pointer flex items-center gap-1.5 transition-all"
            >
              <span>Enquire for Site Visit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
