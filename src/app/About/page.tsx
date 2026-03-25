"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <div>
      {/* Navbar (full width) */}
      <Navbar />

      {/* ✅ Parent Container  */}
      <div className="max-w-screen-2xl mx-auto ">

        {/* Hero Section */}
        <div className="w-full overflow-hidden "> 
          <section
            className="relative w-full h-[440px] md:h-[540px] bg-cover bg-center flex items-center overflow-hidden"
            style={{
              backgroundImage: "url('/apar.png')",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Content */}
            <div className="relative z-10 px-6">
              <div className="max-w-xl text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  About Stay Haven
                </h1>

                <h3 className="text-lg md:text-xl mb-4">
                  Your trusted platform for finding comfortable and reliable stays
                </h3>

                <p className="text-sm md:text-base leading-relaxed text-gray-200">
                  At Stay Haven, we help travelers discover hotels, resorts, and guest houses with ease.
                  Our goal is to make booking simple, transparent, and stress-free.
                </p>
              </div>
            </div>
          </section>
        </div>

       {/* About Section */}
<section className="bg-white py-20">
  <div className="max-w-screen-2xl mx-auto px-6"> {/* Parent div with increased width */}
    <div className="flex flex-col md:flex-row items-center gap-12">

      {/* Left Content */}
      <div className="md:w-1/2 ">
        <h2 className="text-4xl font-semibold text-gray-900 mb-4">
          Who We Are
        </h2>

        <p className="text-gray-600 leading-relaxed mb-10">
          Rate Compares was established in 2016 with a vision to provide travelers an easy access to best hotels around the globe on a single click. Rate Compares has got the largest selection of low-priced hotels available for Back Packers and Corporate Travelers, as well. Now, anyone can compare charges from over 200,000 hotels amongst our widespread worldwide network to obtain the finest deals in hotel reservations.
        </p>

        <button className="bg-blue-900 text-white px-10 py-3 rounded-full hover:bg-red-900 transition">
          Book Now
        </button>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 flex justify-center">
        <Image
          src="/about.png"
          alt="Who We Are"
          width={800}   
          height={800}  
          className="rounded-2xl shadow-lg w-full"  
        />
      </div>

    </div>
  </div>
</section>

      </div>
      {/* ✅ Parent Container End */}

      
      <Footer />
    </div>
  );
};

export default AboutPage;