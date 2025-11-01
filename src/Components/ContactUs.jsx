import React from "react";
import { FiUser, FiMail, FiMessageSquare } from "react-icons/fi";

// Inline SVG Icons for the contact details section
const MapPinIcon = (props) => (
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
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
    <circle cx="12" cy="9" r="3" />
  </svg>
);

const MailIcon = (props) => (
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
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const PhoneCallIcon = (props) => (
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
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.57 1.45.92 2.92 1 4.41a2 2 0 0 1-2 2.22c-1.28.18-2.67.57-4 1.17l-1 1A18 18 0 0 0 12 21c1.28 0 2.67-.57 4-1.17l1-1a2 2 0 0 1 2.22-2c1.49.08 2.96.43 4.41 1a2 2 0 0 1 1.72 2z" />
  </svg>
);

const UsersIcon = (props) => (
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
    <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13A4 4 0 0 1 20 7v2" />
  </svg>
);

// Inline SVG for the form's user icon
const UserOutlineIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

// Inline SVG for the form's mail icon
const EnvelopeOutlineIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

// Inline SVG for the form's message icon (chat bubble)
const MessageOutlineIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

export default function ContactUs() {
  return (
    <div className="w-full  md:mb-[-9rem] min-h-screen">
      {/* Hero Section (from previous iteration) */}
      <div className="w-full bg-[#e5edf3] py-30 min-h-[30vh]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
              Get in touch
            </h1>{" "}
            {/* Changed title to match image */}
            {/* Breadcrumb Navigation */}
            <div className="flex justify-center items-center gap-2 text-sm font-semibold text-gray-500">
              <p className="hover:text-gray-700 cursor-pointer transition-colors">
                Home
              </p>
              <p className="text-gray-300 pointer-events-none">|</p>
              <p className="text-gray-900">Contact Us</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* Contact Details Section */}
        <div className="w-full bg-white py-20">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Office Location */}
            <div className="flex flex-col items-start gap-3 border-b-2 border-gray-200 pb-6">
              <div className="flex items-center gap-3 text-gray-700">
                <MapPinIcon className="w-6 h-6" />
                <h3 className="font-semibold text-lg">Office location</h3>
              </div>
              <p className="text-gray-600 text-sm">Globe Business Square, Unit No. 229,</p>
              <p className="text-gray-600 text-sm">Plot No. C8/2, MIDC Phase 1, Dombivli East,</p>
              <p className="text-gray-600 text-sm">Maharashtra – 421203</p>
            </div>

            {/* Send a message */}
            <div className="flex flex-col items-start gap-3 border-b-2 border-gray-200 pb-6">
              <div className="flex items-center gap-3 text-gray-700">
                <MailIcon className="w-6 h-6" />
                <h3 className="font-semibold text-lg">Send a message</h3>
              </div>
              <a
                href="mailto:info@yourdomain.com"
                className="text-blue-600 hover:underline text-sm"
              >
                arniinfrasolutions@gmail.com
              </a>
              <a
                href="mailto:sales@yourdomain.com"
                className="text-blue-600 hover:underline text-sm"
              >
                arniinfrasolutions@gmail.com
              </a>
            </div>

            {/* Call us directly */}
            <div className="flex flex-col items-start gap-3 border-b-2 border-gray-200 pb-6">
              <div className="flex items-center gap-3 text-gray-700">
                <PhoneCallIcon className="w-6 h-6" />
                <h3 className="font-semibold text-lg">Call us directly</h3>
              </div>
              <a
                href="tel:1-800-222-000"
                className="text-blue-600 hover:underline text-sm"
              >
                +91 8108108851
              </a>
              <a
                href="tel:1-800-222-000"
                className="text-blue-600 hover:underline text-sm"
              >
                +91 9892755754
              </a>{" "}
              {/* Assuming it's the same number based on image */}
            </div>
            {/* Send a message */}
            <div className="flex flex-col items-start gap-3 border-b-2 border-gray-200 pb-6">
              <div className="flex items-center gap-3 text-gray-700">
                <MailIcon className="w-6 h-6" />
                <h3 className="font-semibold text-lg">Business Hours</h3>
              </div>
              <p
                href="mailto:info@yourdomain.com"
                className="hover:underline text-sm"
              >
                Monday – Saturday: 10:00 AM – 7:00 PM
              </p>
              <p
                href="mailto:sales@yourdomain.com"
                className="hover:underline text-sm"
              >
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Contact Form Section */}
      <div className="w-full bg-white py-20 px-5 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative">
          {/* Left Image */}
          <div className="md:w-[60rem] md:h-[60rem] w-full h-full">
            <img
              src="https://images.pexels.com/photos/6588580/pexels-photo-6588580.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Furniture"
              className="md:w-[60rem] md:h-[30rem] w-full h-full object-cover"
            />
          </div>

          {/* Form Card */}
          <div className="bg-[#1b3250] text-white p-10 shadow-2xl md:w-[50%] md:absolute right-0 md:translate-x-10">
            <h2 className="text-4xl font-bold mb-8">Say hello!</h2>

            <form className="space-y-6">
              {/* Name */}
              <div className="relative">
                <FiUser className="absolute left-3 top-3 text-gray-300" />
                <input
                  type="text"
                  placeholder="Your name*"
                  className="input w-full pl-10 bg-transparent border-b border-gray-400 focus:border-white focus:outline-none rounded-none text-white"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <FiMail className="absolute left-3 top-3 text-gray-300" />
                <input
                  type="email"
                  placeholder="Your email address*"
                  className="input w-full pl-10 bg-transparent border-b border-gray-400 focus:border-white focus:outline-none rounded-none text-white"
                />
              </div>

              {/* Message */}
              <div className="relative">
                <FiMessageSquare className="absolute left-3 top-3 text-gray-300" />
                <textarea
                  placeholder="Your message"
                  className="textarea w-full pl-10 bg-transparent border-b border-gray-400 focus:border-white focus:outline-none rounded-none text-white"
                  rows={3}
                ></textarea>
              </div>

              {/* Button */}
              <button className="btn bg-white text-[#0B2B4C] border-none hover:bg-gray-200 px-8 mt-5">
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
