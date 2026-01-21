import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/ui/fade-in";

export function PlaybookPromo() {
  return (
    <section className="section-padding bg-secondary/30">
      <Container>
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-center gap-8 p-8 rounded-2xl bg-card border border-border/50">
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-2">
                  Thought Leadership
                </p>
                <h3 className="text-2xl font-semibold mb-3">
                  The Agentic Playbook
                </h3>
                <p className="text-muted-foreground">
                  Explore my ongoing series on AI-assisted development - practical
                  insights on workflows, team dynamics, and the future of
                  engineering in the age of agentic tools.
                </p>
              </div>
              <div className="shrink-0">
                <Button size="lg" asChild>
                  <Link href="/agentic-playbook">Read the series</Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
