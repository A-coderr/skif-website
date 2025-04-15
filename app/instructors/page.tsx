"use client";

import Instructors from "../sections/Instructors";
import Banner from "../components/Banner";

export default function InstructorsPage() {
  return (
    <>
      <Banner
        imageUrl="/karate.jpg"
        title="Meet Our Instructors"
        page="Instructors"
      />
      <Instructors />
    </>
  );
}
