import Image from "next/image";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/ui/fade-in";
import { ExpertiseTags } from "@/components/ui/expertise-tags";

const highlights = [
  {
    stat: "15+",
    label: "Years in Engineering Leadership",
  },
  {
    stat: "4",
    label: "Continents Managed",
  },
  {
    stat: "2B+",
    label: "Daily Transactions Supported",
  },
  {
    stat: "200%",
    label: "Team Growth in 12 Months",
  },
];


export function About() {
  return (
    <section id="about" className="section-padding relative z-10 bg-background">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <FadeIn>
              <p className="text-primary font-medium mb-4 tracking-wide">
                About
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="mb-6">
                Technical depth meets
                <br />
                business acumen.
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  UK-based engineering leader who blends creative thinking with
                  deep technical expertise. I bridge the gap between technical
                  execution and business outcomes through engineering excellence,
                  quality-first practices, and servant leadership.
                </p>

                <p>
                  My unique value comes from combining hands-on engineering
                  expertise with investment and financial markets knowledge,
                  creative industries management background, and deep
                  specialisation in DevSecOps and quality engineering.
                </p>

                <p>
                  I specialise in chaos engineering, contract testing, and
                  performance testing&mdash;areas where most engineering leaders
                  lack depth. This enables me to build organisations where quality
                  is everyone&apos;s responsibility, not an afterthought.
                </p>
              </div>
            </FadeIn>

            {/* Expertise tags */}
            <FadeIn delay={0.25}>
              <div className="mt-8">
                <ExpertiseTags />
              </div>
            </FadeIn>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-6 mt-10">
              {highlights.map((item, index) => (
                <FadeIn key={item.label} delay={0.3 + index * 0.1}>
                  <div>
                    <p className="text-3xl font-bold text-primary mb-1">
                      {item.stat}
                    </p>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Photo */}
          <FadeIn delay={0.2} direction="right">
            <div className="relative aspect-square lg:aspect-[4/5] rounded-lg overflow-hidden bg-muted">
              <Image
                src="/headshot.webp"
                alt="Marcin Wojtala"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
