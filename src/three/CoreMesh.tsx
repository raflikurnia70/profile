import { Line } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const CORE_POSITION: [number, number, number] = [2.6, 0, -1];
const CORE_RADIUS = 1.5;

/** A handful of thin lines connecting points on the core's shell — "connected systems". */
function DataLines() {
  const lines = useMemo(() => {
    const pts: [THREE.Vector3, THREE.Vector3][] = [];
    const rand = () => new THREE.Vector3().randomDirection().multiplyScalar(CORE_RADIUS * 1.9);
    for (let i = 0; i < 7; i++) {
      pts.push([rand(), rand()]);
    }
    return pts;
  }, []);

  return (
    <>
      {lines.map((pair, i) => (
        <Line key={i} points={pair} color="#c8434a" transparent opacity={0.16} lineWidth={1} />
      ))}
    </>
  );
}

/**
 * "Industrial Intelligence Core" — a precision faceted core (matte metallic,
 * unlit-safe fallback via a thin wireframe shell) surrounded by sparse data
 * lines. Slow rotation + gentle float + subtle pointer parallax.
 */
export function CoreMesh() {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const { pointer } = useThree();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.position.y = CORE_POSITION[1] + Math.sin(t * 0.35) * 0.12;
      // Gentle parallax toward the pointer, layered on top of the base rotation.
      groupRef.current.rotation.y = t * 0.12 + pointer.x * 0.15;
      groupRef.current.rotation.x = t * 0.06 + -pointer.y * 0.1;
    }
    if (coreRef.current) {
      coreRef.current.rotation.y = -t * 0.05;
    }
  });

  return (
    <group ref={groupRef} position={CORE_POSITION}>
      {/* Solid faceted core — matte metallic, catches the key/rim lights */}
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[CORE_RADIUS * 0.62, 0]} />
        <meshStandardMaterial color="#3a3a40" metalness={0.85} roughness={0.32} flatShading />
      </mesh>

      {/* Thin precision shell — outer wireframe reads as the housing/lattice */}
      <mesh>
        <icosahedronGeometry args={[CORE_RADIUS, 1]} />
        <meshBasicMaterial color="#c8434a" wireframe transparent opacity={0.24} />
      </mesh>
      <mesh scale={1.5}>
        <icosahedronGeometry args={[CORE_RADIUS, 0]} />
        <meshBasicMaterial color="#5a5a62" wireframe transparent opacity={0.1} />
      </mesh>

      <DataLines />
    </group>
  );
}
