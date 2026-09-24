import React, { useEffect } from 'react';
import { X, ArrowRight, ShieldCheck, Check, Sparkles } from 'lucide-react';
import { Vehicle } from '../data/vehicles';

interface VehicleModalProps {
  vehicle: Vehicle | null;
  onClose: () => void;
  onReserve: (vehicleId: string) => void;
}

export const VehicleModal: React.FC<VehicleModalProps> = ({ vehicle, onClose, onReserve }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (vehicle) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [vehicle, onClose]);

  if (!vehicle) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-vehicle-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-4xl bg-[#111111] border border-white/10 text-white my-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-[#080808]/80 hover:bg-[#C8FF00] text-white hover:text-[#080808] transition-colors focus:outline-none"
          aria-label="Close vehicle overview"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero image in modal */}
        <div className="relative aspect-[16/9] w-full bg-black overflow-hidden">
          <img
            src={vehicle.image}
            alt={vehicle.name}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-black/30" />
          <div className="absolute bottom-6 left-6 right-6">
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#C8FF00] bg-black/70 px-2.5 py-1 border border-white/10 inline-block mb-2">
              {vehicle.category}
            </span>
            <h3 id="modal-vehicle-title" className="font-display text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
              {vehicle.name}
            </h3>
            <p className="text-xs text-[#929292] uppercase tracking-wider">
              {vehicle.subtitle}
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#929292] mb-3">
              Overview & Character
            </h4>
            <p className="text-sm sm:text-base text-[#D9D9D4] leading-relaxed">
              {vehicle.longDescription}
            </p>
          </div>

          {/* Specifications Grid */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C8FF00] mb-4 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Engineering & Configuration</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {vehicle.specs.map((spec) => (
                <div key={spec.label} className="bg-[#1A1A1A] p-4 border border-white/5">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#929292] block mb-1">
                    {spec.label}
                  </span>
                  <span className="text-sm font-medium text-white tracking-wide">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Curated Equipment */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C8FF00] mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>Signature Inclusions</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#D9D9D4]">
              {vehicle.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3 bg-[#161616] p-3 border border-white/5">
                  <Check className="w-4 h-4 text-[#C8FF00] shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Modal Action CTA */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#929292]">
              Complimentary Dubai delivery & personalized vehicle setup included with every reservation.
            </div>
            <button
              onClick={() => {
                onClose();
                onReserve(vehicle.id);
              }}
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#C8FF00] hover:bg-[#bbf000] text-[#080808] px-8 py-3.5 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-200"
            >
              <span>RESERVE THIS VEHICLE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
