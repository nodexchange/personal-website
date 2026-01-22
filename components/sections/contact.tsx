import Link from "next/link";
import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/ui/fade-in";
import { ExpertiseTags } from "@/components/ui/expertise-tags";

export function Contact() {
  return (
    <section id="contact" className="section-padding">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="text-primary font-medium mb-4 tracking-wide">
              Get in touch
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="mb-6">
              Exploring next
              <br />
              challenges.
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
              Interested in discussing engineering leadership, quality
              engineering, or potential collaborations? I&apos;m always open to
              meaningful conversations.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="mailto:1985mars@gmail.com">Send an email</Link>
              </Button>
              <Button
                size="lg"
                asChild
                className="bg-[#0A66C2] hover:bg-[#004182] text-white"
              >
                <Link
                  href="https://www.linkedin.com/in/martinwojtala/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  Connect on LinkedIn
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/martin-wojtala-resume.pdf" download>
                  Download Resume
                </a>
              </Button>
            </div>
          </FadeIn>

          {/* Agentic Playbook Feature */}
          <FadeIn delay={0.4}>
            <div className="mt-16 p-8 rounded-2xl bg-card border border-border/50">
              <p className="text-sm text-muted-foreground mb-3">
                Thought Leadership
              </p>
              <h3 className="text-2xl font-semibold mb-3">The Agentic Playbook</h3>
              <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                My ongoing series exploring AI-assisted development, engineering
                leadership in the AI era, and practical patterns for working with
                agentic tools.
              </p>
              <Button asChild>
                <Link href="/agentic-playbook">Read the series</Link>
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="mt-12 pt-10 border-t border-border">
              <p className="text-sm text-muted-foreground mb-6">
                Areas of expertise
              </p>
              <ExpertiseTags centered animated baseDelay={0.6} />
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
