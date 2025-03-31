"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-2 bottom-0 w-full">
      <div className=" flex flex-col mx-auto items-center w-full max-w-7xl">
        {/* Logo & Socials (Same Row) */}
        <div className="flex flex-col md:flex-row md:px-10 items-center justify-between w-full">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/skiflogo.png"
              alt="Logo"
              width={70}
              height={60}
              priority
            />
          </Link>

          {/* Social Media Links */}
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="https://facebook.com" target="_blank">
              <FaFacebookF className="w-6 h-6 hover:text-blue-500 transition" />
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <FaInstagram className="w-6 h-6 hover:text-pink-500 transition" />
            </Link>
          </div>
        </div>

        {/* Copyright (Centered Below) */}
        <p className="text-sm text-gray-400 mt-4 text-center">
          © {new Date().getFullYear()} SKIF Karate Canada. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
