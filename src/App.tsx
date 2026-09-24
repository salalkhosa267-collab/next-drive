import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BrandStatement } from './components/BrandStatement';
import { FeaturedCars } from './components/FeaturedCars';
import { Experience } from './components/Experience';
import { FullWidthBanner } from './components/FullWidthBanner';
import { WhyNextDrive } from './components/WhyNextDrive';
import { Process } from './components/Process';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { VehicleModal } from './components/VehicleModal';
import { LegalModal } from './components/LegalModal';
import { VEHICLES, Vehicle } from './data/vehicles';

export default function App() {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [contactVehicleId, setContactVehicleId] = useState<string>('lamborghini-urus');
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  const scrollToContact = (vehicleId?: string) => {
    if (vehicleId) {
      setContactVehicleId(vehicleId);
    }
    const contactElem = document.querySelector('#contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCars = () => {
    const carsElem = document.querySelector('#cars');
    if (carsElem) {
      carsElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCarById = (carId: string) => {
    const found = VEHICLES.find((v) => v.id === carId);
    if (found) {
      setSelectedVehicle(found);
    }
  };

  return (
    <div className="min-h-screen bg-[#080808] text-[#F5F5F2] flex flex-col font-sans selection:bg-[#C8FF00] selection:text-[#080808]">
      {/* Top Navigation */}
      <Header onOpenBooking={() => scrollToContact()} />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onReserve={() => scrollToContact('lamborghini-urus')}
          onExplore={scrollToCars}
        />

        {/* Intro / Brand Statement */}
        <BrandStatement />

        {/* Featured Collection (Warm Light Tone) */}
        <FeaturedCars
          onSelectCar={(car) => setSelectedVehicle(car)}
          onReserveCar={(carId) => scrollToContact(carId)}
        />

        {/* Experience Pillars (Dark Minimal) */}
        <Experience />

        {/* Full-Width Dubai Night Driving Panoramic Banner */}
        <FullWidthBanner onStartJourney={() => scrollToContact()} />

        {/* Why Next Drive (Light Architectural Service Section) */}
        <WhyNextDrive />

        {/* 4-Step Process Section */}
        <Process />

        {/* Contact & Enquiry Section */}
        <ContactSection initialVehicle={contactVehicleId} />
      </main>

      {/* Sophisticated Dark Footer */}
      <Footer
        onSelectCar={handleSelectCarById}
        onOpenLegal={(type) => setLegalModalType(type)}
      />

      {/* Interactive Detail Modal for Lamborghini Urus or Audi RS Q8 */}
      <VehicleModal
        vehicle={selectedVehicle}
        onClose={() => setSelectedVehicle(null)}
        onReserve={(vehicleId) => scrollToContact(vehicleId)}
      />

      {/* Legal & Terms Modal */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
