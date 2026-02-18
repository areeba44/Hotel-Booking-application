"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Question from "@/components/Question";
import { useEffect, useState } from "react";
import { MdBedroomParent } from "react-icons/md";
import { FaCarAlt } from "react-icons/fa";
import { GiPalmTree } from "react-icons/gi";
import { FaPlane, FaBed } from 'react-icons/fa';
import axios from "axios";
import { useRouter } from "next/navigation";
export default function Home() {
  const images = ["/room2.png", "/room3.webp", "/room4.webp"];
  const [current, setCurrent] = useState(0);
  const [countries, setCountries] = useState([])
  const [selectedCountry, setSelectedCountry] = useState<any>(null);
  const [countryInput, setCountryInput] = useState("");
  const [cities, setCities] = useState([])
  const [selectedCity, setSelectedCity] = useState<any>(null);
  const [cityInput, setCityInput] = useState("");
  const [country, setCountry] = useState("");
  const [countriesLoading, setCountriesLoading] = useState(false);
  const [citiesLoading, setCitiesLoading] = useState(false);
  const [hotelName, setHotelName] = useState('')
  const [hotelSuggestions, setHotelSuggestions] = useState<any[]>([]);
  const [hotelLoading, setHotelLoading] = useState(false);
  const router = useRouter();


  const handleSearch = () => {
    // agar country select nahi
    if (!selectedCountry) {
      alert("Please select the country");
      return;
    }
    const data = {
      city_name: selectedCity ? selectedCity.city_name : null,
      city_code: selectedCity ? selectedCity.city_code : null,
      country_name: selectedCountry.country_name,
      country_code: selectedCountry.country_code,
      hotel_name: hotelName ? hotelName : null
    }

    const encoded = encodeURIComponent(JSON.stringify(data))

    router.push(`/hotels?data=${encoded}`)

    // agar country select ho gayi → next page
    // router.push(`/hotels?country=${country}`);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);
  useEffect(() => {
    const fetchCountryData = async () => {
      setCountriesLoading(true)
      try {
        const json = JSON.stringify({});
        const response = await axios.post(`http://172.16.253.49:5001/hotels?action=get_countries`, JSON.stringify({ params: json }), {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        });

        if (response.data.success === true) {
          // console.log("contry data", response.data.data)
          setCountries(response.data.data)
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setCountriesLoading(false)
      }

    };
    fetchCountryData()
  }, [])

  useEffect(() => {
    if (selectedCountry !== null) {
      setCityInput("");
      setSelectedCity(null);
      const fetchCitiesData = async () => {
        setCitiesLoading(true);
        try {
          const json = JSON.stringify({ country_name: selectedCountry.country_name, country_code: selectedCountry.country_code });
          const response = await axios.post(`http://172.16.253.49:5001/hotels?action=get_cities_by_country`, JSON.stringify({ params: json }), {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          });

          if (response.data.success === true) {
            // console.log("contry data", response.data.data)
            // setCountries(response.data.data)
            setCities(response.data.data)
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        } finally {
          setCitiesLoading(false);
        }

      };
      fetchCitiesData()
    }
  }, [selectedCountry])

  useEffect(() => {
    const fetchHotelSuggestions = async () => {
      if (hotelName.trim().length < 3) {
        setHotelSuggestions([]);
        return;
      }

      setHotelLoading(true);
      try {
        const json = JSON.stringify({ country_name: selectedCountry ? selectedCountry.country_name : null, country_code: selectedCountry ? selectedCountry.country_code : null, city_name: selectedCity ? selectedCity.city_name : null, city_code: selectedCity ? selectedCity.city_code : null, hotel_name: hotelName });
        const response = await axios.post(`http://172.16.253.49:5001/hotels?action=get_hotels_suggestions`, JSON.stringify({ params: json }), {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        });

        if (response.data.success === true) {
          setHotelSuggestions(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching hotel suggestions:", error);
      } finally {
        setHotelLoading(false);
      }
    };

    const delayDebounce = setTimeout(() => {
      fetchHotelSuggestions();
    }, 400);

    return () => clearTimeout(delayDebounce);
  }, [hotelName]);


  interface Search {
    type: "flight" | "hotel";
    from?: string;
    to?: string;
    name?: string;
    dates: string;
    details: string;
    price: string;
    action: string;
  }

  const searches: Search[] = [
    {
      type: "hotel",
      name: "Babar House – Faisalābād, Pakistan",
      dates: "Tue 3/3 ➝ Mon 3/9",
      details: "1 room, 2 guests",
      price: "$15",
      action: "Search",
    },
    {
      type: "hotel",
      name: "Babar House – Faisalābād, Pakistan",
      dates: "Tue 3/3 ➝ Mon 3/9",
      details: "1 room, 2 guests",
      price: "$15",
      action: "Search",
    },
    {
      type: "hotel",
      name: "Babar House – Faisalābād, Pakistan",
      dates: "Tue 3/3 ➝ Mon 3/9",
      details: "1 room, 2 guests",
      price: "$15",
      action: "Search",
    },
    {
      type: "hotel",
      name: "Babar House – Faisalābād, Pakistan",
      dates: "Tue 3/3 ➝ Mon 3/9",
      details: "1 room, 2 guests",
      price: "$15",
      action: "Search",
    },
  ];


  return (
    <>
      {/* Navbar */}
      <Navbar />

      <div className="max-w-screen-2xl mx-auto px-2 sm:px-6 -bottom-10 pt-10 lg:px-20 h-[400px] sm:h-[500px] relative overflow-hidden">
        <Image
          src={images[current]}
          alt="room"
          fill
          priority
          className="object-cover brightness-75 transition-all duration-700"
        />

        {/* Overlay Content */}
        <div className="relative z-10 pt-16 sm:pt-20 pl-4 sm:pl-10 text-white max-w-xl">
          <h1 className="font-bold text-3xl relative top-3 sm:text-3xl lg:text-4xl hover:text-amber-500 transition">
            Reserve the best hotel today </h1>

          {/* Icons Row */}
          <div className="flex flex-wrap gap-3 mt-6">
            <div className="bg-black hover:bg-amber-600 transition rounded-2xl px-4 py-2 flex items-center gap-2 cursor-pointer">
              <MdBedroomParent className="text-white text-xl" />
              <span className="font-bold text-white">Stays</span>
            </div>

            <div className="bg-black hover:bg-amber-600 transition rounded-2xl px-4 py-2 flex items-center gap-2 cursor-pointer">
              <FaCarAlt className="text-white text-xl" />
              <span className="font-bold text-white">Car</span>
            </div>

            <div className="bg-black hover:bg-amber-600 transition rounded-2xl px-4 py-2 flex items-center gap-2 cursor-pointer">
              <GiPalmTree className="text-white text-xl" />
              <span className="font-bold text-white">Packages</span>
            </div>
          </div>

          <div className="mt-8 w-[900px]">
            {/* search bar */}
            <div className="w-full bg-white rounded-xl shadow-lg p-3 flex flex-col md:flex-row gap-3">

              {/* HOTEL */}
              <input
                type="text"
                placeholder="Hotel"
                value={hotelName}
                onChange={(e) => {
                  const value = e.target.value;
                  setHotelName(value);

                  const selected = hotelSuggestions.find(
                    (h: any) => h.hotel_name === value
                  );

                  if (selected) {
                    // Auto-fill country
                    setCountryInput(selected.country_name);
                    setSelectedCountry({
                      country_name: selected.country_name,
                      country_code: selected.country_code,
                    });

                    // Auto-fill city
                    setCityInput(selected.city_name);
                    setSelectedCity({
                      city_name: selected.city_name,
                      city_code: selected.city_code,
                    });

                    setHotelSuggestions([]);
                  }
                }}
                className="flex-1 outline-none text-gray-700 px-4 py-2 rounded-md border"
                list="hotel-list"
              />
              <datalist id="hotel-list">
                {hotelLoading ? (
                  <option value="Loading hotels..." />
                ) : (
                  hotelSuggestions.map((hotel: any, index: number) => (
                    <option key={index} value={hotel.hotel_name} />
                  ))
                )}
              </datalist>

              {/* COUNTRY */}
              <input
                type="text"
                placeholder="Country"
                value={countryInput}
                onChange={(e) => {
                  const value = e.target.value;
                  setCountryInput(value);

                  const selected = countries.find(
                    (c: any) => c.country_name === value
                  );

                  if (selected) setSelectedCountry(selected);
                }}
                className="flex-1 outline-none text-gray-700 px-4 py-2 rounded-md border"
                list="country-list"
              />

              <datalist id="country-list">
                {countriesLoading ? (
                  <option value="Loading countries..." />
                ) : (
                  countries.map((country: any, index: number) => (
                    <option key={index} value={country.country_name} />
                  ))
                )}
              </datalist>

              {/* CITY */}
              <input
                type="text"
                placeholder="City"
                value={cityInput}
                onChange={(e) => {
                  const value = e.target.value;
                  setCityInput(value);

                  const selected = cities.find(
                    (c: any) => c.city_name === value
                  );

                  if (selected) setSelectedCity(selected);
                }}
                className="flex-1 outline-none text-gray-700 px-4 py-2 rounded-md border"
                list="city-list"
              />

              <datalist id="city-list">
                {citiesLoading ? (
                  <option value="Loading cities..." />
                ) : (
                  cities.map((city: any, index: number) => (
                    <option key={index} value={city.city_name} />
                  ))
                )}
              </datalist>

              {/* SEARCH BUTTON */}
              <button
                onClick={handleSearch}
                className="bg-amber-600 text-white px-6 py-2 rounded-md hover:bg-amber-500 transition whitespace-nowrap"
              >
                Search
              </button>

            </div>
          </div></div>

        {/* 3 Dot Slider */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full ${i === current ? "bg-white" : "bg-white/50"
                }`}
            />
          ))}
        </div>
      </div>

      {/* Your recent searches */}
      <div className="p-4 sm:p-6 bg-transparent">
        <h2 className="text-4xl font-bold mb-12 pt-10 left-4 relative">
          Your recent searches
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {searches.map((search, index) => (
            <div
              key={index}
              className="shadow-md rounded-lg p-4 flex flex-col bg-white"
            >
              <div className="flex items-center mb-2">
                {search.type === "flight" ? (
                  <FaPlane className="text-gray-600 mr-2" />
                ) : (
                  <FaBed className="text-gray-600 mr-2" />
                )}

                <div>
                  <p className="font-semibold">
                    {search.type === "flight"
                      ? `${search.from} ➝ ${search.to}`
                      : search.name}
                  </p>
                  <p className="text-sm text-gray-500">{search.dates}</p>
                </div>
              </div>

              <p className="text-sm text-gray-600">{search.details}</p>

              <div className="mt-4 flex justify-between items-center">
                <p className="text-2xl font-bold">
                  {search.price}

                  <span className="line-through text-gray-400 text-sm ml-2">
                  </span>

                </p>

                <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 text-sm">
                  {search.action || "View details"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* 
       Explore Hotels in Your Country */}
      <div className=" px-8 h-full pt-14">
        <h2 className="font-bold text-3xl text-black mb-4">
          Explore Hotels in Your Country
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 w-full items-start">
          <div className="w-full h-78 shadow-2xl border-2 border-gray-300 rounded-2xl overflow-hidden bg-white">
            <div className="relative">
              <Link href="./Faisalabad">
                <Image
                  src="/Fais.PNG"
                  alt="ROOM"
                  width={320}
                  height={180}
                  className="w-full h-40 object-cover"
                />
              </Link>
            </div>
            <div className="p-3">
              <h2 className="text-lg font-semibold text-black">Faisalabad</h2>
              <p className="text-sm text-gray-700">1h 45m, non-stop</p>
              <p className="text-black">Mon 3/2 , Mon 3/9</p>
              <p className="text-black font-bold top-6 text-xl relative">From $85</p>
            </div>
          </div>

          <div className="w-full h-78 shadow-2xl border-2 border-gray-300 rounded-2xl overflow-hidden bg-white">
            <div className="relative">
              <Link href="./Lahore">
                <Image
                  src="/Lah.PNG"
                  alt="ROOM"
                  width={320}
                  height={180}
                  className="w-full h-40 object-cover"
                />
              </Link>
            </div>
            <div className="p-3">
              <h2 className="text-lg font-semibold text-black">Lahore</h2>
              <p className="text-sm text-gray-700">1h 45m, non-stop</p>
              <p className="text-black">Mon 3/9 , Mon 3/16</p>
              <p className="text-black font-bold top-6 text-xl relative">From $147</p>
            </div>
          </div>

          <div className="w-full h-78 shadow-2xl border-2 border-gray-300 rounded-2xl overflow-hidden bg-white">
            <div className="relative">
              <Link href="./Islamabad">
                <Image
                  src="/Isl.PNG"
                  alt="ROOM"
                  width={320}
                  height={180}
                  className="w-full h-40 object-cover"
                />
              </Link>
            </div>
            <div className="p-3">
              <h2 className="text-lg font-semibold text-black">Islamabad</h2>
              <p className="text-sm text-gray-700">1h 55m , non-stop</p>
              <p className="text-black">Mon 3/9 , Mon 3/16</p>
              <p className="text-black font-bold top-6 text-xl relative">From $175</p>
            </div>
          </div>

          <div className="w-full h-78 shadow-2xl border-2 border-gray-300 rounded-2xl overflow-hidden bg-white">
            <div className="relative">
              <Link href="./Multan">
                <Image
                  src="/Multan.PNG"
                  alt="ROOM"
                  width={320}
                  height={180}
                  className="w-full h-40 object-cover"
                />
              </Link>

            </div>
            <div className="p-3">
              <h2 className="text-lg font-semibold text-black">Multan</h2>
              <p className="text-sm text-gray-700">1h 50m , non-stop</p>
              <p className="text-black ">Sat 3/7 , Sat 3/14</p>
              <p className="text-black font-bold top-6 text-xl relative">From $196</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hotel For Fabs City */}
      <div className=" px-8 h-full pt-14">
        <h2 className="font-bold text-4xl text-black mb-4">
          Hotel For Fabs City
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 w-full items-start">
          <div className="w-full h-78 shadow-2xl border-2 border-gray-300 rounded-2xl overflow-hidden bg-white">
            <div className="relative">
              <Link href="./Faisalabad">
                <Image
                  src="/Dub.PNG"
                  alt="ROOM"
                  width={320}
                  height={180}
                  className="w-full h-40 object-cover"
                />
              </Link>
            </div>
            <div className="p-3">
              <h2 className="text-lg font-semibold text-black">Dubia</h2>
              <p className="text-sm text-gray-700">1h 45m, non-stop</p>
              <p className="text-black">Mon 3/2 , Mon 3/9</p>
              <p className="text-black font-bold top-6 text-xl relative">From $85</p>
            </div>
          </div>

          <div className="w-full h-78 shadow-2xl border-2 border-gray-300 rounded-2xl overflow-hidden bg-white">
            <div className="relative">
              <Link href="./Lahore">
                <Image
                  src="/Abu.PNG"
                  alt="ROOM"
                  width={320}
                  height={180}
                  className="w-full h-40 object-cover"
                />
              </Link>
            </div>
            <div className="p-3">
              <h2 className="text-lg font-semibold text-black">Abu Dahbi</h2>
              <p className="text-sm text-gray-700">1h 45m, non-stop</p>
              <p className="text-black">Mon 3/9 , Mon 3/16</p>
              <p className="text-black font-bold top-6 text-xl relative">From $147</p>
            </div>
          </div>

          <div className="w-full h-78 shadow-2xl border-2 border-gray-300 rounded-2xl overflow-hidden bg-white">
            <div className="relative">
              <Link href="./Islamabad">
                <Image
                  src="/Mus.PNG"
                  alt="ROOM"
                  width={320}
                  height={180}
                  className="w-full h-40 object-cover"
                />
              </Link>
            </div>
            <div className="p-3">
              <h2 className="text-lg font-semibold text-black">Muscat</h2>
              <p className="text-sm text-gray-700">1h 55m , non-stop</p>
              <p className="text-black">Mon 3/9 , Mon 3/16</p>
              <p className="text-black font-bold top-6 text-xl relative">From $175</p>
            </div>
          </div>

          <div className="w-full h-78 shadow-2xl border-2 border-gray-300 rounded-2xl overflow-hidden bg-white">
            <div className="relative">
              <Link href="./Multan">
                <Image
                  src="/Sha.PNG"
                  alt="ROOM"
                  width={320}
                  height={180}
                  className="w-full h-40 object-cover"
                />
              </Link>

            </div>
            <div className="p-3">
              <h2 className="text-lg font-semibold text-black">Sharjah</h2>
              <p className="text-sm text-gray-700">1h 50m , non-stop</p>
              <p className="text-black ">Sat 3/7 , Sat 3/14</p>
              <p className="text-black font-bold top-6 text-xl relative">From $196</p>
            </div>
          </div>
        </div>
      </div>



      <Question />

      <Footer />


    </>
  );
}