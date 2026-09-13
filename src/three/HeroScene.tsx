import { useFrame, useThree, Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
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
          "radial-gradient(60% 50% at 65% 45%, rgba(200,67,74,0.09), transparent 70%), radial-gradient(40% 40% at 85% 70%, rgba(200,67,74,0.05), transparent 70%)",
      }}
    />
  );
}

/** Soft, controlled studio lighting for the metallic core — no environment map needed. */
function StudioLighting() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[4, 5, 3]} intensity={1.1} />
      <pointLight position={[-3, -2, 2]} intensity={12} color="#c8434a" />
    </>
  );
}

/** Nudges the camera slightly as the page scrolls — "scrolling changes camera position". */
function ScrollCamera() {
  const { camera } = useThree();
  const scrollRef = useRef(0);
  const baseY = camera.position.y;

  useEffect(() => {
    function onScroll() {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      scrollRef.current = max > 0 ? window.scrollY / max : 0;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useFrame(() => {
    const target = baseY - scrollRef.current * 1.4;
    camera.position.y += (target - camera.position.y) * 0.06;
    camera.lookAt(1.2, 0, 0);
  });

  return null;
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
          <StudioLighting />
          <CoreMesh />
          <ParticleField />
          <ScrollCamera />
        </Suspense>
      </Canvas>
      {/* Readability scrim: keeps headline/copy area on the left legible against the 3D scene. */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[var(--bg-0)] via-[var(--bg-0)]/60 to-transparent md:from-[var(--bg-0)] md:via-[var(--bg-0)]/35 md:to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--bg-0)]" />
    </div>
  );
}
