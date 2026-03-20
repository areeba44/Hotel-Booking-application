"use client";

import Image from "next/image";

const advertisers = [
  "https://imgcy.trivago.com/image/upload/hardcodedimages/mpm-localised-logos-dark/626.png",
  "https://imgcy.trivago.com/image/upload/hardcodedimages/mpm-localised-logos-dark/406.png",
  "https://imgcy.trivago.com/image/upload/hardcodedimages/mpm-localised-logos-dark/3340.png",
  "https://imgcy.trivago.com/image/upload/hardcodedimages/mpm-localised-logos-dark/2564.png",
  "https://imgcy.trivago.com/image/upload/hardcodedimages/mpm-localised-logos-dark/14.png",
  "https://imgcy.trivago.com/image/upload/hardcodedimages/mpm-localised-logos-dark/54.png",
  "https://imgcy.trivago.com/image/upload/hardcodedimages/mpm-localised-logos-dark/634.png"
];

export default function AdvertiserBar() {
  return (
    <div className="w-full bg-white  overflow-hidden py-4">

      <div className="flex animate-slide whitespace-nowrap">

        {[...advertisers, ...advertisers].map((logo, index) => (
          <div key={index} className="mx-6 flex-shrink-0">
            <Image
              src={logo}
              alt="advertiser"
              width={80}
              height={14}
              className="object-contain opacity-80 hover:opacity-100 transition"
            />
          </div>
        ))}

      </div>

    </div>
  );
}