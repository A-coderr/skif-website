"use client";

import React from "react";
import Image from "next/image";
import { instructors } from "../data/instructors";
import { motion } from "framer-motion";

/**
 * Renders the InstructorsHome section showcasing the instructors.
 *
 * This component displays a list of instructors in a grid format,
 * with each instructor's image, name, and a "Learn More" link.
 * The section is styled with a background and text color, and includes
 * animation effects for a smooth appearance.
 *
 * @returns {JSX.Element} A section element containing instructor information.
 */

export default function InstructorsHome() {
  return (
    <section id="instructors" className="py-16 px-4 bg-[#f5f5f5] text-gray-300">
      <div className="w-full max-w-4xl mx-auto text-center mb-12">
        <p className="text-md text-center uppercase text-[#B71C1C] tracking-widest mb-6">
          Instructors
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-6">
          Meet Our Instructors
        </h2>
        <p className="text-center text-gray-600 text-md mb-8 md:max-w-2/3 mx-auto">
          Our dedicated instructors bring years of experience, passion, and
          discipline to every class. Whether you&apos;re a beginner or advancing
          through the ranks, they are here to guide, motivate, and help you grow
          both in skill and confidence.
        </p>
      </div>

      {/* Grid layout remains similar, adjusted max-width if needed */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {instructors.map((instructor, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            // Added rounded corners, changed background, removed border, kept shadow
            className="shadow-lg bg-white text-gray-900 flex flex-col overflow-hidden"
          >
            {/* Image setup remains similar */}
            <div className="relative w-full h-72">
              {/* Adjusted height slightly */}
              <Image
                src={instructor.image}
                alt={instructor.name}
                layout="fill" // Use fill layout for better responsiveness within fixed height container
                objectFit="cover" // Keep object-cover
                objectPosition="top" // Keep object-position
              />
            </div>
            {/* Centered text content, adjusted padding */}
            <div className="p-6 flex flex-col flex-grow text-center">
              {/* Adjusted name styling */}
              <h3 className="text-xl font-semibold mb-1">{instructor.name}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
