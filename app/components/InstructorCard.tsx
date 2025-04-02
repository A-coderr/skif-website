import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Instructor {
  photo: string;
  name: string;
  bio: string;
}

export const InstructorCard: React.FC<{ instructor: Instructor }> = ({
  instructor,
}) => {
  return (
    <motion.div
      className="relative max-w-xs overflow-hidden shadow-lg bg-white group"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Image */}
      <motion.div
        className="relative w-full h-48 md:h-64 lg:h-80"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={instructor.photo}
          alt={instructor.name}
          width={500}
          height={500}
          objectFit="cover"
          className="transition-all duration-300 group-hover:opacity-0"
        />
      </motion.div>

      {/* Content (name and bio) */}
      <div className="absolute inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
        <div className="text-center text-white px-4 py-6">
          {/* Name without underline */}
          <motion.div
            className="font-bold text-xl mb-2 relative group"
            whileHover={{ color: "#fc0865" }} // Hover color change for the name
          >
            {instructor.name}
          </motion.div>

          <p className="text-base mb-4">{instructor.bio}</p>
          <motion.a
            href="/contact"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative px-5 py-2 text-lg font-thin text-white border-1 border-white overflow-hidden transition-all duration-300 group"
          >
            <span className="relative z-5 transition-all duration-300 group-hover:text-gray-900">
              Learn more
            </span>
            <span className="absolute top-0 left-0 w-0 h-full bg-white transition-all duration-300 group-hover:w-full"></span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};
