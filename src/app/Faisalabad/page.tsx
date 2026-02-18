"use client";

import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaDollarSign } from "react-icons/fa";
import { Search, Calendar } from "lucide-react";
import { SlArrowDown } from "react-icons/sl";
import {
  FaGlobe,
  FaStar,
  FaBed,
  FaSnowflake,
  FaParking,
  FaSmokingBan,
  FaConciergeBell,
  FaUtensils,
  FaCoffee,
  FaWheelchair,
  FaPlaneDeparture,
  FaWifi,
  FaCar,
} from "react-icons/fa";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";

export default function Islamabad() {
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [checkIn] = useState("");
  const [checkOut] = useState("");

  const [allFiltersOpen, setAllFiltersOpen] = useState(false);
  const [priceOpen, setPriceOpen] = useState(false);
  const [freebiesOpen, setFreebiesOpen] = useState(false);
  const [amenitiesOpen, setAmenitiesOpen] = useState(false);
 
const [open, setOpen] = useState<number | null>(null);

  const handleSearch = () => {
    alert(`Searching hotels in ${location} from ${checkIn} to ${checkOut}`);
  };

  const HotelList = [
    {
      id: 1,
      hotelname: "Hotel One Faisalabad",
      location: "Faisalabad",
      rating: 4,
      reviews: "Excellent (920)",
      source1: "Super.com",
      source2: "$91",
      source3: "Expedia",
      source4: "$92",
      source5: "Booking.com and 3 more",
      price: "$120 / night",
      image: "/I1.PNG",
      link: "/F1",
    },
    {
      id: 2,
      hotelname: "Silk Hotel",
      location: "Faisalabad",
      rating: 5,
      reviews: "Amazing (640)",
      source1: "Super.com",
      source2: "$91",
      source3: "Expedia",
      source4: "$92",
      source5: "Booking.com",
      source6: "$92",
      price: "$95 / night",
      image: "/I2.PNG",
      link: "/F2",
    },
    {
      id: 3,
      hotelname: "Cozy & Peaceful Rooms Near Lyallpur Galleria",
      location: "Faisalabad",
      rating: 5,
      reviews: "Amazing (640)",
      source1: "Super.com",
      source2: "$91",
      source3: "Expedia",
      source4: "$92",
      source5: "Booking.com",
      source6: "$92",
      price: "$95 / night",
      image: "/I3.PNG",
      link: "/L2",
    },
    {
      id: 4,
      hotelname: "Avari Xpress Faisalabad",
      location: "Faisalabad",
      rating: 5,
      reviews: "Amazing (640)",
      source1: "Super.com",
      source2: "$91",
      source3: "Expedia",
      source4: "$92",
      source5: "Booking.com and 3 more",
      price: "$95 / night",
      image: "/I4.PNG",
      link: "/L3",
    },
    {
      id: 5,
      hotelname: "Shaheen Palace",
      location: "Faisalabad",
      rating: 5,
      reviews: "Amazing (640)",
      source1: "Super.com",
      source2: "$91",
      source3: "Expedia",
      source4: "$92",
      source5: "Booking.com",
      source6: "$92",
      price: "$95 / night",
      image: "/I5.PNG",
      link: "/F2",
    },
  ];

  const allFilters = [
    "Price",
    "Freebies",
    "Amenities",
    "Stars",
    "Review score",
    "Type of stay",
    "Location",
    "Hotel chain",
    "Style",
    "Property name",
    "Booking sites",
  ];

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
    <div className="w-full bg-white shadow-xl border-b border-gray-200">
      {/* NAVBAR */}
      <div className="max-w-7xl mx-auto flex flex-wrap sm:flex-nowrap justify-between items-center min-h-[70px] px-4 sm:px-8 gap-3">
        <Link href="/">
          <Image
            src="/hotel.png"
            alt="Logo"
            width={120}
            height={100}
            className="object-contain w-28"
          />
        </Link>

        {/* SEARCH */}
        <div className="flex flex-1  justify-end items-center gap-3 w-full md:w-auto mt-3 sm:mt-0">
          <div className="flex items-center bg-white border rounded-2xl px-4 py-2 shadow-md w-full md:w-64">
            <Search className="w-5 h-5 text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search city or hotel..."
              className="outline-none w-full text-gray-700"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <div className="relative w-full md:w-48">
            <div className="flex items-center border rounded-2xl px-4 py-2 shadow-md">
              <Calendar className="w-5 h-5 text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Select date"
                className="outline-none w-full text-gray-700 cursor-pointer"
                value={date}
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>
          <button
            onClick={handleSearch}
            className="bg-amber-600 hover:bg-amber-500 text-white px-4 py-2 rounded-2xl shadow-md"
          >
            Search
          </button>
        </div>

        {/* LOGIN */}
        <Link href="/Login">
          <button className="rounded-2xl bg-black text-white px-7 py-2 text-sm hover:bg-gray-700">
            Login
          </button>
        </Link>
      </div>

      {/* AVAILABLE HOTELS HEADING */}
      <div className="max-w-8xl mx-auto mt-6 px-6 bg-gray-100 pt-4 font-bold">
        <h1 className="text-3xl font-semibold mb-4">Available Hotels</h1>

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
                    >
                      <FaDollarSign /> {item}
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
            {HotelList.map((hotel) => (
              <div
                key={hotel.id}
                className="bg-white rounded-xl shadow-sm border hover:shadow-md transition p-3"
              >
                <div className="flex flex-col sm:flex-row gap-4">

                  {/* IMAGE */}
                  <Link href={hotel.link}>
                    <div className="w-full sm:w-50 h-53 relative rounded-lg overflow-hidden cursor-pointer">
                      <Image
                        src={hotel.image}
                        alt={hotel.hotelname}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </Link>

                  {/* HOTEL INFO */}
                  <div className="flex-1 space-y-1">
                    <h2 className="font-semibold text-lg">{hotel.hotelname}</h2>
                    <p className="text-sm text-gray-500">{hotel.location}</p>

                    {/* RATING */}
                    <div className="flex items-center gap-1 text-yellow-500 text-sm">
                      {[...Array(hotel.rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                      <span className="text-gray-600 ml-2">{hotel.reviews}</span>
                    </div>

                    {/* SOURCES → COLUMN */}
                    <div className="flex flex-col gap-2 text-xs text-gray-600 mt-1">
            

                      <span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-md cursor-pointer">
                        <FaGlobe size={12} /> {hotel.source1}
                        <p className="relative left-93">{hotel.source2}</p>
                      </span>

                      <span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-md">
                        <FaGlobe size={12} /> {hotel.source3}
                        <p className="relative left-97">{hotel.source4}</p>
                      </span>

                      {/* DROPDOWN SOURCE */}
            <div className="relative">

             <div
          onClick={() => {
         if (open === hotel.id) {
        setOpen(null);
         } else {
        setOpen(hotel.id);
      }
    }}
    className="flex items-center gap-2 bg-gray-100 px-2 py-1 rounded-md cursor-pointer"
  >
    <FaGlobe size={12} />

    <span>{hotel.source5}</span>

    {/* right side text */}
    <span className="ml-auto">{hotel.source6}</span>

    {/* arrow rotation */}
    <SlArrowDown
      size={10}
      className={`transition-transform duration-200 ${
        open === hotel.id ? "rotate-180" : ""
      }`}
    />
  </div>

  {/* dropdown menu */}
  {open === hotel.id ? (
    <div className="absolute left-0 mt-2 w-full bg-white border rounded-md shadow-md p-2 space-y-1">
      <p className="text-sm">Hotel.com</p>
      <p className="text-sm">Booking.com</p>
      <p className="text-sm">Agoda.com</p>
    </div>
  ) : null}

</div>
</div></div>

                  {/* BEST PRICE */}
                  <div className="flex flex-col justify-center items-end pr-2 min-w-[90px]">
                    <span className="text-gray-500 text-xs">Best Price</span>
                    <span className="font-bold text-base">{hotel.price}</span>

                    <Link href={hotel.link}>
                      <button className="mt-2 hover:bg-amber-500 bg-amber-600 text-white px-4 py-1 rounded-lg text-sm">
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
          </div></div></div>
      <Footer />
    </div>

  )
}
