
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const personaImages = [
  "/lovable-uploads/front1.JPG",
  "/lovable-uploads/front2.JPG",
  "/lovable-uploads/front3.JPG",
  "/lovable-uploads/front4.JPG",
    "/lovable-uploads/front6.JPG",
   "/lovable-uploads/image4.jpeg",
   "/lovable-uploads/image8.jpeg",

];

const Landing: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = React.useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      const next = (activeIndex + 1) % personaImages.length;
      setActiveIndex(next);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [activeIndex]);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height, left, top } = containerRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      const elements = containerRef.current.querySelectorAll('.parallax');
      elements.forEach((el) => {
        const speed = parseFloat(el.getAttribute('data-speed') || '1');
        const rotateX = y * 5 * speed;
        const rotateY = x * 5 * speed;
        const translateX = x * 10 * speed;
        const translateY = y * 10 * speed;
        
        (el as HTMLElement).style.transform = `
          translate(${translateX}px, ${translateY}px)
          rotateX(${rotateX}deg) rotateY(${rotateY}deg)
        `;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden" ref={containerRef}>
      <div className="absolute inset-0 z-0">
        <img 
          src={personaImages[activeIndex]} 
          alt="Artist work"
          className="w-full h-full object-cover opacity-60"
          style={{ 
            transform: 'scale(1.05)',
            transition: 'transform 6s ease-in-out'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50"></div>
      </div>
      
      <header className="relative z-10 p-6">
        <div className="text-center">
          <h1 className="font-display text-2xl tracking-wider text-white">
            SHIVAM SINGH
          </h1>
        </div>
      </header>
      
      <div className="flex-1 flex items-center justify-center relative z-10">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl tracking-wider mb-6 animate-fade-in">
              SCRAP ART <span className="text-gradient">DESIGNER</span>
            </h2>
            <p className="font-body text-lg text-white/90 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "200ms" }}>
              Two distinct artistic personas, each offering a unique perspective.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Link 
              to="/infinita" 
              className="group glass-card p-8 text-center transition-all duration-500 hover:scale-105 hover:bg-white/10 parallax"
              data-speed="0.5"
            >
              <div className="mb-6">
                <h3 className="font-display text-2xl md:text-3xl tracking-wider mb-3">
                  INFINITA CHEBEL
                </h3>
                <p className="font-body text-white/80 mb-4 text-sm">
                  Photography • Video • Performance
                </p>
                <p className="font-body text-xs text-white/70">
                  Intimate visual narratives exploring human emotion through lens-based media.
                </p>
              </div>
              <div className="flex items-center justify-center text-white/60 group-hover:text-white transition-colors">
                <span className="font-body text-sm tracking-wider mr-2">ENTER</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
            
            <Link 
              to="/ilumina" 
              className="group glass-card p-8 text-center transition-all duration-500 hover:scale-105 hover:bg-white/10 parallax"
              data-speed="0.7"
            >
              <div className="mb-6">
                <h3 className="font-display text-2xl md:text-3xl tracking-wider mb-3">
                  ILUMINA CHEBEL
                </h3>
                <p className="font-body text-white/80 mb-4 text-sm">
                  Generative Art • VJ • Installations
                </p>
                <p className="font-body text-xs text-white/70">
                  Digital experiences illuminating new realities through technology.
                </p>
              </div>
              <div className="flex items-center justify-center text-white/60 group-hover:text-white transition-colors">
                <span className="font-body text-sm tracking-wider mr-2">ENTER</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </div>
        </div>
      </div>
      
      <footer className="relative z-10 p-6">
        <div className="text-center">
          <p className="font-body text-xs text-white/60 tracking-widest">
            MULTIMEDIA ARTIST
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
