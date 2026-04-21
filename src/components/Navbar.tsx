"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { HiOutlineUserAdd } from "react-icons/hi";
import { FiAlignJustify } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { LuClock } from "react-icons/lu";
import { MdOutlineWorkOutline } from "react-icons/md";
import { IoSearch } from "react-icons/io5";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <nav className="w-full bg-blue-950">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 h-[70px] flex justify-between items-center">

        {/* ✅ Logo */}
         <Link href={"/Front"}>
                <Image
                  src="/Rate.png"
                  alt="Logo"
                  width={200}
                  height={90}
                  className="w-59 h-20 object-contain ml-16"
                />
              </Link>

        {/* ✅ Desktop Menu */}
        <div className="hidden md:flex items-center gap-2 mr-20">

          {/* Signup */}
          <Link href="./Signup">
            <button className="flex font-bold items-center gap-2 px-4 py-2 border border-white rounded-lg text-white hover:bg-white hover:text-blue-900 transition">
              <HiOutlineUserAdd />
              Signup
            </button>
          </Link>

          {/* Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center font-bold  gap-2 px-4 py-2 border border-white rounded-lg text-white hover:bg-white hover:text-blue-900 transition"
            >
              <FiAlignJustify />
              Menu
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-60 bg-white rounded-md shadow-lg z-50 overflow-hidden">

                <div className="px-4 py-2 font-semibold border-b">
                  Trips
                </div>

                <Link href="/Fav" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100">
                  <FaRegHeart />
                  Favorites
                </Link>

                <Link href="/Rec" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100">
                  <LuClock />
                  Recently viewed
                </Link>

                <div className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer">
                  <MdOutlineWorkOutline />
                  Bookings
                </div>

                <div className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer">
                  <IoSearch />
                  Save Search
                </div>

              </div>
            )}
          </div>
        </div>

        {/* ✅ Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* ✅ Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-900 px-4 pb-4 space-y-3">

          <Link href="./Signup">
            <button className="w-full flex items-center justify-center gap-2 border border-white py-2 rounded-lg text-white hover:bg-white hover:text-blue-900 transition">
              <HiOutlineUserAdd />
              Signup
            </button>
          </Link>

          <Link href="/Fav" className="flex items-center gap-3 text-white py-2">
            <FaRegHeart />
            Favorites
          </Link>

          <Link href="/Rec" className="flex items-center gap-3 text-white py-2">
            <LuClock />
            Recently viewed
          </Link>

          <div className="flex items-center gap-3 text-white py-2">
            <MdOutlineWorkOutline />
            Bookings
          </div>

          <div className="flex items-center gap-3 text-white py-2">
            <IoSearch />
            Save Search
          </div>
        </div>
      )}
    </nav>
  );
}