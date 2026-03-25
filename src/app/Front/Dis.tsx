"use client";
import './resp.css';
import './main.css';
import Link from 'next/link';
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Destinations() {
  const [index, setIndex] = useState(0);
  const [randomHotels, setRandomHotel] = useState<any[]>([]);
  const cardsToShow = 3; // initially 3 cards visible

  useEffect(() => {
    const FetchData = async () => {
      try {
        const res = await axios.get("https://hotel-booking-backend-wajid.vercel.app/hotels/random");
        setRandomHotel(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    FetchData();
  }, []);

  const next = () => {
    if (index < randomHotels.length - cardsToShow) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-screen-2xl mx-auto px-5">

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold mb-10 px-3 text-gray-800">
          Discover Popular Destinations
        </h2>

        <div className="relative">

          {/* Slider */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${index * (100 / cardsToShow)}%)`,
              }}
            >
              {randomHotels.map((dest, i) => {

                const handleNavigate = () => {
                  const payload = {
                    id: dest.id,
                    name: dest.name,
                  };
                  const encoded = encodeURIComponent(JSON.stringify(payload));
                  window.location.href = `/Front/${encoded}`;
                };

                // Parse images & ratings JSON safely
                const images = dest.images ? JSON.parse(dest.images) : [];
                const ratingImg = dest.ratings ? JSON.parse(dest.ratings) : null;

                return (
                  <div
                    key={i}
                  className="flex-shrink-0 basis-1/3 max-w-[33.333%] px-3 flex" // 3 cards visible
                  >
                    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 h-[360px] w-full flex flex-col relative">

                      {/* Image */}
                      {images[0]?.thumbnail && (
                        <div className="h-40 overflow-hidden flex-shrink-0">
                          <img
                            src={images[0].thumbnail}
                            alt={dest.name}
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                          />
                        </div>
                      )}

                      {/* Rating Image */}
                      {ratingImg?.thumbnail && (
                        <div className="absolute top-3 left-3 w-10 h-10">
                          <img
                            src={ratingImg.thumbnail}
                            alt="Rating"
                            className="w-full h-full object-cover rounded-full shadow-md"
                          />
                        </div>
                      )}

                      {/* Content */}
                      <div className="p-4 flex flex-col flex-grow justify-between">
                        <div className="flex justify-between items-center">
                          <h3 className="text-base font-semibold text-gray-800">
                            {dest.name}
                          </h3>
                          <span className="text-yellow-500 text-sm mr-7">
                            ⭐ {dest.location_rating}
                          </span>
                        </div>

                        {/* Address */}
                        {dest.address && (
                          <p className="text-gray-600 text-xs mt-2">
                            📍 {dest.address}
                          </p>
                        )}

                        {/* Truncated Description */}
                        <div className="text-black text-sm mt-2">
                          {dest.description.length > 100
                            ? dest.description.slice(0, 100) + "..."
                            : dest.description}
                        </div>

                        {/* Check-in Time */}
                        {dest.check_in_time && (
                          <p className="text-gray-500 text-xs mt-1">
                            Check-in: {dest.check_in_time}
                          </p>
                        )}

                        <button
                          onClick={handleNavigate}
                          className="w-full cursor-pointer bg-blue-900 text-white py-2 text-sm rounded-md hover:bg-blue-800 transition mt-2"
                        >
                          View Details
                        </button>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Left Arrow */}
          <button
            onClick={prev}
            className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full w-9 h-9 flex items-center justify-center hover:bg-gray-100 z-10"
          >
            ❮
          </button>

          {/* Right Arrow */}
          <button
            onClick={next}
            className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full w-9 h-9 flex items-center justify-center hover:bg-gray-100 z-10"
          >
            ❯
          </button>

        </div>
      </div>
    </section>
  );
}