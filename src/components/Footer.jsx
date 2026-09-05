import React from 'react';
import { Sparkles } from 'lucide-react';
import { doctorInfo } from '../data/simplifiedData';

export default function Footer({ setActiveTab }) {
  return (
    <footer className="bg-[#f4efe8] border-t border-stone-200 py-10 text-stone-600 text-xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-aura-800 flex items-center justify-center text-white">
            <Sparkles className="w-4 h-4 text-amber-200" />
          </div>
          <div>
            <span className="font-serif font-bold text-stone-900 text-sm block">
              {doctorInfo.name}
            </span>
            <span className="text-[11px] text-aura-700 font-medium">www.ishasinghdds.com</span>
          </div>
        </div>

        {/* Center: Nav links */}
        <div className="flex items-center gap-6 text-stone-700">
          <button onClick={() => setActiveTab('about')} className="hover:text-stone-900 font-medium transition-colors">
            About Dr. Singh
          </button>
          <button onClick={() => setActiveTab('tips')} className="hover:text-stone-900 font-medium transition-colors">
            Dental Tips
          </button>
          <button onClick={() => setActiveTab('contact')} className="hover:text-stone-900 font-medium transition-colors">
            Contact Us
          </button>
        </div>

        {/* Right: Copyright */}
        <div className="text-center md:text-right space-y-0.5">
          <p>© {new Date().getFullYear()} {doctorInfo.name}. All rights reserved.</p>
          <p className="text-[11px] text-stone-500">Hosted on Cloudflare Pages</p>
        </div>

      </div>
    </footer>
  );
}
