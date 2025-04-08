"use client";

import BlogGallery from "../sections/BlogGallery";
import Banner from "../components/Banner";

export default function BlogPage() {
  return (
    <>
      <Banner imageUrl="/karate.jpg" />
      <BlogGallery />
    </>
  );
}
