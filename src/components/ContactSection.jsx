import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Sparkles, CheckCircle2, ShieldAlert } from 'lucide-react';
import { practiceInfo } from '../data/websiteData';

export default function ContactSection() {
  const [formSent, setFormSent] = useState(false);
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-900/80 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/80 border border-teal-800 text-teal-400 text-xs font-semibold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" /> Visit & Connect
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Contact & Practice Location
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            We are conveniently located with ample parking. Reach out today to schedule your visit or ask a question.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Office Details & Hours */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Quick Contact Cards */}
            <div className="space-y-4">
              
              <div className="glass-card rounded-2xl p-5 border border-slate-800 flex items-start gap-4 hover:border-teal-500/40 transition-colors">
                <div className="w-10 h-10 rounded-xl teal-gradient-bg text-white flex items-center justify-center shrink-0 shadow-md">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-base">Office Address</h4>
                  <p className="text-slate-300 text-sm mt-0.5">{practiceInfo.address}</p>
                  <a 
                    href={`https://maps.google.com/?q=${encodeURIComponent(practiceInfo.address)}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block text-xs font-semibold text-teal-400 hover:text-teal-300 mt-2 underline"
                  >
                    Get Driving Directions →
                  </a>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-5 border border-slate-800 flex items-start gap-4 hover:border-teal-500/40 transition-colors">
                <div className="w-10 h-10 rounded-xl teal-gradient-bg text-white flex items-center justify-center shrink-0 shadow-md">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-base">Direct Phone</h4>
                  <p className="text-slate-300 text-sm mt-0.5">{practiceInfo.phone}</p>
                  <span className="text-[11px] text-teal-300">Answered live during business hours</span>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-5 border border-slate-800 flex items-start gap-4 hover:border-teal-500/40 transition-colors">
                <div className="w-10 h-10 rounded-xl teal-gradient-bg text-white flex items-center justify-center shrink-0 shadow-md">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-base">Email Inquiries</h4>
                  <p className="text-slate-300 text-sm mt-0.5">{practiceInfo.email}</p>
                  <span className="text-[11px] text-slate-400">Response within 24 business hours</span>
                </div>
              </div>

            </div>

            {/* Office Hours Box */}
            <div className="glass-card rounded-2xl p-6 border border-slate-800">
              <h4 className="font-heading font-bold text-white text-lg mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-teal-400" /> Office Hours
              </h4>
              <div className="space-y-3">
                {practiceInfo.hours.map((h, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs sm:text-sm border-b border-slate-800/80 pb-2 last:border-0 last:pb-0">
                    <span className="text-slate-300 font-medium">{h.day}</span>
                    <span className="text-teal-300 font-semibold">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency Dental Callout Banner */}
            <div className="p-5 rounded-2xl bg-amber-950/40 border border-amber-800/50 flex items-center gap-4">
              <ShieldAlert className="w-8 h-8 text-amber-400 shrink-0" />
              <div>
                <h5 className="font-heading font-bold text-amber-200 text-sm">Dental Emergency?</h5>
                <p className="text-xs text-amber-300/90 mt-0.5">
                  Call us immediately at <strong className="underline font-bold">{practiceInfo.phone}</strong> for same-day urgent care.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Quick Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-7 sm:p-9 border border-slate-800 shadow-2xl relative">
              
              <div className="mb-6 space-y-1">
                <h3 className="font-heading font-extrabold text-2xl text-white">
                  Send Dr. Singh’s Team a Message
                </h3>
                <p className="text-slate-300 text-sm">
                  Have a specific question about treatment options or insurance? Fill out the form below.
                </p>
              </div>

              {!formSent ? (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Robert Smith"
                      value={contactData.name}
                      onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                      className="w-full p-3.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-teal-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="robert@example.com"
                        value={contactData.email}
                        onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                        className="w-full p-3.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-teal-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(555) 123-4567"
                        value={contactData.phone}
                        onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
                        className="w-full p-3.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-teal-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      How Can We Help You? *
                    </label>
                    <textarea
                      rows="4"
                      required
                      placeholder="Tell us about your dental concerns or questions..."
                      value={contactData.message}
                      onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                      className="w-full p-3.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-teal-500"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 text-sm font-bold text-white teal-gradient-bg rounded-xl shadow-xl hover:opacity-95 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry Message</span>
                  </button>
                </form>
              ) : (
                <div className="py-12 text-center space-y-4 animate-in fade-in">
                  <div className="w-14 h-14 rounded-2xl bg-teal-500/20 text-teal-400 border border-teal-500/40 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="font-heading font-bold text-xl text-white">Message Received!</h4>
                  <p className="text-sm text-slate-300 max-w-sm mx-auto">
                    Thank you for contacting Dr. Isha Singh, DDS. Our patient care coordinator will review your inquiry and get back to you shortly.
                  </p>
                  <button
                    onClick={() => setFormSent(false)}
                    className="px-6 py-2.5 text-xs font-semibold text-slate-300 bg-slate-800 rounded-xl border border-slate-700"
                  >
                    Send Another Message
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
