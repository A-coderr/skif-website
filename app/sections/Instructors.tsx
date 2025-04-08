import Image from "next/image";
import { motion } from "framer-motion";
import { instructors } from "../data/instructors";
import Title from "../components/Title";

export default function Instructors() {
  return (
    <section className="w-full px-6 pt-6 pb-16 max-w-7xl mx-auto">
      <Title text="Meet Our Instructors" />

      <div className="space-y-24">
        {instructors.map((instructor, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className={`flex flex-col md:flex-row ${
                isEven ? "" : "md:flex-row-reverse"
              } gap-12 items-center`}
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-full md:w-1/2"
              >
                <Image
                  src={instructor.image}
                  alt={instructor.name}
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover shadow-lg"
                />
              </motion.div>
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
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
