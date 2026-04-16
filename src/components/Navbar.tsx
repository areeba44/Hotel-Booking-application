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

    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full">
      {/* ✅ NOT FIXED NOW */}
      <nav className="w-full bg-blue-950 h-[100px] backdrop-blur-md shadow-md transition-all duration-300">
        
        {/* Center Content */}
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-9 lg:px-20 py-4 flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex items-center">
            {loading ? (
              <div className="w-60 h-22 bg-white/20 rounded animate-pulse"></div>
            ) : (
              <Link href={"/Front"}>
                <Image
                  src="/Rate.png"
                  alt="Logo"
                  width={200}
                  height={90}
                  className="w-59 h-20 object-contain ml-16"
                />
              </Link>
            )}
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-4 items-center mr-14">
            <Link href="/Login">
              <button className="cursor-pointer border border-white px-5 py-2 rounded-lg text-white font-serif hover:bg-white hover:text-blue-900 transition-all duration-300 shadow-sm flex items-center gap-2">
                <HiOutlineLogin />
                Login
              </button>
            </Link>

            <Link href="/Usersetting">
              <button className="cursor-pointer border border-white bg-blue-950 text-white px-5 py-2 rounded-lg font-serif hover:bg-white hover:text-blue-900 transition-all duration-300 shadow-sm flex items-center gap-2">
                <HiOutlineUserAdd />
                Sign up
              </button>
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-2xl text-white p-2 rounded hover:bg-white/10 transition-all"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden px-4 pb-4 space-y-3 bg-blue-900 shadow-lg animate-slideDown">
            
            <Link href="/Login">
              <button className="w-full border border-white py-2 rounded-lg text-white font-medium hover:bg-white hover:text-blue-900 transition-all duration-300 flex items-center justify-center gap-2">
                <HiOutlineLogin />
                Login
              </button>
            </Link>

            <Link href="/Usersetting">
              <button className="w-full bg-white text-blue-900 py-2 rounded-lg font-medium hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2">
                <HiOutlineUserAdd />
                Sign up
              </button>
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
}