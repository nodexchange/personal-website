import Image from "next/image";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/ui/fade-in";
import { ExpertiseTags } from "@/components/ui/expertise-tags";

const highlights = [
  {
    stat: "$8B+",
    label: "AUM in Portfolio Systems",
  },
  {
    stat: "80B+",
    label: "Daily Transactions Scaled",
  },
  {
    stat: "4",
    label: "Continents Managed",
  },
  {
    stat: "15+",
    label: "Years Engineering Leadership",
  },
];


export function About() {
  return (
    <section id="about" className="section-padding relative z-10 bg-grid-pattern shadow-sink">
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
                  UK-based engineering leader specialising in portfolio management
                  and investment systems. I bridge research, middle office, and
                  technology &mdash; translating complex investment strategies into
                  high-performance, low-latency platforms.
                </p>

                <p>
                  Deep hands-on experience across the investment lifecycle:
                  target allocation engines (SAA/TAA), research feeds, alpha
                  screening, exposure management, portfolio construction, and
                  order execution systems. Partnering directly with portfolio
                  managers, research desks, and benchmark teams. Systems integrate
                  with enterprise risk management frameworks.
                </p>

                <p>
                  Technical depth in event-driven architecture, distributed caching
                  (GemFire, Ignite), multi-region database replication, and AWS
                  infrastructure (EKS, Lambda, Bedrock). Infrastructure as Code with
                  Terraform at the forefront. I build resilient systems through chaos
                  engineering, contract testing, and performance testing at scale.
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
