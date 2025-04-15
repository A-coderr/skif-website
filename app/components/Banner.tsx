"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Title from "./Title";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { HiChevronRight } from "react-icons/hi";

type BannerProps = {
  imageUrl: string;
  title?: string;
  page?: string;
};

const Banner = ({ imageUrl, title = "", page = "" }: BannerProps) => {
  const ref = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <section
      ref={ref}
      className="relative mt-20 md:mt-30 h-[30vh] md:h-[40vh] w-full overflow-hidden flex items-center justify-center bg-gray-900"
    >
      <motion.div
        style={{
          y: translateY,
          backgroundImage: `url(${imageUrl})`,
        }}
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-40"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-transparent z-0" />
      {/* Title overlay */}
      {title !== "" && (
        <div className="w-full max-w-7xl mx-auto z-10 px-4 py-6">
          <Title text={title} align="left" />

          <div className="mt-2 text-md text-white/80 flex items-center gap-1 pl-2 md:pl-4">
            <Link href="/" className="flex items-center gap-1 text-white/90">
              <FaHome className="text-white" />
              Home
            </Link>
            <HiChevronRight className="text-white text-lg" />
            <span className="text-white">{page}</span>
          </div>
        </div>
      )}
    </section>
  );
};

export default Banner;
