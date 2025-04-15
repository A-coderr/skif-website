"use client";

import Image from "next/image";
import Masonry from "react-masonry-css";

const images = [
  { src: "/hero.jpg", alt: "Karate student training" },
  { src: "/karate.jpg", alt: "Karate belt ceremony" },
  { src: "/hero.jpg", alt: "Sparring practice" },
  { src: "/karate.jpg", alt: "Karate team pose" },
];

const breakpointColumnsObj = {
  default: 2,
  768: 2,
  640: 1,
};

export default function Gallery() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-4"
        columnClassName="flex flex-col gap-4"
      >
        {images.map((img, idx) => (
          <div key={idx} className="overflow-hidden relative">
            <Image
              src={img.src}
              alt={img.alt}
              width={600}
              height={800}
              className="w-full h-auto object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        ))}
      </Masonry>
    </div>
  );
}
