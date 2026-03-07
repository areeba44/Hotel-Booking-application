"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <nav className=" top-0 inset-x-0 z-50 flex justify-center px-3 overflow-x-hidden">
      
     <div className=" w-full h-[70px] flex items-center justify-between px-4 md:px-8">
  
        {/* Logo */}
        <div className="flex-shrink-0 max-w-[160px] sm:max-w-[190px] md:max-w-[219px] w-full">
          <Image
            src="/finallogo.png"
            alt="logo"
            width={219}
            height={66}
            className="object-contain w-full h-auto "
            priority
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 ml-120 lg:gap-8 font-sans text-black text-sm font-medium whitespace-nowrap">
          <li>
            <Link href="./Front" className="hover:text-red-700 transition-colors">
              Home
            </Link>
          </li>

          <li>
            <Link href="./About" className="hover:text-red-700 transition-colors">
              About
            </Link>
          </li>

          <li>
            <Link href="./Blog" className="hover:text-red-700 transition-colors">
              Blog
            </Link>
          </li>
        </ul>

        {/* Buttons */}
        <div className="hidden md:flex items-center gap-3 flex-shrink-0">
          <Link href="./Login">
            <button className="px-4 h-[38px] w-25 text-sm border  border-red-900 text-red-900 hover:bg-red-50 transition whitespace-nowrap">
              Login
            </button>
          </Link>

          <Link href="./Usersetting">
            <button className="px-4 h-[38px] w-25 text-sm border rounded border-red-900 text-white bg-red-900 hover:bg-red-800 transition whitespace-nowrap">
              Sign up
            </button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center flex-shrink-0">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-black"
          >
            <div className="w-6 h-0.5 bg-black mb-1"></div>
            <div className="w-6 h-0.5 bg-black mb-1"></div>
            <div className="w-6 h-0.5 bg-black"></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-[85px] w-[95%] max-w-5xl bg-white shadow-xl rounded-xl p-4 flex flex-col gap-3 font-medium md:hidden overflow-hidden">
          <Link href="./Front" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <Link href="./About" onClick={() => setMenuOpen(false)}>
            About
          </Link>

          <Link href="./Blog" onClick={() => setMenuOpen(false)}>
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
    </nav>
  );
};

export default Navbar;