export type Post = {
  id: number;
  image: string;
  date?: string;
  location?: string;
  title: string;
  description?: string;
  slug: string;
  gallery: string[];
};

export const posts: Post[] = [
  {
    id: 1,
    image:
      "/blogs/karate-canada-nationals-2025/karate-canada-nationals-2025-thumbnail.jpg",
    date: "April 3-6, 2025",
    location: "Richmond, Canada",
    title: "Karate Canada Nationals 2025",
    description: "SKIF Karate Canada at the Karate Canada Nationals 2025.",
    slug: "karate-canada-nationals-2025",
    gallery: [
      "/blogs/karate-canada-nationals-2025/i1.jpg",
      "/blogs/karate-canada-nationals-2025/i2.jpg",
      "/blogs/karate-canada-nationals-2025/i3.jpg",
      "/blogs/karate-canada-nationals-2025/i4.jpg",
      "/blogs/karate-canada-nationals-2025/i5.jpg",
      "/blogs/karate-canada-nationals-2025/i6.jpg",
      "/blogs/karate-canada-nationals-2025/i7.jpg",
      "/blogs/karate-canada-nationals-2025/i8.jpg",
      "/blogs/karate-canada-nationals-2025/i9.jpg",
      "/blogs/karate-canada-nationals-2025/i10.jpg",
      "/blogs/karate-canada-nationals-2025/i11.jpg",
      "/blogs/karate-canada-nationals-2025/i12.jpg",
    ],
  },
];
