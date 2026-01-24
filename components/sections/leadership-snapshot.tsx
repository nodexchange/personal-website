import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/ui/fade-in";

const pillars = [
  "Application strategy and governance",
  "Resilience and security by design",
  "Modern engineering (Agile, DevSecOps, CI/CD)",
  "Integration and rationalisation",
  "Vendor and global team leadership",
];

const outcomes = [
  {
    value: "99.42%",
    label: "SLA uptime across global, multi-timezone trading hours",
  },
  {
    value: "42%",
    label: "Cycle time reduction via AI-augmented delivery",
  },
  {
    value: "63%",
    label: "Story throughput increase on legacy quality work",
  },
];

const evidence = [
  "Sanctions-constrained acquisition: orchestrated relocation of 15 engineers and families, safeguarding wellbeing and delivery continuity.",
  "AI-augmented engineering: 6 workshops, 89% team trained, 62% AI-assisted delivery penetration per sprint, with quality and productivity tracking.",
  "Implemented weekend dev-environment lightswitch policy to reduce cost while sustaining resilience targets.",
  "Quality engineering emphasis across chaos engineering, contract testing, and performance testing, embedded into DevSecOps to strengthen resilience and release confidence at scale.",
  "MTTR reduction through streamlined CI/CD and instant rollback using Spinnaker and Kubernetes.",
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
              Application strategy and architecture
              <br />
              for global-scale growth.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-muted-foreground max-w-2xl">
              Executive-level leadership that blends governance, resilience, and
              modern engineering to accelerate integration, reduce risk, and
              unlock digital transformation.
            </p>
          </FadeIn>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <FadeIn delay={0.2} className="h-full">
            <div className="rounded-2xl border border-border/60 bg-card p-6 h-full">
              <p className="text-sm text-muted-foreground mb-4">Pillars</p>
              <p className="text-sm text-primary mb-3">
                The strategic backbone of my application estate leadership.
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
                Proven impact across resilience, speed, and delivery quality.
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
                High-stakes delivery with people, risk, and performance at the
                center.
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
                Clear narratives that align executives on strategy and risk.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary mt-1.5 shrink-0">&bull;</span>
                  <span>
                    Executive stakeholder alignment through clear strategic
                    roadmaps, resilience metrics, and regulatory-aware risk
                    narratives.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1.5 shrink-0">&bull;</span>
                  <span>
                    ITIL-aligned service management applied to software delivery:
                    ServiceNow migration, SLA tiers, escalation paths, and
                    incident/problem/change governance.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1.5 shrink-0">&bull;</span>
                  <span>
                    Change enablement around CI/CD with risk controls, plus
                    contract-testing training to raise environment stability.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1.5 shrink-0">&bull;</span>
                  <span>
                    Board-ready KPI packs that connect operational health,
                    delivery risk, and transformation progress.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1.5 shrink-0">&bull;</span>
                  <span>
                    Configuration Management Database (CMDB) and application
                    dependency mapping to improve integration readiness and
                    risk visibility.
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
