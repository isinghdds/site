import React, { useState } from 'react';
import { Sparkles, Phone, Calendar, Menu, X } from 'lucide-react';
import { doctorInfo } from '../data/simplifiedData';

export default function Navbar({ activeTab, setActiveTab, onBookClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'about', label: 'About Dr. Singh' },
    { id: 'tips', label: 'Dental Tips' },
    { id: 'contact', label: 'Contact Us' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <button 
          onClick={() => setActiveTab('about')}
          className="flex items-center gap-3 text-left group"
        >
          <div className="w-10 h-10 rounded-xl teal-gradient-bg flex items-center justify-center text-white shadow-md">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="font-heading font-bold text-lg text-white group-hover:text-teal-300 transition-colors block leading-none">
              {doctorInfo.name}
            </span>
            <span className="text-[11px] text-teal-400 font-medium tracking-wide">
              {doctorInfo.title}
            </span>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`px-4 py-2 text-sm font-semibold rounded-xl transition-all ${
                activeTab === item.id
                  ? 'teal-gradient-bg text-white shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`tel:${doctorInfo.phone.replace(/[^0-9]/g, '')}`}
            className="text-xs text-slate-300 hover:text-white font-medium flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-800 border border-slate-700"
          >
            <Phone className="w-3.5 h-3.5 text-teal-400" />
            <span>{doctorInfo.phone}</span>
          </a>

          <button
            onClick={onBookClick}
            className="px-4 py-2 text-xs font-bold text-white teal-gradient-bg rounded-xl shadow-md hover:opacity-95 flex items-center gap-1.5"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Visit</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 bg-slate-800 rounded-lg border border-slate-700"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-teal-400" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-900 px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left px-4 py-3 text-sm font-semibold rounded-xl ${
                activeTab === item.id ? 'teal-gradient-bg text-white' : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <a
              href={`tel:${doctorInfo.phone.replace(/[^0-9]/g, '')}`}
              className="w-full py-2.5 text-center text-xs font-medium text-slate-300 bg-slate-800 rounded-xl border border-slate-700"
            >
              Call {doctorInfo.phone}
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              className="w-full py-2.5 text-center text-xs font-bold text-white teal-gradient-bg rounded-xl"
            >
              Book Visit
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
