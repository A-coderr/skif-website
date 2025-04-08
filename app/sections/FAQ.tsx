"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "What age groups do you accept?",
    answer:
      "We welcome students of all ages, from young children to adults. Our classes are tailored to different skill and age levels.",
  },
  {
    question: "Do I need any experience to join?",
    answer:
      "No experience is necessary! We have beginner classes and our instructors guide everyone step by step.",
  },
  {
    question: "Are private classes available?",
    answer:
      "Yes, we offer private one-on-one training sessions with our experienced instructors to suit your schedule and learning style.",
  },
  {
    question: "Do you offer trial classes?",
    answer:
      "Absolutely! We encourage new students to come try a class to see if our dojo is the right fit for them.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-md bg-white overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#B71C1C] flex justify-between items-center"
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
