"use client";
import Link from "next/link";

import { FaFacebookSquare, FaTwitter, FaInstagramSquare } from "react-icons/fa";
import "./footer.css";
export default function Footer() {
  return (
    <div className="continer px-9 ">
    <footer className="bg-red-900 text-white pt-10 pb-5 ">
      <div className="container mx-auto ">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* Left */}
          <div className="md:w-1/3">
            <h2 className="text-2xl font-semibold">STAY HAVEN</h2>
            <p className="mt-3 text-sm leading-relaxed">
              Experience the finest luxury stays around the world with Stay Haven.
              We bring comfort, elegance, and unforgettable memories to your travel journey.
            </p>
          </div>

          {/* Right (Quick Links + Contact FLEX) */}
          <div className="flex flex-col sm:flex-row gap-16">

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-gray-300">Home</a></li>
                <li><a href="#" className="hover:text-gray-300">About Us</a></li>
                <li><a href="#" className="hover:text-gray-300">Rooms & Suites</a></li>
                <li><a href="#" className="hover:text-gray-300">Services</a></li>
                <li><a href="#" className="hover:text-gray-300">Contact</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li>123 Luxury Street, Dubai</li>
                <li>+971 123 456 789</li>
                <li>info@stayhaven.com</li>
                <li>Open 24/7 Customer Support</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Divider */}
        <hr className="border-white my-6" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm gap-4">

          {/* Social */}
          <div className="flex items-center gap-3">
            <span>Follow Us:</span>
            <div className="flex gap-3">
              <Link href={""}>
              <div className="w-8 h-8 border rounded-full flex items-center justify-center">< FaFacebookSquare/></div></Link>
              <Link href={""}>
              <div className="w-8 h-8 border rounded-full flex items-center justify-center">< FaTwitter/></div></Link>
              <Link href={""}>
              <div className="w-8 h-8 border rounded-full flex items-center justify-center">< FaInstagramSquare/></div></Link>
            
            </div>
          </div>

          {/* Copyright */}
          <p className="text-center">
            © 2025 Stay Haven All rights reserved. Crafted with passion for luxury travel.
          </p>

          {/* Policies */}
          <div className="flex gap-4">
            <a href="#">Terms Policy</a>
            <a href="#">Service Policy</a>
            <a href="#">Cookies</a>
          </div>

        </div>

      </div>

    </footer>
    </div>
  );
}