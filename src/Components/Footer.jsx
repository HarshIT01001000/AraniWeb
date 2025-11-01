import { Link } from "react-router-dom";
import React from "react";
import { FaWhatsapp } from "react-icons/fa6";


// Note: Removed external icon imports (FaFacebookF, FiTruck, etc.)
// and replaced them with inline SVG definitions to resolve compilation errors.
// The main dark color used is a dark charcoal (#141921) to match the image's tone.

// Inline SVG Components for the top utility bar (previously Fi icons)
const TruckIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 18H3c-1.1 0-2-.9-2-2V9h4V4h4v5h4V4h4v5h4v7c0 1.1-.9 2-2 2h-2c-1.1 0-2 .9-2 2s.9 2 2 2h2v-2h-2V16c0-.6.4-1 1-1h1V12h-4c-1.1 0-2-.9-2-2H9c-1.1 0-2 .9-2 2H3v3c0 .6.4 1 1 1h1V16c0 1.1.9 2 2 2s2-.9 2-2h2v2h2v-2h-2c-1.1 0-2 .9-2 2s.9 2 2 2h2v-2h-2V16c0-.6.4-1 1-1h1V12h4v-3h-4V4H5v5H1V16c0 1.1.9 2 2 2h2v2c0 1.1.9 2 2 2s2-.9 2-2h2v-2H5z"/>
    <circle cx="7" cy="18" r="2" />
    <circle cx="17" cy="18" r="2" />
  </svg>
);
const MapPinIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
    <circle cx="12" cy="9" r="3" />
  </svg>
);
const ShieldIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);
const HeadphonesIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 18v-6h4c2.21 0 4-1.79 4-4s-1.79-4-4-4H3" />
    <path d="M21 18v-6h-4c-2.21 0-4-1.79-4-4s1.79-4 4-4h4" />
    <path d="M12 2v20" />
    <circle cx="7" cy="18" r="2" />
    <circle cx="17" cy="18" r="2" />
  </svg>
);

// Inline SVG Components for social media (previously Fa icons)
const FacebookIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const TwitterIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.9 4.3l.5-.3a11.1 11.1 0 0 0 2.2-2.1c-.6.3-1.3.5-2 .6.7-.4 1.3-1.1 1.5-1.9a7.6 7.6 0 0 1-2.4.9A3.8 3.8 0 0 0 15 3.5c-2.3 0-4.1 1.9-4.1 4.1 0 .3 0 .6.1.8-3.4-.2-6.5-1.8-8.5-4.3-.4.7-.6 1.4-.6 2.2 0 1.4.7 2.7 1.8 3.4-.5 0-1-.1-1.4-.4v.1c0 2 1.4 3.6 3.3 4-.3.1-.7.2-1.1.2-.3 0-.6 0-.8-.1 1 3.3 4 5.7 7.5 5.8-1.5 1.2-3.4 1.9-5.5 1.9-.4 0-.8 0-1.1-.1A11.1 11.1 0 0 0 3 20.3c2 1.2 4.3 1.8 6.6 1.8 7.9 0 12.2-6.5 12.2-12.2 0-.2 0-.4 0-.6.8-.6 1.5-1.4 2-2.3-.7.3-1.5.6-2.4.7.7-.4 1.3-1.1 1.5-1.9z" />
  </svg>
);
const InstagramIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.16c3.21 0 3.61.01 4.87.07 1.27.06 2.11.23 2.9.54.79.31 1.44.75 2.08 1.4.63.63 1.07 1.29 1.4 2.08.31.79.48 1.63.54 2.9.06 1.26.07 1.66.07 4.87s-.01 3.61-.07 4.87c-.06 1.27-.23 2.11-.54 2.9-.31.79-.75 1.44-1.4 2.08-.63.63-1.29 1.07-2.08 1.4-.79.31-1.63.48-2.9.54-1.26.06-1.66.07-4.87.07s-3.61-.01-4.87-.07c-1.27-.06-2.11-.23-2.9-.54-.79-.31-1.44-.75-2.08-1.4-.63-.63-1.07-1.29-1.4-2.08-.31-.79-.48-1.63-.54-2.9-.06-1.26-.07-1.66-.07-4.87s.01-3.61.07-4.87c.06-1.27.23-2.11.54-2.9.31-.79.75-1.44 1.4-2.08.63-.63 1.29-1.07 2.08-1.4.79-.31 1.63-.48 2.9-.54 1.26-.06 1.66-.07 4.87-.07zM12 4.16c-3.1 0-3.48.01-4.7.07-1.15.05-1.87.21-2.3.38-.43.17-.79.37-1.14.72s-.55.71-.72 1.14c-.17.43-.33 1.15-.38 2.3-.06 1.22-.07 1.6-.07 4.7s.01 3.48.07 4.7c.05 1.15.21 1.87.38 2.3.17.43.37.79.72 1.14s.71.55 1.14.72c.43.17 1.15.33 2.3.38 1.22.06 1.6.07 4.7.07s3.48-.01 4.7-.07c1.15-.05 1.87-.21 2.3-.38.43-.17.79-.37 1.14-.72s.55-.71.72-1.14c.17-.43.33-1.15.38-2.3.06-1.22.07-1.6.07-4.7s-.01-3.48-.07-4.7c-.05-1.15-.21-1.87-.38-2.3-.17-.43-.37-.79-.72-1.14s-.71-.55-1.14-.72c-.43-.17-1.15-.33-2.3-.38-1.22-.06-1.6-.07-4.7-.07z" />
    <path d="M12 7.74a4.26 4.26 0 1 0 0 8.52 4.26 4.26 0 0 0 0-8.52zM12 9.74a2.26 2.26 0 1 1 0 4.52 2.26 2.26 0 0 1 0-4.52z" />
    <circle cx="17.42" cy="6.58" r=".99" />
  </svg>
);


export default function Footer() {
  return (
    <footer className="w-full text-white">

      {/* Top Info Row - White Background */}
     {/* Top Info Row - White Background */}
<div className="w-full bg-white border-t border-gray-200">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 text-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
    
    {/* Item 1 */}
    <div className="flex flex-col items-center justify-center py-6 gap-3">
      <TruckIcon className="text-gray-800 text-3xl" />
      <div>
        <p className="font-semibold text-lg text-gray-800">On-Time Delivery</p>
        <p className="text-gray-600 text-sm">Committed project timelines</p>
      </div>
    </div>

    {/* Item 2 */}
    <div className="flex flex-col items-center justify-center py-6 gap-3">
      <MapPinIcon className="text-gray-800 text-3xl" />
      <div>
        <p className="font-semibold text-lg text-gray-800">Turnkey Solutions</p>
        <p className="text-gray-600 text-sm">End-to-end design & build execution</p>
      </div>
    </div>

    {/* Item 3 */}
    <div className="flex flex-col items-center justify-center py-6 gap-3">
      <ShieldIcon className="text-gray-800 text-3xl" />
      <div>
        <p className="font-semibold text-lg text-gray-800">Quality Materials</p>
        <p className="text-gray-600 text-sm">Branded, certified & durable finishes</p>
      </div>
    </div>

    {/* Item 4 */}
    <div className="flex flex-col items-center justify-center py-6 gap-3">
      <HeadphonesIcon className="text-gray-800 text-3xl" />
      <div>
        <p className="font-semibold text-lg text-gray-800">Client Support</p>
        <p className="text-gray-600 text-sm">Transparent communication, always</p>
      </div>
    </div>

  </div>
</div>


      {/* Main Footer Content - Dark Charcoal Background */}
      <div className="bg-[#141921] pt-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-10">

          {/* Logo & About */}
          <div className="flex flex-col gap-4">
            {/* Logo: Simplified font-weight to match image */}
            <div className="flex items-center gap-2">
              <div className="h-6 w-1.5 bg-white rounded"></div>
              <div className="h-6 w-1.5 bg-white rounded"></div>
              <h1 className="text-2xl font-semibold">decshop</h1>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Transforming Spaces That Inspire
            </p>

              {/* Social Icons: FaDribbble replaced by a simple circle placeholder */}
              <div className="flex items-center gap-4 text-xl text-white mt-3 opacity-80">
                {/* Placeholder for the generic circular icon in the image */}
                <FaWhatsapp className="w-5 h-5 hover:text-white cursor-pointer hover:opacity-100" />
                <InstagramIcon className="w-5 h-5 hover:text-white cursor-pointer hover:opacity-100" />
              </div>
          </div>

          {/* Categories */}
          <div >
            <h3 className="font-semibold mb-4 text-lg">Categories</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white cursor-pointer">Living Room Furniture</li>
              <li className="hover:text-white cursor-pointer">Bedroom Collections</li>
              <li className="hover:text-white cursor-pointer">Office & Workspaces</li>
              <li className="hover:text-white cursor-pointer">Decor & Lighting</li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Information</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white cursor-pointer"><Link to="/about">About us</Link></li>
             <li className="hover:text-white cursor-pointer"> <Link to="/contact">Contact us</Link></li>
              <li className="hover:text-white cursor-pointer"><Link to="/products">Design</Link></li>
              <li className="hover:text-white cursor-pointer"><Link to="/service">Services</Link></li>
            </ul>
          </div>



          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Newsletter</h3>
            <p className="text-gray-300 text-sm mb-4">Get everything you need succeed!</p>


            {/* Payment Logos: Updated with alt text and a fourth logo for layout match */}
            <div className="flex gap-2 items-center mt-6 opacity-90 ">
              <img alt="Visa" src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" className="h-6" />
              <img alt="PayPal" src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-6" />
              {/* Klarna is often grayscale/monochrome in dark footers */}
              <img alt="Mastercard" src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-6" />
            </div>
          </div>
        </div>

        {/* New Section: ReCAPTCHA Notice */}
        <div className="max-w-7xl mx-auto px-6 mt-14 py-6 text-gray-400 text-sm border-t border-gray-700">
          <p>

          </p>
        </div>

        {/* Bottom Bar: Copyright and Contact Info */}
        <div className="max-w-7xl mx-auto px-6 py-6 text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="order-2 md:order-1">© 2025 Arani Infra Solution </p>
          
          <div className="flex gap-8 order-1 md:order-2">
            <p>Need support? <span className="font-semibold text-white">+91 8108108851 | +91 9892755754</span></p>
            <p>Customer care: <span className="font-semibold text-white">arniinfrasolutions@gmail.com</span></p>
          </div>
        </div>
      </div>

    </footer>
  );
}
