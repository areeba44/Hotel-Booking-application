import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
export default function Footer() {
  return (
    
    <footer className="bg-gray-200 text-black py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* First Div: Company */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-black">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="hover:text-white transition">About</Link></li>
            <li><Link href="#" className="hover:text-white transition">Careers</Link></li>
            <li><Link href="#" className="hover:text-white transition">Mobile</Link></li>
            <li><Link href="#" className="hover:text-white transition">Blog</Link></li>
            <li><Link href="#" className="hover:text-white transition">How we work</Link></li>
          </ul>
        </div>

        {/* Second Div: Contact */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-black">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="hover:text-white transition">Contact</Link></li>
            <li><Link href="#" className="hover:text-white transition">Help/FAQ</Link></li>
            <li><Link href="#" className="hover:text-white transition">Press</Link></li>
            <li><Link href="#" className="hover:text-white transition">Affiliates</Link></li>
            <li><Link href="#" className="hover:text-white transition">Hotel owners</Link></li>
            <li><Link href="#" className="hover:text-white transition">Partners</Link></li>
            <li><Link href="#" className="hover:text-white transition">Advertise with us</Link></li>
          </ul>
        </div>

        {/* Third Div: More */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-black">More</h3>
          <ul className="space-y-2 text-sm mb-4">
            <li><Link href="#" className="hover:text-white transition">Airline fees</Link></li>
            <li><Link href="#" className="hover:text-white transition">Airlines</Link></li>
            <li><Link href="#" className="hover:text-white transition">Low fare tips</Link></li>
            <li><Link href="#" className="hover:text-white transition">Badges & Certificates</Link></li>
            <li><Link href="#" className="hover:text-white transition">Security</Link></li>
          </ul>

          {/* Social Media Icons */}
          <div className="flex gap-4 mt-2">
            <Link href="#" className="hover:text-white transition"><FaFacebookF size={20} /></Link>
            <Link href="#" className="hover:text-white transition"><FaInstagram size={20} /></Link>
            <Link href="#" className="hover:text-white transition"><FaTwitter size={20} /></Link>
            <Link href="#" className="hover:text-white transition"><FaLinkedinIn size={20} /></Link>
          </div>
        </div>

      <div className="flex flex-col items-start gap-2">
      
      {/* Google Play Button */}
      <button className="flex items-center gap-2 bg-gray-200 border-2 text-black px-4 py-2 rounded-xl hover:bg-gray-800 transition">
        <FaGooglePlay className="text-2xl" />
        <span className="font-semibold">Google Play</span>
      </button>

     {/* FaApple Button */}
      <button className="flex items-center gap-2 bg-gray-200 border-2 text-black px-4 py-2 rounded-xl hover:bg-gray-800 transition">
        <FaApple className="text-2xl" />
        <span className="font-semibold">Apple Store</span>
      </button>

    </div>

      </div>
      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-800 flex flex-col sm:flex-row justify-center items-center gap-4">
        <span>©2026 KAYAK</span>
        <Link href="#" className="hover:text-white transition">Privacy</Link>
        <Link href="#" className="hover:text-white transition">Terms & Conditions</Link>
        <Link href="#" className="hover:text-white transition">Ad Choices</Link>
      </div>

    </footer>
  
  );
}


