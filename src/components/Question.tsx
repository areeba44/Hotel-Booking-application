"use client";

import { useState } from "react";

const FAQPage = () => {
  const faqs = [
    {
      question: "How do I book a hotel?",
      answer: "You can select a hotel, choose your dates, and complete the booking online using the 'Book Now' button."
    },
    {
      question: "Can I cancel my booking?",
      answer: "Yes, most bookings can be canceled up to 24 hours before check-in. Please check the hotel's cancellation policy."
    },
    {
      question: "Are taxes included in the price?",
      answer: "Yes, all displayed prices include applicable taxes unless stated otherwise."
    },
    {
      question: "Do hotels provide free Wi-Fi?",
      answer: "Most hotels offer free Wi-Fi. You can check the amenities section for confirmation."
    },
    {
      question: "Is breakfast included in the booking?",
      answer: "Some bookings include breakfast. Always check the room details before booking."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-black text-center">
    FAQ'S
  </h1>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-300 rounded-2xl overflow-hidden">
            {/* Question */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-6 py-4 bg-gray-100 hover:bg-gray-200 flex justify-between items-center focus:outline-none"
            >
              <span className="font-medium text-black">{faq.question}</span>
              <span className="text-xl font-bold text-black">
                {openIndex === index ? "-" : "+"}
              </span>
            </button>

            {/* Answer */}
            {openIndex === index && (
              <div className="px-6 py-4 bg-white text-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
