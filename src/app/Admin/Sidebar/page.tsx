"use client";

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
  { name: "Dashboard", icon: LayoutDashboard, path: "/Admin" },
  { name: "Manage Users", icon: Users, path: "/Admin/Mangeuser" },
  { name: "Manage Hotel Listings", icon: Hotel, path: "/Admin/MangeHotelList" },
  { name: "Affiliate Commissions ", icon: DollarSign, path: "/Admin/AffiliateCommissions" },
  { name: "Commission Tracking IDs", icon: Link2, path: "/Admin/TrackingID" },
  { name: "Analytics ", icon: BarChart3, path: "/Admin/Analytics" },
  { name: "CMS (FAQ, About, Blog)", icon: FileText, path: "/Admin/CMS" },
  { name: "Security & API Logs", icon: Shield },
];

export default function AdminDashboard() {
  return (
         <div className="w-full min-h-screen bg-gray-50 font-sans">
  <div className="max-w-screen-2xl mx-auto flex">
      
      {/* ✅ FIXED Sidebar */}
      <aside className="fixed top-0 left-0 w-72 h-screen bg-white shadow-lg border-r border-gray-200 flex flex-col z-50">
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <h1 className="text-2xl font-extrabold text-blue-950">Admin Panel</h1>
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
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

      {/* ✅ Main Content (margin added) */}
      <main className="flex-1 ml-72 p-8 space-y-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <h2 className="text-3xl font-bold text-gray-800">Welcome, Admin!</h2>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Total Users", value: "1,245" },
            { title: "Active Hotels", value: "320" },
            { title: "Monthly Earnings", value: "$8,540" },
            { title: "Total Clicks", value: "54K" },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-gray-400 text-xs font-semibold uppercase">
                {card.title}
              </h3>
              <p className="text-2xl font-bold mt-2 text-gray-800">
                {card.value}
              </p>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Recent Activity
          </h3>
          <ul className="divide-y divide-gray-100 text-gray-600">
            {[
              "New user registered",
              "Hotel listing updated",
              "Affiliate commission recorded",
              "Security log generated",
            ].map((item, idx) => (
              <li
                key={idx}
                className="py-3 flex justify-between items-center hover:bg-gray-50 px-3 rounded-lg transition"
              >
                <span>• {item}</span>
                <span className="text-xs text-gray-400">2h ago</span>
              </li>
            ))}
          </ul>
        </div>

      </main>
    </div></div>
  );
}