"use client";
import Image from "next/image";
import { FaFacebookSquare, FaTwitter, FaInstagramSquare } from "react-icons/fa";
import "./footer.css";
export default function Footer() {
  return (
    <div className="bg-red-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Logo + Text */}
          <div>
            <Image
              src="/footerlogo.png"
              alt="logo"
              width={219}
              height={66}
              className="object-contain"
            />
            <p className="mt-4 text-sm leading-6">
              Experience the finest luxury stays around the world with Stay Haven.
              We bring comfort, elegance, and unforgettable memories to your travel journey.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li className="cursor-pointer hover:text-gray-300">Home</li>
              <li className="cursor-pointer hover:text-gray-300">About Us</li>
              <li className="cursor-pointer hover:text-gray-300">Rooms & Suites</li>
              <li className="cursor-pointer hover:text-gray-300">Services</li>
              <li className="cursor-pointer hover:text-gray-300">Contact</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact</h3>
            <div className="space-y-2 text-sm">
              <p>123 Luxury Street, Dubai</p>
              <p>+971 123 456 789</p>
              <p>info@stayhaven.com</p>
              <p>Open 24/7 Customer Support</p>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">

          <div className="flex items-center gap-6">
            <span className="font-semibold text-lg">Follow Us:</span>

            <div className="flex gap-4">
              <div className="w-10 h-10 flex items-center justify-center border-2 border-white rounded-full cursor-pointer hover:bg-white hover:text-red-900 transition">
                <FaTwitter />
              </div>

              <div className="w-10 h-10 flex items-center justify-center border-2 border-white rounded-full cursor-pointer hover:bg-white hover:text-red-900 transition">
                <FaFacebookSquare />
              </div>

              <div className="w-10 h-10 flex items-center justify-center border-2 border-white rounded-full cursor-pointer hover:bg-white hover:text-red-900 transition">
                <FaInstagramSquare />
              </div>
            </div>
          </div>

          <div className="flex gap-6 cursor-pointer">
            <span className="hover:text-gray-300">Terms Policy</span>
            <span className="hover:text-gray-300">Service Policy</span>
            <span className="hover:text-gray-300">Cookies</span>
          </div>

        </div>

        {/* Copyright */}
        <div className="text-center text-xs mt-6">
          © 2025 Stay Haven All rights reserved. Crafted with passion for luxury travel.
        </div>

      </div>
    </div>
  );
}