import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        {/* Section 1 */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Left: Social Media */}
          <div className="flex flex-col items-start gap-4">
            <h2 className="text-lg font-semibold mb-2">Connect With Us</h2>
            <div className="flex gap-6 text-2xl">
              <a href="#" className="hover:text-amber-500"><FaFacebookF /></a>
              <a href="#" className="hover:text-amber-500"><FaTwitter /></a>
              <a href="#" className="hover:text-amber-500"><FaInstagram /></a>
              <a href="#" className="hover:text-amber-500"><FaLinkedinIn /></a>
            </div>
          </div>

          {/* Right: Links */}
          <div className="flex gap-16">
            <ul className="space-y-2">
              <li className="whitespace-nowrap">
                <a href="/home" className="hover:text-amber-500 underline underline-offset-4">Home</a>
              </li>
              <li className="whitespace-nowrap">
                <a href="/about" className="hover:text-amber-500 underline underline-offset-4">About</a>
              </li>
              <li className="whitespace-nowrap">
                <a href="/collections" className="hover:text-amber-500 underline underline-offset-4">Collections</a>
              </li>
              <li className="whitespace-nowrap">
                <a href="/lookbook" className="hover:text-amber-500 underline underline-offset-4">Lookbook</a>
              </li>
              <li className="whitespace-nowrap">
                <a href="/blog" className="hover:text-amber-500 underline underline-offset-4">Blog</a>
              </li>
              <li className="whitespace-nowrap">
                <a href="/contact" className="hover:text-amber-500 underline underline-offset-4">Contact</a>
              </li>
            </ul>

            <ul className="space-y-2">
              <li className="whitespace-nowrap">
                <a href="/careers" className="hover:text-amber-500 underline underline-offset-4">Careers</a>
              </li>
              <li className="whitespace-nowrap">
                <a href="/faqs" className="hover:text-amber-500 underline underline-offset-4">FAQs</a>
              </li>
              <li className="whitespace-nowrap">
                <a href="/privacy-policy" className="hover:text-amber-500 underline underline-offset-4">Privacy Policy</a>
              </li>
              <li className="whitespace-nowrap">
                <a href="/terms" className="hover:text-amber-500 underline underline-offset-4">Terms of Use</a>
              </li>
              <li className="whitespace-nowrap">
                <a href="/support" className="hover:text-amber-500 underline underline-offset-4">Support</a>
              </li>
              <li className="whitespace-nowrap">
                <a href="/community" className="hover:text-amber-500 underline underline-offset-4">Community</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Section 2 */}
        <div className="text-center">
          <h1 className="lg:text-8xl md:text-5xl font-extrabold uppercase tracking-widest">
            NEEMA BY MALUI
          </h1>
          <p className="mt-4 text-gray-400 uppercase text-sm tracking-wider">
            A Christian-based Fashion House
          </p>
        </div>

        {/* Section 3 */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 text-sm text-gray-400">
          {/* Left Side */}
          <div>
            <p>© NEEMA by Malui</p>
            <p className="mt-2">Faith, Fashion & Purpose</p>
          </div>

          {/* Right Side */}
          <p className="md:max-w-md">
            Designed with grace and crafted with purpose — NEEMA by Malui blends
            timeless style with faith-driven creativity.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
