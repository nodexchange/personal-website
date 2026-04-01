"use client";

import { useState, useEffect, useCallback } from "react";
import { usePrefersReducedMotion } from "./use-prefers-reduced-motion";

interface ScrollTransformOptions {
  /** Maximum scroll distance to track (in pixels) */
  maxScroll?: number;
  /** Maximum translateY value (in pixels) */
  maxTranslateY?: number;
  /** Minimum opacity value */
  minOpacity?: number;
}

interface ScrollTransformValues {
  translateY: number;
  opacity: number;
  scale: number;
  progress: number;
}

export function useScrollTransform(
  options: ScrollTransformOptions = {}
): ScrollTransformValues {
  const {
    maxScroll = 600,
    maxTranslateY = -100,
    minOpacity = 0.3,
  } = options;

  const [values, setValues] = useState<ScrollTransformValues>({
    translateY: 0,
    opacity: 1,
    scale: 1,
    progress: 0,
  });
  const prefersReducedMotion = usePrefersReducedMotion();

  const handleScroll = useCallback(() => {
    if (prefersReducedMotion) {
      setValues({
        translateY: 0,
        opacity: 1,
        scale: 1,
        progress: 0,
      });
      return;
    }

    const scrollY = window.scrollY;
    const progress = Math.min(scrollY / maxScroll, 1);

    setValues({
      translateY: progress * maxTranslateY,
      opacity: 1 - progress * (1 - minOpacity),
      scale: 1 - progress * 0.05,
      progress,
    });
  }, [maxScroll, maxTranslateY, minOpacity, prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) {
      setValues({
        translateY: 0,
        opacity: 1,
        scale: 1,
        progress: 0,
      });
      return;
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll, prefersReducedMotion]);

  return values;
}
