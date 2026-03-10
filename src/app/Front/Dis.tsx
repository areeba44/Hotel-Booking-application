"use client";
import './resp.css'
import './main.css'
import { useEffect, useState } from "react";
import axios from 'axios';

export default function Destinations() {
  const [index, setIndex] = useState(0);
  const [randomHotels, setRandomHotel] = useState<any[]>([]) // FIX
  const cardsToShow = 3;

  useEffect(() => {
    const FetchData = async () => {
      try {
        const res = await axios.get("http://10.10.10.136:5000/hotels/random")
        console.log("check the data", res.data)
        setRandomHotel(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    FetchData()
  }, [])

  const next = () => {
    if (index < randomHotels.length - cardsToShow) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };


  return (
    <section className="py-19 bg-white">

      {/* Container */}
      <div className="max-w-6xl mx-auto ">

        <h2 className="text-2xl md:text-4xl font-bold mb-12 text-left">
          Discover our most popular destinations
        </h2>

        <div className="relative">

          {/* Cards wrapper */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${index * (100 / cardsToShow)}%)` }}
            >
              {randomHotels.map((dest, index) => {
                return (
                  <div key={index} className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 px-4">

                    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">

                     <img
                  src={"./D2.PNG"}
                  alt={dest.name}
                   className="w-full h-40 object-cover"
/>

                      {/* Content */}
                      <div className="p-6">

                        <div className="flex justify-between items-center mb-2">
                          <h3 className="text-xl font-bold">{dest.name}</h3>
                          <span className="text-yellow-500 font-semibold">
                            ⭐ {dest.overall_rating}
                          </span>
                        </div>
                        <p className="text-gray-500 text-sm mb-3">
                          {dest.address}
                        </p>

                        <p className="text-gray-500 text-sm mb-3">
                          {dest.reviews}
                        </p>

                        <p className="text-gray-500 text-sm mb-3">
                          {dest.type}
                        </p>



                        <button className="w-full bg-red-900 text-white py-2 rounded-lg hover:bg-red-800 transition">
                          View Detail
                        </button>

                      </div>

                    </div>

                  </div>
                )
              })}
            </div>
          </div>

          {/* Left Arrow */}
          <button
            onClick={prev}
            className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100"
          >
            ❮
          </button>

          {/* Right Arrow */}
          <button
            onClick={next}
            className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100"
          >
            ❯
          </button>

        </div>
      </div>
    </section>
  );
}



