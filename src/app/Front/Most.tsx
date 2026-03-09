"use client";
import Image from "next/image";
import { BsGeoAlt } from "react-icons/bs";

export default function MostVisited() {
  return (
    <section className="w-full bottom-14 relative pb-16 bg-white">
      
      {/* Center Container */}
      <div className="max-w-6xl mx-auto px-8 lg:px-10">

        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-bold mb-12 text-left">
         Most Visited Hotel Of 2025
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* Big Card */}
          <div className="relative md:col-span-2 rounded-2xl overflow-hidden">
            <Image
              src="/buliding.png"
              alt="hotel"
              width={900}
              height={600}
              className="w-full h-[420px] object-cover"
            />

            <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-8 text-white">
              <h3 className="text-3xl font-semibold">The Grand Luxe</h3>

              <div className="flex items-center gap-2 text-sm mt-1">
                <BsGeoAlt />
                Karachi, Pakistan
              </div>

              <p className="text-xl font-bold mt-2">
                $520 <span className="text-sm font-normal">/night</span>
              </p>

              <button className="bg-white text-black px-6 py-3 rounded-full mt-4 w-52">
                View Detail
              </button>
            </div>
          </div>

          {/* Small Card */}
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="/bul2.png"
              alt="hotel"
              width={600}
              height={600}
              className="w-full h-[420px] object-cover"
            />

            <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-6 text-white">
              <h3 className="text-2xl font-semibold">Mountain Lodge</h3>

              <div className="flex items-center gap-2 text-sm mt-1">
                <BsGeoAlt />
                Karachi, Pakistan
              </div>

              <p className="text-xl font-bold mt-2">
                $520 <span className="text-sm font-normal">/night</span>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}