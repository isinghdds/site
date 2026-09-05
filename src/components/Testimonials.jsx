import React from 'react';
import { Star, Quote, Sparkles, CheckCircle2 } from 'lucide-react';
import { testimonials } from '../data/websiteData';

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 relative bg-slate-900/60 border-t border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-700/50 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 fill-amber-300" /> Patient Feedback
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Loved by Hundreds of Patients
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Read authentic reviews from patients who experienced Dr. Isha Singh’s gentle dental care firsthand.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="glass-card rounded-2xl p-7 border border-slate-800 flex flex-col justify-between relative group hover:border-teal-500/40 transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-slate-800 group-hover:text-teal-900/40 transition-colors pointer-events-none" />

              <div className="space-y-4">
                {/* Rating Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-slate-300 text-sm leading-relaxed italic">
                  "{item.comment}"
                </p>
              </div>

              {/* Patient Profile Footer */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-teal-500/40"
                />
                <div>
                  <h4 className="font-heading font-bold text-white text-sm flex items-center gap-1.5">
                    {item.name}
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                  </h4>
                  <p className="text-xs text-slate-400">{item.role} • {item.location}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Overall Rating Badge Banner */}
        <div className="mt-12 max-w-xl mx-auto glass-panel rounded-2xl p-4 sm:p-6 border border-teal-500/30 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 font-extrabold text-lg">
              5.0
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-300 mt-0.5">Based on 500+ Google & Healthgrades reviews</p>
            </div>
          </div>

          <a
            href="#contact"
            className="px-4 py-2 text-xs font-bold text-teal-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-all"
          >
            Read All Reviews
          </a>
        </div>

      </div>
    </section>
  );
}
