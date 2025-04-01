"use client";

import { Center, Text3D } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";

const Calligraphy = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5] }}
      className="touch-none overflow-hidden"
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} intensity={1} />
      <Suspense fallback={null}>
        <Center>
          <Text3D
            font="/fonts/NotoSansJP_ExtraBold_Regular.json"
            size={2}
            height={0.5}
            position={[0, 1.5, 0]}
            rotation={[0.2, 0.5, 0]}
          >
            空
            <meshStandardMaterial color="black" />
          </Text3D>

          <Text3D
            font="/fonts/NotoSansJP_ExtraBold_Regular.json"
            size={2}
            height={0.5}
            position={[0, -1.5, 0]}
            rotation={[0.2, 0.5, 0]}
          >
            手
            <meshStandardMaterial color="black" />
          </Text3D>
        </Center>
      </Suspense>
    </Canvas>
  );
};

export default Calligraphy;
