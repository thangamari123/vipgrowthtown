import React from 'react';

interface HeroSectionProps {
  onOpenEnquiry?: (source?: string, defaultPlot?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  const videoUrl = 'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-green-field-with-trees-41480-large.mp4';
  const posterUrl = 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop';

  return (
    <section
      id="home"
      className="relative w-full h-[65vh] sm:h-[75vh] lg:h-[88vh] min-h-[420px] max-h-[960px] bg-[#07241C] overflow-hidden"
    >
      {/* Full-Bleed Clean Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={posterUrl}
          className="w-full h-full object-cover"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>

        {/* Subtle Atmospheric Gradient for Clean Page Flow */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B3B2E]/90 via-transparent to-black/30 pointer-events-none"></div>
      </div>
    </section>
  );
};
