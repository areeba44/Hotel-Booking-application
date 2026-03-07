"use client";

import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import { FaDollarSign } from "react-icons/fa";
import { Search } from "lucide-react";
import {FaStar, FaBed, FaSnowflake, FaParking, FaSmokingBan, FaConciergeBell, FaUtensils, FaCoffee, FaWheelchair, FaPlaneDeparture, FaWifi,FaCar,} from "react-icons/fa";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { useSearchParams } from 'next/navigation'
import axios from "axios";

export default function HotelsContent() {
  const searchParams = useSearchParams()
  const dataParam = searchParams.get('data')
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [checkIn] = useState("");
  const [checkOut] = useState("");

  const [allFiltersOpen, setAllFiltersOpen] = useState(false);
  const [priceOpen, setPriceOpen] = useState(false);
  const [freebiesOpen, setFreebiesOpen] = useState(false);
  const [amenitiesOpen, setAmenitiesOpen] = useState(false);
  const [open, setOpen] = useState(null);
  const [hotels, setHotels] = useState([])


  useEffect(() => {
    if (dataParam) {
      const parsedData = JSON.parse(decodeURIComponent(dataParam))
      if (parsedData) {
        console.log(parsedData)
        const fetchHotelsData = async () => {
          try {
            const json = JSON.stringify({ country_name: parsedData.country_name, country_code: parsedData.country_code, city_name: parsedData.city_name, city_code: parsedData.city_code, hotel_name: parsedData.hotel_name, page: 1 });
            const response = await axios.post(`http://10.10.10.190:5001/hotels?action=get_hotels_searches`, JSON.stringify({ params: json }), {
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
              },
            });
            if (response.data.success === true) {
              console.log("contry data", response.data.data)
              setHotels(response.data.data)
            }
          } catch (error) {
            console.error('Error fetching user data:', error);
          }
        };
        fetchHotelsData()
      }
    }
  }, [dataParam])

  console.log("Check the hotel data", hotels);
  const allFilters = [ "Price", "Freebies", "Amenities", "Stars","Review score","Type of stay","Location","Hotel chain","Style","Property name","Booking sites",];
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

  return (
    <div className="">
      {/* NAVBAR */}
      <Navbar/>
      {/* AVAILABLE HOTELS HEADING */}
      <div className="max-w-8xl mx-auto mt-32 px-6 font-bold">
        <h1 className="text-3xl  mb-4 font-sans">Available Hotels</h1>

        {/* FILTER BUTTONS */}
        <div className="flex flex-wrap gap-3 mb-6">
          {/* All Filters */}
          <div className="relative inline-block">
            <button
              onClick={() => setAllFiltersOpen(!allFiltersOpen)}
              className="bg-white cursor-pointer rounded-lg w-39 h-10 font-bold border-0 shadow px-4 flex items-center justify-between"
            >
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
                    <li
                      key={index}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700 text-sm"
                    >
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
                    <li
                      key={index}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700 text-sm flex items-center gap-2"
                    ><FaDollarSign /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          {/* free breakfast */}
          <button className="bg-white cursor-pointer rounded-lg w-37 h-10 font-bold border-0 shadow px-4 flex items-center justify-between"
          >Free Breakfast
          </button>
          {/* star  */}
          <button className="bg-white cursor-pointer rounded-lg w-23 h-10 font-bold border-0 shadow px-4 flex items-center justify-between"
          >Star   4+
          </button>
          <button className="bg-white cursor-pointer rounded-lg w-40 h-10 font-bold border-0 shadow px-4 flex items-center justify-between"
          >8+ review score
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
                    <li
                      key={index}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2 text-gray-700 text-sm"
                    >
                      {item.icon} {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <button className="bg-white cursor-pointer rounded-lg w-30 h-10 font-bold border-0 shadow px-4 flex items-center justify-between"
          >Under $53
          </button>
          <button className="bg-white cursor-pointer rounded-lg w-35 h-10 font-bold border-0 shadow px-4 flex items-center justify-between"
          >Review score
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
                    <li
                      key={index}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2 text-gray-700 text-sm"
                    >
                      {item.icon} {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        {/* HOTEL LIST + MAP */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* HOTEL LIST */}
          <div className="lg:col-span-2 space-y-4">
            {hotels.map((hotel) => (
              <div key={hotel.id} className="bg-white h-[290px] rounded-xl shadow-sm border hover:shadow-md transition p-3">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="#">
                    <div className="w-full sm:w-60 h-50 relative rounded-lg overflow-hidden cursor-pointer">
                      <Image
                        src={hotel.image || "/I7.PNG"}
                        alt={hotel.hotelName}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </Link>
                  {/* HOTEL INFO */}
                  <div className="flex-1 space-y-1">
                    <h2 className="font-semibold text-lg">{hotel.HotelName}</h2>
                    <p className="text-sm text-gray-500">{hotel.Address}</p>
                    <div className="flex items-center gap-1 text-yellow-500 text-sm">
                      {[...Array(hotel.rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                      <span className="text-gray-600 ml-2">{hotel.reviews}</span>
                    </div>
                   {/* Attractions */}
                    <div className="text-sm text-gray-600 mt-2">
                      <p><strong>Attractions:</strong></p>
                      <p dangerouslySetInnerHTML={{ __html: hotel.attractions }} />
                    </div>
                    {/* Hotel Description */}
                    <div className="text-sm text-gray-600 line-clamp-4 mt-2">
                      <p><strong>Description:</strong></p>
                      <p dangerouslySetInnerHTML={{ __html: hotel.Description }} />
                    </div>
                    {/* Hotel Facilities */}
                    <div className="text-sm text-gray-600 line-clamp-4 mt-2">
                      <p><strong>Facilities:</strong></p>
                      <p dangerouslySetInnerHTML={{ __html: hotel.HotelFacilities}} />
                    </div>
                    {/* Hotel pagination*/}
                    <div className="text-sm text-gray-600 line-clamp-4 mt-2">
                      <p><strong>pagination:</strong></p>
                      <p dangerouslySetInnerHTML={{ __html: hotel.pagination}} />
                    </div>
                  </div>
                  {/* BEST PRICE */}
                  <div className="flex flex-col justify-center items-end pr-2 min-w-[90px]">
                    <span className="text-gray-500 text-xs">Best Price</span>
                    <span className="font-bold text-base">{hotel.price}</span>
                    <Link href="#">
                      <button className="mt-2 w-28 h-12 hover:bg-red-500 bg-red-900 text-white px-4 py-1 rounded-lg text-sm">
                        View Deal
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* MAP */}
          <div className="w-full lg:col-span-1">
            {/* Map Search Bar */}
            <div className="bg-white flex items-center gap-2 p-3 rounded-xl shadow mb-3">
              <Search className="w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search on map..."
                className="outline-none w-full text-gray-700"
              />
            </div>
            {/* Map */}
            <div className="w-full h-[600px] rounded-xl overflow-hidden shadow-md border">
              <iframe
                src="https://www.google.com/maps?q=Faisalabad&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                className="border-0"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
