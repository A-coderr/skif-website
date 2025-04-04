import Image from "next/image";

type Instructor = {
  name: string;
  title: string;
  bio: string;
  image: string;
};

const instructors: Instructor[] = [
  {
    name: "Sensei John Doe",
    title: "Head Instructor",
    bio: `Sensei John began his martial arts journey over two decades ago in a small dojo in Kyoto. His passion for traditional karate and dedication to discipline has shaped the philosophy of our dojo. John's approach balances intense physical training with a strong emphasis on respect, mindfulness, and perseverance. His classes challenge students to push their limits while fostering a deep appreciation for the art of karate.`,
    image: "/instructors/instructor2_placeholder.jpg",
  },
  {
    name: "Sensei Jane Smith",
    title: "Assistant Instructor",
    bio: `Sensei Jane joined our dojo with a mission to inspire young martial artists. She quickly became a mentor to students of all levels through her encouraging teaching style and deep technical knowledge. Jane's focus on fundamentals and building strong foundations has helped many students gain confidence both inside and outside the dojo. Her presence is a cornerstone of our beginner and youth programs.`,
    image: "/instructors/instructor3_placeholder.jpg",
  },
  {
    name: "Sensei Mike Lee",
    title: "Competition Coach",
    bio: `A former national competitor, Sensei Mike brings a high-performance edge to our advanced training. With a sharp eye for technique and a strategic mindset, Mike has helped prepare students for regional and national tournaments. His sessions are intense and rewarding, blending modern sport karate with traditional values. Mike’s mentorship continues to shape the next generation of champions.`,
    image: "/instructors/instructor1_placeholder.jpg",
  },
];

export default function Instructors() {
  return (
    <section className="w-full px-6 pt-6 pb-16 max-w-7xl mx-auto">
      <h1 className="mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800">
        Meet Our Instructors
      </h1>

      <div className="space-y-24">
        {instructors.map((instructor, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <div
              key={idx}
              className={`flex flex-col md:flex-row ${
                isEven ? "" : "md:flex-row-reverse"
              } gap-12 items-center`}
            >
              <div className="w-full md:w-1/2">
                <Image
                  src={instructor.image}
                  alt={instructor.name}
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover shadow-lg"
                />
              </div>
              <div className="w-full md:w-1/2 text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {instructor.name}
                </h3>
                <p className="text-gray-600 font-medium mb-4">
                  {instructor.title}
                </p>
                <p className="text-gray-700 leading-relaxed text-base whitespace-pre-line">
                  {instructor.bio}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
