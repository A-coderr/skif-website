"use client";

import React from "react";
import Image from "next/image";
import { instructors } from "../data/instructors";
import { motion } from "framer-motion";

export default function InstructorsHome() {
  return (
    <section
      id="instructors"
      className="py-16 px-4 bg-gradient-to-br from-[#f7f2e7] via-[#fbe3e1] to-[#e3f6f5] text-black"
    >
      <h2 className="text-3xl font-bold text-center mb-12">
        Meet Our Instructors
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {instructors.map((instructor, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="border border-gray-300 shadow-lg overflow-hidden bg-white"
          >
            <Image
              src={instructor.image}
              alt={instructor.name}
              width={400}
              height={300}
              className="w-full h-64 object-cover"
            />
            <div className="p-5 flex flex-col items-start justify-between h-full">
              <h3 className="text-xl font-semibold mb-4">{instructor.name}</h3>

              <motion.a
                href="/instructors"
                whileHover={{ scale: 1.03 }}
                className="relative px-5 py-2 text-sm font-medium text-white border border-white group overflow-hidden transition-all duration-300"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                  Learn More
                </span>
                <span className="absolute top-0 left-0 w-0 h-full bg-white transition-all duration-300 group-hover:w-full z-0"></span>
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
