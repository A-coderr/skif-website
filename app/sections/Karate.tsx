"use client";

import { Center, OrbitControls, Text3D } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Image from "next/image";
import React, { Suspense } from "react";

export const Karate = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto min-h-[70vh] flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 p-6">
          {/* Left Side: Text */}
          <div className="w-full md:w-1/2 text-left md:text-left space-y-6">
            <h1 className="text-5xl font-extrabold text-left text-gray-800 mb-12">
              What is Karate?
            </h1>
            <p className="text-md leading-relaxed text-gray-800 transition-all duration-500 hover:text-amber-700">
              The word <strong>karate</strong> is a combination of two Japanese
              characters: <strong>kara</strong>, meaning &quot;empty,&quot; and{" "}
              <strong>te</strong>, meaning &quot;hand&quot;; thus karate means
              &quot;empty hand.&quot; Adding the suffix <strong>-do</strong>,
              meaning &quot;way&quot; (<strong>karate-do</strong>), implies
              karate as a total way of life that goes well beyond self-defense
              applications. In traditional karate-do, we always keep in mind
              that the true opponent is oneself.
            </p>
            <p className="text-md leading-relaxed text-gray-800 transition-all duration-500 hover:text-amber-700">
              Karate is many things. It is an excellent and well-balanced form
              of exercise. It is a highly evolved means of self-defense. It is
              not merely a sport or form of exercise, although it does
              incorporate these elements. Karate is an art since the karateka
              must reach beyond just the mechanics of technique toward
              creativity in the application of skills in order to be proficient.
              Karate can also be a way of life. Most importantly, karate is a
              means of personal character development and improvement.
            </p>
            <p className="text-md leading-relaxed text-gray-800 transition-all duration-500 hover:text-amber-700">
              The practice of karate is divided into three elements:{" "}
              <strong>Kihon</strong> (basics), <strong>Kata</strong> (forms),
              and <strong>Kumite</strong> (sparring). However, these three
              elements should not be considered separate, as they constantly
              overlap and rely on each other.
            </p>
          </div>

          {/* Right Side: Image */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="relative overflow-hidden shadow-lg transition-all duration-500">
              <Image
                src="/hero.jpg"
                alt="Karate"
                width={500}
                height={500}
                className="object-fill"
              />
            </div>
            {/* <Canvas camera={{ position: [0, 0, 5] }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[2, 2, 2]} intensity={1} />
              <Suspense fallback={null}>
                <Center>
                  <Text3D
                    font="/fonts/helvetiker_regular.typeface.json"
                    size={1}
                  >
                    K A R A T E
                    <meshStandardMaterial color="red" />
                  </Text3D>
                </Center>
              </Suspense>
              <OrbitControls />
            </Canvas> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Karate;
