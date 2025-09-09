import React from "react";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

function MenuOverlay({ menuOpen, setMenuOpen }) {
  if (!menuOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center text-white z-50"
    >
      {/* Close Button */}
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
      >
        <FaTimes size={22} />
      </button>

      {/* Menu Container */}
      <div className="flex flex-col lg:flex-row gap-24 lg:gap-40 items-center text-center lg:text-left">
        {/* Left Column - Core Pages */}
        <nav className="flex flex-col gap-10 text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight">
          <a href="/" className="hover:text-amber-500 transition-colors">Grace Malui</a>
          <a href="/about" className="hover:text-amber-500 transition-colors">Our Story</a>
          <a href="/collections" className="hover:text-amber-500 transition-colors">Collections</a>
          <a href="/faith-style" className="hover:text-amber-500 transition-colors">Faith & Style</a>
        </nav>

        {/* Right Column - Extra Links */}
        <div className="flex gap-16 text-base md:text-lg">
          <ul className="space-y-3 text-gray-400">
            <li><a href="/lookbook" className="hover:text-amber-500 hover:underline underline-offset-4">Lookbook</a></li>
            <li><a href="/journal" className="hover:text-amber-500 hover:underline underline-offset-4">Journal</a></li>
            <li><a href="/events" className="hover:text-amber-500 hover:underline underline-offset-4">Events</a></li>
            <li><a href="/contact" className="hover:text-amber-500 hover:underline underline-offset-4">Contact</a></li>
          </ul>

          <ul className="space-y-3 text-gray-400">
            <li><a href="/values" className="hover:text-amber-500 hover:underline underline-offset-4">Our Values</a></li>
            <li><a href="/faith" className="hover:text-amber-500 hover:underline underline-offset-4">Faith Statement</a></li>
            <li><a href="/privacy-policy" className="hover:text-amber-500 hover:underline underline-offset-4">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-amber-500 hover:underline underline-offset-4">Terms of Use</a></li>
            <li><a href="/support" className="hover:text-amber-500 hover:underline underline-offset-4">Support</a></li>
            <li><a href="/community" className="hover:text-amber-500 hover:underline underline-offset-4">Community</a></li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default MenuOverlay;
