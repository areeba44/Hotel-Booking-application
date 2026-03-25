"use client";

import Image from "next/image";

export default function AdvertiserBar() {
  const logos = [
    "/booking.png",
    "/agoda1.png",
    "/exp.png",
    "/price.png",
    "/hot.png",
    "/trip.png",
  ];

  return (
    <div className="bg-white">
      
      {/* Parent Container */}
      <div className="max-w-screen-2xl mx-auto px-4 mt-10">
        
        {/* Slider Wrapper */}
        <div className="relative overflow-hidden">
          
          {/* Sliding Track */}
          <div className="flex w-max animate-slide gap-12">
            
            {/* Loop 1 */}
            {logos.map((logo, index) => (
              <Image
                key={index}
                src={logo}
                alt="partner"
                width={120}
                height={60}
                className="object-contain"
              />
            ))}

            {/* Loop 2 */}
            {logos.map((logo, index) => (
              <Image
                key={`dup-${index}`}
                src={logo}
                alt="partner"
                width={120}
                height={60}
                className="object-contain"
              />
            ))}

          </div>
        </div>

      </div>
    </div>
  );
}