import React from "react";
import aboutImg from "../../assets/partners/about-hero.jpg"; 

function AboutHero() {
  return (
    <section className="bg-black text-gray-200 py-20 px-6">
      <div className="max-w-[1400px] mx-auto  items-center">
        
        {/* Left Side - Text */}
        <div>
          <h1 className="lg:text-9xl md:text-6xl font-extrabold mb-6 uppercase max-w-[1400px]">
            A mission driven guide to your faith-inspired fashion.
          </h1>
          <p className="text-lg leading-relaxed mb-6 ">
            <span className="font-bold text-amber-500">NEEMA by Malui</span> is a 
            Christian fashion house rooted in faith, elegance, and community. 
            We exist to create garments that tell stories of grace and 
            empowerment while honoring modesty and style. Our mission is to 
            partner with churches, artisans, designers, and communities to 
            weave faith into every piece, uplifting hearts and inspiring 
            confidence.
          </p>
          <p className="text-lg leading-relaxed mb-10">
            More than a brand, NEEMA is a movement of creativity, faith, and 
            purpose—where fashion becomes a vessel of hope and beauty.
          </p>
           <div className="flex justify-center">
          <img
            src={aboutImg}
            alt="About NEEMA by Malui"
            className=" w-full h-[400px] object-cover"
          />
        </div>
        </div>

    
       
      </div>
    </section>
  );
}

export default AboutHero;
