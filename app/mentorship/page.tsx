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
  title: "Mentorship | Marcin Wojtala",
  description:
    "Engineering mentorship and career guidance for developers and leaders looking to grow.",
};

const mentorshipAreas = [
  {
    title: "Engineering Leadership",
    description:
      "Transition from individual contributor to engineering manager or director. Learn to build and scale high-performing teams.",
    topics: [
      "Team building & hiring",
      "Performance management",
      "Technical strategy",
      "Stakeholder communication",
    ],
  },
  {
    title: "Quality Engineering",
    description:
      "Deep dive into chaos engineering, contract testing, and performance testing. Build quality-first cultures.",
    topics: [
      "Chaos engineering practices",
      "Contract testing strategies",
      "Performance testing frameworks",
      "Quality metrics & KPIs",
    ],
  },
  {
    title: "Career Growth",
    description:
      "Navigate your engineering career path from senior developer to VP/Head of Engineering.",
    topics: [
      "Career path planning",
      "Personal branding",
      "Interview preparation",
      "Salary negotiation",
    ],
  },
  {
    title: "Startup Advisory",
    description:
      "Technical guidance for early-stage startups looking to build scalable engineering foundations.",
    topics: [
      "Tech stack decisions",
      "Hiring first engineers",
      "Engineering processes",
      "Scaling challenges",
    ],
  },
];

const testimonials = [
  {
    quote:
      "Marcin's guidance helped me transition from senior developer to engineering manager. His practical advice on team dynamics was invaluable.",
    author: "Senior Engineering Manager",
    company: "FinTech Startup",
  },
  {
    quote:
      "The mentorship sessions on quality engineering transformed how our team approaches testing. We've seen a 40% reduction in production incidents.",
    author: "Lead Developer",
    company: "Enterprise SaaS",
  },
];

export default function MentorshipPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 hero-gradient">
          <Container>
            <FadeIn>
              <p className="text-primary font-medium mb-4 tracking-wide">
                Mentorship
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="mb-6 max-w-3xl">
                Helping engineers
                <br />
                reach the next level.
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl">
                15+ years of engineering leadership experience distilled into
                actionable guidance. Whether you&apos;re transitioning to management
                or scaling your team, I can help.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link href="/book?service=mentorship">Request a session</Link>
                </Button>
                <Button variant="secondary" size="lg" asChild>
                  <Link href="/#about">Learn more about me</Link>
                </Button>
              </div>
            </FadeIn>
          </Container>
        </section>

        {/* Mentorship Areas */}
        <section className="section-padding bg-background relative z-10">
          <Container>
            <FadeIn>
              <h2 className="mb-4">Areas of focus</h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="text-muted-foreground mb-12 max-w-2xl">
                I offer mentorship in areas where I have deep, hands-on
                experience. Each session is tailored to your specific challenges
                and goals.
              </p>
            </FadeIn>

            <div className="grid gap-6 md:grid-cols-2">
              {mentorshipAreas.map((area, index) => (
                <FadeIn
                  key={area.title}
                  delay={0.1 + index * 0.1}
                  direction={index % 2 === 0 ? "left" : "right"}
                >
                  <Card className="border-border/50 h-full">
                    <CardHeader>
                      <CardTitle className="text-lg">{area.title}</CardTitle>
                      <CardDescription className="mt-2">
                        {area.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {area.topics.map((topic) => (
                          <li
                            key={topic}
                            className="text-sm text-muted-foreground flex items-center gap-2"
                          >
                            <span className="text-primary">&bull;</span>
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        {/* Testimonials */}
        <section className="section-padding bg-secondary/30">
          <Container>
            <FadeIn>
              <h2 className="mb-12 text-center">What mentees say</h2>
            </FadeIn>

            <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <FadeIn key={index} delay={0.1 + index * 0.1}>
                  <blockquote className="p-6 rounded-lg bg-card border border-border/50">
                    <p className="text-muted-foreground mb-4 italic">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <footer>
                      <p className="font-medium text-foreground">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.company}
                      </p>
                    </footer>
                  </blockquote>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        {/* Playbook Promo */}
        <PlaybookPromo />

        {/* CTA */}
        <section className="section-padding">
          <Container>
            <div className="max-w-2xl mx-auto text-center">
              <FadeIn>
                <h2 className="mb-6">Ready to accelerate your growth?</h2>
              </FadeIn>

              <FadeIn delay={0.1}>
                <p className="text-muted-foreground mb-8">
                  Let&apos;s discuss your goals and how I can help you get there.
                  Initial consultations are free.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <Button size="lg" asChild>
                  <Link href="/book?service=mentorship">
                    Get in touch
                  </Link>
                </Button>
              </FadeIn>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
