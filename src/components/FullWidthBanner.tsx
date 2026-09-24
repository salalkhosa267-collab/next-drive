import React from 'react';
import { ArrowRight } from 'lucide-react';
import dubaiDriveImg from '../assets/images/dubai_skyline_drive_1790272663341.jpg';

interface FullWidthBannerProps {
  onStartJourney: () => void;
}

export const FullWidthBanner: React.FC<FullWidthBannerProps> = ({ onStartJourney }) => {
  return (
    <section className="relative min-h-[580px] lg:min-h-[640px] flex items-center justify-center overflow-hidden bg-black">
      {/* Background panoramic image with deep contrast gradient scrims */}
      <div className="absolute inset-0 z-0">
        <img
          src={dubaiDriveImg}
          alt="Luxury performance SUV driving through Dubai illuminated skyline at night"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out hover:scale-100"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 py-20 text-center flex flex-col items-center">
        <div className="flex items-center gap-2 mb-6">
          <span className="w-8 h-[1px] bg-[#C8FF00]" aria-hidden="true" />
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#C8FF00]">
            UNCOMPROMISED EMIRATES MOBILITY
          </span>
          <span className="w-8 h-[1px] bg-[#C8FF00]" aria-hidden="true" />
        </div>

        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[1.05] mb-8 text-balance">
          MORE THAN A CAR.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F5F5F2] to-[#929292]">
            IT'S THE EXPERIENCE.
          </span>
        </h2>

        <p className="text-base sm:text-lg text-[#D9D9D4] max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
          From private airport arrivals to executive meetings and high-adrenaline weekend drives, Next Drive delivers automotive majesty tailored to your itinerary.
        </p>

        <button
          onClick={onStartJourney}
          className="group flex items-center gap-3 bg-[#C8FF00] hover:bg-[#bbf000] text-[#080808] px-9 py-4 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase transition-all duration-200 hover:shadow-[0_0_35px_rgba(200,255,0,0.35)] active:scale-[0.98]"
        >
          <span>START YOUR JOURNEY</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
};
