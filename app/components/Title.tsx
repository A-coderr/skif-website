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

/**
 * Title component for displaying animated headings.
 *
 * @component
 * @param {TitleProps} props
 * @param {string} props.text - The text to display as the title.
 * @param {"left" | "center" | "right"} [props.align="left"] - The alignment of the title.
 * @returns {JSX.Element} The rendered title component.
 */
const Title = ({ text = "", align = "left" }: TitleProps) => {
  return (
    <div
      className={`w-full ${alignmentMap[align]} relative inline-flex flex-col items-start pl-2 md:pl-4 py-2 my-6 md:my-10`}
    >
      {/* Title text */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {text}
      </motion.h1>

      {/* Animated red underline */}
      <motion.div
        className="mt-2 md:mt-4 h-1 bg-[#B71C1C] w-0"
        initial={{ width: 0 }}
        animate={{ width: "7%" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
    </div>
  );
};
export default Title;
