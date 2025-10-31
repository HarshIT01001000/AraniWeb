import React, { useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const heroData = [
    {
      id: 1,
      heading: "Lewis Sofas",
      subtext: "Price starting from $259.00",
      mainImg: "/Sofa1.png",
      bgColor: "bg-[#E9F8F7]",
      bgCircleMobile: "bg-[#bed7de]",
      bgRightMobile: "bg-[#3ba5c2]",
      bgCircleDesktop: "bg-[#bed7de]",
      bgRightDesktop: "bg-[#3ba5c2]",
      bottomBoxLeft: "Next",
      bottomBoxRightImg: "/Sofa3.png",
      bottomBoxBg: "bg-orange-200",
    },
    {
      id: 2,
      heading: "Modern Sofa",
      subtext: "Starting from $199.00",
      mainImg: "/Sofa3.png",
      bgColor: "bg-orange-100",
      bgCircleMobile: "bg-orange-200",
      bgRightMobile: "bg-orange-300",
      bgCircleDesktop: "bg-orange-200",
      bgRightDesktop: "bg-orange-300",
      bottomBoxLeft: "View Details",
      bottomBoxRightImg: "/Sofa1.png",
      bottomBoxBg: "bg-[#E9F8F7]",
    },
  ];

  const [currentHero, setCurrentHero] = useState(0);
  const hero = heroData[currentHero];

  const handleNextHero = () => {
    setCurrentHero((prev) => (prev + 1) % heroData.length);
  };

  return (
    <section
      className={`relative w-full min-h-screen flex items-center justify-center overflow-hidden ${hero.bgColor}`}
    >
      {/* Desktop Half-Circle */}
      <div className="absolute inset-0 flex justify-end items-center">
       {/* Desktop Half-Circle */}
<AnimatePresence mode="wait">
  <motion.div
    key={`circle-${currentHero}`} // remounts every time hero changes
    className={`hidden md:block absolute right-[-200px] top-0 h-[900px] w-[800px] lg:w-[1200px] ${hero.bgCircleDesktop} rounded-l-full`}
    initial={{ x: 300, opacity: 0 }}   // start offscreen to the right
    animate={{ x: 0, opacity: 1 }}      // slide to position
    transition={{ duration: 2, ease: "easeOut" }}
  />
</AnimatePresence>


        {/* Right Overlay Color */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`overlay-${currentHero}`} // remounts on hero change
            className={`hidden md:block absolute right-[-150px] top-0 h-[1000px] w-[500px] lg:w-[710px] ${hero.bgRightDesktop} opacity-80`}
            initial={{ x: 300 }} // start offscreen
            animate={{ x: 0 }} // slide to position
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </AnimatePresence>
      </div>

      {/* Mobile stacked backgrounds */}
      <div className="absolute md:hidden inset-0 flex flex-col items-center justify-center mt-20">
        <div
          className={`w-72 h-72 ${hero.bgCircleMobile} rounded-full mb-6`}
        ></div>
        <div className={`w-full h-1/2 ${hero.bgRightMobile}`}></div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 text-center md:text-left w-full">
        {/* Left Text Content */}
        <motion.div
          key={`text-${currentHero}`}
          className="max-w-lg space-y-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }} // comes after image & circle
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#0B2D4B] leading-tight">
            {hero.heading}
          </h1>
          <p className="text-gray-600 text-lg">{hero.subtext}</p>
          <button className="bg-[#0B2D4B] text-white px-8 py-3 flex items-center gap-2 rounded-full hover:bg-[#0a233b] transition-all mx-auto md:mx-0">
            <HiOutlineShoppingBag className="text-xl" />
            SHOP NOW
          </button>
        </motion.div>

        {/* Right Image with AnimatePresence */}
        <AnimatePresence mode="wait">
          {/* Right Image */}
          <motion.div
            key={`img-${currentHero}`}
            className="mt-10 md:mt-0 flex justify-center"
            initial={{ x: 200, opacity: 0 }} // start offscreen
            animate={{ x: 0, opacity: 1 }} // slide in
            transition={{ duration: 1, delay: 0.4 }}
          >
            <img
              src={hero.mainImg}
              alt="furniture"
              className="w-[300px] sm:w-[400px] md:w-[900px] max-w-full relative z-10"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Box */}
      <div
        className={`absolute bottom-0 md:left-4 ${hero.bottomBoxBg} w-72 h-40 rounded-lg z-10 flex overflow-hidden`}
      >
        {/* Left Half */}
        <div
          className="flex-1 flex items-center justify-center bg-black text-white font-bold text-lg cursor-pointer"
          onClick={handleNextHero}
        >
          {hero.bottomBoxLeft}
        </div>

        {/* Right Half */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src={hero.bottomBoxRightImg}
            alt="Sofa2"
            className="h-full w-full object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
