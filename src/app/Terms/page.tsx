"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-white">
      <Navbar />

      {/* HERO SECTION */}
      <div className="relative w-full h-[400px] md:h-[400px] flex items-center justify-center overflow-hidden">
        
        <img src="/blogimage.jpg"
          alt="Terms & Conditions"
          className="absolute inset-0 w-full h-full "
        />

       
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-6 md:px-20 text-white">
          <h1 className="text-4xl font-bold mb-4">
            Terms & <span className="text-yellow-400">Conditions</span>
          </h1>
          <p className="text-sm md:text-lg leading-relaxed">
            By using our website, you agree to the terms outlined below. Please read these terms carefully.
          </p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="w-full">
        <div className="max-w-screen-2xl mx-auto px-30 py-12 space-y-10">

          {/* INTRO */}
          <section>
            <p className="text-gray-700 leading-relaxed mb-4 ">
              These Terms & Conditions govern your use of the RateCompares website and services. By using our platform, you confirm your acceptance of these terms.
            </p>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions or concerns, feel free to reach out to our support team.
            </p>
          </section>

          <hr className="my-6" />

          {/* OUR TERMS */}
          <section className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-800">
              Our Terms and Conditions
            </h3>
            <p className="text-gray-700 leading-relaxed">
              RateCompares is a platform that helps users compare hotel and travel services. By accessing this site, you agree to our Terms of Use and Privacy Policy.
            </p>
          </section>

          <hr className="my-6" />

          {/* SERVICES */}
          <section className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-800">
              Services and Contract
            </h3>
            <p className="text-gray-700 leading-relaxed">
              RateCompares provides a comparison tool for third-party services but does not offer these services directly. All agreements are between the user and the third-party provider.
            </p>
          </section>

          <hr className="my-6" />

          {/* PRIVACY */}
          <section className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-800">
              Privacy and Email Advertisements
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We respect your privacy and will only collect data when necessary. Users may unsubscribe from promotional emails at any time.
            </p>
          </section>

          <hr className="my-6" />

          {/* USER */}
          <section className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-800">
              User Obligations
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Users are responsible for the content they upload to the platform. Uploading harmful content, spam, or illegal materials is prohibited.
            </p>
          </section>

          <hr className="my-6" />

          {/* TERMINATION */}
          <section className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-800">
              Termination
            </h3>
            <p className="text-gray-700 leading-relaxed">
              RateCompares reserves the right to terminate user access at any time in cases of misuse or violation of terms.
            </p>
          </section>

          <hr className="my-6" />

          {/* LIABILITY */}
          <section className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-800">
              Liability
            </h3>
            <p className="text-gray-700 leading-relaxed">
              RateCompares is not responsible for the accuracy of third-party content. All contracts or bookings made are between the user and the external service provider.
            </p>
          </section>

          <hr className="my-6" />

          {/* CHANGES */}
          <section className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-800">
              Changes to Terms
            </h3>
            <p className="text-gray-700 leading-relaxed">
              RateCompares reserves the right to update these terms. Users will be notified via email if any changes occur.
            </p>
          </section>

        </div>
      </div>

      <Footer />
    </div>
  );
}