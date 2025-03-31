"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full gap-12 bg-white shadow-md flex md:justify-center justify-between items-center p-2 md:px-10 z-10"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Desktop Menu (Hidden on Mobile) */}
      <div className="hidden md:flex gap-8">
        <Link
          href="/instructors"
          className="text-lg cursor-pointer hover:text-gray-500"
        >
          Instructors
        </Link>
        <Link
          href="/schedule"
          className="text-lg cursor-pointer hover:text-gray-500"
        >
          Schedule
        </Link>
      </div>

      {/* Logo in the Center */}
      <div className="pl-4 md:pl-0">
        <Link href="/">
          <Image
            src="/skiflogo.png"
            alt="Logo"
            width={70}
            height={0}
            priority
          />
        </Link>
      </div>

      {/* Desktop Right Menu (Hidden on Mobile) */}
      <div className="hidden md:flex gap-8">
        <Link
          href="/blog"
          className="text-lg cursor-pointer hover:text-gray-500"
        >
          Blog
        </Link>
        <Link
          href="/contact"
          className="text-lg cursor-pointer hover:text-gray-500"
        >
          Contact
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-800 focus:outline-none pr-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white flex flex-col items-center p-4 shadow-md md:hidden">
          <Link href="/instructors" className="text-lg cursor-pointer py-2">
            Instructors
          </Link>
          <Link href="/schedule" className="text-lg cursor-pointer py-2">
            Schedule
          </Link>
          <Link href="/blog" className="text-lg cursor-pointer py-2">
            Blog
          </Link>
          <Link href="/contact" className="text-lg cursor-pointer py-2">
            Contact
          </Link>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
