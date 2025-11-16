1. Create the Property Interface
interfaces/index.ts
export interface Address {
  state: string;
  city: string;
  country: string;
}

export interface Offers {
  bed: string;
  shower: string;
  occupants: string;
}

export interface PropertyProps {
  name: string;
  address: Address;
  rating: number;
  category: string[];
  price: number;
  offers: Offers;
  image: string;
  discount: string;
}

2. Create the Property Data Constant
constants/index.ts
import { PropertyProps } from '@/interfaces';

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Villa Ocean Breeze",
    address: {
      state: "Seminyak",
      city: "Bali",
      country: "Indonesia"
    },
    rating: 4.89,
    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6"
    },
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=400",
    discount: ""
  },
  {
    name: "Mountain Escape Chalet",
    address: {
      state: "Aspen",
      city: "Colorado",
      country: "USA"
    },
    rating: 4.70,
    category: ["Mountain View", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "5-7"
    },
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400",
    discount: "30"
  },
  // ... (include all the other properties from your data)
  {
    name: "Clifftop Retreat",
    address: {
      state: "Cape Town",
      city: "Western Cape",
      country: "South Africa"
    },
    rating: 4.78,
    category: ["Ocean View", "Private Pool", "Self Checkin"],
    price: 4100,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5"
    },
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400",
    discount: ""
  }
];

export const FILTER_OPTIONS = [
  "All",
  "Top Villa",
  "Self Checkin",
  "Luxury Villa",
  "Mountain View",
  "Beachfront",
  "Pool",
  "Free Parking",
  "Pet Friendly"
];

3. Create Layout Components
components/layout/Header.tsx
const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
            <span className="text-xl font-bold text-gray-800">LuxuryStays</span>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search destinations, properties..."
                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-1 rounded-full">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-900">Sign in</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors">
              Sign up
            </button>
          </div>
        </div>

        {/* Accommodation Types */}
        <nav className="mt-4 overflow-x-auto">
          <div className="flex space-x-6 min-w-max">
            {["Rooms", "Mansion", "Countryside", "Beach", "Mountain", "City", "Luxury", "Budget"].map((type) => (
              <button
                key={type}
                className="text-gray-600 hover:text-blue-600 whitespace-nowrap pb-2 border-b-2 border-transparent hover:border-blue-600 transition-colors"
              >
                {type}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

components/layout/Footer.tsx
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
              <span className="text-xl font-bold">LuxuryStays</span>
            </div>
            <p className="text-gray-400">
              Find your perfect luxury stay with our curated collection of premium properties worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Properties</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>support@luxurystays.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Luxury Street, Premium District</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 LuxuryStays. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
components/layout/Layout.tsx
import Header from "./Header";
import Footer from "./Footer";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;

4. Update the Application Root
pages/_app.tsx
import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
5. Create the Pill Component
components/shared/Pill.tsx
interface PillProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

const Pill: React.FC<PillProps> = ({ label, isActive = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full border transition-colors ${
        isActive
          ? 'bg-blue-600 text-white border-blue-600'
          : 'bg-white text-gray-700 border-gray-300 hover:border-blue-600 hover:text-blue-600'
      }`}
    >
      {label}
    </button>
  );
};

export default Pill;
6. Create the Property Card Component
components/shared/PropertyCard.tsx
import { PropertyProps } from '@/interfaces';

interface PropertyCardProps {
  property: PropertyProps;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {/* Image Container */}
      <div className="relative h-48 bg-gray-200">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-full object-cover"
        />
        {property.discount && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
            {property.discount}% OFF
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg text-gray-800">{property.name}</h3>
          <div className="flex items-center space-x-1">
            <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            <span className="text-sm text-gray-600">{property.rating}</span>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-3">
          {property.address.city}, {property.address.country}
        </p>

        <div className="flex flex-wrap gap-1 mb-3">
          {property.category.slice(0, 2).map((cat, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
            >
              {cat}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <div>
            <span className="text-lg font-bold text-gray-900">${property.price}</span>
            <span className="text-gray-600 text-sm"> / night</span>
          </div>
          <div className="text-sm text-gray-600">
            {property.offers.bed} bed • {property.offers.shower} shower
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;

7. Implement the Home Page
pages/index.tsx
import { useState } from 'react';
import { PROPERTYLISTINGSAMPLE, FILTER_OPTIONS } from '@/constants';
import { PropertyProps } from '@/interfaces';
import Pill from '@/components/shared/Pill';
import PropertyCard from '@/components/shared/PropertyCard';

export default function Home() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [properties] = useState<PropertyProps[]>(PROPERTYLISTINGSAMPLE);

  const filteredProperties = activeFilter === 'All' 
    ? properties 
    : properties.filter(property => 
        property.category.some(cat => 
          cat.toLowerCase().includes(activeFilter.toLowerCase().replace(' ', ''))
        )
      );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-96 bg-cover bg-center bg-gray-900"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Find your favorite place here!
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              The best prices for over 2 million properties worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {FILTER_OPTIONS.map((filter) => (
              <Pill
                key={filter}
                label={filter}
                isActive={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Property Listing Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Featured Properties
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProperties.map((property, index) => (
              <PropertyCard key={index} property={property} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
8. Update TypeScript Configuration
Make sure your tsconfig.json includes path aliases:
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
9. Update Tailwind Configuration
tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
}

