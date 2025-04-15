"use client";

import BlogGallery from "../sections/BlogGallery";
import Banner from "../components/Banner";

export default function BlogPage() {
  return (
    <>
      <Banner imageUrl="/karate.jpg" title="Latest Blog Posts" page="Blog" />
      <BlogGallery />
    </>
  );
}
