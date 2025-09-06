import React from "react";
import { FaTimes } from "react-icons/fa";

function MenuOverlay({ menuOpen, setMenuOpen }) {
  if (!menuOpen) return null; // Only render when open

  return (
    <div className="fixed inset-0 bg-black bg-opacity-95 flex flex-col items-center justify-center text-white z-40">
      {/* Close Button */}
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 p-3 rounded-full bg-gray-800 hover:bg-gray-700 shadow-lg"
      >
        <FaTimes size={20} />
      </button>

      {/* Menu Links */}
      <nav className="flex flex-col gap-8 text-3xl font-bold">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/work">Work</a>
        <a href="/latest">Latest</a>
      </nav>
    </div>
  );
}

export default MenuOverlay;
