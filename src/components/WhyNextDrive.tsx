import React from 'react';
import { Car, UserCheck, MapPin, SlidersHorizontal, CheckCircle2 } from 'lucide-react';
import interiorImg from '../assets/images/cockpit_luxury_interior_1790272674808.jpg';

export const WhyNextDrive: React.FC = () => {
  const serviceBlocks = [
    {
      title: 'PREMIUM VEHICLES',
      description: 'A carefully selected collection of luxury and performance vehicles maintained to factory perfection.',
      icon: Car,
    },
    {
      title: 'PROFESSIONAL SERVICE',
      description: 'A smooth, transparent rental experience from your initial inquiry to final return, handled by automotive specialists.',
      icon: UserCheck,
    },
    {
      title: 'DUBAI DELIVERY',
      description: 'Convenient vehicle delivery options for your journey—delivered directly to your residence, hotel, or private aviation hangar.',
      icon: MapPin,
    },
    {
      title: 'PERSONALIZED EXPERIENCE',
      description: 'A bespoke service designed around your schedule, custom itineraries, and individual driving requirements.',
      icon: SlidersHorizontal,
    },
  ];

  return (
    <section className="py-28 md:py-36 bg-[#F5F5F2] text-[#080808]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading and 4 Service Blocks */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-5 h-[2px] bg-[#080808]" aria-hidden="true" />
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#080808]">
                DISTINCTION & RELIABILITY
              </span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[#080808] leading-[1.05] mb-12 text-balance">
              WHY NEXT DRIVE
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {serviceBlocks.map((block) => {
                const Icon = block.icon;
                return (
                  <div key={block.title} className="flex flex-col border-t border-black/10 pt-6">
                    <div className="w-10 h-10 flex items-center justify-center bg-[#080808] text-[#C8FF00] mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-base sm:text-lg font-bold uppercase tracking-wider text-[#080808] mb-2">
                      {block.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#555555] leading-relaxed font-normal">
                      {block.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Editorial Visual Asset with tactile craftsmanship focus */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] overflow-hidden bg-black shadow-[0_25px_60px_rgba(0,0,0,0.18)]">
              <img
                src={interiorImg}
                alt="Handcrafted luxury cockpit interior with carbon fiber trim and precision dials"
                className="w-full h-full object-cover object-center"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              
              {/* Overlay Quality Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-[#080808]/90 backdrop-blur-md border border-white/10 text-white">
                <div className="flex items-center gap-2 mb-2 text-[#C8FF00]">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="text-[11px] font-bold tracking-[0.2em] uppercase">
                    Bespoke Attention
                  </span>
                </div>
                <p className="text-xs text-[#D9D9D4] leading-relaxed">
                  Every cabin is sanitized, detail-prepared, and personalized with your preferred climate and settings prior to handover.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
