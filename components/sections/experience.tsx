import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/ui/fade-in";

const experiences = [
  {
    company: "JPMorgan Chase",
    role: "Executive Director",
    subtitle: "Multi-Asset Portfolio Management Systems",
    period: "Dec 2022 - Present",
    location: "London",
    highlights: [
      "Building portfolio management platforms ($438B+ AUM): target allocation (SAA/TAA), alpha screening, exposure management, and order execution systems",
      "Scaled 8B+ daily message architecture to multi-region with low-latency data replication",
      "Partnering with quants and portfolio managers to translate investment strategies into performant systems",
      "Leading global engineering teams across NA, EMEA, and APAC; driving AI/agentic tooling adoption",
    ],
  },
  {
    company: "Bottomline Technologies",
    role: "Senior UI Engineering Manager",
    subtitle: "High-Throughput Financial Transactions",
    period: "May 2020 - Dec 2022",
    location: "Reading",
    highlights: [
      "Built engineering team from ground up; 200% growth in 12 months",
      "Delivered platforms supporting 2B+ daily distributed transactions",
      "Architected event-driven systems for real-time payment processing",
      "Established technical vision via contextual maturity matrix",
    ],
  },
  {
    company: "Oxford University Press",
    role: "Application Architect / Dev Manager",
    subtitle: "Platform Engineering & DevOps",
    period: "Apr 2019 - May 2020",
    location: "Oxford",
    highlights: [
      "Hands-on architecture leadership for globally distributed team",
      "Implemented container-driven infrastructure (Docker, K8s) and CI/CD pipelines",
      "Established security-first engineering practices and DevSecOps culture",
    ],
  },
  {
    company: "Verizon Media (AOL+Yahoo)",
    role: "Creative Solutions Manager",
    subtitle: "Real-Time AdTech Platforms",
    period: "Aug 2012 - Apr 2019",
    location: "London",
    highlights: [
      "Led 16+ globally distributed engineers delivering low-latency ad-serving systems",
      "Scaled real-time bidding and creative delivery platforms",
      "7 years building high-throughput systems under strict latency SLAs",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="section-padding bg-secondary/30">
      <Container>
        <div className="mb-12">
          <FadeIn>
            <p className="text-primary font-medium mb-4 tracking-wide">
              Experience
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="mb-4">
              Building mission-critical
              <br />
              financial platforms.
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-muted-foreground max-w-2xl">
              From real-time ad-serving to multi-asset portfolio management &mdash;
              15+ years delivering low-latency, high-throughput systems across
              global teams.
            </p>
          </FadeIn>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {experiences.map((exp, index) => (
            <FadeIn
              key={exp.company}
              delay={0.1 + index * 0.1}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <Card className="border-border/50 h-full">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <CardTitle className="text-lg">{exp.company}</CardTitle>
                      <CardDescription className="mt-1">
                        {exp.role}
                      </CardDescription>
                    </div>
                    <div className="text-right text-sm text-muted-foreground shrink-0">
                      <p>{exp.period}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-primary mb-3">{exp.subtitle}</p>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-primary mt-1.5 shrink-0">
                          &bull;
                        </span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
