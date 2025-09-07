import React from "react";

function Current() {
  return (
    <div className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-8xl font-extrabold mb-10 uppercase">
          Who we’re <br /> working with <br /> currently.
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 border-t border-gray-700 pt-10">
          {/* Card 1 */}
          <div className="border-r border-gray-700 pr-6">
            <h3 className="text-2xl md:text-4xl font-extrabold mb-4">
              LOCAL CHURCHES
            </h3>
            <p className="text-gray-300 text-sm">
              Partnering with ministries to design modest, faith-inspired
              collections for choirs, conferences, and special events.
            </p>
          </div>

          {/* Card 2 */}
          <div className="border-r border-gray-700 pr-6">
            <h3 className="text-3xl md:text-4xl font-extrabold mb-24">
              EVENTS & COLLECTIONS
            </h3>
            <p className="text-gray-300">
              Creating unique seasonal collections and event-based pieces that
              celebrate faith, elegance, and cultural identity.
            </p>
          </div>

          {/* Card 3 */}
          <div className="border-r border-gray-700 pr-6">
            <h3 className="text-3xl md:text-4xl font-extrabold mb-24">
              COMMUNITY IMPACT
            </h3>
            <p className="text-gray-300 text-sm">
              Empowering local artisans and youth by providing opportunities
              within fashion production — weaving faith and creativity into
              every design.
            </p>
          </div>

          {/* Card 4 */}
          <div>
            <h3 className="text-3xl md:text-4xl font-extrabold mb-24">
              SCALABLE VISION
            </h3>
            <p className="text-gray-300">
              Building a brand that grows with purpose — that inspires confidence and
              faith in every wearer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Current;
