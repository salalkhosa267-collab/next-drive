import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import urusHeroImg from '../assets/images/urus_hero_dubai_1790272628349.jpg';

interface HeroProps {
  onReserve: () => void;
  onExplore: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onReserve, onExplore }) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-between overflow-hidden bg-[#080808]"
    >
      {/* Background Image with Cinematic Scrims */}
      <div className="absolute inset-0 z-0">
        <img
          src={urusHeroImg}
          alt="Lamborghini Urus parked in front of Dubai architectural skyscrapers at twilight"
          className="w-full h-full object-cover object-center lg:object-[68%_center] scale-100 transition-transform duration-1000 ease-out"
          loading="eager"
          referrerPolicy="no-referrer"
        />
        {/* Measured dark gradient scrims for contrast and editorial readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/75 to-transparent sm:w-4/5 lg:w-3/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-black/50" />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 pt-32 pb-20 w-full flex flex-col justify-center min-h-[85vh]">
        <div className="max-w-2xl">
          {/* Small Top Label */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-6 h-[2px] bg-[#C8FF00]" aria-hidden="true" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-[#D9D9D4]">
              DUBAI • LUXURY CAR RENTAL
            </span>
          </div>

          {/* Large Headline */}
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tight leading-[0.95] mb-6 text-balance">
            DRIVE<br />
            <span className="text-white">THE EXTRA</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#929292]">ORDINARY.</span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg md:text-xl text-[#D9D9D4] font-normal leading-relaxed max-w-xl mb-10">
            Premium performance cars for unforgettable drives in Dubai. Handcrafted power, commanding design, and white-glove delivery across the Emirates.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
            <button
              onClick={onReserve}
              className="group flex items-center justify-center gap-3 bg-[#C8FF00] hover:bg-[#b5e600] text-[#080808] px-8 py-4 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase transition-all duration-200 hover:shadow-[0_0_30px_rgba(200,255,0,0.35)] active:scale-[0.98]"
            >
              <span>RESERVE YOUR DRIVE</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            <button
              onClick={onExplore}
              className="group flex items-center justify-center gap-3 bg-transparent hover:bg-white/10 text-white border border-white/30 hover:border-white px-7 py-4 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase transition-all duration-200"
            >
              <span>EXPLORE CARS</span>
            </button>
          </div>
        </div>

        {/* Feature Highlights Bar near bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 hidden md:grid grid-cols-3 gap-8 max-w-2xl text-xs">
          <div>
            <span className="block text-[#929292] uppercase tracking-[0.15em] text-[10px] mb-1">
              Curated Fleet
            </span>
            <span className="text-white font-medium tracking-wide">
              Lamborghini Urus & Audi RS Q8
            </span>
          </div>
          <div>
            <span className="block text-[#929292] uppercase tracking-[0.15em] text-[10px] mb-1">
              Service Area
            </span>
            <span className="text-white font-medium tracking-wide">
              Dubai · Abu Dhabi · Private VIP
            </span>
          </div>
          <div>
            <span className="block text-[#929292] uppercase tracking-[0.15em] text-[10px] mb-1">
              Direct Concierge
            </span>
            <span className="text-white font-medium tracking-wide">
              Personalized Delivery & Setup
            </span>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-[#929292] hover:text-[#C8FF00] transition-colors focus:outline-none"
        aria-label="Scroll down to intro section"
      >
        <span className="text-[10px] font-semibold tracking-[0.3em] uppercase">SCROLL</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
};
