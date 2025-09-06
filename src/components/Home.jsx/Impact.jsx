import React from "react";

function Impact() {
  return (
    <div className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl font-semibold mb-10">
          Achieving measurable impact with our global partners at Yohan Labs...
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 border-t border-gray-700 pt-10">
          {/* Card 1 */}
          <div className="border-r border-gray-700 pr-6">
            <h3 className="text-3xl md:text-4xl font-extrabold mb-4">
              100+ PROJECTS
            </h3>
            
          </div>

          {/* Card 2 */}
          <div className="border-r border-gray-700 pr-6">
  <h3 className="text-3xl md:text-4xl font-extrabold mb-24">
    500K+ LINES OF CODE
  </h3>
  <p className="text-gray-300">
    From web platforms to interactive experiences, Yohan Labs has written
    over half a million lines of clean, scalable code powering businesses
    around the world.
  </p>
</div>


          {/* Card 3 */}
          <div className="border-r border-gray-700 pr-6">
  <h3 className="text-3xl md:text-4xl font-extrabold mb-24">
    30+ LOCAL PARTNERS
  </h3>
  <p className="text-gray-300">
    Proudly rooted in Kenya, Yohan Labs collaborates with local businesses,
    startups, and organizations to create digital solutions that drive
    community growth and innovation.
  </p>
</div>


          {/* Card 4 */}
          <div>
            <h3 className="text-3xl md:text-4xl font-extrabold mb-24">
              95% CLIENT RETENTION
            </h3>
            <p className="text-gray-300">
              With a strong focus on design, innovation, and collaboration, 95%
              of our clients choose to return for new projects with Yohan Labs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Impact;
