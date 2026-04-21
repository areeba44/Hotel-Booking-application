"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaEnvelope, FaGlobe, FaLock } from "react-icons/fa";

export default function PrivacyPolicy() {
  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-white">

      <Navbar />

      {/* HERO SECTION (FULL WIDTH) */}
      <div className="relative w-full h-[400px] md:h-[400px] flex items-center justify-center overflow-hidden">
        
        <img
           src="/blogimage.jpg"
          alt="Privacy Policy"
          className="absolute inset-0 w-full h-full "
        />

      
<div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-6 md:px-20 text-white">
          <h1 className="text-4xl font-bold mb-4">
            Privacy <span className="text-yellow-400">Policy</span> 
          </h1>
          <p className="text-sm md:text-lg leading-relaxed">
            RateCompares.Com values your privacy and strictly follows all data protection rules.
            
          </p>
        </div>
      </div>

      {/* MAIN CONTENT (CENTERED) */}
      <div className="w-full">
        <div className="max-w-screen-2xl mx-auto px-30 py-12 space-y-10">

          {/* INTRO */}
          <section>
            <p className="text-gray-700 leading-relaxed mb-4">
              This policy explains how we collect, store, and use your data. By using our website,
              you agree to the terms outlined in this Privacy Policy.
            </p>

            <p className="text-gray-700 leading-relaxed">
              If you have any questions, feel free to contact our support team anytime.
            </p>
          </section>

          <hr />

          {/* SECTION */}
          <section>
            <h2 className="text-xl font-semibold mb-3 text-gray-800 border-l-4 border-blue-600 pl-3">
              General Details about Reason for Storage
            </h2>

            <p className="text-gray-700 leading-relaxed">
              We collect data to continuously improve our services and provide a better user experience.
              Below are the types of data we collect:
            </p>
          </section>

          <hr />

          {/* CONTACT DETAILS */}
          <section className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
              <FaEnvelope className="text-black" />
              Your Contact Details
            </h3>

            <p className="text-gray-700 leading-relaxed">
              When you contact us via the "Call Us" page, we collect your name and email address.
              This information is used solely to respond to your queries and improve our services.
            </p>
          </section>

          <hr />

          {/* INTERNET INFO */}
          <section className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
              <FaGlobe className="text-black" />
              Internet Connection Information
            </h3>

            <p className="text-gray-700 leading-relaxed">
              We may collect your IP address, browser type, and visit time/date.
              This data does not personally identify you and is used only for performance improvement and error prevention.
            </p>
          </section>

          <hr />

          {/* DATA TRANSFER */}
          <section className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
              <FaLock className="text-black" />
              Data Transfer
            </h3>

            <p className="text-gray-700 leading-relaxed mb-3">
              Your data may be shared with legal authorities when required by law,
              including compliance with judicial or administrative orders.
            </p>

            <p className="text-gray-700 leading-relaxed mb-3">
              We may also share data to prevent illegal activities or to protect the safety,
              rights, and property of users and our platform.
            </p>

            <p className="text-gray-700 leading-relaxed">
              In case of mergers, acquisitions, or business restructuring,
              your data may be transferred accordingly.
            </p>
          </section>

        </div>
      </div>

      <Footer />
    </div>
  );
}