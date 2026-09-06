import React from 'react';
import { doctorInfo } from '../data/simplifiedData';

export default function Footer({ setActiveTab }) {
  return (
    <footer className="bg-[#fcfcfc] border-t border-[#afe3e2]/40 py-10 text-slate-600 text-xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Official Logo Icon & Domain */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl overflow-hidden bg-white border border-[#afe3e2]/60 p-1 shadow-sm mix-blend-multiply flex items-center justify-center">
            <img
              src="/logo-icon.jpg"
              alt="Isha Singh DDS Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <span className="font-serif font-bold text-slate-900 text-sm block">
              {doctorInfo.name}
            </span>
            <span className="text-[11px] text-slate-700 font-semibold">www.ishasinghdds.com</span>
          </div>
        </div>

        {/* Center: Nav links */}
        <div className="flex items-center gap-6 text-slate-700">
          <button onClick={() => setActiveTab('about')} className="hover:text-slate-900 font-semibold transition-colors">
            About Dr. Singh
          </button>
          <button onClick={() => setActiveTab('tips')} className="hover:text-slate-900 font-semibold transition-colors">
            Dental Tips
          </button>
          <button onClick={() => setActiveTab('contact')} className="hover:text-slate-900 font-semibold transition-colors">
            Contact Us
          </button>
        </div>

        {/* Right: Copyright */}
        <div className="text-center md:text-right">
          <p>© {new Date().getFullYear()} {doctorInfo.name}. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
