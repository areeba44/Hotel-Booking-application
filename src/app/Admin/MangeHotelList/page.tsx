"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Pencil, Trash2, Plus } from "lucide-react";
import {
  LayoutDashboard,
  Users,
  Hotel,
  DollarSign,
  Link2,
  BarChart3,
  FileText,
  Shield,
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/Admin/Sidebar" },
  { name: "Manage Users", icon: Users, path: "/Admin/Mangeuser" },
  { name: "Manage Hotel Listings", icon: Hotel, path: "/Admin/MangeHotelList" },
  { name: "Affiliate Commissions", icon: DollarSign, path: "/Admin/AffiliateCommissions" },
  { name: "Commission Tracking IDs", icon: Link2, path: "/Admin/TrackingID" },
  { name: "Analytics", icon: BarChart3, path: "/Admin/Analytics" },
  { name: "CMS (FAQ, About, Blog)", icon: FileText, path: "/Admin/CMS" },
  { name: "Security & API Logs", icon: Shield },
];

const initialHotels = [
  { id: 1, name: "Royal Rose Hotel", city: "Abu Dhabi", status: "Active", rating: 4, image: "/I1.PNG" },
  { id: 2, name: "Grand Palace", city: "Dubai", status: "Inactive", rating: 5, image: "/I2.PNG" },
  { id: 3, name: "Sunshine Resort", city: "Doha", status: "Active", rating: 3, image: "/I3.PNG" },
  { id: 4, name: "Ocean View", city: "Muscat", status: "Active", rating: 4, image: "/I4.PNG" },
  { id: 5, name: "Ocean View", city: "Muscat", status: "Active", rating: 4, image: "/I5.PNG" },
];

export default function ManageHotelsRow() {
  const [hotels, setHotels] = useState(initialHotels);

  return (
    <div className="flex min-h-screen bg-gray-50 font-sans">
      {/* Sidebar */}
      <aside className="w-72 bg-white shadow-lg border-r border-gray-200 flex flex-col">
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <h1 className="text-2xl font-extrabold text-red-900">Admin Panel</h1>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            if (item.path) {
              return (
                <Link
                  key={index}
                  href={item.path}
                  className="flex items-center gap-3 w-full p-3 rounded-lg cursor-pointer hover:bg-indigo-50 transition-colors text-gray-700 font-medium group"
                >
                  <Icon className="w-5 h-5 text-black transition" />
                  <span className="text-sm">{item.name}</span>
                </Link>
              );
            } else {
              return (
                <div
                  key={index}
                  className="flex items-center gap-3 w-full p-3 rounded-lg cursor-pointer hover:bg-indigo-50 transition-colors text-gray-700 font-medium group"
                >
                  <Icon className="w-5 h-5 text-black transition" />
                  <span className="text-sm">{item.name}</span>
                </div>
              );
            }
          })}
        </nav>

        <div className="p-6 border-t border-gray-200 text-gray-400 text-xs">
          © 2026 MyAdmin
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex flex-col flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Manage Hotel Listings</h1>
          <button className="flex items-center gap-2 px-3 py-2 bg-red-900 text-white rounded-xl hover:bg-red-400 transition text-sm">
            <Plus className="w-4 h-4" /> Add New Hotel
          </button>
        </div>

        {/* Horizontal Scrollable Row */}
        <div className="flex gap-3 overflow-x-auto py-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          {hotels.map((hotel) => (
            <div
              key={hotel.id}
              className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition flex-shrink-0 w-52 sm:w-48"
            >
              {/* Hotel Image */}
              <div className="relative w-full h-32">
                <Image src={hotel.image} alt={hotel.name} fill className="object-cover" />
              </div>

              {/* Hotel Info */}
              <div className="p-2 flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <h2 className="font-semibold text-sm">{hotel.name}</h2>
                  <span
                    className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                      hotel.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {hotel.status}
                  </span>
                </div>

                <p className="text-gray-500 text-xs">{hotel.city}</p>
                <p className="text-yellow-500 text-sm">
                  {"★".repeat(hotel.rating)}{" "}
                  <span className="text-gray-400">{5 - hotel.rating}★</span>
                </p>

                {/* Actions */}
                <div className="flex gap-1 mt-2">
                  <button className="flex-1 flex items-center justify-center gap-1 px-2 py-1 bg-amber-500 text-white rounded-lg text-xs hover:bg-amber-600 transition">
                    <Pencil className="w-3 h-3" /> Edit
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-1 px-2 py-1 bg-red-500 text-white rounded-lg text-xs hover:bg-red-600 transition">
                    <Trash2 className="w-3 h-3" /> Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {hotels.length === 0 && (
          <p className="text-center text-gray-400 mt-6">No hotels found.</p>
        )}
      </div>
    </div>
  );
}
