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
          Partners in <br /> Faith, Fashion <br /> & Community
        </h1>
        <p className="text-lg text-gray-300 mb-8 text-left">
          At <span className="text-amber-500 font-bold">NEEMA by Malui</span>,
          we partner with churches, artisans, designers, and communities to
          create faith-inspired fashion that uplifts, empowers, and makes a
          lasting impact.
        </p>
        <button className="btn bg-gray-200 text-black p-4 rounded-sm">
          View Collections
        </button>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center">
        {/* Card 1 */}
        <div className="card bg-base-100 w-140 shadow-sm">
          <figure>
            <img src={partner1} alt="Churches" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-left gap-2">
            <h2 className="card-title py-8">Churches</h2>
            <p>
              Collaborating with local and global churches to design modest,
              faith-rooted collections for special events and everyday wear.
            </p>
            <div className="card-actions pt-10">
              <button className="btn btn-outline border-2 p-3">Learn More</button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card bg-base-100 w-140 shadow-sm">
          <figure>
            <img src={partner2} alt="Artisans" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-left gap-2">
            <h2 className="card-title py-8">Artisans</h2>
            <p>
              Working hand-in-hand with local tailors and artisans to craft
              unique, high-quality garments that celebrate creativity and faith.
            </p>
            <div className="card-actions pt-10">
              <button className="btn btn-outline border-2 p-3">Learn More</button>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card bg-base-100 w-140 shadow-sm">
          <figure>
            <img src={partner3} alt="Designers" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-left">
            <h2 className="card-title py-8">Designers</h2>
            <p>
              Partnering with Christian and ethical designers to create pieces
              that merge faith, elegance, and timeless fashion.
            </p>
            <div className="card-actions pt-10">
              <button className="btn btn-outline border-2 p-3">Learn More</button>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="card bg-base-100 w-140 shadow-sm">
          <figure>
            <img src={partner4} alt="Communities" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-left">
            <h2 className="card-title py-8">Communities</h2>
            <p>
              Empowering women and youth in communities by creating sustainable
              opportunities through faith-led fashion initiatives.
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
