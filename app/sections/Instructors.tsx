import Image from "next/image";
import { motion } from "framer-motion";
import { instructors } from "../data/instructors";

/**
 * Renders the Instructors section, displaying a list of instructors with
 * their names, titles, bios, and images. The section is styled with a
 * background and text color, and includes animation effects for a smooth
 * appearance.
 *
 * @returns {JSX.Element} A section element containing instructor information.
 */
export default function Instructors() {
  return (
    <section className="w-full px-6 pt-6 pb-16 max-w-7xl mx-auto">
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
              <div className="w-full md:w-1/2 flex justify-center relative">
                {/* Red Square Background */}
                <motion.div
                  initial={{ opacity: 0.6, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 0.6, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  className="absolute top-15 left-2 w-[80%] h-[90%] bg-[#B71C1C] z-0"
                />

                {/* Instructor Image */}
                <motion.div
                  initial={{ opacity: 1, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.3 }}
                  viewport={{ once: true }}
                  className="relative z-10 w-full md:w-2/3"
                >
                  <Image
                    src={instructor.image}
                    alt={instructor.name}
                    width={500}
                    height={250}
                    className="w-full h-auto object-cover shadow-lg"
                  />
                </motion.div>
              </div>

              {/* Instructor Text */}
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
