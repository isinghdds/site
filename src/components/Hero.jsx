import React from 'react';
import { Calendar, ShieldCheck, Sparkles, Star, ArrowRight, CheckCircle2, Award, HeartHandshake } from 'lucide-react';
import { practiceInfo } from '../data/websiteData';

export default function Hero({ onOpenBooking }) {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-28">
      {/* Background Subtle Gradient Glow Orbs */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-950/70 border border-teal-700/50 text-teal-300 text-xs sm:text-sm font-semibold shadow-sm">
              <Sparkles className="w-4 h-4 text-teal-400" />
              <span>Welcoming New Patients to Our Practice</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.15]">
              Gentle Dental Care for Your <br className="hidden sm:inline" />
              <span className="teal-gradient-text">Radiant, Healthy Smile</span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Experience modern, pain-free dentistry with <strong className="text-white font-semibold">Dr. Isha Singh, DDS</strong>. From routine cleanings & Invisalign® to full smile makeovers, we deliver compassionate, personalized care in a state-of-the-art comforting atmosphere.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-7 py-4 rounded-xl teal-gradient-bg text-white font-bold text-base shadow-xl shadow-teal-950/50 hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group"
              >
                <Calendar className="w-5 h-5 text-white" />
                <span>Schedule Consultation</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#services"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-base border border-slate-700 hover:border-slate-600 transition-all flex items-center justify-center gap-2"
              >
                <span>Explore Services</span>
              </a>
            </div>

            {/* Feature Highlights Row */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-left">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-teal-900/50 border border-teal-700/50 flex items-center justify-center text-teal-400 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm text-slate-300 font-medium">Painless Anesthesia</span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-teal-900/50 border border-teal-700/50 flex items-center justify-center text-teal-400 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm text-slate-300 font-medium">Invisalign® Preferred</span>
              </div>

              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <div className="w-8 h-8 rounded-lg bg-teal-900/50 border border-teal-700/50 flex items-center justify-center text-teal-400 shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm text-slate-300 font-medium">Top Rated DDS</span>
              </div>
            </div>

          </div>

          {/* Right Visual Image Card Stack */}
          <div className="lg:col-span-5 relative">
            
            {/* Main Visual Container */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Glow frame */}
              <div className="absolute -inset-1 rounded-3xl teal-gradient-bg opacity-30 blur-lg"></div>

              {/* Main Image Card */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 glass-panel shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
                  alt="Modern Dental Clinic - Dr. Isha Singh DDS"
                  className="w-full h-80 sm:h-96 object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                
                {/* Gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-0 inset-x-0 p-5 flex items-center justify-between">
                  <div>
                    <h3 className="font-heading font-bold text-white text-lg">State-of-the-Art Care</h3>
                    <p className="text-xs text-slate-300">Modern digital 3D intraoral scanning & low radiation</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-teal-600/90 text-white flex items-center justify-center shadow-lg">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Floating Stat Card 1: 5-Star Rating */}
              <div className="absolute -top-4 -left-4 sm:-left-6 glass-panel px-4 py-3 rounded-2xl border border-teal-500/30 shadow-xl flex items-center gap-3 animate-float">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Star className="w-5 h-5 fill-amber-400" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-white text-sm">5.0 Star Rating</span>
                  </div>
                  <p className="text-[11px] text-slate-300">500+ Verified Patient Reviews</p>
                </div>
              </div>

              {/* Floating Stat Card 2: Satisfied Patients */}
              <div className="absolute -bottom-5 -right-4 sm:-right-6 glass-panel px-4 py-3 rounded-2xl border border-teal-500/30 shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-300">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-white text-sm">6,500+ Smiles</p>
                  <p className="text-[11px] text-teal-300 font-medium">Restored & Perfected</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
