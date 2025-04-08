"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const AboutUsSection = () => {
  return (
    <section className="w-full px-4 md:px-12 lg:px-24 py-16 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Text Content */}
        <motion.div
          className="w-full lg:w-1/2 text-left"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">About Us</h2>
          <p className="text-base sm:text-lg leading-relaxed">
            We offer karate programs tailored to students of all ages and skill
            levels. In our safe and friendly environment, multiple instructors
            are available to teach according to each student&apos;s individual
            needs. We operate on a flexible schedule, including the option for
            private classes. Additionally, students have the opportunity to
            participate in seminars led by various karate sensei, providing a
            deeper exploration of their karate journey.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          className="relative w-full lg:w-1/2 h-[300px] md:h-[400px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Image
            src="/hero.jpg"
            alt="Karate class"
            fill
            className="object-cover shadow-lg"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsSection;
