"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { BsGeoAlt } from "react-icons/bs";
import Link from "next/link";

// ✅ Type
type Hotel = {
  id: number;
  name: string;
  location: string;
  price: number;
  image: string;
};

export default function MostVisited() {
  const [inView, setInView] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  // ✅ Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // ✅ Backend Data Fetch
  useEffect(() => {
    if (inView) {
      fetch("http://localhost:3000/api/hotels")
        .then((res) => res.json())
        .then((data) => {
          setHotels(data);
          setDataLoaded(true);
        })
        .catch(() => {
          // fallback dummy data
          setHotels([
            {
              id: 1,
              name: "Grand Hyatt Kuala Lumpur",
              location: " Malaysia",
              price: 520,
              image: "/m1.jpg",
            },
            {
              id: 2,
              name: "NOX Kensington",
              location: "United Kingdom",
              price: 480,
              image: "/m2.jpg",
            },
          ]);
          setDataLoaded(true);
        });
    }
  }, [inView]);

  return (
    <section
  ref={sectionRef}
  className="w-full bg-white sm:px-8 relative bottom-20"
>
  <div className="max-w-screen-2xl mx-auto w-full px-10">
    <h2 className="text-4xl font-bold mb-5 text-blue-950">
      Most Visited Hotels of 2025
    </h2>

    <div className="grid md:grid-cols-3 gap-6">
      {dataLoaded
        ? hotels.map((hotel, index) => (
            <div
              key={hotel.id}
              className={`relative rounded-md overflow-hidden 
              ${
                index === 0
                  ? "md:col-span-2 h-[300px] sm:h-[380px] md:h-[420px]"
                  : "h-[300px] sm:h-[380px] md:h-[420px]"
              }`}
            >
              <Image
                src={hotel.image}
                alt={hotel.name}
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 text-white">
                <h3 className="text-xl sm:text-2xl font-semibold">
                  {hotel.name}
                </h3>

                <div className="flex items-center gap-2 text-sm mt-1">
                  <BsGeoAlt />
                  {hotel.location}
                </div>

                {/* ✅ Separate buttons */}
                {index === 0 && (
                  <button className="bg-white text-black px-5 py-2 rounded-full mt-3 text-sm  hover:bg-gray-200 transition">
                    <Link href="http://localhost:3000/Front/T1RJPQ==/grand-hyatt-kuala-lumpur">
                      View Details
                    </Link>
                  </button>
                )}

                {index === 1 && (
                  <button className="bg-white text-black px-5 py-2 rounded-full mt-3 text-sm w-[350px] hover:bg-gray-200 transition">
                    <Link href="http://localhost:3000/Front/TVRFNA==/nox-kensington---twin-studio">
                      View Details
                    </Link>
                  </button>
                )}
              </div>
            </div>
          ))
        : Array(2)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className={`bg-gray-200 animate-pulse rounded-2xl ${
                  i === 0
                    ? "md:col-span-2 h-[300px] sm:h-[380px] md:h-[420px]"
                    : "h-[300px] sm:h-[380px] md:h-[420px]"
                }`}
              ></div>
            ))}
    </div>
  </div>
</section>)}