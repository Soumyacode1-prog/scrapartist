
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Instagram, Mail, Phone } from 'lucide-react';

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Find all elements with animate-on-scroll class within this entry
            const animatedElements = entry.target.querySelectorAll('.animate-on-scroll');
            animatedElements.forEach(el => {
              el.classList.add('animate-fade-in');
              el.classList.remove('opacity-0');
            });
            
            // Once the animation is triggered for this section, unobserve it
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );
    
    // Observe the section container itself
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
    <section className="py-24 relative overflow-hidden" ref={sectionRef}>
      <div className="absolute top-0 right-0 w-1/3 h-2/3 bg-gradient-to-bl from-blue-600/5 via-purple-600/5 to-transparent rounded-full blur-3xl" />
      
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <div className="overflow-hidden">
              <h2 className="font-display text-3xl md:text-4xl tracking-wider mb-8 animate-on-scroll opacity-0">
                ABOUT <span className="text-gradient">SHIVAM</span>
              </h2>
            </div>
            
            <div className="animate-on-scroll opacity-0" style={{ transitionDelay: "100ms" }}>
              <p className="font-body text-white/80 mb-6">
                I am Shivam Singh, a highly skilled and creative professional designer specializing in the unique and eco-conscious field of scrap art. With a solid foundation in design education from the prestigious National Institute of Fashion Technology (NIFT) in Kangra, I possess a deep understanding of design principles and aesthetics.
              </p>
              
              <p className="font-body text-white/80 mb-6">
                With over five years of valuable industrial experience, I honed my craft and gained a wealth of practical knowledge. After my successful stint in the industry, I returned to my hometown of Ranchi to embark on an inspiring entrepreneurial journey, founding my own startup. Through my work, I transform discarded materials such as metal, plastic, and other waste into captivating art installations, including lifelike sculptures of humans and animals designed for outdoor spaces.
              </p>
              
              <p className="font-body text-white/80 mb-6">
                My dedication to merging art with sustainability makes me a visionary designer, contributing to the beautification of outdoor spaces while promoting environmental responsibility. My work showcases creative prowess while reimagining and repurposing materials that would otherwise contribute to pollution and waste. My innovative approach to recycling and design is not only aesthetically pleasing but also serves as an inspiration for a greener, more conscientious world.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 mb-8">
                <a 
                  href="https://instagram.com/shivamsingh3824" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center font-body text-sm tracking-wider group hover:text-white/90"
                >
                  <Instagram size={18} className="m/Users/soumya/Downloads/KD_03549.jpg.jpeg/Users/soumya/Downloads/KD_03549.jpg.jpeg/Users/soumya/Downloads/KD_03549.jpg.jpegr-2" />
                  @shivamsingh3824
                </a>
              </div>
              
              <Link 
                to="/about" 
                className="inline-flex items-center font-body text-sm tracking-wider group"
              >/Users/soumya/Downloads/KD_03556.jpg (1).jpeg
                MORE ABOUT ME
                <ArrowRight 
                  size={16} 
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                />
              </Link>
            </div>
          </div>
          
          <div className="animate-on-scroll opacity-0 mt-8 md:mt-20" style={{ transitionDelay: "200ms" }}>
            <div className="relative perspective max-w-md mx-auto md:mx-0">
              <div 
                className="relative rounded-lg overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-700 ease-out-expo shadow-xl"
              >
                <img 
                  src="/lovable-uploads/6e9f6cab-d469-4093-b39b-ec290d5e5006.png" 
                  alt="Chebel performing VJ set" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-body text-sm text-white/60 mb-1">Based in</h4>
                <p className="font-body">Ranchi, India</p>
              </div>
              <div>
                <h4 className="font-body text-sm text-white/60 mb-1">Experience</h4>
                <p className="font-body">5+ Years</p>
              </div>
            </div>
            
            <div className="glass-card p-6 mt-8">
              <div className="flex items-center mb-4">
                <Mail size={18} className="mr-3 text-white/70" />
                <span className="font-body">shivam@scrapart.com</span>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="mr-3 text-white/70" />
                <span className="font-body">+91-6200-123-456</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
