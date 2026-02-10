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
      "Own the full portfolio management platform ($438B+ AUM) — from target allocation engines and alpha screening to order execution",
      "Scaled transaction architecture to multi-region, processing 8B+ daily messages through GemFire and distributed caching",
      "Work directly with quants and portfolio managers to turn investment strategies into reliable, tested software",
      "Manage global teams across NA, EMEA, and APAC while driving AI-assisted delivery adoption (42% cycle time reduction)",
    ],
  },
  {
    company: "Bottomline Technologies",
    role: "Senior UI Engineering Manager",
    subtitle: "Financial Transaction Platforms",
    period: "May 2020 - Dec 2022",
    location: "Reading",
    highlights: [
      "Designed and shipped a microfrontend architecture (React + Module Federation) for the payment processing platform",
      "Grew the engineering team by 200% in 12 months through structured hiring and mentoring",
      "Delivered platforms handling 2B+ daily distributed financial transactions",
      "Created a maturity matrix to prioritise investment in testing, CI/CD, and front-end tooling",
    ],
  },
  {
    company: "Oxford University Press",
    role: "Application Architect / Dev Manager",
    subtitle: "Platform Engineering & DevOps",
    period: "Apr 2019 - May 2020",
    location: "Oxford",
    highlights: [
      "Led hands-on architecture for a globally distributed Higher Education platform team",
      "Moved from manual deployments to Docker containers and automated CI/CD, cutting release cycles from weeks to days",
      "Partnered with security to establish DevSecOps practices and a security-first culture",
    ],
  },
  {
    company: "Verizon Media (AOL+Yahoo)",
    role: "Creative Solutions Manager",
    subtitle: "AdTech Creative Platforms",
    period: "Aug 2012 - Apr 2019",
    location: "London",
    highlights: [
      "Led 16+ engineers building the front-end creative tooling platform for ad assembly, preview, and launch",
      "Scaled creative delivery systems to handle real-time bidding traffic under strict latency SLAs",
      "Seven years managing distributed teams across in-house, remote, and offshore locations",
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
              From ad-tech UIs to
              <br />
              trading systems.
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-muted-foreground max-w-2xl">
              15+ years building front-end platforms, distributed systems, and
              the teams behind them &mdash; from creative tooling at Verizon to
              portfolio management at JPMorgan.
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
