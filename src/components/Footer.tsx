"use client";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { IconType } from "react-icons";

/* Footer Column Component */
interface FooterColProps {
  title: string;
  links: string[];
}

function FooterCol({ title, links }: FooterColProps) {
  return (
    <div>
      <h3 className="text-sm font-semibold mb-4 text-white">{title}</h3>
      <ul className="space-y-2 text-sm text-white">
        {links.map((item) => (
          <li key={item}>
            <Link href="/" className="hover:text-white transition">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* Social Icon Component */
interface SocialIconProps {
  Icon: IconType;
}

function SocialIcon({ Icon }: SocialIconProps) {
  return (
    <div className="w-10 h-10 flex items-center justify-center border border-white rounded-full hover:bg-white hover:text-black transition cursor-pointer">
      <Icon size={14} />
    </div>
  );
}

/* Main Footer Component */
export default function Footer() {
  return (
    <footer className="bg-red-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7">
        {/* TOP SPLIT */}
        <div className="grid lg:grid-cols-2 gap-12 mt-9">
          {/* LEFT - BRAND */}
          <div>
            <h2 className="text-3xl font-bold tracking-wide">STAY HAVEN</h2>
            <p className="mt-5 text-white max-w-md leading-relaxed text-sm">
              Discover luxury stays across the world with premium comfort, elegant
              design, and unforgettable experiences crafted just for you.
            </p>
            {/* Social */}
            <div className="flex gap-4 mt-6">
              <SocialIcon Icon={FaFacebookF} />
              <SocialIcon Icon={FaInstagram} />
              <SocialIcon Icon={FaTwitter} />
            </div>
          </div>

          {/* RIGHT - LINKS GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <FooterCol
              title="Company"
              links={["About", "Careers", "Blog", "Press"]}
            />
            <FooterCol
              title="Explore"
              links={["Rooms", "Destinations", "Offers", "Gallery"]}
            />
            <FooterCol
              title="Support"
              links={["Help Center", "Contact", "Privacy", "Terms"]}
            />
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-white my-10"></div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white">
          <p>© 2026 Stay Haven. All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="/" className="hover:text-white transition">
              Privacy
            </Link>
            <Link href="/" className="hover:text-white transition">
              Terms
            </Link>
            <Link href="/" className="hover:text-white transition">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}