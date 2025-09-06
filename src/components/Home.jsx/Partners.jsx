import React from "react";

// Import local images
import partner1 from "../../assets/partners/hero2.png";
import partner2 from "../../assets/partners/hero3.png";
import partner3 from "../../assets/partners/hero4.png";
import partner4 from "../../assets/partners/hero5.png";

function Partners() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Top Section */}
      <div className="text-left mb-16">
        <h1 className="lg:text-8xl md:text-5xl font-extrabold mb-6 uppercase">
          Partners in <br /> Meaningful <br /> Change
        </h1>
        <p className="text-lg text-gray-300 mb-8 text-left">
          At Yohan Labs, we collaborate with forward-thinking businesses and
          organizations to build digital solutions that inspire innovation,
          empower communities, and create lasting impact.
        </p>
        <button className="btn bg-gray-200 text-black p-4 rounded-sm">
          Our Work
        </button>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center">
        {/* Card 1 */}
        <div className="card bg-base-100 w-140 shadow-sm">
          <figure>
            <img src={partner1} alt="Tech Startups" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-left gap-2">
            <h2 className="card-title py-8">Tech Startups</h2>
            <p>
              Supporting Kenyan startups with scalable and user-friendly
              platforms that accelerate growth.
            </p>
            <div className="card-actions pt-10">
              <button className="btn btn-outline border-2 p-3">Learn More</button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card bg-base-100 w-140 shadow-sm">
          <figure>
            <img src={partner2} alt="Local Enterprises" className="rounded-xl" />
          </figure>
          <div className="card-body items-center tex-left gap-2">
            <h2 className="card-title py-8">Local Enterprises</h2>
            <p>
              Helping small and medium businesses in Kenya digitize and expand
             reach with custom web solutions.
            </p>
            <div className="card-actions pt-10">
              <button className="btn btn-outline border-2 p-3">Learn More</button>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card bg-base-100 w-140 shadow-sm">
          <figure>
            <img src={partner3} alt="Nonprofits" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-left">
            <h2 className="card-title py-8">Nonprofits</h2>
            <p>
              Partnering with NGOs to create platforms that raise awareness,
              engage communities, and amplify impact.
            </p>
            <div className="card-actions pt-10">
              <button className="btn btn-outline border-2 p-3">Learn More</button>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="card bg-base-100 w-140 shadow-sm">
          <figure>
            <img src={partner4} alt="Creative Brands" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-left">
            <h2 className="card-title py-8">Creative Brands</h2>
            <p>
              Working with local creatives to design stunning digital
              experiences that tell their unique stories.
            </p>
            <div className="card-actions pt-10">
              <button className="btn btn-outline border-2 p-3">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partners;
