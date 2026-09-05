import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Sparkles } from 'lucide-react';
import { doctorInfo } from '../data/simplifiedData';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-12 sm:py-16 space-y-12 animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/80 border border-teal-800 text-teal-400 text-xs font-semibold uppercase tracking-wider">
          <MapPin className="w-3.5 h-3.5" /> Reach Out
        </div>
        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
          Contact & Location
        </h1>
        <p className="text-slate-300 text-sm sm:text-base">
          Have a question or want to schedule an appointment? We are here to help.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left: Info & Hours */}
        <div className="lg:col-span-5 space-y-6 text-left">
          
          <div className="space-y-4">
            <div className="glass-card p-5 rounded-2xl border border-slate-800 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl teal-gradient-bg text-white flex items-center justify-center shrink-0 shadow-md">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-white text-base">Office Address</h4>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">{doctorInfo.address}</p>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(doctorInfo.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-xs font-semibold text-teal-400 hover:underline mt-2"
                >
                  Get Directions →
                </a>
              </div>
            </div>

            <div className="glass-card p-5 rounded-2xl border border-slate-800 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl teal-gradient-bg text-white flex items-center justify-center shrink-0 shadow-md">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-white text-base">Phone & Email</h4>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">{doctorInfo.phone}</p>
                <p className="text-xs text-teal-400 font-medium">{doctorInfo.email}</p>
              </div>
            </div>
          </div>

          {/* Office Hours */}
          <div className="glass-card p-6 rounded-2xl border border-slate-800">
            <h4 className="font-heading font-bold text-white text-base mb-4 flex items-center gap-2">
              <Clock className="w-4 h-4 text-teal-400" /> Office Hours
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm">
              {doctorInfo.hours.map((h, idx) => (
                <div key={idx} className="flex justify-between border-b border-slate-800/80 pb-2 last:border-0 last:pb-0">
                  <span className="text-slate-300 font-medium">{h.day}</span>
                  <span className="text-teal-300 font-semibold">{h.time}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right: Contact Form */}
        <div className="lg:col-span-7">
          <div className="glass-card p-7 sm:p-9 rounded-3xl border border-slate-800 shadow-2xl text-left">
            <h3 className="font-heading font-extrabold text-2xl text-white mb-2">
              Send Us a Message
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mb-6">
              Fill out the form below to request an appointment or inquire about our services.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-3 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-teal-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-3 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-teal-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-3 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-teal-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Message or Preferred Appointment Time *
                  </label>
                  <textarea
                    rows="4"
                    required
                    placeholder="Tell us how we can help or specify preferred date/time..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-teal-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 text-xs font-bold text-white teal-gradient-bg rounded-xl shadow-lg hover:opacity-95 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            ) : (
              <div className="py-12 text-center space-y-4 animate-in fade-in">
                <div className="w-14 h-14 rounded-2xl bg-teal-500/20 text-teal-400 border border-teal-500/40 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="font-heading font-bold text-xl text-white">Thank You!</h4>
                <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto">
                  Your message has been received. Dr. Singh's team will get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2 text-xs font-semibold text-slate-300 bg-slate-800 rounded-xl border border-slate-700"
                >
                  Send Another Message
                </button>
              </div>
            )}

          </div>
        </div>

      </div>

    </div>
  );
}
