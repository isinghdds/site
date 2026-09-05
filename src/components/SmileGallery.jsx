import React, { useState } from 'react';
import { Sparkles, ArrowLeftRight, Clock, Award, CheckCircle } from 'lucide-react';
import { smileGalleryData } from '../data/websiteData';

export default function SmileGallery({ onOpenBooking }) {
  const [activeItem, setActiveItem] = useState(0);
  const [sliderPos, setSliderPos] = useState(50); // percentage for interactive comparison

  const current = smileGalleryData[activeItem];

  return (
    <section id="gallery" className="py-20 relative bg-slate-900/80 border-t border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/80 border border-teal-800 text-teal-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Real Patient Results
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Smile Transformations
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            See the life-changing results achieved by Dr. Isha Singh, DDS through cosmetic ceramic veneers, whitening, and clear aligners.
          </p>
        </div>

        {/* Gallery Navigation Selector */}
        <div className="flex justify-center gap-3 mb-10 overflow-x-auto pb-2">
          {smileGalleryData.map((item, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActiveItem(idx);
                setSliderPos(50);
              }}
              className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeItem === idx
                  ? 'teal-gradient-bg text-white shadow-lg shadow-teal-900/50 scale-105'
                  : 'bg-slate-800/80 hover:bg-slate-800 text-slate-300 border border-slate-700'
              }`}
            >
              <CheckCircle className="w-4 h-4" />
              <span>{item.title}</span>
            </button>
          ))}
        </div>

        {/* Main Showcase Card */}
        <div className="max-w-4xl mx-auto glass-card rounded-2xl border border-slate-700/80 overflow-hidden shadow-2xl p-6 sm:p-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Image Slider Display */}
            <div className="md:col-span-7">
              <div className="relative h-72 sm:h-80 rounded-xl overflow-hidden select-none border border-slate-700 shadow-inner group">
                
                {/* After Image (Full background) */}
                <img
                  src={current.imageAfter}
                  alt={`${current.title} After`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <span className="absolute top-3 right-3 z-10 px-3 py-1 bg-teal-600/90 text-white font-extrabold text-xs rounded-lg shadow">
                  AFTER
                </span>

                {/* Before Image (Clipped overlay) */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${sliderPos}%` }}
                >
                  <img
                    src={current.imageBefore}
                    alt={`${current.title} Before`}
                    className="absolute top-0 left-0 max-w-none h-full object-cover"
                    style={{ width: '100%', minWidth: '350px' }}
                  />
                  <span className="absolute top-3 left-3 z-10 px-3 py-1 bg-slate-900/90 text-slate-200 font-bold text-xs rounded-lg shadow border border-slate-700">
                    BEFORE
                  </span>
                </div>

                {/* Slider Handle Divider */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-xl z-20"
                  style={{ left: `${sliderPos}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full teal-gradient-bg text-white flex items-center justify-center shadow-lg border-2 border-white">
                    <ArrowLeftRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Range Slider Control overlay */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPos}
                  onChange={(e) => setSliderPos(Number(e.target.value))}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                  aria-label="Before and after slider handle"
                />
              </div>

              <p className="text-center text-xs text-slate-400 mt-3 flex items-center justify-center gap-1">
                <ArrowLeftRight className="w-3.5 h-3.5 text-teal-400" /> Drag slider left or right to compare transformation
              </p>
            </div>

            {/* Right Details Column */}
            <div className="md:col-span-5 space-y-5 text-left">
              <div>
                <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">Featured Case</span>
                <h3 className="font-heading font-extrabold text-2xl text-white mt-1">
                  {current.title}
                </h3>
                <p className="text-sm text-slate-300 font-medium mt-1">
                  {current.procedure}
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <Clock className="w-5 h-5 text-teal-400 shrink-0" />
                  <div>
                    <span className="text-[11px] text-slate-400 uppercase block font-semibold">Treatment Duration</span>
                    <span className="text-sm text-white font-semibold">{current.timeframe}</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-1.5">
                  <div className="text-xs text-slate-400">
                    <strong className="text-slate-300">Initial State:</strong> {current.beforeText}
                  </div>
                  <div className="text-xs text-teal-300 font-medium">
                    <strong className="text-teal-400">Result Achieved:</strong> {current.afterText}
                  </div>
                </div>
              </div>

              <button
                onClick={onOpenBooking}
                className="w-full py-3 px-4 text-xs font-bold text-white teal-gradient-bg rounded-xl shadow-lg hover:opacity-95 transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Request Your Consultation</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
