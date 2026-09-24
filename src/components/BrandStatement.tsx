import React from 'react';

export const BrandStatement: React.FC = () => {
  return (
    <section id="about" className="relative py-28 md:py-36 bg-[#0E0E0E] border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-5 h-[2px] bg-[#C8FF00]" aria-hidden="true" />
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#C8FF00]">
                NEXT DRIVE EXPERIENCE
              </span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-white uppercase tracking-tight leading-[1.05] text-balance">
              YOUR DRIVE.<br />
              <span className="text-[#D9D9D4]">YOUR STATEMENT.</span>
            </h2>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-6 flex flex-col justify-center pt-2 lg:pt-8">
            <div className="w-12 h-[2px] bg-[#C8FF00] mb-8" aria-hidden="true" />
            
            <p className="text-base sm:text-lg text-[#D9D9D4] font-normal leading-relaxed mb-6">
              Next Drive Luxury Car Rental provides premier vehicles for discerning clients who demand unmatched performance, commanding presence, absolute comfort, and an unforgettable Dubai driving experience.
            </p>

            <p className="text-sm sm:text-base text-[#929292] font-normal leading-relaxed mb-8">
              Whether you are navigating the dynamic boulevards of Downtown Dubai, arriving at high-profile corporate engagements, or traversing scenic desert highways to Abu Dhabi, our handpicked fleet guarantees an extraordinary arrival.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10 text-xs">
              <div>
                <span className="block font-display text-xl sm:text-2xl font-bold text-white mb-1">
                  100%
                </span>
                <span className="text-[#929292] uppercase tracking-wider text-[11px]">
                  Flawless Condition
                </span>
              </div>
              <div>
                <span className="block font-display text-xl sm:text-2xl font-bold text-white mb-1">
                  VIP
                </span>
                <span className="text-[#929292] uppercase tracking-wider text-[11px]">
                  Direct Delivery
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="block font-display text-xl sm:text-2xl font-bold text-[#C8FF00] mb-1">
                  24 / 7
                </span>
                <span className="text-[#929292] uppercase tracking-wider text-[11px]">
                  Dedicated Concierge
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
