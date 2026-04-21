"use client";

import { SetStateAction, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(-1);

  const faqs = [
    {
      question: "Do I have to pay for any fees or register to use RateCompares.com?",
      answer:
        "No, you don’t have to pay or register to use RateCompares. Just simply enter your destination and book your hotel.",
    },
    {
      question: "Is it possible to make a hotel reservation on RateCompares?",
      answer:
        "No, RateCompares.com is a Meta search engine website, so reservations cannot be made directly.",
    },
    {
      question: "What does the hotel price include?",
      answer:
        "The price includes taxes and fees. Always double-check details on the booking site.",
    },
    {
      question: "Are prices per person or per room?",
      answer: "Prices are per night, per room.",
    },
    {
      question: "Can I cancel or change booking?",
      answer: "You must contact the booking site directly.",
    },
    {
      question: "Can I contact the hotel?",
      answer: "No, please use the booking site to contact the hotel.",
    },
  ];

  const toggleFAQ = (index: SetStateAction<number>) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <div>
      <Navbar />

      {/* FULL WIDTH HERO */}
      <div className="w-full bg-gray-100 ">

        <div className="relative w-full h-[400px] md:h-[400px] flex items-center justify-center overflow-hidden">
          <img
            src="/blogimage.jpg"
            alt="Travel"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-6 md:px-20 text-white">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked<span className="text-yellow-400"> Questions</span>
            </h2>
            <p className="text-gray-200 text-lg md:text-xl">
              Find answers to common questions.
            </p>
          </div>
        </div>

      </div>

      {/* FAQ CONTENT CENTERED */}
      <div className="w-full px-30">
        <div className="max-w-screen-2xl mx-auto px-4 py-8 space-y-4">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-4 border border-gray-100 hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-3 text-left"
              >
                <span className="font-medium text-gray-800">
                  {faq.question}
                </span>
                <span className="text-xl ">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </button>

              {activeIndex === index && (
                <div className="px-4 pt-3 pb-4 mt-2 text-gray-600 border-t">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}

        </div>
      </div>

      {/* TAGLINE FULL WIDTH */}
      <section className="w-full py-10">
        <div className="max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-32">

          <div className="bg-blue-950 text-white rounded-md p-9 shadow-2xl text-center transform  transition">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              You Plan It, We Cover It!
            </h2>
            <p className="text-lg md:text-xl text-gray-200">
              Your journey starts with RateCompares — travel smarter, faster, and easier.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}