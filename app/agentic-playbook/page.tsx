import Link from "next/link";
import { Linkedin } from "lucide-react";
import { Header, Footer, Container } from "@/components/layout";
import {
  PlaybookEntryGrid,
  type PlaybookCardEntry,
} from "@/components/playbook/playbook-entry-grid";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import {
  getPlaybookPath,
  playbookEntries,
  playbookThemes,
} from "@/lib/playbook";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "The Agentic Playbook | Marcin Wojtala",
  description:
    "First-party essays on AI-assisted development, agentic engineering, product engineering workflows, quality, safety, and engineering leadership.",
  path: "/agentic-playbook",
});

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

const playbookCardEntries: PlaybookCardEntry[] = playbookEntries.map((entry) => ({
  number: entry.number,
  series: entry.series,
  slug: entry.slug,
  title: entry.title,
  subtitle: entry.subtitle,
  summary: entry.summary,
  themes: entry.themes,
  tags: entry.tags,
  difficulty: entry.difficulty,
  isNew: entry.isNew,
  publishedAt: entry.publishedAt,
  readingTime: entry.readingTime,
  coverImage: entry.coverImage,
}));

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

            <PlaybookEntryGrid
              entries={playbookCardEntries}
              themes={playbookThemes}
            />
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
