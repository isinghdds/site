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

export default function TipsPage({ onBookClick }) {
  return (
    <div className="py-12 sm:py-16 space-y-12 animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/80 border border-teal-800 text-teal-400 text-xs font-semibold uppercase tracking-wider">
          <Lightbulb className="w-3.5 h-3.5" /> Patient Guidance
        </div>
        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
          Dental Health & Care Tips
        </h1>
        <p className="text-slate-300 text-sm sm:text-base">
          Practical advice from Dr. Isha Singh, DDS to keep your teeth strong, bright, and healthy between visits.
        </p>
      </div>

      {/* Grid of Tips */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dentalTips.map((tip) => {
          const Icon = iconMap[tip.icon] || Sparkles;

          return (
            <div
              key={tip.id}
              className="glass-card rounded-2xl p-6 border border-slate-800 hover:border-teal-500/40 transition-all flex flex-col justify-between space-y-4 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl teal-gradient-bg text-white flex items-center justify-center shadow-md">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-semibold text-teal-400 bg-teal-950/80 border border-teal-800 px-2.5 py-1 rounded-full">
                    {tip.category}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-lg text-white mb-2 group-hover:text-teal-300 transition-colors">
                  {tip.title}
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {tip.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA Banner */}
      <div className="max-w-3xl mx-auto glass-panel p-6 sm:p-8 rounded-2xl border border-teal-500/30 text-center space-y-4">
        <h3 className="font-heading font-bold text-xl text-white">
          Due for Your Semi-Annual Cleaning?
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
          Preventive care is the best way to avoid cavities and keep your smile shining. Schedule your checkup with Dr. Singh today!
        </p>
        <button
          onClick={onBookClick}
          className="px-6 py-3 text-xs font-bold text-white teal-gradient-bg rounded-xl shadow-md hover:opacity-95"
        >
          Book Your Checkup
        </button>
      </div>

    </div>
  );
}
