"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

const images = [
  { src: "/I11.PNG", label: "Room" },
  { src: "/I12.PNG", label: "Garden" },
  { src: "/I13.PNG", label: "TV Lounge" },
  { src: "/I14.PNG", label: "Dining" },
  { src: "/I15.PNG", label: "Reception" },
  { src: "/I16.PNG", label: "Balcony" },
  { src: "/I17.PNG", label: "Lobby" },
  { src: "/I18.PNG", label: "Restaurant" },
];

export default function HotelGalleryPage() {
  const router = useRouter();

  return (
    /* Background overlay */
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
      {/* Main Container */}
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl p-6 overflow-y-auto max-h-[90vh]">

        {/* Hotel Name */}
        <h1 className="text-2xl font-bold mb-4">West Inn Hotel Faisalabad</h1>

        {/* Top Bar */}
        <div className="flex items-center gap-4 mb-6">
          {/* Close Button */}
          <button
            onClick={() => router.back()}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Small Images Row with Labels */}
          <div className="flex gap-2 overflow-x-auto">
            {images.map((img, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="relative w-20 h-14 rounded-md overflow-hidden border">
                  <Image src={img.src} alt={`thumb-${i}`} fill className="object-cover" />
                </div>
                <span className="text-xs mt-1 text-gray-700">{img.label}</span>
              </div>
            ))}
          </div>

          {/* Price + View Deal (vertical) */}
          <div className="ml-4 flex flex-col items-start">
            <span className="font-bold text-lg">Best Price: $120</span>
            <button className="mt-2 bg-black text-white px-6 py-2.5 rounded-lg text-sm hover:bg-gray-800">
              View Deal
            </button>
          </div>
        </div>

        {/* Mixed Size Image Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative rounded-xl overflow-hidden shadow ${{
                0: "h-72 col-span-2",
                1: "h-60",
                2: "h-80",
                3: "h-56",
                4: "h-72",
                5: "h-64",
                6: "h-60",
                7: "h-64",
              }[i]}`}
            >
              <Image src={img.src} alt={`large-${i}`} fill className="object-cover" />

              {/* Left Label */}
              <div className="absolute left-2 bottom-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                {img.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}