"use client";

import Image from "next/image"
import Link from "next/link"
import { GoStarFill } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import {  useState,useEffect } from "react";

import './resp.css'
import './main.css'

export default function Dis(){
const [showSecond, setShowSecond] = useState(false);
const [count, setCount] = useState(0);
const [currentSlide, setCurrentSlide] = useState(0);
const totalSlides = 5; 
const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides); 
  };
const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides); 
  };

return (
<div>
 {!showSecond && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:pt-20 transition-all duration-700">
          {/* Heading */}
          <div className=" discover main-8 flex justify-between items-center  mr-106">
            <h2 className="  text-2xl sm:text-2xl md:text-3xl font-semibold text-gray-900 text-center w-full"> 
               Discover our most popular destinations
            </h2>
          </div>
    {/* Grid */}
          <div className=" grid-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-10   justify-items-center"> 
            {/* CARD 1 */}
            <div className="main-9 shadow-2xl w-[340px] max-w-[310px] ml-30 mx-auto rounded-2xl overflow-hidden bg-white hover:scale-105 transition-transform duration-300">
              <Link href="">
                <Image
                  src="/Mask group.png"
                  alt="Islamabad"
                  width={320}
                  height={180}
                  className="w-full h-40 object-cover"
                />
              </Link>
              {/* Rating */}
              <div className="flex items-center justify-end gap-1 px-3 pt-2">
                <GoStarFill className="text-amber-400" />
                <p>4.9</p>
              </div>
              <div className="p-4">
                <h2 className="text-[22px] font-bold font-sans">
                  Islamabad
                </h2>
                <div className="flex items-center gap-1 text-sm text-gray-700 mt-1">
                  <IoLocationOutline />
                  <p>Islamabad, Pakistan</p>
                </div>
                <p className="text-gray-600 mt-2">Starts from</p>
                <div className="flex items-center gap-2">
                  <p className="font-bold text-[19px]">$150</p>
                  <p className="text-gray-600">/night</p>
                </div>
                <Link href="">
                  <button className="h-[38px] w-full mt-4 font-sans border rounded border-red-900 text-white bg-red-900">
                    View Detail
                  </button>
                </Link>
              </div>
            </div>
            {/* CARD 2 */}
            <div className=" main-10 shadow-2xl w-[340px] ml-37 max-w-[310px] mx-auto rounded-2xl overflow-hidden bg-white hover:scale-105 transition-transform duration-300">
              <Link href="">
                <Image
                  src="/Karachi.png"
                  alt="Karachi"
                  width={320}
                  height={180}
                  className="w-full h-40 object-cover"
                />
              </Link>
              <div className="flex items-center justify-end gap-1 px-3 pt-2">
                <GoStarFill className="text-amber-400" />
                <p>4.9</p>
              </div>
              <div className="p-4">
                <h2 className="text-[22px] font-bold font-sans">
                  Karachi
                </h2>
                <div className="flex items-center gap-1 text-sm text-gray-700 mt-1">
                  <IoLocationOutline />
                  <p>Karachi, Pakistan</p>
                </div>
                <p className="text-gray-600 mt-2">Starts from</p>
                <div className="flex items-center gap-2">
                  <p className="font-bold text-[19px]">$180</p>
                  <p className="text-gray-600">/night</p>
                </div>
                <Link href="">
                  <button className="h-[38px] w-full mt-4 font-sans border rounded border-red-900 text-white bg-red-900">
                    View Detail
                  </button>
                </Link>
              </div>
            </div>
            {/* CARD 3 */}
            <div className=" main-11 shadow-2xl w-[340px] ml-44 max-w-[310px] mx-auto rounded-2xl overflow-hidden bg-white hover:scale-105 transition-transform duration-300">
              <Link href="">
                <Image
                  src="/lahore.png"
                  alt="Lahore"
                  width={320}
                  height={180}
                  className="w-full h-40 object-cover"
                />
              </Link>
              <div className="flex items-center justify-end gap-1 px-3 pt-2">
                <GoStarFill className="text-amber-400" />
                <p>4.9</p>
              </div>
              <div className="p-4">
                <h2 className="text-[22px] font-bold font-sans">
                  Lahore
                </h2>
                <div className="flex items-center gap-1 text-sm text-gray-700 mt-1">
                  <IoLocationOutline />
                  <p>Lahore, Pakistan</p>
                </div>
                <p className="text-gray-600 mt-2">Starts from</p>
                <div className="flex items-center gap-2">
                  <p className="font-bold text-[19px]">$190</p>
                  <p className="text-gray-600">/night</p>
                </div>
                <Link href="">
                  <button className="h-[38px] w-full mt-4 font-sans border rounded border-red-900 text-white bg-red-900">
                    View Detail
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex ml-280 gap-2">
         <button
        onClick={handlePrev}
        className="w-10 h-10 rounded bg-white text-black flex items-center justify-center  transition">
        <SlArrowLeft size={20} />
      </button>
  {/* Right Button */}
      <button
        onClick={handleNext}
        className="w-10 h-10 rounded bg-white text-black flex items-center justify-center transition">
       <SlArrowRight size={20} />
      </button>
    </div> </div>
      )}
      {/* SECOND SECTION */}
      {showSecond && (
        <div className="parent-trans transition-all duration-700 pt-50">
          <h2 className=" discover main-8  text-2xl sm:text-2xl md:text-3xl mr-[400px] font-semibold text-gray-900 text-center mb-10">
            Discover our most popular destinations
          </h2>
          <div className=" card-4 grid grid-cols-1 ml-50 relative sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center ">
            {/* CARD 4 */}
            <div className="  shadow-2xl w-[360px] max-w-[310px]  mx-auto rounded-2xl overflow-hidden bg-white hover:scale-105 transition-transform duration-300">
              <Link href="">
                <Image src="/Dub.png" alt="Dubai" width={320} height={180} className="w-full h-40 object-cover" />
              </Link>
              <div className="flex items-center justify-end gap-1 px-3 pt-2">
                <GoStarFill className="text-amber-400" />
                <p>4.9</p>
              </div>
              <div className="p-4">
                <h2 className="text-[22px] font-bold font-sans">Dubai</h2>
                <div className="flex items-center gap-1 text-sm text-gray-700 mt-1">
                  <IoLocationOutline />
                  <p>UAE</p>
                </div>
                <p className="text-gray-600 mt-2">Starts from</p>
                <div className="flex items-center gap-2">
                  <p className="font-bold text-[19px]">$190</p>
                  <p className="text-gray-600">/night</p>
                </div>
                <Link href="">
                  <button className="h-[38px] w-full mt-4 font-sans border rounded border-red-900 text-white bg-red-900">View Detail</button>
                </Link>
              </div>
            </div>
            {/* CARD 5 */}
            <div className=" shadow-2xl ml-10 w-[340px] max-w-[310px] mx-auto rounded-2xl overflow-hidden bg-white hover:scale-105 transition-transform duration-300">
              <Link href="">
                <Image src="/Sha.PNG" alt="Sharjah" width={320} height={180} className="w-full h-40 object-cover" />
              </Link>
              <div className="flex items-center justify-end gap-1 px-3 pt-2">
                <GoStarFill className="text-amber-400" />
                <p>4.9</p>
              </div>
              <div className="p-4">
                <h2 className="text-[22px] font-bold font-sans">Sharjah</h2>
                <div className="flex items-center gap-1 text-sm text-gray-700 mt-1">
                  <IoLocationOutline />
                  <p>UAE</p>
                </div>
                <p className="text-gray-600 mt-2">Starts from</p>
                <div className="flex items-center gap-2">
                  <p className="font-bold text-[19px]">$190</p>
                  <p className="text-gray-600">/night</p>
                </div>
                <Link href="">
                  <button className="h-[38px] w-full mt-4 font-sans border rounded border-red-900 text-white bg-red-900">View Detail</button>
                </Link>
              </div>
            </div>
            {/* CARD 6 */}
            <div className=" shadow-2xl ml-20 w-[340px] max-w-[310px] mx-auto rounded-2xl overflow-hidden bg-white hover:scale-105 transition-transform duration-300">
              <Link href="">
                <Image src="/Abu.PNG" alt="Abu Dhabi" width={320} height={180} className="w-full h-40 object-cover" />
              </Link>
              <div className="flex items-center justify-end gap-1 px-3 pt-2">
                <GoStarFill className="text-amber-400" />
                <p>4.9</p>
              </div>
              <div className="p-4">
                <h2 className="text-[22px] font-bold font-sans">Abu Dhabi</h2>
                <div className="flex items-center gap-1 text-sm text-gray-700 mt-1">
                  <IoLocationOutline />
                  <p>UAE</p>
                </div>
                <p className="text-gray-600 mt-2">Starts from</p>
                <div className="flex items-center gap-2">
                  <p className="font-bold text-[19px]">$190</p>
                  <p className="text-gray-600">/night</p>
                </div>
                <Link href="">
                  <button className="h-[38px] w-full mt-4 font-sans border rounded border-red-900 text-white bg-red-900">View Detail</button>
                </Link>
              </div>
            </div>
          </div>
       </div>
      )}      
    </div>
   )}

  