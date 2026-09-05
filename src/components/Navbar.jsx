import React from 'react';
import { Sparkles } from 'lucide-react';
import { doctorInfo } from '../data/simplifiedData';

export default function Navbar({ activeTab, setActiveTab }) {
  const navItems = [
    { id: 'about', label: 'About Dr. Singh' },
    { id: 'tips', label: 'Dental Tips' },
    { id: 'contact', label: 'Contact Us' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#faf8f5]/90 backdrop-blur-md border-b border-stone-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <button 
          onClick={() => setActiveTab('about')}
          className="flex items-center gap-3 text-left group"
        >
          <div className="w-10 h-10 rounded-full bg-aura-800 flex items-center justify-center text-white shadow-sm group-hover:bg-aura-700 transition-colors">
            <Sparkles className="w-5 h-5 text-amber-200" />
          </div>
          <div>
            <span className="font-serif font-bold text-lg sm:text-xl text-stone-900 group-hover:text-aura-700 transition-colors block leading-tight">
              {doctorInfo.name}
            </span>
            <span className="text-[11px] text-aura-700 font-medium tracking-wide uppercase">
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
              className={`px-3.5 sm:px-5 py-2 text-xs sm:text-sm font-medium rounded-full transition-all ${
                activeTab === item.id
                  ? 'bg-aura-800 text-white shadow-sm font-semibold'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
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
