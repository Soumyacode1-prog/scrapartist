
import React from 'react';

interface HeroSectionProps {
  onExploreClick?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <video 
          src="/bg-video.mp4" 
          autoPlay 
          loop 
          muted 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-gradient-to-b from-black/60 via-black/10 to-transparent" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-6 animate-fade-in">
          SHIVAM <span className="text-gradient">SINGH</span>
        </h1>
        
        <p className="font-body text-lg text-white/80 mb-8 animate-fade-in" style={{ animationDelay: "300ms" }}>
          Multimedia artist exploring the intersection of technology, emotion, and human experience.
        </p>
        
        <div className="mt-12 animate-fade-in" style={{ animationDelay: "600ms" }}>
          <button
            onClick={onExploreClick}
            className="glass-card px-8 py-4 font-body text-sm tracking-wider text-white hover:text-white/80 transition-all duration-300 hover:scale-105"
          >
            EXPLORE PROJECTS
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
