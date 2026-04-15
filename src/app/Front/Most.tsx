"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { BsGeoAlt } from "react-icons/bs";
import Link from "next/link";

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

  // Observer
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

  // Fetch
  useEffect(() => {
    if (inView) {
      fetch("http://localhost:3000/api/hotels")
        .then((res) => res.json())
        .then((data) => {
          setHotels(data);
          setDataLoaded(true);
        })
        .catch(() => {
          setHotels([
            {
              id: 1,
              name: "Grand Hyatt Kuala Lumpur",
              location: "Malaysia",
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
      className="w-full bg-white px-4 sm:px-8 relative bottom-19"
    >
      <div className="max-w-screen-2xl mx-auto w-full px-4 md:px-10">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-blue-950 tracking-tight">
          Most Visited Hotels of 2025
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {dataLoaded
            ? hotels.map((hotel, index) => (
                <div
                  key={hotel.id}
                  className={`group relative rounded-md overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 ${
                    index === 0
                      ? "md:col-span-2 h-[300px] sm:h-[380px] md:h-[420px]"
                      : "h-[300px] sm:h-[380px] md:h-[420px]"
                  }`}
                >
                  {/* Image */}
                  <Image
                    src={hotel.image}
                    alt={hotel.name}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-700"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                  {/* Content */}
                  <div className="absolute bottom-0 p-6 text-white w-full">
                    <h3 className="text-xl sm:text-2xl font-semibold mb-1">
                      {hotel.name}
                    </h3>

                    <div className="flex items-center gap-2 text-sm text-gray-200">
                      <BsGeoAlt />
                      {hotel.location}
                    </div>

                    {/* Price */}
                    <p className="mt-2 text-sm text-gray-300">
                      From{" "}
                      <span className="text-white font-semibold">
                        ${hotel.price}
                      </span>{" "}
                      / night
                    </p>

                    {/* Button */}
                    <div className="mt-4">
                      {index === 0 && (
                        <Link href="http://localhost:3000/Front/TVRFeQ==/zedwell-greenwich">
                          <button className="bg-white text-blue-950 cursor-pointer font-semibold px-5 py-2 rounded-full text-sm hover:bg-gray-200 transition-all duration-300 shadow-md">
                            View Details
                          </button>
                        </Link>
                      )}

                      {index === 1 && (
                        <Link href="http://localhost:3000/Front/TVRFNA==/nox-kensington---twin-studio">
                          <button className="bg-white text-blue-950 font-semibold px-5 py-2 rounded-full text-sm hover:bg-gray-200 transition-all duration-300 shadow-md">
                            View Details
                          </button>
                        </Link>
                      )}
                    </div>
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
    </section>
  );
}