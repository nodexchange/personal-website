"use client";

import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { WireframeNetwork } from "./wireframe-network";
import { StarField } from "./star-field";

function Scene() {
  return (
    <>
      {/* Ambient lighting */}
      <ambientLight intensity={0.5} />

      {/* Stars in the background */}
      <StarField count={150} radius={12} />

      {/* The network */}
      <WireframeNetwork />
    </>
  );
}

export function HeroScene() {
  const [isWebGLSupported, setIsWebGLSupported] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Check WebGL support
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
  }, []);

  // Don't render anything on server
  if (!mounted) {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-32 h-32 opacity-20" />
      </div>
    );
  }

  // Fallback for devices without WebGL
  if (!isWebGLSupported) {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-muted-foreground/30 text-6xl">🔗</div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 opacity-80">
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
