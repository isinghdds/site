import React from 'react';
import { Sparkles, ShieldCheck, Heart, Smile, Zap, CheckCircle, Lightbulb } from 'lucide-react';
import { dentalTips } from '../data/simplifiedData';

const iconMap = {
  Sparkles,
  ShieldCheck,
  Heart,
  Smile,
  Zap,
  CheckCircle
};

export default function TipsPage({ onContactClick }) {
  return (
    <div className="py-10 sm:py-16 space-y-12 animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full badge-mint text-xs font-semibold">
          <Lightbulb className="w-3.5 h-3.5 text-slate-900" /> Patient Guidance
        </div>
        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
          Dental Health & Oral Care Tips
        </h1>
        <p className="text-slate-700 text-sm sm:text-base max-w-xl mx-auto">
          Practical advice from Dr. Isha Singh, DDS to keep your teeth strong, bright, and healthy between visits.
        </p>
      </div>

      {/* Grid of Tips */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dentalTips.map((tip, idx) => {
          const Icon = iconMap[tip.icon] || Sparkles;
          const isEven = idx % 2 === 0;

          return (
            <div
              key={tip.id}
              className="theme-card theme-card-hover rounded-3xl p-6 flex flex-col justify-between space-y-4 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    isEven ? 'bg-[#afe3e2] text-slate-900' : 'bg-[#f2b7b7] text-slate-900'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`text-[11px] font-semibold px-3 py-1 rounded-full ${
                    isEven ? 'badge-mint' : 'badge-blush'
                  }`}>
                    {tip.category}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-lg text-slate-900 mb-2 group-hover:text-slate-800 transition-colors">
                  {tip.title}
                </h3>

                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                  {tip.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Information Banner */}
      <div className="max-w-3xl mx-auto theme-card p-6 sm:p-8 rounded-3xl text-center space-y-3 bg-[#afe3e2]/20 border border-[#afe3e2]/60">
        <h3 className="font-serif font-bold text-xl text-slate-900">
          Have Questions About Your Oral Health?
        </h3>
        <p className="text-xs sm:text-sm text-slate-700 max-w-xl mx-auto">
          Preventive care is the best way to maintain a lifelong healthy smile. Reach out to our office for any inquiries.
        </p>
        <button
          onClick={onContactClick}
          className="px-6 py-2.5 text-xs font-bold btn-mint rounded-full shadow-sm hover:opacity-95 transition-all"
        >
          Contact Our Office
        </button>
      </div>

    </div>
  );
}
