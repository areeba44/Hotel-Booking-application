"use client"

import {
  FaWifi,
  FaCar,
  FaDumbbell,
  FaUtensils,
  FaSnowflake,
  FaBath,
  FaSmokingBan,
  FaArrowUp,
  FaFire,
  FaTv,
  FaChargingStation,
} from "react-icons/fa";

import {  GiKitchenKnives } from "react-icons/gi";
import { GiHotMeal } from "react-icons/gi";
import { MdSpa, MdPool, MdPeople } from "react-icons/md";

export default function Amenities() {
  const amenities = [
    { icon: <FaWifi />, name: "Wi-Fi" },
    { icon: <FaCar />, name: "Free Parking" },
    { icon: <FaDumbbell />, name: "Fitness Center" },
    { icon: <FaUtensils />, name: "Restaurant" },

    { icon: <FaSnowflake />, name: "Air Conditioning" },
    { icon: <FaBath />, name: "Bathroom" },
    { icon: <FaSmokingBan />, name: "Non-Smoking Rooms" },
    { icon: <FaArrowUp />, name: "Elevator" },

    { icon: <GiKitchenKnives />, name: "Kitchen" },
    { icon: <GiHotMeal />, name: "Hot Tub" },
    { icon: <MdPool />, name: "Pool" },
    { icon: <FaFire />, name: "Fireplace" },

    { icon: <FaChargingStation />, name: "EV Charging" },
    { icon: <MdSpa />, name: "Spa" },
    { icon: <MdPeople />, name: "Adults Only" },
    { icon: <FaTv />, name: "TV" },
  ];

  return (
    <div className="continer px-9">
        
    <div className="bg-red-900 text-white  py-16 px-6 relative bottom-13">
     {/* Heading */}
        <h2 className="text-3xl text-center md:text-4xl font-bold mb-3 ">
          Amenities for a Comfortable Stay
        </h2>

        <p className="text-sm text-center md:text-base mb-10">
          Everything you need for a relaxing and hassle-free experience
        </p>
      <div className=" mx-auto text-center">

        

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  text-left">

          {amenities.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <span className="text-xl">{item.icon}</span>
              <p className="text-sm">{item.name}</p>
            </div>
          ))}

        </div>
      </div>
    </div>
    </div>
  );
}