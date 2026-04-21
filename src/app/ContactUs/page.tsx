"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { FaPhoneAlt, FaEnvelope, FaClock, FaHeadset } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="w-full bg-gray-50 text-gray-800">

      {/* ✅ NAVBAR */}
      <Navbar />

      {/* 🔷 HERO (NO PADDING - FULL WIDTH) */}
      <div className="relative w-full h-[400px] md:h-[400px] overflow-hidden">
        <Image
          src="/blogimage.jpg"
          alt="contact"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-6 md:px-20 text-white">
          <p className="text-sm mb-2">GET IN TOUCH</p>
          <h1 className="text-4xl font-bold">
            Contact <span className="text-yellow-400">Rate Compares</span>
          </h1>
          <p className="mt-2 max-w-xl text-sm">
            Have a question, feedback, or partnership inquiry? We'd love to hear from you.
          </p>
        </div>
      </div>

      {/* ✅ CONTENT WRAPPER (PADDING ONLY HERE) */}
      <div className="px-6 md:px-12 lg:px-20 py-6">

        {/* 🔷 CONTACT CARDS */}
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Call Us",
              desc: "Mon - Fri, 9am to 6pm",
              info: "+1 (800) 123-4567",
              icon: <FaPhoneAlt />,
            },
            {
              title: "Email Us",
              desc: "We reply within 24 hours",
              info: "support@ratecompares.com",
              icon: <FaEnvelope />,
            },
            {
              title: "Working Hours",
              desc: "Mon - Fri",
              info: "9:00 AM - 6:00 PM",
              icon: <FaClock />,
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-gray-100 text-blue-950 rounded-full mb-4 text-xl">
                {item.icon}
              </div>

              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
              <p className="mt-2 font-medium">{item.info}</p>
            </div>
          ))}
        </div>

        {/* 🔷 FORM + SIDE */}
        <div className="py-16 grid md:grid-cols-3 gap-10">

          {/* FORM */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Send us a Message</h2>

            <div className="grid md:grid-cols-2 gap-6">

              {/* First Name */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  className="w-full h-14 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Enter your first name"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                    className="w-full h-14 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="Enter your Email address"
                  />
              </div>
              <div className="md:col-span-2 flex flex-col md:flex-row gap-2">
                {/* Phone Number */}
                <div className="flex flex-col gap-1 w-full mb-4">
                  <label className="text-sm font-medium">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="w-full h-14 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="Enter your phone number"
                  />
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-1 w-full">
                  <label className="text-sm font-medium">
                    Subject <span className="text-red-500">*</span>
                  </label>

                  <select className="w-full h-14 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400">
                    <option>Select a subject</option>
                    <option>General Inquiry</option>
                    <option>Support</option>
                    <option>Partnership</option>
                  </select>
 </div> </div></div>
<label className="text-sm font-medium">
                    Message <span className="text-red-500">*</span>
                  </label>
                 <textarea
  className="input  h-32 w-full h-14 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                 
  placeholder="Your message..."
/>

<button className="mt-6 py-2 px-5 bg-yellow-400 hover:bg-yellow-500 text-white rounded-md font-semibold shadow-md hover:shadow-lg transition block">
  Send Message
</button>
               
             </div>






          {/* SIDE INFO */}
          <div className="space-y-6">

            <div className="bg-white p-5 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 flex items-center justify-center bg-gray-100 text-blue-950 rounded-full">
                  <FaHeadset />
                </div>
                <h3 className="font-semibold">24/7 Customer Support</h3>
              </div>

              <p className="text-sm text-gray-500">
                Our dedicated support team is always here to help you.
              </p>

              <p className="text-sm mt-2 font-medium">
                support@ratecompares.com
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-lg">
              <h3 className="font-semibold mb-3">Our Response Promise</h3>

              <div className="text-sm space-y-2">
                <p className="flex items-center gap-2">

                  Email: <span className="font-medium">Within 24 hours</span>
                </p>

                <p className="flex items-center gap-2">

                  Phone: <span className="font-medium">Immediate</span>
                </p>

                <p className="flex items-center gap-2">

                  Live Chat: <span className="font-medium">Under 5 mins</span>
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* 🔷 MAP */}
        <div className="pb-16">
          <h2 className="text-2xl font-bold mb-4">Find Our Office</h2>

          <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://maps.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full"
              loading="lazy"
            ></iframe>
          </div>
        </div>

      </div>

      {/* ✅ FOOTER */}
      <Footer />

    </div>
  );
}