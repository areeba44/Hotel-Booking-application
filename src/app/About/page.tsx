"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import './about.css'
const AboutPage = () => {
  return (
  <div>
    {/* Navbar */}
      <Navbar />
    <div className="min-h-screen flex flex-col">
    
      <div className="max-w-screen-2xl relative w-full mx-auto px-2 bg-white sm:px-6 pt-56 bottom-2 :px-40 h-[600px] overflow-hidden">
        <Image
          src="/apar.png"
          alt="room"
          fill
          priority
          className="object-cover w-full brightness-75 transition-all duration-700"
        />
        {/* Overlay Content */}
        <div className="text-white absolute left-42 flex flex-col items-start gap-2 justify-center">
          <h1 className="font-bold items-center text-center justify-items-center transition text-6xl">
            About Stay Haven
          </h1>
          <h1 className=" font-sans items-center justify-items-center transition text-3xl pt-2">
            Your trusted platform for finding comfortable <br />
            <span className="">and reliable stays</span>
          </h1>
          <p className="font-light text-[20px] pt-8">
            At Stay Haven, we help travelers discover hotels, resorts, and guest houses with ease.<br />
            Our goal is to make booking simple, transparent, and stress-free
          </p>
        </div>
      </div>
        {/* Who We Are Section */}
        <div className="px-4 mt-10 bg-white sm:px-8 py-10 md:py-20">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
            {/* Text Section */}
            <div className="text-center md:text-left max-w-xl mb-45">
              <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 ml-10">Who We Are</h2>
              <p className="mt-4 text-lg text-gray-700 ml-10">
                Stay Haven is a modern hotel booking platform built to connect travelers with carefully verified hotels, resorts, and guest houses across multiple destinations.
                We aim to remove the complexity from travel planning by offering a reliable space where guests can discover stays that meet their comfort, quality, and budget expectations.
              </p>
            </div>
            {/* Image Section */}
            <div className="w-full md:w-[450px] flex justify-center">
              <img
                src="/about.png"  
                alt="Stay Haven"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
           {/* Buttons */}
        <div className="hidden md:flex items-center gap-3 flex-shrink-0">
          <Link href="/login">
            <button className="px-4 h-[38px] w-full  ml-38 bottom-12 relative text-sm border rounded-2xl border-red-900 text-white bg-red-900 transition whitespace-nowrap">
              Book Now
            </button>
          </Link>
        </div>
        </div>
      {/* Footer */}
      <Footer />
    </div>
    </div>
  );
};

export default AboutPage;
      

      
       
     