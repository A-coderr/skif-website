"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function InstructorsPage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const translateY2 = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <>
      <section
        ref={ref}
        className="relative h-[40vh] w-full overflow-hidden flex items-center justify-center bg-gray-900 text-white"
      >
        {/* Background Layer */}
        <motion.div
          style={{ y: translateY2 }}
          className="absolute inset-0 w-full h-full bg-[url('/karate.jpg')] bg-cover bg-center opacity-20"
        />
      </section>
      <div>Instructors</div>
    </>
  );
}
