"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function GoogleLoginPopup() {
  const [open, setOpen] = useState(true);

  return (
    <div className="">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Top Section */}
        <div className="w-full max-w-screen-2xl mx-auto px-6 sm:px-10 xl:px-40 pt-40 pb-20 bg-blue-50">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif">
            Log in or sign up
          </h1>

          {/* Login Card Center */}
          <div className="flex items-center justify-center mt-16">
            <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-red-50">
              
              {/* Welcome Back Section */}
              <h2 className="text-3xl font-semibold text-center text-blue-900 mb-6">
                Welcome Back
              </h2>

              <p className="text-center text-gray-600 mb-6">
                Login to manage your bookings and profile
              </p>

              {/* Login Form */}
              <form className="space-y-6">
                
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Password */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Enter your password"
                  />
                </div>

                {/* Terms */}
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="terms"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    I have read and agree to{" "}
                    <span className="text-blue-600">
                      Terms and Conditions
                    </span>
                  </label>
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  className="w-full py-2 bg-blue-900 text-white rounded-md hover:bg-blue-700 transition duration-200"
                >
                  Login
                </button>
              </form>

              {/* Forgot Password */}
              <div className="text-center mt-4">
                <Link
                  href="/forgot-password"
                  className="text-sm text-blue-600 hover:text-blue-800"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Signup */}
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Don’t have an account yet?{" "}
                  <Link
                    href="/signup"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Signup now
                  </Link>
                </p>
              </div>

            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}




































  