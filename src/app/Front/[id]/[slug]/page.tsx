"use client";

import Navbar from "@/components/Navbar";
import Slider from "@/app/Front/Slider";
import Footer from "@/components/Footer";
import { useParams } from "next/navigation";
import Skeleton from "react-loading-skeleton";
import Hoteldetailsskeletonloading from "@/components/Hoteldetailsskeletonloading"
import ClientReviews from "@/components/ClientReviews"

import { FaStar, FaRegHeart } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FiShare2 } from "react-icons/fi";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { FaMapMarkerAlt, FaUtensils, FaPlane } from "react-icons/fa";
import { FaPhoneAlt, FaGlobe, FaDirections } from "react-icons/fa";
import { MdHotel } from "react-icons/md";
import { FiUser, FiCoffee } from "react-icons/fi";
import { FaHome, FaCar, FaWifi } from "react-icons/fa";
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
import { Baby } from "lucide-react";
import { FaBaby } from "react-icons/fa";

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
  const id = params.id
  const slug = params?.slug;
  console.log("ID:", id);
  console.log("Slug:", slug);
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
  type Rating = {
  stars: number;
  count: number;
};

type UserReview = {
  comment?: string;
  date?: string;
  username?: string;
  rating: {
    score: number;
    max_score: number;
  };
};

type Review = {
  user_review?: UserReview;
  source_rating?: {
    score: number;
    max_score: number;
    source?: {
      name?: string;
      icon?: string;
    };
  };
};

interface ReviewsSectionProps {
  ratingData?: Rating[];
  reviews?: Review[];
}

  useEffect(() => {
    if (!id) return;
    const safeId = Array.isArray(id) ? id[0] : id;

    const decodedId = atob(atob(decodeURIComponent(safeId)));
    console.log("Decoded ID:", decodedId);
    const fetchDetails = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`https://hotel-booking-backend-wajid.vercel.app/hotels/${decodedId}`);
        console.log("res", res)
        setHotel(res.data[0]);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [id]);

  const images = hotel?.images ? JSON.parse(hotel.images) : [];
  const amenities = hotel?.amenities ? JSON.parse(hotel.amenities) : [];
  const prices = hotel?.prices ? JSON.parse(hotel.prices) : [];
  console.log("prices", prices)
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
  console.log(ratingData)
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
  // console.log("points", points);
  // console.log("restaurants", restaurants);
  // console.log("airports", airports);
  type ImageType = {
    thumbnail?: string;
  };

  const [showPopup, setShowPopup] = useState(false);
  const [showRestaurantPopup, setShowRestaurantPopup] = useState(false);
  const [showPointsPopup, setShowPointsPopup] = useState(false);
  const [showRestaurantsPopup, setShowRestaurantsPopup] = useState(false);
  const [showAirportsPopup, setShowAirportsPopup] = useState(false);
  const [showAmenitiesPopup, setShowAmenitiesPopup] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const reviews = hotel?.other_reviews ? (typeof hotel.other_reviews === "string" ? JSON.parse(hotel.other_reviews) : hotel.other_reviews) : [];
  const Reviews = hotel?.reviews_breakdown ? (typeof hotel.reviews_breakdown === "string" ? JSON.parse(hotel.reviews_breakdown) : hotel.reviews_breakdown) : [];



  if (loading || !hotel) {
    return (
      <>
        <Navbar />
        <Hoteldetailsskeletonloading />
        <Footer />
      </>
    );
  }
  return (
    <>
      <Navbar />

      {/*  PARENT WRAPPER */}
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
        {/* IMAGE GALLERY */}
        <div className="max-w-screen-2xl mx-auto mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 h-[420px]">

            {/* LEFT BIG IMAGE */}
            <div className="h-full cursor-pointer" onClick={() => setOpenIndex(0)}>
              {loading ? (
                <Skeleton className="w-full h-full rounded-2xl" />
              ) : (
                <img
                  // src={images?.[0]?.thumbnail || "/placeholder.jpg"}
                   src={"/d1.webp"}
                  className="w-full h-full object-cover rounded-2xl"
                />
              )}
            </div>

            {/* RIGHT SIDE GRID */}
            <div className="grid grid-cols-2 grid-rows-2 gap-3 h-full">
              {[1, 2, 3, 4].map((index) => (
                <div
                  key={index}
                  className="relative h-full cursor-pointer"
                  onClick={() => setOpenIndex(index)}
                >
                  {loading ? (
                    <Skeleton className="w-full h-full rounded-2xl" />
                  ) : (
                    <>
                      <img
                        // src={images?.[index]?.thumbnail || "/placeholder.jpg"}
                         src={"/d1.webp"}
                        className="w-full h-full object-cover rounded-2xl"
                      />

                      {/* LAST IMAGE OVERLAY */}
                      {index === 4 && images.length > 5 && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-2xl">
                          <p className="text-white text-sm font-semibold">
                            +{images.length - 5} photos
                          </p>
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* POPUP / MODAL */}
        {openIndex !== null && (
          <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            onClick={() => setOpenIndex(null)}
          >
            {/* Modal Box */}
            <div
              className="bg-white w-[90vw] max-w-5xl max-h-[90vh] rounded-2xl p-4 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-semibold text-lg">Bucoleon By Cheers</h2>
                <button
                  onClick={() => setOpenIndex(null)}
                  className="text-gray-500 text-xl"
                >
                  ✕
                </button>
              </div>

              {/* Image Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {images?.map((img: ImageType, i: number) => (
                  <div key={i} className="overflow-hidden rounded-xl">
                    <img
                      // src={img.thumbnail || "/placeholder.jpg"}
                      src={"/d1.webp"}
                      alt="hotel"
                      className="w-full h-48 object-cover hover:scale-105 transition duration-300 cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        {/* MAIN WRAPPER (COMMON PARENT FOR BOTH) */}
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-10 lg:px-1 py-6">

          {/* TOP SECTION */}
          <div className="flex flex-col lg:flex-row justify-between border-b pb-6">

            {/* LEFT */}
            <div>
              <h1 className="text-2xl sm:text-2xl font-bold text-blue-950">
                {hotel?.name}
              </h1>

              <div className="flex items-center gap-2 mt-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500" />
                ))}
                <span>{avgRating}</span>
              </div>

              <p className="flex items-center gap-1 mt-1 text-sm text-blue-950">
                <IoLocationSharp />
                {hotel?.address}
              </p>
              <div className="flex gap-3 mt-2 text-sm text-blue-950 ">
                <FiShare2 /><span>Share</span>
                <FaRegHeart />Save
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col items-start lg:items-end gap-3  lg:mt-0 top-7 relative">
              <div className="text-right ">
                <p className="text-xl sm:text-2xl font-bold">
                  ${prices[0]?.rate_per_night?.extracted_lowest || ""}
                </p>
                <button className=" mt-2 bg-blue-950 cursor-pointer hover:bg-blue-900 text-white text-sm sm:text-base font-medium px-6 py-2.5 rounded-md  transition">
                  Check Availability
                </button>
              </div>


            </div>
          </div>

          {/* COMPARE SECTION */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 pt-6">

            {/* LEFT */}
            <div className="max-w-xl">
              <h2 className="text-2xl sm:text-2xl font-bold text-blue-950">
                Compare rooms and prices
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                We compare 100s of sites to get you the best deal
              </p>
            </div>

            {/* RIGHT LOGOS */}
            <div className="flex items-center flex-wrap gap-1  ">
              {[
                { label: "B", bg: "bg-blue-600 text-white" },
                { label: "Trip", bg: "bg-blue-500 text-white text-[10px]" },
                { label: "Q", bg: "bg-gray-700 text-white" },
                { label: "X", bg: "bg-yellow-400 text-black" },
                { label: "H", bg: "bg-red-500 text-white" },
                { label: "JB", bg: "bg-orange-500 text-white text-[10px]" },
                { label: "O", bg: "bg-black text-white" },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-full font-semibold ${item.bg}`}
                >
                  {item.label}
                </div>
              ))}
            </div>

          </div>

        </div></div>

      {/* PROVIDERS SECTION */}
      <div className=" px-4 md:px-6 lg:px-20">
        <div className="bg-white  max-w-screen-2xl mx-auto  w-full  rounded-2xl border-gray-100  ">

          {/* HEADING */}

          <h3 className="text-2xl font-bold text-blue-950   ">
            Latest deals for{" "}
            <span className="text-blue-950 font-serif">
              {hotel?.name}
            </span>
          </h3>

          <div className="bg-white  w-full mt-4">

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
                    className="text-[12px] w-24 h-8 flex items-center justify-center font-serif rounded-xl bg-blue-950 text-white px-2 py-1 hover:bg-blue-900 transition"
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

        </div></div>
      {/* MAP SECTION */}
      <div className="mt-6 px-4 md:px-8 lg:px-20">


        <div className="max-w-screen-2xl mx-auto h-[200px] md:h-[300px] lg:h-[400px] rounded-xl overflow-hidden shadow-md">
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
<div className="px-4 md:px-8 lg:px-20">
  <div className="max-w-screen-2xl mx-auto w-full mt-4">
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

      {/* CARD */}
      {/* POINTS OF INTEREST */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4">
        <div className="flex justify-between items-center mb-3">
          <h2 className="flex items-center gap-2 font-semibold  text-gray-800 text-lg">
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
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4">
        <div className="flex justify-between items-center mb-3">
          <h2 className="flex items-center gap-2 font-semibold text-gray-800  text-lg">
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
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4">
        <div className="flex justify-between items-center mb-3">
          <h2 className="flex items-center gap-2 font-semibold text-gray-800 text-lg">
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
          <div className="fixed inset-0 cursor-pointer bg-black/40 flex items-center justify-center z-50">
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
          <div className="fixed inset-0 cursor-pointer bg-black/40 flex items-center justify-center z-50">
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
      {/* About Section */}
<div className="px-4 md:px-8 lg:px-20 mt-5">
  <div className="max-w-screen-2xl mx-auto w-full">

    <div className="space-y-4">

      {/* ABOUT */}
      <h2 className="text-2xl font-bold text-blue-950">
        About the Hotel
      </h2>

      {/* Flex container */}
      <div className="flex flex-col md:flex-row items-start gap-6">

        {/* LEFT SIDE */}
        <div className="flex-1 space-y-4">

          {/* DESCRIPTION */}
          <p className="text-blue-950 leading-relaxed text-sm">
            {hotel?.description || "No description available."}
          </p>

          {/* TIMING */}
            <div className="pt-2 space-y-1">
              <p className="text-sm text-blue-950">
                <span className="font-bold">Check-In-Time:</span>{" "}
                {hotel?.check_in_time || "N/A"}
              </p>

              <p className="text-sm text-blue-950">
                <span className="font-bold">Check-Out-Time:</span>{" "}
                {hotel?.check_out_time || "N/A"}
              </p>
            </div>

        </div>

        {/* RIGHT - ADDRESS CARD */}
        <div className="w-full md:w-[350px] bottom-[50px] relative bg-white p-5 space-y-3 self-start">

          <h3 className="text-lg font-bold text-blue-950">
            Address & contact information
          </h3>

          <div className="flex items-start gap-2 text-sm text-blue-950">
            <FaMapMarkerAlt className="text-gray-500 mt-1" />
            <span>{hotel?.address || "Address not available"}</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-700">
            <FaPhoneAlt className="text-gray-500" />
            <span>{hotel?.phone || "Phone not available"}</span>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-3 pt-2">
            <button className="flex items-center gap-2 text-sm text-blue-700 hover:underline">
              <FaGlobe />
              Website
            </button>

            <button className="flex items-center gap-2 text-sm text-blue-700 hover:underline">
              <FaDirections />
              Directions
            </button>
          </div>

        </div>

      </div>
    </div>
  </div>
</div>
      {amenities && amenities.length > 0 && (
        <div className=" px-4 md:px-8 lg:px-20 py-11 bottom-2 relative">
          <div className="max-w-screen-2xl mx-auto ">

            <h2 className="text-2xl sm:text-2xl font-bold text-blue-950 mb-6">
              Amenities at {hotel?.name}
            </h2>

            <div className="flex flex-wrap gap-4">

              {amenities.slice(0, 4).map((item: any, i: number) => (
                <div
                  key={i}
                  className="flex items-center gap-3 px-5 py-3 bg-gray-100 rounded-md
                           border border-gray-200 hover:bg-gray-200 transition"
                >
                  <span className="text-gray-600 text-lg">
                    {getIcon(item)}
                  </span>

                  <p className="text-sm font-medium text-gray-800">
                    {item}
                  </p>
                </div>
              ))}

            </div>

            {/* SHOW MORE BUTTON */}
            {amenities.length > 4 && (
              <div className="mt-6">
                <button
                  onClick={() => setShowAmenitiesPopup(true)}
                  className="text-[16px] border border-black text-gray-900 rounded-md w-43 h-9 font-serif cursor-pointer  hover:underline"
                >
                  Show all amenities (23)
                </button>
              </div>
            )}

          </div></div>
      )}

      {showAmenitiesPopup && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">

          <div className="bg-white w-full max-w-lg rounded-2xl p-6 relative shadow-lg">

            {/* CLOSE */}
            <button
              onClick={() => setShowAmenitiesPopup(false)}
              className="absolute top-3 right-4 text-gray-500 text-xl hover:text-black"
            >
              ✕
            </button>

            <h2 className="text-xl font-semibold mb-5 text-center">
              All Amenities
            </h2>

            {/* LIST */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-h-[350px] overflow-y-auto">

              {amenities.map((item: any, i: number) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2 hover:bg-gray-100 transition"
                >
                  <span className="text-gray-600">
                    {getIcon(item)}
                  </span>
                  <p className="text-sm text-gray-700">
                    {item}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </div>
      )}


      <ClientReviews ratingData={Reviews} reviews={reviews} />


      {/* SEARCH SECTION BELOW */}
<div className="w-full bg-gray-100 py-6 mt-5">

  <div className="w-full max-w-screen-2xl mx-auto sm:px-8">
    
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
          <button className="w-full md:w-auto bg-blue-950 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-md transition">
            Search →
          </button>
        </div>

      </div>
    </div>

  </div>
</div>
              
      <Slider />
      {loading && (
        <div className="text-center py-20">
          Loading hotel details...
        </div>
      )}

      <Footer />
    </>
  );
}



