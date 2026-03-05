"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { FaWifi } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { TbAirConditioning } from "react-icons/tb";
import {MdLocalParking,MdPool,MdRestaurant,MdPets,MdElevator,MdEvStation
} from "react-icons/md";
import { FaDumbbell, FaSpa, FaShower, FaUtensils, FaSmokingBan, FaHotTub, FaFireAlt, FaUsers, FaCar
} from "react-icons/fa";
import { GoStarFill } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import axios from "axios";
import { useRouter } from "next/navigation";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

import './resp.css'
import './main.css'
export default function Home() {

  const [current, setCurrent] = useState(0);
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

  const router = useRouter();
  const [showSecond, setShowSecond] = useState(false);
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
  const destinations = [
  { id: 1, name: "Islamabad", location: "Pakistan", price: 150, img: "/Mask group.png" },
  { id: 2, name: "Karachi", location: "Pakistan", price: 180, img: "/Karachi.png" },
  { id: 3, name: "Lahore", location: "Pakistan", price: 190, img: "/lahore.png" },
  { id: 4, name: "Multan", location: "Pakistan", price: 170, img: "/Multan.png" },
  { id: 5, name: "Dubai", location: "UAE", price: 200, img: "/Dub.png" },
  { id: 6, name: "Sharjah", location: "UAE", price: 180, img: "/Sha.PNG" },
  { id: 7, name: "Abu Dhabi", location: "UAE", price: 210, img: "/Abu.PNG" },
  { id: 8, name: "Ajman", location: "UAE", price: 190, img: "/Ajman.png" },
];
  return (
    <>
      {/* Navbar */}

      <Navbar />

      <div className="relative w-full h-[500px] sm:h-[650px]">
  <Image
    src="/img1.png"
    alt="room"
    fill
    priority
    className="object-cover brightness-75"
  />
  {/* Overlay Content */}
  <div className="absolute inset-0 flex items-center justify-start px-6 pb-29 sm:px-12 lg:px-24">
    <div className="text-white max-w-xl text-left">
      <h1 className=" main-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
        Find Your Perfect Stay <br />
        With Stay Haven
      </h1>
      <p className=" main-1 mt-4 text-sm sm:text-base md:text-lg text-gray-200">
        Discover hotels, resorts, and guest houses at the best prices —
        <br />
        with flexible booking options and verified reviews.
      </p>
    </div>
  </div>
  <div className="  main-2  absolute left-0 w-full px-4 sm:px-8 lg:px-20 -bottom-40 sm:-bottom-32 flex justify-center">
  <div className=" w-full max-w-6xl h-[180px] bg-white backdrop-blur-md rounded-3xl shadow-2xl border border-gray-200 p-6 sm:p-8 lg:p-10 flex flex-col gap-6">
    {/* Inputs Row */}
    <div className="  grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
      {/* HOTEL */}
      <div className="relative">
        <input
          type="text"
          placeholder="Hotel"
          value={hotelName}
          onChange={(e) => {
            const value = e.target.value;
            setHotelName(value);
          }}
          className=" main-3 w-full outline-none text-gray-700 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-900 focus:border-red-900 transition shadow-sm"
        />
        <div className="  absolute z-50 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-xl max-h-60 overflow-y-auto">
          {hotelLoading ? (
            <div className="px-4 py-2 text-gray-500 text-sm">
              Loading...
            </div>
          ) : (
            hotelSuggestions.length > 0 &&
            hotelSuggestions.map((hotel: any, index: number) => (
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
                className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-sm"
              >
                <div className="font-medium text-black">
                  {hotel.hotelName}
                </div>
                <div className="text-gray-500 text-xs">
                  {hotel.cityName}, {hotel.countyName}
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* COUNTRY */}
      <div>
        <input
          type="text"
          placeholder="Country"
          value={countryInput}
          onChange={(e) => {
            const value = e.target.value;
            setCountryInput(value);

            const selected = countries.find(
              (c: any) => c.country_name === value
            );

            if (selected) setSelectedCountry(selected);
          }}
          className=" main-4 w-full outline-none text-gray-700 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-900 focus:border-red-900 transition shadow-sm"
          list="country-list"
        />

        <datalist id="country-list">
          {countriesLoading ? (
            <option value="Loading countries..." />
          ) : (
            countries.map((country: any, index: number) => (
              <option key={index} value={country.country_name} />
            ))
          )}
        </datalist>
      </div>

      {/* CITY */}
      <div className="relative">
        <input
          type="text"
          placeholder="City"
          value={cityInput}
          onChange={(e) => {
            const value = e.target.value;
            setCityInput(value);

            const selected = cities.find(
              (c: any) => c.city_name === value
            );
            if (selected) setSelectedCity(selected);
          }}
          onFocus={() => setCityInput("")}
          className=" main-5 w-full outline-none text-gray-700 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-900 focus:border-red-900 transition shadow-sm pr-10"
        />

        {/* Spinner */}
        {citiesLoading && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <div className="w-4 h-4 border-2 border-gray-300 border-t-red-900 rounded-full animate-spin"></div>
          </div>
        )}

        {/* Cities Dropdown */}
        {!citiesLoading &&
          cities.length > 0 &&
          cityInput !== undefined && (
            <div className="absolute z-50 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-xl max-h-60 overflow-y-auto">
              {cities
                .filter((city: any) =>
                  city.city_name
                    .toLowerCase()
                    .includes(cityInput.toLowerCase())
                )
                .map((city: any, index: number) => (
                  <div
                    key={index}
                    onClick={() => {
                      setCityInput(city.city_name);
                      setSelectedCity(city);
                    }}
                    className="px-4 py-2 text-black cursor-pointer hover:bg-gray-100 text-sm"
                  >
                    {city.city_name}
                  </div>
                ))}
            </div>
          )}
      </div>
    </div>

    {/* SEARCH BUTTON */}
    <div className="  s-1 flex justify-center mt-1">
  <button
    onClick={handleSearch}
    className=" s-2 w-full sm:w-1/3 lg:w-1/4 bg-red-900 hover:to-red-600
      text-white font-semibold  text-xl tracking-wide py-3  px-8 rounded shadow-md hover:shadow-xl transition-all 
      duration-300 active:scale-95 " >
    Search
  </button>
</div>
  </div>
  </div>
     </div>
      <div>
      {!showSecond && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:pt-40 transition-all duration-700">
          {/* Heading */}
          <div className=" discover main-8 flex justify-between items-center mt-19 mr-106">
            <h2 className="  text-2xl sm:text-2xl md:text-3xl font-semibold text-gray-900 text-center w-full"> 
               Discover our most popular destinations
            </h2>
          </div>
    {/* Grid */}
          <div className=" grid-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-10   justify-items-center">
            {/* CARD 1 */}
            <div className="main-9 shadow-2xl w-[340px] max-w-[310px] ml-30 mx-auto rounded-2xl overflow-hidden bg-white hover:scale-105 transition-transform duration-300">
              <Link href="">
                <Image
                  src="/Mask group.png"
                  alt="Islamabad"
                  width={320}
                  height={180}
                  className="w-full h-40 object-cover"
                />
              </Link>
              {/* Rating */}
              <div className="flex items-center justify-end gap-1 px-3 pt-2">
                <GoStarFill className="text-amber-400" />
                <p>4.9</p>
              </div>
              <div className="p-4">
                <h2 className="text-[22px] font-bold font-sans">
                  Islamabad
                </h2>
                <div className="flex items-center gap-1 text-sm text-gray-700 mt-1">
                  <IoLocationOutline />
                  <p>Islamabad, Pakistan</p>
                </div>
                <p className="text-gray-600 mt-2">Starts from</p>
                <div className="flex items-center gap-2">
                  <p className="font-bold text-[19px]">$150</p>
                  <p className="text-gray-600">/night</p>
                </div>
                <Link href="">
                  <button className="h-[38px] w-full mt-4 font-sans border rounded border-red-900 text-white bg-red-900">
                    View Detail
                  </button>
                </Link>
              </div>
            </div>
            {/* CARD 2 */}
            <div className=" main-10 shadow-2xl w-[340px] ml-37 max-w-[310px] mx-auto rounded-2xl overflow-hidden bg-white hover:scale-105 transition-transform duration-300">
              <Link href="">
                <Image
                  src="/Karachi.png"
                  alt="Karachi"
                  width={320}
                  height={180}
                  className="w-full h-40 object-cover"
                />
              </Link>
              <div className="flex items-center justify-end gap-1 px-3 pt-2">
                <GoStarFill className="text-amber-400" />
                <p>4.9</p>
              </div>
              <div className="p-4">
                <h2 className="text-[22px] font-bold font-sans">
                  Karachi
                </h2>
                <div className="flex items-center gap-1 text-sm text-gray-700 mt-1">
                  <IoLocationOutline />
                  <p>Karachi, Pakistan</p>
                </div>
                <p className="text-gray-600 mt-2">Starts from</p>
                <div className="flex items-center gap-2">
                  <p className="font-bold text-[19px]">$180</p>
                  <p className="text-gray-600">/night</p>
                </div>
                <Link href="">
                  <button className="h-[38px] w-full mt-4 font-sans border rounded border-red-900 text-white bg-red-900">
                    View Detail
                  </button>
                </Link>
              </div>
            </div>
            {/* CARD 3 */}
            <div className=" main-11 shadow-2xl w-[340px] ml-44 max-w-[310px] mx-auto rounded-2xl overflow-hidden bg-white hover:scale-105 transition-transform duration-300">
              <Link href="">
                <Image
                  src="/lahore.png"
                  alt="Lahore"
                  width={320}
                  height={180}
                  className="w-full h-40 object-cover"
                />
              </Link>
              <div className="flex items-center justify-end gap-1 px-3 pt-2">
                <GoStarFill className="text-amber-400" />
                <p>4.9</p>
              </div>
              <div className="p-4">
                <h2 className="text-[22px] font-bold font-sans">
                  Lahore
                </h2>
                <div className="flex items-center gap-1 text-sm text-gray-700 mt-1">
                  <IoLocationOutline />
                  <p>Lahore, Pakistan</p>
                </div>
                <p className="text-gray-600 mt-2">Starts from</p>
                <div className="flex items-center gap-2">
                  <p className="font-bold text-[19px]">$190</p>
                  <p className="text-gray-600">/night</p>
                </div>
                <Link href="">
                  <button className="h-[38px] w-full mt-4 font-sans border rounded border-red-900 text-white bg-red-900">
                    View Detail
                  </button>
                </Link>
              </div>
            </div>
          </div>
         <div className=" main-12 w-full flex justify-end bottom-60 relative left-1">
            <button
              onClick={() => setShowSecond(true)} // <-- explicitly true
              className=" but-right w-12 h-12 rounded-full bg-black text-white flex items-center justify-center"
            >
              <SlArrowRight />
            </button>
          </div> 
        </div>
      )}
      {/* SECOND SECTION */}
      {showSecond && (
        <div className="parent-trans transition-all duration-700 pt-50">
          <h2 className=" discover main-8  text-2xl sm:text-2xl md:text-3xl mr-[400px] font-semibold text-gray-900 text-center mb-10">
            Discover our most popular destinations
          </h2>
          <div className=" card-4 grid grid-cols-1 ml-50 relative sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center ">
            {/* CARD 4 */}
            <div className="  shadow-2xl w-[360px] max-w-[310px]  mx-auto rounded-2xl overflow-hidden bg-white hover:scale-105 transition-transform duration-300">
              <Link href="">
                <Image src="/Dub.png" alt="Dubai" width={320} height={180} className="w-full h-40 object-cover" />
              </Link>
              <div className="flex items-center justify-end gap-1 px-3 pt-2">
                <GoStarFill className="text-amber-400" />
                <p>4.9</p>
              </div>
              <div className="p-4">
                <h2 className="text-[22px] font-bold font-sans">Dubai</h2>
                <div className="flex items-center gap-1 text-sm text-gray-700 mt-1">
                  <IoLocationOutline />
                  <p>UAE</p>
                </div>
                <p className="text-gray-600 mt-2">Starts from</p>
                <div className="flex items-center gap-2">
                  <p className="font-bold text-[19px]">$190</p>
                  <p className="text-gray-600">/night</p>
                </div>
                <Link href="">
                  <button className="h-[38px] w-full mt-4 font-sans border rounded border-red-900 text-white bg-red-900">View Detail</button>
                </Link>
              </div>
            </div>
            {/* CARD 5 */}
            <div className=" shadow-2xl ml-10 w-[340px] max-w-[310px] mx-auto rounded-2xl overflow-hidden bg-white hover:scale-105 transition-transform duration-300">
              <Link href="">
                <Image src="/Sha.PNG" alt="Sharjah" width={320} height={180} className="w-full h-40 object-cover" />
              </Link>
              <div className="flex items-center justify-end gap-1 px-3 pt-2">
                <GoStarFill className="text-amber-400" />
                <p>4.9</p>
              </div>
              <div className="p-4">
                <h2 className="text-[22px] font-bold font-sans">Sharjah</h2>
                <div className="flex items-center gap-1 text-sm text-gray-700 mt-1">
                  <IoLocationOutline />
                  <p>UAE</p>
                </div>
                <p className="text-gray-600 mt-2">Starts from</p>
                <div className="flex items-center gap-2">
                  <p className="font-bold text-[19px]">$190</p>
                  <p className="text-gray-600">/night</p>
                </div>
                <Link href="">
                  <button className="h-[38px] w-full mt-4 font-sans border rounded border-red-900 text-white bg-red-900">View Detail</button>
                </Link>
              </div>
            </div>
            {/* CARD 6 */}
            <div className=" shadow-2xl ml-20 w-[340px] max-w-[310px] mx-auto rounded-2xl overflow-hidden bg-white hover:scale-105 transition-transform duration-300">
              <Link href="">
                <Image src="/Abu.PNG" alt="Abu Dhabi" width={320} height={180} className="w-full h-40 object-cover" />
              </Link>
              <div className="flex items-center justify-end gap-1 px-3 pt-2">
                <GoStarFill className="text-amber-400" />
                <p>4.9</p>
              </div>
              <div className="p-4">
                <h2 className="text-[22px] font-bold font-sans">Abu Dhabi</h2>
                <div className="flex items-center gap-1 text-sm text-gray-700 mt-1">
                  <IoLocationOutline />
                  <p>UAE</p>
                </div>
                <p className="text-gray-600 mt-2">Starts from</p>
                <div className="flex items-center gap-2">
                  <p className="font-bold text-[19px]">$190</p>
                  <p className="text-gray-600">/night</p>
                </div>
                <Link href="">
                  <button className="h-[38px] w-full mt-4 font-sans border rounded border-red-900 text-white bg-red-900">View Detail</button>
                </Link>
              </div>
            </div>
          </div>
         {/* Arrow Left */}
            <div className="  flex justify-start bottom-60 relative">
                 <button
               onClick={() => setShowSecond(false)} // explicitly false
              className=" but-left w-12 h-12 rounded-full bg-black text-white flex items-center justify-center"
               >
              <SlArrowLeft />
              </button>
             </div> </div>  )}
         <div className="px-4 md:px-8 py-12 bottom-1 relative">
          {/* Heading */}
          <div className="flex flex-col md:flex-row justify-between items-center md:items-center mb-20 text-center md:text-left">
            <h2 className=" main-13 text-2xl md:text-3xl font-sans font-semibold text-gray-900 mb-4 md:mt-1 ml-39  ">
              Most Visited Hotels of 2025
            </h2> </div>
          {/* Cards */}
          <div className="flex flex-col md:flex-row gap-6 bottom-14 relative justify-center items-center md:items-stretch">
            {/* First Card */}
            <div className=" relative w-full md:w-[610px]">
              <Image
                src="/buliding.png"
                alt="bul"
                width={610}
                height={500}
                className="h-[400px] md:h-[500px] w-full object-cover rounded-2xl"
              />
              {/* Text Overlay */}
              <div className="absolute bottom-6 left-0 w-full px-6 text-white">
                <h2 className="text-2xl md:text-4xl font-semibold text-center md:text-left">
                  The Grand Luxe
                </h2>
                <div className="flex items-center gap-2 mt-2 justify-center md:justify-start">
                  <IoLocationOutline className="text-lg" />
                  <p className="text-sm md:text-base">
                    Karachi, Pakistan
                  </p>
                </div>
                <div className="flex items-end gap-1 mt-2 justify-center md:justify-start">
                  <p className="text-xl md:text-2xl font-bold">$520</p>
                  <span className="text-sm">/night</span>
                </div>
                <button className="mt-4 w-full md:w-[500px] h-[38px] rounded-xl bg-white hover:bg-red-900 hover:text-white text-black text-sm font-medium">
                  View Detail
                </button>
              </div>
            </div>
            {/* Second Card */}
            <div className="relative w-full md:w-[350px]">
              <Image
                src="/bul2.png"
                alt="bul"
                width={350}
                height={500}
                className="h-[400px] md:h-[500px] w-full object-cover rounded-2xl"
              />
              <div className="absolute bottom-6 left-0 w-full px-6 text-white">
                <h2 className="text-2xl md:text-3xl font-sans text-center md:text-left">
                  Mountain Lodge
                </h2>
                <div className="flex items-center gap-2 mt-2 justify-center md:justify-start">
                  <IoLocationOutline className="text-lg" />
                  <p className="text-sm md:text-base">
                    Karachi, Pakistan
                  </p>
                </div>
                <div className="flex items-end gap-1 mt-2 justify-center md:justify-start">
                  <p className="text-xl md:text-2xl font-bold">$520</p>
                  <span className="text-sm">/night</span>
                </div></div>
         </div> </div> </div> </div>
          <div className="  .max-w-7xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:pt-40 relative bottom-50 transition-all duration-700">
          {/* Heading */}
          <div id='disc' className=" flex justify-between items-center mr-115">
            <h2 className=" discover main-14 text-2xl sm:text-2xl md:text-3xl font-semibold text-gray-900 text-center w-full"> 
              Featured hotels for your perfect stay
            </h2>
          </div>
          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-10   justify-items-center">
            {/* CARD 1 */}
            <div className=" .shadow-2xl img shadow-2xl w-[340px] max-w-[310px] ml-30 mx-auto rounded-2xl overflow-hidden bg-white hover:scale-105 transition-transform duration-300">
              <Link href="">
                <Image
                  src="/image (1).png"
                  alt="Islamabad"
                  width={320}
                  height={180}
                  className="w-full h-40 object-cover"
                />
              </Link>
              {/* Rating */}
              <div className="flex items-center justify-end gap-1 px-3 pt-2">
                <GoStarFill className="text-amber-400" />
                <p>4.9</p>
              </div>
              <div className="p-4">
                <h2 className="text-[22px] font-bold font-sans">
                 The Grand Luxe
                </h2>
                <div className="flex items-center gap-1 text-sm text-gray-700 mt-1">
                  <IoLocationOutline />
                  <p>Islamabad, Pakistan</p>
                </div>
                <p className="text-gray-600 mt-2">Starts from</p>
                <div className="flex items-center gap-2">
                  <p className="font-bold text-[19px]">$150</p>
                  <p className="text-gray-600">/night</p>
                </div>
                <Link href="">
                  <button className="h-[38px] w-full mt-4 font-sans border rounded border-red-900 text-white bg-red-900">
                    View Detail
                  </button>
                </Link>
              </div>
            </div>
            {/* CARD 2 */}
            <div className=" shadow-2xl w-[340px] ml-37 max-w-[310px] mx-auto rounded-2xl overflow-hidden bg-white hover:scale-105 transition-transform duration-300">
              <Link href="">
                <Image
                  src="/image (2).png"
                  alt="Karachi"
                  width={320}
                  height={180}
                  className="w-full h-40 object-cover"
                />
              </Link>
              <div className="flex items-center justify-end gap-1 px-3 pt-2">
                <GoStarFill className="text-amber-400" />
                <p>4.9</p>
              </div>
              <div className="p-4">
                <h2 className="text-[22px] font-bold font-sans">
                 Javson Hotel
                </h2>
                <div className="flex items-center gap-1 text-sm text-gray-700 mt-1">
                  <IoLocationOutline />
                  <p>Karachi, Pakistan</p>
                </div>
                <p className="text-gray-600 mt-2">Starts from</p>
                <div className="flex items-center gap-2">
                  <p className="font-bold text-[19px]">$180</p>
                  <p className="text-gray-600">/night</p>
                </div>
                <Link href="">
                  <button className="h-[38px] w-full mt-4 font-sans border rounded border-red-900 text-white bg-red-900">
                    View Detail
                  </button>
                </Link>
              </div>
            </div>
            {/* CARD 3 */}
            <div className="shadow-2xl w-[340px] ml-44 max-w-[310px] mx-auto rounded-2xl overflow-hidden bg-white hover:scale-105 transition-transform duration-300">
              <Link href="">
                <Image
                  src="/image.png"
                  alt="Lahore"
                  width={320}
                  height={180}
                  className="w-full h-40 object-cover"
                />
              </Link>
              <div className="flex items-center justify-end gap-1 px-3 pt-2">
                <GoStarFill className="text-amber-400" />
                <p>4.9</p>
              </div>
              <div className="p-4">
                <h2 className="text-[22px] font-bold font-sans">
                The Mark Hotel
                </h2>
                <div className="flex items-center gap-1 text-sm text-gray-700 mt-1">
                  <IoLocationOutline />
                  <p>Lahore, Pakistan</p>
                </div>
                <p className="text-gray-600 mt-2">Starts from</p>
                <div className="flex items-center gap-2">
                  <p className="font-bold text-[19px]">$190</p>
                  <p className="text-gray-600">/night</p>
                </div>
                <Link href="">
                  <button className=" h-[38px] w-full mt-4 font-sans border rounded border-red-900 text-white bg-red-900">
                    View Detail
                  </button></Link> </div> </div> </div> </div>
      <div className=" Ame w-full bg-red-900 py-10 px-4 md:px-10 bottom-20 relative">
    {/* Heading */}
        <h2 className=" text-2xl sm:text-3xl md:text-4xl font-semibold text-white text-center ">
          Amenities for a Comfortable Stay
        </h2>
        <p className=".bg-red-900 p text-white text-center mb-10 max-w-2xl mx-auto">
          Everything you need for a relevant and hassle-free experience
        </p>
        {/* Amenities Grid */}
       <div className=" .bg-red-900 .ml-50 grid ml-50 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 text-white">
        <div className=" .bg-red-900 .flex.items-center flex items-center gap-2">
            <FaWifi className="text-2xl" />
            <span>Wi-Fi</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCar className="text-2xl" />
            <span>Free Parking</span>
          </div>       
          <div className="flex items-center gap-2">
            <FaDumbbell className="text-2xl" />
            <span>Fitness Center</span>
          </div>
          <div className="flex items-center gap-2">
            <MdRestaurant className="text-2xl" />
            <span>Restaurant</span>
          </div>
          <div className="flex items-center gap-2">
            <TbAirConditioning className="text-2xl" />
            <span>Air-conditioned</span>
          </div>
          <div className="flex items-center gap-2">
            <FaShower className="text-2xl" />
            <span>Bathroom</span>
          </div>
          <div className="flex items-center gap-2">
            <FaSmokingBan className="text-2xl" />
            <span>Non-smoking Rooms</span>
          </div>
          <div className="flex items-center gap-2">
            <MdElevator className="text-2xl" />
            <span>Elevator</span>
          </div>
          <div className="flex items-center gap-2">
            <FaUtensils className="text-2xl" />
            <span>Kitchen/Kitchenette</span>
          </div>
          <div className="flex items-center gap-2">
            <FaHotTub className="text-2xl" />
            <span>Hot Tub</span>
          </div>
          <div className="flex items-center gap-2">
            <MdPool className="text-2xl" />
            <span>Pool</span>
          </div>
          <div className="flex items-center gap-2">
            <FaFireAlt className="text-2xl" />
            <span>Fireplace</span>
          </div>
          <div className="flex items-center gap-2">
            <MdEvStation className="text-2xl" />
            <span>EV Charging</span>
          </div>
          <div className="flex items-center gap-2">
            <FaSpa className="text-2xl" />
            <span>Spa</span>
          </div>
          <div className="flex items-center gap-2">
            <FaUsers className="text-2xl" />
            <span>Adults Only</span>
          </div>
        </div>
      </div>
 <section className=" sec px-6 pt-6">
  <div className="text-center">
    <h3 className="section.py-16 h3 text-gray-600 bottom-6 relative mr-6">Testimonials</h3>
    <h1 className=" h1 text-3xl font-semibold text-gray-900 bottom-4 mr-5 relative">
      Our Customers Say About Us
    </h1>
    <p className="section.py-16 p text-gray-500  max-w-2xl mx-auto bottom-4 relative">
      Hear from the growing community who have placed their trust in our platform.
    </p>
 </div>
  {/* Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 w-full">
     {/* Card 1 */}
    <div className=" section.py-16 .shadow-lg bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
      <div className=" section.py-16 img flex items-center gap-4 mb-4">
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="customer"
          className="w-14 h-14 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-lg">Khan</h4>
          <div className=" section.py-16 .text-yellow-500 flex text-yellow-500">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          </div>
        </div>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        Booking was quick and simple. The hotel matched exactly what was shown,
        and the experience was smooth from start to finish.
      </p>
      <Link href="">
        <button className=" section.py-16 button  section.py-16 button:hover h-[38px] w-full border rounded border-red-900 text-white bg-red-900 hover:bg-red-800 transition">
          View Detail
        </button>
      </Link>
    </div>
    {/* Card 2 */}
    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
      <div className="flex items-center gap-4 mb-4">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="customer"
          className="w-14 h-14 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-lg">Ali Raza</h4>
          <div className="  section.py-16 .text-yellow-500 flex text-yellow-500">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          </div>
        </div>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        I found great hotel options at reasonable prices. The confirmation
        was instant and the stay was exactly as described.
      </p>
      <Link href="">
        <button className="h-[38px] w-full border rounded border-red-900 text-white bg-red-900 hover:bg-red-800 transition">
          View Detail
        </button>
      </Link>
    </div>
    {/* Card 3 */}
    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
      <div className="flex items-center gap-4 mb-4">
        <img
          src="https://randomuser.me/api/portraits/women/68.jpg"
          alt="customer"
          className="w-14 h-14 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-lg">Sara Ahmed</h4>
          <div className=" section.py-16 .text-yellow-500  flex text-yellow-500">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          </div>
        </div>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        Loved how simple it was to compare hotels and amenities.
        It saved me time and made booking stress-free.
      </p>
      <Link href="">
        <button className=" w-full border mt-6 rounded border-red-900 text-white bg-red-900 hover:bg-red-800 transition">
          View Detail
        </button>
      </Link>
    </div>
  </div>
</section>

      {/* Image Section */}
      <div className=" image  relative mt-8">
        <Image
          src="/lastpic.png"
          alt="pic"
          width={1800}
          height={600}
          className="w-full h-auto object-cover "
        />
        {/* Call to Action */}
        <div className="outer ">
        <div className=" nxt   bg-red-900/90   text-[18px] w-[400px] h-[190px] rounded-2xl flex flex-col items-center justify-center text-center px-4">
          <h1 className="  h1 text-lg sm:text-2xl text-white font-medium">Ready to book your next stay?</h1>
          <p className=" p text-sm sm:text-base text-gray-300 font-extralight mt-3">
            Find exclusive deals on hotels, resorts, and guest houses worldwide.
          </p>
          <div className=" footer-button flex flex-row sm:flex-row sm:gap-4 mt-6">
            <button className=" w-[130px] h-[40px] rounded-2xl font-sans cursor-pointer border-[1px] border-2 border-white border-red-900 text-white bg-red-900">
              View Detail
            </button>
            <button className=" w-[130px] h-[40px] rounded-2xl font-sans cursor-pointer border-[1px] border-2 border-white border-red-900 text-red-900 bg-white">
              Search Hotels
            </button>
          </div>
          </div>
        </div>
      </div>
    <Footer /> 
    </>
  );
}  