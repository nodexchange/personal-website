"use client";

import { cn } from "@/lib/utils";

interface NetworkLogoProps {
  className?: string;
  size?: number;
}

// Node positions (2D projection of octahedron)
const nodes = {
  hub: { x: 50, y: 50 },
  right: { x: 85, y: 50 },
  left: { x: 15, y: 50 },
  top: { x: 50, y: 18 },
  bottom: { x: 50, y: 82 },
  front: { x: 75, y: 28 },
  back: { x: 25, y: 72 },
};

// All connections: hub to all outer nodes + octahedral edges (each outer connects to 4 adjacent, not opposite)
const hubConnections = [
  [nodes.hub, nodes.right],
  [nodes.hub, nodes.left],
  [nodes.hub, nodes.top],
  [nodes.hub, nodes.bottom],
  [nodes.hub, nodes.front],
  [nodes.hub, nodes.back],
];

// Octahedral cross-connections (each outer node connects to 4 non-opposite neighbors)
// Opposite pairs: right-left, top-bottom, front-back
const outerConnections = [
  // Right connects to: top, bottom, front, back
  [nodes.right, nodes.top],
  [nodes.right, nodes.bottom],
  [nodes.right, nodes.front],
  [nodes.right, nodes.back],
  // Left connects to: top, bottom, front, back
  [nodes.left, nodes.top],
  [nodes.left, nodes.bottom],
  [nodes.left, nodes.front],
  [nodes.left, nodes.back],
  // Top connects to: front, back (right, left already covered)
  [nodes.top, nodes.front],
  [nodes.top, nodes.back],
  // Bottom connects to: front, back (right, left already covered)
  [nodes.bottom, nodes.front],
  [nodes.bottom, nodes.back],
];

export function NetworkLogo({ className, size = 32 }: NetworkLogoProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={cn("network-logo", className)}
      aria-hidden="true"
    >
      <style>
        {`
          .network-logo {
            --pulse-duration: 2.3s;
          }
          .network-logo .hub-glow {
            animation: hub-pulse var(--pulse-duration) ease-in-out infinite;
            transform-origin: center;
          }
          .network-logo .node-pulse {
            animation: node-pulse var(--pulse-duration) ease-in-out infinite;
            transform-origin: center;
          }
          .network-logo .edge-pulse {
            animation: edge-pulse var(--pulse-duration) ease-in-out infinite;
          }
          .network-logo .hub-core {
            animation: hub-core-pulse var(--pulse-duration) ease-in-out infinite;
            transform-origin: center;
          }
          @keyframes hub-pulse {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.7; transform: scale(1.15); }
          }
          @keyframes hub-core-pulse {
            0%, 100% { opacity: 0.85; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.1); }
          }
          @keyframes node-pulse {
            0%, 100% { opacity: 0.5; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.2); }
          }
          @keyframes edge-pulse {
            0%, 100% { opacity: 0.15; }
            50% { opacity: 0.5; }
          }
        `}
      </style>

      {/* Definitions for glow effect */}
      <defs>
        <filter id="logo-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Blue glow layer for hub connections */}
      <g stroke="#3b82f6" strokeWidth="1.5" className="edge-pulse" filter="url(#logo-glow)">
        {hubConnections.map(([from, to], i) => (
          <line key={`hub-glow-${i}`} x1={from.x} y1={from.y} x2={to.x} y2={to.y} />
        ))}
      </g>

      {/* Main connections (currentColor for theme support) */}
      <g stroke="currentColor" strokeWidth="0.75" opacity="0.5">
        {/* Hub connections */}
        {hubConnections.map(([from, to], i) => (
          <line key={`hub-${i}`} x1={from.x} y1={from.y} x2={to.x} y2={to.y} />
        ))}
        {/* Outer octahedral connections */}
        {outerConnections.map(([from, to], i) => (
          <line key={`outer-${i}`} x1={from.x} y1={from.y} x2={to.x} y2={to.y} />
        ))}
      </g>

      {/* Outer nodes with staggered pulse animations */}
      <g fill="currentColor">
        <circle cx={nodes.right.x} cy={nodes.right.y} r="4" className="node-pulse" style={{ animationDelay: "0s" }} />
        <circle cx={nodes.left.x} cy={nodes.left.y} r="4" className="node-pulse" style={{ animationDelay: "0.38s" }} />
        <circle cx={nodes.top.x} cy={nodes.top.y} r="3.5" className="node-pulse" style={{ animationDelay: "0.76s" }} />
        <circle cx={nodes.bottom.x} cy={nodes.bottom.y} r="3.5" className="node-pulse" style={{ animationDelay: "1.15s" }} />
        <circle cx={nodes.front.x} cy={nodes.front.y} r="3" className="node-pulse" style={{ animationDelay: "1.53s" }} />
        <circle cx={nodes.back.x} cy={nodes.back.y} r="3" className="node-pulse" style={{ animationDelay: "1.91s" }} />
      </g>

      {/* Central hub node */}
      <circle cx={nodes.hub.x} cy={nodes.hub.y} r="6" fill="currentColor" className="hub-core" />
      <circle
        cx={nodes.hub.x}
        cy={nodes.hub.y}
        r="8"
        fill="none"
        stroke="#3b82f6"
        strokeWidth="1.5"
        className="hub-glow"
      />
    </svg>
  );
}
