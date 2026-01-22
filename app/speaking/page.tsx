import Link from "next/link";
import { Header, Footer, Container } from "@/components/layout";
import { PlaybookPromo } from "@/components/sections";
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
  title: "Public Speaking | Martin Wojtala",
  description:
    "Conference talks, workshops, and keynotes on engineering leadership, quality engineering, and team building.",
};

const talkTopics = [
  {
    title: "Building Quality-First Cultures",
    type: "Keynote / Conference Talk",
    duration: "30-45 min",
    description:
      "How to embed quality into your engineering DNA - from chaos engineering to contract testing. Practical strategies that scale.",
    audiences: ["Engineering Leaders", "QA Teams", "DevOps"],
  },
  {
    title: "From IC to Engineering Leader",
    type: "Workshop / Talk",
    duration: "45-90 min",
    description:
      "The transition from individual contributor to engineering manager. Common pitfalls, mindset shifts, and practical frameworks.",
    audiences: ["Senior Engineers", "New Managers", "Tech Leads"],
  },
  {
    title: "Scaling Global Engineering Teams",
    type: "Conference Talk",
    duration: "30-45 min",
    description:
      "Lessons from managing distributed teams across 4 continents. Communication, culture, and collaboration at scale.",
    audiences: ["Engineering Directors", "VPs", "CTOs"],
  },
  {
    title: "The Agentic Future of Software Development",
    type: "Keynote / Panel",
    duration: "30-60 min",
    description:
      "AI orchestration and agentic development - what it means for engineering teams and how to prepare for the shift.",
    audiences: ["Engineering Leaders", "Product Teams", "Executives"],
    isNew: true,
  },
  {
    title: "Chaos Engineering in Practice",
    type: "Workshop",
    duration: "Half-day",
    description:
      "Hands-on workshop on implementing chaos engineering. From first experiments to building resilient systems.",
    audiences: ["Platform Engineers", "SREs", "Backend Teams"],
  },
  {
    title: "DevSecOps: Security as a First-Class Citizen",
    type: "Conference Talk",
    duration: "30-45 min",
    description:
      "Integrating security into your CI/CD pipeline without slowing down delivery. Practical patterns and tools.",
    audiences: ["DevOps", "Security Teams", "Engineering Leaders"],
  },
];

const pastEvents = [
  {
    event: "Engineering Leadership Summit",
    topic: "Building Quality-First Cultures at Scale",
    year: "2024",
  },
  {
    event: "DevOps Days London",
    topic: "Chaos Engineering: Beyond the Basics",
    year: "2023",
  },
  {
    event: "FinTech Forum",
    topic: "Managing Global Engineering Teams",
    year: "2023",
  },
];

export default function SpeakingPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 hero-gradient">
          <Container>
            <FadeIn>
              <p className="text-primary font-medium mb-4 tracking-wide">
                Public Speaking
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="mb-6 max-w-3xl">
                Sharing insights on
                <br />
                engineering excellence.
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl">
                Available for conferences, corporate events, podcasts, and
                workshops. Topics span engineering leadership, quality
                engineering, and building high-performing teams.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link href="mailto:1985mars@gmail.com?subject=Speaking Inquiry">
                    Book for your event
                  </Link>
                </Button>
                <Button variant="secondary" size="lg" asChild>
                  <Link href="#topics">View talk topics</Link>
                </Button>
              </div>
            </FadeIn>
          </Container>
        </section>

        {/* Talk Topics */}
        <section id="topics" className="section-padding bg-background relative z-10">
          <Container>
            <FadeIn>
              <h2 className="mb-4">Talk topics</h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="text-muted-foreground mb-12 max-w-2xl">
                Each talk is tailored to your audience. These are starting
                points - I&apos;m happy to develop custom content for your specific
                needs.
              </p>
            </FadeIn>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {talkTopics.map((talk, index) => (
                <FadeIn key={talk.title} delay={0.05 + index * 0.05}>
                  <Card
                    className={`h-full ${
                      talk.isNew
                        ? "border-primary/30 border-2 relative overflow-hidden"
                        : "border-border/50"
                    }`}
                  >
                    {talk.isNew && (
                      <div className="absolute top-4 right-4">
                        <span className="text-xs font-medium bg-primary text-primary-foreground px-2.5 py-1 rounded-full">
                          New
                        </span>
                      </div>
                    )}
                    <CardHeader>
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">
                          {talk.type}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {talk.duration}
                        </span>
                      </div>
                      <CardTitle className="text-lg">{talk.title}</CardTitle>
                      <CardDescription className="mt-2">
                        {talk.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-xs text-muted-foreground mb-2">
                        Ideal for:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {talk.audiences.map((audience) => (
                          <span
                            key={audience}
                            className="text-xs px-2 py-1 rounded-full bg-secondary/50 text-secondary-foreground"
                          >
                            {audience}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        {/* Past Events */}
        <section className="section-padding bg-secondary/30">
          <Container>
            <FadeIn>
              <h2 className="mb-12">Past speaking engagements</h2>
            </FadeIn>

            <div className="max-w-2xl">
              {pastEvents.map((event, index) => (
                <FadeIn key={index} delay={0.1 + index * 0.1}>
                  <div className="flex items-start justify-between py-4 border-b border-border/50 last:border-0">
                    <div>
                      <p className="font-medium text-foreground">
                        {event.event}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {event.topic}
                      </p>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {event.year}
                    </span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        {/* What to Expect */}
        <section className="section-padding">
          <Container>
            <div className="grid gap-12 lg:grid-cols-2 items-start">
              <div>
                <FadeIn>
                  <h2 className="mb-6">What to expect</h2>
                </FadeIn>

                <FadeIn delay={0.1}>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      My talks blend real-world experience with actionable
                      insights. No fluff, no theory for theory&apos;s sake - just
                      practical guidance from 15+ years in the trenches.
                    </p>
                    <p>
                      I believe in interactive sessions. Expect Q&A, live
                      discussions, and engagement with your audience throughout.
                    </p>
                    <p>
                      All talks can be customised for your specific context,
                      industry, and audience level.
                    </p>
                  </div>
                </FadeIn>
              </div>

              <div>
                <FadeIn delay={0.2}>
                  <div className="p-6 rounded-lg bg-card border border-border/50">
                    <h3 className="text-lg font-semibold mb-4">
                      Booking information
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">&bull;</span>
                        <span>
                          Available for in-person and virtual events
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">&bull;</span>
                        <span>
                          Based in UK, available internationally
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">&bull;</span>
                        <span>
                          Custom workshops and training available
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">&bull;</span>
                        <span>
                          Happy to participate in panels and podcasts
                        </span>
                      </li>
                    </ul>

                    <div className="mt-6">
                      <Button asChild>
                        <Link href="mailto:1985mars@gmail.com?subject=Speaking Inquiry">
                          Inquire about availability
                        </Link>
                      </Button>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </Container>
        </section>

        {/* Playbook Promo */}
        <PlaybookPromo />
      </main>
      <Footer />
    </>
  );
}
