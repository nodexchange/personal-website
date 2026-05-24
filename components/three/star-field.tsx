"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useTheme } from "@/components/theme-provider";

interface StarFieldProps {
  count?: number;
  radius?: number;
}

const seededRandom = (seed: number) => {
  const value = Math.sin(seed * 12.9898) * 43758.5453;
  return value - Math.floor(value);
};

export function StarField({ count = 200, radius = 15 }: StarFieldProps) {
  const pointsRef = useRef<THREE.Points>(null);
  const { resolvedTheme } = useTheme();

  // In light mode, use subtle gray dots; in dark mode, white stars
  const starColor = resolvedTheme === "light" ? "#a0a0a0" : "#ffffff";
  const starOpacity = resolvedTheme === "light" ? 0.3 : 0.6;

  const { positions, sizes } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      // Distribute stars in a sphere, biased toward the back
      const theta = seededRandom(i * 4 + 1) * Math.PI * 2;
      const phi = Math.acos(2 * seededRandom(i * 4 + 2) - 1);
      const r = radius * (0.5 + seededRandom(i * 4 + 3) * 0.5);

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.6; // Flatten vertically
      positions[i * 3 + 2] = -Math.abs(r * Math.cos(phi)) - 2; // Push to back

      // Vary star sizes
      sizes[i] = seededRandom(i * 4 + 4) * 2 + 0.5;
    }

    return { positions, sizes };
  }, [count, radius]);

  // Subtle twinkling animation
  useFrame((state) => {
    if (!pointsRef.current) return;

    const time = state.clock.elapsedTime;
    const material = pointsRef.current.material as THREE.PointsMaterial;

    // Subtle opacity pulsing - use theme-aware base opacity
    const baseOpacity = resolvedTheme === "light" ? 0.3 : 0.6;
    material.opacity = baseOpacity + Math.sin(time * 0.5) * 0.1;
  });

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("size", new THREE.BufferAttribute(sizes, 1));
    return geo;
  }, [positions, sizes]);

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        color={starColor}
        size={0.05}
        transparent
        opacity={starOpacity}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}
