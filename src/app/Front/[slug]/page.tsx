"use client";

import Navbar from "@/components/Navbar";
import Slider from "@/app/Front/Slider";
import Footer from "@/components/Footer";
import { useParams } from "next/navigation";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { FaStar, FaRegHeart } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FiShare2 } from "react-icons/fi";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { FaMapMarkerAlt, FaUtensils, FaPlane } from "react-icons/fa";

import axios from "axios";
import {
  IoWifi
} from "react-icons/io5";

import {
  CiParking1
} from "react-icons/ci";

import {
  TbAirConditioning
} from "react-icons/tb";

import {
  MdPool,
  MdFitnessCenter,
  MdRestaurant,
  MdFreeBreakfast,
  MdElevator,
  MdSpa,
  MdKitchen,
  MdLocalLaundryService,
  MdAlarm,
} from "react-icons/md";

import {
  FaWheelchair,
  FaLeaf,
  FaCreditCard,
  FaConciergeBell,
  FaCoffee,
  FaBriefcase,
  FaShower,
  FaShuttleVan,
  FaDog,
  FaBed,
  FaParking,
} from "react-icons/fa";

import { useEffect, useState } from "react";
import { BiStore } from "react-icons/bi";

export default function Detail() {
  const params = useParams();
  const slug = params?.slug;
  const [hotel, setHotel] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [showAllProviders, setShowAllProviders] = useState(false);
  console.log(slug)
  const iconMap = {
    "wi-fi": <IoWifi />,
    "wi-fi in public areas": <IoWifi />,
    "public internet workstation": <IoWifi />,
    "internet access": <IoWifi />,
    "restaurant": <MdRestaurant />,
    "breakfast": <MdFreeBreakfast />,
    "convenience store": <BiStore />,
    "self-service laundry": <MdLocalLaundryService />,
    "elevator": <MdElevator />,
    "wake up calls": <MdAlarm />,
    "smoke-free property": <FaLeaf />,
    "credit cards": <FaCreditCard />,
    "cash": <FaCreditCard />,
    "checks": <FaCreditCard />,
    "parking": <CiParking1 />,
    "valet parking": <CiParking1 />,
    "car rental onsite": <FaShuttleVan />,
    "accessible": <FaWheelchair />,
    "fitness center": <MdFitnessCenter />,
    "elliptical machine": <MdFitnessCenter />,
    "treadmill": <MdFitnessCenter />,
    "weight machines": <MdFitnessCenter />,
    "free weights": <MdFitnessCenter />,
    "spa": <MdSpa />,
    "pool": <MdPool />,
    "pools": <MdPool />,
    "hot tub": <MdPool />,
    "business center": <FaBriefcase />,
    "air conditioning": <TbAirConditioning />,
    "refrigerator": <MdKitchen />,
    "microwave": <MdKitchen />,
    "coffee maker": <FaCoffee />,
    "private bathroom": <FaShower />,
    "shower": <FaShower />,
    "pet-friendly": <FaConciergeBell />,
    "internet": <IoWifi />,
    "food & drink": <MdRestaurant />,
    "services": <FaConciergeBell />,
    "children": <MdFreeBreakfast />,
    "wellness": <MdFitnessCenter />,
    "parking & transportation": <FaParking />,
    "business & events": <FaBriefcase />,
    "accessibility": <FaWheelchair />,
    "rooms": <FaBed />,
    "pets": <FaDog />,
    "bar": <FaCoffee />,
    "room service": <FaConciergeBell />,
    "breakfast buffet": <MdRestaurant />,
  };

  type IconKey = keyof typeof iconMap;

  const getIcon = (title: string) => {
    const key = title.toLowerCase();

    if (key in iconMap) {
      return iconMap[key as IconKey];
    }

    return <FaCreditCard />;
  };

  useEffect(() => {
    if (!slug) return;

    const fetchDetails = async () => {
      try {
        setLoading(true);

        const parsedData = JSON.parse(
          decodeURIComponent(Array.isArray(slug) ? slug[0] : slug)
        );

        const res = await axios.get(
          `https://hotel-booking-backend-wajid.vercel.app/hotels/${parsedData.id}`
        );

        setHotel(res.data[0]);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [slug]);

  const images = hotel?.images ? JSON.parse(hotel.images) : [];
  const amenities = hotel?.amenities ? JSON.parse(hotel.amenities) : [];
  const prices = hotel?.prices ? JSON.parse(hotel.prices) : [];
  console.log(prices)
  const ratingData = hotel?.ratings ? JSON.parse(hotel.ratings) : [];

  let overallRating = 0;
  let totalReviews = 0;

  ratingData.forEach((r: any) => {
    overallRating += r.stars * r.count;
    totalReviews += r.count;
  });

  const avgRating =
    totalReviews > 0
      ? (overallRating / totalReviews).toFixed(1)
      : "0";

  const cheapest =
    prices.length > 0
      ? prices.reduce((min: any, p: any) =>
        p.rate_per_night?.extracted_lowest <
          min.rate_per_night?.extracted_lowest
          ? p
          : min
      )
      : null;
  const nearby = hotel?.nearby_places
    ? JSON.parse(hotel.nearby_places)
    : [];
  const nearbyData = Array.isArray(nearby) ? nearby : [];

const points = nearbyData.filter(
  (item: any) => item?.category === "Point of interest"
);

const restaurants = nearbyData.filter(
  (item: any) =>
    item?.category &&
    item.category.toLowerCase().includes("restaurant")
);

const airports = nearbyData.filter(
  (item: any) => item?.category === "Airport"
);
  console.log("points", points);
  console.log("restaurants", restaurants);
  console.log("airports", airports);


    const reviews = hotel?.other_reviews
    ? JSON.parse(hotel.other_reviews)
    : [];
    
const [showPopup, setShowPopup] = useState(false);
const [showRestaurantPopup, setShowRestaurantPopup] = useState(false);
  const [showPointsPopup, setShowPointsPopup] = useState(false);
  
const [showRestaurantsPopup, setShowRestaurantsPopup] = useState(false);
const [showAirportsPopup, setShowAirportsPopup] = useState(false);

  const [showAmenitiesPopup, setShowAmenitiesPopup] = useState(false);
  return (
    <>
      <Navbar />

      {/* ✅ PARENT WRAPPER */}
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">

        {/* IMAGE GALLERY */}
        <div className="max-w-screen-2xl mx-auto mt-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            <div className="md:col-span-2 md:row-span-2">
              {loading ? (
                <Skeleton className="w-full h-[300px] md:h-full rounded-2xl" />
              ) : (
                <img
                  src={images[0]?.thumbnail}
                  className="w-full h-[300px] md:h-full object-cover rounded-2xl"
                />
              )}
            </div>

            {images?.slice(1, 5)?.map((img: any, i: number) => (
              <img
                key={i}
                src={"I1.PNG"}
                className="w-full h-[150px] md:h-[200px] object-cover rounded-2xl"
              />
            ))}
          </div>
        </div>

        {/* MAIN */}
        <div className="max-w-screen-2xl mx-auto py-6">

          <div className="flex flex-col lg:flex-row justify-between border-b pb-6">

            {/* LEFT */}
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold">
                {hotel?.name}
              </h1>

              <div className="flex items-center gap-2 mt-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500" />
                ))}
                <span>{avgRating}</span>
              </div>

              <p className="flex items-center gap-1 mt-1 text-sm">
                <IoLocationSharp />
                {hotel?.address}
              </p>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col items-end gap-3 mt-2 lg:mt-0">

              <div className="flex gap-3 text-sm">
                <FiShare2 /><span className="">Share</span>
                <FaRegHeart />Save
              </div>

              <div className="text-right">
                <p className="text-xl sm:text-2xl font-bold">
                  ${hotel?.price}
                </p>
                <p className="text-sm text-gray-500">per night</p>
              </div>

              <button className="bg-blue-900 text-white px-5 py-2 rounded-lg">
                Check Availability
              </button>
            </div>
          </div>

        </div>

        {/* COMPARE SECTION */}
        <div className=" flex flex-col lg:flex-row justify-between items-start lg:items-center">

          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Compare rooms and prices
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              We compare 100s of sites to get you the best deal
            </p>
          </div>

          {/* Right logos */}
          <div className="flex items-center gap-1 mt-4 lg:mt-0">
            {[
              { label: "B", bg: "bg-blue-600 text-white" },      // Booking
              { label: "Trip", bg: "bg-blue-500 text-white text-[10px]" }, // Trip
              { label: "Q", bg: "bg-gray-700 text-white" },      // Q
              { label: "X", bg: "bg-yellow-400 text-black" },    // X
              { label: "H", bg: "bg-red-500 text-white" },       // H
              { label: "JB", bg: "bg-orange-500 text-white text-[10px]" }, // JB
              { label: "O", bg: "bg-black text-white" },         // O
            ].map((item, i) => (
              <div
                key={i}
                className={`w-8 h-8 flex items-center justify-center rounded-full font-semibold ${item.bg}`}
              >
                {item.label}
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* About Section */}
      {/* <div className="mt-6">
                <h2 className="text-xl font-semibold text-gray-800">Description</h2>
                <p className="text-gray-600 leading-relaxed text-sm pt-4">
                  {hotel?.description || "No description available."}
                </p>
              </div> */}




      {/* PROVIDERS SECTION */}
      <div className="top-24 h-fit w-full max-w-[1300px] mx-auto space-y-6 px-4 lg:px-6 py-4">

        {/* HEADING */}
        <h3 className="text-3xl font-bold mt-6 px-8 ">
          Latest deals for{" "}
          <span className="text-black font-bold">
            {hotel?.name}
          </span>
        </h3>

        <div className="bg-white  w-full px-8">

          {/* Only show first 4 providers initially */}
          {prices?.slice(0, showAllProviders ? prices.length : 4)?.map((item: any, i: number) => (
            <div
              key={i}
              className="flex items-center justify-between p-3 mb-2 hover:shadow-md transition border-2 border-gray-200 bg-white"
            >
              <div className="flex items-center gap-3">
                <img src={item.logo} className="w-11 h-11 rounded-md" />
                <div>
                  <p className="text-sm font-semibold">{item.source}</p>
                  <p className="text-[11px] text-gray-500">{item.num_guests} per night</p>
                </div>
              </div>

              <div className="flex flex-col items-end gap-1">
                <p className="text-black font-bold text-base">
                  <span className="text-gray-400 text-[12px]">Per night</span>{" "}
                  {item.rate_per_night?.lowest}
                </p>
                <a
                  href={item.link}
                  target="_blank"
                  className="text-[12px] w-24 h-8 flex items-center justify-center font-serif rounded-xl bg-blue-900/100 text-white px-2 py-1 hover:bg-blue-800 transition"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>


        <div className="flex justify-center mt-4">
          <button
            onClick={() => setShowAllProviders(!showAllProviders)}
            className="px-4 py-1 text-sm border border-black text-black rounded-full cursor-pointer
        transition flex items-center gap-1"
          >
            {showAllProviders ? "Show Less" : "Show More (19 more)"}
            {showAllProviders ? <MdArrowDropUp size={20} /> : <MdArrowDropDown size={20} />}
          </button>
        </div>

      </div>
      {/* MAP SECTION */}
      <div className="mt-6 px-4 md:px-8 lg:px-16">


        <div className="w-full h-[200px] md:h-[300px] lg:h-[400px] rounded-xl overflow-hidden shadow-md">
          <iframe
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              hotel?.address ||
              "Rizq Luxurious Villa, 28 Street - Business Bay - Ghadeer Al Tair - Dubai - United Arab Emirates"
            )}&output=embed`}
            width="100%"
            height="100%"
            className="border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>


      {/* MAIN CONTAINER */}
<div className="bg-white container border border-gray-100 ml-15 mt-4 max-w-[1230px]">
  <div className="px-4 md:px-6 lg:px-8 mt-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

      {/* POINTS OF INTEREST */}
      <div className="p-4 transition">
        <div className="flex justify-between items-center mb-3">
          <h2 className="flex items-center gap-2 font-semibold text-lg">
            <FaMapMarkerAlt /> Points of Interest
          </h2>
          <span className="text-sm text-gray-500">{points.length}</span>
        </div>

        {points.slice(0, 4).map((item: any, i: number) => (
          <div key={i} className="flex justify-between py-1.5 items-center">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <FaMapMarkerAlt className="text-gray-400 text-xs" />
              <span>{item?.name}</span>
            </div>
            <span className="text-xs text-gray-400">{item?.distance} km</span>
          </div>
        ))}

        {points.length > 4 && (
          <p
            onClick={() => setShowPointsPopup(true)}
            className="text-blue-600 text-sm mt-2 cursor-pointer"
          >
            Show more
          </p>
        )}
      </div>

      {/* RESTAURANTS */}
      <div className="p-4 transition">
        <div className="flex justify-between items-center mb-3">
          <h2 className="flex items-center gap-2 font-semibold text-lg">
            <FaUtensils /> Restaurants
          </h2>
          <span className="text-sm text-gray-500">{restaurants.length}</span>
        </div>

        {restaurants.slice(0, 4).map((item: any, i: number) => (
          <div key={i} className="flex justify-between py-1.5 items-center">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <FaUtensils className="text-gray-400 text-xs" />
              <span>{item?.name}</span>
            </div>
            <span className="text-xs text-gray-400">{item?.distance} km</span>
          </div>
        ))}

        {restaurants.length > 4 && (
          <p
            onClick={() => setShowRestaurantsPopup(true)}
            className="text-blue-600 text-sm mt-2 cursor-pointer"
          >
            Show more
          </p>
        )}
      </div>

      {/* AIRPORTS */}
      <div className="p-4 transition">
        <div className="flex justify-between items-center mb-3">
          <h2 className="flex items-center gap-2 font-semibold text-lg">
            <FaPlane /> Airports
          </h2>
          <span className="text-sm text-gray-500">{airports.length}</span>
        </div>

        {airports.slice(0, 4).map((item: any, i: number) => (
          <div key={i} className="flex justify-between py-1.5 items-center">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <FaPlane className="text-gray-400 text-xs" />
              <span>{item?.name}</span>
            </div>
            <span className="text-xs text-gray-400">{item?.distance} km</span>
          </div>
        ))}

        {airports.length > 4 && (
          <p
            onClick={() => setShowAirportsPopup(true)}
            className="text-blue-600 text-sm mt-2 cursor-pointer"
          >
            Show more
          </p>
        )}
      </div>

    </div>
  </div>

  {/* POPUPS */}

  {/* POINTS POPUP */}
  {showPointsPopup && (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-[90%] max-w-md rounded-xl p-4 relative">
        <button onClick={() => setShowPointsPopup(false)} className="absolute top-2 right-3 text-gray-500 text-lg">✕</button>
        <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
          <FaMapMarkerAlt /> All Points
        </h2>
        <div className="space-y-2 max-h-[250px] overflow-y-auto">
          {points.map((item: any, i: number) => (
            <div key={i} className="flex justify-between text-sm py-1">
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-gray-400 text-xs" />
                <span>{item?.name}</span>
              </div>
              <span className="text-gray-400 text-xs">{item?.distance} km</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )}

  {/* RESTAURANTS POPUP */}
  {showRestaurantsPopup && (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-[90%] max-w-md rounded-xl p-4 relative">
        <button onClick={() => setShowRestaurantsPopup(false)} className="absolute top-2 right-3 text-gray-500 text-lg">✕</button>
        <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
          <FaUtensils /> All Restaurants
        </h2>
        <div className="space-y-2 max-h-[250px] overflow-y-auto">
          {restaurants.map((item: any, i: number) => (
            <div key={i} className="flex justify-between text-sm py-1">
              <div className="flex items-center gap-2">
                <FaUtensils className="text-gray-400 text-xs" />
                <span>{item?.name}</span>
              </div>
              <span className="text-gray-400 text-xs">{item?.distance} km</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )}

  {/* AIRPORTS POPUP */}
  {showAirportsPopup && (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-[90%] max-w-md rounded-xl p-4 relative">
        <button onClick={() => setShowAirportsPopup(false)} className="absolute top-2 right-3 text-gray-500 text-lg">✕</button>
        <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
          <FaPlane /> All Airports
        </h2>
        <div className="space-y-2 max-h-[250px] overflow-y-auto">
          {airports.map((item: any, i: number) => (
            <div key={i} className="flex justify-between text-sm py-1">
              <div className="flex items-center gap-2">
                <FaPlane className="text-gray-400 text-xs" />
                <span>{item?.name}</span>
              </div>
              <span className="text-gray-400 text-xs">{item?.distance} km</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )}

</div>





 
      {/* AMENITIES DETAILED + NORMAL AMENITIES */}
      <div className="mt-8">

        {/* Top 4 Amenities */}
        {amenities && amenities.length > 0 && (
          <div className="mb-6">
            <h2 className="text-3xl font-semibold mb-4">Amenities</h2>

            <div className="flex flex-wrap gap-6 bg-gray-50 p-6 rounded-2xl">
              {amenities.slice(0, 4).map((item: any, i: number) => (
                <div
                  key={i}
                  className="w-40 h-40 p-4 flex flex-col items-center justify-center bg-white rounded-xl 
                             hover:shadow-md hover:bg-gray-200 transition cursor-pointer"
                >
                  <div className="text-3xl text-black font-bold mb-3">{getIcon(item)}</div>
                  <p className="text-sm text-black font-medium text-center">{item}</p>
                </div>
              ))}

              {amenities.length > 4 && (
                <div className="w-full text-center mt-4">
                  <button
                    onClick={() => setShowAmenitiesPopup(true)}
                    className="px-4 py-2 text-sm bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
                  >
                    Show More
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* AMENITIES POPUP */}
        {showAmenitiesPopup && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white w-[90%] max-w-md rounded-xl p-5 relative">
              <button
                onClick={() => setShowAmenitiesPopup(false)}
                className="absolute top-2 right-3 text-gray-500 text-lg"
              >
                ✕
              </button>

              <h2 className="text-lg font-semibold mb-4 text-center">All Amenities</h2>

              <div className="grid grid-cols-2 gap-4 max-h-[300px] overflow-y-auto">
                {amenities.map((item: any, i: number) => (
                  <div
                    key={i}
                    className="flex flex-col items-center justify-center bg-gray-50 rounded-lg p-3"
                  >
                    <div className="text-2xl mb-1">{getIcon(item)}</div>
                    <p className="text-sm text-gray-700 text-center">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* AMENITIES DETAILED */}
        {hotel?.amenities_detailed && (() => {
          let details;
          try {
            details = JSON.parse(hotel.amenities_detailed);
          } catch (err) {
            console.error("Error parsing amenities_detailed:", err);
            details = { groups: [], popular: [] };
          }

          const groups = Array.isArray(details?.groups) ? details.groups : [];
          const popular = Array.isArray(details?.popular) ? details.popular : [];

          const renderCard = (item: any, i: number, type: "groups" | "popular") => (
            <div
              key={i}
              className="group bg-white border border-gray-100 rounded-lg p-3 flex flex-col items-center text-center
                         shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-50 text-black mb-2
                              group-hover:bg-blue-100 transition">
                {getIcon(item.title)}
              </div>
              <p className="text-xs font-semibold text-gray-700 leading-tight">{item.title}</p>
              {type === "popular" && item.available && (
                <span className="mt-2 text-[10px] px-2 py-[1px] rounded-full bg-green-100 text-green-700">
                  Available
                </span>
              )}
            </div>
          );

          return (
            <div className="space-y-10 mt-6">
              {groups.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Hotel Features</h3>
                  <div className="grid grid-cols-5 gap-3">
                    {(showAll ? groups : groups.slice(0, 5)).map((item: any, i: number) =>
                      renderCard(item, i, "groups")
                    )}
                  </div>
                  {groups.length > 5 && (
                    <div className="text-center mt-4">
                      <button
                        onClick={() => setShowAll(!showAll)}
                        className="px-4 py-1 text-sm border border-blue-900 text-blue-900 rounded-full
                                   hover:bg-blue-600 hover:text-white transition"
                      >
                        {showAll ? "Show Less" : "Show More"}
                      </button>
                    </div>
                  )}
                </div>
              )}

              {popular.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Popular Amenities</h3>
                  <div className="grid grid-cols-5 gap-3">
                    {(showAll ? popular : popular.slice(0, 5)).map((item: any, i: number) =>
                      renderCard(item, i, "popular")
                    )}
                  </div>
                  {popular.length > 5 && (
                    <div className="text-center mt-4">
                      <button
                        onClick={() => setShowAll(!showAll)}
                        className="px-4 py-1 text-sm border border-blue-500 text-blue-600 rounded-full
                                   hover:bg-blue-600 hover:text-white transition"
                      >
                        {showAll ? "Show Less" : "Show More"}
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })()}

        <Slider />

        {/* SEARCH SECTION BELOW */}
        <div className="w-full flex justify-center mt-6">
          <div className="w-full max-w-screen-2xl">
            <div className="w-full bg-gray-100 sm:px-8 py-6 mt-5">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-sm md:text-base ml-3 font-medium text-gray-700 mb-4">
                  Couldn’t find the right hotel for you?
                </h2>

                <div className="bg-white rounded-lg shadow-sm p-3 md:p-4 flex flex-col md:flex-row gap-3 md:items-end">
                  <div className="flex-1">
                    <label className="text-xs text-gray-500">
                      Where do you want to stay?
                    </label>
                    <input
                      type="text"
                      placeholder="London"
                      className="w-full mt-1 text-sm text-blue-600 font-medium outline-none bg-transparent"
                    />
                  </div>
                  <div className="w-full md:w-auto">
                    <button className="w-full md:w-auto bg-blue-900/100 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-md transition">
                      Search →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {loading && (
          <div className="text-center py-20">
            Loading hotel details...
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}