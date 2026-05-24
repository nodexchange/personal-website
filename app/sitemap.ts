import { MetadataRoute } from "next";
import { getPlaybookPath, playbookEntries } from "@/lib/playbook";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://marcinwojtala.vercel.app";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/agentic-playbook`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...playbookEntries.map((entry) => ({
      url: `${baseUrl}${getPlaybookPath(entry)}`,
      lastModified: entry.publishedAt ? new Date(entry.publishedAt) : new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${baseUrl}/mentorship`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/workshops`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/stack`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/book`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
