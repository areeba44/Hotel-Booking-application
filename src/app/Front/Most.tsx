"use client";
import Image from "next/image";
import { BsGeoAlt } from "react-icons/bs";

export default function MostVisited() {
  return (
    <section className="w-full bg-white  px-5 sm:px-8">
      
      {/* Container (Thoda chhota parent) */}
    <div className="max-w-screen-2xl mx-auto relative w-full px-4">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-10 px-3 text-gray-900">
          Most Visited Hotels of 2025
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* Big Card */}
          <div className="relative md:col-span-2 rounded-2xl overflow-hidden h-[300px] sm:h-[380px] md:h-[420px]">
            <Image
              src="/buliding.png"
              alt="hotel"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 text-white">
              <h3 className="text-xl sm:text-2xl font-semibold">
                The Grand Luxe
              </h3>

              <div className="flex items-center gap-2 text-sm mt-1">
                <BsGeoAlt />
                Karachi, Pakistan
              </div>

              <p className="text-lg font-bold mt-2">
                $520 <span className="text-sm font-normal">/night</span>
              </p>

              <button className="bg-white text-black px-5 py-2 rounded-full mt-3 text-sm w-fit hover:bg-gray-200 transition">
                View Details
              </button>
            </div>
          </div>

          {/* Small Card */}
          <div className="relative rounded-2xl overflow-hidden h-[300px] sm:h-[380px] md:h-[420px]">
            <Image
              src="/bul2.png"
              alt="hotel"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 text-white">
              <h3 className="text-lg sm:text-xl font-semibold">
                Mountain Lodge
              </h3>

              <div className="flex items-center gap-2 text-sm mt-1">
                <BsGeoAlt />
                Karachi, Pakistan
              </div>

              <p className="text-lg font-bold mt-2">
                $520 <span className="text-sm font-normal">/night</span>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}