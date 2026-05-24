import Link from "next/link";
import { Linkedin } from "lucide-react";
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
import {
  formatPlaybookDate,
  getPlaybookPath,
  playbookEntries,
  playbookThemes,
} from "@/lib/playbook";

export const metadata = {
  title: "The Agentic Playbook | Marcin Wojtala",
  description:
    "First-party essays on AI-assisted development, agentic engineering, product engineering workflows, quality, safety, and engineering leadership.",
};

const blogStructuredData = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "The Agentic Playbook",
  description:
    "Essays on AI-assisted development, agentic engineering, product engineering workflows, quality, safety, and engineering leadership.",
  url: "https://marcinwojtala.vercel.app/agentic-playbook",
  author: {
    "@type": "Person",
    name: "Marcin Wojtala",
    url: "https://marcinwojtala.vercel.app",
  },
  blogPost: playbookEntries.map((entry) => ({
    "@type": "BlogPosting",
    headline: `${entry.series} #${entry.number}: ${entry.title}`,
    description: entry.summary,
    url: `https://marcinwojtala.vercel.app${getPlaybookPath(entry)}`,
    datePublished: entry.publishedAt,
  })),
};

export default function AgenticPlaybookPage() {
  return (
    <>
      <Header />
      <main>
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
                Playbook
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl">
                First-party essays on AI-assisted development, product
                engineering workflows, quality controls, and the operating model
                changes needed to adopt agentic tools safely.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link href="#entries">Read the series</Link>
                </Button>
                <Button variant="linkedin" size="lg" asChild>
                  <Link
                    href="https://www.linkedin.com/in/martinwojtala/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-4 h-4" />
                    Follow on LinkedIn
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </Container>
        </section>

        <section className="section-padding bg-background relative z-10">
          <Container>
            <FadeIn>
              <h2 className="mb-4">Core themes</h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="text-muted-foreground mb-12 max-w-2xl">
                The series connects practical AI adoption to engineering
                leadership, product delivery, quality, and long-term team
                capability.
              </p>
            </FadeIn>

            <div className="grid gap-6 md:grid-cols-2">
              {playbookThemes.map((theme, index) => (
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

        <section id="entries" className="section-padding bg-secondary/30">
          <Container>
            <FadeIn>
              <h2 className="mb-4">The series</h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="text-muted-foreground mb-12 max-w-2xl">
                {playbookEntries.length} entries and counting. Each article now
                has a local, crawlable page with the original LinkedIn source
                preserved.
              </p>
            </FadeIn>

            <div className="grid gap-6 lg:grid-cols-2">
              {playbookEntries.map((entry, index) => (
                <FadeIn key={entry.number} delay={0.03 + index * 0.03}>
                  <Link href={getPlaybookPath(entry)} className="block group">
                    <Card
                      className={`h-full transition-all duration-200 group-hover:border-primary/30 group-hover:bg-card/80 ${
                        entry.isNew ? "border-primary/30 border-2" : "border-border/50"
                      }`}
                    >
                      <CardHeader>
                        <div className="flex items-start gap-4">
                          <span className="text-4xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                            #{entry.number}
                          </span>
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-2 mb-1">
                              <CardTitle className="text-lg group-hover:text-primary transition-colors">
                                {entry.title}
                              </CardTitle>
                              {entry.isNew && (
                                <span className="text-xs font-medium bg-primary text-primary-foreground px-2.5 py-1 rounded-full">
                                  New
                                </span>
                              )}
                              <span className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded">
                                {entry.series}
                              </span>
                              {entry.difficulty ? (
                                <span className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded">
                                  {entry.difficulty}
                                </span>
                              ) : null}
                              {entry.publishedAt ? (
                                <span className="text-xs text-muted-foreground">
                                  {formatPlaybookDate(entry.publishedAt)}
                                </span>
                              ) : null}
                              {entry.readingTime ? (
                                <span className="text-xs text-muted-foreground">
                                  {entry.readingTime}
                                </span>
                              ) : null}
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
                        <div className="flex flex-wrap gap-2 mb-3">
                          {entry.themes.map((theme) => (
                            <span
                              key={theme}
                              className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                            >
                              {theme}
                            </span>
                          ))}
                        </div>
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

        <section className="section-padding">
          <Container>
            <div className="max-w-3xl mx-auto">
              <FadeIn>
                <h2 className="mb-6">About the series</h2>
              </FadeIn>

              <FadeIn delay={0.1}>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    The Agentic Playbook started as a practical record of how AI
                    tools like Cursor, Claude, Codex, and Copilot are changing
                    software delivery. The focus is not novelty. It is how
                    engineering teams can adopt these tools while preserving
                    quality, security, product judgment, and technical ownership.
                  </p>
                  <p>
                    The local archive will become the canonical home for the
                    series. LinkedIn remains useful for distribution, but the
                    website now has crawlable article routes, structured data,
                    and a content model ready for full-copy migration.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="mt-8 p-6 rounded-lg bg-card border border-border/50">
                  <p className="text-sm text-muted-foreground mb-4">
                    Want to discuss safe AI-assisted delivery for an engineering
                    organisation?
                  </p>
                  <Button asChild>
                    <Link href="/book?service=advisory">Book a call</Link>
                  </Button>
                </div>
              </FadeIn>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogStructuredData) }}
      />
    </>
  );
}
