"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Dis from "@/app/Front/Dis";
import Most from "@/app/Front/Most";
import Slider from "@/app/Front/Slider";
import Amenities from "./Amenities";
import Ready from "./Ready";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";   

export default function Home() {
  const [hotelName, setHotelName] = useState("");
  const [searchhotel, setSearchHotel] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSearch = () => {
    const data = { hotel_name: hotelName ? hotelName : null };
    const encoded = encodeURIComponent(JSON.stringify(data));
    router.push(`/hotels?data=${encoded}`);
  };

  useEffect(() => {
    if (hotelName.length < 3) {
      setSearchHotel([]);
      return;
    }

    const FetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `https://hotel-booking-backend-wajid.vercel.app/search-hotels/${hotelName}`
        );
        setSearchHotel(res.data);
      } catch (error) {
        console.log(error);
        setSearchHotel([]);
      } finally {
        setLoading(false);
      }
    };

    const delay = setTimeout(() => {
      if (hotelName.length >= 3) FetchData();
    }, 500);

    return () => clearTimeout(delay);
  }, [hotelName]);

  return (
    <>
   
       <Navbar />
      {/* Hero Section with Full-Screen Image */}
      <div className="relative max-w-screen-2xl mx-auto  w-full h-[420px] sm:h-[500px] md:h-[550px]">
        <div className="relative w-full h-full">
          <Image
            src="/img1.png"
            alt="room"
            fill
            priority
            className="object-cover brightness-65 transition-all duration-500 ease-in-out"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-center bg-black/40">
          <div className="text-white max-w-4xl px-6 sm:px-12">
            <h1 className="text-3xl sm:text-4xl md:text-[43px] font-bold leading-tight tracking-wide animate__animated animate__fadeIn animate__delay-1s -mt-22">
              Find Your Perfect Stay  RateCompares
            </h1>
            <p className="mt-4 text-lg sm:text-xl md:text-xl font-serif text-gray-200 animate__animated animate__fadeIn animate__delay-2s">
            Find hotels, resorts, and guest houses with great prices and verified reviews.
            </p>
          </div>
        </div>

        {/* Search Box */}
        <div className="absolute bottom-39 w-full px-6 sm:px-12 lg:px-24 flex justify-center">
          <div className="w-full max-w-3xl bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl p-5 transition-all duration-300">
            <div className="grid grid-cols-3 gap-4 items-end">
              {/* Input */}
              <div className="relative col-span-2">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <Search size={19} />
                </span>
                <input
                  type="text"
                  placeholder="Search hotels, resorts..."
                  value={hotelName}
                  onChange={(e) => setHotelName (e.target.value)}
                  className=" w-[590px] pl-10 pr-3 py-3  text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-blue-900 outline-none transition"
                />

                {/* Skeleton Loading */}
                {loading && hotelName.length >= 3 && (
                  <div className="absolute top-full mt-2 max-w-screen-2xl bg-white border border-gray-200 rounded-lg shadow-lg max-h-52 overflow-y-auto z-50 p-2 space-y-2">
                    {[1,2,3,4,5].map((_, idx) => (
                      <div
                        key={idx}
                        className="h-10 bg-gray-200 rounded-md animate-pulse"
                      ></div>
                    ))}
                  </div>
                )}

                {/* Dropdown with Search Results */}
                {!loading && searchhotel?.length > 0 && hotelName && (
                  <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-52 overflow-y-auto z-50 animate__animated animate__fadeIn">
                    {searchhotel
                      .map((hotel: any, index: number) => (
                        <div
                          key={index}
                          onClick={() => setHotelName(hotel.name)}
                          className="px-4 py-2 cursor-pointer hover:bg-blue-50 transition"
                        >
                          <div className="font-medium text-sm text-gray-700">
                            {hotel.name}
                          </div>
                        </div>
                      ))}
                  </div>
                )}
              </div>

              {/* Search Button */}
              <div className="flex w-[130px] ml-27 justify-center">
                <button
                  onClick={handleSearch}
                  className="w-full text-lg h-[45px] bg-gradient-to-r bg-blue-900/100 text-white font-serif rounded-lg shadow-md transition-all duration-300 hover:scale-[1.05] hover:bg-blue-800"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Rest of Page */}
      <div>
        <Dis />
        <Most />
        <Slider />
        <Amenities />
        <Ready />
      </div>

      <Footer />
    </>
  );
}
























    
    