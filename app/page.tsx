import { Header, Footer } from "@/components/layout";
import {
  Hero,
  LeadershipSnapshot,
  About,
  Experience,
  PlaybookPromo,
  Contact,
} from "@/components/sections";
import { CONTACT_EMAIL, expertise } from "@/lib/constants";
import { createPageMetadata, siteUrl } from "@/lib/seo";

const homeDescription =
  "Engineering Director for regulated investment platforms, global product engineering teams, DevSecOps delivery, and safe AI-assisted engineering adoption.";

export const metadata = createPageMetadata({
  title: "Marcin Wojtala | Engineering Director",
  description: homeDescription,
});

const profileStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Marcin Wojtala",
      url: siteUrl,
      inLanguage: "en-GB",
      description: homeDescription,
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profile`,
      url: siteUrl,
      name: "Marcin Wojtala - Engineering Director profile",
      description: homeDescription,
      inLanguage: "en-GB",
      mainEntity: {
        "@id": `${siteUrl}/#person`,
      },
      hasPart: [
        {
          "@type": "CreativeWork",
          "@id": `${siteUrl}/marcin-wojtala-resume.pdf#resume`,
          name: "Marcin Wojtala Resume",
          url: `${siteUrl}/marcin-wojtala-resume.pdf`,
          encodingFormat: "application/pdf",
          about: {
            "@id": `${siteUrl}/#person`,
          },
        },
      ],
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Marcin Wojtala",
      url: siteUrl,
      image: `${siteUrl}/headshot.webp`,
      email: `mailto:${CONTACT_EMAIL}`,
      jobTitle: ["Engineering Director", "Executive Director"],
      worksFor: {
        "@type": "Organization",
        name: "JPMorgan Chase",
      },
      knowsAbout: expertise,
      sameAs: [
        "https://www.linkedin.com/in/martinwojtala/",
        "https://github.com/nodexchange",
      ],
      subjectOf: {
        "@id": `${siteUrl}/marcin-wojtala-resume.pdf#resume`,
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <LeadershipSnapshot />
        <About />
        <Experience />
        <PlaybookPromo />
        <Contact />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profileStructuredData),
        }}
      />
    </>
  );
}
