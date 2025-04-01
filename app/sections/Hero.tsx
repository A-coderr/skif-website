"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const translateY2 = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <section
      ref={ref}
      className="relative h-screen md:h-[90vh] w-full overflow-hidden flex items-center justify-center bg-gray-900 text-white"
    >
      {/* Background Layer */}
      <motion.div
        style={{ y: translateY2 }}
        className="absolute inset-0 w-full h-full bg-[url('/hero.jpg')] bg-cover bg-center opacity-30"
      />

      {/* Foreground Layer - Title */}
      <div className=" flex flex-col items-center justify-center relative text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-bold"
        >
          SKIF Karate Canada
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-4 text-lg md:text-2xl"
        >
          Our passion is Karate-Do
        </motion.p>
        <motion.a
          href="/contact"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative px-5 py-2 mt-15 text-lg font-thin text-white border-1 border-white overflow-hidden transition-all duration-300 group"
        >
          <span className="relative z-5 transition-all duration-300 group-hover:text-gray-900">
            Contact Us
          </span>
          <span className="absolute top-0 left-0 w-0 h-full bg-white transition-all duration-300 group-hover:w-full"></span>
        </motion.a>
      </div>
    </section>
  );
}
