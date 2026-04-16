"use client";

import { Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaRegClock } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div>
      <Navbar />

      {/* HERO SECTION (FULL WIDTH FIX) */}
      <div className="relative w-full  h-[400px] md:h-[450px] flex items-center justify-center overflow-hidden text-center">

        <img
          src="about.avif"
          alt="Travel"
          className="absolute inset-0 w-full h-full object-cover brightness-130"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        {/* CENTER CONTENT */}
        <div className="relative z-10 max-w-2xl px-4 w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-6">
            How can we help you?
          </p>

          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <Search size={20} />
            </span>

            <input
              type="text"
              placeholder="Search help articles"
              className="py-4 px-12 w-full max-w-[600px] rounded-lg border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
          </div>
        </div>
      </div>

      {/* CONTENT SECTION (FULL WIDTH + CENTERED) */}
      <div className="w-full">
        <div className="max-w-screen-2xl mx-auto px-30 py-16 grid md:grid-cols-2 gap-10">

          {/* LEFT SIDE */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
              Connect With Us Today
            </h2>

            <p className="text-lg md:text-xl text-gray-600 mb-8">
              We're here to help! Whether you need assistance with our services, have questions, or just want to share your feedback, we’re always happy to hear from you.
            </p>

            <div className="space-y-6 text-gray-700">
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-blue-600" size={24} />
                <p>
                  <span className="font-semibold text-gray-900">Our Office:</span><br />
                  1 Richmond Street, New Brunswick,<br />
                  New Jersey, 08901 USA
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-blue-600" size={24} />
                <p>
                  <span className="font-semibold text-gray-900">Email Us:</span><br />
                  <a href="mailto:support@example.com" className="text-blue-600 hover:underline">support@example.com</a>
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <FaPhoneAlt className="text-blue-600" size={24} />
                <p>
                  <span className="font-semibold text-gray-900">Call Us:</span><br />
                  <a href="tel:+123456789" className="text-blue-600 hover:underline">+1 (234) 567-890</a>
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <FaRegClock className="text-blue-600" size={24} />
                <p>
                  <span className="font-semibold text-gray-900">Business Hours:</span><br />
                  Monday to Friday, 9:00 AM - 6:00 PM (EST)
                </p>
              </div>
            </div>

            <p className="text-lg text-gray-600 mt-8">
              We're always happy to help. Feel free to reach out to us with any inquiries or suggestions.
            </p>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              Get In Touch With Us
            </h2>

            <p className="text-gray-600 mb-8">
              Have questions or need assistance? Please fill out the form below, and we'll get back to you as soon as possible.
            </p>

            <form className="space-y-6">
              
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full border p-4 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50"
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full border p-4 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50"
                  required
                />
              </div>

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border p-4 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50"
                required
              />

              <input
                type="text"
                placeholder="Website (optional)"
                className="w-full border p-4 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50"
              />

              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full border p-4 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50"
                required
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-900 text-[20px] font-serif text-white py-3 rounded-lg hover:bg-blue-800 transition"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}