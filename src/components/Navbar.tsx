"use client";

import Link from "next/link";
import Image from "next/image";
import { useState,useEffect } from "react";

export default function Navbar() {

const [mounted, setMounted] = useState(false);
const [menuOpen, setMenuOpen] = useState(false);
useEffect(() => {
  setMounted(true);
}, []);

if (!mounted) return null;
  return (
    <div className="w-full flex justify-center"> {/* ✅ Parent Div FIX */}

      <nav className="w-full max-w-screen-2xl bg-white/90 backdrop-blur-md shadow-md top-0 z-50 transition-all duration-300">
        <div className="px-4 sm:px-6 lg:px-10 py-4 flex justify-between items-center">

          {/* Logo */}
          <div className="flex items-center  ml-9">
            <Image
              src="/Rate.png"
              alt="Logo"
              width={140}
              height={60}
              className="object-contain"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-4 font-serif items-center">
            <Link href="/Login">
              <button className="border cursor-pointer border-blue-700 px-5 py-2 rounded-lg text-blue-900 font-medium hover:bg-blue-900 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md">
                Login
              </button>
            </Link>

            <Link href="/Usersetting">
              <button className="bg-gradient-to-r cursor-pointer from-blue-900 to-blue-700 text-white px-5 py-2 rounded-lg font-medium hover:from-blue-800 hover:to-blue-600 transition-all duration-300 shadow-sm hover:shadow-md">
                Sign up
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl p-2 rounded hover:bg-gray-100 transition-all"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden px-4 pb-4 space-y-3 bg-white shadow-lg rounded-b-lg animate-slideDown">
            <Link href="/Login">
              <button className="w-full border cursor-pointer border-blue-700 py-2 rounded-lg text-blue-900 font-medium hover:bg-blue-900 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md">
                Login
              </button>
            </Link>

            <Link href="/Usersetting">
              <button className="w-full bg-gradient-to-r cursor-pointer from-blue-900 to-blue-700 text-white py-2 rounded-lg font-medium hover:from-blue-800 hover:to-blue-600 transition-all duration-300 shadow-sm hover:shadow-md">
                Sign up
              </button>
            </Link>
          </div>
        )}
      </nav>

    </div>
  );
}