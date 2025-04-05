import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const blogPosts = [
  {
    id: 1,
    image: "/blogs/blog1_placeholder.jpg",
    date: "April 4, 2025",
    location: "Toronto, Canada",
    title: "Mastering the Basics of Karate",
    description:
      "Discover how mastering the fundamentals can lead to better results in both training and competitions.",
    slug: "mastering-the-basics-of-karate",
  },
  {
    id: 2,
    image: "/blogs/blog2_placeholder.jpg",
    date: "March 25, 2025",
    location: "Vancouver, Canada",
    title: "The Belt Journey Explained",
    description:
      "Learn about the meaning behind each karate belt and what it takes to move up the ranks.",
    slug: "belt-journey-explained",
  },
  {
    id: 3,
    image: "/blogs/blog3_placeholder.jpg",
    date: "March 10, 2025",
    location: "Calgary, Canada",
    title: "Training Techniques for Beginners",
    description:
      "Start your karate journey with these essential techniques and mindset tips.",
    slug: "training-techniques-for-beginners",
  },
  {
    id: 4,
    image: "/blogs/blog2_placeholder.jpg",
    date: "February 28, 2025",
    location: "Montreal, Canada",
    title: "Karate Sparring Tips",
    description:
      "Enhance your sparring skills with these expert tips and strategies.",
    slug: "karate-sparring-tips",
  },
  {
    id: 5,
    image: "/blogs/blog1_placeholder.jpg",
    date: "February 15, 2025",
    location: "Ottawa, Canada",
    title: "The Importance of Kata in Karate",
    description:
      "Understand the significance of kata in karate training and its role in competitions.",
    slug: "importance-of-kata-in-karate",
  },
];

export default function BlogGallery() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-6">
      <motion.h1
        className="mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800"
        initial={{ opacity: 0, y: -20 }} //Initial position and opacity
        animate={{ opacity: 1, y: 0 }} //Final position and opacity
        transition={{ duration: 0.6 }} //Animation duration
      >
        Latest Blog Posts
      </motion.h1>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.id}
            className="bg-white shadow-md overflow-hidden transition-transform hover:scale-102"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="relative w-full h-48">
              <Image
                src={post.image}
                alt={post.title}
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-500 mb-1">
                {post.date} | {post.location}
              </p>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4">{post.description}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-[#B71C1C] font-medium hover:underline"
              >
                Read more →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
