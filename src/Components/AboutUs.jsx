import React from "react";

// Custom component for the Trust icon (Smiley/User badge)
const TrustIcon = (props) => (
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
    <circle cx="12" cy="12" r="10" />
    <path d="M12 12v.01" />
    <path d="M16 16s-1.5-2-4-2s-4 2-4 2" />
    <path d="M16 8H8" />
  </svg>
);

// Custom component for the Star icon (Reviews)
const StarIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="none"
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.25l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

export default function AboutUs() {
  return (
    <div className="w-full bg-white font-sans">
      <div className="w-full bg-[#e5edf3] py-30 min-h-[30vh] mb-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
              About Us
            </h1>{" "}
            {/* Changed title to match image */}
            {/* Breadcrumb Navigation */}
            <div className="flex justify-center items-center gap-2 text-sm font-semibold text-gray-500">
              <p className="hover:text-gray-700 cursor-pointer transition-colors">
                Home
              </p>
              <p className="text-gray-300 pointer-events-none">|</p>
              <p className="text-gray-900">About Us</p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section:Title, and Description (Existing) */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-16 mb-20 lg:mb-28">
          {/* first Block: Title */}
          <div className="flex-grow text-center lg:text-left">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
              DECOR STORE STORY
            </p>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
              🔖 Our Story <br className="hidden sm:inline" /> From Our Side.
            </h2>
          </div>

          {/* second Block: Description */}
          <div className="flex-grow max-w-xl text-center lg:text-left text-gray-600 leading-relaxed">
            <p className="text-lg">
              <p className="text-2xl font-bold">Arni Infra Solutions</p>  is a leading design and build company providing comprehensive interior and infrastructure services across office, commercial, and residential sectors. We blend innovation with functionality to create modern, sustainable, and inspiring spaces. Our team ensures every project is delivered with precision, quality, and client satisfaction — from concept to completion. With design excellence, technical expertise, and transparent project management, we redefine the way spaces are imagined and built.
            </p>
          </div>
        </div>

         {/*2  Top Section:Title, and Description (Existing) */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-16 mb-20 lg:mb-28">
  
          {/* second Block: Description */}
          <div className="flex-grow max-w-xl text-center lg:text-left text-gray-600 leading-relaxed">
            <p className="text-lg">
             🎯 End-to-end turnkey expertise under one roof<br></br>
             🎯 In-house design, execution, and facility teams<br></br>
             🎯 Transparent pricing and realistic timelines<br></br>
             🎯 Use of branded, durable materials<br></br>
             🎯 Focus on ergonomics, innovation, and sustainability
            </p>
          </div>
           {/* first Block: Title */}
          <div className="flex-grow text-center lg:text-left">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
              DECOR STORE STORY
            </p>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
              🧭 Why Choose <br className="hidden sm:inline" /> Arni Infra Solutions
            </h2>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-16 mb-20 lg:mb-28">
          {/* first Block: Title */}
          <div className="flex-grow text-center lg:text-left">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
              DECOR STORE STORY
            </p>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
              🏗️  Who We Are <br className="hidden sm:inline" /> From Our Side.
            </h2>
          </div>

          {/* second Block: Description */}
          <div className="flex-grow max-w-xl text-center lg:text-left text-gray-600 leading-relaxed">
            <p className="text-lg">
              <p className="text-2xl font-bold">Arni Infra Solutions</p>  At Arni Infra Solutions, we specialize in Design, Build, and Infrastructure Solutions for commercial, residential, and corporate spaces. Our mission is to transform environments into functional, aesthetic, and inspiring experiences. With a dedicated team of designers, engineers, and project managers, we provide end-to-end turnkey services — from concept design and planning to execution and post-project support. We combine creativity, technology, and precision to deliver spaces that reflect our clients’ identity, values, and lifestyle. In partnership with R Design Architects, we ensure every project is a balance of innovation, practicality, and sustainability.
            </p>
          </div>
        </div>

        {/* Bottom Section: Image Gallery (Responsive) */}
        <div className="relative flex justify-center items-center h-[400px] sm:h-[450px] md:h-[600px] overflow-hidden mb-20 sm:mb-28">
          {/* Background Text */}
          <p
            className="absolute text-[70px] sm:text-8xl md:text-[180px] lg:text-[220px] font-extrabold text-gray-100 opacity-80 select-none z-0 tracking-widest"
            style={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              whiteSpace: "nowrap",
              pointerEvents: "none",
            }}
          >
            Decors
          </p>

          {/* Left image - MODIFIED POSITIONING */}
          <img
            src="https://images.pexels.com/photos/6758455/pexels-photo-6758455.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Green sofa living room"
            className="absolute hidden sm:block left-0 top-1/2 -translate-y-1/2 w-[180px] sm:w-[250px] md:w-[350px] lg:w-[400px] h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] object-cover rounded-lg shadow-xl -left-16 sm:-left-24 lg:-left-32"
            style={{ zIndex: 1 }}
          />

          {/* Center image */}
          <img
            src="https://images.pexels.com/photos/6492404/pexels-photo-6492404.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Orange sofa living room"
            className="relative z-10 w-[85%] sm:w-[75%] md:w-[65%] lg:w-[55%] h-[80%] sm:h-[85%] object-cover rounded-lg shadow-2xl"
          />

          {/* Right image - MODIFIED POSITIONING */}
          <img
            src="https://images.pexels.com/photos/10141646/pexels-photo-10141646.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Large houseplant"
            className="absolute hidden sm:block right-0 top-1/2 -translate-y-1/2 w-[150px] sm:w-[200px] md:w-[280px] lg:w-[300px] h-[200px] sm:h-[280px] md:h-[380px] lg:h-[400px] object-cover rounded-lg shadow-xl -right-16 sm:-right-24 lg:-right-32"
            style={{ zIndex: 1 }}
          />
        </div>

        {/* --- NEW SECTION: Milestones and Social Proof --- */}

        {/* Vis-Mis Section */}
        <div className="pt-8 pb-16 lg:pt-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-8 lg:gap-16">
            {/* Vision */}
            <div className="text-center sm:text-left">
              <p className="text-7xl lg:text-8xl font-extrabold text-gray-100 mb-6 tracking-widest">
                01
              </p>
              <h3 className="text-3xl font-bold text-gray-900 mb-3">
                🎯 Our Vision
              </h3>
              <p className="text-gray-600 mb-4">
               To be a trusted and preferred partner in delivering inspiring, functional, and sustainable spaces that seamlessly blend design, technology, and innovation.
              </p>
              <div className="w-12 h-0.5 bg-gray-900 mx-auto sm:mx-0"></div>
            </div>

            {/* Mission */}
            <div className="text-center sm:text-left">
              <p className="text-7xl lg:text-8xl font-extrabold text-gray-100 mb-6 tracking-widest">
                02
              </p>
              <h3 className="text-3xl font-bold text-gray-900 mb-3">
                🚀 Our Mission
              </h3>
              <p className="text-gray-600 mb-4">
                 Delivering innovative, end-to-end infrastructure and interior solutions with precision, quality, and client-focused excellence.
              </p>
              <div className="w-12 h-0.5 bg-gray-900 mx-auto sm:mx-0"></div>
            </div>

            {/* Values */}
            <div className="text-center sm:text-left">
              <p className="text-7xl lg:text-8xl font-extrabold text-gray-100 mb-6 tracking-widest">
                03
              </p>
              <h3 className="text-3xl font-bold text-gray-900 mb-3">
                💎 Our Core Values
              </h3>
              <p className="text-gray-600 mb-4">
               Our core values reflect being accountable, reliable, adaptable, and innovative in every project we deliver.
              </p>
              <div className="w-12 h-0.5 bg-gray-900 mx-auto sm:mx-0"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
