import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, Stars, OrbitControls } from "@react-three/drei";
import Escudo from "./Escudo";

export default () => {
  return (
    <Suspense
      fallback={
        <p className="fixed inset-0 z-[9999] text-red-600 text-2xl">
          ...loading...
        </p>
      }
    >
      <Canvas>
        <ambientLight intensity={5} />
        <OrbitControls autoRotate autoRotateSpeed={0.05} makeDefault />
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={2}
        />
        <group position={[0, -1, 2]}>
          <Escudo />
        </group>
      </Canvas>
    </Suspense>
  );
};
