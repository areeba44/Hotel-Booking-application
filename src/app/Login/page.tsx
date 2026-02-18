"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
export default function GoogleLoginPopup() {
  const [open, setOpen] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* Popup Overlay */}
      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          {/* Modal Box */}
          <div className="bg-white w-[95%] sm:w-[400px] rounded-2xl shadow-2xl p-6 relative animate-in fade-in zoom-in duration-200">
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-black text-lg"
            >
              ✕
            </button>

            {/* Google Logo */}
            <div className="flex justify-center mb-4">
              <Image src="/google.png" alt="Google" width={80} height={30} />
            </div>

            {/* Heading */}
            <h2 className="text-xl font-semibold text-center mb-4">
              Sign in with Google
            </h2>

            {/* Email Input */}
            <input
              type="email"
              placeholder="Email or phone"
              className="w-full border rounded-lg px-3 py-2 mb-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Password Input */}
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border rounded-lg px-3 py-2 mb-4 outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Login Button */}
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition">
              Next
            </button>

            {/* Footer Links */}
            
            <div className="flex justify-between text-sm text-blue-600 mt-4">
            <Link href="/Registration">
             <button className="hover:underline">Create account</button>
                  </Link>
                </div>

              <button className="hover:underline">Forgot email?</button>
            </div>
          </div> 
      
      )}

      {/* Demo Page Content */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-600 text-white px-6 py-2 rounded-xl shadow hover:bg-blue-700"
        >
          Open Login Popup
        </button>
      )}
    </div>
  );
}
