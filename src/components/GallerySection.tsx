import React, { useState } from 'react';
import {
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X
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
            alt="Growth Town Site Photo"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
          />

          {/* Top Right Fullscreen Button */}
          <button
            onClick={() => setLightboxOpen(true)}
            className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-black/60 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all cursor-pointer z-10"
            aria-label="Open Fullscreen Image"
          >
            <Maximize2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#ECC850]" />
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
        </div>

        {/* Thumbnail Strip */}
        <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-thin justify-center">
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
                alt="Growth Town Thumbnail"
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
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer z-20"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative max-w-5xl max-h-[80vh] w-full flex items-center justify-center">
            <img
              src={currentImage.url}
              alt="Growth Town Fullscreen View"
              className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
            />
          </div>

          <div className="mt-4 text-center text-white max-w-2xl px-4">
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
                  onOpenEnquiry(`Lightbox View`);
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
