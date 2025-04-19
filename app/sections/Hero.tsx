"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * The HeroSection component renders a section with a background image that
 * fades in on scroll. The foreground layer contains a heading, a paragraph
 * and a link to the contact page. The components are animated to fade in
 * and translate on scroll.
 *
 * @returns {JSX.Element} The HeroSection component.
 */
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
        className="absolute inset-0 w-full h-full bg-[url('/hero.jpg')] bg-cover bg-center opacity-40"
      />

      {/* Foreground Layer */}
      <div className="flex flex-col items-center justify-center relative text-center">
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

        {/* Button */}
        <div className="relative inline-block group mt-8">
          {/* Border Square */}
          <motion.span
            initial={{ opacity: 0, x: 0, y: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
            className="absolute top-0 left-0 w-full h-full border-1 border-white 
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
              Contact Us
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
