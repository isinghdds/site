import React from 'react';
import { GraduationCap, Heart, Check, Sparkles, ArrowRight, Globe } from 'lucide-react';
import { doctorInfo } from '../data/simplifiedData';

export default function AboutPage({ onExploreTips, onContactClick }) {
  return (
    <div className="py-10 sm:py-16 space-y-16 animate-in fade-in duration-300">
      
      {/* Hero Section */}
      <div className="max-w-3xl mx-auto text-center space-y-5">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full aura-badge text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-aura-600" /> Welcome to Dr. Singh's Practice
        </div>
        
        <h1 className="font-serif font-bold text-3xl sm:text-5xl text-stone-900 tracking-tight leading-[1.2]">
          Gentle, Modern & Compassionate <br />
          <span className="italic font-normal text-aura-700">Dental Care</span>
        </h1>

        <p className="text-stone-600 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          {doctorInfo.tagline}
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={onExploreTips}
            className="w-full sm:w-auto px-6 py-3 text-xs sm:text-sm font-semibold text-stone-700 hover:text-stone-900 bg-white hover:bg-stone-100 rounded-full border border-stone-300 flex items-center justify-center gap-2 shadow-sm transition-all"
          >
            <span>Read Dental Health Tips</span>
            <ArrowRight className="w-4 h-4 text-aura-700" />
          </button>

          <button
            onClick={onContactClick}
            className="w-full sm:w-auto px-6 py-3 text-xs sm:text-sm font-semibold text-white aura-gradient-btn rounded-full shadow-md flex items-center justify-center gap-2 transition-all"
          >
            <span>Contact Office</span>
          </button>
        </div>
      </div>

      {/* Main Profile Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Photo Card & Languages */}
        <div className="lg:col-span-5 space-y-4">
          <div className="aura-card rounded-3xl overflow-hidden p-3 shadow-sm border border-stone-200">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/dr-isha-singh.jpg"
                alt="Dr. Isha Singh, DDS"
                className="w-full h-96 object-cover object-top"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="font-serif font-bold text-xl text-stone-900">{doctorInfo.name}</h3>
              <p className="text-xs text-aura-700 font-medium mt-0.5">{doctorInfo.title}</p>
            </div>
          </div>

          {/* Languages Spoken Box */}
          <div className="aura-card p-4 rounded-2xl border border-stone-200 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-semibold text-stone-700">
              <Globe className="w-4 h-4 text-aura-600" />
              <span>Languages Spoken:</span>
            </div>
            <div className="flex gap-2">
              {doctorInfo.languages.map((lang, idx) => (
                <span key={idx} className="px-3 py-1 text-xs font-semibold text-aura-800 aura-badge rounded-full">
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Biography & Qualifications */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <div className="aura-card p-7 rounded-3xl space-y-4">
            <h2 className="font-serif font-bold text-2xl text-stone-900">
              About Dr. Isha Singh, DDS
            </h2>
            <div className="space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed whitespace-pre-line">
              {doctorInfo.bio}
            </div>
          </div>

          <div className="aura-card p-6 rounded-3xl space-y-3">
            <h3 className="font-serif font-bold text-lg text-stone-900 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-aura-600" /> Qualifications & Education
            </h3>
            
            <div className="space-y-2">
              {doctorInfo.credentials.map((cred, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-stone-50 border border-stone-200/80">
                  <Check className="w-4 h-4 text-aura-700 shrink-0" />
                  <span className="text-xs sm:text-sm text-stone-800 font-medium">{cred}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quote Card */}
          <div className="p-5 rounded-2xl bg-aura-100/70 border border-aura-200 flex items-center gap-3">
            <Heart className="w-5 h-5 text-aura-700 shrink-0" />
            <p className="text-xs sm:text-sm text-aura-900 font-serif italic leading-relaxed">
              "Driven by the belief that oral health is paramount to overall well-being."
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}
