"use client";

import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Footer = () => {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-gray-900 text-white pt-0 md:pt-6 bottom-0 w-full"
    >
      <motion.div
        variants={fadeInUp}
        className="grid grid-cols-1 md:grid-cols-4 gap-8 mx-auto w-full max-w-7xl px-6 py-6 text-center"
      >
        {/* Location */}
        <motion.div variants={fadeInUp} className="mt-6 md:mt-0 text-center">
          <h3 className="text-lg font-semibold mb-2 text-gray-500">Location</h3>
          <p className="text-sm">2233 Hurontario St, Mississauga, ON L5A 2E9</p>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={fadeInUp} className="mt-6 md:mt-0 text-center">
          <h3 className="text-lg font-semibold mb-2 text-gray-500">
            Quick Links
          </h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link href="/" className="hover:text-gray-300 transition">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/instructors"
                className="hover:text-gray-300 transition"
              >
                Instructors
              </Link>
            </li>
            <li>
              <Link href="/schedule" className="hover:text-gray-300 transition">
                Schedule
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-gray-300 transition">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-300 transition">
                Contact
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Working Hours */}
        <motion.div variants={fadeInUp} className="mt-6 md:mt-0 text-center">
          <h3 className="text-lg font-semibold mb-2 text-gray-500">
            Working Hours
          </h3>
          <div className="grid grid-cols-1 gap-x-4">
            <p className="text-sm">Monday: Closed</p>
            <p className="text-sm">Tuesday: 5-9 p.m.</p>
            <p className="text-sm">Wednesday: Closed</p>
            <p className="text-sm">Thursday: 5-9 p.m.</p>
            <p className="text-sm">Friday: 7-9 p.m.</p>
            <p className="text-sm">Saturday: 12-4 p.m.</p>
            <p className="text-sm">Sunday: Closed</p>
          </div>
        </motion.div>

        {/* Social Media Links */}
        <motion.div variants={fadeInUp} className="mt-4 md:mt-0 text-center">
          <h3 className="text-lg font-semibold mb-2 text-gray-500">
            Follow Us
          </h3>
          <div className="flex gap-6 justify-center">
            <Link
              href="https://www.facebook.com/SKIFCanada?mibextid=wwXIfr&mibextid=wwXIfr"
              target="_blank"
            >
              <FaFacebookF className="w-6 h-6 hover:text-blue-500 transition" />
            </Link>
            <Link
              href="https://www.instagram.com/skifcanada?igsh=YXJ1ZWNsYzZiZGUx"
              target="_blank"
            >
              <FaInstagram className="w-6 h-6 hover:text-pink-500 transition" />
            </Link>
          </div>
        </motion.div>
      </motion.div>

      {/* Copyright */}
      <motion.div
        variants={fadeInUp}
        className="max-w-7xl mx-auto border-t border-gray-700 py-6"
      >
        <p className="text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} SKIF Karate Canada. All rights reserved.
        </p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
