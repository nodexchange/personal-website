"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { useScrollTransform, usePrefersReducedMotion } from "@/hooks";

// Dynamically import the 3D scene to avoid SSR issues
const HeroScene = dynamic(
  () => import("@/components/three/hero-scene").then((mod) => mod.HeroScene),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-32 h-32 opacity-20" />
      </div>
    ),
  }
);

export function Hero() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const { translateY, opacity } = useScrollTransform({
    maxScroll: 500,
    maxTranslateY: 150,
    minOpacity: 0,
  });

  return (
    <section className="relative min-h-screen hero-gradient overflow-hidden">
      {/* 3D Scene: stacked above text on mobile, positioned on the right on desktop */}
      <div
        className="relative pointer-events-none h-[34vh] min-h-[220px] sm:h-[40vh] lg:absolute lg:inset-0 lg:h-auto"
        style={{
          willChange: prefersReducedMotion ? "auto" : "transform, opacity",
          transform: prefersReducedMotion
            ? "none"
            : `translateY(${translateY * 0.5}px)`,
          opacity: prefersReducedMotion ? 1 : Math.max(0.3, opacity),
        }}
      >
        <div className="relative mx-auto h-full w-[85%] lg:absolute lg:top-1/2 lg:right-0 lg:w-1/2 lg:h-[80vh] lg:-translate-y-1/2 lg:translate-x-[10%]">
          <HeroScene />
        </div>
      </div>

      {/* Animated content wrapper - translates DOWN as you scroll */}
      <div
        className="relative flex items-start lg:absolute lg:inset-0 lg:items-center"
        style={{
          willChange: prefersReducedMotion ? "auto" : "transform, opacity",
          transform: prefersReducedMotion
            ? "none"
            : `perspective(1200px) translateY(${translateY}px)`,
          opacity: prefersReducedMotion ? 1 : opacity,
        }}
      >
        <Container className="relative z-10 pt-8 sm:pt-10 lg:pt-24 pb-16">
          <div className="max-w-3xl">
            <h1 className="mb-4 text-[clamp(2.25rem,4vw+0.875rem,3.75rem)]">
              Building the{" "}
              <span className="text-primary">UI and platform</span>
              <br />
              systems behind global
              <br />
              finance.
            </h1>

            <p className="text-base text-muted-foreground mb-5 max-w-xl leading-relaxed">
              Hands-On Engineering Leadership &bull; UI Architecture &bull; Platform Engineering &bull; Global Teams
            </p>

            <p className="text-base text-muted-foreground mb-4 max-w-2xl">
              I&apos;m a hands-on engineering leader who actively codes and stays
              close to the work, from pull requests and solution design to
              technical direction and team growth. Today I lead multi-asset
              portfolio management systems at JPMorgan Chase, supporting $438B+
              in assets under management across global, high-volume platforms.
            </p>

            <p className="text-sm text-muted-foreground mb-6 max-w-2xl">
              Currently writing{" "}
              <Link
                href="/agentic-playbook"
                className="text-foreground underline underline-offset-4 hover:text-foreground/80"
              >
                The Agentic Playbook
              </Link>
              {` `}- a series on AI-assisted development and the future of engineering.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href="/agentic-playbook">Read the Playbook</Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link href="/book">Book a call</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/marcin-wojtala-resume.pdf" download>
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
