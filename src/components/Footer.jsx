import React from 'react';
import { doctorInfo } from '../data/simplifiedData';

export default function Footer({ setActiveTab }) {
  return (
    <footer className="bg-[#fcfcfc] border-t border-[#afe3e2]/40 py-10 text-slate-600 text-xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Official Logo & Domain */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.jpg"
            alt="Isha Singh DDS Logo"
            className="h-10 w-auto object-contain mix-blend-multiply"
          />
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
        <div className="text-center md:text-right space-y-0.5">
          <p>© {new Date().getFullYear()} {doctorInfo.name}. All rights reserved.</p>
          <p className="text-[11px] text-slate-500">Hosted on Cloudflare Pages</p>
        </div>

      </div>
    </footer>
  );
}
