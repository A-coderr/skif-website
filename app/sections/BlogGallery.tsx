import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { posts as blogPosts } from "../data/blogPosts";

export default function BlogGallery() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-6">
      <motion.h1
        className="mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800"
        initial={{ opacity: 0, y: -20 }} //Initial position and opacity.
        animate={{ opacity: 1, y: 0 }} //Final position and opacity.
        transition={{ duration: 0.6 }} //Animation duration.
      >
        Latest Blog Posts
      </motion.h1>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {[...blogPosts].reverse().map((post, index) => (
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
