"use client";

import { useEffect, useState } from "react";
import {
  Wifi,
  Car,
  Dumbbell,
  Utensils,
  Snowflake,
  Bath,
  CookingPot,
  Waves,
  Flame,
  BatteryCharging,
  Users,
  Tv,
} from "lucide-react";

const amenities = [
  { icon: Wifi, name: "Free Wi-Fi" },
  { icon: Car, name: "Free Parking" },
  { icon: Dumbbell, name: "Fitness Center" },
  { icon: Utensils, name: "Restaurant" },
  { icon: Snowflake, name: "Air Conditioning" },
  { icon: Bath, name: "Luxury Bathroom" },
  { icon: CookingPot, name: "Kitchen" },
  { icon: Waves, name: "Swimming Pool" },
  { icon: Flame, name: "Fireplace" },
  { icon: BatteryCharging, name: "EV Charging" },
  { icon: Users, name: "Adults Only" },
  { icon: Tv, name: "Smart TV" },
];

export default function Amenities() {
  const [loading, setLoading] = useState(true);

  // simulate loading when scroll comes into view
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200); // 1.2 sec skeleton

    return () => clearTimeout(timer);
  }, []);

  const SkeletonCard = () => (
    <div className="bg-white/10 border border-white/20 rounded-xl p-5 flex flex-col items-center animate-pulse">
      <div className="w-7 h-7 bg-white/30 rounded-full mb-3"></div>
      <div className="w-16 h-3 bg-white/30 rounded"></div>
    </div>
  );

  return (
    <div className="bg-white bottom-10 relative">

      <div className="max-w-screen-2xl mx-auto relative w-full">

        <div className="bg-gradient-to-b from-blue-900/100 to-blue-950/100 text-white py-12 px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center">
            Amenities for a Comfortable Stay
          </h2>

          {/* Subtext */}
          <p className="text-gray-200 mb-10 max-w-2xl mx-auto text-sm sm:text-base text-center">
            Everything you need for a relaxing and luxurious stay with premium facilities.
          </p>

          {/* GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">

            {loading
              ? Array.from({ length: 12 }).map((_, i) => (
                  <SkeletonCard key={i} />
                ))
              : amenities.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={index}
                      className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 sm:p-5 flex flex-col items-center justify-center text-center transition-all duration-300 hover:bg-white hover:text-red-900 hover:shadow-xl hover:scale-105 cursor-pointer"
                    >
                      <Icon
                        size={26}
                        className="mb-2 transition-transform duration-300 group-hover:scale-110"
                      />

                      <p className="text-xs sm:text-sm font-medium">
                        {item.name}
                      </p>
                    </div>
                  );
                })}

          </div>

        </div>

      </div>

    </div>
  );
}