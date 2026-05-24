"use client";

import { Suspense, useState, useEffect, useSyncExternalStore } from "react";
import { Canvas } from "@react-three/fiber";
import { WireframeNetwork } from "./wireframe-network";
import { StarField } from "./star-field";
import { usePrefersReducedMotion } from "@/hooks";

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <StarField count={150} radius={12} />
      <WireframeNetwork />
    </>
  );
}

function StaticHeroFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center" aria-hidden>
      <div className="h-40 w-40 rounded-full border border-border/70 bg-gradient-to-b from-card to-background" />
    </div>
  );
}

const subscribeToMount = () => () => {};
const getMountedSnapshot = () => true;
const getServerSnapshot = () => false;

export function HeroScene() {
  const [isWebGLSupported, setIsWebGLSupported] = useState(true);
  const mounted = useSyncExternalStore(
    subscribeToMount,
    getMountedSnapshot,
    getServerSnapshot
  );
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      try {
        const canvas = document.createElement("canvas");
        const gl =
          canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
        if (!gl) {
          setIsWebGLSupported(false);
        }
      } catch {
        setIsWebGLSupported(false);
      }
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  if (!mounted || !isWebGLSupported || prefersReducedMotion) {
    return <StaticHeroFallback />;
  }

  return (
    <div className="absolute inset-0 opacity-80" aria-hidden>
      <Canvas
        camera={{
          position: [0, 0.5, 5],
          fov: 45,
          near: 0.1,
          far: 100,
        }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
