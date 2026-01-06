import { useEffect, useRef } from 'react';
import { useAnimations, useGLTF } from '@react-three/drei';
import planeScene from '../assets/3d/plane.glb';

const Plane = ({ isRotating, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (!actions) return;

    const action = actions[Object.keys(actions)[0]];
    if (!action) return;

    isRotating ? action.play() : action.stop();
  }, [actions, isRotating]);

  return (
    <mesh ref={ref} {...props}>
      <primitive object={scene} dispose={null} />
    </mesh>
  );
};

export default Plane;
