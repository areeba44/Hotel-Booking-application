"use client"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Image from "next/image";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import { Clock } from "lucide-react";
export default function Detail() {

  const params = useParams()
  const slug = params?.slug

  const [hotel, setHotel] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!slug) return;

    const fetchDetails = async () => {
      try {

        setLoading(true)
        console.log("slug", slug)

        const parsedData = JSON.parse(
          decodeURIComponent(Array.isArray(slug) ? slug[0] : slug)
        )


        const res = await axios.get(
          `https://hotel-booking-backend-wajid.vercel.app/hotels/${parsedData.id}`
        )

        if (res.data) {
          setHotel(res.data[0])
        }

      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }

    fetchDetails()

  }, [slug])

  const images = hotel?.images ? JSON.parse(hotel.images || "[]") : []
  const amenities = hotel?.amenities ? JSON.parse(hotel.amenities || "[]") : []

  return (
    <>
      <Navbar />

      {/* HERO */}
      <div className="max-w-screen-2xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              {hotel?.name}
            </h1>
            <p className="text-gray-500 mt-1">
              {hotel?.address}
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="bg-blue-900 text-white px-3 py-1 rounded-lg">
                ⭐ {hotel?.overall_rating}
              </span>
              <span>({hotel?.reviews} reviews)</span>
            </div></div></div></div>
      {/* IMAGE GALLERY */}

      <div className="max-w-screen-2xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <img
              src={images[0]?.thumbnail}
              className="w-full h-[320px] md:h-[420px] object-cover rounded-xl"
            />
          </div>
            

          <div className="grid grid-cols-2 gap-4">
            {images?.slice(1, 5)?.map((img: any, index: number) => (
              <img
                key={index}
                src={img?.thumbnail || "/placeholder.jpg"}
                className="w-full h-[150px] md:h-[200px] object-cover rounded-xl hover:scale-105 transition"
              />
            ))}
          </div></div></div>
      {/* ABOUT */}

      <div className="max-w-screen-2xl mx-auto px-4 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 tracking-tight">
              About this hotel
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {hotel?.description}
            </p>
          </div>
          {/* SIDE CARD */}

          <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-3">
              Hotel Info
            </h3>

            <p className="text-gray-600 mb-2">
              📞 {hotel?.phone}
            </p>
            <a
              href={hotel?.directions}
              target="_blank"
              className="text-blue-600 underline text-sm">
              View on Google Maps
            </a>
          </div></div></div>

      {/* AMENITIES */}
      <div className="max-w-screen-2xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 tracking-tight">
          Amenities
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {amenities?.slice(0, 12)?.map((item: string, index: number) => (
            <div
              key={index}
              className="bg-gray-100 rounded-xl p-3 flex items-center justify-center
                   shadow-inner hover:shadow-lg transition-all duration-300
                   transform hover:-translate-y-1 cursor-pointer"
            >
              <p className="text-xs font-medium text-gray-700 text-center line-clamp-2">
                {item || "N/A"}
              </p>
            </div>
          ))}
        </div>
      </div>

 {/* check in and out */}
 <div className="max-w-screen-2xl mx-auto px-4">
    <div className="bg-white py-10">
      
        
        {/* Heading */}
        <h2 className="text-2xl font-bold mb-6 text-gray-800 tracking-tight">
          Check in and check out
        </h2>

        {/* Card */}
        <div className="bg-white rounded-xl max-w-screen-2xl mx-auto p-6 flex flex-col md:flex-row items-start md:items-center gap-6">
          
          {/* Icon */}
          <div className="bg-gray-100 p-4 rounded-full">
            <Clock className="w-8 h-8 text-gray-600" />
          </div>

          {/* Times */}
          <div className="flex flex-col md:flex-row justify-between w-full gap-6">
            
            {/* Check-in */}
            <div>
              <p className="text-gray-500 text-sm mb-1">
                Check in from:
              </p>
              <p className="text-xl font-semibold">
                {hotel?.check_in_time || "00:00"}
              </p>
            </div>

            {/* Check-out */}
            <div>
              <p className="text-gray-500 text-sm mb-1">
                Check out before:
              </p>
              <p className="text-xl font-semibold">
                {hotel?.check_out_time || "12:00"}
              </p>
            </div>
 </div> </div> </div> </div>
           
             

     
 
      {/* LOADING */}
      {loading && (
        <div className="text-center py-20 text-lg">
          Loading hotel details...
        </div>
      )}
      <Footer />
    </>
  )

}