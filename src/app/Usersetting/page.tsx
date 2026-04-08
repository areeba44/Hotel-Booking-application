"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { AiOutlineCamera } from "react-icons/ai";

export default function UserSettings() {
  const [activeTab, setActiveTab] = useState("profile");
  const [profilePic, setProfilePic] = useState("/default-avatar.png");
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select a valid image file");
      return;
    }

    const previewUrl = URL.createObjectURL(file);
    setPreview(previewUrl);
    setProfilePic(previewUrl);
  };

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  return (
    <div className="w-full w-max-screen-2xl max-auto"> {/* ✅ Parent Div */}

      <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
        
        {/* Sidebar */}
        <div className="w-full md:w-64 bg-white shadow-md p-6 flex flex-col items-start">
          <h2 className="text-2xl font-bold mb-6">Settings</h2>
          <ul className="space-y-4 w-full">
            {[
              "profile",
              "password",
              "forgot",
              "notifications",
              "privacy",
            ].map((tab) => (
              <li
                key={tab}
                className={`cursor-pointer px-3 py-2 rounded-xl w-full capitalize ${
                  activeTab === tab
                    ? "bg-blue-100 text-blue-900 font-semibold"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === "profile"
                  ? "Profile"
                  : tab === "password"
                  ? "Change Password"
                  : tab === "forgot"
                  ? "Forgot Password"
                  : tab === "notifications"
                  ? "Notifications"
                  : "Privacy"}
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8 flex flex-col items-center">
          
          {activeTab === "profile" && (
            <div className="bg-white rounded-2xl shadow-md p-6 max-w-xl w-full">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Profile Information
              </h3>

              {/* Profile Picture */}
              <div className="flex flex-col items-center mb-6">
                <div className="relative">
                  <Image
                    src={preview || profilePic}
                    alt="Profile Picture"
                    width={120}
                    height={120}
                    className="rounded-full object-cover border-4 border-blue-900"
                  />
                  <label className="absolute bottom-0 right-0 bg-blue-900 rounded-full p-2 cursor-pointer hover:bg-blue-400">
                    <AiOutlineCamera className="text-white w-5 h-5" />
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </label>
                </div>
                <span className="text-gray-500 mt-2 text-sm">
                  Click camera to upload
                </span>
              </div>

              {/* Profile Form */}
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium">Name</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full border rounded-xl px-4 py-2 mt-1 focus:ring-2 focus:ring-blue-900 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium">Email</label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full border rounded-xl px-4 py-2 mt-1 focus:ring-2 focus:ring-blue-900 outline-none"
                  />
                </div>
                <button className="bg-blue-900 hover:bg-blue-400 text-white px-6 py-2 rounded-xl w-full mt-2 shadow-md">
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {activeTab === "password" && (
            <div className="bg-white rounded-2xl shadow-md p-6 max-w-xl w-full">
              <h3 className="text-2xl font-bold mb-4">Change Password</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700">Current Password</label>
                  <input
                    type="password"
                    placeholder="Current Password"
                    className="w-full border rounded-xl px-4 py-2 mt-1 focus:ring-2 focus:ring-blue-400 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">New Password</label>
                  <input
                    type="password"
                    placeholder="New Password"
                    className="w-full border rounded-xl px-4 py-2 mt-1 focus:ring-2 focus:ring-blue-400 outline-none"
                  />
                </div>
                <button className="bg-blue-900 hover:bg-blue-400 text-white px-6 py-2 rounded-xl w-full mt-2 shadow-md">
                  Update Password
                </button>
              </div>
            </div>
          )}

          {activeTab === "forgot" && (
            <div className="bg-white rounded-2xl shadow-md p-6 max-w-xl w-full">
              <h3 className="text-2xl font-bold mb-4">Forgot Password</h3>
              <p className="text-gray-700 mb-4">
                Enter your email to reset your password:
              </p>
              <div className="flex flex-col space-y-3">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
                />
                <button className="bg-blue-900 hover:bg-blue-400 text-white px-6 py-2 rounded-xl w-full shadow-md">
                  Send Reset Link
                </button>
              </div>
            </div>
          )}

          {activeTab === "notifications" && (
            <div className="bg-white rounded-2xl shadow-md p-6 max-w-xl w-full">
              <h3 className="text-2xl font-bold mb-4">Notifications</h3>
              <p className="text-gray-700">
                Manage your hotel notification preferences here.
              </p>
            </div>
          )}

          {activeTab === "privacy" && (
            <div className="bg-white rounded-2xl shadow-md p-6 max-w-xl w-full">
              <h3 className="text-2xl font-bold mb-4">Privacy</h3>
              <p className="text-gray-700">Manage your privacy settings here.</p>
            </div>
          )}

        </div>
      </div>

    </div>
  );
}
