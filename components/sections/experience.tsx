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
    company: "JP Morgan & Chase",
    role: "Executive Director",
    subtitle: "Global UI Engineering Lead & Head of Test & Automation",
    period: "Dec 2022 - Present",
    location: "London",
    highlights: [
      "Leading Assets & Wealth Management UI Engineering globally (NA, EMEA & APAC)",
      "Managing distributed teams across US, UK, India, and APAC",
      "Executive sponsorship for AI (Agentic development) and automation rollout",
      "CTO representative for Test & Automation across global engineering",
    ],
  },
  {
    company: "Bottomline Technologies",
    role: "Senior UI Engineering Manager",
    subtitle: "UI Development Leadership",
    period: "May 2020 - Dec 2022",
    location: "Reading",
    highlights: [
      "Built high-performing, remote, embedded UI engineering team from ground up",
      "200% team growth in first 12 months",
      "Supported 2B+ distributed transactions with seamless UX",
      "Created technical vision and roadmap via contextual maturity matrix",
    ],
  },
  {
    company: "Oxford University Press",
    role: "Application Architect / Dev Manager",
    subtitle: "Higher Education Platform",
    period: "Apr 2019 - May 2020",
    location: "Oxford",
    highlights: [
      "Hands-on development leadership for globally distributed team",
      "Established security-conscious Ways of Working",
      "Promoted container-driven DevOps and CI/CD maturity",
      "Created nourishing culture encouraging innovation",
    ],
  },
  {
    company: "Verizon Media (AOL+Yahoo)",
    role: "Creative Solutions Manager",
    subtitle: "AdTech & Creative Technology",
    period: "Aug 2012 - Apr 2019",
    location: "London",
    highlights: [
      "Managed globally distributed team (16+ developers)",
      "Scaled creative technical solutions across AdTech landscape",
      "7 years of leadership in high-pressure environment",
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
              A track record of
              <br />
              engineering excellence.
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-muted-foreground max-w-2xl">
              From senior developer to executive director, building and leading
              high-performing teams across four continents.
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
