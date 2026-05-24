import themes from "@/content/playbook/themes.json";
import celestialCrosscheck from "@/content/playbook/articles/celestial-crosscheck.json";
import chartingParallelWaters from "@/content/playbook/articles/charting-parallel-waters.json";
import cuttingTheRoots from "@/content/playbook/articles/cutting-the-roots.json";
import dontLetTheToolThinkForYou from "@/content/playbook/articles/dont-let-the-tool-think-for-you.json";
import dualThreadDevelopment from "@/content/playbook/articles/dual-thread-development.json";
import incrementalEnhancementPractice from "@/content/playbook/articles/incremental-enhancement-practice.json";
import largePrProblem from "@/content/playbook/articles/large-pr-problem.json";
import learnANewLanguage from "@/content/playbook/articles/learn-a-new-language.json";
import seamlessRefactors from "@/content/playbook/articles/seamless-refactors.json";
import specDrivenDevelopment from "@/content/playbook/articles/spec-driven-development.json";
import theRiseOfCloudAgents from "@/content/playbook/articles/the-rise-of-cloud-agents.json";
import theTrojanPrompt from "@/content/playbook/articles/the-trojan-prompt.json";
import visualContext from "@/content/playbook/articles/visual-context.json";
import visualRefactoring from "@/content/playbook/articles/visual-refactoring.json";
import whySkillsOutliveModels from "@/content/playbook/articles/why-skills-outlive-models.json";

export type PlaybookEntry = {
  number: string;
  series: string;
  slug: string;
  title: string;
  subtitle?: string;
  summary: string;
  themes: string[];
  tags: string[];
  difficulty?: "Beginner" | "Intermediate" | "Advanced" | "Leadership";
  sourceUrl?: string;
  sourceType?: "article" | "post" | "essay" | "note";
  isNew?: boolean;
  publishedAt?: string;
  readingTime?: string;
  coverImage?: string;
  related?: string[];
  body?: string[];
  sections?: PlaybookArticleSection[];
};

export type PlaybookArticleSection = {
  heading?: string;
  content: string[];
};

export type PlaybookTheme = {
  title: string;
  description: string;
};

const rawPlaybookArticleData = [
  largePrProblem,
  specDrivenDevelopment,
  theRiseOfCloudAgents,
  whySkillsOutliveModels,
  cuttingTheRoots,
  dualThreadDevelopment,
  dontLetTheToolThinkForYou,
  chartingParallelWaters,
  visualRefactoring,
  seamlessRefactors,
  celestialCrosscheck,
  visualContext,
  theTrojanPrompt,
  learnANewLanguage,
  incrementalEnhancementPractice,
] as const;

function toPlaybookEntry(entry: (typeof rawPlaybookArticleData)[number]) {
  if (
    entry.sourceType &&
    !["article", "post", "essay", "note"].includes(entry.sourceType)
  ) {
    throw new Error(`Invalid Playbook sourceType for ${entry.slug}`);
  }

  return entry as PlaybookEntry;
}

const playbookArticleData = rawPlaybookArticleData.map(toPlaybookEntry);

export const playbookEntries: PlaybookEntry[] = [...playbookArticleData].sort(
  (a, b) => Number(b.number) - Number(a.number)
);

export const playbookThemes = themes as PlaybookTheme[];

export function getPlaybookEntry(slug: string) {
  return playbookEntries.find((entry) => entry.slug === slug);
}

export function getRelatedPlaybookEntries(entry: PlaybookEntry) {
  return (entry.related ?? [])
    .map((slug) => getPlaybookEntry(slug))
    .filter((relatedEntry): relatedEntry is PlaybookEntry => Boolean(relatedEntry));
}

export function getAdjacentPlaybookEntries(entry: PlaybookEntry) {
  const currentNumber = Number(entry.number);
  const orderedAscending = [...playbookEntries].sort(
    (a, b) => Number(a.number) - Number(b.number)
  );
  const currentIndex = orderedAscending.findIndex(
    (item) => Number(item.number) === currentNumber
  );

  return {
    previous: currentIndex > 0 ? orderedAscending[currentIndex - 1] : undefined,
    next:
      currentIndex >= 0 && currentIndex < orderedAscending.length - 1
        ? orderedAscending[currentIndex + 1]
        : undefined,
  };
}

export function getPlaybookArticleSections(entry: PlaybookEntry) {
  if (entry.sections?.length) {
    return entry.sections;
  }

  return [
    {
      content: entry.body ?? [],
    },
  ];
}

export function getPlaybookPath(entry: PlaybookEntry) {
  return `/agentic-playbook/${entry.slug}`;
}

export function formatPlaybookDate(date: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00Z`));
}
