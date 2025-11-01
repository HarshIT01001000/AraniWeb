import React from "react";
import { motion } from "framer-motion";

// Custom Icon Components (using simplified SVG for consistency with AboutUs.jsx)
// You can replace these with react-icons later if desired, like FaHome, FaPalette, FaTruck

const HomeIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const PaletteIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 21.35c-4.4 0-8-3.6-8-8c0-2.3 1.2-4.4 3.1-5.6l.8-1.5c.6-1.2 2-1.9 3.3-1.9h1.6c1.3 0 2.7.7 3.3 1.9l.8 1.5c1.9 1.2 3.1 3.3 3.1 5.6 0 4.4-3.6 8-8 8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const TruckIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10 16.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5z" />
    <path d="M17 16.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5z" />
    <path d="M5.5 18H2v-6h17v4h-2.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h1.5l.4 2H5.5z" />
    <path d="M19 12l-1-4H6.5c-.83 0-1.5-.67-1.5-1.5S5.67 5 6.5 5H18" />
  </svg>
);

// Framer Motion variant for section fading
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

// --- Main Component ---
export default function Services() {
  const serviceCards = [
    {
      icon: HomeIcon,
      title: "Full Interior Design",
      description: "Our signature, end-to-end design service. From concept to installation, we handle every detail to transform your entire space.",
    },
    {
      icon: PaletteIcon,
      title: "Virtual Consultation",
      description: "Need quick, expert advice? We offer 1-hour video sessions for color palettes, furniture placement, and styling tips.",
    },
    {
      icon: TruckIcon,
      title: "Custom Furniture Sourcing",
      description: "We source unique, high-quality pieces, including custom builds and art, ensuring your decor is one-of-a-kind and perfect.",
    },
    {
      icon: HomeIcon,
      title: "Room Refresh & Styling",
      description: "Working with your existing furniture, we bring new life to a room with new accessories, textiles, and smart rearrangement.",
    },
  ];

  return (
    <div className="w-full bg-white font-sans">
      {/* 🌟 1. Hero Section (Matching About Us style) */}
      <div className="w-full bg-[#e5edf3] py-20 md:py-30 min-h-[30vh] mb-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
              Our Design Services
            </h1>
            {/* Breadcrumb Navigation */}
            <div className="flex justify-center items-center gap-2 text-sm font-semibold text-gray-500">
              <p className="hover:text-gray-700 cursor-pointer transition-colors">
                Home
              </p>
              <p className="text-gray-300 pointer-events-none">|</p>
              <p className="text-gray-900">Services</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 🌟 2. Core Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeIn}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-20 lg:mb-28"
        >
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">
              YOUR DECOR PARTNER
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Design Solutions for Every Home
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceCards.map((card, index) => (
              <div
                key={index}
                className="p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-[#e5edf3] rounded-full mb-4">
                  <card.icon className="w-6 h-6 text-[#0B2D4B]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600">
                  {card.description}
                </p>
                <button className="mt-4 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 🌟 3. Simple Process Section (Focusing on Trust/Ease) */}
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeIn}
          viewport={{ once: true, amount: 0.2 }}
          className="bg-[#0B2D4B] rounded-xl text-white p-10 md:p-16 mb-20 lg:mb-28"
        >
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-blue-200 uppercase tracking-wider mb-2">
              OUR SIMPLE APPROACH
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Your Dream Decor in Three Steps
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            {/* Step 1 */}
            <div>
              <p className="text-6xl font-extrabold text-gray-400 mb-4 opacity-50">
                1
              </p>
              <h3 className="text-xl font-bold mb-3">
                Consult & Define
              </h3>
              <p className="text-gray-300">
                We start with a detailed consultation to understand your vision, budget, and lifestyle needs.
              </p>
            </div>
            
            {/* Step 2 */}
            <div>
              <p className="text-6xl font-extrabold text-gray-400 mb-4 opacity-50">
                2
              </p>
              <h3 className="text-xl font-bold mb-3">
                Design & Source
              </h3>
              <p className="text-gray-300">
                Our designers create custom mood boards and source the perfect furniture and decor products.
              </p>
            </div>

            {/* Step 3 */}
            <div>
              <p className="text-6xl font-extrabold text-gray-400 mb-4 opacity-50">
                3
              </p>
              <h3 className="text-xl font-bold mb-3">
                Deliver & Install
              </h3>
              <p className="text-gray-300">
                We handle the final delivery, assembly, and styling, leaving you with a flawless finished space.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}