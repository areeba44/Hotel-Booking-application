"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Traval from "@/app/Front/Traval"
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
const images = ["/img1.webp", "/img2.jpg", "/img3.jpg"]; 
const [current, setCurrent] = useState(0);

  // ✅ Auto Slide Change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);
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
  <div className="w-full overflow-x-hidden">
   
    <Navbar />
   
    <div className="relative w-full h-[420px] sm:h-[500px] md:h-[400px] overflow-hidden">
      
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={img}
            alt="slider"
            fill
            priority
            className="object-cover brightness-75"
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 flex items-center justify-center text-center bg-black/40">
        <div className="text-white max-w-4xl px-6 sm:px-12">
          <h1 className="text-2xl sm:text-2xl md:text-[36px] font-bold leading-tight tracking-wide -mt-22">
            <span>Find Your Perfect Stay RateCompares</span>
          </h1>
          <p className="mt-2 text-lg sm:text-xl md:text-[19px] font-serif text-gray-200">
            Find hotels, resorts, and guest houses with great prices and verified reviews.
          </p>
        </div>
      </div>

      {/* Search Box */}
<div className="absolute bottom-32 w-full px-4 sm:px-8 lg:px-16 flex justify-center">
  <div className="w-full max-w-2xl bg-white/90 backdrop-blur-lg rounded-xl shadow-lg p-4 transition-all duration-300">
    
    <div className="grid grid-cols-3 gap-3 items-end">
      
      {/* Input */}
      <div className="relative col-span-2">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          <Search size={16} />
        </span>

        <input
          type="text"
          placeholder="Search hotels..."
          value={hotelName}
          onChange={(e) => setHotelName(e.target.value)}
          className="w-[520px] pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-900 focus:border-blue-900 outline-none transition"
        />

        {/* Skeleton */}
        {loading && hotelName.length >= 3 && (
          <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-md shadow-md max-h-40 overflow-y-auto z-50 p-2 space-y-2">
            {[1,2,3].map((_, idx) => (
              <div key={idx} className="h-8 bg-gray-200 rounded animate-pulse"></div>
            ))}
          </div>
        )}

        {/* Dropdown */}
        {!loading && searchhotel?.length > 0 && hotelName && (
          <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-md shadow-md max-h-40 overflow-y-auto z-50">
            {searchhotel.map((hotel: any, index: number) => (
              <div
                key={index}
                onClick={() => setHotelName(hotel.name)}
                className="px-3 py-2 text-sm cursor-pointer hover:bg-blue-50 transition"
              >
                {hotel.name}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Button */}
      <div className="flex justify-center ml-24">
        <button
          onClick={handleSearch}
          className="w-[120px] h-[38px] text-[18px] font-serif light text-sm bg-blue-950 border border-white text-white rounded-md shadow-sm transition-all duration-300 hover:bg-blue-800"
        >
          Search
        </button>
      </div>

    </div>
 

          
</div></div>

</div>

    {/* Rest */}
    <div>
      <Traval/>
      <Dis />
      <Most />
      <Slider />
      <Amenities />
      <Ready />
    </div>


    <Footer />
  </div>
);}