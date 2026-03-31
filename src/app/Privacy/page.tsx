"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-white">

      <Navbar />

      <div className="max-w-screen-lg mx-auto px-4 py-12">

        {/* HEADER */}
        <div className="bg-white shadow-xl rounded-2xl p-8 mb-10 border border-gray-100">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Privacy Policy
          </h1>

          <p className="text-gray-600 leading-relaxed">
            RateCompares.Com values your privacy and strictly follows all data protection rules.
            We ensure that your personal information is handled securely and transparently.
          </p>
        </div>

        {/* INTRO */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8 border border-gray-100">
          <p className="text-gray-700 leading-relaxed mb-4">
            This policy explains how we collect, store, and use your data. By using our website,
            you agree to the terms outlined in this Privacy Policy.
          </p>

          <p className="text-gray-700 leading-relaxed">
            If you have any questions, feel free to contact our support team anytime.
          </p>
        </div>

        {/* SECTION */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8 border border-gray-100">
          <h2 className="text-xl font-semibold mb-3 text-gray-800 border-l-4 border-blue-600 pl-3">
            General Details about Reason for Storage
          </h2>

          <p className="text-gray-700 leading-relaxed">
            We collect data to continuously improve our services and provide a better user experience.
            Below are the types of data we collect:
          </p>
        </div>

        {/* CONTACT DETAILS */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8 border border-gray-100 hover:shadow-lg transition">
          <h3 className="text-lg font-semibold mb-2 text-gray-800 flex items-center gap-2">
            📩 Your Contact Details
          </h3>

          <p className="text-gray-700 leading-relaxed">
            When you contact us via the "Call Us" page, we collect your name and email address.
            This information is used solely to respond to your queries and improve our services.
          </p>
        </div>

        {/* INTERNET INFO */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8 border border-gray-100 hover:shadow-lg transition">
          <h3 className="text-lg font-semibold mb-2 text-gray-800 flex items-center gap-2">
            🌐 Internet Connection Information
          </h3>

          <p className="text-gray-700 leading-relaxed">
            We may collect your IP address, browser type, and visit time/date.
            This data does not personally identify you and is used only for performance improvement and error prevention.
          </p>
        </div>

        {/* DATA TRANSFER */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8 border border-gray-100 hover:shadow-lg transition">
          <h3 className="text-lg font-semibold mb-2 text-gray-800 flex items-center gap-2">
            🔐 Data Transfer
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
        </div>

       {/* CONTACT BOX */}
<div className="bg-blue-900/100 text-white rounded-2xl p-8 shadow-2xl mt-10">

  <h2 className="text-2xl font-bold mb-6 text-center">
    Get In Touch
  </h2>

  <div className="grid sm:grid-cols-3 gap-6">

    {/* ADDRESS */}
    <div className="bg-white text-blue-900/100 backdrop-blur-md rounded-xl p-5 text-center  transition">
      <div className="text-3xl mb-2">📍</div>
      <h3 className="font-semibold mb-1">Address</h3>
      <p className="text-sm text-blue-900/100">
        1 Richmond Street,<br />
        New Brunswick, NJ 08901, USA
      </p>
    </div>

    {/* PHONE */}
    <div className="bg-white text-blue-900/100backdrop-blur-md rounded-xl p-5 text-center  transition">
      <div className="text-3xl mb-2">📞</div>
      <h3 className="font-semibold mb-1">Phone</h3>
      <p className="text-sm text-blue-900/100">
        +1-732-690-5000
      </p>
    </div>

    {/* EMAIL */}
    <div className="bg-white text-blue-900/100 backdrop-blur-md rounded-xl p-5 text-center  transition">
      <div className="text-3xl mb-2">✉️</div>
      <h3 className="font-semibold mb-1">Email</h3>
      <p className="text-sm text-blue-900/100">
        info@ratecompares.com
      </p>
    </div>

  </div>
</div>

      </div>

      <Footer />

    </div>
  );
}