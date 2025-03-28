"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const navVariants = {
  hidden: { opacity: 0, x: -50 }, // Start slightly left and invisible
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.2, // Each child appears one by one
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 0 }, // Start lower
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const NavMenu = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className="fixed inset-0 flex items-center justify-center"
    >
      <nav className="transform -translate-x-50">
        <ul className="flex flex-col space-y-6 text-6xl font-bold">
          {["Home", "About", "Services", "Contact"].map((item, index) => (
            <motion.li key={index} variants={itemVariants}>
              <Link href={`/${item.toLowerCase()}`}>
                <span className="hover:text-[#E63946] transition duration-300 cursor-pointer">
                  {item}
                </span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.div>
  );
};

export default NavMenu;
