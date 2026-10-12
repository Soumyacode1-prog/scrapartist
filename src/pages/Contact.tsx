
import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import Layout from '../components/Layout';
import { toast } from "sonner";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`;
    window.location.href = `mailto:shivamsingh7654@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(body)}`;
    setIsSubmitting(false);
    setSubmitSuccess(true);
    toast.success("Your email app has been opened with the message ready to send.");
  };
  
  return (
    <Layout>
      <div className="container-custom py-12 md:py-20">
        <div className="max-w-4xl mx-auto mb-16">
          <h1 className="font-display text-4xl md:text-5xl tracking-wider mb-6 animate-fade-in">
            GET IN <span className="text-gradient">TOUCH</span>
          </h1>
          <p className="font-body text-lg text-white/80 animate-fade-in" style={{ animationDelay: "100ms" }}>
            I'm open to collaborations, exhibition opportunities, commissions, and discussions about my work.
            Feel free to reach out using the form below or through my contact information.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 order-2 md:order-1 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <form onSubmit={handleSubmit} className="glass-card p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block font-body text-sm mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-md py-3 px-4 font-body text-white focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-body text-sm mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-md py-3 px-4 font-body text-white focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-300"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block font-body text-sm mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-md py-3 px-4 font-body text-white focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-300"
                />
              </div>
              
              <div className="mb-8">
                <label htmlFor="message" className="block font-body text-sm mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-white/5 border border-white/10 rounded-md py-3 px-4 font-body text-white focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-300 resize-none"
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center justify-center w-full md:w-auto bg-white/10 hover:bg-white/20 border border-white/20 rounded-md py-3 px-8 font-body text-sm tracking-wider transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin mr-2"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
                
                {submitSuccess && (
                  <div className="mt-4 py-3 px-4 bg-green-500/20 text-green-200 rounded-md font-body text-sm animate-fade-in">
                    Your message has been sent successfully! I'll get back to you soon.
                  </div>
                )}
              </div>
            </form>
          </div>
          
          <div className="order-1 md:order-2 animate-fade-in" style={{ animationDelay: "300ms" }}>
            <div className="sticky top-24 space-y-8">
              <div className="glass-card p-6">
                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-md mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg mb-1">Email</h3>
                    <a href="mailto:shivamsingh7654@gmail.com" className="font-body text-white/70 hover:text-white">shivamsingh7654@gmail.com</a>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-6">
                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-md mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg mb-1">Phone</h3>
                    <a href="tel:+916202709956" className="font-body text-white/70 hover:text-white">62027 09956</a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="font-display text-lg mb-4">Connect</h3>
                <div className="flex space-x-4">
                  {[
                    { name: 'instagram', href: 'https://www.instagram.com/shivamsinghdesignstudio?mdxt=eHpuenV6YmJ2MWR0' },
                    { name: 'youtube', href: 'https://www.youtube.com/@shivamsinghdesginstudio/featured' },
                  ].map(({ name, href }) => (
                    <a
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                    >
                      <img
                        src={`https://cdn.simpleicons.org/${name}/ffffff`}
                        alt={name}
                        className="w-5 h-5"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
