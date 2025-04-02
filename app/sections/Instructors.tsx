"use client";

import { InstructorCard } from "../components/InstructorCard";

const instructors = [
  {
    name: "Instructor One",
    photo: "/giraffe.jpg", // Replace with actual path
    bio: "A highly experienced karate instructor with 10 years of experience in both skiing and martial arts.",
  },
  {
    name: "Instructor Two",
    photo: "/giraffe.jpg", // Replace with actual path
    bio: "Specializes in self-defense techniques and skiing drills for all skill levels.",
  },
  {
    name: "Instructor Three",
    photo: "/giraffe.jpg", // Replace with actual path
    bio: "A passionate instructor with a deep understanding of karate philosophy and skiing mechanics.",
  },
];

export default function Instructors() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Meet Our Instructors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {instructors.map((instructor, index) => (
            <InstructorCard key={index} instructor={instructor} />
          ))}
        </div>
      </div>
    </section>
  );
}
