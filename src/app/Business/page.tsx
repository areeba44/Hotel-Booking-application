"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
    return (
        <div className="w-full bg-gradient-to-b from-gray-50 to-white">

            <Navbar />

            {/* HERO SECTION */}
            <div className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden">

                <img
                    src="/blogimage.jpg"
                    alt="Privacy Policy"
                    className="absolute inset-0 w-full h-full object-cover"
                />

              

               <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-6 md:px-20 text-white">
                    <h1 className="text-4xl font-bold mb-4">
                        Business <span className="text-yellow-400">Rate Compares</span>
                    </h1>
                    <p className="text-sm md:text-lg leading-relaxed">
                        RateCompares.Com values your privacy and strictly follows all data protection rules.
                    </p>
                </div>
            </div>

            {/* ✅ CONTENT SECTION */}
            <div className="max-w-5xl mx-auto px-4 md:px-8 py-10 space-y-8 text-gray-700 leading-relaxed">

                <p>
                    You're a hotel or booking site searching to determine the caliber of your traffic increase.
                    We're one of the world’s biggest hotel metasearch. Together, we are able to make magic happen.
                </p>

                <p>
                    At RateCompares, listing hotel rates in the best sources on the internet continues to be our focus
                    during the last ten years, and it is still our focus today. Hotels and booking sites ought to be
                    easily found capable to compete online — that’s our goal.
                </p>

                {/* SECTION */}
                <div>
                    <h2 className="text-xl md:text-2xl font-semibold mb-2 text-blue-900">
                        RateCompares Hotel Manager
                    </h2>
                    <p>
                        Enables you to definitely easily manage and make your specific hotel profile, to be able to rank greater
                        within the search engine results. Hoteliers who update their profiles experience significantly more clicks.
                    </p>
                </div>

                {/* SECTION */}
                <div>
                    <h2 className="text-xl md:text-2xl font-semibold mb-2 text-blue-900">
                        Hotel Manager PRO
                    </h2>
                    <p>
                        Premium upgrade that increases visibility and attracts travelers through exclusive features like hotel news,
                        detailed analytics, and better exposure.
                    </p>
                </div>

                {/* SECTION */}
                <div>
                    <h2 className="text-xl md:text-2xl font-semibold mb-2 text-blue-900">
                        Quality Test
                    </h2>
                    <p>
                        A unique review system that helps build a complete and authentic picture of your hotel using detailed and
                        qualitative data. Online reputation plays a major role in bookings.
                    </p>
                </div>

                {/* SECTION */}
                <div>
                    <h2 className="text-xl md:text-2xl font-semibold mb-2 text-blue-900">
                        Direct Connect
                    </h2>
                    <p>
                        Connects visitors directly to your hotel. With a CPC model, you get full control over campaigns, performance,
                        and budget while accessing detailed analytics tools.
                    </p>
                </div>

                {/* SECTION */}
                <div>
                    <h2 className="text-xl md:text-2xl font-semibold mb-2 text-blue-900">
                        Booking Sites
                    </h2>
                    <p>
                        RateCompares boosts your global metasearch presence and allows competition with over 250 booking platforms.
                        You receive qualified traffic with full control and performance tracking tools.
                    </p>
                </div>

                {/* CTA */}
                <div className="bg-blue-900 text-white p-6 rounded-xl text-center mt-10">
                    <h3 className="text-xl font-semibold mb-2">
                        Interested in Advertising?
                    </h3>
                    <p className="mb-4">
                        Contact us today to start promoting your hotel on RateCompares.
                    </p>
                    <button className="bg-white text-blue-900 px-6 py-2 rounded-lg font-medium hover:bg-gray-200 transition">
                        Contact Us
                    </button>
                </div>

            </div>

            <Footer />
        </div>
    );
}