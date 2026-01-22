import Link from "next/link";
import { Header, Footer, Container } from "@/components/layout";
import { PlaybookPromo } from "@/components/sections";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata = {
  title: "Workshops | Martin Wojtala",
  description:
    "Hands-on workshops on engineering leadership, quality engineering, chaos engineering, and team building.",
};

const workshops = [
  {
    title: "Agentic Development for Teams",
    duration: "Full day (6-8 hours)",
    format: "Hands-on workshop",
    participants: "10-20 participants",
    description:
      "Navigate the shift to AI-assisted development. Learn practical workflows, team dynamics, and strategies for integrating agentic tools without losing engineering fundamentals.",
    outcomes: [
      "Implement effective human-AI collaboration patterns",
      "Design workflows that amplify (not replace) engineering skills",
      "Build guardrails and review processes for AI-generated code",
      "Develop a roadmap for agentic adoption in your organisation",
    ],
    ideal: "Engineering leaders, senior developers, tech leads",
    isNew: true,
  },
  {
    title: "Chaos Engineering Fundamentals",
    duration: "Full day (6-8 hours)",
    format: "Hands-on workshop",
    participants: "8-20 participants",
    description:
      "Learn to build resilient systems through controlled chaos. From first experiments to production-ready chaos engineering practices.",
    outcomes: [
      "Understand chaos engineering principles and practices",
      "Design and run your first chaos experiments",
      "Build resilience dashboards and metrics",
      "Create a chaos engineering roadmap for your organisation",
    ],
    ideal: "Platform engineers, SREs, backend teams",
  },
  {
    title: "Contract Testing Masterclass",
    duration: "Half day (4 hours)",
    format: "Workshop with exercises",
    participants: "10-25 participants",
    description:
      "Implement consumer-driven contract testing to catch integration issues before they hit production.",
    outcomes: [
      "Write effective consumer and provider contracts",
      "Integrate contract tests into CI/CD pipelines",
      "Handle contract versioning and breaking changes",
      "Build a contract testing strategy",
    ],
    ideal: "API developers, QA engineers, microservices teams",
  },
  {
    title: "Engineering Leadership Bootcamp",
    duration: "2 days",
    format: "Interactive workshop",
    participants: "10-15 participants",
    description:
      "Intensive program for engineers transitioning to leadership. Covers team building, communication, and technical strategy.",
    outcomes: [
      "Develop your leadership style and philosophy",
      "Master difficult conversations and feedback",
      "Build high-performing team cultures",
      "Create technical roadmaps that align with business goals",
    ],
    ideal: "New engineering managers, tech leads, senior engineers",
  },
  {
    title: "Quality Engineering Deep Dive",
    duration: "Full day (6-8 hours)",
    format: "Workshop with labs",
    participants: "10-20 participants",
    description:
      "Comprehensive workshop on building quality-first engineering cultures. Covers testing strategies, automation, and metrics.",
    outcomes: [
      "Design effective testing pyramids",
      "Implement performance testing frameworks",
      "Build quality dashboards and metrics",
      "Create quality engineering career paths",
    ],
    ideal: "Engineering leaders, QA managers, architects",
  },
  {
    title: "Scaling Engineering Teams",
    duration: "Half day (4 hours)",
    format: "Workshop with case studies",
    participants: "8-15 participants",
    description:
      "Strategies for scaling engineering organisations from 10 to 100+ engineers while maintaining velocity and culture.",
    outcomes: [
      "Design effective team topologies",
      "Build hiring and onboarding programs",
      "Create engineering ladders and growth frameworks",
      "Implement effective cross-team collaboration",
    ],
    ideal: "Engineering directors, VPs, CTOs",
  },
];

export default function WorkshopsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 hero-gradient">
          <Container>
            <FadeIn>
              <p className="text-primary font-medium mb-4 tracking-wide">
                Workshops
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="mb-6 max-w-3xl">
                Hands-on learning
                <br />
                for engineering teams.
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl">
                Interactive workshops designed to upskill your team. From chaos
                engineering to leadership development, each session combines
                theory with practical exercises.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link href="mailto:1985mars@gmail.com?subject=Workshop Inquiry">
                    Book a workshop
                  </Link>
                </Button>
                <Button variant="secondary" size="lg" asChild>
                  <Link href="#workshops">View all workshops</Link>
                </Button>
              </div>
            </FadeIn>
          </Container>
        </section>

        {/* Workshop Grid */}
        <section id="workshops" className="section-padding bg-background relative z-10">
          <Container>
            <FadeIn>
              <h2 className="mb-4">Available workshops</h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="text-muted-foreground mb-12 max-w-2xl">
                All workshops can be customised for your team&apos;s specific needs
                and skill level. Available on-site or remote.
              </p>
            </FadeIn>

            <div className="grid gap-6 lg:grid-cols-2">
              {workshops.map((workshop, index) => (
                <FadeIn key={workshop.title} delay={0.05 + index * 0.05}>
                  <Card
                    className={`h-full ${
                      workshop.isNew
                        ? "border-primary/30 border-2 relative overflow-hidden"
                        : "border-border/50"
                    }`}
                  >
                    {workshop.isNew && (
                      <div className="absolute top-4 right-4">
                        <span className="text-xs font-medium bg-primary text-primary-foreground px-2.5 py-1 rounded-full">
                          New
                        </span>
                      </div>
                    )}
                    <CardHeader>
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">
                          {workshop.format}
                        </span>
                        <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">
                          {workshop.duration}
                        </span>
                        <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">
                          {workshop.participants}
                        </span>
                      </div>
                      <CardTitle className="text-xl">{workshop.title}</CardTitle>
                      <CardDescription className="mt-2">
                        {workshop.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm font-medium text-foreground mb-2">
                        What you&apos;ll learn:
                      </p>
                      <ul className="space-y-2 mb-4">
                        {workshop.outcomes.map((outcome) => (
                          <li
                            key={outcome}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <span className="text-primary mt-0.5">&bull;</span>
                            {outcome}
                          </li>
                        ))}
                      </ul>
                      <p className="text-xs text-muted-foreground">
                        <span className="font-medium">Ideal for:</span>{" "}
                        {workshop.ideal}
                      </p>
                    </CardContent>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        {/* Custom Workshops */}
        <section className="section-padding bg-secondary/30">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <FadeIn>
                <h2 className="mb-6">Need something custom?</h2>
              </FadeIn>

              <FadeIn delay={0.1}>
                <p className="text-muted-foreground mb-8">
                  I regularly develop custom workshops tailored to specific
                  organisational challenges. Whether it&apos;s a unique technical
                  topic or a combination of themes, let&apos;s design something that
                  fits your needs.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                  {[
                    "On-site delivery",
                    "Remote workshops",
                    "Multi-day programs",
                    "Follow-up coaching",
                    "Custom materials",
                  ].map((feature) => (
                    <span
                      key={feature}
                      className="px-4 py-2 rounded-full bg-card border border-border/50 text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <Button size="lg" asChild>
                  <Link href="mailto:1985mars@gmail.com?subject=Custom Workshop Inquiry">
                    Discuss your needs
                  </Link>
                </Button>
              </FadeIn>
            </div>
          </Container>
        </section>

        {/* Playbook Promo */}
        <PlaybookPromo />
      </main>
      <Footer />
    </>
  );
}
