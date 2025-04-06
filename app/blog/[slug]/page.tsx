// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import blogPosts from "../../data/blogPosts";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) return notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-2">
        {post.date} | {post.location}
      </p>
      <Image
        src={post.image}
        alt={post.title}
        width={1000}
        height={500}
        className="rounded-lg mb-6"
      />
      <div className="text-lg text-gray-700 leading-relaxed">
        <p>{post.content}</p>
      </div>
    </div>
  );
}
