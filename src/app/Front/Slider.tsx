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
    <div className=" bg-gray-100 border-b border-gray-200 py-3">
      
      {/* CENTER WRAPPER */}
      <div className=" px-4">
        
        {/* Slider Wrapper */}
        <div className="relative overflow-hidden">
          
          {/* Sliding Track */}
          <div className="flex w-max animate-slide gap-8 items-center">
            
            {/* Loop 1 */}
            {logos.map((logo, index) => (
              <Image
                key={index}
                src={logo}
                alt="partner"
                width={60}
                height={25}
                className="object-contain"
              />
            ))}

            {/* Loop 2 */}
            {logos.map((logo, index) => (
              <Image
                key={`dup-${index}`}
                src={logo}
                alt="partner"
                width={80}
                height={40}
                className="object-contain"
              />
            ))}

          </div>

        </div>

      </div>
    </div> </div>
  );
}