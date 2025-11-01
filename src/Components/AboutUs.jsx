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
        {/* Top Section: Award, Title, and Description (Existing) */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-16 mb-20 lg:mb-28">
          {/* Left Block: Award Badge */}
          <div className="flex-shrink-0 relative w-40 h-40 sm:w-48 sm:h-48 flex items-center justify-center">
            {/* Outer circle for "DECOR AWARD" text */}
            {/* Note: Tailwind's utility classes do not include 'animate-spin-slow', 
                but I'll keep the class name here assuming it's custom defined. */}
            <div className="absolute w-full h-full rounded-full border border-blue-200 flex items-center justify-center animate-spin-slow">
              <span
                className="absolute text-sm font-semibold text-blue-500 uppercase tracking-widest"
                style={{
                  transform:
                    "rotate(-45deg) translateY(-50px) translateX(20px)",
                }}
              >
                2022 BEST DECOR AWARD
              </span>
            </div>
            {/* Inner circle with star badge */}
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 bg-blue-50 rounded-full flex items-center justify-center shadow-inner">
              <svg
                className="w-16 h-16 text-blue-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63L2 9.24l5.46 4.73L5.82 21L12 17.27z" />
              </svg>
            </div>
          </div>

          {/* Middle Block: Title */}
          <div className="flex-grow text-center lg:text-left">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
              DECOR STORE STORY
            </p>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
              Commitment to <br className="hidden sm:inline" /> quality product.
            </h2>
          </div>

          {/* Right Block: Description */}
          <div className="flex-grow max-w-xl text-center lg:text-left text-gray-600 leading-relaxed">
            <p className="text-lg">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry. Lorem ipsum has been the industry's standard dummy text
              ever since the lorem ipsum is simply dummy text of the printing
              and typesetting.
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

          {/* Left image */}
          <img
            src="https://images.pexels.com/photos/6758455/pexels-photo-6758455.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Green sofa living room"
            className="absolute hidden sm:block left-0 top-1/2 -translate-y-1/2 w-[180px] sm:w-[250px] md:w-[350px] lg:w-[400px] h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] object-cover rounded-lg shadow-xl -translate-x-1/4 md:-translate-x-1/5"
            style={{ zIndex: 1 }}
          />

          {/* Center image */}
          <img
            src="https://images.pexels.com/photos/6492404/pexels-photo-6492404.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Orange sofa living room"
            className="relative z-10 w-[85%] sm:w-[75%] md:w-[65%] lg:w-[55%] h-[80%] sm:h-[85%] object-cover rounded-lg shadow-2xl"
          />

          {/* Right image */}
          <img
            src="https://images.pexels.com/photos/10141646/pexels-photo-10141646.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Large houseplant"
            className="absolute hidden sm:block right-0 top-1/2 -translate-y-1/2 w-[150px] sm:w-[200px] md:w-[280px] lg:w-[300px] h-[200px] sm:h-[280px] md:h-[380px] lg:h-[400px] object-cover rounded-lg shadow-xl translate-x-1/4 md:translate-x-1/5"
            style={{ zIndex: 1 }}
          />
        </div>

        {/* --- NEW SECTION: Milestones and Social Proof --- */}

        {/* Milestones Section */}
        <div className="pt-8 pb-16 lg:pt-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-8 lg:gap-16">
            {/* Milestone 1 */}
            <div className="text-center sm:text-left">
              <p className="text-7xl lg:text-8xl font-extrabold text-gray-100 mb-6 tracking-widest">
                01
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Business founded
              </h3>
              <p className="text-gray-600 mb-4">
                Lorem ipsum is simply text the printing typesetting standard
                dummy.
              </p>
              <div className="w-12 h-0.5 bg-gray-900 mx-auto sm:mx-0"></div>
            </div>

            {/* Milestone 2 */}
            <div className="text-center sm:text-left">
              <p className="text-7xl lg:text-8xl font-extrabold text-gray-100 mb-6 tracking-widest">
                02
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Build new office
              </h3>
              <p className="text-gray-600 mb-4">
                Lorem ipsum is simply text the printing typesetting standard
                dummy.
              </p>
              <div className="w-12 h-0.5 bg-gray-900 mx-auto sm:mx-0"></div>
            </div>

            {/* Milestone 3 */}
            <div className="text-center sm:text-left">
              <p className="text-7xl lg:text-8xl font-extrabold text-gray-100 mb-6 tracking-widest">
                03
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Relocates headquarter
              </h3>
              <p className="text-gray-600 mb-4">
                Lorem ipsum is simply text the printing typesetting standard
                dummy.
              </p>
              <div className="w-12 h-0.5 bg-gray-900 mx-auto sm:mx-0"></div>
            </div>

            {/* Milestone 4 */}
            <div className="text-center sm:text-left">
              <p className="text-7xl lg:text-8xl font-extrabold text-gray-100 mb-6 tracking-widest">
                04
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Revenues of millions
              </h3>
              <p className="text-gray-600 mb-4">
                Lorem ipsum is simply text the printing typesetting standard
                dummy.
              </p>
              <div className="w-12 h-0.5 bg-gray-900 mx-auto sm:mx-0"></div>
            </div>
          </div>
        </div>

        {/* Social Proof/Reviews Section */}
        <div className="pt-8 pb-16">
          <div className="border border-gray-200 rounded-lg grid grid-cols-1 md:grid-cols-2 shadow-sm">
            {/* Trust/Followers Block */}
            <div className="p-6 md:p-8 flex items-center justify-center border-b md:border-b-0 md:border-r border-gray-200">
              <TrustIcon className="w-6 h-6 mr-3 text-gray-700" />
              <p className="text-base sm:text-lg text-gray-700 font-medium">
                <span className="font-bold text-gray-900">Join the 10000+</span>{" "}
                people trusting us.
              </p>
            </div>

            {/* Reviews Block */}
            <div className="p-6 md:p-8 flex items-center justify-center">
              <StarIcon className="w-6 h-6 mr-3 text-yellow-500" />
              <p className="text-base sm:text-lg text-gray-700 font-medium">
                <span className="font-bold text-gray-900">4.9 out of 5</span> -
                8549 Total reviews.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
