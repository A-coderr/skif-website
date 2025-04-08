"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutUsSection() {
  return (
    <section className="bg-white px-6 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className="text-sm uppercase text-red-600 tracking-widest mb-2">
            About Us
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Empowering Students Through Karate
          </h2>
          <p className="text-gray-700 mb-4">
            We offer karate programs tailored to students of all ages and skill
            levels. In our safe and friendly environment, multiple instructors
            are available to teach according to each student&apos;s individual
            needs. We operate on a flexible schedule, including the option for
            private classes.
          </p>
          <p className="text-gray-700 mb-6">
            Additionally, students have the opportunity to participate in
            seminars led by various karate sensei, providing a deeper
            exploration of their karate journey.
          </p>
        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full max-w-md mx-auto lg:max-w-full lg:w-1/2"
        >
          <div className="relative shadow-2xl overflow-hidden">
            <Image
              src="/hero.jpg" // update this to your image path
              alt="Karate students training"
              width={800}
              height={600}
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
