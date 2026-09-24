import React from 'react';
import { Zap, Crown, Armchair, Sparkles } from 'lucide-react';

export const Experience: React.FC = () => {
  const pillars = [
    {
      number: '01',
      title: 'PERFORMANCE',
      description: 'Powerful twin-turbo vehicles engineered to make every drive across Dubai memorable, responsive, and exhilarating.',
      icon: Zap,
    },
    {
      number: '02',
      title: 'PRESENCE',
      description: 'Arrive with a vehicle that commands immediate attention at luxury venues, gala events, and premier Dubai addresses.',
      icon: Crown,
    },
    {
      number: '03',
      title: 'COMFORT',
      description: 'Handcrafted leather cockpits, acoustic privacy glass, and adaptive suspension for serene luxury cruising.',
      icon: Armchair,
    },
    {
      number: '04',
      title: 'SERVICE',
      description: 'Dedicated concierge support designed around your schedule, including doorstep delivery and 24/7 client care.',
      icon: Sparkles,
    },
  ];

  return (
    <section id="experience" className="py-28 md:py-36 bg-[#0A0A0A] text-white border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-5 h-[2px] bg-[#C8FF00]" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#C8FF00]">
              THE STANDARD
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-[1.05] text-balance">
            BUILT FOR THE MOMENT.
          </h2>
          <p className="text-[#D9D9D4] text-base sm:text-lg mt-6 font-normal leading-relaxed">
            Every element of the Next Drive client experience is honed for effortless distinction, absolute reliability, and peerless automotive prestige.
          </p>
        </div>

        {/* 4 Pillars Grid with Thin Dividers and Architectural Elegance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/10">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.number}
                className="group flex flex-col justify-between py-6 lg:px-8 first:lg:pl-0 last:lg:pr-0 border-b md:border-b-0 border-white/10 pb-8 md:pb-0"
              >
                <div>
                  {/* Number & Icon header */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-display text-3xl font-extrabold text-white/30 group-hover:text-[#C8FF00] transition-colors duration-300">
                      {pillar.number}
                    </span>
                    <Icon className="w-5 h-5 text-[#929292] group-hover:text-[#C8FF00] transition-colors duration-300" />
                  </div>

                  <h3 className="font-display text-lg sm:text-xl font-bold uppercase tracking-wider text-white mb-4">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-[#929292] group-hover:text-[#D9D9D4] leading-relaxed transition-colors duration-200">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-8 pt-4">
                  <div className="w-8 h-[1px] bg-white/20 group-hover:w-16 group-hover:bg-[#C8FF00] transition-all duration-300" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
