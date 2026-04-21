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
                    alt="Business Rate Compares"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                

                <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-6 md:px-20 text-white">
                    <h1 className="text-4xl font-bold mb-4">
                Our <span className="text-yellow-400"> Company</span>
                    </h1>
                    <p className="text-sm md:text-lg leading-relaxed">
                       Rate Compares offers the option of 100s of 1000's of hotels in additional than 200 nations.
                    </p>
                </div>
            </div>

            {/* ✅ CONTENT SECTION */}
            <div className="max-w-5xl mx-auto px-4 md:px-8 py-10 space-y-10 text-gray-700 leading-relaxed">

                {/* Offers Section */}
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
                        The Best Of Our Offers
                    </h2>

                    <p className="mb-4">
                        Rate Compares offers access to hundreds of thousands of hotels across more than 200 countries.
                        Our hotel reviews help you find the best rates for the best hotels.
                    </p>

                    <p className="mb-4">
                        Whether you are traveling last minute, with family, or for business, we provide the best hotel
                        search experience tailored for your needs.
                    </p>

                    <p className="mb-4">
                        We also offer 24/7 support if you prefer speaking with someone directly. Don’t forget our
                        <span className="font-semibold"> Rates Match Guarantee </span>
                        to ensure you always get the best deal.
                    </p>

                    <p>
                        Find, compare, and book great hotels at the lowest prices — all at Rate Compares.
                    </p>

                    <button className="mt-6 bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition">
                        Have A Look
                    </button>
                </div>

                {/* Priorities Section */}
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">
                        Our Priorities
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">

                        {/* Hotel Seekers */}
                        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold mb-3 text-blue-900">
                                Hotel Seekers
                            </h3>

                            <ul className="list-disc pl-5 space-y-2">
                                <li>Find the best hotels worldwide بسهولة</li>
                                <li>Complete transparency of online hotel market</li>
                                <li>Access over 200,000 hotels globally</li>
                                <li>Quick and easy search with just one click</li>
                            </ul>
                        </div>

                        {/* Hotel Owners */}
                        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold mb-3 text-blue-900">
                                Hotel Owners
                            </h3>

                            <ul className="list-disc pl-5 space-y-2">
                                <li>Boost your hotel visibility worldwide</li>
                                <li>Improve reputation and customer reach</li>
                                <li>Increase bookings and pricing power</li>
                                <li>Access advanced tools and global platform</li>
                            </ul>
                        </div>

                    </div>
                </div>

            </div>




            <Footer />
        </div>
    );
}