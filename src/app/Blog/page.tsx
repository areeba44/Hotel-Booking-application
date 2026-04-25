"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BlogData } from "@/Data/Blogdata";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function TravelUI() {
  const [blogs, setBlogs] = useState(BlogData);

  return (
    <div>
      <Navbar />

      {/* HERO SECTION (FULL WIDTH FIX) */}
      <section className="relative h-[420px] w-full">
        <img
          src="/blogimage.jpg"
          className="w-full h-full object-cover"
          alt=""
        />

        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center">
          
          {/* CENTER CONTENT */}
          <div className="max-w-screen-2xl mx-auto w-full px-10 md:px-24">
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Luxury Travel Guides{" "}
              <span className="text-yellow-400">& Smart Tips</span>
            </h1>

            <p className="text-gray-200 max-w-xl">
              Expert advice to help you travel smarter and spend less.
              From hidden gems to booking hacks — stay ahead.
            </p>
          </div>

        </div>
      </section>

      {/* BLOG CARDS (FULL WIDTH FIX) */}
     <section className="shadow-md py-10 px-30 w-full">
        
        {/* CENTER CONTENT */}
        <div className="max-w-screen-2xl mx-auto px-4 grid md:grid-cols-3 sm:grid-cols-2 gap-6">

          {blogs.map((item, index) => (
            <Link
              href={`/Blog/${item.slug}`}
              key={index}
              className="bg-white rounded-xl shadow-2xl overflow-hidden hover:shadow-xl transition h-[355px]"
            >
              <div className="relative w-full h-44">
                <Image
                  src={item.images1}
                  alt={item.title}
                  fill
                  className="object-cover rounded-md"
                />
              </div>

              <div className="p-4">
                <h3 className="font-light text-gray-950 text-md">
                  Poste Date: {item.date}
                </h3>

                <h3 className="font-bold text-black text-md mb-2">
                  {item.title}
                </h3>

                <p className="text-xs line-clamp-2 text-gray-600 mb-3">
                  {item.shortdesc}
                </p>

                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-300">
                    <Image
                      src={item.authorImages}
                      alt={item.author}
                      width={100}
                      height={100}
                      className="h-full w-full object-cover rounded-full"
                    />
                  </div>

                  <span>{item.author}</span>
                </div>
              </div>
            </Link>
          ))}

        </div>
      </section>

      <Footer />
    </div>
  );
}