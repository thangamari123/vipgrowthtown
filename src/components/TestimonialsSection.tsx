import React, { useState, useRef } from 'react';
import { Sparkles, Star, Quote, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonialsList } from '../data/projectData';

export const TestimonialsSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const children = Array.from(container.children) as HTMLElement[];
    const containerCenter = container.scrollLeft + container.offsetWidth / 2;

    let closestIndex = 0;
    let minDiff = Infinity;

    children.forEach((child, idx) => {
      const childCenter = child.offsetLeft + child.offsetWidth / 2;
      const diff = Math.abs(containerCenter - childCenter);
      if (diff < minDiff) {
        minDiff = diff;
        closestIndex = idx;
      }
    });

    setActiveIndex(closestIndex);
  };

  const scrollToIndex = (index: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const child = container.children[index] as HTMLElement;
    if (child) {
      child.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      setActiveIndex(index);
    }
  };

  const handlePrev = () => {
    const nextIdx = Math.max(activeIndex - 1, 0);
    scrollToIndex(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = Math.min(activeIndex + 1, testimonialsList.length - 1);
    scrollToIndex(nextIdx);
  };

  return (
    <section className="py-16 sm:py-24 bg-[#F7F8F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F8F6EF] border border-[#C9A227]/40 text-[#0B3B2E] text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" />
            <span>BUYER EXPERIENCES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B3B2E] font-serif tracking-tight">
            What Our Customers Say
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#66736B]">
            Real testimonials from families and homeowners who chose VIP Housing for their residential plot purchase in Tamil Nadu.
          </p>
        </div>

        {/* Testimonials List: Sliding Carousel on Mobile, 3-Column Grid on Desktop */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex md:grid md:grid-cols-3 gap-5 sm:gap-6 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none scroll-smooth pb-4 md:pb-0 px-4 sm:px-6 md:px-0 -mx-4 sm:-mx-6 md:mx-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonialsList.map((test) => (
            <div
              key={test.id}
              className="w-[85vw] max-w-[340px] sm:w-[380px] md:w-auto shrink-0 md:shrink snap-center bg-white rounded-3xl p-6 sm:p-7 border border-[#DDE4DE] shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 relative group"
            >
              <div>
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#C9A227]">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-[#166534]/15 group-hover:text-[#166534]/30 transition-colors" />
                </div>

                {/* Testimonial Quote */}
                <p className="text-sm text-[#17201B] leading-relaxed italic mb-6">
                  "{test.quote}"
                </p>
              </div>

              {/* Author Details */}
              <div className="pt-4 border-t border-gray-100">
                <h4 className="text-sm font-bold text-[#0B3B2E] flex items-center gap-1.5">
                  {test.name}
                  {test.verified && (
                    <CheckCircle className="w-3.5 h-3.5 text-[#166534]" title="Verified Buyer" />
                  )}
                </h4>
                <p className="text-xs text-gray-500 mt-0.5">
                  {test.location}
                </p>
                <span className="inline-block mt-1 text-[11px] font-semibold text-[#166534]">
                  {test.plotPurchased}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile-Only Slider Controls (Previous / Next Arrows + Indicators) */}
        <div className="flex md:hidden items-center justify-center gap-4 mt-6">
          <button
            onClick={handlePrev}
            disabled={activeIndex === 0}
            aria-label="Previous Testimonial"
            className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all ${
              activeIndex === 0
                ? 'border-gray-200 text-gray-300 cursor-not-allowed bg-gray-50'
                : 'border-[#0B3B2E]/30 text-[#0B3B2E] bg-white shadow-xs active:scale-95'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2">
            {testimonialsList.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  activeIndex === idx
                    ? 'w-6 h-2.5 bg-[#0B3B2E]'
                    : 'w-2.5 h-2.5 bg-[#0B3B2E]/25 hover:bg-[#0B3B2E]/40'
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={activeIndex === testimonialsList.length - 1}
            aria-label="Next Testimonial"
            className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all ${
              activeIndex === testimonialsList.length - 1
                ? 'border-gray-200 text-gray-300 cursor-not-allowed bg-gray-50'
                : 'border-[#0B3B2E]/30 text-[#0B3B2E] bg-white shadow-xs active:scale-95'
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};

