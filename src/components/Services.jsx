import React, { useState } from 'react';
import { 
  Sparkles, 
  Smile, 
  ShieldCheck, 
  Activity, 
  HeartPulse, 
  Award, 
  Zap, 
  Stethoscope, 
  ArrowRight, 
  Info 
} from 'lucide-react';
import { serviceCategories, servicesList } from '../data/websiteData';
import ServiceModal from './ServiceModal';

const iconMap = {
  Sparkles,
  Smile,
  ShieldCheck,
  Activity,
  HeartPulse,
  Award,
  Zap,
  Stethoscope
};

export default function Services({ onBookService }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedService, setSelectedService] = useState(null);

  const filteredServices = activeCategory === 'all' 
    ? servicesList 
    : servicesList.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/80 border border-teal-800 text-teal-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Comprehensive Care Options
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Tailored Dental Treatments
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            From routine preventive checkups to transformative cosmetic smile makeovers, Dr. Isha Singh delivers world-class precision with maximum comfort.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {serviceCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'teal-gradient-bg text-white shadow-lg shadow-teal-900/50 scale-105'
                  : 'bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const IconComponent = iconMap[service.icon] || Sparkles;

            return (
              <div
                key={service.id}
                className="group relative rounded-2xl glass-card border border-slate-800 hover:border-teal-500/50 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-950/30"
              >
                <div>
                  {/* Category Pill & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-teal-950/80 border border-teal-700/60 flex items-center justify-center text-teal-300 group-hover:scale-110 group-hover:bg-teal-600 group-hover:text-white transition-all shadow-md">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <span className="text-[11px] font-semibold uppercase tracking-wider text-teal-400 bg-teal-950/80 border border-teal-800/80 px-2.5 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="font-heading font-bold text-xl text-white mb-2 group-hover:text-teal-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="space-y-2 mb-6">
                    {service.highlights.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-400 hover:text-teal-300 group/link"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>View Details</span>
                  </button>

                  <button
                    onClick={() => onBookService(service.title)}
                    className="px-3.5 py-2 text-xs font-bold text-slate-200 hover:text-white bg-slate-800 hover:bg-teal-700 border border-slate-700 hover:border-teal-600 rounded-xl transition-all flex items-center gap-1.5"
                  >
                    <span>Book</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onBookService={onBookService}
        />
      )}
    </section>
  );
}
