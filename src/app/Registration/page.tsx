"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
export default function RegistrationModalPage() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <>
      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-white bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl w-11/12 sm:w-96 p-6 relative shadow-2xl animate-fadeIn">
            
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black font-bold text-lg"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="border border-gray-300 rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-amber-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-amber-500"
              />
              <input
                type="password"
                placeholder="Password"
                className="border border-gray-300 rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-amber-500"
              />

              <button
                type="submit"
                className="bg-amber-500 text-white font-bold px-4 py-2 rounded-2xl hover:bg-amber-600 transition"
              >
              Register
              </button>
            </form>
            
           <p className="text-sm text-gray-500 mt-4 text-center">
             Already have an account?{" "}
             <Link
              href="/Login"
              className="text-amber-500 cursor-pointer hover:underline"
              >
              Login
              </Link>
              </p>
          </div>
        </div>
      )}
    </>
  );
}


