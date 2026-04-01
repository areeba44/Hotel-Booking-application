"use client";

import { SetStateAction, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function FAQSection() {
  // activeIndex should always be a number (-1 means none open)
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

      {/* FAQ Background Section */}
      <div className="relative w-full bg-gray-100 ">
        {/* Adjusted Image */}
        {/* HERO SECTION */}
      <div className="relative w-full h-[400px] md:h-[450px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <img
          src="about.avif"
          alt="Travel"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
          <div className="absolute inset-0  bg-opacity-50"></div>
        </div>

        {/* FAQ Text Centered Over the Image */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center max-w-3xl mx-auto z-10">
          <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-200 text-lg md:text-xl mb-10">
            Find answers to common questions.
          </p>
        </div>
      </div>

     {/* FAQ Items */}
<div className="max-w-4xl mx-auto space-y-4 py-8"> {/* Reduced padding here */}
  {faqs.map((faq, index) => (
    <div key={index} className="bg-white rounded-xl shadow-md p-4 border border-gray-100 hover:shadow-lg transition transform hover:-translate-y-1"> {/* Reduced padding here */}
      {/* Question */}
      <button
        onClick={() => toggleFAQ(index)}
        className="w-full flex justify-between items-center p-3 text-left" 
      >
        <span className="font-medium text-gray-800">{faq.question}</span>
        <span className="text-xl">{activeIndex === index ? "-" : "+"}</span>
      </button>

      {/* Answer */}
      {activeIndex === index && (
        <div className="px-4 pb-4 text-gray-600 border-t"> {/* Reduced padding here */}
          {faq.answer}
        </div>
      )}
    </div>
  ))}
</div>


      {/* TAGLINE SECTION */}
      <section className="w-full px-60 py-16">
        <div className="bg-blue-900/100 text-white rounded-3xl p-12 shadow-2xl text-center transform hover:scale-105 transition">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">You Plan It, We Cover It!</h2>
          <p className="text-lg md:text-xl text-gray-200">
            Your journey starts with RateCompares — travel smarter, faster, and easier.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}