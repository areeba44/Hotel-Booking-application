"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Front from "@/app/Front/page";

export default function CreateAccountPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    name: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
    router.push("/");
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">

      {/* 🔹 Background (same as login) */}
      <div className="absolute inset-0">
        <Navbar />

        <div className="absolute inset-0">
          <Front />
          <div className="w-full h-full bg-[url('/img1.png')] bg-cover bg-center"></div>
          <Footer />
        </div>
      </div>

      {/* 🔹 Blur overlay */}
      <div className="absolute inset-0 backdrop-blur-md bg-black/40 z-40"></div>

      {/* 🔹 Form */}
      <div className="relative z-50 flex items-center justify-center h-full px-4">
        <div className="w-full max-w-md relative bg-white/95 rounded-2xl shadow-2xl p-8">

          {/* Close */}
          <button
            onClick={() => router.push("/")}
            className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 text-lg cursor-pointer"
          >
            ✕
          </button>

          {/* Heading */}
          <h1 className="text-3xl font-semibold text-blue-950 mb-1">
            Create account
          </h1>
          <p className="text-sm text-gray-500 mb-6">
            Create your account to continue your journey
          </p>

          <form onSubmit={handleSubmit}>

            {/* Email */}
            <div className="">
              <label className="text-xs text-gray-500">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black outline-none transition"
                required
              />
            </div>

            {/* Name */}
            <div className="">
              <label className="text-xs text-gray-500">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={form.name}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black outline-none transition"
                required
              />
            </div>

            {/* Password */}
            <div className="mb-6">
              <label className="text-xs text-gray-500">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Create a secure password"
                value={form.password}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black outline-none transition"
                required
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-blue-950 text-white cursor-pointer py-2.5 rounded-lg font-medium hover:bg-gray-900 transition"
            >
              Submit
            </button>

          </form>

          {/* Footer text */}
          <p className="text-xs text-gray-400 text-center mt-6">
            By continuing, you agree to our{" "}
            <span className="underline cursor-pointer">Terms</span> and{" "}
            <span className="underline cursor-pointer">Privacy Policy</span>.
          </p>

        </div>
      </div>
    </div>
  );
}