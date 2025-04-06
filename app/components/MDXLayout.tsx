"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Post, posts } from "../data/blogPosts";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Masonry from "react-masonry-css";

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
    backgroundImage: `url('${post?.image || "/hero.png"}')`,
  };

  if (!post) return null; // Return null if post is undefined

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
      {post.gallery?.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 pb-20">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Gallery</h2>

          <Masonry
            breakpointCols={{ default: 3, 1024: 2, 640: 1 }}
            className="flex gap-6"
            columnClassName="space-y-6"
          >
            {post.gallery.map((src, idx) => (
              <div key={idx} className="overflow-hidden shadow-lg">
                <Image
                  src={src}
                  alt={`Gallery image ${idx + 1}`}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            ))}
          </Masonry>
        </section>
      )}
    </>
  );
}

export default MDXLayout;
