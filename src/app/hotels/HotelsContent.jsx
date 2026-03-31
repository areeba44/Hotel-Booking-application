"use client";

import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import { FaDollarSign, FaStar, FaBed, FaSnowflake, FaParking, FaSmokingBan, FaConciergeBell, FaUtensils, FaCoffee, FaWheelchair, FaPlaneDeparture, FaWifi, FaCar } from "react-icons/fa";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { useSearchParams } from 'next/navigation';
import axios from "axios";

export default function HotelsContent() {
  const searchParams = useSearchParams()
  const dataParam = searchParams.get('data')
  const [allFiltersOpen, setAllFiltersOpen] = useState(false);
  const [priceOpen, setPriceOpen] = useState(false);
  const [freebiesOpen, setFreebiesOpen] = useState(false);
  const [amenitiesOpen, setAmenitiesOpen] = useState(false);
  const [hotels, setHotels] = useState([])
 
  useEffect(() => {
    if (dataParam) {
      const parsedData = JSON.parse(decodeURIComponent(dataParam));
      if (parsedData) {
        const fetchHotelsData = async () => {
          try {
            const response = await axios.get(`https://hotel-booking-backend-wajid.vercel.app/search-hotels/${parsedData.hotel_name}`);
            setHotels(response.data);
          } catch (error) {
            console.error("Error fetching hotel data:", error);
          }
        };
        fetchHotelsData();
      }
    }
  }, [dataParam])

  const allFilters = ["Price", "Freebies", "Amenities", "Stars", "Review score", "Type of stay", "Location", "Hotel chain", "Style", "Property name", "Booking sites"];
  const priceOptions = ["Nightly", "Including fees"];
  const amenities = [
    { name: "General", icon: <FaBed /> },
    { name: "Air-conditioned", icon: <FaSnowflake /> },
    { name: "Parking", icon: <FaParking /> },
    { name: "Non-smoking rooms", icon: <FaSmokingBan /> },
    { name: "24hr front desk", icon: <FaConciergeBell /> },
    { name: "Kitchen/Kitchenette", icon: <FaUtensils /> },
    { name: "Terrace/Patio", icon: <FaCoffee /> },
    { name: "Hairdryer", icon: <FaUtensils /> },
    { name: "Restaurant", icon: <FaUtensils /> },
    { name: "Towels", icon: <FaBed /> },
    { name: "Elevator", icon: <FaBed /> },
    { name: "Increased accessibility", icon: <FaWheelchair /> },
  ];
  const freebies = [
    { name: "Free cancellation", icon: <FaConciergeBell /> },
    { name: "Free internet", icon: <FaWifi /> },
    { name: "Free parking", icon: <FaCar /> },
    { name: "Free breakfast", icon: <FaCoffee /> },
    { name: "Free airport shuttle", icon: <FaPlaneDeparture /> },
    { name: "All-inclusive", icon: <FaUtensils /> },
  ];

  const handleNavigate = (hotel) => {
    const payload = { id: hotel.id, name: hotel.name };
    const encoded = encodeURIComponent(JSON.stringify(payload));
    window.location.href = `/Front/${encoded}`;
  };

  return (
    // 🔹 OUTERMOST PARENT (FULL WIDTH JAISA NAVBAR/FOOTER)
    <div className="w-full max-w-screen-2xl mx-auto">

      {/* NAVBAR */}
      <Navbar />

      {/* AVAILABLE HOTELS HEADING */}
      <div className="mt-7 px-6 font-bold">
        <h1 className="text-3xl mb-4 ml-4 font-sans">Available Hotels</h1>

        {/* FILTER BUTTONS */}
<div className="w-full">
  <div className="flex flex-wrap gap-3 mb-6 w-full overflow-x-auto md:overflow-visible">

    {/* All Filters */}
    <div className="relative inline-block">
      <button
        onClick={() => setAllFiltersOpen(!allFiltersOpen)}
        className="bg-white cursor-pointer rounded-lg w-39 h-10 font-bold border-0 shadow px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <HiAdjustmentsHorizontal className="w-5 h-5" />
          All filters
        </div>
        <span className="ml-2 text-gray-500">{allFiltersOpen ? "▲" : "▼"}</span>
      </button>

      {allFiltersOpen && (
        <div className="absolute mt-2 bg-white shadow-lg rounded-xl w-60 z-50 border border-gray-200 max-h-72 overflow-y-auto">
          <ul className="flex flex-col">
            {allFilters.map((filter, index) => (
              <li key={index} className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700 text-sm">
                {filter}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>

    {/* Price */}
    <div className="relative inline-block">
      <button
        onClick={() => setPriceOpen(!priceOpen)}
        className="bg-white cursor-pointer rounded-lg w-26 h-10 font-bold border-0 shadow px-4 flex items-center justify-between"
      >
        Price
        <span className="ml-2 text-gray-500">{priceOpen ? "▲" : "▼"}</span>
      </button>

      {priceOpen && (
        <div className="absolute mt-2 bg-white shadow-lg rounded-xl w-40 z-50 border border-gray-200">
          <ul className="flex flex-col">
            {priceOptions.map((item, index) => (
              <li key={index} className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700 text-sm flex items-center gap-2">
                <FaDollarSign /> {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>

    {/* Free Breakfast */}
    <button className="bg-white cursor-pointer rounded-lg w-37 h-10 font-bold border-0 shadow px-4 flex items-center justify-between">
      Free Breakfast
    </button>

    {/* Star */}
    <button className="bg-white cursor-pointer rounded-lg w-23 h-10 font-bold border-0 shadow px-4 flex items-center justify-between">
      Star 4+
    </button>

    {/* Review Score */}
    <button className="bg-white cursor-pointer rounded-lg w-40 h-10 font-bold border-0 shadow px-4 flex items-center justify-between">
      8+ review score
    </button>

    {/* Freebies */}
    <div className="relative inline-block">
      <button
        onClick={() => setFreebiesOpen(!freebiesOpen)}
        className="bg-white cursor-pointer rounded-lg w-30 h-10 font-bold border-0 shadow px-4 flex items-center justify-between"
      >
        Freebies
        <span className="ml-2 text-gray-500">{freebiesOpen ? "▲" : "▼"}</span>
      </button>

      {freebiesOpen && (
        <div className="absolute mt-2 bg-white shadow-lg rounded-xl w-64 z-50 border border-gray-200 max-h-80 overflow-y-auto">
          <ul className="flex flex-col">
            {freebies.map((item, index) => (
              <li key={index} className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2 text-gray-700 text-sm">
                {item.icon} {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>

    {/* Under price */}
    <button className="bg-white cursor-pointer rounded-lg w-32 h-10 font-bold border-0 shadow px-4 flex items-center justify-between">
      Under $45
    </button>

    {/* Amenities */}
    <div className="relative inline-block">
      <button
        onClick={() => setAmenitiesOpen(!amenitiesOpen)}
        className="bg-white cursor-pointer rounded-lg w-33 h-10 font-bold border-0 shadow px-4 flex items-center justify-between"
      >
        Amenities
        <span className="ml-2 text-gray-500">{amenitiesOpen ? "▲" : "▼"}</span>
      </button>

      {amenitiesOpen && (
        <div className="absolute mt-2 bg-white shadow-lg rounded-xl w-64 z-50 border border-gray-200 max-h-80 overflow-y-auto">
          <ul className="flex flex-col">
            {amenities.map((item, index) => (
              <li key={index} className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2 text-gray-700 text-sm">
                {item.icon} {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>

    {/* Class */}
    <button className="bg-white cursor-pointer rounded-lg w-26 h-10 font-bold border-0 shadow px-4 flex items-center justify-between">
      Class 4+
    </button>

  </div>
</div>

        {/* HOTEL LIST */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-5">
            {hotels.map((hotel) => (
              <div key={hotel.id} className="bg-white rounded-xl border hover:shadow-lg transition overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  {/* IMAGE */}
                  <Link href="#">
                    <div className="relative w-full lg:w-[280px] h-56 flex-shrink-0 overflow-hidden">
                      <img
                        src={hotel.images ? JSON.parse(hotel.images)[0]?.original_image : ""}
                        alt={hotel.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </Link>

                  {/* INFO */}
                  <div className="flex-1 p-4 min-w-0">
                    <h2 className="font-serif text-lg">{hotel.name}</h2>
                    <p className="text-sm text-gray-500">{hotel.address}</p>
                    <div className="flex items-center gap-1 text-orange-500 mt-1">
                      {[...Array(4)].map((_, i) => (<FaStar key={i} size={14} />))}
                    </div>
                    <div className="flex items-center gap-2 text-sm mt-1">
                      <span className="font-bold text-black">{hotel.overall_rating}</span>
                      <span className="text-gray-500">/ {hotel.reviews} reviews</span>
                    </div>
                    <div className="text-sm text-gray-500 line-clamp-3 mt-2">
                      <p dangerouslySetInnerHTML={{ __html: hotel.description }} />
                    </div>
                  </div>

                  {/* PRICE BOX */}
                  <div className="w-full lg:w-[260px] bg-gray-50 border-t lg:border-t-0 lg:border-l p-4 flex flex-col justify-between">
                    <div className="text-right">
                      <p className="text-xs text-red-500">Cheaper than usual</p>
                      {hotel.prices && (() => {
                        const parsedPrices = JSON.parse(hotel.prices || "[]");
                        return (
                          <>
                            <h3 className="text-3xl font-extrabold text-gray-900 leading-tight">
                              ${parsedPrices[0]?.rate_per_night?.extracted_lowest}
                            </h3>

                            <p className="text-xs text-gray-500 mt-1">
                              price per night
                            </p>

                            <Link href={parsedPrices[0].link}>
                              <p className="mt-4 w-full text-center bg-blue-900 hover:bg-blue-700 text-white py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ease-in-out cursor-pointer shadow-sm hover:shadow-md">
                                {parsedPrices[0].source}
                              </p>
                            </Link>
                          </>
                        );
                      })()}
                    </div>
                    <button
                      onClick={() => handleNavigate(hotel)}
                      className="w-full block bg-blue-900 text-white py-2 text-sm rounded-md hover:bg-blue-800 text-center transition"
                    >
                      More Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* MAP SECTION */}
          <div className="lg:block hidden bg-gray-200 rounded-xl p-4 h-[600px] md:h-[800px]">
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                "Rizq Luxurious Villa, 28 Street - Business Bay - Ghadeer Al Tair - Dubai - United Arab Emirates"
              )}&output=embed`}
              width="100%"
              height="100%"
              className="rounded-xl"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}