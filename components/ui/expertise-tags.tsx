import { expertise } from "@/lib/constants";
import { FadeIn } from "./fade-in";

interface ExpertiseTagsProps {
  centered?: boolean;
  animated?: boolean;
  baseDelay?: number;
}

export function ExpertiseTags({
  centered = false,
  animated = false,
  baseDelay = 0,
}: ExpertiseTagsProps) {
  const containerClass = centered
    ? "flex flex-wrap justify-center gap-3"
    : "flex flex-wrap gap-2";

  const tagClass = centered
    ? "px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm"
    : "px-3 py-1.5 text-sm rounded-full bg-secondary border border-border/50 text-muted-foreground";

  if (animated) {
    return (
      <div className={containerClass}>
        {expertise.map((tag, index) => (
          <FadeIn key={tag} delay={baseDelay + index * 0.05} direction="none">
            <span className={tagClass}>{tag}</span>
          </FadeIn>
        ))}
      </div>
    );
  }

  return (
    <div className={containerClass}>
      {expertise.map((tag) => (
        <span key={tag} className={tagClass}>
          {tag}
        </span>
      ))}
    </div>
  );
}
