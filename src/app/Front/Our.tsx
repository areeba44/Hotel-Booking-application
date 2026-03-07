"use client"
import { FaStar } from "react-icons/fa";

export default function Our(){
    return(
        <div className="sec px-6 relative bottom-19">
          <div className="text-center">
            <h3 className="text-gray-600 relative mr-1">Testimonials</h3>
            <h1 className="text-3xl font-semibold text-gray-900 bottom-4 mr-5 relative">
              Our Customers Say About Us
            </h1>
            <p className="text-gray-500 max-w-2xl mx-auto bottom-4 relative">
              Hear from the growing community who trust our platform.
            </p>
         </div>
          {/* Cards Wrapper */}
          <div className="relative max-w-6xl mx-auto mt-12">
            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
             {/* Card 1 */}
            <div className="bg-white p-6 h-[280px] w-[350px] rounded-2xl shadow-2xl hover:shadow-2xl transition duration-300 -rotate-3 hover:rotate-0">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="customer"
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-lg">Khan</h4>
                  <div className="flex text-yellow-500">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Booking was quick and simple. I compared several hotels and
                perfectly matched my needs. The stay was smooth, staff were
                courteous, and the amenities exceeded expectations. I would
                highly recommend this platform to anyone looking for a hassle-free
                and reliable hotel booking experience.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-white p-6 h-[280px] w-[350px] rounded-2xl shadow-2xl hover:shadow-2xl transition duration-300 rotate-0 -translate-y-6">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="customer"
                  className="w-14 h-14 rounded-full object-cover"/>
                <div>
                  <h4 className="font-semibold text-lg">Ali Raza</h4>
                  <div className="flex text-yellow-500">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Great hotel options at reasonable prices. The booking process
                was fast and the confirmation arrived instantly. The website
                is very user-friendly, making it easy to compare different
                hotels, read reviews, and make informed decisions without
                spending hours searching. Definitely a 5-star experience!
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-white p-6 h-[280px] w-[350px] rounded-2xl shadow-2xl hover:shadow-2xl transition duration-300 rotate-3 hover:rotate-0">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="https://randomuser.me/api/portraits/women/68.jpg"
                  alt="customer"
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-lg">Sara Ahmed</h4>
                  <div className="flex text-yellow-500">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                The platform is simple and easy to use. I quickly compared
                different hotels and booked the best option without stress.
                The interface is intuitive, and the booking confirmation
                process is instantaneous. I also appreciated the detailed
                descriptions, high-quality images, and accurate pricing,
                and enjoyable.
              </p>
            </div>
          </div>
          </div>
        </div>
    )
}