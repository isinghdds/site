import React from 'react';
import { Award, GraduationCap, Heart, Check, Sparkles, Calendar, ArrowRight } from 'lucide-react';
import { doctorInfo } from '../data/simplifiedData';

export default function AboutPage({ onBookClick, onExploreTips }) {
  return (
    <div className="py-12 sm:py-16 space-y-16 animate-in fade-in duration-300">
      
      {/* Hero Header */}
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-950/80 border border-teal-800 text-teal-300 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" /> Welcome to Dr. Singh's Practice
        </div>
        
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
          Gentle, Modern & Caring <br />
          <span className="teal-gradient-text">Dental Care for Every Patient</span>
        </h1>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          {doctorInfo.tagline}
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={onBookClick}
            className="w-full sm:w-auto px-7 py-3.5 text-sm font-bold text-white teal-gradient-bg rounded-xl shadow-lg hover:opacity-95 flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Your Appointment</span>
          </button>
          
          <button
            onClick={onExploreTips}
            className="w-full sm:w-auto px-6 py-3.5 text-sm font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 rounded-xl border border-slate-700 flex items-center justify-center gap-2"
          >
            <span>Read Dental Health Tips</span>
            <ArrowRight className="w-4 h-4 text-teal-400" />
          </button>
        </div>
      </div>

      {/* Main Profile Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Photo Card */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-2xl overflow-hidden border border-slate-700 glass-panel shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80"
              alt="Dr. Isha Singh, DDS"
              className="w-full h-96 object-cover object-top"
            />
            <div className="p-4 bg-slate-900 border-t border-slate-800 text-center">
              <h3 className="font-heading font-bold text-xl text-white">{doctorInfo.name}</h3>
              <p className="text-xs text-teal-400 font-medium">{doctorInfo.title}</p>
            </div>
          </div>
        </div>

        {/* Biography & Credentials */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <div>
            <h2 className="font-heading font-bold text-2xl text-white mb-3">
              About Dr. Isha Singh, DDS
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {doctorInfo.bio}
            </p>
          </div>

          <div className="pt-2">
            <h3 className="font-heading font-semibold text-xs text-teal-400 uppercase tracking-wider mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" /> Professional Credentials
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {doctorInfo.credentials.map((cred, idx) => (
                <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <Check className="w-4 h-4 text-teal-400 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-200 font-medium">{cred}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Highlight Box */}
          <div className="p-4 rounded-xl bg-teal-950/50 border border-teal-800/60 flex items-center gap-3">
            <Heart className="w-5 h-5 text-teal-300 shrink-0" />
            <p className="text-xs text-teal-200 leading-relaxed">
              "We take pride in creating a stress-free environment where every treatment is explained clearly and performed gently."
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}
