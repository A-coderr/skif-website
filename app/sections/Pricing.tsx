"use client";

import { motion } from "framer-motion";

export default function Pricing() {
  return (
    <section className="bg-[#fefefe] px-6 py-20 md:py-32 bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto text-center"
      >
        <p className="text-md uppercase text-[#a61717] tracking-widest mb-4">
          Pricing
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
          Choose Your Plan
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto mb-16">
          Flexible options for all levels. Train regularly and grow at your
          pace.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:max-w-4xl md:mx-auto">
          {/* Beginners & Intermediate */}
          <div className="py-8 px-2 bg-gray-100 shadow hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold mb-2">
              Beginners & Intermediate
            </h3>

            {/* Prices side-by-side in same format */}
            <div className="flex flex-col md:flex-row md:gap-4 items-center justify-center mb-4 text-[#B71C1C]">
              <p className="text-4xl font-bold">
                $80<span className="text-base font-normal">/month</span>
              </p>
              <span className=" text-gray-600 text-lg">OR</span>
              <p className="text-4xl font-bold">
                $150<span className="text-base font-normal">/2 months</span>
              </p>
            </div>

            <ul className="text-gray-600 space-y-2 mb-6">
              <li>Weekly Classes</li>
              <li>Kata & Sparring</li>
              <li>Competition Training</li>
              <li>Karate Fundamentals</li>
            </ul>

            {/* Button */}
            <div className="relative inline-block group">
              {/* Border Square */}
              <motion.span
                initial={{ opacity: 0, x: 0, y: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                className="absolute top-0 left-0 w-full h-full border-1 border-[#B71C1C] 
        transition-transform duration-300 
        group-hover:translate-x-0 group-hover:translate-y-0 
        translate-x-2 translate-y-2 pointer-events-none z-0"
              />

              <motion.a
                href="/contact"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="relative block bg-[#B71C1C]
        text-white text-md md:text-base font-semibold tracking-wide 
        px-6 py-3 overflow-hidden transition-all duration-300 
        hover:bg-[#a61717] z-10"
              >
                <span className="relative z-10 transition-colors duration-300">
                  Get Started
                </span>
              </motion.a>
            </div>
          </div>

          {/* Advanced & Elite */}
          <div className="py-8 px-2 bg-gray-100 shadow hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold mb-2">Advanced & Elite</h3>
            <p className="text-4xl font-bold text-[#B71C1C] mb-4">
              $90<span className="text-base font-normal">/month</span>
            </p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>Weekly Classes</li>
              <li>Advanced Kata & Sparring</li>
              <li>Competition Training</li>
              <li>Black Belt Preparation</li>
            </ul>
            {/* Button */}
            <div className="relative inline-block group">
              {/* Border Square */}
              <motion.span
                initial={{ opacity: 0, x: 0, y: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                className="absolute top-0 left-0 w-full h-full border-1 border-[#B71C1C] 
                   transition-transform duration-300 
                   group-hover:translate-x-0 group-hover:translate-y-0 
                   translate-x-2 translate-y-2 pointer-events-none z-0"
              />

              <motion.a
                href="/contact"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="relative block bg-[#B71C1C]
                   text-white text-md md:text-base font-semibold tracking-wide 
                   px-6 py-3 overflow-hidden transition-all duration-300 
                   hover:bg-[#a61717] z-10"
              >
                {/* Button label */}
                <span className="relative z-10 transition-colors duration-300">
                  Get Started
                </span>
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
