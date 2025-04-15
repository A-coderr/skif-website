"use client";

import { motion } from "framer-motion";
import { FaUser, FaChild, FaUserGraduate } from "react-icons/fa";

export default function ClassesOfferedSection() {
  return (
    <section className="bg-[#fefefe] px-6 py-16 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto text-center border-t-2 border-gray-100 pt-12"
      >
        <p className="text-md uppercase text-[#B71C1C] tracking-widest mb-4">
          Choose the Class
        </p>

        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-6">
          Age Groups & Levels
        </h2>

        <p className="text-center text-gray-600 text-md mb-8 md:max-w-1/2 mx-auto">
          Our classes are structured by age and experience level — from young
          beginners taking their first stance to black belts honing their kata
          and sparring techniques.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-gray-700">
          {/* Beginners */}
          <div className="flex flex-col items-center space-y-4">
            <FaChild size={30} className="text-[#B71C1C]" />
            <h3 className="text-xl font-semibold">Beginners</h3>
            <p className="text-md text-center max-w-xs">
              Ages 4+ — Learn the basics of karate in a fun, supportive setting.
            </p>
          </div>

          {/* Intermediate */}
          <div className="flex flex-col items-center space-y-4">
            <FaUser size={30} className="text-[#B71C1C]" />
            <h3 className="text-xl font-semibold">Intermediate</h3>
            <p className="text-md text-center max-w-xs">
              Build on foundational skills with more advanced forms and
              sparring.
            </p>
          </div>

          {/* Advanced & Black Belts */}
          <div className="flex flex-col items-center space-y-4">
            <FaUserGraduate size={30} className="text-[#B71C1C]" />
            <h3 className="text-xl font-semibold">Advanced & Black Belts</h3>
            <p className="text-md text-center max-w-xs">
              Focus on high-level techniques, precision kata, and leadership in
              training.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
