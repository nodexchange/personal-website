import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "The Agentic Playbook - Martin Wojtala";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
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
        {/* Top badge */}
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
            Thought Leadership
          </div>
        </div>

        {/* Author info */}
        <div
          style={{
            position: "absolute",
            top: "60px",
            right: "80px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span
            style={{
              color: "#86868b",
              fontSize: "18px",
              fontFamily: "system-ui",
            }}
          >
            by Martin Wojtala
          </span>
        </div>

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <h1
            style={{
              color: "#ededed",
              fontSize: "80px",
              fontWeight: 700,
              fontFamily: "system-ui",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              margin: 0,
            }}
          >
            The Agentic
            <br />
            Playbook
          </h1>
          <p
            style={{
              color: "#86868b",
              fontSize: "26px",
              fontFamily: "system-ui",
              margin: 0,
              maxWidth: "800px",
              lineHeight: 1.4,
            }}
          >
            Practical insights on AI-assisted development, team dynamics,
            and the future of engineering.
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
