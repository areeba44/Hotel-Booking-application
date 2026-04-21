"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CreateAccountPage() {
  const router = useRouter();
  const params = useSearchParams();
  const email = params.get("email");

  const [form, setForm] = useState({
    name: "",
    password: "",
  });

  return (
    <div className="max-w-screen-2xl mx-auto relative w-full ">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/img1.png"
          alt="hotel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      </div>

      {/* Navbar */}
      <div className="relative z-40">
        <Navbar />
      </div>

      {/* Form Section */}
      <div className="relative z-50 flex items-center justify-center min-h-screen px-4">

        <div className="w-full max-w-md bg-white/95 rounded-2xl shadow-2xl p-8">

          {/* Close */}
          <button
            onClick={() => router.push("/")}
            className="absolute top-6 right-6 text-gray-400 hover:text-gray-700 text-lg"
          >
            ✕
          </button>

          {/* Brand */}
          <h1 className="text-3xl font-semibold text-blue-950 tracking-tight mb-1">
            Create account
          </h1>
          <p className="text-sm text-gray-500 mb-6">
            Create your account to continue your journey
          </p>

          {/* Email */}

          <div className="mb-5">
            <label className="text-xs text-gray-500">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black outline-none transition"
            />
          </div>
          {/* Name */}
          <div className="mb-5">
            <label className="text-xs text-gray-500">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"


              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black outline-none transition"
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="text-xs text-gray-500">Password</label>
            <input
              type="password"
              placeholder="Create a secure password"

              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black outline-none transition"
            />
          </div>

          {/* Button */}
          <button className="w-full bg-blue-950 text-white py-2.5 rounded-lg font-medium hover:bg-gray-900 transition">
            Submit
          </button>

          {/* Footer */}
          <p className="text-xs text-gray-400 text-center mt-6 leading-relaxed">
            By continuing, you agree to our{" "}
            <span className="underline cursor-pointer">Terms</span> and{" "}
            <span className="underline cursor-pointer">Privacy Policy</span>.
          </p>

        </div>
      </div>

      {/* Footer */}
      <div className="relative z-40">
        <Footer />
      </div>
    </div>
  );
}