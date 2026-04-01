"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaStar } from "react-icons/fa"; // ✅ Import FaStar

export default function AboutPage() {
  return (
    <div className="w-full bg-gray-50 flex flex-col items-center">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative w-full h-[400px] md:h-[450px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <img
          src="about.avif"
          alt="Travel"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-opacity-30"></div>

        <div className="relative z-10 text-center max-w-3xl px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Discover RateCompares
          </h1>
          <p className="text-gray-200 text-lg md:text-xl mb-4">
            Helping travelers worldwide find the best hotels at the best prices. Compare, plan, and book with ease.
          </p>
          <button className="px-6 py-3 bg-blue-900 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="max-w-6xl w-full px-4  space-y-8 relative z-10">
        <div className="bg-white  p-10  hover:shadow-3xl transition">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center md:text-left">
            Who We Are
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            RateCompares was founded in 2016 to simplify hotel booking for travelers. We provide price comparisons for thousands of hotels worldwide.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our platform lets you compare prices, ratings, and facilities to make the best choice for your stay.
          </p>
        </div>
      </section>

      <div className="w-full bg-gray-50 flex flex-col items-center">
        {/* PARENT CONTAINER */}
        <div className="max-w-6xl w-full px-4  space-y-16">

          {/* FEATURES GRID */}
          <section className="w-full ">
            {/* Compare Hotels */}
            <div className="bg-white  p-8 transition transform hover:-translate-y-2">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Compare Hotels</h3>
              <p className="text-gray-700 mb-1 flex items-center gap-2">
                <FaStar className="text-black text-[12px]" /> Compare hotel prices worldwide with one click
              </p>
              <p className="text-gray-700 flex items-center gap-2">
                <FaStar className="text-black text-[12px]" /> Find best deals instantly
              </p>
            </div>

            {/* Explore & Plan */}
            <div className="bg-white p-8 hover:shadow-3xl transition transform hover:-translate-y-2">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Explore & Plan</h3>
              <p className="text-gray-700 mb-1 flex items-center gap-2">
                <FaStar className="text-black text-[12px]" /> Hotels near tourist attractions & airports
              </p>
              <p className="text-gray-700 flex items-center gap-2">
                <FaStar className="text-black text-[12px]" /> Check reviews, ratings, and facilities
              </p>
            </div>
          </section>

        </div>
      </div>

      {/* TAGLINE SECTION */}
      <section className="w-full px-60 py-16">
        <div className="bg-blue-900/100 text-white rounded-3xl p-12 shadow-2xl text-center transform hover:scale-105 transition">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">You Plan It, We Cover It!</h2>
          <p className="text-lg md:text-xl text-gray-200">
            Your journey starts with RateCompares — travel smarter, faster, and easier.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}