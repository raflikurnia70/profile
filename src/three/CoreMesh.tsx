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
        <icosahedronGeometry args={[1.5, 1]} />
        <meshBasicMaterial color="#d63a4a" wireframe transparent opacity={0.28} />
      </mesh>
      <mesh scale={1.5}>
        <icosahedronGeometry args={[1.5, 0]} />
        <meshBasicMaterial color="#5a5a62" wireframe transparent opacity={0.12} />
      </mesh>
    </group>
  );
}
