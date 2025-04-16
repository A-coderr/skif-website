"use client";

import { motion } from "framer-motion";

export default function Pricing() {
  return (
    <section className="bg-[#fefefe] px-6 py-20 lg:py-32">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto text-center"
      >
        <p className="text-md uppercase text-[#B71C1C] tracking-widest mb-4">
          Pricing
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Choose Your Plan
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-16">
          Flexible options for all levels. Train regularly and grow at your
          pace.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Beginners & Intermediate */}
          <div className="p-8 border rounded-xl shadow hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold mb-2">
              Beginners & Intermediate
            </h3>
            <p className="text-4xl font-bold text-[#B71C1C] mb-4">
              $80<span className="text-base font-normal">/month</span>
            </p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>Weekly Classes</li>
              <li>Kata & Sparring</li>
              <li>Karate Fundamentals</li>
            </ul>
            <button className="bg-[#B71C1C] text-white px-6 py-2 rounded hover:bg-[#a61717] transition">
              Get Started
            </button>
          </div>

          {/* Advanced */}
          <div className="p-8 border rounded-xl shadow hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold mb-2">Advanced & Elite</h3>
            <p className="text-4xl font-bold text-[#B71C1C] mb-4">
              $90<span className="text-base font-normal">/month</span>
            </p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>Weekly Classes</li>
              <li>Advanced Kata & Sparring</li>
              <li>Black Belt Preparation</li>
            </ul>
            <button className="bg-[#B71C1C] text-white px-6 py-2 rounded hover:bg-[#a61717] transition">
              Join Now
            </button>
          </div>

          {/* Special Offer */}
          <div className="p-8 border-2 border-[#B71C1C] rounded-xl shadow-lg bg-[#fff8f8] relative overflow-hidden">
            <span className="absolute top-4 right-4 bg-[#B71C1C] text-white text-sm px-3 py-1 rounded-full">
              Best Value
            </span>
            <h3 className="text-xl font-semibold mb-2">Special Offer</h3>
            <p className="text-4xl font-bold text-[#B71C1C] mb-4">
              $150<span className="text-base font-normal">/2 months</span>
            </p>
            <button className="bg-[#B71C1C] text-white px-6 py-2 rounded hover:bg-[#a61717] transition">
              Grab Offer
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
