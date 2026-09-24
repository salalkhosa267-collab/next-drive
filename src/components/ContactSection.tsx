import React, { useState } from 'react';
import { Phone, MapPin, Send, CheckCircle2, ArrowRight } from 'lucide-react';

interface ContactSectionProps {
  initialVehicle?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialVehicle = 'lamborghini-urus' }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    vehicle: initialVehicle,
    preferredDate: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync if prop changes
  React.useEffect(() => {
    if (initialVehicle) {
      setFormData((prev) => ({ ...prev, vehicle: initialVehicle }));
    }
  }, [initialVehicle]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+\s\-()]{7,}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please provide a valid phone number';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email';
    }
    if (!formData.preferredDate) newErrors.preferredDate = 'Please select a preferred date';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate clean dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      vehicle: 'lamborghini-urus',
      preferredDate: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-28 md:py-36 bg-[#080808] text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact Copy & Details */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-5 h-[2px] bg-[#C8FF00]" aria-hidden="true" />
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#C8FF00]">
                DIRECT BOOKING INQUIRY
              </span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-[1.05] mb-6 text-balance">
              READY TO DRIVE?
            </h2>

            <p className="text-base text-[#D9D9D4] leading-relaxed mb-10 font-normal">
              Tell us which car you want to experience and our team will get back to you promptly to confirm availability and logistics.
            </p>

            <div className="space-y-6 pt-6 border-t border-white/10 mb-8">
              <div>
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#929292] block mb-1">
                  Location
                </span>
                <div className="flex items-center gap-2 text-white text-sm">
                  <MapPin className="w-4 h-4 text-[#C8FF00] shrink-0" />
                  <span>Dubai, United Arab Emirates</span>
                </div>
              </div>

              <div>
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#929292] block mb-1">
                  Direct Telephone
                </span>
                <a
                  href="tel:+971528576327"
                  className="inline-flex items-center gap-2 text-white hover:text-[#C8FF00] text-lg font-bold tracking-wider transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#C8FF00] shrink-0" />
                  <span>+971 52 857 6327</span>
                </a>
              </div>
            </div>

            {/* Direct Call Button */}
            <div className="pt-2">
              <a
                href="tel:+971528576327"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 border border-white/20 hover:border-white text-white text-xs font-bold tracking-[0.2em] uppercase transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C8FF00]" />
                <span>CALL NEXT DRIVE</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Lead Capture Form */}
          <div className="lg:col-span-7 bg-[#111111] p-8 sm:p-12 border border-white/10 relative">
            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#C8FF00]/10 flex items-center justify-center text-[#C8FF00] mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white mb-3">
                  ENQUIRY RECEIVED
                </h3>
                <p className="text-sm text-[#D9D9D4] max-w-md mx-auto mb-8 leading-relaxed">
                  Thank you, <span className="text-white font-medium">{formData.fullName}</span>. Our private concierge team has received your inquiry for the{' '}
                  <span className="text-[#C8FF00] font-medium">
                    {formData.vehicle === 'audi-rs-q8' ? 'Audi RS Q8' : 'Lamborghini Urus'}
                  </span>{' '}
                  and will contact you shortly via phone or WhatsApp.
                </p>
                <button
                  onClick={resetForm}
                  className="bg-transparent hover:bg-white/10 text-white border border-white/30 px-6 py-3 text-xs font-bold tracking-[0.2em] uppercase transition-colors"
                >
                  SEND ANOTHER INQUIRY
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-semibold tracking-wider uppercase text-[#D9D9D4] mb-2">
                      Full Name <span className="text-[#C8FF00]">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Alexander Vance"
                      className={`w-full bg-[#1A1A1A] border ${
                        errors.fullName ? 'border-red-500' : 'border-white/10 focus:border-[#C8FF00]'
                      } text-white px-4 py-3 text-sm focus:outline-none transition-colors`}
                    />
                    {errors.fullName && <p className="text-xs text-red-400 mt-1">{errors.fullName}</p>}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold tracking-wider uppercase text-[#D9D9D4] mb-2">
                      Phone Number <span className="text-[#C8FF00]">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+971 50 000 0000"
                      className={`w-full bg-[#1A1A1A] border ${
                        errors.phone ? 'border-red-500' : 'border-white/10 focus:border-[#C8FF00]'
                      } text-white px-4 py-3 text-sm focus:outline-none transition-colors`}
                    />
                    {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold tracking-wider uppercase text-[#D9D9D4] mb-2">
                      Email Address <span className="text-[#C8FF00]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alexander@domain.com"
                      className={`w-full bg-[#1A1A1A] border ${
                        errors.email ? 'border-red-500' : 'border-white/10 focus:border-[#C8FF00]'
                      } text-white px-4 py-3 text-sm focus:outline-none transition-colors`}
                    />
                    {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                  </div>

                  {/* Vehicle Selector */}
                  <div>
                    <label htmlFor="vehicle" className="block text-xs font-semibold tracking-wider uppercase text-[#D9D9D4] mb-2">
                      Select Vehicle <span className="text-[#C8FF00]">*</span>
                    </label>
                    <select
                      id="vehicle"
                      name="vehicle"
                      value={formData.vehicle}
                      onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                      className="w-full bg-[#1A1A1A] border border-white/10 focus:border-[#C8FF00] text-white px-4 py-3 text-sm focus:outline-none transition-colors cursor-pointer"
                    >
                      <option value="lamborghini-urus">Lamborghini Urus (Super SUV)</option>
                      <option value="audi-rs-q8">Audi RS Q8 (Performance Luxury)</option>
                    </select>
                  </div>
                </div>

                {/* Preferred Date */}
                <div>
                  <label htmlFor="preferredDate" className="block text-xs font-semibold tracking-wider uppercase text-[#D9D9D4] mb-2">
                    Preferred Date <span className="text-[#C8FF00]">*</span>
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className={`w-full bg-[#1A1A1A] border ${
                      errors.preferredDate ? 'border-red-500' : 'border-white/10 focus:border-[#C8FF00]'
                    } text-white px-4 py-3 text-sm focus:outline-none transition-colors`}
                  />
                  {errors.preferredDate && <p className="text-xs text-red-400 mt-1">{errors.preferredDate}</p>}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold tracking-wider uppercase text-[#D9D9D4] mb-2">
                    Message / Delivery Address (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Specific requests, hotel delivery location, or timing requirements..."
                    className="w-full bg-[#1A1A1A] border border-white/10 focus:border-[#C8FF00] text-white px-4 py-3 text-sm focus:outline-none transition-colors"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-3 bg-[#C8FF00] hover:bg-[#bbf000] text-[#080808] py-4 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-200 hover:shadow-[0_0_25px_rgba(200,255,0,0.3)] disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>PROCESSING INQUIRY...</span>
                  ) : (
                    <>
                      <span>SEND ENQUIRY</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-[#929292] text-center tracking-wide">
                  Your inquiry is strictly confidential. Next Drive does not disclose client information.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
