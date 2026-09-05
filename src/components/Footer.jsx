import React from 'react';
import { Sparkles, Shield } from 'lucide-react';
import { doctorInfo } from '../data/simplifiedData';

export default function Footer({ setActiveTab }) {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-10 text-slate-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg teal-gradient-bg flex items-center justify-center text-white">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <span className="font-heading font-bold text-white text-sm block">
              {doctorInfo.name}
            </span>
            <span className="text-[11px] text-teal-400">www.ishasinghdds.com</span>
          </div>
        </div>

        {/* Center: Nav links */}
        <div className="flex items-center gap-6">
          <button onClick={() => setActiveTab('about')} className="hover:text-white transition-colors">
            About Dr. Singh
          </button>
          <button onClick={() => setActiveTab('tips')} className="hover:text-white transition-colors">
            Dental Tips
          </button>
          <button onClick={() => setActiveTab('contact')} className="hover:text-white transition-colors">
            Contact Us
          </button>
        </div>

        {/* Right: Copyright */}
        <div className="text-center md:text-right space-y-1">
          <p>© {new Date().getFullYear()} {doctorInfo.name}. All rights reserved.</p>
          <p className="text-[11px] text-slate-400">Hosted on Cloudflare Pages</p>
        </div>

      </div>
    </footer>
  );
}
