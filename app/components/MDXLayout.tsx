"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Post, posts } from "../data/blogPosts";
import { usePathname } from "next/navigation";

function MDXLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname().split("/")[2];
  const post = posts.find((p: Post) => p.slug === pathname);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const translateY2 = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  const backgroundImageStyle = {
    backgroundImage: `url('${post?.image || "/images/hero.png"}')`,
  };
  return (
    <>
      <section
        ref={ref}
        className="relative h-[40vh] w-full overflow-hidden flex items-center justify-center bg-gray-900 text-white"
      >
        {/* Background Layer */}
        <motion.div
          style={{ ...backgroundImageStyle, y: translateY2 }}
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-20"
        />
      </section>
      <div className="max-w-7xl mx-auto px-4 py-20 prose">{children}</div>
    </>
  );
}

export default MDXLayout;
