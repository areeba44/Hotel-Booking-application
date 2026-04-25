"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="w-full bg-blue-950 text-white py-12">

      {/* CENTER WRAPPER (LIKE NAVBAR STYLE) */}
      <div className="max-w-screen-2xl mx-auto px-5 sm:px-8 md:px-12 lg:px-29">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* LEFT */}
          <div>
            <Image
              src="/Rate.png"
              alt="logo"
              width={190}
              height={90}
              className="mb-4"
            />

            <p className="text-sm text-gray-300 font-bold leading-relaxed max-w-sm">
              Your trusted partner for luxury hotel bookings worldwide.
              Discover comfort, elegance, and exceptional service.
            </p>

            {/* SOCIAL */}
            <div className="flex gap-3 mt-6">
              {[FaFacebookF, FaTwitter, FaInstagram, IoLogoYoutube].map(
                (Icon, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 border cursor-pointer border-white/30 text-center rounded-full flex items-center justify-center hover:bg-white hover:text-[#162E5C] transition"
                  >
                    <Icon size={14} />
                  </div>
                )
              )}
            </div>
          </div>

          {/* COMPANY */}
          <div className="ml-10">
            <h3 className="font-semibold mb-4 ">COMPANY</h3>
            <ul className="space-y-2 text-sm text-gray-300 font-medium">
              <li><Link href="/About">About-Us</Link></li>
              <li><Link href="/Front">Careers</Link></li>
              <li><Link href="/Blog">Blog</Link></li>
              <li><Link href="/Front">How we work</Link></li>
              <li><Link href="/Front">Press</Link></li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div className="">
            <h3 className="font-semibold mb-4">SUPPORT</h3>
            <ul className="space-y-2 text-sm text-gray-300 font-medium">
              <li><Link href="/F&Q">Frequently Asked Questions</Link></li>
              <li><Link href="/Business">Business</Link></li>
              <li><Link href="/Company">Company</Link></li>
              <li><Link href="/ContactUs">Contact Us</Link></li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h3 className="font-bold text-lg mb-2">
              Save Time, Save Money!
            </h3>

            <p className="text-sm text-gray-300 mb-4">
              Sign up and get the best travel deals.
            </p>

            {/* INPUT */}
            <div className="flex flex-col sm:flex-row w-full sm:w-[290px] bg-white rounded-full overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 sm:py-2 text-sm text-black outline-none"
              />
              <button className="bg-gray-200 px-4 cursor-pointer py-2 text-sm text-blue-900 font-bold">
                Subscribe
              </button>
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/20 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-300 gap-4">

          <p className="text-center sm:text-left font-bold">
            © 2026 RateCompares. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center font-bold gap-4 sm:gap-6">
            <Link href="/Privacy">Privacy Policy</Link>
            <Link href="/Terms">Terms & Conditions</Link>
            <Link href="/Cookie">Cookie Policy</Link>
          </div>

        </div>

      </div>
    </footer>
  );
}