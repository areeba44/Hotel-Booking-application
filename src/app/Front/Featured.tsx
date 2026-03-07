"use client"
import Image from "next/image"
import Link from "next/link"
import { GoStarFill } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";

export default function Featured(){
    return(
        <div className="  .max-w-7xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:pt-50 relative bottom-50 transition-all duration-700">
                  {/* Heading */}
                  <div id='disc' className=" flex justify-between items-center mr-115">
                    <h2 className=" discover main-14 text-2xl sm:text-2xl md:text-3xl font-semibold text-gray-900 text-center w-full"> 
                      Featured hotels for your perfect stay
                    </h2>
                  </div>
                  {/* Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-5 justify-items-center">
                    {/* CARD 1 */}
                    <div className=" .shadow-2xl img shadow-2xl w-[340px] max-w-[310px] ml-30 mx-auto rounded-2xl overflow-hidden bg-white hover:scale-105 transition-transform duration-300">
                      <Link href="">
                        <Image
                          src="/image (1).png"
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
                         The Grand Luxe
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
                    <div className=" shadow-2xl w-[340px] ml-37 max-w-[310px] mx-auto rounded-2xl overflow-hidden bg-white hover:scale-105 transition-transform duration-300">
                      <Link href="">
                        <Image
                          src="/image (2).png"
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
                         Javson Hotel
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
                    <div className="shadow-2xl w-[340px] ml-44 max-w-[310px] mx-auto rounded-2xl overflow-hidden bg-white hover:scale-105 transition-transform duration-300">
                      <Link href="">
                        <Image
                          src="/image.png"
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
                        The Mark Hotel
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
                          <button className=" h-[38px] w-full mt-4 font-sans border rounded border-red-900 text-white bg-red-900">
                            View Detail
                          </button></Link> </div> </div> </div> </div>
    )
}