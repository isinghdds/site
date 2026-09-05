import React from 'react';
import { doctorInfo } from '../data/simplifiedData';

export default function Navbar({ activeTab, setActiveTab }) {
  const navItems = [
    { id: 'about', label: 'About Dr. Singh' },
    { id: 'tips', label: 'Dental Tips' },
    { id: 'contact', label: 'Contact Us' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#fcfcfc]/90 backdrop-blur-md border-b border-[#afe3e2]/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        
        {/* Official Brand Logo Icon + Typography */}
        <button 
          onClick={() => setActiveTab('about')}
          className="flex items-center gap-3 text-left group"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl overflow-hidden bg-white border border-[#afe3e2]/60 p-1 shadow-sm mix-blend-multiply group-hover:scale-105 transition-transform flex items-center justify-center">
            <img
              src="/logo-icon.jpg"
              alt="Isha Singh DDS Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <span className="font-serif font-bold text-lg sm:text-xl text-slate-900 group-hover:text-slate-700 transition-colors block leading-tight">
              {doctorInfo.name}
            </span>
            <span className="text-[11px] text-slate-600 font-semibold tracking-wide uppercase">
              {doctorInfo.title}
            </span>
          </div>
        </button>

        {/* Navigation Links */}
        <nav className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`px-3.5 sm:px-5 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all ${
                activeTab === item.id
                  ? 'bg-[#afe3e2] text-slate-900 shadow-sm'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-[#afe3e2]/30'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

      </div>
    </header>
  );
}
