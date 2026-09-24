import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: (carId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'CARS', href: '#cars' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'ABOUT', href: '#about' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-header py-4 border-b border-white/10 shadow-2xl shadow-black/40'
          : 'bg-gradient-to-b from-black/80 via-black/30 to-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Zone 1: Single text wordmark */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group flex flex-col focus:outline-none"
          aria-label="Next Drive Luxury Car Rental"
        >
          <span className="font-display text-xl sm:text-2xl font-bold tracking-[0.2em] text-white group-hover:text-[#C8FF00] transition-colors duration-200">
            NEXT DRIVE
          </span>
          <span className="text-[10px] font-medium tracking-[0.35em] text-[#929292] uppercase -mt-0.5">
            Luxury Car Rental
          </span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-xs font-semibold tracking-[0.2em] text-[#D9D9D4] hover:text-[#C8FF00] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C8FF00] hover:after:w-full after:transition-all after:duration-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="tel:+971528576327"
            className="hidden xl:flex items-center gap-2 text-xs font-medium tracking-wider text-[#929292] hover:text-white transition-colors py-2 px-3"
            title="Call Next Drive Concierge"
          >
            <Phone className="w-3.5 h-3.5 text-[#C8FF00]" />
            <span>+971 52 857 6327</span>
          </a>
          <button
            onClick={() => onOpenBooking()}
            className="group flex items-center gap-2 bg-[#C8FF00] hover:bg-[#bbf000] text-[#080808] px-5 py-2.5 text-xs font-bold tracking-[0.16em] uppercase rounded-none transition-all duration-200 hover:shadow-[0_0_24px_rgba(200,255,0,0.3)] active:scale-[0.98]"
          >
            <span>RESERVE YOUR DRIVE</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={() => onOpenBooking()}
            className="sm:hidden bg-[#C8FF00] text-[#080808] px-3 py-1.5 text-[11px] font-bold tracking-wider uppercase"
          >
            RESERVE
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white hover:text-[#C8FF00] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C8FF00]"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[73px] bg-[#080808]/98 backdrop-blur-2xl z-40 flex flex-col justify-between p-8 border-t border-white/10 animate-in fade-in duration-200">
          <nav className="flex flex-col gap-6 pt-4">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="font-display text-2xl font-bold tracking-wider text-white hover:text-[#C8FF00] transition-colors py-2 border-b border-white/5"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-4 pb-8">
            <a
              href="tel:+971528576327"
              className="flex items-center justify-center gap-3 py-3 border border-white/20 text-white font-medium text-sm tracking-wider"
            >
              <Phone className="w-4 h-4 text-[#C8FF00]" />
              <span>+971 52 857 6327</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#C8FF00] text-[#080808] py-4 text-xs font-bold tracking-[0.2em] uppercase"
            >
              <span>RESERVE YOUR DRIVE</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
