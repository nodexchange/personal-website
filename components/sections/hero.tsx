"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { useScrollTransform } from "@/hooks";

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
  const { translateY, opacity } = useScrollTransform({
    maxScroll: 500,
    maxTranslateY: 150,
    minOpacity: 0,
  });

  return (
    <section className="relative h-screen hero-gradient overflow-hidden">
      {/* 3D Scene - positioned on the right */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          willChange: "transform, opacity",
          transform: `translateY(${translateY * 0.5}px)`,
          opacity: Math.max(0.3, opacity),
        }}
      >
        <div className="absolute top-1/2 right-0 w-full lg:w-1/2 h-[80vh] -translate-y-1/2 lg:translate-x-[10%]">
          <HeroScene />
        </div>
      </div>

      {/* Animated content wrapper - translates DOWN as you scroll */}
      <div
        className="absolute inset-0 flex items-center"
        style={{
          willChange: "transform, opacity",
          transform: `perspective(1200px) translateY(${translateY}px)`,
          opacity,
        }}
      >
        <Container className="relative z-10 pt-24 pb-16">
          <div className="max-w-3xl">
            <h1 className="mb-4 text-[clamp(2.25rem,4vw+0.875rem,3.75rem)]">
              Architecting{" "}
              <span className="text-primary">high-performance</span>
              <br />
              platforms that scale
              <br />
              globally.
            </h1>

            <p className="text-base text-muted-foreground mb-5 max-w-xl leading-relaxed">
              Engineering Leadership &bull; Real-Time Systems &bull; Event-Driven Architecture &bull; Global Teams
            </p>

            <p className="text-base text-muted-foreground mb-4 max-w-2xl">
              Executive Director at JPMorgan Chase, building multi-asset portfolio
              management systems ($438B+ AUM) &mdash; from target allocation engines
              (SAA/TAA) and quant-driven research feeds to alpha screening, portfolio
              construction, and order execution. 15+ years delivering low-latency,
              high-throughput platforms across global teams.
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
                <Link href="#contact">Get in touch</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/martin-wojtala-resume.pdf" download>
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
