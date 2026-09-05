import React from 'react';
import { X, Check, Calendar, ArrowRight, Sparkles, Shield, Clock } from 'lucide-react';

export default function ServiceModal({ service, onClose, onBookService }) {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden glass-panel">
        
        {/* Modal Header */}
        <div className="relative p-6 sm:p-8 bg-gradient-to-br from-slate-800 to-slate-900 border-b border-slate-800">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white bg-slate-800/80 rounded-xl border border-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="inline-block px-3 py-1 text-xs font-semibold text-teal-400 bg-teal-950 border border-teal-800 rounded-full uppercase tracking-wider mb-2">
            {service.category} Dentistry
          </span>

          <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
            {service.title}
          </h3>
          <p className="text-slate-300 text-sm mt-2">
            {service.shortDesc}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          <div>
            <h4 className="font-heading font-semibold text-white text-base mb-2">Overview & Clinical Benefits</h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              {service.fullDesc}
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white text-base mb-3">Key Advantages</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <div className="w-5 h-5 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-200 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Info Banner */}
          <div className="p-4 rounded-xl bg-teal-950/60 border border-teal-800/60 flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-teal-300 shrink-0" />
            <p className="text-xs text-teal-200">
              Dr. Isha Singh uses advanced digital imaging for precise, painless treatment planning with maximum longevity.
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 bg-slate-950/80 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-slate-400 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-teal-400" /> Consultations available Mon - Sat
          </span>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-5 py-2.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 rounded-xl border border-slate-700"
            >
              Close
            </button>

            <button
              onClick={() => {
                onClose();
                onBookService(service.title);
              }}
              className="w-1/2 sm:w-auto px-6 py-2.5 text-xs font-bold text-white teal-gradient-bg rounded-xl flex items-center justify-center gap-2 shadow-lg hover:opacity-95"
            >
              <Calendar className="w-4 h-4" />
              <span>Book This Service</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
