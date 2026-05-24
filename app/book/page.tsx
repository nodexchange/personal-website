import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { BookingSection } from "@/components/sections/booking";
import { normalizeService } from "@/lib/booking";

export const metadata: Metadata = {
  title: "Work With Me | Marcin Wojtala",
  description:
    "Schedule a call or send a short brief for mentorship, workshops, product engineering, agentic engineering, and engineering leadership advisory work.",
};

interface BookPageProps {
  searchParams?: Promise<{
    service?: string | string[];
  }>;
}

export default async function BookPage({ searchParams }: BookPageProps) {
  const params = searchParams ? await searchParams : undefined;
  const rawService = params?.service;
  const service = Array.isArray(rawService) ? rawService[0] : rawService;

  return (
    <>
      <Header />
      <main>
        <BookingSection initialService={normalizeService(service ?? null)} />
      </main>
      <Footer />
    </>
  );
}
