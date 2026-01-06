import { useRef, useEffect } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import birdScene from "../assets/3d/bird.glb";

const Bird = () => {
  const birdRef = useRef();
  const { scene, animations } = useGLTF(birdScene);
  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    if (!actions) return;

    const action = actions[Object.keys(actions)[0]];
    if (!action) return;

    action.play();
  }, [actions]);

  useFrame(({ clock, camera }, delta) => {
    const bird = birdRef.current;
    if (!bird) return;

    // Floating motion
    bird.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

    // Forward / backward movement
    if (bird.rotation.y === 0) {
      bird.position.x += delta * 2;
      bird.position.z -= delta * 2;
    } else {
      bird.position.x -= delta * 2;
      bird.position.z += delta * 2;
    }

    // Flip direction near camera bounds
    if (bird.position.x > camera.position.x + 10) {
      bird.rotation.y = Math.PI;
    } else if (bird.position.x < camera.position.x - 10) {
      bird.rotation.y = 0;
    }

    // Wing tilt (stable, no drift)
    const tilt = Math.sin(clock.elapsedTime * 2) * 0.2;
    bird.rotation.x = tilt;
    bird.rotation.z = -tilt;
  });

  return (
    <primitive
      ref={birdRef}
      object={scene}
      position={[-5, 2, 1]}
      scale={[0.003, 0.003, 0.003]}
      dispose={null}
    />
  );
};

useGLTF.preload(birdScene);
export default Bird;
