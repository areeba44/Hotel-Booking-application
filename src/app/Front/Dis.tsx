"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function Destinations() {
  const [index, setIndex] = useState(0);
  const [randomHotels, setRandomHotel] = useState<any[]>([]);
  const cardsToShow = 3;

  useEffect(() => {
    const FetchData = async () => {
      try {
        const res = await axios.get(
          "https://hotel-booking-backend-wajid.vercel.app/hotels/random"
        );
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
    <section className="py-20 bg-white">
      <div className="max-w-screen-2xl mx-auto px-5">

        <h2 className="text-3xl font-bold mb-12 px-3 text-gray-800">
          Discover Popular Destinations
        </h2>

        <div className="relative">

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

                // Safe parsing
                let images: any[] = [];
                let ratingImg: any = null;
                let pricesArray: any[] = [];

                try {
                  images = dest.images ? JSON.parse(dest.images) : [];
                } catch { }

                try {
                  ratingImg = dest.ratings ? JSON.parse(dest.ratings) : null;
                } catch { }

                try {
                  pricesArray = dest.prices ? JSON.parse(dest.prices) : [];
                } catch { }

                const finalPrice =
                  pricesArray.length > 0
                    ? Math.min(
                      ...pricesArray.map(
                        (p: any) =>
                          p?.rate_per_night?.extracted_lowest || Infinity
                      )
                    )
                    : null;

                // Truncate hotel name if too long
                const displayName =
                  dest.name.length > 25
                    ? dest.name.slice(0, 25) + "..."
                    : dest.name;

                return (
                  <div
                    key={i}
                    className="flex-shrink-0 basis-1/3 max-w-[33.333%] px-4 flex"
                  >
                    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 h-[420px] w-full flex flex-col relative overflow-hidden">

                      {/* Image */}
                      {images[0]?.thumbnail && (
                        <div className="h-52 overflow-hidden">
                          <img
                            src={images[0].thumbnail}
                            alt={dest.name}
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                          />
                        </div>
                      )}

                      {/* Rating */}
                      {ratingImg?.thumbnail && (
                        <div className="absolute top-4 left-4 w-12 h-12">
                          <img
                            src={ratingImg.thumbnail}
                            alt="Rating"
                            className="w-full h-full object-cover rounded-full shadow-lg"
                          />
                        </div>
                      )}

                      {/* Price */}
                      <div className="absolute top-4 right-4 z-10 bg-blue-900 text-white text-lg font-mono px-3 py-1 rounded-full">
                        {finalPrice ? `Rs ${finalPrice}` : "N/A"}
                      </div>

                      {/* Content */}
                      <div className="p-5 flex flex-col flex-grow justify-between">

                        <div>
                          <div className="flex justify-between items-center">
                            <h3 className="text-lg font-semibold text-gray-800">
                              {displayName}
                            </h3>

                            <span className="text-blue-900 font-bold -text-sm">
                              ⭐ {dest.location_rating}
                            </span>
                          </div>
                          {dest.hotel_class && (
                            <p className="text-gray-500 text-xs mt-1">
                              {dest.hotel_class}
                            </p>
                          )}
                          {dest.address && (
                            <p className="text-gray-600 text-sm mt-2">
                              📍 {dest.address}
                            </p>
                          )}

                          <p className="text-gray-700 text-sm mt-2">
                            {dest.description.length > 90
                              ? dest.description.slice(0, 90) + "..."
                              : dest.description}
                          </p>
                        </div>

                        {/* Check-in / Check-out Flex */}
                        <div className="flex justify-between text-gray-600 text-xs mt-3">
                          {dest.check_in_time && (
                            <p>Check-in: {dest.check_in_time}</p>
                          )}
                          {dest.check_out_time && (
                            <p>Check-out: {dest.check_out_time}</p>
                          )}
                        </div>

                        <button
                          onClick={handleNavigate}
                          className="w-full cursor-pointer bg-blue-900 text-white py-2.5 text-sm rounded-lg hover:bg-blue-800 transition mt-3"
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

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute -left-5 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100 z-10"
          >
            ❮
          </button>

          <button
            onClick={next}
            className="absolute -right-5 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100 z-10"
          >
            ❯
          </button>

        </div>
      </div>
    </section>
  );
}