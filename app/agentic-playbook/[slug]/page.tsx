import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header, Footer, Container } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import {
  formatPlaybookDate,
  getPlaybookEntry,
  getPlaybookPath,
  playbookEntries,
} from "@/lib/playbook";

interface PlaybookArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return playbookEntries.map((entry) => ({
    slug: entry.slug,
  }));
}

export async function generateMetadata({
  params,
}: PlaybookArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = getPlaybookEntry(slug);

  if (!entry) {
    return {};
  }

  const title = `Agentic Playbook #${entry.number}: ${entry.title}`;
  const url = `https://marcinwojtala.vercel.app${getPlaybookPath(entry)}`;

  return {
    title: `${title} | Marcin Wojtala`,
    description: entry.summary,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description: entry.summary,
      type: "article",
      url,
      siteName: "Marcin Wojtala",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: entry.summary,
    },
  };
}

export default async function PlaybookArticlePage({
  params,
}: PlaybookArticlePageProps) {
  const { slug } = await params;
  const entry = getPlaybookEntry(slug);

  if (!entry) {
    notFound();
  }

  const articleUrl = `https://marcinwojtala.vercel.app${getPlaybookPath(entry)}`;
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: `Agentic Playbook #${entry.number}: ${entry.title}`,
    alternativeHeadline: entry.subtitle,
    description: entry.summary,
    articleBody: entry.body.join("\n\n"),
    url: articleUrl,
    mainEntityOfPage: articleUrl,
    author: {
      "@type": "Person",
      name: "Marcin Wojtala",
      url: "https://marcinwojtala.vercel.app",
    },
    publisher: {
      "@type": "Person",
      name: "Marcin Wojtala",
    },
    datePublished: entry.publishedAt,
    dateModified: entry.publishedAt,
    isPartOf: {
      "@type": "Blog",
      name: "The Agentic Playbook",
      url: "https://marcinwojtala.vercel.app/agentic-playbook",
    },
    sameAs: entry.sourceUrl,
    keywords: entry.tags.join(", "),
  };

  return (
    <>
      <Header />
      <main>
        <article className="pt-32 pb-20 hero-gradient">
          <Container>
            <FadeIn>
              <Link
                href="/agentic-playbook"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Back to The Agentic Playbook
              </Link>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="mt-8 max-w-3xl">
                <p className="text-primary font-medium mb-4 tracking-wide">
                  Agentic Playbook #{entry.number}
                </p>
                <h1 className="mb-5">{entry.title}</h1>
                <p className="text-xl text-primary/80 mb-6">{entry.subtitle}</p>
                <p className="text-lg text-muted-foreground mb-6">
                  {entry.summary}
                </p>
                <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                  {entry.publishedAt ? (
                    <>
                      <time dateTime={entry.publishedAt}>
                        {formatPlaybookDate(entry.publishedAt)}
                      </time>
                      <span>&bull;</span>
                    </>
                  ) : null}
                  <span>{entry.readingTime}</span>
                  <span>&bull;</span>
                  <span>{entry.sourceType}</span>
                </div>
              </div>
            </FadeIn>
          </Container>
        </article>

        <section className="section-padding bg-background relative z-10">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_280px]">
              <FadeIn>
                <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-muted-foreground">
                  {entry.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </FadeIn>

              <FadeIn delay={0.1} direction="right">
                <aside className="lg:sticky lg:top-28 space-y-6">
                  <div className="rounded-lg border border-border/50 bg-card p-5">
                    <p className="text-sm text-muted-foreground mb-3">Topics</p>
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
                  </div>

                  <div className="rounded-lg border border-border/50 bg-card p-5">
                    <p className="text-sm text-muted-foreground mb-3">
                      Prefer LinkedIn?
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">
                      Read the original post there, or continue with the local
                      version here.
                    </p>
                    <Button variant="outline" asChild>
                      <Link
                        href={entry.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read on LinkedIn
                      </Link>
                    </Button>
                  </div>
                </aside>
              </FadeIn>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData),
        }}
      />
    </>
  );
}
