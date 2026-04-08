"use client";

import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";

export default function HotelDetailSkeleton() {
  return (
    <div className="w-full animate-pulse px-6 py-6 max-w-7xl mx-auto">

      {/* Top Gallery */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="col-span-2 h-105 bg-gray-300 rounded-xl"></div>

        <div className="col-span-2 grid grid-cols-2 gap-4">
          <div className="h-50 bg-gray-300 rounded-xl"></div>
          <div className="h-50 bg-gray-300 rounded-xl"></div>
          <div className="h-50 bg-gray-300 rounded-xl"></div>
          <div className="h-50 bg-gray-300 rounded-xl"></div>
        </div>
      </div>

      {/* Title + Price */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <div className="h-6 w-64 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 w-40 bg-gray-200 rounded"></div>
        </div>

        <div className="text-right">
          <div className="h-6 w-20 bg-gray-300 rounded mb-2"></div>
          <div className="h-10 w-36 bg-gray-300 rounded-lg"></div>
        </div>
      </div>

      {/* Compare Section */}
      <div className="mb-6">
        <div className="h-5 w-48 bg-gray-300 rounded mb-2"></div>
        <div className="h-4 w-64 bg-gray-200 rounded"></div>
      </div>

      {/* Deals List */}
      <div className="space-y-4 mb-8">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="flex justify-between items-center p-4 border rounded-lg"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-300 rounded"></div>
              <div>
                <div className="h-4 w-24 bg-gray-300 rounded mb-1"></div>
                <div className="h-3 w-16 bg-gray-200 rounded"></div>
              </div>
            </div>

            <div className="text-right">
              <div className="h-4 w-16 bg-gray-300 rounded mb-2"></div>
              <div className="h-8 w-24 bg-gray-300 rounded"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Map Section */}
      <div className="h-64 bg-gray-300 rounded-xl mb-8"></div>

      {/* Info Sections */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        {[1, 2, 3].map((item) => (
          <div key={item}>
            <div className="h-5 w-32 bg-gray-300 rounded mb-3"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-4/6"></div>
            </div>
          </div>
        ))}
      </div>

      {/* About */}
      <div className="mb-8">
        <div className="h-5 w-40 bg-gray-300 rounded mb-3"></div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>
      </div>

      {/* Amenities */}
      <div className="mb-8">
        <div className="h-5 w-48 bg-gray-300 rounded mb-3"></div>
        <div className="flex gap-3 flex-wrap">
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="h-8 w-24 bg-gray-300 rounded-full"
            ></div>
          ))}
        </div>
      </div>

      {/* Reviews */}
      <div className="grid grid-cols-2 gap-6">
        {[1, 2].map((item) => (
          <div key={item} className="p-4 border rounded-xl">
            <div className="h-4 w-16 bg-gray-300 rounded mb-2"></div>
            <div className="h-3 w-full bg-gray-200 rounded mb-1"></div>
            <div className="h-3 w-5/6 bg-gray-200 rounded"></div>
          </div>
        ))}
      </div>
    </div>
  );
}