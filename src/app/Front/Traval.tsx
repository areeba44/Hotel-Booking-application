import Image from "next/image";

export default function StatsSection() {
  return (
    <div className=" py-2 px-12">
    <section className=" max-w-screen-2xl mx-auto  bg-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-3">

        {/* Card 1 */}
        <div className="shadow-xl rounded-2xl p-6 flex flex-col justify-between hover:shadow-md transition">
  
  <div className="flex items-center -space-x-3 gap-1 mb-4">
    
    <div className="w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center overflow-hidden border-2 border-white">
      <img src="/trivago.png" className="w-21 h-22 object-contain" alt="trivago" />
    </div>

    <div className="w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center overflow-hidden border-2 border-white">
      <img src="/price.png" className="w-21 h-22 object-contain" alt="price" />
    </div>

    <div className="w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center overflow-hidden border-2 border-white">
      <img src="/Hotwire.svg" className="w-21 h-22 object-contain" alt="hotwire" />
    </div>

    <div className="w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center overflow-hidden border-2 border-white">
      <img src="/exp.png" className="w-21 h-22 object-contain" alt="expedia" />
    </div>

    <div className="w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center overflow-hidden border-2 border-white">
      <img src="/hot.png" className="w-21 h-22 object-contain" alt="hotels" />
    </div>

  </div>
           <div>
            <h3 className="text-lg font-bold text-blue-950">
              Save when you compare
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              More deals. More sites. One search.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="shadow-xl  rounded-2xl p-6 flex flex-col justify-between hover:shadow-md transition">
          <div className="flex -space-x-3 mb-4">
            <img
              src="/men1.webp"
              className="h-10 w-10 rounded-full border-2 border-white"
              alt=""
            />
            <img
              src="/men2.png"
              className="h-10 w-10 rounded-full border-2 border-white"
              alt=""
            />
            <img
              src="/men3.jpg"
              className="h-10 w-10 rounded-full border-2 border-white"
              alt=""
            />
          </div>
          <div>
            <h3 className="text-xl  font-bold text-blue-950">
              41,000,000+
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              searches this week
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="shadow-xl  rounded-2xl p-6 flex flex-col justify-between hover:shadow-md transition">
          <div className="flex text-yellow-400 text-[25px] mb-4">
            {"★★★★★"}
          </div>
          <div>
            <h3 className="text-lg  font-bold text-blue-950">
              Travelers love us
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              1M+ ratings on our app
            </p>
          </div>
        </div>

      </div>
    </section>
    </div>
  );
}