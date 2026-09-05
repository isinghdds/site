import React from 'react';
import { Sparkles, Phone, Mail, MapPin, Heart, Shield } from 'lucide-react';
import { practiceInfo } from '../data/websiteData';

export default function Footer({ onOpenBooking }) {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Brand & Domain info */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl teal-gradient-bg flex items-center justify-center text-white shadow-md">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-xl text-white tracking-tight">
                  {practiceInfo.name}
                </span>
                <span className="text-[11px] font-medium text-teal-400 tracking-wider uppercase">
                  www.ishasinghdds.com
                </span>
              </div>
            </a>

            <p className="text-sm text-slate-400 leading-relaxed">
              Providing modern, compassionate, gentle cosmetic and comprehensive family dentistry in a relaxing, state-of-the-art environment.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="px-5 py-2.5 text-xs font-bold text-white teal-gradient-bg rounded-xl shadow-md hover:opacity-95"
              >
                Schedule Your Appointment
              </button>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#about" className="hover:text-teal-300 transition-colors">About Dr. Singh</a></li>
              <li><a href="#services" className="hover:text-teal-300 transition-colors">Dental Services</a></li>
              <li><a href="#gallery" className="hover:text-teal-300 transition-colors">Smile Transformations</a></li>
              <li><a href="#why-us" className="hover:text-teal-300 transition-colors">Why Choose Us</a></li>
              <li><a href="#reviews" className="hover:text-teal-300 transition-colors">Patient Testimonials</a></li>
              <li><a href="#contact" className="hover:text-teal-300 transition-colors">Location & Hours</a></li>
            </ul>
          </div>

          {/* Col 3: Services Offered */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">
              Featured Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-teal-300 transition-colors">Porcelain Veneers</a></li>
              <li><a href="#services" className="hover:text-teal-300 transition-colors">Invisalign® Clear Aligners</a></li>
              <li><a href="#services" className="hover:text-teal-300 transition-colors">Medical Teeth Whitening</a></li>
              <li><a href="#services" className="hover:text-teal-300 transition-colors">Dental Implants & Restorations</a></li>
              <li><a href="#services" className="hover:text-teal-300 transition-colors">Preventive Oral Cleanings</a></li>
              <li><a href="#services" className="hover:text-teal-300 transition-colors">Same-Day Emergency Dental</a></li>
            </ul>
          </div>

          {/* Col 4: Contact & Cloudflare Badge */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">
              Direct Touchpoints
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-teal-400" />
                <span>{practiceInfo.phone}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-teal-400" />
                <span>{practiceInfo.email}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                <span>{practiceInfo.address}</span>
              </li>
            </ul>

            {/* Cloudflare Pages Badge */}
            <div className="pt-3">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-400">
                <Shield className="w-3.5 h-3.5 text-amber-400" />
                <span>Hosted on <strong>Cloudflare Pages</strong></span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Dr. Isha Singh, DDS. All rights reserved. Registered domain: <a href="https://www.ishasinghdds.com" className="text-teal-400 hover:underline">www.ishasinghdds.com</a></p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-300">ADA Accessibility</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
