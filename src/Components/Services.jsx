import React from "react";
import { motion } from "framer-motion";

// --- Custom Icon Components for Service Cards (New and Thematic) ---

// 1. Design + Build Turnkey Solutions
const BlueprintIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="9" y1="3" x2="9" y2="21"></line>
    <line x1="3" y1="9" x2="21" y2="9"></line>
    <line x1="3" y1="15" x2="21" y2="15"></line>
    <line x1="15" y1="3" x2="15" y2="21"></line>
  </svg>
);

// 2. Modular Furniture Solutions
const SofaIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 10a4 4 0 0 0-4 4v3h8v-3a4 4 0 0 0-4-4z" />
    <path d="M17 19H7" />
    <path d="M21 16v-3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3" />
    <path d="M6 19v2" />
    <path d="M18 19v2" />
  </svg>
);

// 3. MEP & Systems Integration
const GearIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1.51 1V21a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1.51-1V3a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

// 4. Demountable Glass Partitions
const DividerIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12H3" />
    <path d="M12 3V21" />
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
  </svg>
);

// 5. Consultancy Services
const ConsultIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 20L15 15H19C20.1 15 21 14.1 21 13V5C21 3.9 20.1 3 19 3H5C3.9 3 3 3.9 3 5V13C3 14.1 3.9 15 5 15H9L10 20Z" />
    <line x1="12" y1="8" x2="12" y2="10" />
    <path d="M12 12v.01" />
  </svg>
);

// 6. Facility & Maintenance Solutions
const WrenchIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 12.3a4.5 4.5 0 0 0-6.36 0l-3.21 3.21a1.5 1.5 0 0 0 0 2.12l4.24 4.24a1.5 1.5 0 0 0 2.12 0l3.21-3.21a4.5 4.5 0 0 0 0-6.36z" />
    <path d="M18.78 6.46l-4.24-4.24" />
    <path d="M19.44 11.23a4.5 4.5 0 0 0 0-6.36l-3.21-3.21a1.5 1.5 0 0 0-2.12 0l-4.24 4.24" />
    <line x1="17.02" y1="17.02" x2="17.02" y2="17.02" />
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
      icon: BlueprintIcon,
      title: "Design + Build Turnkey Solutions",
      description: "End-to-end project delivery from concept to completion.Covers design, construction, MEP, and final handover.Ensures quality, creativity, and on-time execution.",
    },
    {
      icon: SofaIcon,
      title: "Modular Furniture Solutions",
      description: "Custom, ergonomic, and space-efficient furniture systems.Includes workstations, storage, conference, and lounge setups.Designed for flexibility, scalability, and modern aesthetics.",
    },
    {
      icon: GearIcon,
      title: "MEP & Systems Integration",
      description: "Comprehensive mechanical, electrical, and plumbing solutions.Integrated with HVAC, fire safety, networking, and automation.Ensures safety, sustainability, and operational efficiency.",
    },
    {
      icon: DividerIcon,
      title: "Demountable Glass Partitions",
      description: "Stylish, modular glass wall systems for modern offices.Quick installation and easy reconfiguration options.Enhances openness, privacy, and acoustic performance.",
    },
    {
      icon: ConsultIcon,
      title: "Consultancy Services",
      description: "Expert project guidance from design to handover.Covers cost optimization, technical audits, and PMC support.Delivers efficient, compliant, and value-driven outcomes.",
    },
    {
      icon: WrenchIcon,
      title: "Facility & Maintenance Solutions",
      description: "Comprehensive upkeep and facility management services.Includes preventive maintenance, AMC, and energy monitoring.Keeps spaces safe, efficient, and operational year-round.",
    },
  ];

  return (
    <div className="w-full bg-white font-sans">
      {/* 🌟 1. Hero Section (Matching About Us style) */}
      <div className="w-full bg-[#e5edf3] py-20 md:py-30 min-h-[30vh] mb-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-extrabold text-gray-900 mb-4 pt-7">
              Our Core Services
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
            <p className="text-sm font-semibold  uppercase tracking-wider mb-2">
              YOUR DECOR PARTNER
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Design Solutions for Every Home
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {serviceCards.map((card, index) => (
              <div
                key={index}
                className="p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-[#e5edf3] rounded-full mb-4">
                  {/* Using the updated, thematic icon */}
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
        
        {/* Changed lg:grid-cols-4 to lg:grid-cols-3 to better fit 6 cards in a responsive grid. */}

        {/* 🌟 3. Simple Process Section (Focusing on Trust/Ease) */}
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeIn}
          viewport={{ once: true, amount: 0.2 }}
          className="bg-[#0B2D4B] rounded-xl text-white p-10 md:p-16 mb-20 lg:mb-28"
        >
            <div className="text-center mb-12 ">
            <p className="text-sm font-semibold text-blue-200 uppercase tracking-wider mb-2">
              OUR SIMPLE APPROACH
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Your Dream Decor in Three Steps
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center ">
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
              </h3> {/* CORRECTED: Changed </p> to </h3> */}
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
