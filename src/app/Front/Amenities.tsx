"use client"

import { FaWifi, FaDumbbell, FaSpa, FaShower, FaUtensils, FaSmokingBan, FaHotTub, FaFireAlt, FaUsers, FaCar } from "react-icons/fa";
import { TbAirConditioning } from "react-icons/tb";
import { MdPool, MdRestaurant, MdElevator, MdEvStation } from "react-icons/md";

export default function Amenities(){
    return(
        <section className="w-full bg-red-900 py-16 px-6 md:px-16 relative bottom-30">

            {/* Heading */}
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-semibold text-white mb-3">
                    Amenities for a Comfortable Stay
                </h2>
                <p className="text-white max-w-2xl mx-auto">
                    Everything you need for a relaxing and hassle-free experience
                </p>
            </div>

            {/* Amenities Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 ml-33 max-w-6xl mx-auto text-white">

                <div className="flex items-center gap-2">
                    <FaWifi className="text-2xl"/>
                    <span className="text-white">Wi-Fi</span>
                </div>

                <div className="flex items-center gap-2">
                    <FaCar className="text-2xl"/>
                    <span className="text-white">Free Parking</span>
                </div>

                <div className="flex items-center gap-2">
                    <FaDumbbell className="text-2xl"/>
                    <span className="text-white">Fitness Center</span>
                </div>

                <div className="flex items-center gap-2">
                    <MdRestaurant className="text-2xl"/>
                    <span className="text-white">Restaurant</span>
                </div>

                <div className="flex items-center gap-2">
                    <TbAirConditioning className="text-2xl"/>
                    <span className="text-white">Air Conditioning</span>
                </div>

                <div className="flex items-center gap-2">
                    <FaShower className="text-2xl"/>
                    <span className="text-white">Bathroom</span>
                </div>

                <div className="flex items-center gap-2">
                    <FaSmokingBan className="text-2xl"/>
                    <span className="text-white">Non-Smoking Rooms</span>
                </div>

                <div className="flex items-center gap-2">
                    <MdElevator className="text-2xl"/>
                    <span className="text-white">Elevator</span>
                </div>

                <div className="flex items-center gap-2">
                    <FaUtensils className="text-2xl"/>
                    <span className="text-white">Kitchen</span>
                </div>

                <div className="flex items-center gap-2">
                    <FaHotTub className="text-2xl"/>
                    <span className="text-white">Hot Tub</span>
                </div>

                <div className="flex items-center gap-2">
                    <MdPool className="text-2xl"/>
                    <span className="text-white">Pool</span>
                </div>

                <div className="flex items-center gap-2">
                    <FaFireAlt className="text-2xl"/>
                    <span className="text-white">Fireplace</span>
                </div>

                <div className="flex items-center gap-2">
                    <MdEvStation className="text-2xl"/>
                    <span className="text-white">EV Charging</span>
                </div>

                <div className="flex items-center gap-2">
                    <FaSpa className="text-2xl"/>
                    <span className="text-white">Spa</span>
                </div>

                <div className="flex items-center gap-2">
                    <FaUsers className="text-2xl"/>
                    <span className="text-white">Adults Only</span>
                </div>

                <div className="flex items-center gap-2">
                    <FaUsers className="text-2xl"/>
                    <span className="text-white">Tv</span>
                </div>

            </div>

        </section>
    )
}