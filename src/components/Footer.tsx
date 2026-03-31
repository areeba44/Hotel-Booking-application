"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { IconType } from "react-icons";

/* Footer Column Component */
function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h3 className="text-sm font-semibold mb-4 text-white">{title}</h3>
      <ul className="space-y-2 text-sm text-white">
        {links.map((item) => (
          <li key={item}>
            <Link href="/" className="hover:text-gray-200 transition">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* Social Icon */
function SocialIcon({ Icon }: { Icon: IconType }) {
  return (
    <div className="w-10 h-10 flex items-center justify-center border border-white rounded-full hover:bg-white hover:text-blue-900 transition cursor-pointer">
      <Icon size={14} />
    </div>
  );
}

export default function Footer() {
  const [loading, setLoading] = useState(true);
  const footerRef = useRef(null);

  // 🔥 Scroll trigger loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setLoading(false), 1000);
        }
      },
      { threshold: 0.2 }
    );

    if (footerRef.current) observer.observe(footerRef.current);

    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  // 🔹 Skeleton UI
  const Skeleton = () => (
    <div className="w-full bg-blue-950 py-10 px-6 animate-pulse">
      <div className="max-w-screen-2xl mx-auto grid lg:grid-cols-2 gap-10">

        {/* Left */}
        <div>
          <div className="w-40 h-10 bg-white/20 rounded mb-4"></div>
          <div className="space-y-2">
            <div className="w-3/4 h-3 bg-white/20 rounded"></div>
            <div className="w-2/3 h-3 bg-white/20 rounded"></div>
            <div className="w-1/2 h-3 bg-white/20 rounded"></div>
          </div>
          <div className="flex gap-3 mt-6">
            <div className="w-10 h-10 rounded-full bg-white/20"></div>
            <div className="w-10 h-10 rounded-full bg-white/20"></div>
            <div className="w-10 h-10 rounded-full bg-white/20"></div>
          </div>
        </div>

        {/* Right */}
        <div className="grid grid-cols-3 gap-6">
          <div className="space-y-2">
            <div className="w-20 h-4 bg-white/20 rounded"></div>
            <div className="w-16 h-3 bg-white/20 rounded"></div>
            <div className="w-16 h-3 bg-white/20 rounded"></div>
          </div>

          <div className="space-y-2">
            <div className="w-20 h-4 bg-white/20 rounded"></div>
            <div className="w-16 h-3 bg-white/20 rounded"></div>
            <div className="w-16 h-3 bg-white/20 rounded"></div>
          </div>

          <div className="space-y-2">
            <div className="w-20 h-4 bg-white/20 rounded"></div>
            <div className="w-16 h-3 bg-white/20 rounded"></div>
            <div className="w-16 h-3 bg-white/20 rounded"></div>
          </div>
        </div>

      </div>
    </div>
  );

  return (
    <div ref={footerRef} className="w-full bg-white">

      <div className="max-w-screen-2xl mx-auto w-full">

        {/* ================= LOADING ================= */}
        {loading ? (
          <Skeleton />
        ) : (
          <footer className="bg-blue-950 text-white sm:px-8 py-5 shadow-2xl">

            {/* TOP SECTION */}
            <div className="grid lg:grid-cols-2 gap-12">

              {/* LEFT */}
              <div>
                <Image
                  src="/Rate.png"
                  alt="Logo"
                  width={90}
                  height={80}
                  className="w-65 h-10 px-10 mt-5"
                />

                <p className="px-10 max-w-md leading-relaxed text-sm text-gray-200 font-serif">
                  Discover luxury stays across the world with premium comfort,
                  elegant design, and unforgettable experiences.
                </p>

                <div className="flex gap-4 mt-6 ml-9">
                  <SocialIcon Icon={FaFacebookF} />
                  <SocialIcon Icon={FaInstagram} />
                  <SocialIcon Icon={FaTwitter} />
                </div>
              </div>

              {/* RIGHT */}
              <div className="relative px-20 mt-6 font-serif">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                  <FooterCol title="Company" links={["About", "Careers", "Blog", "Press"]} />
                  <FooterCol title="Explore" links={["Rooms", "Destinations", "Offers", "Gallery"]} />
                  <FooterCol title="Support" links={["Help Center", "Contact", "Privacy", "Terms"]} />
                </div>
              </div>

            </div>

            {/* DIVIDER */}
            <div className="border-t border-white/30 mt-10"></div>

            {/* BOTTOM */}
            <div className="flex flex-col md:flex-row ml-8  font-serif justify-between items-center gap-4 text-sm text-gray-200">
              <p>© 2026 Stay Haven. All rights reserved.</p>

              <div className="flex gap-6 mr-10 mt-7 font-serif">
                <Link href="/" className="hover:text-white transition">Privacy</Link>
                <Link href="/" className="hover:text-white transition">Terms</Link>
                <Link href="/" className="hover:text-white transition">Cookies</Link>
              </div>
            </div>

          </footer>
        )}

      </div>
    </div>
  );
}