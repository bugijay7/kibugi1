import React from "react";

function AboutFeature() {
  return (
    <div className="bg-black text-white px-8 py-20 md:px-24 md:py-32">
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Left Heading Section */}
        <div>
          <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
            About Neema
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            A STORY OF HOPE <br /> AND IMPACT
          </h1>
        </div>

        {/* Right Story Section */}
        <div className="space-y-6 text-lg leading-relaxed text-gray-200">
          <p>
            Neema began with a simple but powerful idea: to create opportunities
            where they didn’t exist. What started as a small initiative has
            grown into a movement that empowers individuals, families, and
            communities to dream bigger and live with dignity.
          </p>
          <p>
            Unlike organizations driven purely by profit, Neema was founded with
            the mission to bring lasting impact. From education programs to
            community development and skills training, every effort has been
            focused on tackling real social and economic challenges.
          </p>
          <p>
            Over the years, Neema has reached hundreds of people, transforming
            lives by providing resources, mentorship, and opportunities that
            create pathways to independence. Our role isn’t to take the
            spotlight, but to build foundations that allow communities to shine
            on their own.
          </p>
          <p>
            Today, Neema continues to be a creative partner for change—driven by
            the belief that small beginnings can grow into stories of hope,
            resilience, and transformation. No jargon, no fluff—just meaningful
            impact that’s impossible to ignore.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutFeature;
