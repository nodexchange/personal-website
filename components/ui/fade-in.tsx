"use client";

import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";
import { usePrefersReducedMotion } from "@/hooks";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
}

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.6,
}: FadeInProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [ref, isInView] = useInView<HTMLDivElement>({
    threshold: 0.1,
    rootMargin: "-50px",
    triggerOnce: true,
  });

  const directionStyles = {
    up: "translate-y-8",
    down: "-translate-y-8",
    left: "translate-x-8",
    right: "-translate-x-8",
    none: "",
  };

  return (
    <div
      ref={ref}
      className={cn(
        prefersReducedMotion ? "" : "transition-all ease-out",
        prefersReducedMotion || isInView
          ? "opacity-100 translate-x-0 translate-y-0"
          : `opacity-0 ${directionStyles[direction]}`,
        className
      )}
      style={{
        transitionDuration: prefersReducedMotion ? "0s" : `${duration}s`,
        transitionDelay: prefersReducedMotion ? "0s" : `${delay}s`,
        willChange: prefersReducedMotion ? "auto" : "transform, opacity",
      }}
    >
      {children}
    </div>
  );
}
