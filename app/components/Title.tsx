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
      className={`w-full ${alignmentMap[align]} relative inline-flex items-center pl-2 md:pl-4 py-2 my-6 md:my-10`}
    >
      {/* Animated red line */}
      <motion.div
        className="absolute left-0 top-0 w-1 bg-[#B71C1C]"
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />

      {/* Title text */}
      <motion.h1
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white pl-2 md:pl-4"
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
