
import React from 'react';
import Layout from '../components/Layout';
import { Instagram, Mail, Phone } from 'lucide-react';

const About: React.FC = () => {
  return (
    <Layout>
      <div className="container-custom py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl tracking-wider mb-12 animate-fade-in">
            ABOUT <span className="text-gradient">SHIVAM</span>
          </h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          <div className="md:col-span-2 order-2 md:order-1">
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
              <p className="font-body text-lg">
                I am Shivam Singh, a highly skilled and creative professional designer specializing in the unique and eco-conscious field of scrap art. With a solid foundation in design education from the prestigious National Institute of Fashion Technology (NIFT) in Kangra, I possess a deep understanding of design principles and aesthetics.
              </p>
              
              <p className="font-body">
                With over five years of valuable industrial experience, I honed my craft and gained a wealth of practical knowledge. After my successful stint in the industry, I returned to my hometown of Ranchi to embark on an inspiring entrepreneurial journey, founding my own startup. Through my work, I transform discarded materials such as metal, plastic, and other waste into captivating art installations, including lifelike sculptures of humans and animals designed for outdoor spaces.
              </p>
              
              <p className="font-body">
                My dedication to merging art with sustainability makes me a visionary designer, contributing to the beautification of outdoor spaces while promoting environmental responsibility. My work showcases creative prowess while reimagining and repurposing materials that would otherwise contribute to pollution and waste. My innovative approach to recycling and design is not only aesthetically pleasing but also serves as an inspiration for a greener, more conscientious world.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 mb-8">
                <a 
                  href="https://instagram.com/shivamsinghart" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center font-body text-sm tracking-wider group hover:text-white/90"
                >
                  <Instagram size={18} className="mr-2" />
                  @shivamsingh3824
                </a>
              </div>
            </div>
            
            <div className="mt-12 space-y-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <h2 className="font-display text-2xl tracking-wider">EDUCATION & EXPERIENCE</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="glass-card p-6">
                  <h3 className="font-display text-lg mb-2">Bachelor of Design</h3>
                  <p className="font-body text-white/70 mb-1">NIFT Kangra - India</p>
                  <p className="font-body text-sm text-white/50">Graduated</p>
                </div>
                
                <div className="glass-card p-6">
                  <h3 className="font-display text-lg mb-2">Industrial Design Experience</h3>
                  <p className="font-body text-white/70 mb-1">5+ Years in Design</p>
                  <p className="font-body text-sm text-white/50">Professional</p>
                </div>
                
                <div className="glass-card p-6">
                  <h3 className="font-display text-lg mb-2">Scrap Art Specialization</h3>
                  <p className="font-body text-white/70 mb-1">Eco-Conscious Design</p>
                  <p className="font-body text-sm text-white/50">Expertise</p>
                </div>
                
                <div className="glass-card p-6">
                  <h3 className="font-display text-lg mb-2">Entrepreneurship</h3>
                  <p className="font-body text-white/70 mb-1">Founder - Own Startup</p>
                  <p className="font-body text-sm text-white/50">Ranchi</p>
                </div>
                
                <div className="glass-card p-6">
                  <h3 className="font-display text-lg mb-2">Sculpture & Installation</h3>
                  <p className="font-body text-white/70 mb-1">Art & Design Practice</p>
                  <p className="font-body text-sm text-white/50">Specialization</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="sticky top-24 space-y-8">
              <div className="relative perspective">
                <div className="relative rounded-lg overflow-hidden transform hover:rotate-0 transition-transform duration-700 ease-out-expo shadow-xl">
                  <img 
                    src="/lovable-uploads/shivam1.jpeg" 
                    alt="Shivam Singh Portrait" 
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                </div>
                
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="font-display text-xl mb-2">Shivam Singh</h3>
                  <p className="font-body text-white/70">Scrap Art Designer</p>
                </div>
              </div>
              
              <div className="relative perspective mt-8">
                <div className="relative rounded-lg overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-700 ease-out-expo shadow-xl">
                  <img 
                    src="/lovable-uploads/shivam2.jpeg" 
                    alt="Shivam Singh at work" 
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
                <div className="flex items-start mb-4">
                  <div className="bg-white/10 p-3 rounded-md mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg mb-1">Email</h3>
                    <p className="font-body text-white/70">shivam@scrapart.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-md mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg mb-1">Phone</h3>
                    <p className="font-body text-white/70">+91-6200-123-456</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
