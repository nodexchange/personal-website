"use client";

import { cn } from "@/lib/utils";

interface NetworkLogoProps {
  className?: string;
  size?: number;
}

export function NetworkLogo({ className, size = 32 }: NetworkLogoProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={cn("animate-spin-slow", className)}
      aria-hidden="true"
    >
      {/* Definitions for glow effect */}
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer connections (blue glow layer) */}
      <g stroke="#60a5fa" strokeWidth="1.5" opacity="0.3" filter="url(#glow)">
        {/* Hub to outer nodes */}
        <line x1="50" y1="50" x2="85" y2="50" />
        <line x1="50" y1="50" x2="15" y2="50" />
        <line x1="50" y1="50" x2="50" y2="18" />
        <line x1="50" y1="50" x2="50" y2="82" />
        <line x1="50" y1="50" x2="75" y2="28" />
        <line x1="50" y1="50" x2="25" y2="72" />
      </g>

      {/* Main connections (white) */}
      <g stroke="currentColor" strokeWidth="1" opacity="0.6">
        {/* Hub to outer nodes */}
        <line x1="50" y1="50" x2="85" y2="50" />
        <line x1="50" y1="50" x2="15" y2="50" />
        <line x1="50" y1="50" x2="50" y2="18" />
        <line x1="50" y1="50" x2="50" y2="82" />
        <line x1="50" y1="50" x2="75" y2="28" />
        <line x1="50" y1="50" x2="25" y2="72" />

        {/* Cross-connections between outer nodes */}
        <line x1="85" y1="50" x2="50" y2="18" />
        <line x1="85" y1="50" x2="75" y2="28" />
        <line x1="15" y1="50" x2="50" y2="82" />
        <line x1="15" y1="50" x2="25" y2="72" />
        <line x1="50" y1="18" x2="75" y2="28" />
        <line x1="50" y1="82" x2="25" y2="72" />
      </g>

      {/* Outer nodes */}
      <g fill="currentColor">
        {/* Right */}
        <circle cx="85" cy="50" r="4" opacity="0.8" />
        {/* Left */}
        <circle cx="15" cy="50" r="4" opacity="0.8" />
        {/* Top */}
        <circle cx="50" cy="18" r="3.5" opacity="0.7" />
        {/* Bottom */}
        <circle cx="50" cy="82" r="3.5" opacity="0.7" />
        {/* Front-ish */}
        <circle cx="75" cy="28" r="3" opacity="0.6" />
        {/* Back-ish */}
        <circle cx="25" cy="72" r="3" opacity="0.6" />
      </g>

      {/* Central hub node */}
      <circle cx="50" cy="50" r="6" fill="currentColor" opacity="0.9" />
      <circle
        cx="50"
        cy="50"
        r="8"
        fill="none"
        stroke="#60a5fa"
        strokeWidth="1.5"
        opacity="0.4"
      />
    </svg>
  );
}
