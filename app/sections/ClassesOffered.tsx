"use client";

import { motion } from "framer-motion";
import { FaUser, FaChild, FaUserGraduate } from "react-icons/fa";

export default function ClassesOfferedSection() {
  return (
    <section className="bg-gray-900 px-6 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto text-center"
      >
        <p className="text-md uppercase text-[#a61717] tracking-widest mb-4">
          Choose the Class
        </p>

        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-6">
          Age Groups & Levels
        </h2>

        <p className="text-center text-gray-500 text-md mb-20 md:max-w-1/2 mx-auto">
          Our classes are structured by age and experience level — from young
          beginners taking their first stance to black belts honing their kata
          and sparring techniques.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-gray-700">
          {/* Beginners */}
          <div className="flex flex-col items-center space-y-4">
            <FaChild size={30} className="text-[#a61717]" />
            <h3 className="text-xl font-semibold text-white">Beginners</h3>
            <p className="text-md text-center max-w-xs text-gray-500">
              Ages 5+ — Learn the basics of karate in a fun, supportive setting.
            </p>
          </div>

          {/* Intermediate */}
          <div className="flex flex-col items-center space-y-4">
            <FaUser size={30} className="text-[#a61717]" />
            <h3 className="text-xl font-semibold text-white">Intermediate</h3>
            <p className="text-md text-center max-w-xs text-gray-500">
              Build on foundational skills with more advanced forms and
              sparring.
            </p>
          </div>

          {/* Advanced & Black Belts */}
          <div className="flex flex-col items-center space-y-4">
            <FaUserGraduate size={30} className="text-[#a61717]" />
            <h3 className="text-xl font-semibold text-white">
              Advanced & Elite
            </h3>
            <p className="text-md text-center max-w-xs text-gray-500">
              Focus on high-level techniques, precision kata, and advanced
              sparring.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
