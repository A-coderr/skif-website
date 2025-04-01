"use client";

import React from "react";
import { motion } from "framer-motion";
import Calligraphy from "../components/Calligraphy";

export const Karate = () => {
  return (
    <motion.section
      className="max-w-7xl mx-auto min-h-[70vh] flex items-center justify-center"
      initial={{ opacity: 0 }} // Start from invisible
      animate={{ opacity: 1 }} // Fade in to visible
      transition={{ duration: 1 }} // Duration of fade-in effect
    >
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12 p-6">
        {/* Left Side: Text */}
        <motion.div
          className="w-full md:w-1/2 text-left md:text-left space-y-6"
          initial={{ x: -100, opacity: 0 }} // Start slightly off-screen to the left
          animate={{ x: 0, opacity: 1 }} // Slide in and fade in
          transition={{ duration: 1, type: "spring", stiffness: 50 }}
        >
          <h1 className="text-5xl font-extrabold text-left text-gray-800 mb-12">
            What is Karate?
          </h1>
          <p className="text-md leading-relaxed text-gray-800 transition-all duration-500 hover:text-[#B71C1C]">
            The word <strong>karate</strong> is a combination of two Japanese
            characters: <strong>kara</strong>, meaning &quot;empty,&quot; and{" "}
            <strong>te</strong>, meaning &quot;hand&quot;; thus karate means
            &quot;empty hand.&quot; Adding the suffix <strong>-do</strong>,
            meaning &quot;way&quot; (<strong>karate-do</strong>), implies karate
            as a total way of life that goes well beyond self-defense
            applications. In traditional karate-do, we always keep in mind that
            the true opponent is oneself.
          </p>
          <p className="text-md leading-relaxed text-gray-800 transition-all duration-500 hover:text-[#B71C1C]">
            Karate is many things. It is an excellent and well-balanced form of
            exercise. It is a highly evolved means of self-defense. It is not
            merely a sport or form of exercise, although it does incorporate
            these elements. Karate is an art since the karateka must reach
            beyond just the mechanics of technique toward creativity in the
            application of skills in order to be proficient. Karate can also be
            a way of life. Most importantly, karate is a means of personal
            character development and improvement.
          </p>
          <p className="text-md leading-relaxed text-gray-800 transition-all duration-500 hover:text-[#B71C1C]">
            The practice of karate is divided into three elements:{" "}
            <strong>Kihon</strong> (basics), <strong>Kata</strong> (forms), and{" "}
            <strong>Kumite</strong> (sparring). However, these three elements
            should not be considered separate, as they constantly overlap and
            rely on each other.
          </p>
        </motion.div>

        {/* Right Side: Kanji */}
        <motion.div
          className="w-full h-[60vh] md:w-1/2 flex justify-center items-center"
          initial={{ x: 100, opacity: 0 }} // Start off-screen to the right
          animate={{ x: 0, opacity: 1 }} // Move to its original position
          transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
        >
          <Calligraphy />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Karate;
