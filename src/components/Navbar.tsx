"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-lg border-gray-100 fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/hotel.png"
              alt="Logo"
              width={120}
              height={90}
              className="object-contain w-24 sm:w-28"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 text-[15px] font-medium relative">
            <Link href="/Front" className="hover:text-amber-500 transition">
              Home
            </Link>
            <Link href="/About" className="hover:text-amber-500 transition">
              About
            </Link>
            <Link href="/Blog" className="hover:text-amber-500 transition">
              Blog
            </Link>
            <Link href="/Login" className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-xl text-sm hover:text-amber-300 transition"
            >
              Login
            </Link>

            {/* Profile Dropdown Trigger */}
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-xl text-sm hover:text-amber-300 transition"
            >
            <FaUserCircle className="text-lg" />
              Registration
            </button>

            {/* Dropdown */}
            {profileOpen && (
              <div className="absolute right-0 top-14 w-48 bg-white shadow-xl rounded-xl py-2 border">
                <Link
                  href="/Profile"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setProfileOpen(false)}
                >
                  My Profile
                </Link> 
                
                <Link
                  href="/Usersetting"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setProfileOpen(false)}
                >
                Settings
                </Link>
                <Link
                  href="/Registration"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setProfileOpen(false)}
                >
                Create Account
                </Link>
                
                <Link
                  href="/Login"
                  className="block px-4 py-2 hover:bg-gray-100 text-red-500"
                  onClick={() => setProfileOpen(false)}
                >
                Logout
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-xl rounded-xl p-4 flex flex-col gap-3 text-[15px] font-medium">
            <Link href="/Front" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link href="/About" onClick={() => setMenuOpen(false)}>
              About
            </Link>
            <Link href="/Blog" onClick={() => setMenuOpen(false)}>
              Blog
            </Link>
             <Link
              href="/Profile"
              onClick={() => setMenuOpen(false)}
              className="bg-gray-100 rounded-lg py-2 text-center"
            >
              My Profile
            </Link>
               
            <Link
              href="/UserSettings"
              onClick={() => setMenuOpen(false)}
              className="bg-gray-100 rounded-lg py-2 text-center"
            > 
            Settings
            </Link>
            <Link
              href="/Settings"
              onClick={() => setMenuOpen(false)}
              className="bg-gray-100 rounded-lg py-2 text-center"
            >
            Create Account
            </Link>
            <Link
              href="/Login"
              onClick={() => setMenuOpen(false)}
              className="bg-black text-white rounded-lg py-2 text-center text-sm"
            >
             Logout
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;


