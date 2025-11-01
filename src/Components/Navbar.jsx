import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // ✅ get current route

  // helper function for active link
  const getLinkClass = (path) =>
    location.pathname === path
      ? "text-[#0B2D4B] font-bold"
      : "text-gray-700 hover:text-[#0B2D4B]";

  return (
    <nav className="w-full z-30 absolute top-0 left-0 md:bg-transparent pt-4 bg-white">
      <div className="max-w-8xl mx-auto px-6 lg:px-10 py-4 flex justify-between items-center">

        {/* LEFT SECTION */}
        <div className="flex items-center gap-10">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="h-6 w-1.5 bg-[#0B2D4B] rounded"></div>
            <div className="h-6 w-1.5 bg-[#0B2D4B] rounded"></div>
            <h1 className="text-2xl font-semibold text-[#0B2D4B]">
              dec<span className="font-light">shop</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex lg:text-2xl items-center gap-8 font-medium">
            <li>
              <Link to="/" className={getLinkClass("/")}>Home</Link>
            </li>
            <li>
              <Link to="/about" className={getLinkClass("/about")}>About us</Link>
            </li>
            <li>
              <Link to="/products" className={getLinkClass("/products")}>Design</Link>
            </li>
            <li>
              <Link to="/service" className={getLinkClass("/service")}>Services</Link>
            </li>
            <li>
              <Link to="/contact" className={getLinkClass("/contact")}>Contact us</Link>
            </li>
          </ul>
        </div>

        {/* RIGHT SECTION */}
        <div className="hidden md:flex lg:text-2xl items-center gap-6 text-[#0B2D4B]">
          <FiSearch className="text-xl cursor-pointer" />
          <p className="font-semibold cursor-pointer">My account</p>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-3xl text-[#0B2D4B]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IoClose /> : <RxHamburgerMenu />}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <div
        className={`md:hidden bg-white w-full shadow-lg transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 py-4" : "max-h-0 py-0"
        }`}
      >
        <ul className="flex flex-col gap-4 px-6 text-lg font-medium">
          <li>
            <Link to="/" onClick={() => setIsOpen(false)} className={getLinkClass("/")}>Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsOpen(false)} className={getLinkClass("/about")}>About us</Link>
          </li>
          <li>
            <Link to="/products" onClick={() => setIsOpen(false)} className={getLinkClass("/products")}>Products</Link>
          </li>
          <li>
            <Link to="/service" onClick={() => setIsOpen(false)} className={getLinkClass("/service")}>Services</Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsOpen(false)} className={getLinkClass("/contact")}>Contact us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
