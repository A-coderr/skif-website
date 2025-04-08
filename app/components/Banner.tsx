"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type BannerProps = {
  imageUrl: string;
};

const Banner = ({ imageUrl }: BannerProps) => {
  const ref = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <section
      ref={ref}
      className="relative h-[30vh] md:h-[40vh] w-full overflow-hidden flex items-center justify-center bg-gray-900"
    >
      <motion.div
        style={{
          y: translateY,
          backgroundImage: `url(${imageUrl})`,
        }}
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-20"
      />
    </section>
  );
};

export default Banner;
