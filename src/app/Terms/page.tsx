"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaStar } from "react-icons/fa"; // ✅ Import FaStar

export default function TermsPage() {
  const sections = [
    {
      title: "Our Terms and Conditions",
      color: "bg-blue-500",    
      text: `RateCompares is a hotel search platform that helps users explore and compare accommodations,
      travel locations, and experiences. By using this website, you confirm that you have read and accepted
      these terms, including our privacy policy and cookie usage.`,
    },
    {
      title: "Services and Contract",
      color: "bg-green-500",
      text: `RateCompares allows users to compare third-party services but does not provide those services directly.
      Any agreement is strictly between the user and the external service provider.`,
    },
    {
      title: "Privacy and Email Advertisements",
      color: "bg-purple-500",
      text: `We collect and process user data only when necessary and with proper consent. Users can unsubscribe from promotional emails anytime.`,
    },
    {
      title: "User Obligations",
      color: "bg-yellow-500",
      text: `Users are responsible for the content they upload. Uploading harmful software, spam, or illegal content is strictly prohibited.`,
    },
    {
      title: "Termination",
      color: "bg-red-500",
      text: `RateCompares reserves the right to terminate user access at any time if misuse or violations are reported.`,
    },
    {
      title: "Liability",
      color: "bg-indigo-500",
      text: `RateCompares is not responsible for third-party content accuracy. All contracts or bookings are between the user and external providers.`,
    },
    {
      title: "Changes to Terms",
      color: "bg-pink-500",
      text: `We may update these terms from time to time and notify users via email when changes occur.`,
    },
  ];

  return (
    <div className="w-full bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-[400px] md:h-[450px] flex items-center justify-center overflow-hidden">
        <img
          src="about.avif"
          alt="Travel"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex justify-center items-center text-center z-10">
          <div className="max-w-3xl mx-auto px-4 py-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Terms & Conditions
            </h1>
            <p className="text-gray-200 text-lg md:text-xl">
              Read these terms carefully before using our platform. By accessing our website, you agree to comply with these terms.
            </p>
          </div>
        </div>
      </div>

      {/* Sections */}
      <div className="max-w-screen-lg mx-auto px-4 py-12">
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-white p-6 mb-8  shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
          >
            {/* Content */}
            <div>
              {/* Align star icon with title */}
              <div className="flex items-center mb-2">
                <FaStar className="text-black text-[12px] mr-2" />
                <h2 className="text-xl font-semibold text-gray-900">{section.title}</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">{section.text}</p>
            </div>
          </div>
        ))}

        {/* Contact Box */}
        <div className="bg-blue-900/100 text-white rounded-3xl p-12 shadow-xl mt-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help?</h2>
          <p className="mb-6 text-gray-200 text-lg">
            If you have any questions regarding our Terms & Conditions, feel free to contact our support team.
          </p>
          <button className="bg-white text-blue-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
            Contact Support
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}