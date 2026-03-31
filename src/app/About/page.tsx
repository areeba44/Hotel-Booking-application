"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-white">

      <Navbar />

      <div className="max-w-screen-lg mx-auto px-4 py-12">

        {/* HEADER */}
        <div className="bg-white shadow-xl rounded-2xl p-8 mb-10 border border-gray-100">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            About Us
          </h1>
          <p className="text-gray-600">
            Learn more about RateCompares and our mission to simplify hotel booking worldwide.
          </p>
        </div>

        {/* BRIEF REVIEW */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8 border border-gray-100">
          <h2 className="text-xl font-semibold mb-3 text-gray-800">
            Brief Review
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Rate Compares was established in 2016 with a vision to provide travelers easy access to the best hotels
            around the globe in a single click. We offer one of the largest selections of low-priced hotels for backpackers
            and corporate travelers.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Users can compare prices from over 200,000 hotels worldwide and find the best deals for their stay.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Our platform allows travelers to compare ratings, deals, price ranges, and facilities easily.
          </p>
        </div>

        {/* FEATURES */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8 border border-gray-100">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            What You Can Do Here
          </h2>

          <ul className="space-y-3 text-gray-700">
            <li>✔ Compare hotel prices worldwide</li>
            <li>✔ Explore hotels near tourist attractions</li>
            <li>✔ Check facilities, ratings & reviews</li>
            <li>✔ Find hotels near airports & shopping hubs</li>
            <li>✔ Get best deals in real-time</li>
          </ul>
        </div>

        {/* TAGLINE */}
        <div className="bg-blue-900 text-white rounded-2xl p-8 shadow-xl mb-10 text-center">
          <h2 className="text-2xl font-bold mb-3">
            You plan it, We cover it!
          </h2>
          <p className="text-gray-200">
            Now pack your bags — your journey starts with RateCompares.
          </p>
        </div>

        

      </div>

      <Footer />

    </div>
  );
}