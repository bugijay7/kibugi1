import React, { useState, useEffect } from "react";

// Import your images
import img1 from "../../assets/hero1.jpeg";
import img2 from "../../assets/hero2.jpeg";
import img3 from "../../assets/hero3.jpeg";
import img4 from "../../assets/hero4.jpeg";
import img5 from "../../assets/hero5.jpeg";

function Hero() {
  const images = [img1, img2, img3, img4, img5];
  const [current, setCurrent] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="max-w-[1400px] mx-auto flex flex-col items-start text-left px-4 py-16">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl lg:text-9xl font-extrabold mb-6 text-gray-200">
        NEEMA BY<br></br> MALUI 
       
      </h1>

      {/* Paragraph */}
      <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
        Celebrating style with purpose. At NEEMA by Malui, we blend timeless elegance with
        Christian values, crafting clothing that inspires confidence, grace, and devotion.
      </p>

      {/* Carousel */}
      <div className="relative w-full max-w-[300px] h-74 md:h-96 overflow-hidden rounded-xl shadow-lg">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={src}
              alt={`NEEMA by Malui Slide ${index + 1}`}
              className="w-full h-auto object-cover"
            />
            {/* Cross Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <svg
                className="w-24 h-24 md:w-32 md:h-32 text-white/20"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
          </div>
        ))}

        {/* Indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full ${
                current === index ? "bg-amber-500" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>

        {/* Controls */}
        <button
          onClick={() =>
            setCurrent((prev) => (prev - 1 + images.length) % images.length)
          }
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/50">
            <svg
              className="w-4 h-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
          </span>
        </button>

        <button
          onClick={() => setCurrent((prev) => (prev + 1) % images.length)}
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/50">
            <svg
              className="w-4 h-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </span>
        </button>
      </div>
    </section>
  );
}

export default Hero;
