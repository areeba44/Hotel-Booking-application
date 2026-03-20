"use client"


export default function Ready(){
    return(
      <div className="continer ">
        <div className="relative top-10 w-full h-[80vh] md:h-[90vh] pt-12">
      
      {/* Background Image */}
      <img
        src="/lastpic.png"
        alt="hotel"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 flex items-center justify-center px-4 ">
        <div className="bg-red-900/80 text-white rounded-2xl p-6 md:p-10 max-w-xl w-full text-center shadow-xl">

          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Ready to book your next stay?
          </h2>

          <p className="text-sm md:text-lg mb-6 text-gray-200">
            Find exclusive deals on hotels, resorts, and guest houses worldwide.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
            <button className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-red-700 transition">
              View Detail
            </button>

            <button className="bg-white text-red-700 px-6 py-2 rounded-full hover:bg-gray-200 transition">
              Search Hotels
            </button>

          </div>

        </div>
      </div>

    </div>
    </div>
             
    )
}