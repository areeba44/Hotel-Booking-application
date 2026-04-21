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
export default function FavoritesPage() {
  const menu = [
    { name: "Account", path: "/account", icon: <FaUser /> },
    { name: "Favorites", path: "/Fav", icon: <FaHeart /> },
    { name: "Recently viewed", path: "/Rec", icon: <FaHistory /> },
    { name: "Bookings", path: "/Booking", icon: <FaCalendarCheck /> },
    { name: "Search preferences", path: "/preferences", icon: <FaSearch /> },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">

      <Navbar />

      {/* MAIN */}
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
                  <span className="text-blue-900 text-lg">{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>


          <button className="mt-6 w-full bg-blue-900 text-white py-2 rounded-md">
            Logout
          </button>
        </div>

        {/* CONTENT */}
        <main className="flex-1 bg-white rounded-xl p-6">
          <h1 className="text-3xl font-bold mb-4 text-blue-950">
            Your Favorite Stays
          </h1>
          <p className="text-gray-500">
            Your favorites have not been added yet
          </p>
        </main>

      </div>

      <Footer />

    </div>
  );
}