"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { HiOutlineLogin, HiOutlineUserAdd } from "react-icons/hi";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMounted(true);

    // simulate lazy load on scroll/page load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full flex justify-center">
      <nav className="w-full h-25 max-w-screen-2xl bg-blue-900/100 backdrop-blur-md shadow-md top-0 z-50 transition-all duration-300">
        <div className="px-4 sm:px-9 lg:px-20 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center ml-9 pt-4">
            {loading ? (
              <div className="w-60 h-13 bg-white/20 rounded animate-pulse"></div>
            ) : (
              <Link href={"http://localhost:3000/Front"}>
                <Image
                  src="/Rate.png"
                  alt="Logo"
                  width={200}
                  height={90}
                  className="w-60 h-13"
                />
              </Link>
            )}
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-4 font-serif items-center">
            <Link href="/Login">
              <button className="cursor-pointer border-2 border-white px-5 py-2 rounded-lg text-white font-medium hover:bg-blue-900 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md flex items-center gap-2">
                <HiOutlineLogin className="text-white" />
                Login
              </button>
            </Link>

            <Link href="/Usersetting">
              <button className="border-2 border-white cursor-pointer bg-blue-900/35 text-white px-5 py-2 rounded-lg font-medium hover:from-blue-800 hover:to-blue-600 transition-all duration-300 shadow-sm hover:shadow-md flex items-center gap-2">
                <HiOutlineUserAdd className="text-white" />
                Sign up
              </button>
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-2xl p-2 rounded hover:bg-gray-100 transition-all"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden px-4 pb-4 space-y-3 bg-white shadow-lg rounded-b-lg animate-slideDown">
            <Link href="/Login">
              <button className="w-full cursor-pointer border border-white py-2 rounded-lg text-blue-900 font-medium hover:bg-blue-900 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md">
                <HiOutlineLogin className="text-white" />
                Login
              </button>
            </Link>

            <Link href="/Usersetting">
              <button className="w-full bg-gradient-to-r cursor-pointer from-blue-900 to-blue-700 text-white py-2 rounded-lg font-medium hover:from-blue-800 hover:to-blue-600 transition-all duration-300 shadow-sm hover:shadow-md">
                <HiOutlineUserAdd className="text-white" />
                Sign up
              </button>
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
}