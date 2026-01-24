import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Marcin Wojtala - Engineering Leader";
export const size = {
  width: 1200,
  height: 600,
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
        {/* Decorative elements */}
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
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#ffffff",
            }}
          />
          <span
            style={{
              color: "#86868b",
              fontSize: "18px",
              fontFamily: "system-ui",
            }}
          >
            marcinwojtala.vercel.app
          </span>
        </div>

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <span
            style={{
              color: "#ffffff",
              fontSize: "20px",
              fontFamily: "system-ui",
              letterSpacing: "0.05em",
            }}
          >
            Engineering Leader
          </span>
          <h1
            style={{
              color: "#ededed",
              fontSize: "72px",
              fontWeight: 700,
              fontFamily: "system-ui",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              margin: 0,
            }}
          >
            Marcin Wojtala
          </h1>
          <p
            style={{
              color: "#86868b",
              fontSize: "28px",
              fontFamily: "system-ui",
              margin: 0,
              maxWidth: "700px",
            }}
          >
            Quality Architect &bull; Global Teams &bull; Innovation Catalyst
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
