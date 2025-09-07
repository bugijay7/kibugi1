import React from "react";
// Example: uncomment and replace with your real image paths
// import heroImg from "../../assets/hero-hero.jpg";
// import heroImg2 from "../../assets/hero-2.jpg";

/**
 * Banner component for Neema by Malui
 * - Background: black
 * - Text: gray-200
 * - Accent: amber-500 for CTAs / highlights
 *
 * Props (optional)
 * - image: string URL for right-side hero image
 * - scripture: string to show under the subtitle
 * - onPrimary: function for primary CTA click
 * - onSecondary: function for secondary CTA click
 */
function Banner({
  image = null,
  scripture = "Clothe yourselves with compassion, kindness, humility, gentleness and patience. — Colossians 3:12",
  onPrimary,
  onSecondary,
}) {
  return (
    <section
      aria-label="Neema by Malui hero"
      className="bg-black text-gray-200"
    >
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32 flex flex-col lg:flex-row items-center gap-12">
        {/* Left: Headline + copy */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6">
            Neema by Malui
            <br />
            <span className="text-amber-500">Clothed in Grace</span>
            <br />
            Faith-inspired fashion for every season.
          </h1>

          <p className="text-base md:text-lg text-gray-300 max-w-xl mb-6">
            We design elegant, modest apparel rooted in Christian values — crafted
            by local artisans, inspired by scripture, and made to last. Dress with
            purpose. Wear your faith.
          </p>

          {/* Scripture / small line */}
          <blockquote className="italic text-sm text-gray-400 mb-8 max-w-lg">
            <span className="text-amber-500 mr-2">“</span>
            {scripture}
            <span className="text-amber-500">”</span>
          </blockquote>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onPrimary}
              className="inline-flex items-center justify-center px-6 py-3 bg-amber-500 text-black font-semibold rounded-md shadow hover:bg-amber-400 transition"
              aria-label="Shop Neema Collections"
            >
              Shop Collections
            </button>

            <button
              onClick={onSecondary}
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-700 text-gray-200 rounded-md hover:bg-white/5 transition"
              aria-label="Learn more about Neema"
            >
              Learn Our Story
            </button>
          </div>

          {/* Small trust badges / features */}
          <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              Ethical craftsmanship
            </div>
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              Faith-forward designs
            </div>
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              Locally made
            </div>
          </div>
        </div>

        {/* Right: Visual (image or placeholder) */}
        <div className="w-full lg:w-1/2 relative flex items-center justify-center">
          {/* hero image (if you supply one) */}
          {image ? (
            <div className="w-full h-64 md:h-96 lg:h-[420px] rounded-xl overflow-hidden shadow-lg">
              <img
                src={image}
                alt="Neema hero"
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            /* Placeholder box */
            <div className="w-full h-64 md:h-96 lg:h-[420px] rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-gray-900 to-black border border-gray-800 flex items-center justify-center">
              <div className="text-center px-6">
                <div className="text-2xl md:text-3xl font-semibold text-gray-300 mb-2">
                  Elegant. Modest. Meaningful.
                </div>
                <p className="text-sm text-gray-500 max-w-xs">
                  Add a striking hero image here (studio portrait, model in collection,
                  or product flatlay).
                </p>
              </div>
            </div>
          )}

          {/* Subtle cross watermark */}
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute opacity-10 w-24 h-24 md:w-32 md:h-32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path d="M12 2v20M2 12h20" stroke="currentColor" />
          </svg>
        </div>
      </div>

      {/* Optional secondary band (small) */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
          <div>Free shipping on orders over $150 • Ethical & sustainable</div>
          <div className="mt-2 sm:mt-0">Made with faith in Kenya • © Neema by Malui</div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
