"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaStar } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div>
      <Navbar />

      {/* FULL WIDTH WRAPPER */}
      <div className="w-full bg-gray-50 flex flex-col items-center">

        {/* HERO SECTION */}
        <section className="relative w-full h-[400px] md:h-[400px] flex items-center justify-center overflow-hidden">
          
          <img
            src="/blogimage.jpg"
            alt="Travel"
            className="absolute inset-0 w-full h-full object-cover "
          />


       <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-6 md:px-20 text-white">
            <h1 className="text-4xl font-bold text-white">
              Discover <span className="text-yellow-400">RateCompares</span> 
            </h1>

            <p className="text-gray-200 text-lg md:text-xl mb-4">
              Helping travelers worldwide find the best hotels at the best prices.
              
            </p>

        
          </div>
        </section>

      </div>

      {/* SECOND SECTION FULL WIDTH */}
      <div className="w-full bg-gray-50 flex justify-center">
        
        {/* CENTER CONTENT */}
        <div className="max-w-screen-2xl mx-auto px-4 py-12 space-y-12">

          {/* WHO WE ARE */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Who We Are
            </h2>

            <p className="text-gray-700 leading-relaxed mb-3">
              RateCompares was founded in 2016 to simplify hotel booking for travelers.
              We provide price comparisons for thousands of hotels worldwide.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Our platform lets you compare prices, ratings, and facilities
              to make the best choice for your stay.
            </p>
          </section>

          {/* DIVIDER */}
          <hr />

          {/* FEATURES */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* Compare Hotels */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Compare Hotels
              </h3>

              <p className="text-gray-700 mb-2 flex items-center gap-2">
                <FaStar className="text-black text-[12px]" />
                Compare hotel prices worldwide with one click
              </p>

              <p className="text-gray-700 flex items-center gap-2">
                <FaStar className="text-black text-[12px]" />
                Find best deals instantly
              </p>
            </div>

            {/* Explore & Plan */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Explore & Plan
              </h3>

              <p className="text-gray-700 mb-2 flex items-center gap-2">
                <FaStar className="text-black text-[12px]" />
                Hotels near tourist attractions & airports
              </p>

              <p className="text-gray-700 flex items-center gap-2">
                <FaStar className="text-black text-[12px]" />
                Check reviews, ratings, and facilities
              </p>
            </div>

          </section>

        </div>
      </div>

      {/* TAGLINE FULL WIDTH */}
      <section className="w-full py-10">
        
        <div className="max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-42">
          
          <div className="bg-blue-950 text-white rounded-md p-9 shadow-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              You Plan It, We Cover It!
            </h2>

            <p className="text-lg md:text-xl text-gray-200">
              Your journey starts with RateCompares — travel smarter, faster, and easier.
            </p>
          </div>

        </div>

      </section>

      <Footer />
    </div>
  );
}