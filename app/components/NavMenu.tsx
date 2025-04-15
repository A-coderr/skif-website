"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useBanner } from "../context/BannerProvider";

const menuVariants = {
  open: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.4,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.07,
    },
  },
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3,
      ease: "easeIn",
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const linkVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
  closed: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.2 },
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { showBanner } = useBanner();
  const menuRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <motion.nav
      ref={menuRef}
      className={`fixed left-0 top-0 w-full z-40 bg-white shadow-md flex md:justify-center gap-35 justify-between items-center p-2 md:px-10 transition-all duration-300
        md:${
          showBanner ? "top-10" : "top-0"
        } md:transition-all md:duration-300`}
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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="absolute top-full left-0 w-full bg-white flex flex-col items-center px-4 overflow-hidden shadow-md md:hidden z-30"
          >
            {["instructors", "schedule", "blog", "contact"].map((page) => (
              <motion.div key={page} variants={linkVariants}>
                <Link
                  href={`/${page}`}
                  className="text-lg cursor-pointer py-3 block text-center w-full"
                  onClick={handleLinkClick}
                >
                  {page.charAt(0).toUpperCase() + page.slice(1)}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
