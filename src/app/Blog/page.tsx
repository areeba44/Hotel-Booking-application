"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const blogs = [
  {
    id: 1,
    title: "Top 10 Hotels to Stay in Dubai",
    date: "February 10, 2026",
    excerpt: "Explore the most luxurious hotels in Dubai with top-notch amenities and amazing views.",
    image: "/I1.PNG",
    link: "/blog/1",
  },
  {
    id: 2,
    title: "Travel Tips for a Safe Vacation",
    date: "January 25, 2026",
    excerpt: "Plan your travel wisely with these essential tips for a safe and enjoyable vacation.",
    image: "/I2.PNG",
    link: "/blog/2",
  },
  {
    id: 3,
    title: "Best Beach Resorts for Families",
    date: "December 30, 2025",
    excerpt: "Find family-friendly beach resorts with amazing activities for both kids and adults.",
    image: "/I3.PNG",
    link: "/blog/3",
  },
  {
    id: 4,
    title: "Luxury Staycation Ideas",
    date: "November 15, 2025",
    excerpt: "Discover how to enjoy a luxurious staycation in your own city.",
    image: "/I4.PNG",
    link: "/blog/4",
  },
  {
    id: 5,
    title: "Top Resorts in Maldives",
    date: "October 20, 2025",
    excerpt: "Explore the stunning resorts of Maldives for a perfect tropical getaway.",
    image: "/I5.PNG",
    link: "/blog/5",
  },
  {
    id: 6,
    title: "City Breaks for Couples",
    date: "September 5, 2025",
    excerpt: "Romantic city break ideas for couples looking for adventure and relaxation.",
    image: "/I6.PNG",
    link: "/blog/6",
  },
];

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Our Blog Heading */}
      <div className="bg-gray-100 py-35 w-full text-center">
        <h1 className="text-4xl font-bold text-gray-800">Our Blog</h1>
      </div>

      {/* Blog Cards */}
      <main className="flex-1 bg-gray-50 px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition flex flex-col w-full"
            >
              {/* Blog Image */}
              <div className="relative w-full h-44">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Blog Info */}
              <div className="p-4 flex flex-col gap-2 flex-1">
                <p className="text-gray-500 text-xs">{blog.date}</p>
                <h2 className="font-semibold text-md text-gray-800">{blog.title}</h2>
                <p className="text-gray-600 text-sm flex-1">{blog.excerpt}</p>
                <Link href={blog.link}>
                  <button className="mt-2 self-start px-3 py-1 bg-amber-600 text-white rounded-lg hover:bg-amber-500 transition text-sm">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}


