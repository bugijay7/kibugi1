import React from "react";

// Import your images (replace with your actual image paths in /assets/collections/)
import graceWear from "../assets/collections/grace-wear.jpeg";
import hopeJewels from "../assets/collections/hope-jewels.jpeg";
import faithThreads from "../assets/collections/faith-threads.jpeg";
import lightChic from "../assets/collections/light-chic.jpeg";
import prayerBeads from "../assets/collections/prayer-beads.jpeg";
import divineDenim from "../assets/collections/divine-denim.jpeg";
import sacredSilks from "../assets/collections/sacred-silk.jpeg";
import virtueVogue from "../assets/collections/virtue-vogue.jpeg";
import worshipWear from "../assets/collections/worship-wear.jpeg";
import blessedBags from "../assets/collections/blessed-bags.jpeg";
import anointedAccessories from "../assets/collections/annointed-accessories.jpeg";
import covenantClassics from "../assets/collections/covenant-classics.jpeg";
import Impact from "../components/Home.jsx/Impact";

function Collections() {
  const collections = [
    {
      id: 1,
      title: "Grace Wear",
      description: "Elegant everyday outfits inspired by the grace humility and love .",
      image: graceWear,
    },
    {
      id: 2,
      title: "Hope Jewels",
      description: "Handcrafted jewelry that carries messages of faith and hope.",
      image: hopeJewels,
    },
    {
      id: 3,
      title: "Faith Threads",
      description: "Comfortable and stylish apparel with subtle scripture designs.",
      image: faithThreads,
    },
    {
      id: 4,
      title: "Light Chic",
      description: "Minimalist pieces that radiate the light within the wearer.",
      image: lightChic,
    },
    {
      id: 5,
      title: "Prayer Beads",
      description: "Symbolic minimalistic accessories for prayer and reflection.",
      image: prayerBeads,
    },
    {
      id: 6,
      title: "Divine Denim",
      description: "Casual yet purposeful denim wear with bold Christian accents.",
      image: divineDenim,
    },
    {
      id: 7,
      title: "Sacred Silks",
      description: "Luxurious silk designs that whisper elegance and devotion.",
      image: sacredSilks,
    },
    {
      id: 8,
      title: "Virtue Vogue",
      description: "Bold outspoken and intentional fashion with virtue at its heart.",
      image: virtueVogue,
    },
    {
      id: 9,
      title: "Worship Wear",
      description: "Designed for comfort and reverence in worship spaces.",
      image: worshipWear,
    },
    {
      id: 10,
      title: "Blessed Bags",
      description: "Stylish, functional bags with hidden faith-inspired details.",
      image: blessedBags,
    },
    {
      id: 11,
      title: "Anointed Accessories",
      description: "Finishing touches that inspire confidence and radiate peace.",
      image: anointedAccessories,
    },
    {
      id: 12,
      title: "Covenant Classics",
      description: "Timeless staples that stand the test of faith and fashion.",
      image: covenantClassics,
    },
  ];

  return (<>
 
    <div className="max-w-[1400px] mx-auto px-8 py-16 md:px-20 md:py-24">
      {/* Header */}
      <div className="text-left max-w-[1400px] mx-auto mb-16">
        <h1 className="lg:text-9xl md:text-5xl font-extrabold mb-6 uppercase">
          Neema by Malui Collections
        </h1>
        <p className="text-lg text-gray-200">
          Explore 12 inspired collections that celebrate faith, fashion, and
          purpose. Every piece is a reflection of light, grace, and creativity.
        </p>
      </div>

     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
  {collections.map((item) => (
    <div
      key={item.id}
      className=" hover:shadow-2xl transition-shadow overflow-visible flex flex-col"
    >
      {/* Image */}
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-80 object-cover hover:transform-3d hover:scale-105 transition-transform duration-300"
      />

      {/* Card Content */}
      <div className=" flex flex-col flex-grow mt-2">
        <h2 className="text-2xl font-bold mb-1 text-gray-900 dark:text-white">
          {item.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-1 flex">
          {item.description}
        </p>
        <button className=" text-white rounded-lg font-semibold underline hover:underline transition-colors self-start">
          Learn More
        </button>
      </div>
    </div>
  ))}
</div>
</div>
 <Impact />
 </>
  );
}

export default Collections;
