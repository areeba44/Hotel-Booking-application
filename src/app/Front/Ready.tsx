"use client"
import Image from "next/image"

export default function Ready(){
    return(
        <div>
        {/* Image Section */}
              <div className="image relative   ">
                <Image
                  src="/lastpic.png"
                  alt="pic"
                  width={1800}
                  height={600}
                  className="w-full h-auto object-cover "
                />
                {/* Call to Action */}
                <div className="outer ">
                <div className=" nxt bg-red-900/90 text-[17px] w-[500px] h-[190px] ml-60 mt-20 rounded-2xl flex flex-col items-center justify-center text-center px-4">
                  <h1 className="  h1 text-lg sm:text-2xl text-white font-medium">Ready to book your next stay?</h1>
                  <p className=" p text-sm sm:text-base text-gray-300 font-extralight mt-3">
                    Find exclusive deals on hotels, resorts, and guest houses worldwide.
                  </p>
                  <div className=" footer-button flex flex-row sm:flex-row sm:gap-4 mt-6">
                    <button className=" w-[130px] h-[40px] rounded-2xl font-sans cursor-pointer border-[1px] border-2 border-white border-red-900 text-white bg-red-900">
                      View Detail
                    </button>
                    <button className=" w-[130px] h-[40px] rounded-2xl font-sans cursor-pointer border-[1px] border-2 border-white border-red-900 text-red-900 bg-white">
                      Search Hotels
                    </button>
                  </div>
                  </div>
                </div>
                </div></div>
             
    )
}