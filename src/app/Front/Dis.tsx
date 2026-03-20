"use client";
import './resp.css';
import './main.css';
import { useEffect, useState } from "react";
import axios from "axios";

export default function Destinations() {
  const [index, setIndex] = useState(0);
  const [randomHotels, setRandomHotel] = useState<any[]>([]);
  const cardsToShow = 3;

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

  const createSlug = (name: any) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");
  };
 
 

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-5">
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
              }} >
              {randomHotels.map((dest, i) => {

                const handleNavigate = () => {
                  const payload = {
                    id: dest.id,
                    name: dest.name,
                  };
                  const encoded = encodeURIComponent(JSON.stringify(payload));
                  window.location.href = `/Front/${encoded}`;
                };
                return (
                  <div
                    key={i}
                    className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 px-3" >
                    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 h-full flex flex-col">

                      {/* Image */}
                      <div className="h-40 overflow-hidden">
                        <img
                          src={JSON.parse(dest.images)[0].thumbnail}
                          alt={dest.name}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-4 flex flex-col flex-grow">
                        <div className="flex justify-between items-center ">
                          <h3 className="text-base font-semibold text-gray-800">
                            {dest.name}
                          </h3>
                          <span className="text-yellow-500 text-sm">
                            
                            ⭐ {dest.location_rating}
                          </span>
                        </div>
                        
                        {/* <p className="text-gray-400 text-xs bottom-4 relative uppercase tracking-wide">
                          {dest.type}
                        </p>  */}
                        <div className="mt-auto">
                          <button
                            onClick={handleNavigate}
                            className="w-full bg-red-900 text-white py-2 text-sm rounded-md hover:bg-red-800 cursor-pointer transition">
                            View Details
                          </button>
                        </div>
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
            className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full w-9 h-9 flex items-center justify-center hover:bg-gray-100"
          >
            ❮
          </button>

          {/* Right Arrow */}
          <button
            onClick={next}
            className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full w-9 h-9 flex items-center justify-center hover:bg-gray-100"
          >
            ❯
          </button>

        </div>
      </div>
    </section>
  );
}