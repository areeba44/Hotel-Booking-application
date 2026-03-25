"use client";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Dis from "@/app/Front/Dis";
import Slider  from "@/app/Front/Slider"
import Most from "@/app/Front/Most";
import Amenities from "./Amenities";
import Our from "./Our";
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
      else setSearchHotel([]);
    }, 500);

    return () => clearTimeout(delay);
  }, [hotelName]);

  return (
    <>
      <Navbar />

      {/* First Outer Div with Responsive Container */}
      <div className="max-w-screen-2xl mx-auto relative w-full h-[500px] sm:h-[650px] px-4">
        
        <div>
          <Image
            src="/img1.png"
            alt="room"
            fill
            priority
            className="object-cover brightness-75"
          />
          {/* Text */}
          <div className="absolute inset-0 flex items-center justify-start px-6 pb-29 sm:px-12 lg:px-24">
            <div className="text-white max-w-xl">
              <h1 className="text-3xl md:text-5xl font-bold font-family:'Inter', sans-serif leading-tight">
                Find Your Perfect Stay <br /> With Stay Haven
              </h1>
              <p className="mt-4 text-gray-200">
                Discover hotels, resorts, and guest houses at the best prices —
                with flexible booking options and verified reviews.
              </p>
            </div>
          </div>
        </div>

        {/* Search Box */}
        <div className="absolute left-0 w-full px-4 sm:px-6 lg:px-12 -bottom-10 flex justify-center">
          <div className="w-full max-w-6xl bg-white rounded-xl shadow-lg border border-white p-6">
            <div className="grid grid-cols-3 gap-2 items-end">
              
              {/* Hotel Input */}
              <div className="relative col-span-2">
                <input
                  type="text"
                  placeholder="Search Hotel"
                  value={hotelName}
                  onChange={(e) => setHotelName(e.target.value)}
                  className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-900 focus:outline-none"
                />
                {searchhotel?.length > 0 && hotelName && (
                  <div className="absolute top-full mt-1 w-full bg-white border rounded-md shadow-md max-h-48 overflow-y-auto z-50">
                    {searchhotel
                      .filter((hotel: any) =>
                        hotel.name.toLowerCase().includes(hotelName.toLowerCase())
                      )
                      .map((hotel: any, index: number) => (
                        <div
                          key={index}
                          onClick={() => setHotelName(hotel.name)}
                          className="px-3 py-2 cursor-pointer hover:bg-gray-100"
                        >
                          <div className="font-medium text-sm">{hotel.name}</div>
                        </div>
                      ))}
                  </div>
                )}
              </div>

              {/* Search Button */}
              <div className="flex justify-center">
                <button
                  onClick={handleSearch}
                  className="w-[210px] h-[36px] font-serif text-xl text-centeritem-center bg-blue-900 hover:bg-blue-800 text-white text-base px-4 py-1 rounded-md shadow"
                >
                  Search
                </button>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* Rest of the page */}
      <div>
        <Dis />
        <Slider />
        <Most />
        <Amenities />
        <Our />
        <Ready /> 
      </div>

      <Footer />
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

    