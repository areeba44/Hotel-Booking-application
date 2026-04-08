"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const blogs = [
  {
    title: "The ultimate guide to visiting an onsen in Japan.",
    desc: "Discover the best onsen in Japan, including historic ryokans...",
    author: "Chloe Gunning",
    time: "3 min read",
    img: "/b1.webp",
  },
  {
    title: "How to find luxury hotels at budget prices.",
    desc: "Learn smart comparison techniques and hidden booking tips...",
    author: "John Carter",
    time: "5 min read",
    img: "/b2.webp",
  },
  {
    title: "Best family-friendly hotels worldwide.",
    desc: "Explore hotels offering kids activities and relaxing stays...",
    author: "Emily Watson",
    time: "4 min read",
    img: "/b3.jpg",
  },
  {
    title: "When is the best time to book hotels?",
    desc: "Understand seasonal hotel pricing trends and save more...",
    author: "Michael Brown",
    time: "6 min read",
    img: "/b1.webp",
  },
  {
    title: "Top luxury hotels you must experience once.",
    desc: "From villas to sky-high penthouses, explore luxury stays...",
    author: "Sophia Miller",
    time: "4 min read",
    img: "/b2.webp",
  },
  {
    title: "How hotel comparison sites save your money.",
    desc: "Learn how platforms help travelers compare prices...",
    author: "Daniel Cooper",
    time: "5 min read",
    img: "/b3.jpg",
  },
];

export default function TravelUI() {
  return (
    <div>
      <Navbar />

      {/* HERO */}
      <section className="relative h-[420px]  max-w-screen-2xl mx-auto w-full">
        <img
          src="/blogimage.jpg"
          className="w-full h-full object-cover"
          alt=""
        />

        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center px-10 md:px-24">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Luxury Travel Guides  <span className="text-yellow-400">& Smart Tips</span>
          </h1>

          <p className="text-gray-200 max-w-xl">
            Expert advice to help you travel smarter and spend less.
            From hidden gems to booking hacks — stay ahead.
          </p>
        </div>
      </section>

      {/* BLOG CARDS */}
      <section className="bg-gray-100 py-10  max-w-screen-2xl mx-auto w-full">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 sm:grid-cols-2 gap-6">

          {blogs.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition"
            >
              <img
                src={item.img}
                className="h-44 w-full object-cover"
              />

              <div className="p-4">
                <p className="text-xs text-gray-400 mb-1">
                  All about hotels
                </p>

                <h3 className="font-semibold text-sm mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-gray-600 mb-3">
                  {item.desc}
                </p>

                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <div className="w-6 h-6 rounded-full bg-gray-300" />
                  {item.author} • {item.time}
                </div>
              </div>
            </div>
          ))}

        </div>
      </section>

     

      <Footer />
    </div>
  );
}