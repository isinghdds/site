import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, Sparkles, Shield, Clock } from 'lucide-react';
import { practiceInfo } from '../data/websiteData';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About Dr. Singh', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Smile Gallery', href: '#gallery' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact & Hours', href: '#contact' },
  ];

  return (
    <>
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-teal-900 via-teal-800 to-slate-900 text-teal-100 text-xs py-2 px-4 text-center font-medium flex items-center justify-center gap-4 border-b border-teal-800/40">
        <span className="flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-teal-300 animate-pulse" />
          Accepting New Patients & Emergency Appointments
        </span>
        <span className="hidden md:inline-block text-teal-500">•</span>
        <span className="hidden md:flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-teal-300" />
          Mon - Thu: 8am - 5:30pm | Fri: 8am - 3pm
        </span>
        <span className="hidden lg:inline-block text-teal-500">•</span>
        <a 
          href={`tel:${practiceInfo.phone.replace(/[^0-9]/g, '')}`} 
          className="hidden lg:flex items-center gap-1 hover:text-white font-semibold underline decoration-teal-400"
        >
          <Phone className="w-3 h-3" /> {practiceInfo.phone}
        </a>
      </div>

      {/* Main Navbar */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled ? 'glass-panel shadow-2xl py-3' : 'bg-slate-900/80 backdrop-blur-md py-5 border-b border-slate-800'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl teal-gradient-bg flex items-center justify-center text-white shadow-lg shadow-teal-900/50 group-hover:scale-105 transition-transform">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-lg sm:text-xl text-white tracking-tight leading-none group-hover:text-teal-300 transition-colors">
                  {practiceInfo.name}
                </span>
                <span className="text-[11px] font-medium text-teal-400 tracking-wider uppercase mt-1">
                  Cosmetic & Family Dentistry
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-300 hover:text-teal-300 px-3 py-2 text-sm font-medium rounded-lg hover:bg-slate-800/60 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right CTAs */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`tel:${practiceInfo.phone.replace(/[^0-9]/g, '')}`}
                className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-teal-400" />
                <span>{practiceInfo.phone}</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-bold text-white teal-gradient-bg rounded-xl hover:opacity-95 transition-all shadow-md shadow-teal-900/30 hover:shadow-teal-600/40 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={onOpenBooking}
                className="sm:hidden px-3 py-1.5 text-xs font-bold text-white teal-gradient-bg rounded-lg"
              >
                Book
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-400 hover:text-white bg-slate-800 rounded-lg border border-slate-700 focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-teal-400" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden glass-panel mt-3 border-t border-slate-800 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-4 duration-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:text-white hover:bg-slate-800"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
              <a
                href={`tel:${practiceInfo.phone.replace(/[^0-9]/g, '')}`}
                className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold text-slate-200 bg-slate-800 rounded-xl border border-slate-700"
              >
                <Phone className="w-4 h-4 text-teal-400" />
                <span>Call {practiceInfo.phone}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 text-sm font-bold text-white teal-gradient-bg rounded-xl flex items-center justify-center gap-2 shadow-lg"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule Consultation</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
