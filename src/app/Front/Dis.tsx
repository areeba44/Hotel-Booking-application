"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { HiOutlineHeart } from "react-icons/hi";

export default function Destinations() {
  const [randomHotels, setRandomHotel] = useState<any[]>([]);
  const [index, setIndex] = useState(0);
  const cardsToShow = 4; // 4 cards on screen

  useEffect(() => {
    const FetchData = async () => {
      try {
        const res = await axios.get(
          "https://hotel-booking-backend-wajid.vercel.app/hotels/random"
        );
        if (res) setRandomHotel(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    FetchData();
  }, []);

  const next = () => {
    if (index < randomHotels.length - cardsToShow) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  const slugify = (text: string) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");
  };
  const isBase64 = (str: string) => {
    try {
      return btoa(atob(str)) === str;
    } catch {
      return false;
    }
  };

  const handleNavigate = (dest: any) => {
    let decodedId = dest?.id;

    if (isBase64(dest?.id)) {
      decodedId = atob(dest.id);
    }

    const payload = {
      id: decodedId,
      name: slugify(dest?.name),
    };

    const encoded = encodeURIComponent(JSON.stringify(payload));
    window.location.href = `/Front/${encoded}`;
  };
  return (
    <section className="py-16 px-12 bg-white">
      <div className="max-w-screen-2xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">
          Discover Popular Destinations
        </h2>

        <div className="relative">
          {/* Slider */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${index * (100 / cardsToShow)}%)` }}
            >
              {randomHotels.length === 0
                ? Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="flex-shrink-0 basis-1/4 max-w-[25%] px-3">
                    <div className="bg-white shadow-md h-[340px]  animate-pulse overflow-hidden">
                      <div className="h-36 bg-gray-300"></div>
                      <div className="p-6 space-y-3">
                        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                        <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                        <div className="h-9 bg-gray-300 rounded mt-4"></div>
                      </div>
                    </div>
                  </div>
                ))
                : randomHotels.map((dest, i) => {
                  let images: any[] = [];
                  let ratingImg: any = null;

                  try { images = dest.images ? JSON.parse(dest.images) : []; } catch { }
                  try { ratingImg = dest.ratings ? JSON.parse(dest.ratings) : null; } catch { }

                  const displayName = dest.name.length > 22
                    ? dest.name.slice(0, 22) + "..."
                    : dest.name;

                  return (
                    <div key={i} className="flex-shrink-0 basis-1/4 max-w-[25%] px-3 h-[290px]">
                      <div className="bg-white  shadow-md hover:shadow-lg transition duration-300 flex flex-col relative overflow-hidden">

                        {/* Image */}
                        {images[0]?.thumbnail && (
                          <div className="h-36 overflow-hidden">
                            <img
                              src={"I1.PNG"} // Or use images[0].thumbnail if available
                              alt={dest.name}
                              className="w-full h-full object-cover hover:scale-105 transition"
                            />
                          </div>
                        )}

                        {/* Rating */}
                        {ratingImg?.thumbnail && (
                          <div className="absolute top-3 left-3 w-12 h-12">
                            <img
                              src={ratingImg.thumbnail}
                              alt="Rating"
                              className="w-full h-full shadow"
                            />
                          </div>
                        )}

                        {/* Heart Icon */}
                        <div className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow cursor-pointer hover:bg-red-100 transition">
                          <HiOutlineHeart className="text-gray-500 w-5 h-5" />
                        </div>

                        {/* Content */}
                        <div className="p-2 flex flex-col justify-between flex-grow">
                          <div>
                            {/* Hotel Name with Slug Link */}
                            <div className="flex justify-between items-start cursor-pointer">
                              <h3
                                onClick={() => handleNavigate(dest)} // Now using the correct function and passing dest
                                className="text-base cursor-pointer font-bold hover:text-blue-900 transition"
                              >
                                {displayName}
                              </h3>
                            </div>

                            {/* Address */}
                            <p className="text-xs text-gray-700 mt-2 h-[32px] overflow-hidden">
                              {dest.address && dest.address.length > 70
                                ? dest.address.slice(0, 70) + "..."
                                : dest.address}
                            </p>

                            {/* Stars + Reviews */}
                            <div className="mt-2 flex flex-col">
                              <div className="flex items-center space-x-2">
                                <span className="bg-blue-900 text-white text-sm font-medium px-3 py-[4px] rounded">
                                  {dest.location_rating}
                                </span>
                                <span className="text-blue-900 text-[12px] font-bold">⭐⭐⭐⭐</span>
                              </div>

                              {dest.reviews && (
                                <div className="mt-2 flex items-center space-x-2 max-h-12 overflow-hidden">
                                  {/* Star Icon */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="w-4 h-4 text-yellow-500"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M12 17.4l4.2 2.2-1.6-5.4 4.4-3.6h-5.4L12 5l-2.6 5.6H4l4.4 3.6-1.6 5.4L12 17.4z"
                                    />
                                  </svg>

                                  {/* Reviews Text */}
                                  <p className="text-sm text-gray-600 font-medium">
                                    <span className="font-bold text-gray-900">({dest.reviews})</span> Reviews
                                  </p>
                                </div>
                              )}
                            </div>

                          </div>
                        </div>

                      </div>
                    </div>
                  );
                })}
            </div>
          </div>

          <div className="relative">
            {/* Slider content */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${index * (100 / cardsToShow)}%)` }}
              >
                {/* Your slider content goes here */}
              </div>
            </div>

            {/* Slider Buttons */}
            <div className="absolute inset-0 flex items-center justify-between z-10">
              {/* First Button (Left) */}
              <button
                onClick={prev}
                className="bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100 absolute left-[-35px] z-20 bottom-33"
              >
                ❮
              </button>

              {/* Second Button (Right) */}
              <button
                onClick={next}
                className="bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100 absolute right-[-35px] z-20 bottom-33"
              >
                ❯
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}