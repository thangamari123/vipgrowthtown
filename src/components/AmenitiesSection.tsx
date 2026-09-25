import React, { useState } from 'react';
import {
  ShieldCheck,
  Lock,
  Route,
  Lightbulb,
  Trees,
  Sparkles,
  Footprints,
  Users,
  Car,
  Droplets,
  Building2,
  CheckCircle2,
  ArrowRight,
  ShieldAlert,
  Layers
} from 'lucide-react';
import { amenitiesList } from '../data/projectData';

interface AmenitiesSectionProps {
  onOpenEnquiry?: (source?: string) => void;
}

export const AmenitiesSection: React.FC<AmenitiesSectionProps> = ({ onOpenEnquiry }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const iconMap: Record<string, React.ElementType> = {
    ShieldCheck,
    Lock,
    Route,
    Lightbulb,
    Trees,
    Sparkles,
    Footprints,
    Users,
    Car,
    Droplets,
    Building2
  };

  const categories = ['All', 'Infrastructure', 'Security', 'Environment', 'Utilities'];

  const filteredAmenities = activeCategory === 'All'
    ? amenitiesList
    : amenitiesList.filter((a) => a.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="amenities" className="py-8 sm:py-14 lg:py-20 bg-[#F7F8F5]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 sm:px-3.5 sm:py-1 rounded-full bg-[#0B3B2E]/10 border border-[#0B3B2E]/20 text-[#0B3B2E] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2 sm:mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" />
            <span>Infrastructure Ready on Ground</span>
          </div>
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B3B2E] font-serif tracking-tight">
            Community Amenities &amp; Features
          </h2>
          <p className="mt-1.5 sm:mt-2.5 text-xs sm:text-sm lg:text-base text-[#66736B]">
            Fully executed on-ground infrastructure designed for immediate living, security, and long-term appreciation.
          </p>
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mb-5 sm:mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-2.5 py-1 sm:px-4 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#0B3B2E] text-[#ECC850] shadow-xs scale-102'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat === 'All' ? `All (${amenitiesList.length})` : cat}
            </button>
          ))}
        </div>

        {/* Amenities Grid - Compact & Responsive 2-Col on Mobile / 3-Col on Desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 lg:gap-6">
          {filteredAmenities.map((amenity, idx) => {
            const IconComponent = iconMap[amenity.iconName] || ShieldCheck;

            return (
              <div
                key={amenity.id}
                className="group relative bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-5 border border-gray-200/90 hover:border-[#C9A227] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 flex flex-col justify-between overflow-hidden"
              >
                {/* Top Subtle Gold Accent Strip on Hover */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Card Header: Dual-tone Icon + Status Badge */}
                  <div className="flex items-center justify-between gap-1.5 mb-2 sm:mb-3">
                    <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#0B3B2E] to-[#166534] text-[#ECC850] flex items-center justify-center shadow-xs sm:shadow-md group-hover:scale-108 transition-transform duration-300 shrink-0">
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-[#ECC850]" />
                    </div>

                    <div className="flex items-center gap-1">
                      <span className="px-1.5 py-0.5 sm:px-2 sm:py-0.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-[8px] sm:text-[10px] font-bold flex items-center gap-0.5 sm:gap-1">
                        <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="hidden min-[380px]:inline">Ready</span>
                      </span>
                      <span className="hidden sm:inline text-[10px] font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-md">
                        {amenity.category}
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xs sm:text-base lg:text-lg font-bold text-[#0B3B2E] font-serif group-hover:text-[#166534] transition-colors leading-tight sm:leading-snug">
                    {amenity.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs lg:text-sm text-[#66736B] leading-tight sm:leading-relaxed mt-0.5 sm:mt-1 line-clamp-2">
                    {amenity.description}
                  </p>
                </div>

                {/* Bottom Verification Seal */}
                <div className="mt-2 sm:mt-3.5 pt-1.5 sm:pt-2.5 border-t border-gray-100 flex items-center justify-between text-[9px] sm:text-xs">
                  <div className="flex items-center gap-1 font-semibold text-[#166534]">
                    <CheckCircle2 className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-[#C9A227] shrink-0" />
                    <span>100% Executed</span>
                  </div>
                  <span className="text-[8px] sm:text-[10px] font-mono text-gray-400">
                    #0{idx + 1}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Note & Site Visit Trigger */}
        <div className="mt-6 sm:mt-10 bg-gradient-to-r from-[#0B3B2E] via-[#166534] to-[#0B3B2E] rounded-xl sm:rounded-2xl p-3.5 sm:p-6 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-xs sm:text-lg font-bold font-serif text-white">
              Want to inspect the on-ground amenities in person?
            </h4>
            <p className="text-[10px] sm:text-xs text-emerald-100/80 mt-0.5">
              Book a guided site tour with complimentary pickup &amp; drop transport facility.
            </p>
          </div>
          <button
            onClick={() => onOpenEnquiry && onOpenEnquiry('Amenities Section Free Site Tour CTA')}
            className="w-full sm:w-auto shrink-0 px-4 py-2 sm:px-5 sm:py-2.5 bg-[#ECC850] hover:bg-[#dfba38] text-[#0B3B2E] text-xs sm:text-sm font-bold rounded-xl shadow-md flex items-center justify-center gap-1.5 transition-all cursor-pointer active:scale-95"
          >
            <span>Book Guided Site Tour</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
