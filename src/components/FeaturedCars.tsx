import React from 'react';
import { ArrowUpRight, Gauge, Shield, Sparkles } from 'lucide-react';
import { VEHICLES, Vehicle } from '../data/vehicles';

interface FeaturedCarsProps {
  onSelectCar: (car: Vehicle) => void;
  onReserveCar: (carId: string) => void;
}

export const FeaturedCars: React.FC<FeaturedCarsProps> = ({ onSelectCar, onReserveCar }) => {
  return (
    <section id="cars" className="py-28 md:py-36 bg-[#F5F5F2] text-[#080808] transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-5 h-[2px] bg-[#080808]" aria-hidden="true" />
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#080808]">
                THE COLLECTION
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[#080808] leading-[1.05] text-balance">
              CHOOSE YOUR DRIVE.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#555555] max-w-md font-normal leading-relaxed">
            Exceptional vehicles selected for clients who expect more from every journey. No compromises, no synthetic estimates—pure automotive majesty.
          </p>
        </div>

        {/* 2-Column Luxury Vehicle Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {VEHICLES.map((car) => (
            <article
              key={car.id}
              className="group relative bg-[#0D0D0D] text-white overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)] flex flex-col border border-black/10"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <img
                  src={car.image}
                  alt={`${car.name} luxury vehicle showcase in Dubai`}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-black/20" />

                {/* Category Micro-tag */}
                <div className="absolute top-5 left-5 z-10">
                  <span className="bg-[#080808]/85 backdrop-blur-md text-[#C8FF00] text-[10px] font-bold tracking-[0.25em] uppercase px-3 py-1.5 border border-white/10">
                    {car.category}
                  </span>
                </div>
              </div>

              {/* Card Content Area */}
              <div className="p-7 sm:p-9 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white group-hover:text-[#C8FF00] transition-colors">
                      {car.name}
                    </h3>
                  </div>

                  <p className="text-xs font-semibold tracking-[0.18em] text-[#929292] uppercase mb-4">
                    {car.subtitle}
                  </p>

                  <p className="text-sm text-[#D9D9D4] leading-relaxed mb-6 font-normal">
                    {car.description}
                  </p>

                  {/* Highlights Specs without Fabricated Numbers */}
                  <div className="grid grid-cols-2 gap-3 py-4 border-t border-b border-white/10 text-xs mb-8">
                    <div className="flex items-center gap-2">
                      <Gauge className="w-3.5 h-3.5 text-[#C8FF00] shrink-0" />
                      <span className="text-[#D9D9D4] truncate">{car.specs[0].value}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="w-3.5 h-3.5 text-[#C8FF00] shrink-0" />
                      <span className="text-[#D9D9D4] truncate">{car.specs[1].value}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-[#C8FF00] shrink-0" />
                      <span className="text-[#D9D9D4] truncate">{car.specs[3].value}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF00] shrink-0" />
                      <span className="text-[#D9D9D4] truncate">{car.specs[4].value}</span>
                    </div>
                  </div>
                </div>

                {/* CTAs: VIEW VEHICLE & CHECK AVAILABILITY */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <button
                    onClick={() => onSelectCar(car)}
                    className="w-full flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white border border-white/20 hover:border-white py-3 px-4 text-xs font-bold tracking-[0.18em] uppercase transition-all duration-200"
                  >
                    <span>VIEW VEHICLE</span>
                    <ArrowUpRight className="w-4 h-4 text-[#C8FF00]" />
                  </button>

                  <button
                    onClick={() => onReserveCar(car.id)}
                    className="w-full flex items-center justify-center gap-2 bg-[#C8FF00] hover:bg-[#bbf000] text-[#080808] py-3 px-4 text-xs font-bold tracking-[0.18em] uppercase transition-all duration-200"
                  >
                    <span>ENQUIRE NOW</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Collection Footer Note */}
        <div className="mt-14 pt-8 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#666666] gap-4">
          <p className="tracking-wide">
            Next Drive vehicles undergo rigorous 50-point safety and cleanliness inspections prior to every handover.
          </p>
          <a
            href="tel:+971528576327"
            className="font-bold text-[#080808] hover:text-black underline underline-offset-4 tracking-wider shrink-0"
          >
            Direct Inquiries: +971 52 857 6327
          </a>
        </div>
      </div>
    </section>
  );
};
