"use client";

import Image from "next/image";

export default function AdvertiserBar() {
  const logos = [
    "/booking.com.png",
    "/agoda1.png",
    "/exp.png",
    "/price.png",
    "/hot.png",
    "/trip.png",
    "/Hotwire.svg",
    "/Kayak-logo.svg"
  ];

  return (
    <div className="max-w-screen-2xl mx-auto relative w-full">
      <div className="bg-gray-100 border-b border-gray-200 py-3">

        <div className="px-4">

          <div className="relative overflow-hidden">

            {/* SLOW SLIDER + BIGGER IMAGES */}
            <div className="flex w-max animate-[slide_25s_linear_infinite] gap-10 items-center">

              {logos.map((logo, index) => (
                <Image
                  key={index}
                  src={logo}
                  alt="partner"
                  width={120}
                  height={30}
                  className="object-contain"
                />
              ))}

              {logos.map((logo, index) => (
                <Image
                  key={`dup-${index}`}
                  src={logo}
                  alt="partner"
                  width={120}
                  height={30}
                  className="object-contain"
                />
              ))}

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}