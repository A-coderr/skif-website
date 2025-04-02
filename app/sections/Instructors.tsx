"use client";

import { InstructorCard } from "../components/InstructorCard";

const instructors = [
  {
    name: "Sensei Antonio",
    photo: "/giraffe.jpg",
    bio: "A highly experienced karate instructor with 10 years of experience in both skiing and martial arts.",
  },
  {
    name: "Hanshi Dozono",
    photo: "/giraffe.jpg",
    bio: "Specializes in self-defense techniques and skiing drills for all skill levels.",
  },
  {
    name: "Sensei Roy",
    photo: "/giraffe.jpg",
    bio: "A passionate instructor with a deep understanding of karate philosophy and skiing mechanics.",
  },
];

export default function Instructors() {
  return (
    <section className="relative w-full bg-gray-100 overflow-hidden">
      {/* Parallax background with dark overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/karate.jpg')" }}
      >
        <div className="w-full h-full bg-black opacity-80"></div>
      </div>

      <div className="relative flex items-center justify-center w-full h-full">
        <div className="max-w-7xl mx-auto text-center p-6">
          <h2 className="text-3xl font-semibold text-white mb-8">
            Meet Our Instructors
          </h2>
          <div className="flex flex-wrap justify-center gap-12 md:py-6">
            {instructors.map((instructor, index) => (
              <InstructorCard key={index} instructor={instructor} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
