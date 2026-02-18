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

const initialAffiliates = [
  { id: 1, name: "John Doe", email: "john@example.com", earnings: "$540", status: "Active" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", earnings: "$820", status: "Inactive" },
  { id: 3, name: "Ali Khan", email: "ali@example.com", earnings: "$1,200", status: "Active" },
];

export default function AffiliateCommissions() {
  const [affiliates, setAffiliates] = useState(initialAffiliates);

  return (
    <div className="flex min-h-screen bg-gray-50 font-sans">
      {/* Sidebar */}
      <aside className="w-72 bg-white shadow-lg border-r border-gray-200 flex flex-col">
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <h1 className="text-2xl font-extrabold text-amber-600">Admin Panel</h1>
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
          <h1 className="text-2xl font-bold text-gray-800">Affiliate Commissions</h1>
          <button className="flex items-center gap-2 px-3 py-2 bg-amber-500 text-white rounded-xl hover:bg-amber-600 transition text-sm">
            Add New Affiliate
          </button>
        </div>

        <div className="overflow-x-auto bg-white rounded-2xl shadow p-4">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left text-gray-600">ID</th>
                <th className="px-4 py-2 text-left text-gray-600">Name</th>
                <th className="px-4 py-2 text-left text-gray-600">Email</th>
                <th className="px-4 py-2 text-left text-gray-600">Total Earnings</th>
                <th className="px-4 py-2 text-left text-gray-600">Status</th>
                <th className="px-4 py-2 text-left text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {affiliates.map((affiliate) => (
                <tr key={affiliate.id} className="hover:bg-gray-50 border-b">
                  <td className="px-4 py-2">{affiliate.id}</td>
                  <td className="px-4 py-2">{affiliate.name}</td>
                  <td className="px-4 py-2">{affiliate.email}</td>
                  <td className="px-4 py-2">{affiliate.earnings}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                        affiliate.status === "Active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                      }`}
                    >
                      {affiliate.status}
                    </span>
                  </td>
                  <td className="px-4 py-2 flex gap-2">
                    <button className="px-3 py-1 bg-amber-600 text-white rounded-md hover:bg-amber-500">
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

          {affiliates.length === 0 && (
            <p className="text-center text-gray-400 mt-6">No affiliates found.</p>
          )}
        </div>
      </main>
    </div>
  );
}
