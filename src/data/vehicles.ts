import urusCardImg from '../assets/images/lamborghini_urus_card_1790272642229.jpg';
import rsq8CardImg from '../assets/images/audi_rsq8_card_1790272652975.jpg';
import urusHeroImg from '../assets/images/urus_hero_dubai_1790272628349.jpg';
import interiorImg from '../assets/images/cockpit_luxury_interior_1790272674808.jpg';

export interface Vehicle {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  tagline: string;
  description: string;
  longDescription: string;
  image: string;
  secondaryImage: string;
  specs: {
    label: string;
    value: string;
  }[];
  features: string[];
}

export const VEHICLES: Vehicle[] = [
  {
    id: 'lamborghini-urus',
    name: 'Lamborghini Urus',
    subtitle: 'Super Sports Utility Vehicle',
    category: 'LUXURY PERFORMANCE SUV',
    tagline: 'Pure Italian super sports DNA fused with uncompromised SUV presence.',
    description: 'The definitive super sports SUV. Chiseled Lamborghini lines, twin-turbo V8 command, and an assertive road presence tailored for Dubai’s premier boulevards and desert avenues.',
    longDescription: 'Engineered without compromise, the Lamborghini Urus represents the pinnacle of high-performance luxury mobility. Featuring an aggressive hexagonal cockpit design, carbon-ceramic stopping power, and adaptive air suspension, it commands immediate respect from Downtown Dubai to Palm Jumeirah.',
    image: urusCardImg,
    secondaryImage: urusHeroImg,
    specs: [
      { label: 'Powertrain', value: '4.0L Twin-Turbo V8' },
      { label: 'Drivetrain', value: 'Permanent All-Wheel Drive' },
      { label: 'Transmission', value: '8-Speed Automatic' },
      { label: 'Interior', value: 'Bespoke Alcantara & Carbon' },
      { label: 'Seating', value: '5 Luxury Passengers' },
      { label: 'Drive Modes', value: 'Strada · Sport · Corsa · Neve' }
    ],
    features: [
      'Bang & Olufsen 3D Advanced Sound System',
      'Adaptive Air Suspension with Active Roll Stabilization',
      'Full Carbon Fiber Exterior Aerodynamic Pack',
      'Panoramic Sunroof & Ambient Lighting Spectrum',
      'Bespoke Contrast Interior Stitching'
    ]
  },
  {
    id: 'audi-rs-q8',
    name: 'Audi RS Q8',
    subtitle: 'High-Performance Grand Tourer',
    category: 'PERFORMANCE LUXURY SUV',
    tagline: 'Monolithic German engineering meets peerless executive refinement.',
    description: 'The crown of the Audi Sport portfolio. An extraordinary fusion of brutal twin-turbo power, Quattro agility, and an ultra-quiet executive cabin built for effortless long-distance poise.',
    longDescription: 'The Audi RS Q8 combines the agility of a track-honed sport coupe with the spacious stature of a premier luxury SUV. Featuring RS sport adaptive air suspension, all-wheel steering, and the signature Audi Virtual Cockpit, it delivers unrivaled poise and refined authority across the Emirates.',
    image: rsq8CardImg,
    secondaryImage: interiorImg,
    specs: [
      { label: 'Powertrain', value: '4.0L Twin-Turbo V8' },
      { label: 'Drivetrain', value: 'Quattro Permanent All-Wheel' },
      { label: 'Transmission', value: '8-Speed Tiptronic Sport' },
      { label: 'Interior', value: 'Valcona Leather & Carbon Twill' },
      { label: 'Seating', value: '5 Executive Passengers' },
      { label: 'Drive Modes', value: 'RS1 · RS2 · Dynamic · Comfort' }
    ],
    features: [
      'RS Matrix LED Headlights with Dynamic Animation',
      'Electromechanical Active Roll Stabilization',
      'Audi Virtual Cockpit Plus with RS-Specific Displays',
      'Four-Zone Deluxe Climate & Fragrance Package',
      'Acoustic Dual-Pane Privacy Glass'
    ]
  }
];
