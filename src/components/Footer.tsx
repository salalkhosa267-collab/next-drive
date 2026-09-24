import React from 'react';
import { Phone, MapPin, Instagram, Globe, MessageSquare } from 'lucide-react';

interface FooterProps {
  onSelectCar: (carId: string) => void;
  onOpenLegal: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCar, onOpenLegal }) => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#050505] text-[#929292] border-t border-white/10 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-5 flex flex-col pr-0 lg:pr-8">
            <div className="mb-4">
              <span className="font-display text-2xl font-bold tracking-[0.2em] text-white block">
                NEXT DRIVE
              </span>
              <span className="text-xs font-semibold tracking-[0.35em] text-[#C8FF00] uppercase block">
                LUXURY CAR RENTAL
              </span>
            </div>
            
            <p className="text-sm text-[#D9D9D4] leading-relaxed max-w-sm mb-6 font-normal">
              Premium performance and luxury vehicles for unforgettable drives in Dubai. Precision engineering, bespoke delivery, and unrivaled road authority.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 flex items-center justify-center bg-[#111111] hover:bg-[#C8FF00] hover:text-[#080808] text-white border border-white/10 transition-colors"
                aria-label="Next Drive Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/971528576327"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 flex items-center justify-center bg-[#111111] hover:bg-[#C8FF00] hover:text-[#080808] text-white border border-white/10 transition-colors"
                aria-label="Direct WhatsApp Concierge"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('#home');
                }}
                className="w-9 h-9 flex items-center justify-center bg-[#111111] hover:bg-[#C8FF00] hover:text-[#080808] text-white border border-white/10 transition-colors"
                aria-label="Global Emirates portal"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Column: EXPLORE */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-white mb-6">
              EXPLORE
            </h4>
            <ul className="space-y-3 text-xs tracking-wider">
              {['Home', 'Cars', 'Experience', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(`#${item.toLowerCase()}`);
                    }}
                    className="hover:text-[#C8FF00] transition-colors uppercase"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Vehicles Column */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-white mb-6">
              VEHICLES
            </h4>
            <ul className="space-y-3 text-xs tracking-wider">
              <li>
                <button
                  onClick={() => onSelectCar('lamborghini-urus')}
                  className="hover:text-[#C8FF00] transition-colors text-left uppercase"
                >
                  Lamborghini Urus
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCar('audi-rs-q8')}
                  className="hover:text-[#C8FF00] transition-colors text-left uppercase"
                >
                  Audi RS Q8
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-white mb-6">
              CONTACT
            </h4>
            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C8FF00] shrink-0 mt-0.5" />
                <span className="text-[#D9D9D4]">
                  Next Drive Luxury Car Rental<br />
                  Dubai, United Arab Emirates
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C8FF00] shrink-0" />
                <a
                  href="tel:+971528576327"
                  className="text-white hover:text-[#C8FF00] font-bold tracking-wider transition-colors"
                >
                  +971 52 857 6327
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#666666] gap-4">
          <p>
            © 2026 Next Drive Luxury Car Rental. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <span className="text-white/20">/</span>
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-white transition-colors"
            >
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
