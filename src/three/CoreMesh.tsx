import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export function CoreMesh() {
  const groupRef = useRef<THREE.Group>(null);
  const { pointer } = useThree();

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.y = t * 0.15;
    groupRef.current.rotation.x = t * 0.08;

    // Gentle parallax toward the pointer.
    groupRef.current.rotation.y += pointer.x * 0.15;
    groupRef.current.rotation.x += -pointer.y * 0.1;
  });

  return (
    <group ref={groupRef} position={[2.6, 0, -1]}>
      <mesh>
        <icosahedronGeometry args={[1.6, 1]} />
        <meshBasicMaterial color="#ef3b4e" wireframe transparent opacity={0.5} />
      </mesh>
      <mesh scale={1.35}>
        <icosahedronGeometry args={[1.6, 0]} />
        <meshBasicMaterial color="#7a1c28" wireframe transparent opacity={0.22} />
      </mesh>
    </group>
  );
}
