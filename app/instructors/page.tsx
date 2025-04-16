"use client";

import Instructors from "../sections/Instructors";
import Banner from "../components/Banner";

export default function InstructorsPage() {
  return (
    <>
      <Banner
        imageUrl="/banners/banner1.webp"
        title="Meet Our Instructors"
        page="Instructors"
      />
      <Instructors />
    </>
  );
}
