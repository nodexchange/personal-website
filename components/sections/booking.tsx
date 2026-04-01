"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { normalizeService, SERVICE_OPTIONS } from "@/lib/booking";
import { BOOKING_CALL_URL, CONTACT_EMAIL } from "@/lib/constants";

const timelineOptions = [
  "Within 2 weeks",
  "This month",
  "Next quarter",
  "Just exploring",
];

const budgetOptions = [
  "Under GBP 2k",
  "GBP 2k-GBP 5k",
  "GBP 5k-GBP 15k",
  "GBP 15k+",
  "Not sure yet",
];

interface BookingSectionProps {
  initialService?: string | null;
}

export function BookingSection({ initialService }: BookingSectionProps) {
  const [service, setService] = useState(normalizeService(initialService ?? null));
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [timeline, setTimeline] = useState(timelineOptions[0]);
  const [budget, setBudget] = useState(budgetOptions[4]);
  const [brief, setBrief] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = `[Website Inquiry] ${service}`;
    const body = [
      `Name: ${name || "Not provided"}`,
      `Email: ${email || "Not provided"}`,
      `Company: ${company || "Not provided"}`,
      `Service: ${service}`,
      `Timeline: ${timeline}`,
      `Budget: ${budget}`,
      "",
      "Brief:",
      brief || "No brief provided.",
      "",
      "Source: marcinwojtala.vercel.app/book",
    ].join("\n");

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="pt-32 pb-20 hero-gradient">
      <Container>
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <p className="text-primary font-medium mb-4 tracking-wide">
              Booking
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="mb-5">Book a call or share your brief.</h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg text-muted-foreground mb-8">
              Tell me what you are solving and I will respond with next steps.
              For faster scheduling, you can also jump straight to the calendar.
            </p>
          </FadeIn>

          {BOOKING_CALL_URL ? (
            <FadeIn delay={0.25}>
              <div className="mb-8 rounded-xl border border-border/60 bg-card p-5">
                <p className="text-sm text-muted-foreground mb-3">
                  Fastest option
                </p>
                <Button asChild>
                  <Link
                    href={BOOKING_CALL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open booking calendar
                  </Link>
                </Button>
              </div>
            </FadeIn>
          ) : null}

          <FadeIn delay={0.3}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border/60 bg-card p-6 md:p-8 space-y-5"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <label className="text-sm text-muted-foreground">
                  Name
                  <input
                    required
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-foreground outline-none ring-0 focus:border-ring"
                    placeholder="Your name"
                  />
                </label>

                <label className="text-sm text-muted-foreground">
                  Email
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-foreground outline-none ring-0 focus:border-ring"
                    placeholder="you@company.com"
                  />
                </label>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <label className="text-sm text-muted-foreground">
                  Company
                  <input
                    value={company}
                    onChange={(event) => setCompany(event.target.value)}
                    className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-foreground outline-none ring-0 focus:border-ring"
                    placeholder="Company name"
                  />
                </label>

                <label className="text-sm text-muted-foreground">
                  Service
                  <select
                    value={service}
                    onChange={(event) => setService(event.target.value)}
                    className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-foreground outline-none ring-0 focus:border-ring"
                  >
                    {SERVICE_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <label className="text-sm text-muted-foreground">
                  Timeline
                  <select
                    value={timeline}
                    onChange={(event) => setTimeline(event.target.value)}
                    className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-foreground outline-none ring-0 focus:border-ring"
                  >
                    {timelineOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="text-sm text-muted-foreground">
                  Budget
                  <select
                    value={budget}
                    onChange={(event) => setBudget(event.target.value)}
                    className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-foreground outline-none ring-0 focus:border-ring"
                  >
                    {budgetOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="text-sm text-muted-foreground block">
                Brief
                <textarea
                  required
                  value={brief}
                  onChange={(event) => setBrief(event.target.value)}
                  rows={5}
                  className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-foreground outline-none ring-0 focus:border-ring"
                  placeholder="Share context, goals, and what outcome you want."
                />
              </label>

              <div className="flex flex-wrap gap-3">
                <Button size="lg" type="submit">
                  Send brief by email
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href={`mailto:${CONTACT_EMAIL}`}>Use plain email</Link>
                </Button>
              </div>
            </form>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
