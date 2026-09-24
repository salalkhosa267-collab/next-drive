import React from 'react';
import { X } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-2xl bg-[#111111] border border-white/10 text-white p-6 sm:p-8 max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#929292] hover:text-white"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'privacy' ? (
          <div>
            <h3 className="font-display text-2xl font-bold uppercase mb-4 text-[#C8FF00]">
              Privacy Policy
            </h3>
            <div className="space-y-4 text-xs sm:text-sm text-[#D9D9D4] leading-relaxed">
              <p>
                Next Drive Luxury Car Rental is committed to safeguarding the privacy and confidentiality of our esteemed clients.
              </p>
              <h4 className="font-bold text-white uppercase text-xs">1. Information Collection</h4>
              <p>
                We collect personal information provided during direct reservations, including name, contact telephone, email address, and delivery location to process booking requests.
              </p>
              <h4 className="font-bold text-white uppercase text-xs">2. Confidentiality & Security</h4>
              <p>
                Client records, identification documents, and itinerary details are handled strictly under secure protocols and are never sold or rented to third-party marketing entities.
              </p>
              <h4 className="font-bold text-white uppercase text-xs">3. Contact</h4>
              <p>
                For privacy inquiries or data requests, contact our concierge at +971 52 857 6327 or visit our Dubai office.
              </p>
            </div>
          </div>
        ) : (
          <div>
            <h3 className="font-display text-2xl font-bold uppercase mb-4 text-[#C8FF00]">
              Terms & Conditions
            </h3>
            <div className="space-y-4 text-xs sm:text-sm text-[#D9D9D4] leading-relaxed">
              <p>
                Welcome to Next Drive Luxury Car Rental. All reservations and vehicle services are subject to the following principles.
              </p>
              <h4 className="font-bold text-white uppercase text-xs">1. Driver Eligibility</h4>
              <p>
                Drivers must possess a valid UAE driving license or recognized international driver’s permit with accompanying passport/identification in accordance with RTA Dubai regulations.
              </p>
              <h4 className="font-bold text-white uppercase text-xs">2. Vehicle Delivery & Return</h4>
              <p>
                Complimentary delivery is coordinated to designated Dubai locations. Vehicles must be operated responsibly and returned in the pristine condition provided.
              </p>
              <h4 className="font-bold text-white uppercase text-xs">3. Comprehensive Insurance</h4>
              <p>
                All vehicles in our fleet include full comprehensive luxury vehicle insurance coverage under standard policy guidelines.
              </p>
            </div>
          </div>
        )}
        <div className="mt-8 pt-4 border-t border-white/10 text-right">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-[#C8FF00] text-[#080808] text-xs font-bold uppercase tracking-wider"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};
