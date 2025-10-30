import React from "react";
import { FaFacebookF, FaDribbble, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { FiTruck, FiMapPin, FiShield, FiHeadphones } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="w-full text-white pt-16 pb-10 ">

{/* Top Info Row */}
<div className="w-full border-b border-gray-200">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4">

    {/* Item 1 */}
    <div className="flex items-center justify-center md:justify-start gap-3 py-6 border-gray-300 md:border-r">
      <FiTruck className="text-[#0B2D4B] text-3xl" />
      <div>
        <p className="font-semibold text-lg text-[#0B2D4B]">Free shipping</p>
        <p className="text-gray-500 text-sm">Free return & exchange</p>
      </div>
    </div>

    {/* Item 2 */}
    <div className="flex items-center justify-center md:justify-start gap-3 py-6 border-gray-300 md:border-r">
      <FiMapPin className="text-[#0B2D4B] text-3xl" />
      <div>
        <p className="font-semibold text-lg text-[#0B2D4B]">Store locator</p>
        <p className="text-gray-500 text-sm">Find nearest store</p>
      </div>
    </div>

    {/* Item 3 */}
    <div className="flex items-center justify-center md:justify-start gap-3 py-6 border-gray-300 md:border-r">
      <FiShield className="text-[#0B2D4B] text-3xl" />
      <div>
        <p className="font-semibold text-lg text-[#0B2D4B]">Secure payment</p>
        <p className="text-gray-500 text-sm">100% secure method</p>
      </div>
    </div>

    {/* Item 4 */}
    <div className="flex items-center justify-center md:justify-start gap-3 py-6">
      <FiHeadphones className="text-[#0B2D4B] text-3xl" />
      <div>
        <p className="font-semibold text-lg text-[#0B2D4B]">Online support</p>
        <p className="text-gray-500 text-sm">24/7 support center</p>
      </div>
    </div>

  </div>
</div>


      <div className="bg-[#0B2D4B]">
        {/* Main Footer Content */}
      <div className="border-t border-gray-600 pt-14 bg-[#0B2D4B]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-10">

          {/* Logo & About */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="h-6 w-1.5 bg-white rounded"></div>
              <div className="h-6 w-1.5 bg-white rounded"></div>
              <h1 className="text-2xl font-semibold">dec<span className="font-light">shop</span></h1>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Lorem ipsum amet adipiscing elit to eiusmod ad tempor.
            </p>

            <div className="flex items-center gap-4 text-xl text-white mt-3">
              <FaFacebookF className="hover:text-gray-300 cursor-pointer" />
              <FaDribbble className="hover:text-gray-300 cursor-pointer" />
              <FaXTwitter className="hover:text-gray-300 cursor-pointer" />
              <FaInstagram className="hover:text-gray-300 cursor-pointer" />
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Categories</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white cursor-pointer">Bed room</li>
              <li className="hover:text-white cursor-pointer">Living room</li>
              <li className="hover:text-white cursor-pointer">Lightning</li>
              <li className="hover:text-white cursor-pointer">Fabrics sofa</li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Information</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white cursor-pointer">About us</li>
              <li className="hover:text-white cursor-pointer">Contact us</li>
              <li className="hover:text-white cursor-pointer">FAQs</li>
              <li className="hover:text-white cursor-pointer">Payment</li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Account</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white cursor-pointer">My account</li>
              <li className="hover:text-white cursor-pointer">Orders</li>
              <li className="hover:text-white cursor-pointer">Checkout</li>
              <li className="hover:text-white cursor-pointer">My wishlists</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Newsletter</h3>
            <p className="text-gray-300 text-sm mb-4">Get everything you need succeed!</p>

            <div className="flex items-center border border-gray-400 rounded-lg overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent px-3 py-2 w-full outline-none text-sm"
              />
              <button className="px-4 py-2 bg-white text-[#0B2D4B] font-bold">
                ✉
              </button>
            </div>

            <div className="flex gap-4 items-center mt-5 opacity-80">
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" className="h-6" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-6" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/39/Klarna_Logo_black.svg" className="h-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t bg-[#0B2D4B] border-gray-700 mt-12 pt-6 max-w-7xl mx-auto px-6 text-gray-300 text-sm flex flex-col md:flex-row justify-between gap-4">
        <p>© 2025 Crafto — Powered by ThemeZaa</p>
        <p>Need support? <span className="font-semibold text-white">+1 234 567 8910</span></p>
        <p>Customer care: <span className="font-semibold text-white">info@domain.com</span></p>
      </div>
      </div>

    </footer>
  );
}
