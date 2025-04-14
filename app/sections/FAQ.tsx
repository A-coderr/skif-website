"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqData } from "../data/faq";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-[#f5f5f5] py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-md text-center uppercase text-[#B71C1C] tracking-widest mb-6">
          FAQs
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-6">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-600 text-md mb-8 md:max-w-1/2 mx-auto">
          Here you&apos;ll find answers to the most commonly asked questions. If
          you can&apos;t find what you&apos;re looking for, feel free to reach
          out to us!
        </p>

        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-white overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full text-left px-6 py-4 flex justify-between items-center ${
                  activeIndex === index
                    ? "border-b-2 border-[#B71C1C] bg-[#fff3f3]"
                    : ""
                }`}
              >
                <span className="text-lg font-medium text-gray-800">
                  {faq.question}
                </span>
                <span className="text-[#B71C1C] text-2xl">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 py-4 text-gray-600 text-base">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
