import React, { useState } from 'react';
import { Sparkles, Maximize, Ruler, Home, ArrowRight, CheckCircle2, Info, Compass } from 'lucide-react';
import { homePlanConcepts } from '../data/projectData';

interface HomePlanSectionProps {
  onOpenEnquiry: (source?: string, defaultPlot?: string) => void;
}

export const HomePlanSection: React.FC<HomePlanSectionProps> = ({ onOpenEnquiry }) => {
  const [selectedPlanId, setSelectedPlanId] = useState<string>(homePlanConcepts[1].id);

  const selectedPlan = homePlanConcepts.find((p) => p.id === selectedPlanId) || homePlanConcepts[0];

  const dimensionGuides = [
    { size: '600 sq.ft', dim: '20 ft × 30 ft', desc: 'Compact 2BHK footprint with G+1 terrace structure', setback: 'Ideal for 1-2 Car/Bike parking' },
    { size: '1200 sq.ft', dim: '30 ft × 40 ft', desc: 'Standard 3BHK duplex footprint with landscaped side setback', setback: 'Dedicated portico & lawn area' },
    { size: '1800 sq.ft', dim: '30 ft × 60 ft', desc: 'Premium 3-4 BHK luxury villa footprint with grand frontage', setback: 'Spacious driveway & private courtyard' },
    { size: '2400 sq.ft', dim: '40 ft × 60 ft', desc: 'Elite estate footprint allowing custom architectural freedom', setback: 'Dual car parking & wrap-around garden' },
  ];

  return (
    <section id="home-plans" className="py-16 sm:py-24 bg-white border-b border-[#DDE4DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F8F6EF] border border-[#C9A227]/40 text-[#0B3B2E] text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" />
            <span>ARCHITECTURAL PLANNING</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B3B2E] font-serif tracking-tight">
            Plan Your Dream Home
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#66736B]">
            Explore conceptual home plans and dimension diagrams demonstrating the vast construction potential of your plot at VIP Growth Town.
          </p>
        </div>

        {/* Dimension Matrix Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {dimensionGuides.map((guide, idx) => (
            <div
              key={idx}
              className="bg-[#F7F8F5] rounded-2xl p-5 border border-[#DDE4DE] hover:border-[#166534] transition-all hover:shadow-md"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#166534]">
                  Plot Size
                </span>
                <Ruler className="w-4 h-4 text-[#C9A227]" />
              </div>
              <h3 className="text-xl font-black text-[#17201B] font-mono">
                {guide.size}
              </h3>
              <div className="text-xs font-bold text-[#0B3B2E] bg-white px-2.5 py-1 rounded-lg border border-gray-200 inline-block my-2">
                {guide.dim}
              </div>
              <p className="text-xs text-gray-600 leading-snug mb-1">
                {guide.desc}
              </p>
              <p className="text-[11px] text-[#166534] font-medium italic">
                {guide.setback}
              </p>
            </div>
          ))}
        </div>

        {/* Visual Concept Showcase */}
        <div className="bg-[#F8F6EF] rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#C9A227]/30 shadow-xl">
          
          {/* Concept Selector Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {homePlanConcepts.map((concept) => (
              <button
                key={concept.id}
                onClick={() => setSelectedPlanId(concept.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  selectedPlanId === concept.id
                    ? 'bg-[#0B3B2E] text-[#ECC850] shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <Home className="w-4 h-4" />
                <span>{concept.title}</span>
              </button>
            ))}
          </div>

          {/* Selected Concept Showcase Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Elevation Visual with MANDATORY Illustrative Home Plan Badge */}
            <div className="lg:col-span-6 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
                <img
                  src={selectedPlan.imageUrl}
                  alt={selectedPlan.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Mandatory Illustrative Home Plan Badge */}
              <div className="absolute top-4 left-4 bg-[#0B3B2E]/90 backdrop-blur-md text-[#ECC850] border border-[#ECC850]/50 px-3.5 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
                <Info className="w-3.5 h-3.5 text-[#ECC850]" />
                <span>Illustrative Home Plan</span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-md text-white p-3 rounded-xl text-xs flex justify-between items-center border border-white/10">
                <span>Plot Requirement: <strong>{selectedPlan.plotSize}</strong></span>
                <span className="text-[#ECC850] font-semibold">{selectedPlan.dimensions}</span>
              </div>
            </div>

            {/* Right Details & Room Layout Concept */}
            <div className="lg:col-span-6 space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#166534] bg-white px-3 py-1 rounded-full border border-green-200">
                  {selectedPlan.type}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#0B3B2E] font-serif mt-2.5">
                  {selectedPlan.title}
                </h3>
                <p className="text-xs font-semibold text-gray-500 mt-1">
                  Built-Up Area: {selectedPlan.builtUpArea} • {selectedPlan.bedrooms}
                </p>
              </div>

              <p className="text-sm text-[#66736B] leading-relaxed">
                {selectedPlan.description}
              </p>

              {/* Plan Highlights */}
              <div className="space-y-2 pt-1">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block">
                  Layout Planning Strengths:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedPlan.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-[#DDE4DE] text-xs font-semibold text-gray-800">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#166534] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mandatory Clarification Note */}
              <div className="p-3 bg-amber-50/80 rounded-xl border border-amber-200 text-xs text-amber-900 leading-snug">
                <strong>Important Notice:</strong> VIP Growth Town offers premium developed villa plots. House designs shown above are architectural suggestions to assist your construction planning and are not included in the plot purchase.
              </div>

              {/* CTA */}
              <div className="pt-2">
                <button
                  id="get-plot-dimensions-btn"
                  onClick={() => onOpenEnquiry(`Home Planning Section - ${selectedPlan.title}`, selectedPlan.plotSize)}
                  className="w-full sm:w-auto bg-[#166534] hover:bg-[#0B3B2E] text-white font-bold py-3.5 px-8 rounded-xl shadow-lg shadow-green-900/15 flex items-center justify-center gap-2 text-sm transition-all duration-200 cursor-pointer"
                >
                  <span>Get Plot Dimensions &amp; Layout Plan</span>
                  <ArrowRight className="w-4 h-4 text-[#ECC850]" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
