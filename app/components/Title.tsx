"use client";

import { motion } from "framer-motion";

type TitleProps = {
  text: string;
  align?: "left" | "center" | "right";
};

const alignmentMap: Record<NonNullable<TitleProps["align"]>, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

const Title = ({ text, align = "left" }: TitleProps) => {
  return (
    <div className={`w-full${alignmentMap[align]}`}>
      <motion.h1
        className="mb-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {text}
      </motion.h1>
    </div>
  );
};

export default Title;
