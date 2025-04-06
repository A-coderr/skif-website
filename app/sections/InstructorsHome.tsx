"use client";

import React from "react";
import Image from "next/image";
import { instructors } from "../data/instructors";
import { motion } from "framer-motion";

export default function InstructorsHome() {
  return (
    <section id="instructors" className="py-16 px-4 bg-gray-300 text-black">
      <div className="w-full max-w-7xl mx-auto text-left mb-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800">
          Meet Our Instructors
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {instructors.map((instructor, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="border border-gray-300 shadow-lg bg-white flex flex-col"
          >
            <Image
              src={instructor.image}
              alt={instructor.name}
              width={400}
              height={300}
              className="w-full h-64 object-cover object-top"
            />
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-4">{instructor.name}</h3>

              <motion.a
                href="/instructors"
                whileHover={{ scale: 1.05 }}
                className="relative inline-block px-5 py-2 text-sm font-medium text-black border border-black group overflow-hidden mt-2 self-start"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  Learn More
                </span>
                <span className="absolute inset-0 w-0 h-full bg-black transition-all duration-300 group-hover:w-full z-0"></span>
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
