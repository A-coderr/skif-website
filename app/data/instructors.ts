type Instructor = {
  name: string;
  title: string;
  bio: string;
  image: string;
};

export const instructors: Instructor[] = [
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
