import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/ui/fade-in";

const pillars = [
  "Hands-on technical leadership",
  "Technical direction and standards",
  "UI architecture and microfrontend design",
  "Resilience and security by design",
  "Agile delivery with DevSecOps and CI/CD",
  "Global team leadership",
];

const outcomes = [
  {
    value: "99.42%",
    label: "SLA uptime by investing in chaos engineering and instant rollback",
  },
  {
    value: "89%",
    label: "Of 210 engineers trained through AI-assisted delivery workshops",
  },
  {
    value: "62%",
    label: "AI-assisted sprint penetration reached while tracking quality metrics",
  },
];

const evidence = [
  "Stay close to delivery through coding, pull request reviews, solution design, and architecture decisions on production systems.",
  "Relocated 15 engineers and their families during a sanctions-constrained acquisition, keeping both people safe and delivery on track.",
  "Ran 6 AI workshops, trained 89% of the team, and reached 62% AI-assisted sprint penetration, tracking quality alongside productivity.",
  "Introduced a weekend dev-environment lightswitch policy that cut infrastructure costs without affecting resilience.",
  "Embedded chaos engineering, contract testing, and performance testing into our DevSecOps pipeline to catch issues before they reached production.",
  "Reduced mean time to recovery by streamlining CI/CD and adding instant rollback through Spinnaker and Kubernetes.",
];

export function LeadershipSnapshot() {
  return (
    <section id="leadership" className="section-padding bg-secondary/20">
      <Container>
        <div className="mb-10">
          <FadeIn>
            <p className="text-primary font-medium mb-4 tracking-wide">
              Leadership Snapshot
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="mb-4">
              How I lead engineering
              <br />
              at scale.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-muted-foreground max-w-2xl">
              I lead from within the work, combining active technical
              contribution with clear standards, strong teams, and reliable
              delivery at scale.
            </p>
          </FadeIn>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <FadeIn delay={0.2} className="h-full">
            <div className="rounded-2xl border border-border/60 bg-card p-6 h-full">
              <p className="text-sm text-muted-foreground mb-4">Pillars</p>
              <p className="text-sm text-primary mb-3">
                The areas I focus on as an engineering leader.
              </p>
              <div className="flex flex-wrap gap-2">
                {pillars.map((pillar) => (
                  <span
                    key={pillar}
                    className="rounded-full border border-border/70 bg-background px-3 py-1 text-xs text-foreground/80"
                  >
                    {pillar}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.25} className="h-full">
            <div className="rounded-2xl border border-border/60 bg-card p-6 h-full">
              <p className="text-sm text-muted-foreground mb-4">
                Executive outcomes
              </p>
              <p className="text-sm text-primary mb-3">
                Measurable results across reliability, speed, and quality.
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                {outcomes.map((item) => (
                  <div key={item.label}>
                    <p className="text-2xl font-semibold text-primary">
                      {item.value}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3} className="h-full">
            <div className="rounded-2xl border border-border/60 bg-card p-6 h-full">
              <p className="text-sm text-muted-foreground mb-4">Evidence</p>
              <p className="text-sm text-primary mb-3">
                What this looks like in practice.
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {evidence.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-primary mt-1.5 shrink-0">&bull;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.35} className="h-full">
            <div className="rounded-2xl border border-border/60 bg-card p-6 h-full">
              <p className="text-sm text-muted-foreground mb-4">
                Board-level insight
              </p>
              <p className="text-sm text-primary mb-3">
                How I communicate engineering to the business.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary mt-1.5 shrink-0">&bull;</span>
                  <span>
                    Built strategic roadmaps with resilience metrics and
                    regulatory context to align executives on priorities, risk,
                    and technical direction.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1.5 shrink-0">&bull;</span>
                  <span>
                    Set engineering standards and ways of working across
                    distributed teams, improving consistency in delivery,
                    review, and decision-making.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1.5 shrink-0">&bull;</span>
                  <span>
                    Added risk controls to CI/CD and trained teams on contract
                    testing to improve environment stability.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1.5 shrink-0">&bull;</span>
                  <span>
                    Produce board-ready KPI packs that connect operational health,
                    delivery risk, and programme progress.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1.5 shrink-0">&bull;</span>
                  <span>
                    Mapped application dependencies (CMDB) to improve integration
                    readiness and give leadership clear risk visibility.
                  </span>
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
