import React, { useState, useEffect } from "react";
import { FaSun, FaMoon, FaBars } from "react-icons/fa";
import MenuOverlay from "./MenuOverlay";

function Toggle() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Apply dark/light mode to <html> for DaisyUI
  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, [darkMode]);

  return (
    <>
      {/* Floating Toggle */}
      <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex flex-row gap-4 bg-amber-600 p-4">
          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-white"
          >
            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>

          {/* Menu Toggle */}
          <button
            onClick={() => setMenuOpen(true)}
            className="text-white"
          >
            <FaBars size={20} />
          </button>
        </div>
      </div>

      {/* Fullscreen Menu Component */}
      <MenuOverlay menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
}

export default Toggle;
