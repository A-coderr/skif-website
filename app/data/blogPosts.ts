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
    image: "/blogs/blog1_placeholder.jpg",
    date: "April 4, 2025",
    location: "Toronto, Canada",
    title: "Mastering the Basics of Karate",
    description:
      "Discover how mastering the fundamentals can lead to better results in both training and competitions.",
    slug: "mastering-the-basics-of-karate",
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
    ],
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
    ],
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
    ],
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
    ],
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
    ],
  },
  {
    id: 6,
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
