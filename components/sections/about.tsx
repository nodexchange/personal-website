import Image from "next/image";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/ui/fade-in";
import { ExpertiseTags } from "@/components/ui/expertise-tags";

const highlights = [
  {
    stat: "$438B+",
    label: "Assets under management",
  },
  {
    stat: "8B+",
    label: "Daily messages processed",
  },
  {
    stat: "4",
    label: "Continents managed",
  },
  {
    stat: "15+",
    label: "Years in engineering leadership",
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
                From UI components to
                <br />
                trading infrastructure.
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I started my career building user interfaces &mdash; from
                  ad-creative front-ends at Verizon Media to microfrontend and
                  payment platform teams at Bottomline Technologies. That
                  foundation in UI architecture still shapes how I think about
                  systems: close to the user, close to the code, and deliberate
                  about how teams build.
                </p>

                <p>
                  Now I lead multi-asset portfolio management platforms at
                  JPMorgan Chase, covering the full investment lifecycle: target
                  allocation engines (SAA/TAA), research feeds, alpha screening,
                  exposure management, portfolio construction, and order
                  execution. I stay actively involved in delivery through
                  coding, pull request reviews, solution design, and technical
                  direction, working closely with portfolio managers, research
                  desks, and risk teams to turn investment strategies into
                  reliable production systems.
                </p>

                <p>
                  My leadership style is hands-on and engaged: aligning people,
                  technology, and outcomes through clear standards, pragmatic
                  technical choices, and ways of working that help teams deliver
                  reliable software at scale. On the technical side, I work
                  across event-driven architecture, distributed caching,
                  multi-region replication, AWS infrastructure, and resilience
                  practices including chaos engineering, contract testing, and
                  Infrastructure as Code with Terraform.
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
