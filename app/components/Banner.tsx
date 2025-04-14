"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Title from "./Title";

type BannerProps = {
  imageUrl: string;
  title?: string;
};

const Banner = ({ imageUrl, title = "" }: BannerProps) => {
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
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-20"
      />
      {/* Title overlay */}
      {title !== "" && (
        <div className="z-10 px-4">
          <Title text={title} align="left" />
        </div>
      )}
    </section>
  );
};

export default Banner;
