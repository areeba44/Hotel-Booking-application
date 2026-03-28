"use client";

import Navbar from "@/components/Navbar";
import Slider from "@/app/Front/Slider";
import Footer from "@/components/Footer";
import { useParams } from "next/navigation";
import axios from "axios";
import {
  Clock,
  Wifi,
  Car,
  Coffee,
  Tv,
  Snowflake,
  Utensils,
} from "lucide-react";
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
  MdOutlineAirportShuttle,
  MdRestaurant,
  MdSpa,
  MdMeetingRoom,
  MdLocalLaundryService,
  MdFreeBreakfast,
  MdElevator,
  MdAlarm,
  MdKitchen
} from "react-icons/md";

import {
  FaWheelchair,
  FaSmoking,
  FaLeaf,
  FaTshirt,
  FaTv,
  FaFax,
  FaLanguage,
  FaConciergeBell,
  FaDumbbell,
  FaShuttleVan,
  FaCheckCircle,
  FaCreditCard,
  FaBriefcase,
  FaCoffee,
  FaShower,
  FaTimesCircle
} from "react-icons/fa";
import { BiFirstAid, BiStore } from "react-icons/bi";
import { GiTennisCourt } from "react-icons/gi";
import { useEffect, useState } from "react";

export default function Detail() {
  const params = useParams();
  const slug = params?.slug;
  const [hotel, setHotel] = useState<any>(null);
  const [loading, setLoading] = useState(false);
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
  "hot tub": <MdPool />,
  "business center": <FaBriefcase />,
  "air conditioning": <TbAirConditioning />,
  "refrigerator": <MdKitchen />,
  "microwave": <MdKitchen />,
  "coffee maker": <FaCoffee />,
  "private bathroom": <FaShower />,
  "shower": <FaShower />,
  "pet-friendly": <FaConciergeBell />,
} as const;
 

type IconKey = keyof typeof iconMap;

const getIcon = (title: string) => {
  const key = title.toLowerCase();

  if (key in iconMap) {
    return iconMap[key as IconKey];
  }

  return <FaCheckCircle />;
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

  

  return (
    <>
      <Navbar />

      {/* IMAGE GALLERY */}
      <div className="max-w-screen-2xl mx-auto px-20 mt-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <div className="md:col-span-2 md:row-span-2">
            <img
              src={images[0]?.thumbnail}
              className="w-full h-[300px] md:h-full object-cover rounded-2xl"
            />
          </div>

          {images?.slice(1, 5)?.map((img: any, index: number) => (
            <div key={index}>
              <img
                src={img?.thumbnail || "/placeholder.jpg"}
                className="w-full h-[150px] md:h-[200px] object-cover rounded-2xl"
              />
            </div>
          ))}
        </div>
      </div>

      {/* MAIN */}
      <div className="max-w-screen-2xl mx-auto px-20 py-8 ">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT */}
          <div className="lg:col-span-2 space-y-8">

            {/* TITLE */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {hotel?.name}
              </h1>

              <p className="text-gray-500 mt-1">{hotel?.address}</p>

              <div className="flex items-center gap-3 mt-3">
                <span className="bg-blue-900 text-white px-3 py-1 rounded-lg text-sm">
                  ⭐ {avgRating}
                </span>
                <span className="text-gray-500 text-sm">
                  {totalReviews} reviews
                </span>
              </div>

              {cheapest && (
                <p className="text-green-600 mt-2 text-sm">
                  Cheapest on {cheapest.source}
                </p>
              )}
            </div>  </div>  </div>
        {/* RIGHT PRICE / DEALS */}
        <div className="top-24 h-fit w-full max-w-[1300px] mx-auto space-y-6">

          {/* ALL PROVIDERS */}
          <div className="bg-white rounded-2xl shadow-xl w-full pt-6">
            <h3 className="text-3xl font-semibold mb-5">Available deals</h3>
            {prices?.slice(0, 6)?.map((item: any, i: number) => (
              <div
                key={i}
                className="flex items-center justify-between  p-5 mb-4 hover:shadow-md transition w-full"
              >
                <div className="flex items-center gap-4">
                  <img src={item.logo} className="w-12 h-12" />
                  <div>
                    <p className="text-base font-semibold">{item.source}</p>
                    <p className="text-xs text-gray-500">per night</p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <p className="text-blue-900 font-bold text-lg">{item.rate_per_night?.lowest}</p>
                  <a
                    href={item.link}
                    target="_blank"
                    className="text-xs bg-blue-900 text-white px-3 py-1 rounded-md hover:bg-blue-800 transition"
                  >
                    View Details
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* AMENITIES DETAILED + NORMAL AMENITIES */}
        <div className="mt-8"> {amenities && amenities.length > 0 && (<div className="mb-6">
          <h2 className="text-3xl font-semibold mb-4">Amenities</h2>
          {/* Parent container */}
          <div className="flex flex-wrap gap-6 bg-gray-50 p-6 rounded-2xl">
            {amenities.slice(0,6).map((item: any, i: number) => (<div key={i} className="w-40 h-40 p-4 flex flex-col items-center justify-center bg-white rounded-xl hover:shadow-md hover:bg-gray-200 transition cursor-pointer" >
              {/* Icon */} <div className="text-3xl text-black font-bold mb-3"> {getIcon(item)} </div>


              {/* Text */} <p className="text-sm text-black font-medium text-center"> {item} </p> </div>))}
          </div> </div>)}

          {/* AMENITIES DETAILED */}
          {hotel?.amenities_detailed && (() => {
            try {
              const details = JSON.parse(hotel.amenities_detailed);
              const groups = Array.isArray(details?.groups) ? details.groups : [];
              const popular = Array.isArray(details?.popular) ? details.popular : [];

              return (
                <div className="space-y-8">

                  {/* GROUPS */}
                  {groups.map((group: any, i: number) => (
                    <div key={i}>
                      <h3 className="text-xl font-semibold mb-3">
                        {group.title}
                      </h3>

                      <div className="flex flex-wrap gap-12">
                        {Array.isArray(group.list) &&
                          group.list.map((item: any, j: number) => (
                            <div
                              key={j}
                              className={`flex items-center gap-5 px-4 py-2  transition cursor-pointer
                        ${item.available
                                  ? "bg-white hover:bg-gray-50"
                                  : "bg-gray-100 text-gray-400"
                                }`}
                            >
                              <span className="text-base">
                                {getIcon(item.title)}
                              </span>

                              <span className="text-lg font-medium">
                                {item.title}
                              </span>

                              {item.available && (
                                <span className="ml-2 text-xs bg-black text-white px-1.5 py-0.5 rounded">
                                  ✓
                                </span>
                              )}
                            </div>
                          ))}
                      </div>
                    </div>
                  ))}

                  {/* POPULAR */}
                  {popular.length > 0 && (
                    <div>
                      <h3 className="text-xl font-semibold mb-3">
                        Popular amenities
                      </h3>

                      <div className="flex flex-wrap gap-10">
                        {popular.map((item: any, i: number) => (
                          <div
                            key={i}
                            className={`flex items-center gap-10 px-4 py-2  transition cursor-pointer
                      ${item.available
                                ? "bg-white hover:bg-gray-50"
                                : "bg-gray-100 text-gray-400"
                              }`}
                          >
                            <span>{getIcon(item.title)}</span>

                            <span className="text-lg font-medium">
                              {item.title}
                            </span>

                            {item.available && (
                              <span className="ml-2 text-xs bg-black text-white px-1.5 py-0.5 rounded">
                                ✓
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            } catch (err) {
              console.error("Error parsing amenities_detailed:", err);
              return null;
            }
          })()}
        </div></div>
      <div className="w-full flex justify-center">
  <div className="w-full max-w-screen-2xl">

    {/* MAP SECTION */}
    <div className="mt-8 px-4 md:px-10 lg:px-20">
      <h3 className="text-3xl font-semibold mb-3">Location</h3>

      <div className="bg-gray-200 rounded-xl p-4 h-[400px] md:h-[500px] lg:h-[600px]">
        <iframe
          src={`https://www.google.com/maps?q=${encodeURIComponent(
            hotel?.address ||
            "Rizq Luxurious Villa, 28 Street - Business Bay - Ghadeer Al Tair - Dubai - United Arab Emirates"
          )}&output=embed`}
          width="100%"
          height="100%"
          className="rounded-xl"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
    </div>

  </div>
</div>
      {/* IMAGE GALLERY + ABOUT */}
      <div className="max-w-screen-2xl mx-auto px-4 md:px-10 lg:px-20 mt-6">
        <h2 className="text-2xl font-semibold mb-5">
          Hotel Description
        </h2>
        {/* IMAGE GALLERY */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">

          {/* BIG IMAGE */}
          <div className="md:col-span-2 md:row-span-2">
            <img
              src={images?.[0]?.thumbnail || "/placeholder.jpg"}
              className="w-full h-[200px] sm:h-[260px] md:h-[320px] object-cover rounded-xl"
            />
          </div>

          {/* SMALL IMAGES */}
          {images?.slice(1, 5)?.map((img: any, index: number) => (
            <div key={index} className="relative group">
              <img
                src={img?.thumbnail || "/placeholder.jpg"}
                className="w-full h-[100px] sm:h-[120px] md:h-[150px] object-cover rounded-xl"
              />

              {/* HOVER EFFECT */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 rounded-xl transition"></div>

              {/* SHOW ALL BUTTON */}
              {index === 3 && (
                <div className="absolute bottom-2 right-2 bg-white text-xs px-2 py-1 rounded shadow">
                  Show all
                </div>
              )}
            </div>
          ))}

        </div>

        {/* ABOUT SECTION */}
        <div className="mt-6 max-w-3xl">
          {/* TITLE */}
          <div>
            <h1 className="text-2xl font-bold text-gray-900 ">
              {hotel?.name}
            </h1>


            <p className="text-gray-600 leading-relaxed text-sm pt-4">
              {hotel?.description}
            </p>
          </div>

        </div>
      </div>
      <div className="w-full flex justify-center">
  <div className="w-full max-w-screen-2xl">

    {/* SEARCH SECTION BELOW */}
    <div className="w-full bg-gray-100 sm:px-8 py-5 mt-5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm md:text-base font-medium text-gray-700 mb-4">
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
            <button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-md transition">
              Search →
            </button>
          </div>
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