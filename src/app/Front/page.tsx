"use client";
import Image from "next/image";

import Footer from "@/components/Footer";
import Dis from "@/app/Front/Dis";
import Most from "@/app/Front/Most";
import Slider from "@/app/Front/Slider";
import Amenities from "./Amenities";
import Ready from "./Ready";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

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
      

      {/* Parent Container for Hero Section */}
      <div className="w-full flex justify-center ">
        <div className="w-full max-w-screen-2xl relative">

          {/* Hero Section */}
          <div className="relative w-full h-[420px] sm:h-[500px] md:h-[550px] px-4">

            {/* Hero Image */}
            <Image
              src="/img1.png"
              alt="room"
              fill
              priority
              className="object-cover brightness-75"
            />

            {/* Text */}
            <div className="absolute inset-0 flex items-center px-6 sm:px-12 lg:px-24">
              <div className="text-white max-w-xl">
                <h1 className="text-2xl md:text-4xl font-bold leading-tight">
                  Find Your Perfect Stay <br /> With Stay Haven
                </h1>
                <p className="mt-4 text-gray-200">
                  Discover hotels, resorts, and guest houses at the best prices —
                  with flexible booking options and verified reviews.
                </p>
              </div>
            </div>

            {/* Modern Search Box */}
            <div className="absolute left-0 w-full px-4 sm:px-6 lg:px-12 -bottom-12 flex justify-center">
              <div className="w-full max-w-5xl bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-200 p-5 transition-all duration-300">
                <div className="grid grid-cols-3 gap-4 items-end">

                  {/* Input */}
                  <div className="relative col-span-2">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                      🔍
                    </span>
                    <input
                      type="text"
                      placeholder="Search hotels, resorts..."
                      value={hotelName}
                      onChange={(e) => setHotelName(e.target.value)}
                      className="w-full pl-10 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-blue-900 outline-none transition"
                    />

                    {/* Loading */}
                    {loading && (
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">
                        Loading...
                      </div>
                    )}

                    {/* Dropdown */}
                    {searchhotel?.length > 0 && hotelName && (
                      <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-52 overflow-y-auto z-50 animate-fadeIn">
                        {searchhotel
                          .filter((hotel: any) =>
                            hotel.name
                              .toLowerCase()
                              .includes(hotelName.toLowerCase())
                          )
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

                  {/* Button */}
                  <div className="flex justify-center">
                    <button
                      onClick={handleSearch}
                      className="w-full h-[40px] bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 text-white font-serif rounded-lg shadow-md transition-all duration-300 hover:scale-[1.05]"
                    >
                      Search
                    </button>
                  </div>

                </div>
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

 
    </>
  );
}





    
    //    <div>
    //     <input
    //       type="text"
    //       placeholder="Country"
    //       value={countryInput}
    //       onChange={(e) => {
    //         const value = e.target.value;
    //         setCountryInput(value);

    //         const selected = countries.find(
    //           (c: any) => c.country_name === value
    //         );

    //         if (selected) setSelectedCountry(selected);
    //       }}
    //       className=" main-4 w-full outline-none text-gray-700 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-900 focus:border-red-900 transition shadow-sm"
    //       list="country-list"
    //     />

    //     <datalist id="country-list">
    //       {countriesLoading ? (
    //         <option value="Loading countries..." />
    //       ) : (
    //         countries.map((country: any, index: number) => (
    //           <option key={index} value={country.country_name} />
    //         ))
    //       )}
    //     </datalist>
    //   </div>

      
    //   <div className="relative">
    //     <input
    //       type="text"
    //       placeholder="City"
    //       value={cityInput}
    //       onChange={(e) => {
    //         const value = e.target.value;
    //         setCityInput(value);

    //         const selected = cities.find(
    //           (c: any) => c.city_name === value
    //         );
    //         if (selected) setSelectedCity(selected);
    //       }}
    //       onFocus={() => setCityInput("")}
    //       className=" main-5 w-full outline-none text-gray-700 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-900 focus:border-red-900 transition shadow-sm pr-10"
    //     />

    //     {citiesLoading && (
    //       <div className="absolute right-3 top-1/2 -translate-y-1/2">
    //         <div className="w-4 h-4 border-2 border-gray-300 border-t-red-900 rounded-full animate-spin"></div>
    //       </div>
    //     )}

        
    //     {!citiesLoading &&
    //       cities.length > 0 &&
    //       cityInput !== undefined && (
    //         <div className="absolute z-50 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-xl max-h-60 overflow-y-auto">
    //           {cities
    //             .filter((city: any) =>
    //               city.city_name
    //                 .toLowerCase()
    //                 .includes(cityInput.toLowerCase())
    //             )
    //             .map((city: any, index: number) => (
    //               <div
    //                 key={index}
    //                 onClick={() => {
    //                   setCityInput(city.city_name);
    //                   setSelectedCity(city);
    //                 }}
    //                 className="px-4 py-2 text-black cursor-pointer hover:bg-gray-100 text-sm"
    //               >
    //                 {city.city_name}
    //               </div>
    //             ))}
    //         </div>
    //       )}
    //   </div>
    // </div> */}

    