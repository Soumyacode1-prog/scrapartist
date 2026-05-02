import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const DecorItems: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-blur-in');
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <Layout>
      <div className="py-24 relative opacity-0" ref={sectionRef}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black/0 opacity-50" />
        
        <div className="container-custom relative z-10">
          <div className="mb-12 max-w-4xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-3xl md:text-4xl tracking-wider animate-fade-in">
                DECOR ITEMS
              </h2>
              <Link 
                to="/" 
                className="font-body text-sm text-white/60 hover:text-white transition-colors"
              >
                ← Back to home
              </Link>
            </div>
            <p className="font-body text-lg text-white/80 animate-fade-in" style={{ animationDelay: "100ms" }}>
              Unique decorative art installations and scrap art sculptures. Explore our collection of handcrafted pieces created from recycled materials.
            </p>
          </div>
          
          <div className="py-24">
            <div className="text-center">
              <p className="font-body text-white/70 text-lg">Coming soon...</p>
              <p className="font-body text-white/50 mt-4">New decor items collection will be available shortly.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-blue-900/10" />
        
        <div className="container-custom relative z-10">
          <div className="glass-card p-12 md:p-16 text-center max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl tracking-wider mb-8 animate-fade-in">
              INTERESTED IN <span className="text-gradient">COMMISSIONING</span>?
            </h2>
            
            <p className="font-body text-lg text-white/80 mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "100ms" }}>
              Let's discuss your custom decor project. 
              Reach out at <a href="mailto:shivam@scrapart.com" className="text-white hover:text-white/80 transition-colors">shivam@scrapart.com</a> to bring your vision to life.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DecorItems;
