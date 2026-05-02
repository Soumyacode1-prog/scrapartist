import React, { useState } from 'react';
import Layout from '../components/Layout';
import { ArrowLeft, Mail, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

const Substack: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    console.log('Form submitted to shivam@scrapart.com:', formData);
    
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
      toast.success("Message sent successfully! Shivam will get back to you soon.");
    }, 1500);
  };
  
  return (
    <Layout>
      <div className="pt-12 pb-24">
        <div className="container-custom">
          <div className="mb-12">
            <Link 
              to="/" 
              className="inline-flex items-center font-body text-sm text-white/70 hover:text-white transition-colors duration-300"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Home
            </Link>
          </div>
          
          <div className="mb-16 max-w-4xl">
            <h1 className="font-display text-4xl md:text-5xl tracking-wider mb-8 animate-fade-in">GET IN <span className="text-gradient">TOUCH</span></h1>
            <p className="font-body text-white/70 text-lg">Interested in collaborating or want to discuss a project? Connect with me below.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-body text-sm text-white/70 mb-3">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-colors duration-300 font-body"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-sm text-white/70 mb-3">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-colors duration-300 font-body"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block font-body text-sm text-white/70 mb-3">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-colors duration-300 font-body"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label className="block font-body text-sm text-white/70 mb-3">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-colors duration-300 font-body resize-none"
                    placeholder="Tell me about your project or inquiry..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-3 bg-white text-black rounded-lg hover:bg-white/90 transition-all duration-300 font-body font-medium flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={18} className="mr-2" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
            
            <div>
              <div className="glass-card p-8">
                <h3 className="font-display text-lg mb-6">Quick Info</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail size={20} className="mr-4 text-white/70 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-body text-sm text-white/60 mb-1">Email</p>
                      <a href="mailto:shivam@scrapart.com" className="font-body text-white hover:text-white/80 transition-colors">shivam@scrapart.com</a>
                    </div>
                  </div>
                  <div>
                    <p className="font-body text-sm text-white/60 mb-3">Response Time</p>
                    <p className="font-body text-white">Usually within 48 hours</p>
                  </div>
                  <div>
                    <p className="font-body text-sm text-white/60 mb-3">Based In</p>
                    <p className="font-body text-white">Ranchi, Jharkhand, India</p>
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

export default Substack;