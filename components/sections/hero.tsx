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
        <Container className="relative z-10 py-32">
          <div className="max-w-3xl">
            <p className="text-primary font-medium mb-4 tracking-wide">
              Engineering Leadership
            </p>

            <h1 className="mb-6">
              Building high-performing
              <br />
              global teams with a
              <br />
              <span className="text-primary">quality-first</span> culture.
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
              Quality Architect &bull; Global Teams &bull; Innovation Catalyst
            </p>

            <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
              Executive Director at JP Morgan Chase, leading UI Engineering and
              Test & Automation across North America, EMEA, and APAC. 15+ years
              driving engineering excellence at scale.
            </p>

            <p className="text-sm text-muted-foreground mb-10 max-w-2xl">
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
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
