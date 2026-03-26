"use client";

import Image from "next/image";

export default function Ready() {
  return (
    // 🔹 Outermost Parent Div (Container)
    <div className="w-full bg-white ">

      {/* 🔹 Centered Container */}
      <div className="max-w-screen-2xl mx-auto relative w-full">

        {/* 🔹 Image Section */}
        <div className="relative w-full h-[40vh] sm:h-[40vh] md:h-[60vh] overflow-hidden">

          {/* Background Image */}
          <Image
            src="/lastpic.png"
            alt="hotel"
            className="w-full h-full object-cover"
            layout="fill"  // Ensures the image fills the container and scales accordingly
          />

          {/* Overlay */}
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <div className="bg-blue-900/80 text-white rounded-2xl p-6 sm:p-8 md:p-10 max-w-xl w-full text-center shadow-xl">

              {/* Heading */}
              <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-3">
                Ready to book your next stay?
              </h2>

              {/* Subtext */}
              <p className="text-sm sm:text-lg md:text-lg mb-6 text-gray-200">
                Find exclusive deals on hotels, resorts, and guest houses worldwide.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-blue-700 transition">
                  View Detail
                </button>

                <button className="bg-white text-blue-700 px-6 py-2 rounded-full hover:bg-gray-200 transition">
                  Search Hotels
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}