// "use client"
// import Image from "next/image";
// import { GoStarFill } from "react-icons/go";
// import { BsGeoAlt } from "react-icons/bs";

// export default function FeaturedHotels() {

//   const hotels = [
//     {
//       id: 1,
//       name: "The Grand Luxe",
//       location: "Islamabad, Pakistan",
//       price: "$150",
//       image: "/hotel1.jpg",
//       rating: "4.9",
//     },
//     {
//       id: 2,
//       name: "Javson Hotel",
//       location: "Karachi, Pakistan",
//       price: "$180",
//       image: "/hotel2.jpg",
//       rating: "4.9",
//     },
//     {
//       id: 3,
//       name: "The Mark Hotel",
//       location: "Lahore, Pakistan",
//       price: "$190",
//       image: "/hotel3.jpg",
//       rating: "4.9",
//     },
//   ];

//   return (
//     <section className="w-full bg-white">

//       {/* Container with reduced width */}
//       <div className="max-w-5xl mx-auto px-3 sm:px-6 lg:px-4">

//         {/* Heading starting at top */}
//         <h2 className="text-3xl md:text-4xl font-semibold mb-8">
//           Featured hotels for your perfect stay
//         </h2>

//         {/* Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

//           {hotels.map((hotel) => (
//             <div
//               key={hotel.id}
//               className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
//             >

//               {/* Image */}
//               <div className="relative">
//                 <Image
//                   src={hotel.image}
//                   alt={hotel.name}
//                   width={500}
//                   height={300}
//                   className="w-full h-52 object-cover"
//                 />

//                 <div className="absolute top-3 right-3 flex items-center gap-1 bg-white px-2 py-1 rounded text-sm">
//                   <GoStarFill className="text-yellow-400" />
//                   {hotel.rating}
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="p-5">

//                 <h3 className="text-xl font-semibold mb-2">
//                   {hotel.name}
//                 </h3>

//                 <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
//                   <BsGeoAlt />
//                   {hotel.location}
//                 </div>

//                 <p className="text-gray-500 text-sm">Starts from</p>

//                 <p className="text-lg font-semibold mb-4">
//                   {hotel.price}
//                   <span className="text-gray-500 text-sm"> /night</span>
//                 </p>

//                 <button className="w-full bg-red-800 text-white py-2.5 rounded-md hover:bg-red-900 transition">
//                   View Detail
//                 </button>

//               </div>

//             </div>
//           ))}

//         </div>

//       </div>

//     </section>
//   );
// }