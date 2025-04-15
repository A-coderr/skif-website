"use client";

import Slider from "react-slick";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonials } from "../data/testimonials";
import Gallery from "../components/Gallery";

export default function TestimonialsSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section className="relative bg-[#fff] overflow-hidden px-6 py-24 lg:py-32">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl px-6 mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16"
      >
        {/* Left: Testimonials */}
        <div className="text-center lg:text-left flex flex-col items-center lg:items-start justify-center relative">
          {/* Large background quote */}
          <Quote
            className="absolute top-0 left-1/2 lg:left-0 transform -translate-x-1/2 lg:-translate-x-1/4 text-gray-400 opacity-20 z-0"
            size={180}
          />
          <div className="text-center relative z-10 pb-8 mx-auto">
            <p className="text-md text-center uppercase text-[#B71C1C] tracking-widest mb-6">
              Testimonials
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-6">
              What Our Students Say
            </h2>
            <p className="text-center text-gray-600 text-md mb-8 mx-auto">
              Hear from our students and parents about their journey with us.
            </p>
          </div>

          {/* Carousel */}
          <div className="text-center max-w-xl mx-auto lg:mx-0 w-full">
            <Slider {...settings}>
              {testimonials.map((t, idx) => (
                <div key={idx} className="px-2">
                  <p className="text-xl md:text-2xl text-gray-800 font-light italic leading-relaxed mb-6">
                    “{t.quote}”
                  </p>
                  <p className="font-semibold text-[#B71C1C]">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <Gallery />
      </motion.div>
    </section>
  );
}
