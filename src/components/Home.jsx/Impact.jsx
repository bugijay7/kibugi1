import React from "react";

function Impact() {
  return (
    <div className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl font-semibold mb-10 text-gray-200">
          Celebrating faith-inspired fashion and impact at NEEMA by Malui
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 border-t border-gray-700 pt-10">
          {/* Card 1 */}
          <div className="border-r border-gray-700 pr-6">
            <h3 className="text-3xl md:text-4xl font-extrabold mb-4">
              50+ COLLECTIONS
            </h3>
            <p className="text-gray-300">
              From elegant dresses to modern Christian-inspired apparel, NEEMA by Malui has launched over 50 curated collections celebrated worldwide.
            </p>
          </div>

          {/* Card 2 */}
          <div className="border-r border-gray-700 pr-6">
            <h3 className="text-3xl md:text-4xl font-extrabold mb-4">
              100K+ CLOTHES SOLD
            </h3>
            <p className="text-gray-300">
              Our commitment to style, quality, and faith-driven design has led to over 100,000 garments sold across multiple regions, inspiring confidence and grace.
            </p>
          </div>

          {/* Card 3 */}
          <div className="border-r border-gray-700 pr-6">
            <h3 className="text-3xl md:text-4xl font-extrabold mb-4">
              20+ FAITH PARTNERS
            </h3>
            <p className="text-gray-300 text-sm">
              Collaborating with churches, Christian organizations, and local artisans, NEEMA by Malui creates meaningful fashion experiences rooted in faith and community.
            </p>
          </div>

          {/* Card 4 */}
          <div>
            <h3 className="text-3xl md:text-4xl font-extrabold mb-4">
              98% CUSTOMER SATISFACTION
            </h3>
            <p className="text-gray-300">
              With a focus on quality, ethics, and heartfelt service, 98% of our customers return to experience new collections that reflect elegance and faith.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Impact;
