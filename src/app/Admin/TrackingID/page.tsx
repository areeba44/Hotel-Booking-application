"use client";

import { useState } from "react";
import Link from "next/link";
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
import path from "path";

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

const initialTracking = [
  { id: 1, affiliate: "John Doe", trackingID: "AFF12345", bookings: 12, status: "Active" },
  { id: 2, affiliate: "Jane Smith", trackingID: "AFF67890", bookings: 8, status: "Inactive" },
  { id: 3, affiliate: "Ali Khan", trackingID: "AFF54321", bookings: 20, status: "Active" },
];

export default function CommissionTracking() {
  const [tracking, setTracking] = useState(initialTracking);

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
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Commission Tracking IDs</h1>
          <button className="flex items-center gap-2 px-3 py-2 bg-red-900 text-white rounded-xl hover:bg-red-400 transition text-sm">
            Add New Tracking ID
          </button>
        </div>

        <div className="overflow-x-auto bg-white rounded-2xl shadow p-4">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left text-gray-600">ID</th>
                <th className="px-4 py-2 text-left text-gray-600">Affiliate Name</th>
                <th className="px-4 py-2 text-left text-gray-600">Tracking ID</th>
                <th className="px-4 py-2 text-left text-gray-600">Bookings</th>
                <th className="px-4 py-2 text-left text-gray-600">Status</th>
                <th className="px-4 py-2 text-left text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tracking.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 border-b">
                  <td className="px-4 py-2">{item.id}</td>
                  <td className="px-4 py-2">{item.affiliate}</td>
                  <td className="px-4 py-2">{item.trackingID}</td>
                  <td className="px-4 py-2">{item.bookings}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                        item.status === "Active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="px-4 py-2 flex gap-2">
                    <button className="px-3 py-1 bg-red-400 text-white rounded-md">
                      Edit
                    </button>
                    <button className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {tracking.length === 0 && (
            <p className="text-center text-gray-400 mt-6">No tracking IDs found.</p>
          )}
        </div>
      </main>
    </div>
  );
}
