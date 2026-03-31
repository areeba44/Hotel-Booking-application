"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-white">

      <Navbar />

      <div className="max-w-screen-lg mx-auto px-4 py-12">

        {/* HEADER */}
        <div className="bg-white shadow-xl rounded-2xl p-8 mb-10 border border-gray-100">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Terms & Conditions
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Please read these terms carefully before using our platform.
            By accessing our website, you agree to comply with these terms.
          </p>
        </div>

        {/* SECTION CARD */}
        {[
          {
            title: "Our Terms and Conditions",
            icon: "📄",
            text: `RateCompares is a hotel search platform that helps users explore and compare accommodations,
            travel locations, and experiences. By using this website, you confirm that you have read and accepted
            these terms, including our privacy policy and cookie usage. These terms apply to all services provided
            through our website, email, phone, or internet and may be updated from time to time.`,
          },
          {
            title: "Services and Contract",
            icon: "🧾",
            text: `RateCompares allows users to compare third-party services but does not provide those services directly.
            No booking or travel contract is made through our website. Any agreement is strictly between the user
            and the external service provider.`,
          },
          {
            title: "Privacy and Email Advertisements",
            icon: "🔐",
            text: `We collect and process user data only when necessary and with proper consent or legal basis.
            We ensure your data is protected and handled securely. Users who opt in may receive emails about
            offers and updates, and they can unsubscribe anytime.`,
          },
          {
            title: "User Obligations",
            icon: "⚠️",
            text: `Users are responsible for the content they upload, including text, images, and reviews.
            Content must not be false, offensive, illegal, or violate copyrights. Uploading harmful software,
            spam, or collecting personal data from other users is strictly prohibited.`,
          },
          {
            title: "Termination",
            icon: "⛔",
            text: `RateCompares reserves the right to terminate user access at any time.
            Accounts may be removed if misuse or violation of terms is reported.`,
          },
          {
            title: "Liability",
            icon: "📌",
            text: `RateCompares is not responsible for the accuracy or reliability of third-party content.
            We do not provide booking services, and any agreement is between users and external providers.
            We are not liable for disputes or claims arising from such contracts.`,
          },
          {
            title: "Changes to Terms",
            icon: "🔄",
            text: `We may update these terms from time to time and will notify users via email when changes occur.`,
          },
        ].map((section, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 mb-6 border border-gray-100 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-3 text-gray-800 flex items-center gap-2">
              <span className="text-2xl">{section.icon}</span>
              {section.title}
            </h2>

            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              {section.text}
            </p>
          </div>
        ))}

        {/* CONTACT BOX */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-2xl p-8 shadow-2xl mt-10">

          <h2 className="text-2xl font-bold mb-6 text-center">
            Need Help?
          </h2>

          <p className="text-center text-gray-200 mb-6">
            If you have any questions regarding our Terms & Conditions,
            feel free to contact our support team.
          </p>

          <div className="flex justify-center">
            <button className="bg-white text-blue-900 px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition">
              Contact Support
            </button>
          </div>

        </div>

      </div>

      <Footer />

    </div>
  );
}