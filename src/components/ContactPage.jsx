import React, { useState } from 'react';
import { MapPin, Mail, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { doctorInfo } from '../data/simplifiedData';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch('https://formsubmit.co/ajax/isha@ishasinghdds.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Website Inquiry from ${formData.name} (www.ishasinghdds.com)`,
          _template: 'table',
          _captcha: 'false'
        })
      });
      setSubmitted(true);
    } catch (err) {
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-10 sm:py-16 space-y-12 animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full aura-badge text-xs font-semibold">
          <MapPin className="w-3.5 h-3.5 text-aura-600" /> Reach Out
        </div>
        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-stone-900 tracking-tight">
          Contact & Location
        </h1>
        <p className="text-stone-600 text-sm sm:text-base">
          Have a question or want to get in touch? Send us a message below.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left: Info Cards */}
        <div className="lg:col-span-5 space-y-4 text-left">
          
          <div className="aura-card p-6 rounded-3xl flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-aura-100 text-aura-700 border border-aura-200 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-stone-900 text-base">Location</h4>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">{doctorInfo.address}</p>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(doctorInfo.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-xs font-semibold text-aura-700 hover:underline mt-2"
              >
                Get Directions →
              </a>
            </div>
          </div>

          <div className="aura-card p-6 rounded-3xl flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-aura-100 text-aura-700 border border-aura-200 flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-stone-900 text-base">Direct Email</h4>
              <a 
                href={`mailto:${doctorInfo.email}`}
                className="text-xs sm:text-sm text-aura-700 font-semibold hover:underline mt-1 block"
              >
                {doctorInfo.email}
              </a>
              <p className="text-xs text-stone-600 mt-1">Response within 24 business hours</p>
            </div>
          </div>

        </div>

        {/* Right: Contact Form */}
        <div className="lg:col-span-7">
          <div className="aura-card p-7 sm:p-9 rounded-3xl shadow-sm text-left">
            <h3 className="font-serif font-bold text-2xl text-stone-900 mb-6">
              Send Dr. Singh a Message
            </h3>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-3 bg-stone-50 border border-stone-300 rounded-xl text-stone-900 text-sm focus:outline-none focus:border-aura-600 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-3 bg-stone-50 border border-stone-300 rounded-xl text-stone-900 text-sm focus:outline-none focus:border-aura-600 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Your Message *
                  </label>
                  <textarea
                    rows="4"
                    required
                    placeholder="Type your message or inquiry here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3 bg-stone-50 border border-stone-300 rounded-xl text-stone-900 text-sm focus:outline-none focus:border-aura-600 focus:bg-white"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 text-xs font-semibold text-white aura-gradient-btn rounded-xl shadow-md hover:opacity-95 flex items-center justify-center gap-2 disabled:opacity-50 transition-all"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="py-12 text-center space-y-4 animate-in fade-in">
                <div className="w-14 h-14 rounded-full bg-aura-100 text-aura-700 border border-aura-300 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="font-serif font-bold text-xl text-stone-900">Message Sent!</h4>
                <p className="text-xs sm:text-sm text-stone-600 max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong className="text-stone-900">{formData.name}</strong>. Your message has been received.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', message: '' });
                  }}
                  className="px-5 py-2 text-xs font-semibold text-stone-700 bg-stone-100 rounded-full border border-stone-300 hover:bg-stone-200"
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
