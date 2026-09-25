import React, { useState } from 'react';
import {
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Camera,
  ArrowRight
} from 'lucide-react';
import { galleryImages } from '../data/projectData';

interface GallerySectionProps {
  onOpenEnquiry: (source?: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenEnquiry }) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);

  const currentImage = galleryImages[selectedIndex] || galleryImages[0];

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section id="gallery" className="py-10 sm:py-16 lg:py-20 bg-[#F7F8F5]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-[#F8F6EF] border border-[#C9A227]/40 text-[#0B3B2E] text-[11px] sm:text-xs font-bold uppercase tracking-widest shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" />
            <span>Growth Town — Site Gallery</span>
          </div>
        </div>

        {/* Large Featured Viewer */}
        <div className="relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 sm:border-4 border-white aspect-[4/3] sm:aspect-[21/9] max-h-[520px] mb-4 sm:mb-6 group">
          <img
            src={currentImage.url}
            alt={currentImage.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none"></div>

          {/* Top Left Badge */}
          <div className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 bg-black/60 backdrop-blur-md px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg border border-white/20 text-white text-[11px] sm:text-xs font-semibold flex items-center gap-1.5">
            <Camera className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#ECC850]" />
            <span className="capitalize">{currentImage.category} View</span>
          </div>

          {/* Top Right Fullscreen Button */}
          <button
            onClick={() => setLightboxOpen(true)}
            className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 w-7 h-7 sm:w-9 sm:h-9 rounded-lg bg-black/60 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all cursor-pointer"
            aria-label="Open Fullscreen Image"
          >
            <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ECC850]" />
          </button>

          {/* Prev / Next Controls */}
          {galleryImages.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all cursor-pointer z-10"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all cursor-pointer z-10"
                aria-label="Next Image"
              >
                <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
              </button>
            </>
          )}

          {/* Caption Overlay */}
          <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-4 sm:left-4 sm:right-4 bg-black/75 backdrop-blur-md p-2.5 sm:p-4 rounded-xl sm:rounded-2xl border border-white/10 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3">
            <div>
              <h3 className="text-xs sm:text-lg font-bold font-serif text-[#ECC850]">
                {currentImage.title}
              </h3>
              <p className="text-[10px] sm:text-sm text-gray-300 line-clamp-1 sm:line-clamp-none">
                {currentImage.caption}
              </p>
            </div>
            <button
              onClick={() => onOpenEnquiry(`Gallery Image - ${currentImage.title}`)}
              className="bg-[#166534] hover:bg-[#1f7c42] text-white text-[10px] sm:text-xs font-bold py-1.5 px-3 sm:py-2 sm:px-4 rounded-lg sm:rounded-xl flex items-center gap-1 sm:gap-1.5 shadow shrink-0 cursor-pointer"
            >
              <span>Enquire Plots</span>
              <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </button>
          </div>
        </div>

        {/* Thumbnail Strip */}
        <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-thin">
          {galleryImages.map((img, idx) => (
            <button
              key={img.id}
              onClick={() => setSelectedIndex(idx)}
              className={`relative shrink-0 w-20 sm:w-32 h-14 sm:h-20 rounded-lg sm:rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                selectedIndex === idx
                  ? 'border-[#C9A227] ring-2 ring-[#C9A227]/40 scale-105 shadow-md'
                  : 'border-transparent opacity-70 hover:opacity-100'
              }`}
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex flex-col items-center justify-center p-4">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative max-w-5xl max-h-[75vh] w-full flex items-center justify-center">
            <img
              src={currentImage.url}
              alt={currentImage.title}
              className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl"
            />
          </div>

          <div className="mt-4 text-center text-white max-w-2xl px-4">
            <h3 className="text-xl font-bold font-serif text-[#ECC850] mb-1">
              {currentImage.title}
            </h3>
            <p className="text-sm text-gray-300 mb-4">
              {currentImage.caption}
            </p>
            <div className="flex justify-center gap-3">
              <button
                onClick={handlePrev}
                className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-sm font-semibold text-white flex items-center gap-1 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" /> Prev
              </button>
              <button
                onClick={() => {
                  setLightboxOpen(false);
                  onOpenEnquiry(`Lightbox View - ${currentImage.title}`);
                }}
                className="px-5 py-2 rounded-lg bg-[#ECC850] text-[#0B3B2E] font-bold text-sm shadow cursor-pointer"
              >
                Enquire for Site Visit
              </button>
              <button
                onClick={handleNext}
                className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-sm font-semibold text-white flex items-center gap-1 cursor-pointer"
              >
                Next <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
