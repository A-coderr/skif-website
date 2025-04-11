"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutUsSection() {
  return (
    <section className="bg-white px-6 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className="text-sm uppercase text-[#B71C1C] tracking-widest mb-8">
            About Us
          </p>
          <div className="mb-8 relative inline-block border-[#B71C1C] lg:border-b-0 lg:border-l-4 lg:pl-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-center lg:text-left">
              Your Karate Journey Starts Here
            </h2>
            <div className="absolute bottom-[-15px] left-1/3 w-1/3 sm:w-1/2 sm:left-1/4 md:w-2/3 md:left-1/6 border-b-2 lg:border-b-0 border-[#B71C1C]"></div>
          </div>
          <p className="text-gray-700 mb-4">
            We offer karate programs tailored to students of all ages and skill
            levels. In our safe and friendly environment, multiple instructors
            are available to teach according to each student&apos;s individual
            needs. We operate on a flexible schedule, including the option for
            private classes.
          </p>
          <p className="text-gray-700 mb-6">
            Our curriculum emphasizes the core components of traditional
            Shotokan Karate — kihon (fundamentals), kata (forms), and kumite
            (sparring) — to build a strong foundation in both technique and
            discipline.
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
              src="/hero.jpg"
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
