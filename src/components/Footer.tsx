"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

export default function Footer() {
  return (
    <footer className=" max-w-screen-2xl mx-auto w-full bg-[#162E5C] text-white px-5 sm:px-8 md:px-12 lg:px-20 py-12">

      <div className="max-w-screen-2xl mx-auto">

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

            <p className="text-sm text-gray-300 leading-relaxed max-w-sm">
              Your trusted partner for luxury hotel bookings worldwide.
              Discover comfort, elegance, and exceptional service.
            </p>

            {/* SOCIAL */}
            <div className="flex gap-3 mt-6">
              {[FaFacebookF, FaTwitter, FaInstagram, IoLogoYoutube ].map((Icon, i) => (
                <div
                  key={i}
                  className="w-9 h-9 border text-center rounded-full flex items-center justify-center hover:bg-white hover:text-[#162E5C] transition"
                >
                  <Icon size={14} />
                </div>
              ))}
            </div>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="font-semibold mb-4">COMPANY</h3>
            <ul className="space-y-2 text-sm text-gray-300 font-medium">
              <li><Link href="/About">About-Us</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/Blog">Blog</Link></li>
              <li><Link href="/How">How we work</Link></li>
              <li><Link href="/Press">Press</Link></li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h3 className="font-semibold mb-4">SUPPORT</h3>
            <ul className="space-y-2 text-sm text-gray-300 font-medium">
              <li><Link href="/F&Q">Frequently Asked Questions</Link></li>
              <li><Link href="#">Safety Information</Link></li>
              <li><Link href="#">Cancellation Options</Link></li>
              <li><Link href="ContactUs">Contact Us</Link></li>
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
            <div className="flex flex-col sm:flex-row w-full sm:w-[290px] h-auto sm:h-[40px] bg-white rounded-full overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 sm:py-2 text-sm text-black outline-none"
              />
              <button className="bg-gray-200 px-1 w-[90px]  py-2 text-sm  text-blue-900 font-bold">
                Subscribe
              </button>
            </div>

            </div></div>

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