import { ImageResponse } from "next/og";
import { getPlaybookEntry } from "@/lib/playbook";

export const runtime = "edge";

export const alt = "The Agentic Playbook - Marcin Wojtala";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

interface ImageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Image({ params }: ImageProps) {
  const { slug } = await params;
  const entry = getPlaybookEntry(slug);

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          background: "linear-gradient(135deg, #021c21 0%, #0d0d0d 50%, #0d0d0d 100%)",
          padding: "60px 80px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "60px",
            left: "80px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              background: "#ffffff",
              color: "#0d0d0d",
              padding: "8px 16px",
              borderRadius: "20px",
              fontSize: "16px",
              fontWeight: 600,
              fontFamily: "system-ui",
            }}
          >
            Agentic Playbook #{entry?.number ?? ""}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >
          <p
            style={{
              color: "#86868b",
              fontSize: "24px",
              fontFamily: "system-ui",
              margin: 0,
            }}
          >
            by Marcin Wojtala
          </p>
          <h1
            style={{
              color: "#ededed",
              fontSize: "68px",
              fontWeight: 700,
              fontFamily: "system-ui",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              margin: 0,
              maxWidth: "900px",
            }}
          >
            {entry?.title ?? "The Agentic Playbook"}
          </h1>
          <p
            style={{
              color: "#86868b",
              fontSize: "26px",
              fontFamily: "system-ui",
              margin: 0,
              maxWidth: "850px",
              lineHeight: 1.35,
            }}
          >
            {entry?.subtitle ?? "AI-assisted development, quality, and engineering leadership."}
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
