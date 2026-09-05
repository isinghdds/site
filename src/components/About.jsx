import React from 'react';
import { Award, GraduationCap, Heart, Check, Sparkles, ShieldCheck } from 'lucide-react';
import { practiceInfo } from '../data/websiteData';

export default function About() {
  const credentials = [
    "Doctor of Dental Surgery (DDS) Degree with High Honors",
    "Post-Doctoral Certification in Aesthetic & Cosmetic Dentistry",
    "Certified Invisalign® Preferred Provider",
    "Advanced Dental Implantology & Bone Grafting Specialist",
    "Member, American Dental Association (ADA)",
    "Member, Academy of General Dentistry (AGD)"
  ];

  return (
    <section id="about" className="py-20 relative bg-slate-900/60 border-t border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/80 border border-teal-800 text-teal-400 text-xs font-semibold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5" /> Meet Your Dentist
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Dedicated to Gentle, High-Precision Dentistry
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Get to know Dr. Isha Singh, DDS, and her vision for warm, painless, patient-centered care.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Doctor Image Stack */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Backing Frame */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-teal-600 to-sky-600 opacity-20 blur-xl"></div>
              
              <div className="relative rounded-2xl overflow-hidden border border-slate-700 glass-card shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80"
                  alt="Dr. Isha Singh, DDS"
                  className="w-full h-[450px] object-cover object-top"
                />
                
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-6 text-white">
                  <span className="text-xs font-semibold text-teal-400 uppercase tracking-widest">Lead Dentist & Founder</span>
                  <h3 className="font-heading font-bold text-2xl text-white">Dr. Isha Singh, DDS</h3>
                  <p className="text-xs text-slate-300 mt-1">Cosmetic, Restorative & General Dentistry Specialist</p>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-4 glass-panel px-4 py-3 rounded-2xl border border-teal-500/40 shadow-2xl flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl teal-gradient-bg flex items-center justify-center text-white">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">12+ Years Experience</p>
                  <p className="text-xs text-slate-300">Continuous Dental Excellence</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Bio & Credentials */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-4">
              <h3 className="font-heading font-bold text-2xl text-white">
                "Every patient deserves a healthy smile they are proud to share with the world."
              </h3>
              <p className="text-slate-300 text-base leading-relaxed whitespace-pre-line">
                {practiceInfo.fullBio}
              </p>
            </div>

            {/* Key Qualifications Grid */}
            <div className="pt-4">
              <h4 className="font-heading font-semibold text-sm text-teal-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                <GraduationCap className="w-4 h-4" /> Education & Clinical Certifications
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {credentials.map((cred, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-800/40 border border-slate-700/60">
                    <div className="w-5 h-5 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-200 font-medium">{cred}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Practice Stats Row */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {practiceInfo.stats.map((stat, i) => (
                <div key={i} className="p-4 rounded-xl glass-card text-center border border-slate-800">
                  <p className="font-heading font-extrabold text-2xl sm:text-3xl teal-gradient-text">
                    {stat.value}
                  </p>
                  <p className="text-xs text-slate-400 mt-1 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
