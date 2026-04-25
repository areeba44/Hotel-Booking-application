"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Front from "@/app/Front/page";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [popupMsg, setPopupMsg] = useState("");

  const existingUsers = ["test@gmail.com", "admin@gmail.com"];

  const handleContinue = () => {
    if (!email) {
      setPopupMsg("Please Enter Your Email");
      setShowPopup(true);
      return;
    }

    if (!existingUsers.includes(email)) {
      setPopupMsg("Email not found. Please create account");
      setShowPopup(true);
    } else {
      router.push("/");
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">

      {/* 🔥 POPUP (inside same file) */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-[200]">
          <div className="bg-[#e9e6e6] w-[330px] rounded-xl shadow-xl p-5">

            <p className="text-sm font-semibold text-gray-700 mb-2">
              ratecompares.com says
            </p>

            <p className="text-sm text-gray-800 mb-6">
              {popupMsg}
            </p>

            <button
  onClick={() => {
    setShowPopup(false);
    router.push(`/Createaccount?email=${email}`);
  }}
  className="px-6 py-1.5 border-2 border-[#8B3A2E] rounded-full text-sm font-semibold text-[#8B3A2E] hover:bg-[#8B3A2E] hover:text-white transition"
>
  OK
</button>
            </div>

          </div>
      
      )}

      {/* 🔹 Background */}
      <div className="absolute inset-0">
        <Navbar />

        <div className="absolute inset-0">
          <Front />
          <div className="w-full h-full bg-[url('/img1.png')] bg-cover bg-center"></div>
          <Footer />
        </div>
      </div>

      {/* 🔹 Blur */}
      <div className="absolute inset-0 backdrop-blur-md bg-black/40 z-40"></div>

      {/* 🔹 Login Box */}
      <div className="relative z-50 flex items-center justify-center h-full">
        <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6 relative">

          {/* Close */}
          <button
            onClick={() => router.push("/")}
            className="absolute top-3 right-3 text-gray-500 hover:text-black text-lg cursor-pointer"
          >
            ✕
          </button>

          <h2 className="text-3xl font-bold text-blue-950 mb-2">
            Hey there. Let’s go places.
          </h2>

          <p className="text-[15px] text-gray-800 mb-5">
            Sign in to get exclusive deals, track prices and book faster.
          </p>

          {/* Email */}
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 text-blue-950 rounded-lg px-4 py-2 mb-4 focus:ring-2 focus:ring-blue-900 outline-none"
          />

          {/* Button */}
          <button
            onClick={handleContinue}
            className="w-full h-[47px] text-[18px] font-sans cursor-pointer bg-blue-950 text-white py-2 rounded-md transition mb-3"
          >
            Continue
          </button>

          {/* Divider */}
          <div className="flex items-center gap-2 my-4">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="text-sm text-gray-400">or</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Google */}
          <button className="w-full font-sans font-bold cursor-pointer text-[18px] border border-gray-300 py-4 rounded-lg hover:bg-gray-100 transition flex items-center justify-center gap-2">
            <FcGoogle size={30} />
            Continue with Google
          </button>

          <p className="text-[15px] text-gray-500 mt-4 text-center font-sans">
            By adding your email you accept our Terms of Use and Privacy Policy.
          </p>

        </div>
      </div>
    </div>
  );
}