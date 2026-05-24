import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header, Footer, Container } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import {
  formatPlaybookDate,
  getAdjacentPlaybookEntries,
  getPlaybookArticleSections,
  getPlaybookEntry,
  getPlaybookPath,
  getRelatedPlaybookEntries,
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

  const title = `${entry.series} #${entry.number}: ${entry.title}`;
  const url = `https://marcinwojtala.vercel.app${getPlaybookPath(entry)}`;
  const images = entry.coverImage ? [entry.coverImage] : undefined;

  return {
    title: `${entry.title} | ${entry.series}`,
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
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: entry.summary,
      images,
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
  const articleSections = getPlaybookArticleSections(entry);
  const relatedEntries = getRelatedPlaybookEntries(entry);
  const adjacentEntries = getAdjacentPlaybookEntries(entry);
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: `${entry.series} #${entry.number}: ${entry.title}`,
    alternativeHeadline: entry.subtitle,
    description: entry.summary,
    articleBody: articleSections
      .flatMap((section) => section.content)
      .join("\n\n"),
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
    image: entry.coverImage,
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
                  {entry.series} #{entry.number}
                </p>
                <h1 className="mb-5">{entry.title}</h1>
                {entry.subtitle ? (
                  <p className="text-xl text-primary/80 mb-6">{entry.subtitle}</p>
                ) : null}
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
                  {entry.readingTime ? (
                    <>
                      <span>{entry.readingTime}</span>
                      <span>&bull;</span>
                    </>
                  ) : null}
                  {entry.difficulty ? (
                    <>
                      <span>{entry.difficulty}</span>
                      <span>&bull;</span>
                    </>
                  ) : null}
                  <span>{entry.sourceType ?? "essay"}</span>
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
                  {articleSections.map((section, sectionIndex) => (
                    <section key={section.heading ?? sectionIndex} className="space-y-4">
                      {section.heading ? (
                        <h2 className="text-2xl font-semibold text-foreground">
                          {section.heading}
                        </h2>
                      ) : null}
                      {section.content.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </section>
                  ))}

                  {relatedEntries.length ? (
                    <section className="pt-10 border-t border-border">
                      <h2 className="text-2xl font-semibold text-foreground mb-4">
                        Continue the Playbook
                      </h2>
                      <div className="grid gap-3">
                        {relatedEntries.map((relatedEntry) => (
                          <Link
                            key={relatedEntry.slug}
                            href={getPlaybookPath(relatedEntry)}
                            className="rounded-lg border border-border/50 bg-card p-4 transition-colors hover:border-primary/40"
                          >
                            <p className="text-sm text-primary mb-1">
                              #{relatedEntry.number}
                            </p>
                            <p className="font-medium text-foreground">
                              {relatedEntry.title}
                            </p>
                            {relatedEntry.subtitle ? (
                              <p className="text-sm text-muted-foreground mt-1">
                                {relatedEntry.subtitle}
                              </p>
                            ) : null}
                          </Link>
                        ))}
                      </div>
                    </section>
                  ) : null}

                  <nav className="grid gap-4 border-t border-border pt-10 sm:grid-cols-2">
                    {adjacentEntries.previous ? (
                      <Link
                        href={getPlaybookPath(adjacentEntries.previous)}
                        className="rounded-lg border border-border/50 bg-card p-4 transition-colors hover:border-primary/40"
                      >
                        <p className="text-sm text-muted-foreground mb-1">
                          Previous
                        </p>
                        <p className="font-medium text-foreground">
                          {adjacentEntries.previous.title}
                        </p>
                      </Link>
                    ) : (
                      <span />
                    )}
                    {adjacentEntries.next ? (
                      <Link
                        href={getPlaybookPath(adjacentEntries.next)}
                        className="rounded-lg border border-border/50 bg-card p-4 transition-colors hover:border-primary/40 sm:text-right"
                      >
                        <p className="text-sm text-muted-foreground mb-1">Next</p>
                        <p className="font-medium text-foreground">
                          {adjacentEntries.next.title}
                        </p>
                      </Link>
                    ) : null}
                  </nav>
                </div>
              </FadeIn>

              <FadeIn delay={0.1} direction="right">
                <aside className="lg:sticky lg:top-28 space-y-6">
                  <div className="rounded-lg border border-border/50 bg-card p-5">
                    <p className="text-sm text-muted-foreground mb-3">Themes</p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {entry.themes.map((theme) => (
                        <span
                          key={theme}
                          className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                        >
                          {theme}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">Tags</p>
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

                  {entry.sourceUrl ? (
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
                  ) : null}
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
