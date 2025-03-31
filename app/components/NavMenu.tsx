"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Navbar = () => {
  return (
    <motion.nav
      className="fixed top-0 left-0 w-full bg-white flex justify-center items-center gap-10"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Left Menu */}
      <div className="flex gap-8">
        <div className="text-lg cursor-pointer">Instructors</div>
        <div className="text-lg cursor-pointer">Schedule</div>
      </div>

      {/* Logo in the Center */}
      <div className="py-2">
        <Image
          src="/skiflogo.png"
          alt="Logo"
          width={100} // Set the width you want for the logo
          height={50}
        />
      </div>

      {/* Right Menu */}
      <div className="flex gap-8">
        <div className="text-lg cursor-pointer">Blog</div>
        <div className="text-lg cursor-pointer">Contact</div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
