"use client";

import Contact from "../sections/Contact";
import Banner from "../components/Banner";

export default function ContactPage() {
  return (
    <>
      <Banner imageUrl="/karate.jpg" title="Contact Us" page="Contact" />
      <Contact />
    </>
  );
}
