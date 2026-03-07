"use client"
import Image from "next/image"

import { IoLocationOutline } from "react-icons/io5";
export default  function Most(){
    return(
        <div className="px-4 md:px-8 py-12 md:pt-1 bottom-1 relative">
          {/* Heading */}
         <div className=" main-13 flex justify-between items-center  mr-150 ">
            <h2 className="  text-2xl sm:text-3xl md:text-3xl font-semibold  text-gray-900 text-center w-full"> 
               Most Visited Hotel Of 2025
            </h2> </div>
          {/* Cards */}
          <div className="flex flex-col top-6 md:flex-row gap-6  relative justify-center items-center md:items-stretch ">
            {/* First Card */}
            <div className=" relative w-full md:w-[610px]">
              <Image
                src="/buliding.png"
                alt="bul"
                width={610}
                height={500}
                className="h-[400px] md:h-[500px] w-full object-cover rounded-2xl "  />
              {/* Text Overlay */}
              <div className="absolute bottom-6 left-0 w-full px-6 text-white">
                <h2 className="text-2xl md:text-4xl font-semibold text-center md:text-left">
                  The Grand Luxe
                </h2>
                <div className="flex items-center gap-2 mt-2 justify-center md:justify-start">
                  <IoLocationOutline className="text-lg" />
                  <p className="text-sm md:text-base">
                    Karachi, Pakistan
                  </p>
                </div>
                <div className="flex items-end gap-1 mt-2 justify-center md:justify-start">
                  <p className="text-xl md:text-2xl font-bold">$520</p>
                  <span className="text-sm">/night</span>
                </div>
                <button className="mt-4 w-full md:w-[500px] h-[38px] rounded-xl bg-white hover:bg-red-900 hover:text-white text-black text-sm font-medium">
                  View Detail
                </button>
              </div>
            </div>
            {/* Second Card */}
            <div className="relative w-full md:w-[350px]">
              <Image
                src="/bul2.png"
                alt="bul"
                width={350}
                height={500}
                className="h-[400px] md:h-[500px] w-full object-cover rounded-2xl"
              />
              <div className="absolute bottom-6 left-0 w-full px-6 text-white">
                <h2 className="text-2xl md:text-3xl font-sans text-center md:text-left">
                  Mountain Lodge
                </h2>
                <div className="flex items-center gap-2 mt-2 justify-center md:justify-start">
                  <IoLocationOutline className="text-lg" />
                  <p className="text-sm md:text-base">
                    Karachi, Pakistan
                  </p>
                </div>
                <div className="flex items-end gap-1 mt-2 justify-center md:justify-start">
                  <p className="text-xl md:text-2xl font-bold">$520</p>
                  <span className="text-sm">/night</span>
                </div></div>
         </div> </div> </div> 
    )
}