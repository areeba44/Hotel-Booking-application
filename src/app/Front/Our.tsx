import { FaStar } from "react-icons/fa";

export default function Testimonials() {

  const testimonials = [
    {
      name: "Khan",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
      text: "Booking was quick and simple. I compared several hotels and perfectly matched my needs. The stay was smooth, staff were courteous, and the amenities exceeded expectations. I would highly recommend this platform to anyone looking for a hassle-free and reliable hotel booking experience.",
    },
    {
      name: "Ali Raza",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "Great hotel options at reasonable prices. The booking process was fast and the confirmation arrived instantly. The website is very user-friendly, making it easy to compare different hotels, read reviews, and make informed decisions without spending hours searching. Definitely a 5-star experience!",
    },
    {
      name: "Sara Ahmed",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "The platform is simple and easy to use. I quickly compared different hotels and booked the best option without stress. The interface is intuitive, and the booking confirmation process is instantaneous. I also appreciated the detailed descriptions, high-quality images, and accurate pricing."
    }
  ];

  return (
    // 🔹 Outer Parent
    <div className="w-full bg-white py-12">

      {/* 🔹 Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-bold pt-4">
          Our Customers Say About Us
        </h2>

        <p className="text-gray-500 mb-12">
          Hear from the growing community who trust our platform.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

          {/* Left Card */}
          <div className="bg-white p-8 rounded-2xl shadow-lg rotate-[-4deg] hover:rotate-0 transition duration-300">
            <div className="flex items-center gap-4 mb-4">
              <img src={testimonials[0].img} className="w-14 h-14 rounded-full"/>
              <div>
                <h4 className="font-semibold">{testimonials[0].name}</h4>
                <div className="flex text-yellow-500">
                  <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-sm">{testimonials[0].text}</p>
          </div>

          {/* Middle Card */}
          <div className="bg-white p-8 rounded-2xl shadow-xl scale-105">
            <div className="flex items-center gap-4 mb-4">
              <img src={testimonials[1].img} className="w-14 h-14 rounded-full"/>
              <div>
                <h4 className="font-semibold">{testimonials[1].name}</h4>
                <div className="flex text-yellow-500">
                  <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-sm">{testimonials[1].text}</p>
          </div>

          {/* Right Card */}
          <div className="bg-white p-8 rounded-2xl shadow-lg rotate-[4deg] hover:rotate-0 transition duration-300">
            <div className="flex items-center gap-4 mb-4">
              <img src={testimonials[2].img} className="w-14 h-14 rounded-full"/>
              <div>
                <h4 className="font-semibold">{testimonials[2].name}</h4>
                <div className="flex text-yellow-500">
                  <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-sm">{testimonials[2].text}</p>
          </div>

        </div>

      </div>
    </div>
  );
}