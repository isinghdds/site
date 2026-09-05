import React from 'react';
import { Cpu, HeartHandshake, ShieldCheck, DollarSign, Sparkles, Smile, Clock, ThumbsUp } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Cpu,
      title: "State-of-the-Art Technology",
      description: "Low-radiation digital 3D intraoral scanners, laser gum treatment, and digital cavity detection for maximum precision."
    },
    {
      icon: HeartHandshake,
      title: "Gentle, Pain-Free Philosophy",
      description: "Customized needle-free & gentle local anesthesia techniques designed specifically for patients with dental anxiety."
    },
    {
      icon: ShieldCheck,
      title: "Comprehensive Care Under One Roof",
      description: "From routine family cleanings to complex porcelain veneers and Invisalign aligners, no unnecessary referrals needed."
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing & PPO Friendly",
      description: "Clear upfront fee breakdowns before treatment. We file claims with most major PPO dental plans and offer financing."
    },
    {
      icon: Smile,
      title: "Spa-Like Comfort Amenities",
      description: "Enjoy noise-canceling headphones, ceiling TVs with Netflix, cozy warm blankets, and a soothing ambient environment."
    },
    {
      icon: Clock,
      title: "Zero Wait Time Guarantee",
      description: "We value your schedule. Appointments start promptly on time with flexible morning, evening, and Saturday slots."
    }
  ];

  return (
    <section id="why-us" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/80 border border-teal-800 text-teal-400 text-xs font-semibold uppercase tracking-wider">
            <ThumbsUp className="w-3.5 h-3.5" /> The Difference
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Why Patients Choose Dr. Isha Singh, DDS
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            We combine clinical mastery with gentle empathy to deliver an unmatched dental experience.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, idx) => {
            const Icon = item.icon;

            return (
              <div
                key={idx}
                className="glass-card rounded-2xl p-7 border border-slate-800 hover:border-teal-500/40 transition-all duration-300 hover:-translate-y-1 space-y-4 group"
              >
                <div className="w-12 h-12 rounded-xl teal-gradient-bg text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="font-heading font-bold text-xl text-white group-hover:text-teal-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
