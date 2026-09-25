import React, { useState } from 'react';
import {
  MapPin,
  Building2,
  Compass,
  Navigation,
  GraduationCap,
  HeartPulse,
  Train,
  Sparkles,
  ExternalLink,
  ArrowRight,
  School,
  Trees
} from 'lucide-react';
import { locationAdvantages, projectConfig } from '../data/projectData';

interface LocationSectionProps {
  onOpenEnquiry: (source?: string) => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ onOpenEnquiry }) => {
  const [selectedHub, setSelectedHub] = useState<string>('loc-padalam-bus');

  const iconMap: Record<string, React.ElementType> = {
    Building2,
    Compass,
    Navigation,
    GraduationCap,
    HeartPulse,
    Train,
    Trees
  };

  const schools = [
    "MCSM Government Hr. Secondary School Padalam",
    "Karpaga Vinayaga Global School",
    "Everwin Vidhyashram School",
    "Government High School",
    "Government Hr. Sec. School Kunnankulathur",
    "SCAD World School"
  ];

  const hospitals = [
    "Siva Hospital",
    "Govt. Hospital Chengalpattu",
    "Balaji Hospital",
    "JJ Multi Speciality Hospital",
    "Sundaram Hospital",
    "Sree Renga Hospital"
  ];

  const colleges = [
    "Karpaga Vinayaga Educational Group",
    "Sri Malolan College of Arts and Science",
    "Shri Andal Alagar College of Engineering",
    "Vidhya Sagar Women's College",
    "Chengalpattu Medical College",
    "Rajeswari Vedachalam Gov. Arts College"
  ];

  return (
    <section id="location" className="py-10 sm:py-20 lg:py-24 bg-white border-b border-[#DDE4DE]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3.5 sm:py-1 rounded-full bg-[#F8F6EF] border border-[#C9A227]/40 text-[#0B3B2E] text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-2 sm:mb-3">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C9A227]" />
            <span>Location &amp; Connectivity</span>
          </div>
          <h2 className="text-sm sm:text-base lg:text-lg font-semibold text-[#0B3B2E] font-serif tracking-tight max-w-2xl mx-auto leading-snug">
            Directly at Padalam Junction on GST Road (NH-45), between Chengalpattu and Melmaruvathur.
          </h2>
          <div className="mt-3 sm:mt-4 flex justify-center">
            <a
              href="https://maps.google.com/?q=Padalam+Junction+Tamil+Nadu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#0B3B2E] hover:bg-[#166534] text-[#ECC850] font-bold text-xs sm:text-sm px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl shadow transition-colors"
            >
              <MapPin className="w-4 h-4 text-[#ECC850]" />
              <span>📍 Open in Google Maps for Directions</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Split Screen Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-8 sm:mb-12">
          
          {/* Left Column: Interactive Map Simulation & Geo Card */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-4">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 sm:border-4 border-[#F8F6EF] bg-slate-900 aspect-[4/3] group">
              <iframe
                title="VIP Growth Town Chengalpattu Location"
                src="https://maps.google.com/maps?q=Padalam,Chengalpattu,Tamil+Nadu&t=&z=12&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 grayscale-[15%] contrast-[1.05]"
                loading="lazy"
              ></iframe>

              {/* Floating Pin Card */}
              <div className="absolute top-2.5 left-2.5 right-2.5 sm:top-4 sm:left-4 sm:right-4 bg-white/95 backdrop-blur-md p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl shadow-xl border border-[#DDE4DE] flex items-center justify-between">
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-[#0B3B2E] text-[#ECC850] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#17201B]">
                      Growth Town
                    </h4>
                    <p className="text-[10px] sm:text-[11px] text-gray-500">
                      Padalam Junction • GST Road
                    </p>
                  </div>
                </div>
                <a
                  href="https://maps.google.com/?q=Padalam+Junction+Tamil+Nadu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#166534] hover:bg-[#0B3B2E] text-white text-[11px] sm:text-xs font-bold py-1 px-2.5 sm:py-1.5 sm:px-3 rounded-lg flex items-center gap-1 shadow transition-colors"
                >
                  <span>Open Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Map footer highlights */}
              <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-4 sm:left-4 sm:right-4 bg-[#0B3B2E]/90 backdrop-blur-md p-2 sm:p-3 rounded-lg sm:rounded-xl border border-white/10 text-white flex items-center justify-between text-[11px] sm:text-xs">
                <span className="text-gray-200 truncate pr-2">
                  📍 Direct GST Road Corridor
                </span>
                <span className="text-[#ECC850] font-bold shrink-0">
                  NH-45 Access
                </span>
              </div>
            </div>

            {/* Sub-note on location accuracy */}
            <div className="p-3 sm:p-4 bg-[#F8F6EF] rounded-xl sm:rounded-2xl border border-[#DDE4DE] text-[11px] sm:text-xs text-[#66736B] leading-relaxed">
              <strong className="text-gray-900 font-semibold">Free Site Visit Transport:</strong> We provide complimentary pick-up and drop assistance from Chengalpattu Railway Junction &amp; GST Road.
            </div>
          </div>

          {/* Right Column: 7 Key Transit & Landmark Points */}
          <div className="lg:col-span-7 space-y-2.5">
            <h3 className="text-sm font-bold text-[#0B3B2E] uppercase tracking-wider mb-2">
              Key Transit &amp; Landmarks
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {locationAdvantages.map((loc) => {
                const IconComp = iconMap[loc.iconName] || MapPin;
                return (
                  <div
                    key={loc.id}
                    className="p-3 sm:p-3.5 rounded-xl border bg-white border-[#DDE4DE] hover:border-[#166534] hover:bg-[#F8F6EF]/50 transition-all duration-200 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2.5 pr-2">
                      <div className="w-8 h-8 rounded-lg bg-[#F8F6EF] text-[#166534] flex items-center justify-center shrink-0 border border-green-100">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-[#17201B]">
                          {loc.title}
                        </h4>
                        <p className="text-[10px] text-gray-500 line-clamp-1">
                          {loc.description}
                        </p>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-[#166534] text-[#ECC850] text-xs font-black shrink-0 font-mono shadow-sm">
                      {loc.tag}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Social Infrastructure 3-Column Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 pt-4 border-t border-[#DDE4DE]">
          
          {/* Schools Card */}
          <div className="bg-[#F8F6EF] p-4 sm:p-5 rounded-2xl border border-[#DDE4DE]">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#0B3B2E] text-[#ECC850] flex items-center justify-center">
                  <School className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-[#0B3B2E] font-serif">Schools</h4>
              </div>
              <span className="text-[10px] font-bold text-[#166534] bg-white px-2 py-0.5 rounded-full border border-green-200">
                3–13 min
              </span>
            </div>
            <ul className="space-y-1.5 text-xs text-[#4A5568]">
              {schools.map((s, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-[#166534] font-bold">•</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Hospitals Card */}
          <div className="bg-[#F8F6EF] p-4 sm:p-5 rounded-2xl border border-[#DDE4DE]">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#0B3B2E] text-[#ECC850] flex items-center justify-center">
                  <HeartPulse className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-[#0B3B2E] font-serif">Hospitals</h4>
              </div>
              <span className="text-[10px] font-bold text-[#166534] bg-white px-2 py-0.5 rounded-full border border-green-200">
                16–17 min
              </span>
            </div>
            <ul className="space-y-1.5 text-xs text-[#4A5568]">
              {hospitals.map((h, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-[#166534] font-bold">•</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Colleges Card */}
          <div className="bg-[#F8F6EF] p-4 sm:p-5 rounded-2xl border border-[#DDE4DE]">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#0B3B2E] text-[#ECC850] flex items-center justify-center">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-[#0B3B2E] font-serif">Colleges</h4>
              </div>
              <span className="text-[10px] font-bold text-[#166534] bg-white px-2 py-0.5 rounded-full border border-green-200">
                4–16 min
              </span>
            </div>
            <ul className="space-y-1.5 text-xs text-[#4A5568]">
              {colleges.map((c, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-[#166534] font-bold">•</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};
