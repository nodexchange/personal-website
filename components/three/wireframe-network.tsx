"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import * as THREE from "three";

interface NodeData {
  id: number;
  position: THREE.Vector3;
  connections: number[];
  size: number;
  pulseOffset: number;
  isHub: boolean;
}

function generateNetwork(): NodeData[] {
  const nodes: NodeData[] = [];

  // Central hub node
  nodes.push({
    id: 0,
    position: new THREE.Vector3(0, 0, 0),
    connections: [],
    size: 0.15,
    pulseOffset: 0,
    isHub: true,
  });

  // 6 surrounding nodes in an octahedral arrangement (symmetrical)
  const radius = 1.4;
  const surroundingNodes: { pos: [number, number, number]; size: number }[] = [
    { pos: [radius, 0, 0], size: 0.09 },       // Right
    { pos: [-radius, 0, 0], size: 0.09 },      // Left
    { pos: [0, radius * 0.8, 0], size: 0.08 }, // Top
    { pos: [0, -radius * 0.8, 0], size: 0.08 }, // Bottom
    { pos: [0, 0, radius], size: 0.07 },       // Front
    { pos: [0, 0, -radius], size: 0.07 },      // Back
  ];

  surroundingNodes.forEach((n, i) => {
    nodes.push({
      id: nodes.length,
      position: new THREE.Vector3(...n.pos),
      connections: [0], // All connect to hub
      size: n.size,
      pulseOffset: (i * Math.PI) / 3.5,
      isHub: false,
    });
  });

  // Add symmetrical cross-connections between outer nodes
  nodes[1].connections.push(3, 5); // Right connects to Top and Front
  nodes[2].connections.push(4, 6); // Left connects to Bottom and Back
  nodes[3].connections.push(5);    // Top connects to Front
  nodes[4].connections.push(6);    // Bottom connects to Back

  return nodes;
}

function NodeSphere({ node }: { node: NodeData }) {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const pulseScale = 1 + Math.sin(t * 2 + node.pulseOffset) * 0.15;
    const glowOpacity = 0.3 + Math.sin(t * 1.5 + node.pulseOffset) * 0.15;

    if (coreRef.current) {
      coreRef.current.scale.setScalar(node.size * pulseScale);
    }
    if (innerRef.current) {
      innerRef.current.scale.setScalar(node.size * pulseScale * 0.7);
    }
    if (glowRef.current) {
      glowRef.current.scale.setScalar(node.size * pulseScale * 1.4);
      (glowRef.current.material as THREE.MeshBasicMaterial).opacity =
        glowOpacity * 0.4;
    }
  });

  return (
    <group ref={groupRef} position={node.position}>
      {/* Core sphere */}
      <mesh ref={coreRef} scale={node.size}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial
          color="#ffffff"
          wireframe
          transparent
          opacity={node.isHub ? 0.9 : 0.7}
        />
      </mesh>

      {/* Inner glow */}
      <mesh ref={innerRef} scale={node.size * 0.7}>
        <icosahedronGeometry args={[1, 0]} />
        <meshBasicMaterial
          color="#ffffff"
          transparent
          opacity={node.isHub ? 0.4 : 0.2}
        />
      </mesh>

      {/* Outer glow for hub and some nodes */}
      {(node.isHub || node.size > 0.06) && (
        <mesh ref={glowRef} scale={node.size * 1.4}>
          <icosahedronGeometry args={[1, 1]} />
          <meshBasicMaterial
            color="#60a5fa"
            wireframe
            transparent
            opacity={0.12}
          />
        </mesh>
      )}
    </group>
  );
}

export function WireframeNetwork() {
  const groupRef = useRef<THREE.Group>(null);

  // Generate network structure once
  const nodes = useMemo(() => generateNetwork(), []);

  // Pre-compute all edge pairs
  const edges = useMemo(() => {
    const edgeList: [THREE.Vector3, THREE.Vector3, number][] = [];

    nodes.forEach((node) => {
      node.connections.forEach((targetId) => {
        const target = nodes[targetId];
        if (target) {
          // Calculate opacity based on node sizes
          const opacity = Math.min(node.size, target.size) * 8;
          edgeList.push([node.position, target.position, opacity]);
        }
      });
    });

    return edgeList;
  }, [nodes]);

  // Animation for the whole group
  useFrame((state) => {
    if (!groupRef.current) return;

    const t = state.clock.elapsedTime;

    // Gentle floating motion
    groupRef.current.position.y = Math.sin(t * 0.4) * 0.08;

    // Slow continuous rotation (30% slower)
    groupRef.current.rotation.y = t * 0.056;

    // Subtle tilt oscillation
    groupRef.current.rotation.x = Math.sin(t * 0.25) * 0.05;
    groupRef.current.rotation.z = Math.sin(t * 0.3) * 0.03;
  });

  return (
    <group ref={groupRef} scale={0.85} position={[0, 0, 0]}>
      {/* Edges/connections */}
      {edges.map((edge, i) => (
        <Line
          key={i}
          points={[
            [edge[0].x, edge[0].y, edge[0].z],
            [edge[1].x, edge[1].y, edge[1].z],
          ]}
          color="#ffffff"
          lineWidth={1}
          transparent
          opacity={Math.min(edge[2], 0.5)}
        />
      ))}

      {/* Blue glow edges for hub connections */}
      {edges.slice(0, 6).map((edge, i) => (
        <Line
          key={`glow-${i}`}
          points={[
            [edge[0].x, edge[0].y, edge[0].z],
            [edge[1].x, edge[1].y, edge[1].z],
          ]}
          color="#60a5fa"
          lineWidth={2}
          transparent
          opacity={0.15}
        />
      ))}

      {/* Nodes */}
      {nodes.map((node) => (
        <NodeSphere key={node.id} node={node} />
      ))}
    </group>
  );
}
