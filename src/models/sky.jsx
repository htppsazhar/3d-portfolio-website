import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import skyScene from "../assets/3d/sky.glb";

export default function Sky() {
  const { scene } = useGLTF(skyScene);
  const skyRef = useRef(scene);

  useFrame((_, delta) => {
    // constant slow rotation (independent of island)
    skyRef.current.rotation.y += 0.05 * delta;
  });

  return (
    <primitive
      object={skyRef.current}
      dispose={null}
    />
  );
}
