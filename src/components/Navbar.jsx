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
        
        {/* Logo */}
        <button 
          onClick={() => setActiveTab('about')}
          className="flex items-center gap-3 text-left group"
        >
          <img
            src="/logo.jpg"
            alt="Isha Singh DDS Logo"
            className="h-12 sm:h-14 w-auto object-contain mix-blend-multiply transition-transform group-hover:scale-105"
          />
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
