import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="max-w-screen-3xl mx-auto px-4">
      <nav className="w-full">
        <div className="max-w-screen-2xl bg-white shadow-sm w-full mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <Image
            src="/Rate.png"
            alt="Logo"
            width={160}
            height={80}
            className="text-red-500 fill-current"
          />

          {/* Menu for Desktop */}
          <div className="hidden md:flex space-x-8 text-gray-700 text-[20px]">
            <a href="./Front" className="hover:text-blue-700">Home</a>
            <a href="./About" className="hover:text-blue-700">About</a>
            <a href="./Blog" className="hover:text-blue-700">Blog</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button onClick={toggleMenu} className="text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Items */}
          {isMenuOpen && (
            <div className="absolute top-16 right-0 bg-white w-full px-6 py-4 space-y-4 md:hidden shadow-lg">
              <a href="./Front" className="block text-gray-700 hover:text-blue-700">Home</a>
              <a href="./About" className="block text-gray-700 hover:text-blue-700">About</a>
              <a href="./Blog" className="block text-gray-700 hover:text-blue-700">Blog</a>
            </div>
          )}

          {/* Buttons */}
          <div className="flex gap-5 mr-10 font-serif ">
            <Link href="/Login">
              <button className="cursor-pointer border border-blue-700 px-4 py-1 rounded text-blue-900 hover:bg-blue-900 hover:text-white transition">
                Login
              </button>
            </Link>
            <Link href="Usersetting">
              <button className="bg-blue-900 text-white px-4 py-1 rounded hover:bg-blue-900 cursor-pointer transition">
                Sign up
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}