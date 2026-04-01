"use client";

import { Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function ContactPage() {
  return (
    <div> <Navbar />
    
    <div className="min-h-screen bg-gray-100 py-16 px-4">
           
      <div className="max-w-5xl mx-auto">

        {/* TOP SECTION (Help Center Style) */}
        <div className="mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h1>

          <p className="text-xl text-gray-700 mb-6">
            How can we help you?
          </p>

          <div className="relative max-w-2xl">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <Search size={20} />
            </span>

            <input
              type="text"
              placeholder="Search help articles"
              className="w-full pl-12 pr-4 py-4 rounded-lg border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
          </div>
        </div>

        {/* CONTENT SECTION */}
        <div className="grid md:grid-cols-2 gap-10">
          
          {/* LEFT SIDE (Info) */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Get In Touch With Us
            </h2>

            <p className="text-gray-600 mb-6">
              Our service is free for you. It doesn’t require registration.
              Just use it and recommend us to your friends.
            </p>

            <div className="space-y-4 text-gray-700">
              <p>
                <span className="font-semibold">Address:</span><br />
                1 Richmond Street, New Brunswick,<br />
                New Jersey, 08901 USA
              </p>

              <p>
                <span className="font-semibold"> Email:</span><br />
                support@example.com
              </p>
            </div>
          </div>

          {/* RIGHT SIDE (Form) */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Contact Us
            </h2>

            <form className="space-y-4">
              
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />

                <input
                  type="text"
                  placeholder="Last Name"
                  className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />

              <input
                type="text"
                placeholder="Website"
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <textarea
                placeholder="Message"
                rows={4}
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                required
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-900/100 text-white py-3 rounded-lg hover:bg-blue-900 transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
     
    </div>
      <Footer />
    </div>
  );
}