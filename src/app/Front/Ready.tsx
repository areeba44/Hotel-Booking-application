"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Ready() {
  const [loading, setLoading] = useState(true);
  const sectionRef = useRef(null);

  // 👇 Scroll trigger (only load when section comes in view)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setLoading(false);
          }, 1000); // skeleton delay
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // 🔹 Skeleton UI
  const Skeleton = () => (
    <div className="w-full h-[40vh] sm:h-[40vh] md:h-[60vh] max-h-[500px] min-h-[250px] bg-gray-200 animate-pulse flex items-center justify-center">
      <div className="w-[80%] max-w-xl h-[200px] bg-gray-300 rounded-2xl"></div>
    </div>
  );

  return (
    <div ref={sectionRef} className="w-full bg-white pt-4">

      <div className="max-w-screen-2xl mx-auto relative w-full">

        {/* ================= LOADING ================= */}
        {loading ? (
          <Skeleton />
        ) : (
          <div className="relative w-full h-[40vh] sm:h-[40vh] md:h-[60vh] max-h-[500px] min-h-[250px] overflow-hidden">

            {/* Background Image */}
            <Image
              src="/lastpic.png"
              alt="hotel"
              fill
              className="object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 flex items-center justify-center px-4">
              <div className="bg-blue-900/80 text-white rounded-2xl p-6 sm:p-8 md:p-10 max-w-xl w-full text-center shadow-xl">

                <h2 className="text-2xl sm:text-3xl font-bold mb-3">
                  Ready to book your next stay?
                </h2>

                <p className="text-sm sm:text-lg mb-6 text-gray-200">
                  Find exclusive deals on hotels, resorts, and guest houses worldwide.
                </p>

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
        )}

      </div>
    </div>
  );
}