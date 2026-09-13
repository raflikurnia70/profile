import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { isWebGLAvailable } from "../lib/webgl";
import { CoreMesh } from "./CoreMesh";
import { ParticleField } from "./ParticleField";

/** Static gradient used when WebGL is unavailable or motion is reduced. */
function StaticFallback() {
  return (
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(60% 50% at 50% 40%, rgba(239,59,78,0.18), transparent 70%), radial-gradient(40% 40% at 80% 70%, rgba(239,59,78,0.08), transparent 70%)",
      }}
    />
  );
}

export function HeroScene() {
  const [supported, setSupported] = useState(true);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    setSupported(isWebGLAvailable());
  }, []);

  if (!supported || reducedMotion) {
    return <StaticFallback />;
  }

  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <pointLight position={[5, 5, 5]} intensity={40} color="#ff5468" />
          <CoreMesh />
          <ParticleField />
        </Suspense>
      </Canvas>
      {/* Readability scrim: keeps headline/copy area on the left legible against the 3D scene. */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[var(--bg-0)] via-[var(--bg-0)]/60 to-transparent md:from-[var(--bg-0)] md:via-[var(--bg-0)]/35 md:to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--bg-0)]" />
    </div>
  );
}
