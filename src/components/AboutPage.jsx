import React from 'react';
import { GraduationCap, Heart, Check, Sparkles, ArrowRight, Globe } from 'lucide-react';
import { doctorInfo } from '../data/simplifiedData';

export default function AboutPage({ onExploreTips, onContactClick }) {
  return (
    <div className="py-10 sm:py-16 space-y-16 animate-in fade-in duration-300">
      
      {/* Hero Section */}
      <div className="max-w-3xl mx-auto text-center space-y-5">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full badge-mint text-xs font-semibold shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-slate-900" /> Welcome to Dr. Singh's Practice
        </div>
        
        <h1 className="font-serif font-bold text-3xl sm:text-5xl text-slate-900 tracking-tight leading-[1.2]">
          Gentle, Modern & Compassionate <br />
          <span className="italic font-normal text-slate-800 underline decoration-[#f2b7b7] decoration-wavy decoration-2">
            Dental Care
          </span>
        </h1>

        <p className="text-slate-700 text-base sm:text-lg max-w-xl mx-auto leading-relaxed font-normal">
          {doctorInfo.tagline}
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={onExploreTips}
            className="w-full sm:w-auto px-6 py-3 text-xs sm:text-sm font-semibold text-slate-800 bg-white hover:bg-slate-100 rounded-full border border-[#afe3e2] flex items-center justify-center gap-2 shadow-sm transition-all"
          >
            <span>Read Dental Health Tips</span>
            <ArrowRight className="w-4 h-4 text-slate-900" />
          </button>

          <button
            onClick={onContactClick}
            className="w-full sm:w-auto px-6 py-3 text-xs sm:text-sm font-bold btn-mint rounded-full shadow-sm flex items-center justify-center gap-2 transition-all"
          >
            <span>Contact Office</span>
          </button>
        </div>
      </div>

      {/* Main Profile Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Photo Card & Languages */}
        <div className="lg:col-span-5 space-y-4">
          <div className="theme-card rounded-3xl overflow-hidden p-3 shadow-sm border border-[#afe3e2]/40">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/dr-isha-singh.jpg"
                alt="Dr. Isha Singh, DDS"
                className="w-full h-96 object-cover object-top"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="font-serif font-bold text-xl text-slate-900">{doctorInfo.name}</h3>
              <p className="text-xs text-slate-700 font-semibold mt-0.5">{doctorInfo.title}</p>
            </div>
          </div>

          {/* Languages Spoken Box */}
          <div className="theme-card p-4 rounded-2xl flex items-center justify-between border border-[#afe3e2]/40">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
              <Globe className="w-4 h-4 text-slate-900" />
              <span>Languages Spoken:</span>
            </div>
            <div className="flex gap-2">
              {doctorInfo.languages.map((lang, idx) => (
                <span key={idx} className="px-3 py-1 text-xs font-semibold rounded-full badge-blush">
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Biography & Qualifications */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <div className="theme-card p-7 rounded-3xl space-y-4 border border-[#afe3e2]/40">
            <h2 className="font-serif font-bold text-2xl text-slate-900">
              About Dr. Isha Singh, DDS
            </h2>
            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed whitespace-pre-line">
              {doctorInfo.bio}
            </div>
          </div>

          <div className="theme-card p-6 rounded-3xl space-y-3 border border-[#afe3e2]/40">
            <h3 className="font-serif font-bold text-lg text-slate-900 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-slate-900" /> Qualifications & Education
            </h3>
            
            <div className="space-y-3">
              {doctorInfo.credentials.map((cred, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#afe3e2]/15 border border-[#afe3e2]/40">
                  <Check className="w-4 h-4 text-slate-900 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm sm:text-base text-slate-900 font-bold">{cred.degree}</div>
                    <div className="text-xs sm:text-sm text-slate-600 font-medium mt-0.5">{cred.school}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quote Card */}
          <div className="p-5 rounded-2xl bg-[#f2b7b7]/25 border border-[#f2b7b7]/50 flex items-center gap-3">
            <Heart className="w-5 h-5 text-slate-900 shrink-0" />
            <p className="text-xs sm:text-sm text-slate-900 font-serif italic leading-relaxed font-medium">
              "Driven by the belief that oral health is paramount to overall well-being."
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}
