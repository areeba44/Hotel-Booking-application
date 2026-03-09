"use client";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Dis from "@/app/Front/Dis";
import Most from "@/app/Front/Most"
// import Featured from "./Featured";
import Amenities from "./Amenities";
import Our from "./Our";
import Ready from "./Ready";
import { useRef } from "react";
import {  useState,useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import './resp.css'
import './main.css'
export default function Home() {

  const [countries, setCountries] = useState([])
  const [selectedCountry, setSelectedCountry] = useState<any>(null);
  const [countryInput, setCountryInput] = useState("");
  const [cities, setCities] = useState([])
  const [selectedCity, setSelectedCity] = useState<any>(null);
  const [cityInput, setCityInput] = useState("");
  const [country, setCountry] = useState("");
  const [countriesLoading, setCountriesLoading] = useState(false);
  const [citiesLoading, setCitiesLoading] = useState(false);
  const [hotelName, setHotelName] = useState('')
  const [hotelSuggestions, setHotelSuggestions] = useState<any[]>([]);
  const [hotelLoading, setHotelLoading] = useState(false);
  const [isSelectingHotel, setIsSelectingHotel] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [count, setCount] = useState(0);
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement>(null);
  const handleSearch = () => {
    if (!selectedCountry) {
      alert("Please select the country");
      return;
    }
    const data = {
      city_name: selectedCity ? selectedCity.city_name : null,
      city_code: selectedCity ? selectedCity.city_code : null,
      country_name: selectedCountry.country_name,
      country_code: selectedCountry.country_code,
      hotel_name: hotelName ? hotelName : null
    }
    const encoded = encodeURIComponent(JSON.stringify(data))
    router.push(`/hotels?data=${encoded}`)
  };
  useEffect(() => {
    const fetchCountryData = async () => {
      setCountriesLoading(true)
      try {
        const json = JSON.stringify({});
        const response = await axios.post(`http://10.10.10.190:5001/hotels?action=get_countries`, JSON.stringify({ params: json }), {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        });
        if (response.data.success === true) {
          setCountries(response.data.data)
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setCountriesLoading(false)
      }
    };
    fetchCountryData()
  }, [])
 useEffect(() => {
    if (selectedCountry !== null) {

      if (!isSelectingHotel) {
        setCityInput("");
        setSelectedCity(null);
      }
      setIsSelectingHotel(false);
      const fetchCitiesData = async () => {
        setCitiesLoading(true);
        try {
          const json = JSON.stringify({ country_name: selectedCountry.country_name, country_code: selectedCountry.country_code });
          const response = await axios.post(`http://10.10.10.190:5001/hotels?action=get_cities_by_country`, JSON.stringify({ params: json }), {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          });
          if (response.data.success === true) {
            setCities(response.data.data)
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        } finally {
          setCitiesLoading(false);
        }
      };
      fetchCitiesData()
    }
  }, [selectedCountry])
  useEffect(() => {
    const fetchHotelSuggestions = async () => {
      if (hotelName.trim().length < 3) {
        setHotelSuggestions([]);
        return;
      }
      setHotelLoading(true);
      try {
        const json = JSON.stringify({ country_name: selectedCountry ? selectedCountry.country_name : null, country_code: selectedCountry ? selectedCountry.country_code : null, city_name: selectedCity ? selectedCity.city_name : null, city_code: selectedCity ? selectedCity.city_code : null, hotel_name: hotelName });
        const response = await axios.post(`http://10.10.10.190:5001/hotels?action=get_hotels_suggestions`, JSON.stringify({ params: json }), {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        });

        if (response.data.success === true) {
          setHotelSuggestions(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching hotel suggestions:", error);
      } finally {
        setHotelLoading(false);
      }
    };
    const delayDebounce = setTimeout(() => {
      fetchHotelSuggestions();
    }, 400);
    return () => clearTimeout(delayDebounce);
  }, [hotelName]);
  
  return (
    <>
    <Navbar />
   <div className="relative w-full h-[500px] sm:h-[650px]">
  <Image
    src="/img1.png"
    alt="room"
    fill
    priority
    className="object-cover brightness-75"/>
  {/* Overlay Content */}
  <div className="absolute inset-0 flex items-center justify-start px-6 pb-29 sm:px-12 lg:px-24">
    <div className="text-white max-w-xl text-left">
      <h1 className=" main-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
        Find Your Perfect Stay <br /> With Stay Haven</h1>
      <p className=" main-1 mt-4 text-sm sm:text-base md:text-lg text-gray-200">
        Discover hotels, resorts, and guest houses at the best prices —<br />with flexible booking options and verified reviews. </p>
    </div></div>
   <div className="  absolute left-0 w-full h-40 px-4 sm:px-6 lg:px-12 -bottom-13 flex justify-center">
      <div className="w-full max-w-5xl bg-white backdrop-blur-md rounded-2xl items-center justify-center d-flex shadow-lg border border-gray-200 p-4 sm:p-6 flex flex-col gap-4">
        {/* Inputs Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full items-end">
      {/* Hotel Input */}
          <div className="relative md:col-span-2 items-center">
            <input
              type="text"
              placeholder="Hotel"
              value={hotelName}
              onChange={(e) => setHotelName(e.target.value)}
              className="w-full text-gray-700 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-900 focus:border-red-900 transition shadow-sm"/>
            {/* Suggestions Dropdown */}
            {hotelLoading ? (
              <div className="absolute top-full mt-1 w-full bg-white border border-gray-200 rounded-md shadow-md text-gray-500 text-sm px-3 py-2">
                Loading... </div> ) : (
              hotelSuggestions.length > 0 && (
                <div className="absolute top-full mt-1 w-full bg-white border border-gray-200 rounded-md shadow-md z-50 max-h-48 overflow-y-auto">
                  {hotelSuggestions.map((hotel: any, index: number) => (
                    <div
                      key={index}
                      onClick={() => {
                        setIsSelectingHotel(true);
                        setHotelName(hotel.hotelName);
                        setCountryInput(hotel.countyName);
                        setSelectedCountry({
                          country_name: hotel.countyName,   
                          country_code: hotel.countyCode,
                        });
                        setCityInput(hotel.cityName);
                        setSelectedCity({
                          city_name: hotel.cityName,
                          city_code: hotel.cityCode,
                        });
                        setHotelSuggestions([]);
                      }}
                      className="px-3 py-2 cursor-pointer hover:bg-gray-100 transition"
                    >
                      <div className="font-medium text-gray-900">{hotel.hotelName}</div>
                      <div className="text-gray-500 text-xs">
                        {hotel.cityName}, {hotel.countyName} </div> </div>  ))}</div> ) )} </div>
             {/* Search Button */}
          <div className="flex justify-center">
            <button
              onClick={handleSearch}
              className="w-full sm:w-auto bg-red-900 hover:bg-red-800 text-white font-semibold text-lg py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-transform duration-200 active:scale-95">
              Search</button></div> </div>
      </div></div></div><div><Dis/><Most/><Amenities/><Our/><Ready/></div><Footer /> 
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

    