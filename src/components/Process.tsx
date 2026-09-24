import React from 'react';

export const Process: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'CHOOSE YOUR CAR',
      description: 'Explore the available Next Drive collection featuring the Lamborghini Urus and Audi RS Q8.',
    },
    {
      step: '02',
      title: 'SEND AN ENQUIRY',
      description: 'Tell us your preferred vehicle, booking dates, and delivery location across Dubai or UAE.',
    },
    {
      step: '03',
      title: 'CONFIRM YOUR DRIVE',
      description: 'Our dedicated concierge coordinates the identification, insurance, and scheduling details directly with you.',
    },
    {
      step: '04',
      title: 'HIT THE ROAD',
      description: 'Receive your detailed vehicle at your door or hotel and immerse yourself in the definitive Dubai drive.',
    },
  ];

  return (
    <section className="py-28 md:py-36 bg-[#0E0E0E] text-white border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-24">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-5 h-[2px] bg-[#C8FF00]" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#C8FF00]">
              EFFORTLESS ONBOARDING
            </span>
            <span className="w-5 h-[2px] bg-[#C8FF00]" aria-hidden="true" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-[1.05] text-balance">
            YOUR JOURNEY STARTS HERE.
          </h2>
          <p className="text-[#929292] text-sm sm:text-base mt-5 max-w-xl mx-auto font-normal leading-relaxed">
            Four seamless steps from reservation to the ignition button. Transparent, discreet, and tailored around your personal itinerary.
          </p>
        </div>

        {/* Steps Grid: Horizontal on Desktop, Vertical on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((item, index) => (
            <div
              key={item.step}
              className="group relative flex flex-col justify-between pt-6 border-t border-white/10 hover:border-[#C8FF00] transition-colors duration-300"
            >
              <div>
                {/* Step indicator */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display text-3xl sm:text-4xl font-black text-[#929292] group-hover:text-[#C8FF00] transition-colors duration-300">
                    {item.step}
                  </span>
                  <span className="text-[10px] font-mono tracking-widest text-[#929292] uppercase">
                    STEP {index + 1}
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold uppercase tracking-wider text-white mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-[#929292] group-hover:text-[#D9D9D4] leading-relaxed transition-colors duration-200">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-4">
                <div className="w-6 h-[1.5px] bg-white/20 group-hover:w-full group-hover:bg-[#C8FF00] transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
