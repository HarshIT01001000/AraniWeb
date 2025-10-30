import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";

export default function Hero() {
  return (
    <section className="w-full min-h-min relative pt-24 pb-12 overflow-hidden bg-[#E9F8F7]">

      {/* Split Background */}
      <div className="absolute inset-0 grid md:grid-cols-2 grid-cols-1">
        <div className="bg-[#E9F8F7]"></div>
        <div className="bg-[#bed7de] md:ml-40"></div>
      </div>

      {/* Content Layer */}
      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">

        {/* Left Text Content */}
        <div className="max-w-lg space-y-4 text-center md:text-left">
          <h1 className="text-6xl font-bold text-[#0B2D4B] leading-tight">
            Lewis <br /> sofas
          </h1>

          <p className="text-gray-600 text-lg">
            Price starting from{" "}
            <span className="underline font-semibold">$259.00</span>
          </p>

          {/* Button */}
          <button className="bg-[#0B2D4B] text-white px-8 py-3 flex items-center gap-2 rounded-full hover:bg-[#0a233b] transition-all mx-auto md:mx-0">
            <HiOutlineShoppingBag className="text-xl" />
            SHOP NOW
          </button>
        </div>

        {/* Right Image */}
        <div className="mt-10 md:mt-0">
          <img
            src="Sofa1.png"
            alt="furniture"
            className="w-[600px] max-w-full"
          />
        </div>
      </div>
    </section>
  );
}
