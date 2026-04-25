import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  FaUser,
  FaHeart,
  FaHistory,
  FaCalendarCheck,
  FaSearch
} from "react-icons/fa";

export default function AccountPage() {
  const menu = [
    { name: "Account", path: "/Account", icon: <FaUser /> },
    { name: "Favorites", path: "/Fav", icon: <FaHeart /> },
    { name: "Recently viewed", path: "/Rec", icon: <FaHistory /> },
    { name: "Bookings", path: "/Booking", icon: <FaCalendarCheck /> },
    { name: "Search preferences", path: "/Search", icon: <FaSearch /> },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">

      <Navbar />

      <div className="flex flex-1 flex-col lg:flex-row gap-5 p-10 px-20">

        {/* SIDEBAR */}
        <div className="w-full lg:w-64 bg-white rounded-xl p-4">

          <button className="mb-4 text-sm text-gray-600">
            ← Back
          </button>

          <ul className="space-y-3">
            {menu.map((item, i) => (
              <li key={i}>
                <Link
                  href={item.path}
                  className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded"
                >
                  <span className="text-gray-700 text-lg">{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>

          <button className="mt-6 w-full bg-blue-950 text-white py-2 rounded-md  cursor-pointer">
            Logout
          </button>
        </div>

        {/* CONTENT */}
        <main className="flex-1 bg-white rounded-xl p-8">

          <h1 className="text-3xl font-bold text-gray-700 mb-2">
            Account Settings
          </h1>
          <p className="text-gray-500 mb-6">
            Manage your personal details, security settings and preferences.
          </p>

          {/* NAME + EMAIL */}
          <div className="border-b-gray-300 shadow-xl rounded-xl p-5 mb-5">
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-sm text-gray-500">Name</p>
                <p className="font-semibold text-lg">Jhon Smith</p>
              </div>
              <span className="text-gray-400 text-xl">›</span>
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-1">Email</p>
              <input
                type="email"
                value="mebahe6344@newtrea.com"
                disabled
                className="w-full bg-gray-100 rounded-md px-4 py-2 text-gray-700 outline-none"
              />
            </div>
          </div>

          {/* PASSWORD */}
          <div className="border-b-gray-300 shadow-xl p-5 mb-6 flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500">Password</p>
              <p className="tracking-widest text-lg">********</p>
            </div>
            <span className="text-gray-400 text-xl">›</span>
          </div>

          {/* SUBSCRIPTIONS */}
          <div className="mb-6">
            <h2 className="font-semibold mb-3">Subscriptions</h2>
            <label className="flex items-center gap-3 text-gray-600">
              <input type="checkbox" className="w-4 h-4" />
              I’d like to receive travel deals, news and inspiration in my inbox.
            </label>
          </div>

          {/* DANGER ZONE */}
          <div className="bg-red-100 text-red-600 px-4 py-2 rounded-md mb-4 font-medium">
            Danger Zone
          </div>

          <button className="w-full border border-red-500 text-red-500 py-3 rounded-md hover:bg-red-50 transition">
            Delete Account
          </button>

        </main>

      </div>

      <Footer />
    </div>
  );
}