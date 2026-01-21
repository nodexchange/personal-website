"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import * as THREE from "three";

export function WireframeBoat() {
  const groupRef = useRef<THREE.Group>(null);
  const timeRef = useRef(0);

  // Hull geometry - classic ship shape with high stern
  const hullGeometry = useMemo(() => {
    const shape = new THREE.Shape();

    // Classic ship hull profile - high stern, pointed bow
    shape.moveTo(-2.2, 1.0);     // Stern top (raised high)
    shape.lineTo(-2.4, 0.6);     // Stern upper curve
    shape.quadraticCurveTo(-2.5, 0.2, -2.3, -0.4); // Stern mid curve
    shape.quadraticCurveTo(-2.1, -0.9, -1.6, -1.1); // Stern bottom curve
    shape.lineTo(1.8, -1.1);     // Bottom (flat keel)
    shape.quadraticCurveTo(2.6, -1.0, 3.0, -0.5);  // Bow bottom curve
    shape.quadraticCurveTo(3.3, -0.1, 3.4, 0.2);   // Bow point curve
    shape.lineTo(3.2, 0.3);      // Bow tip
    shape.lineTo(2.4, 0.1);      // Forward deck
    shape.lineTo(-1.0, 0.1);     // Main deck
    shape.lineTo(-1.8, 0.5);     // Stern deck rise
    shape.lineTo(-2.2, 1.0);     // Back to stern top

    const hull = new THREE.ExtrudeGeometry(shape, {
      steps: 1,
      depth: 1.4,
      bevelEnabled: false,
    });
    hull.center();
    hull.rotateX(Math.PI / 2);
    return hull;
  }, []);

  // Main deck geometry
  const deckGeometry = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(-1.0, -0.6);
    shape.lineTo(-1.0, 0.6);
    shape.lineTo(2.2, 0.6);
    shape.lineTo(2.6, 0);
    shape.lineTo(2.2, -0.6);
    shape.lineTo(-1.0, -0.6);

    const deck = new THREE.ShapeGeometry(shape);
    deck.rotateX(-Math.PI / 2);
    return deck;
  }, []);

  // Stern deck (poop deck) - raised platform
  const sternDeckGeometry = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(-2.0, -0.5);
    shape.lineTo(-2.0, 0.5);
    shape.lineTo(-1.0, 0.5);
    shape.lineTo(-1.0, -0.5);
    shape.lineTo(-2.0, -0.5);

    const deck = new THREE.ShapeGeometry(shape);
    deck.rotateX(-Math.PI / 2);
    return deck;
  }, []);

  // Stern cabin geometry (captain's quarters)
  const cabinGeometry = useMemo(() => {
    const geo = new THREE.BoxGeometry(0.9, 0.7, 0.8);
    return geo;
  }, []);

  // Mast points - two masts
  const mainMastPoints = useMemo(
    () => [
      [0.0, 0.1, 0],
      [0.0, 3.4, 0],
    ] as [number, number, number][],
    []
  );

  const foremastPoints = useMemo(
    () => [
      [1.6, 0.1, 0],
      [1.6, 2.8, 0],
    ] as [number, number, number][],
    []
  );

  // Bowsprit - angled forward from bow
  const bowspritPoints = useMemo(
    () => [
      [2.4, 0.2, 0],
      [3.8, 0.6, 0],
    ] as [number, number, number][],
    []
  );

  // Main sail (larger, rear mast) - gaff rigged style
  const mainSailPoints = useMemo(
    () => [
      [0.0, 1.0, 0],
      [0.0, 3.2, 0],
      [1.3, 2.4, 0.15],
      [1.3, 0.8, 0.15],
      [0.0, 1.0, 0],
    ] as [number, number, number][],
    []
  );

  const mainSailGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const vertices = new Float32Array([
      // Triangle 1
      0.0, 1.0, 0,
      0.0, 3.2, 0,
      1.3, 2.4, 0.15,
      // Triangle 2
      0.0, 1.0, 0,
      1.3, 2.4, 0.15,
      1.3, 0.8, 0.15,
    ]);
    geo.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
    geo.computeVertexNormals();
    return geo;
  }, []);

  // Fore sail (smaller, front mast)
  const foreSailPoints = useMemo(
    () => [
      [1.6, 0.8, 0],
      [1.6, 2.6, 0],
      [2.6, 2.0, 0.12],
      [2.6, 0.7, 0.12],
      [1.6, 0.8, 0],
    ] as [number, number, number][],
    []
  );

  const foreSailGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const vertices = new Float32Array([
      // Triangle 1
      1.6, 0.8, 0,
      1.6, 2.6, 0,
      2.6, 2.0, 0.12,
      // Triangle 2
      1.6, 0.8, 0,
      2.6, 2.0, 0.12,
      2.6, 0.7, 0.12,
    ]);
    geo.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
    geo.computeVertexNormals();
    return geo;
  }, []);

  // Jib sail (triangular, from foremast to bowsprit)
  const jibSailPoints = useMemo(
    () => [
      [1.6, 2.6, 0],
      [3.6, 0.6, 0],
      [1.6, 0.5, 0],
      [1.6, 2.6, 0],
    ] as [number, number, number][],
    []
  );

  const jibSailGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const vertices = new Float32Array([
      1.6, 2.6, 0,
      3.6, 0.6, 0,
      1.6, 0.5, 0,
    ]);
    geo.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
    geo.computeVertexNormals();
    return geo;
  }, []);

  // Rigging lines - stays and shrouds
  const backstayPoints = useMemo(
    () => [
      [-1.8, 0.6, 0],
      [0.0, 3.4, 0],
    ] as [number, number, number][],
    []
  );

  const forestayPoints = useMemo(
    () => [
      [0.0, 3.4, 0],
      [3.6, 0.6, 0],
    ] as [number, number, number][],
    []
  );

  const shroud1Points = useMemo(
    () => [
      [-0.6, 0.1, 0.6],
      [0.0, 2.8, 0],
    ] as [number, number, number][],
    []
  );

  const shroud2Points = useMemo(
    () => [
      [-0.6, 0.1, -0.6],
      [0.0, 2.8, 0],
    ] as [number, number, number][],
    []
  );

  // Yards (horizontal spars) - gaffs
  const mainGaffPoints = useMemo(
    () => [
      [0.0, 3.0, 0],
      [1.3, 2.4, 0.1],
    ] as [number, number, number][],
    []
  );

  const mainBoomPoints = useMemo(
    () => [
      [0.0, 1.0, 0],
      [1.3, 0.8, 0.1],
    ] as [number, number, number][],
    []
  );

  const foreGaffPoints = useMemo(
    () => [
      [1.6, 2.4, 0],
      [2.6, 2.0, 0.1],
    ] as [number, number, number][],
    []
  );

  // Floating animation
  useFrame((_, delta) => {
    if (!groupRef.current) return;

    timeRef.current += delta;
    const t = timeRef.current;

    // Gentle bobbing motion
    groupRef.current.position.y = Math.sin(t * 0.6) * 0.12;

    // Subtle rotation (like rocking on waves)
    groupRef.current.rotation.z = Math.sin(t * 0.5) * 0.04;
    groupRef.current.rotation.x = Math.sin(t * 0.35) * 0.025;

    // Very slow Y rotation
    groupRef.current.rotation.y = Math.sin(t * 0.15) * 0.08 + 0.4;
  });

  return (
    <group ref={groupRef} scale={0.55} position={[0, -0.2, 0]}>
      {/* Hull - wireframe */}
      <mesh geometry={hullGeometry}>
        <meshBasicMaterial
          color="#ffffff"
          wireframe
          transparent
          opacity={0.5}
        />
      </mesh>

      {/* Hull glow */}
      <mesh geometry={hullGeometry} scale={1.015}>
        <meshBasicMaterial
          color="#60a5fa"
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>

      {/* Main deck */}
      <mesh geometry={deckGeometry} position={[0, 0.12, 0]}>
        <meshBasicMaterial
          color="#ffffff"
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* Stern deck (poop deck) */}
      <mesh geometry={sternDeckGeometry} position={[0, 0.55, 0]}>
        <meshBasicMaterial
          color="#ffffff"
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* Stern cabin (captain's quarters) */}
      <mesh geometry={cabinGeometry} position={[-1.5, 0.95, 0]}>
        <meshBasicMaterial
          color="#ffffff"
          wireframe
          transparent
          opacity={0.4}
        />
      </mesh>

      {/* Main mast */}
      <Line
        points={mainMastPoints}
        color="#ffffff"
        lineWidth={2}
        transparent
        opacity={0.9}
      />

      {/* Foremast */}
      <Line
        points={foremastPoints}
        color="#ffffff"
        lineWidth={2}
        transparent
        opacity={0.9}
      />

      {/* Bowsprit */}
      <Line
        points={bowspritPoints}
        color="#ffffff"
        lineWidth={1.5}
        transparent
        opacity={0.8}
      />

      {/* Main sail - filled */}
      <mesh geometry={mainSailGeometry}>
        <meshBasicMaterial
          color="#ffffff"
          transparent
          opacity={0.12}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Main sail - outline */}
      <Line
        points={mainSailPoints}
        color="#ffffff"
        lineWidth={1}
        transparent
        opacity={0.7}
      />

      {/* Fore sail - filled */}
      <mesh geometry={foreSailGeometry}>
        <meshBasicMaterial
          color="#ffffff"
          transparent
          opacity={0.12}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Fore sail - outline */}
      <Line
        points={foreSailPoints}
        color="#ffffff"
        lineWidth={1}
        transparent
        opacity={0.7}
      />

      {/* Jib sail - filled */}
      <mesh geometry={jibSailGeometry}>
        <meshBasicMaterial
          color="#ffffff"
          transparent
          opacity={0.1}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Jib sail - outline */}
      <Line
        points={jibSailPoints}
        color="#ffffff"
        lineWidth={1}
        transparent
        opacity={0.6}
      />

      {/* Gaffs and booms */}
      <Line
        points={mainGaffPoints}
        color="#ffffff"
        lineWidth={1.5}
        transparent
        opacity={0.7}
      />
      <Line
        points={mainBoomPoints}
        color="#ffffff"
        lineWidth={1.5}
        transparent
        opacity={0.7}
      />
      <Line
        points={foreGaffPoints}
        color="#ffffff"
        lineWidth={1.5}
        transparent
        opacity={0.7}
      />

      {/* Rigging - stays */}
      <Line
        points={backstayPoints}
        color="#ffffff"
        lineWidth={0.5}
        transparent
        opacity={0.25}
      />
      <Line
        points={forestayPoints}
        color="#ffffff"
        lineWidth={0.5}
        transparent
        opacity={0.25}
      />

      {/* Shrouds */}
      <Line
        points={shroud1Points}
        color="#ffffff"
        lineWidth={0.5}
        transparent
        opacity={0.2}
      />
      <Line
        points={shroud2Points}
        color="#ffffff"
        lineWidth={0.5}
        transparent
        opacity={0.2}
      />
    </group>
  );
}
