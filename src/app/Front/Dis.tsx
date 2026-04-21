"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Destinations() {
  const [randomHotels, setRandomHotel] = useState<any[]>([]);
  const [index, setIndex] = useState(0);
  const cardsToShow = 4; // 4 cards on screen
  const router = useRouter();

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

  // Slider controls
  const next = () => {
    if (index < randomHotels.length - cardsToShow) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  // Utility: slugify hotel name
  const slugify = (text: string) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");
  };

  const isBase64 = (str: string) => {
    try {
      return atob(atob(str)) === str;
    } catch {
      return false;
    }
  };
  const handleNavigate = (dest: any) => {
    let decodedId = dest?.id;
    const slug = slugify(dest?.name);
    router.push(`/Front/${btoa(btoa(decodedId))}/${slug}`);
  };

  return (
    <section className="py-2 px-12 bg-white ">
      <div className="max-w-screen-2xl mx-auto px-6">
        <h2 className="text-4xl font-semibold mb-5 ml-2 text-blue-950">
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
                    <div key={i} className="flex-shrink-0 basis-1/4 max-w-[25%] px-3 h-[420px]">
                      <div className="bg-white shadow-md h-[340px] animate-pulse overflow-hidden">
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
                    try {
                      images = dest.images ? JSON.parse(dest.images) : [];
                    } catch {}
                    try {
                      ratingImg = dest.ratings ? JSON.parse(dest.ratings) : null;
                    } catch {}

                    const displayName =
                      dest.name.length > 22 ? dest.name.slice(0, 22) + "..." : dest.name;

                    // Decode ID if Base64
                    const decodedId = isBase64(dest.id) ? atob(dest.id) : dest.id;
                    const slug = slugify(dest.name);

                    return (
                      <div
                        key={i}
                        className="flex-shrink-0 basis-1/4 max-w-[25%] px-3 h-[390px]"
                      >
                        <div
                          className="bg-white shadow-md hover:shadow-lg rounded-md transition duration-300 flex flex-col relative overflow-hidden cursor-pointer h-[280px]"
                          onClick={() => handleNavigate(dest)}
                        >
                          {images[0]?.thumbnail && (
                            <div className="h-36 overflow-hidden">
                              <img
                                src={"L1.jpg"}
                                alt={dest.name}
                                className="w-full h-full object-cover hover:scale-105 transition"
                              />
                            </div>
                          )}

                          {ratingImg?.thumbnail && (
                            <div className="absolute top-3 left-3 w-12 h-12">
                              <img
                                src={ratingImg.thumbnail}
                                alt="Rating"
                                className="w-full h-full shadow"
                              />
                            </div>
                          )}

                          {/* Hotel Name */}
                          <div className="flex justify-between items-start mt-2 ml-2">
                            <Link href={`/Front/${btoa(btoa(decodedId))}/${slug}`}>
                              <span className="text-[16px] relative font-bold text-blue-950 hover:text-blue-900 transition">
                                {displayName}
                              </span>
                            </Link>
                          </div>

                          {/* Address */}
                          <p className="text-xs ml-2 text-gray-700 mt-1 h-[32px] overflow-hidden">
                            {dest.address?.length > 70
                              ? dest.address.slice(0, 70) + "..."
                              : dest.address}
                          </p>

                          {/* Stars + Reviews - Single Line Flex */}
                          <div className="mt-2 flex items-center ml-2 space-x-2">
                            <span className="bg-blue-950 text-white rounded-es-md text-sm font-medium px-3 py-[4px] rounded">
                              {dest.location_rating}
                            </span>
                            <span className="flex text-[10px]">
                              {[...Array(5)].map((_, i) => (
                                <svg
                                  key={i}
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  className="w-4 h-4 text-yellow-500"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M12 17.4l4.2 2.2-1.6-5.4 4.4-3.6h-5.4L12 5l-2.6 5.6H4l4.4 3.6-1.6 5.4L12 17.4z" />
                                </svg>
                              ))}
                            </span>
                            {dest.reviews && (
                              <p className="text-sm text-gray-600 font-medium">
                                reviews <span className="text-gray-900">({dest.reviews})</span>
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
            </div>
          </div>

          {/* Slider Buttons */}
          <button
            onClick={prev}
            className="bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100 absolute left-[-35px] bottom-1/2 -translate-y-1/2"
          >
            ❮
          </button>

          <button
            onClick={next}
            className="bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100 absolute right-[-35px] bottom-1/2 -translate-y-1/2"
          >
            ❯
          </button>
        </div>
      </div>
    </section>
  );
}