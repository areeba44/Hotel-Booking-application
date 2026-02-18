"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FileText,
  LayoutDashboard,
  Users,
  Hotel,
  DollarSign,
  Link2,
  BarChart3,
  Shield,
} from "lucide-react";

export default function SidebarCMS() {
  const [openCMS, setOpenCMS] = useState(false);

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/Admin/Sidebar" },
    { name: "Manage Users", icon: Users, path: "/Admin/Mangeuser" },
    { name: "Manage Hotel Listings", icon: Hotel, path: "/Admin/MangeHotelList" },
    { name: "Affiliate Commissions", icon: DollarSign, path: "/Admin/AffiliateCommissions" },
    { name: "Commission Tracking IDs", icon: Link2, path: "/Admin/TrackingID" },
    { name: "Analytics", icon: BarChart3, path: "/Admin/Analytics" },
    {
      name: "CMS (FAQ, About, Blog)",
      icon: FileText,
      dropdown: [
        { name: "FAQ", path: "/Admin/CMS/FAQ" },
        { name: "About", path: "/Admin/CMS/About" },
        { name: "Blog", path: "/Admin/CMS/Blog" },
      ],
    },
    { name: "Security & API Logs", icon: Shield },
  ];

  return (
    <aside className="w-72 bg-white shadow-lg border-r border-gray-200 flex flex-col">
      <div className="p-6 border-b border-gray-200 flex items-center justify-between">
        <h1 className="text-2xl font-extrabold text-amber-600">Admin Panel</h1>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item, index) => {
          const Icon = item.icon;

          // Agar CMS Dropdown ho
          if (item.dropdown) {
            return (
              <div key={index}>
                <div
                  onClick={() => setOpenCMS(!openCMS)}
                  className="flex items-center gap-3 w-full p-3 rounded-lg cursor-pointer hover:bg-indigo-50 transition-colors text-gray-700 font-medium group"
                >
                  <Icon className="w-5 h-5 text-black transition" />
                  <span className="text-sm">{item.name}</span>
                </div>

                {openCMS && (
                  <div className="pl-10 flex flex-col gap-2 mt-1">
                    {item.dropdown.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.path}
                        className="text-gray-600 text-sm px-2 py-1 rounded hover:bg-gray-100"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          }

          // Normal menu item
          return item.path ? (
            <Link
              key={index}
              href={item.path}
              className="flex items-center gap-3 w-full p-3 rounded-lg cursor-pointer hover:bg-indigo-50 transition-colors text-gray-700 font-medium group"
            >
              <Icon className="w-5 h-5 text-black transition" />
              <span className="text-sm">{item.name}</span>
            </Link>
          ) : (
            <div
              key={index}
              className="flex items-center gap-3 w-full p-3 rounded-lg cursor-pointer hover:bg-indigo-50 transition-colors text-gray-700 font-medium group"
            >
              <Icon className="w-5 h-5 text-black transition" />
              <span className="text-sm">{item.name}</span>
            </div>
          );
        })}
      </nav>

      <div className="p-6 border-t border-gray-200 text-gray-400 text-xs">
        © 2026 MyAdmin
      </div>
    </aside>
  );
}
