import Link from "next/link";
import { Header, Footer, Container } from "@/components/layout";
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
  title: "The Agentic Playbook | Marcin Wojtala",
  description:
    "Insights on AI orchestration, agentic development, and the future of software engineering in the age of AI.",
};

const playbookEntries = [
  {
    number: "12",
    title: "Why Skills Outlive Models",
    subtitle: "From Prompt Engineering to Reusable Agent Capabilities",
    summary:
      "While AI models constantly evolve, the lasting competitive advantage lies in developing structured 'Agent Skills'—reusable capability modules that embed domain knowledge, best practices, and organizational standards. A shift from temporary prompting toward reproducible, scalable engineering judgment.",
    tags: ["Agent Skills", "Architecture", "Engineering Leadership"],
    url: "https://www.linkedin.com/pulse/agentic-playbook-12-why-skills-outlive-models-marcin-wojtala-nzb0e",
    type: "article",
    isNew: true,
  },
  {
    number: "11",
    title: "Cutting the Roots",
    subtitle: "Why Eliminating Junior Developers Is a Strategic Mistake",
    summary:
      "While AI can handle entry-level tasks, removing junior developers undermines succession planning. Advocates for 'Augmented Juniors' where AI serves as a learning tool and mentor rather than a replacement.",
    tags: ["Talent", "AI Impact", "Team Building"],
    url: "https://www.linkedin.com/pulse/agentic-playbook-11-cutting-roots-why-eliminating-junior-wojtala-l2pbe/",
    type: "article",
  },
  {
    number: "10",
    title: "Dual-Thread Development (DTD)",
    subtitle: "Splitting Workflow for Focus and Delegation",
    summary:
      "A methodology for managing AI-assisted development by separating intentional focus work from asynchronous agent tasks. Reduces context-switching costs and protects developer focus.",
    tags: ["Workflow", "Productivity", "Methodology"],
    url: "https://www.linkedin.com/pulse/agentic-playbook-10-dual-thread-development-dtd-marcin-wojtala-nhvbe/",
    type: "article",
  },
  {
    number: "09",
    title: "Don't Let the Tool Think for You",
    subtitle: "Preserving Critical Thinking in AI-Assisted Development",
    summary:
      "As AI coding assistants become more powerful, developers risk automating their thinking along with their code. Reduced mental friction can erode deep problem-solving abilities and architectural reasoning.",
    tags: ["Critical Thinking", "Cognitive Risk", "Best Practices"],
    url: "https://www.linkedin.com/pulse/agentic-playbook-9-dont-let-tool-think-you-marcin-wojtala-lctoe/",
    type: "article",
  },
  {
    number: "08",
    title: "Charting Parallel Waters",
    subtitle: "Multi-Agent Execution in Modern Dev Environments",
    summary:
      "Addresses the limitation of single-agent sequential operation. Using Claude-Squad for concurrent multi-agent execution where developers can spin up multiple agents with defined scopes running in parallel.",
    tags: ["Multi-Agent", "Parallel Execution", "Claude-Squad"],
    url: "https://www.linkedin.com/posts/marcinwojtala_claudesquad-multiagentflow-agenticplaybook-activity-7339195778516574209-Xz2d",
    type: "post",
  },
  {
    number: "07",
    title: "Visual Refactoring",
    subtitle: "Claude 4 + Playwright for UI Validation",
    summary:
      "Combining Claude 4's reasoning with Playwright's visual testing to enable AI agents to validate UI changes during refactoring. Automates screenshot capture and comparison to detect regressions.",
    tags: ["Visual Testing", "Playwright", "Refactoring"],
    url: "https://www.linkedin.com/posts/marcinwojtala_agenticplaybook-claude4-cursorai-activity-7336301655321202690-ejzA",
    type: "post",
  },
  {
    number: "06",
    title: "Seamless Refactors",
    subtitle: "Claude 4 in Red-Green-Refactor",
    summary:
      "How Claude 4 transforms refactoring through incremental, test-driven improvements. AI's real value lies in guiding intelligent architectural adjustments while maintaining safety through comprehensive testing.",
    tags: ["Refactoring", "TDD", "Claude 4"],
    url: "https://www.linkedin.com/posts/marcinwojtala_agenticplaybook-claude4-cursorai-activity-7333710107937038336-dvYA",
    type: "post",
  },
  {
    number: "05",
    title: "Celestial Crosscheck",
    subtitle: "Pause Before Execution, Challenge Assumptions",
    summary:
      "Before requesting code generation, ask AI to challenge your design decisions, identify edge cases, and suggest alternatives. Making 'Celestial Crosscheck, please' a habitual first prompt.",
    tags: ["Architecture", "Design Review", "Best Practices"],
    url: "https://www.linkedin.com/posts/marcinwojtala_agenticplaybook-celestialcrosscheck-aiindev-activity-7330659845018185729-NJC5",
    type: "post",
  },
  {
    number: "04",
    title: "Visual Context",
    subtitle: "Enhancing AI Guidance with Screenshots and Diagrams",
    summary:
      "Navigating a large project without visual context is like sailing in the dark. Provide screenshots, wireframes, and architecture diagrams to help AI agents better understand structure and intent.",
    tags: ["Visual Input", "Context", "Productivity"],
    url: "https://www.linkedin.com/posts/marcinwojtala_agenticplaybook-aiindev-machinevision-activity-7328170976880332800-Afvg",
    type: "post",
  },
  {
    number: "03",
    title: "The Trojan Prompt",
    subtitle: "How We're Inviting the Threat In (with Open Arms)",
    summary:
      "Prompt injection - an AI-era equivalent of SQL injection - poses emerging security risks. Details attack vectors including hidden payloads, malicious extensions, and unverified third-party tools.",
    tags: ["Security", "Prompt Injection", "Risk"],
    url: "https://www.linkedin.com/pulse/agentic-playbook-3-trojan-prompt-how-were-inviting-threat-wojtala-on23e/",
    type: "article",
  },
  {
    number: "02",
    title: "Learn a New Language",
    subtitle: "Through Your Own Codebase",
    summary:
      "Using Cursor AI to learn Java by contextualizing instruction within an existing TypeScript monorepo. The agent teaches through contrasts, creating a personalised, hands-on learning path anchored in real experience.",
    tags: ["Learning", "Language Migration", "Cursor AI"],
    url: "https://www.linkedin.com/posts/marcinwojtala_agenticplaybook-aiindev-cursorai-activity-7320516588749639682-59S3",
    type: "post",
  },
  {
    number: "01",
    title: "Incremental Enhancement Practice",
    subtitle: "Phased Approach to AI-Assisted Development",
    summary:
      "Advocates for breaking work into structured stages with verification points rather than requesting complete solutions in single prompts. Reduces hallucinations and code breakage through collaboration over speed.",
    tags: ["Methodology", "Best Practices", "Quality"],
    url: "https://www.linkedin.com/posts/marcinwojtala_agenticplaybook-aiindev-agentops-activity-7317923860861906944-s3lr",
    type: "post",
  },
];

const themes = [
  {
    title: "Engineering Leadership in the AI Era",
    description:
      "How to lead engineering teams when AI fundamentally changes the nature of development work.",
  },
  {
    title: "Quality & Safety",
    description:
      "Security risks, testing strategies, and maintaining code quality in AI-generated codebases.",
  },
  {
    title: "Talent & Cognitive Health",
    description:
      "The human side - preserving critical thinking, developing junior engineers, and avoiding over-reliance.",
  },
  {
    title: "Practical Workflows",
    description:
      "Real-world patterns for integrating AI tools effectively: DTD, visual context, multi-agent execution.",
  },
];

export default function AgenticPlaybookPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 hero-gradient">
          <Container>
            <FadeIn>
              <p className="text-primary font-medium mb-4 tracking-wide">
                Thought Leadership
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="mb-6 max-w-3xl">
                The Agentic
                <br />
                Playbook.
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl">
                A series exploring AI-assisted development, engineering leadership,
                and the evolving relationship between developers and their tools.
                Practical insights from the front lines of the agentic revolution.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link
                    href="https://www.linkedin.com/in/martinwojtala/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Follow on LinkedIn
                  </Link>
                </Button>
                <Button variant="secondary" size="lg" asChild>
                  <Link href="#entries">Read the series</Link>
                </Button>
              </div>
            </FadeIn>
          </Container>
        </section>

        {/* Themes */}
        <section className="section-padding bg-background relative z-10">
          <Container>
            <FadeIn>
              <h2 className="mb-4">Core themes</h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="text-muted-foreground mb-12 max-w-2xl">
                The Agentic Playbook explores how AI is reshaping software
                engineering from multiple angles.
              </p>
            </FadeIn>

            <div className="grid gap-6 md:grid-cols-2">
              {themes.map((theme, index) => (
                <FadeIn key={theme.title} delay={0.1 + index * 0.05}>
                  <div className="p-6 rounded-lg border border-border/50 bg-card">
                    <h3 className="text-lg font-semibold mb-2">{theme.title}</h3>
                    <p className="text-muted-foreground">{theme.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        {/* Entries */}
        <section id="entries" className="section-padding bg-secondary/30">
          <Container>
            <FadeIn>
              <h2 className="mb-4">The series</h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="text-muted-foreground mb-12 max-w-2xl">
                {playbookEntries.length} entries and counting. Click any card to
                read the full article on LinkedIn.
              </p>
            </FadeIn>

            <div className="grid gap-6 lg:grid-cols-2">
              {playbookEntries.map((entry, index) => (
                <FadeIn key={entry.number} delay={0.03 + index * 0.03}>
                  <Link
                    href={entry.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <Card className={`h-full transition-all duration-200 group-hover:border-primary/30 group-hover:bg-card/80 ${entry.isNew ? "border-primary/30 border-2" : "border-border/50"}`}>
                      <CardHeader>
                        <div className="flex items-start gap-4">
                          <span className="text-4xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                            #{entry.number}
                          </span>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <CardTitle className="text-lg group-hover:text-primary transition-colors">
                                {entry.title}
                              </CardTitle>
                              {entry.isNew && (
                                <span className="text-xs font-medium bg-primary text-primary-foreground px-2.5 py-1 rounded-full">
                                  New
                                </span>
                              )}
                              <span className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded">
                                {entry.type}
                              </span>
                            </div>
                            <CardDescription className="text-primary/70">
                              {entry.subtitle}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4 text-sm">
                          {entry.summary}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {entry.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        {/* About the Series */}
        <section className="section-padding">
          <Container>
            <div className="max-w-3xl mx-auto">
              <FadeIn>
                <h2 className="mb-6">About the series</h2>
              </FadeIn>

              <FadeIn delay={0.1}>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    The Agentic Playbook started as an exploration of how AI
                    tools like Cursor, Claude, and Copilot are changing the way
                    engineering teams work. As Executive Director at JPMorgan Chase
                    with executive sponsorship for AI and automation rollout, I
                    have a front-row seat to this transformation.
                  </p>
                  <p>
                    These aren&apos;t theoretical musings - they&apos;re observations from
                    leading global engineering teams through real AI adoption.
                    The wins, the failures, the security concerns, and the
                    unexpected consequences for team dynamics and individual
                    cognitive health.
                  </p>
                  <p>
                    New entries are published regularly on LinkedIn. The series
                    covers everything from practical workflows (DTD, visual
                    context, multi-agent execution) to deeper questions about
                    talent development and the future of the profession.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="mt-8 p-6 rounded-lg bg-card border border-border/50">
                  <p className="text-sm text-muted-foreground mb-4">
                    Want to discuss AI strategy for your engineering organisation?
                  </p>
                  <Button asChild>
                    <Link href="mailto:1985mars@gmail.com?subject=AI Strategy Discussion">
                      Let&apos;s talk
                    </Link>
                  </Button>
                </div>
              </FadeIn>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
