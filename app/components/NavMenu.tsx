"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) setIsOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full gap-30 bg-white shadow-md flex md:justify-center justify-between items-center p-2 md:px-10 z-10"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Desktop Menu (Hidden on Mobile) */}
      <div className="hidden md:flex gap-10">
        <Link
          href="/instructors"
          className="text-lg cursor-pointer hover:text-[#B71C1C]"
        >
          Instructors
        </Link>
        <Link
          href="/schedule"
          className="text-lg cursor-pointer hover:text-[#B71C1C]"
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
      <div className="hidden md:flex gap-10">
        <Link
          href="/blog"
          className="text-lg cursor-pointer hover:text-[#B71C1C]"
        >
          Blog
        </Link>
        <Link
          href="/contact"
          className="text-lg cursor-pointer hover:text-[#B71C1C]"
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
        <motion.div
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: { opacity: 1, height: "auto", pointerEvents: "auto" },
            closed: { opacity: 0, height: 0, pointerEvents: "none" },
          }}
          transition={{ duration: 0.3 }}
          className="absolute top-full left-0 w-full bg-white flex flex-col items-center px-4 overflow-hidden shadow-md md:hidden"
        >
          <Link
            href="/instructors"
            className="text-lg cursor-pointer py-2"
            onClick={handleLinkClick}
          >
            Instructors
          </Link>
          <Link
            href="/schedule"
            className="text-lg cursor-pointer py-2"
            onClick={handleLinkClick}
          >
            Schedule
          </Link>
          <Link
            href="/blog"
            className="text-lg cursor-pointer py-2"
            onClick={handleLinkClick}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-lg cursor-pointer py-2"
            onClick={handleLinkClick}
          >
            Contact
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
