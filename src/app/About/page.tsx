// pages/About.tsx
"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-64 bg-gray-200 flex items-center justify-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">
          About Our Hotel
        </h1>
      </div>

      {/* About Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-20 py-12 flex flex-col lg:flex-row gap-10 flex-grow">
        
        {/* Image */}
        <div className="lg:w-1/2 h-[300px] relative">
          <Image
            src="/hotel.png"
            alt="Hotel"
            fill
            className="rounded-2xl object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Welcome to Our Hotel
          </h2>

          <p className="text-gray-600 mb-4">
            Our hotel offers a luxurious experience with modern amenities,
            exceptional service, and a comfortable stay. Whether you are
            traveling for business or leisure, we ensure your stay is memorable.
          </p>

          <p className="text-gray-600 mb-4">
            We pride ourselves on providing a welcoming environment, world-class
            facilities, and attention to every detail. Explore our rooms,
            dining options, and special packages to make your visit unforgettable.
          </p>

          <p className="text-gray-600">
            Come and experience the perfect blend of comfort, style, and
            hospitality at our hotel.
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
