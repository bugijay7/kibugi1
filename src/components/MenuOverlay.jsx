import React from "react";
import { FaTimes } from "react-icons/fa";

function MenuOverlay({ menuOpen, setMenuOpen }) {
  if (!menuOpen) return null; // Only render when open

  return (
    <div className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center text-white z-40">
      {/* Close Button */}
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 p-3 rounded-full bg-gray-800 hover:bg-gray-700 shadow-lg"
      >
        <FaTimes size={20} />
      </button>

      {/* Menu Links Container */}
      <div className="flex gap-32">
        {/* Left Column */}
        <nav className="flex flex-col gap-8 text-9xl font-bold uppercase">
          <a href="/" className="border-b border-white pb-2">Home</a>
          <a href="/about" className="border-b border-white pb-2">About</a>
          <a href="/work" className="border-b border-white pb-2">Work</a>
          <a href="/latest" className="border-b border-white pb-2">Latest</a>
        </nav>

        {/* Right Column */}
        <div className="flex gap-16 text-xl">
          <ul className="space-y-2">
            <li className="whitespace-nowrap">
              <a href="/home" className="hover:text-amber-500 ">Home</a>
            </li>
            <li className="whitespace-nowrap">
              <a href="/about" className="hover:text-amber-500 ">About</a>
            </li>
            <li className="whitespace-nowrap">
              <a href="/services" className="hover:text-amber-500 ">Services</a>
            </li>
            <li className="whitespace-nowrap">
              <a href="/portfolio" className="hover:text-amber-500 ">Portfolio</a>
            </li>
            <li className="whitespace-nowrap">
              <a href="/blog" className="hover:text-amber-500 ">Blog</a>
            </li>
            <li className="whitespace-nowrap">
              <a href="/contact" className="hover:text-amber-500 ">Contact</a>
            </li>
          </ul>

          <ul className="space-y-2">
            <li className="whitespace-nowrap">
              <a href="/careers" className="hover:text-amber-500 ">Careers</a>
            </li>
            <li className="whitespace-nowrap">
              <a href="/faqs" className="hover:text-amber-500 ">FAQs</a>
            </li>
            <li className="whitespace-nowrap">
              <a href="/privacy-policy" className="hover:text-amber-500 ">Privacy Policy</a>
            </li>
            <li className="whitespace-nowrap">
              <a href="/terms" className="hover:text-amber-500 ">Terms of Use</a>
            </li>
            <li className="whitespace-nowrap">
              <a href="/support" className="hover:text-amber-500 ">Support</a>
            </li>
            <li className="whitespace-nowrap">
              <a href="/community" className="hover:text-amber-500 ">Community</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MenuOverlay;
