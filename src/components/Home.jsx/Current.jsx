import React from "react";

function Current() {
  return (
    <div className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-8xl font-extrabold mb-10 uppercase">
          Who we’re <br></br> working with <br></br>currently.
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 border-t border-gray-700 pt-10">
          {/* Card 1 */}
          <div className="border-r border-gray-700 pr-6">
            <h3 className="text-2xl md:text-4xl font-extrabold mb-4">
              APOSTOLIC FAITH CHURCH KIAMBAA
            </h3>
            
          </div>

          {/* Card 2 */}
          <div className="border-r border-gray-700 pr-6">
            <h3 className="text-3xl md:text-4xl font-extrabold mb-24">
              EVENTS & SERMONS
            </h3>
            <p className="text-gray-300">
              Creating an easy-to-manage system for sharing upcoming events,
              livestreams, and sermon archives with church members.
            </p>
          </div>

          {/* Card 3 */}
          <div className="border-r border-gray-700 pr-6">
            <h3 className="text-3xl md:text-4xl font-extrabold mb-24">
              LOCAL <br></br> IMPACT
            </h3>
            <p className="text-gray-300 text-sm">
              Helping Apostolic Faith Church reach more people in Kiamba through
              digital tools that strengthen <br></br>community engagement and outreach.
            </p>
          </div>

          {/* Card 4 */}
          <div>
            <h3 className="text-3xl md:text-4xl font-extrabold mb-24">
              SCALABLE PLATFORM
            </h3>
            <p className="text-gray-300">
              Designing a modern, scalable website that can grow with the
              church’s vision—supporting more content, members, <br></br>and digital
              features over time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Current;
