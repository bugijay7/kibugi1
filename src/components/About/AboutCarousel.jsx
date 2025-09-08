import React from "react";
import img1 from "../../assets/partners/img1.jpg";
import img2 from "../../assets/partners/img2.jpg";
import img3 from "../../assets/partners/img3.jpg";
import img4 from "../../assets/partners/img4.jpg";
import img5 from "../../assets/partners/img5.jpg";

function AboutCarousel() {
  return (
    <div className="bg-black text-white max-w-[1400px] mx-auto">
      {/* Carousel Section */}
      <div id="controls-carousel" className="relative w-full" data-carousel="static">
        {/* Carousel wrapper */}
        <div className="relative h-56 overflow-hidden rounded-lg md:h-[500px]">
          {/* Item 1 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
            <img
              src={img1}
              className="absolute block w-full h-full object-cover top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              alt="Neema community project"
            />
          </div>
          {/* Item 2 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={img2}
              className="absolute block w-full h-full object-cover top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              alt="Neema empowerment program"
            />
          </div>
          {/* Item 3 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={img3}
              className="absolute block w-full h-full object-cover top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              alt="Neema skills training"
            />
          </div>
          {/* Item 4 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={img4}
              className="absolute block w-full h-full object-cover top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              alt="Neema education initiative"
            />
          </div>
          {/* Item 5 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={img5}
              className="absolute block w-full h-full object-cover top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              alt="Neema community support"
            />
          </div>
        </div>

        {/* Slider controls */}
        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
            <svg
              className="w-4 h-4 text-white rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
            <svg
              className="w-4 h-4 text-white rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>

     {/* Accountability Section */}
<div className="px-8 py-20 md:px-24 md:py-32 bg-black text-white">
  <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
    {/* Left Heading */}
    <div>
      <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
        Our Commitment
      </p>
      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
        HOW WE <br /> STAY ACCOUNTABLE
      </h1>
    </div>

   <div className="space-y-6 text-lg leading-relaxed text-gray-200">
  <p>
    At <span className="text-amber-500 font-bold">Neema by Malui</span>, 
    accountability is the foundation of our work. We believe lasting impact comes 
    from trust, transparency, and stewardship.
  </p>
  <p>
    We use resources responsibly, measure success by lives transformed, and share 
    our progress openly. This culture of openness builds confidence and keeps us 
    moving forward in faith and purpose.
  </p>
  <p>
    Staying accountable means living the values we preach—humility, excellence, 
    and service—so every design and initiative carries integrity and hope.
  </p>
</div>

  </div>
</div>

    </div>
  );
}

export default AboutCarousel;
