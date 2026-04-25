"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaStar } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="bg-white">
      <Navbar />

      {/* HERO */}
      <section className="relative w-full h-[350px] md:h-[420px] flex items-center justify-center">
        <img
          src="/blogimage.jpg"
          alt="Travel"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-start px-6 md:px-20 text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Discover <span className="text-yellow-400">Rate Compares</span>
          </h1>

          <p className="text-lg md:text-lg text-gray-200 max-w-2xl">
            Helping travelers worldwide find the best hotels at the best prices.
          </p>
        </div>
      </section>

      {/* ABOUT CONTENT */}
      <section className="bg-gray-100 py-14">
        <div className="max-w-screen-xl mx-auto px-10">
          <p className="text-sm text-gray-600 mb-2">
            Established in 2016 with a simple goal
          </p>

          <h2 className="text-3xl md:text-3xl font-bold text-blue-950 mb-6 leading-snug">
            Since 2016, Rate Compares has been transforming the way people book hotels. Hotel comparison made simple? No one was doing it. Until we did.
          </h2>

          <div className="space-y-4 text-gray-700 leading-relaxed">
           

            <p>
              Rate Compares was established in 2016 with a vision to provide travelers an easy access to best hotels around the globe on a single click. Rate Compares has got the largest selection of low-priced hotels availablefor Back Packers and Corporate Travelers, as well. Now, anyone can compare charges from over 200,000 hotels amongst our widespread worldwide network to obtain the finest deals in hotel reservations. Here, travel enthusiasts can utilize our finest search tools to check rooms by comparing ratings, deals, price range and facilities provided. You can also explore hotels near tourist attractions, shopping hubs and airport terminals. Rate Compares is a user-friendly toolwhich provides prices in all global booking systems and ensures that the clients are getting information in transparent manner. Now pack your bags since you have our Back! You plan it, we cover it!
            </p>

            
          </div>
        </div>
      </section>

     
        

      {/* FAQ */}
      <section className="bg-gray-100 ">
        <div className="max-w-screen-xl mx-auto px-10">
          <h2 className="text-2xl font-bold mb-8 text-blue-950">
            Frequently Asked Questions
          </h2>

          <div className="grid md:grid-cols-2 gap-8 text-gray-700">

            <div>
              <h4 className="font-bold">
                Do I need to register or pay fees?
              </h4>
              <p className="mt-1 text-gray-600">
                No, the platform is completely free to use.
              </p>
            </div>

            <div>
              <h4 className="font-bold">
                Can I book hotels directly?
              </h4>
              <p className="mt-1 text-gray-600">
                No, we are a meta-search platform and redirect you to booking providers.
              </p>
            </div>

            <div>
              <h4 className="font-bold">
                What does the price include?
              </h4>
              <p className="mt-1 text-gray-600">
                Prices include applicable taxes and fees.
              </p>
            </div>

            <div>
              <h4 className="font-bold">
                Are prices per room or per person?
              </h4>
              <p className="mt-1 text-gray-600">
                Prices are per night, per room.
              </p>
            </div>

            <div>
              <h4 className="font-bold">
                Can I modify my booking?
              </h4>
              <p className="mt-1 text-gray-600">
                No, changes must be made with the booking provider.
              </p>
            </div>

            <div>
              <h4 className="font-bold">
                Can I contact hotels directly?
              </h4>
              <p className="mt-1 text-gray-600">
                No, contact must be made through the booking site.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-gray-100">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="bg-blue-950 text-white text-center rounded-xl p-10 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              You Plan It, We Cover It!
            </h2>

            <p className="text-gray-300 text-lg">
              Travel smarter, faster, and easier with RateCompares.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}