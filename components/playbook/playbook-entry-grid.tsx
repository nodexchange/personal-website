"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FadeIn } from "@/components/ui/fade-in";
import type { PlaybookEntry, PlaybookTheme } from "@/lib/playbook";
import { cn } from "@/lib/utils";

export type PlaybookCardEntry = Pick<
  PlaybookEntry,
  | "number"
  | "series"
  | "slug"
  | "title"
  | "subtitle"
  | "summary"
  | "themes"
  | "tags"
  | "difficulty"
  | "isNew"
  | "publishedAt"
  | "readingTime"
  | "coverImage"
>;

interface PlaybookEntryGridProps {
  entries: PlaybookCardEntry[];
  themes: PlaybookTheme[];
}

function getPlaybookPath(entry: PlaybookCardEntry) {
  return `/agentic-playbook/${entry.slug}`;
}

function formatPlaybookDate(date: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00Z`));
}

export function PlaybookEntryGrid({ entries, themes }: PlaybookEntryGridProps) {
  const [selectedTheme, setSelectedTheme] = useState("All");
  const visibleEntries = useMemo(() => {
    if (selectedTheme === "All") {
      return entries;
    }

    return entries.filter((entry) => entry.themes.includes(selectedTheme));
  }, [entries, selectedTheme]);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2" aria-label="Filter articles by theme">
        {["All", ...themes.map((theme) => theme.title)].map((theme) => (
          <button
            key={theme}
            type="button"
            aria-pressed={selectedTheme === theme}
            onClick={() => setSelectedTheme(theme)}
            className={cn(
              "rounded-full border px-3 py-1.5 text-sm transition-colors",
              selectedTheme === theme
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border/70 bg-background text-muted-foreground hover:border-primary/40 hover:text-foreground"
            )}
          >
            {theme}
          </button>
        ))}
      </div>

      <p className="text-sm text-muted-foreground" aria-live="polite">
        Showing {visibleEntries.length} of {entries.length} entries
      </p>

      <div className="grid gap-6 lg:grid-cols-2">
        {visibleEntries.map((entry, index) => (
          <FadeIn
            key={entry.number}
            delay={0.03 + index * 0.03}
            className="h-full"
          >
            <Link href={getPlaybookPath(entry)} className="flex h-full group">
              <Card
                className={cn(
                  "h-[44rem] w-full overflow-hidden p-0 transition-all duration-200 md:h-[39rem] lg:h-[35rem]",
                  "group-hover:border-primary/30 group-hover:bg-card/80",
                  entry.isNew ? "border-primary/30 border-2" : "border-border/50"
                )}
              >
                {entry.coverImage ? (
                  <div className="relative h-44 overflow-hidden border-b border-border/50 md:h-48">
                    <Image
                      src={entry.coverImage}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                ) : null}

                <CardHeader className="shrink-0 pt-6">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                      #{entry.number}
                    </span>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <CardTitle className="text-lg leading-snug line-clamp-2 group-hover:text-primary transition-colors">
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
                      <CardDescription className="text-primary/70 line-clamp-2">
                        {entry.subtitle}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="flex flex-1 flex-col pb-6">
                  <p className="text-muted-foreground mb-4 text-sm line-clamp-3">
                    {entry.summary}
                  </p>
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {entry.themes.slice(0, 2).map((theme) => (
                        <span
                          key={theme}
                          className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                        >
                          {theme}
                        </span>
                      ))}
                      {entry.themes.length > 2 ? (
                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                          +{entry.themes.length - 2}
                        </span>
                      ) : null}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {entry.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                      {entry.tags.length > 3 ? (
                        <span className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
                          +{entry.tags.length - 3}
                        </span>
                      ) : null}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
