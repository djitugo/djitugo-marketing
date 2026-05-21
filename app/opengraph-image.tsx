import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Djitugo — Where Creativity Meets Technology";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1a1716",
          color: "#f5f1ec",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          fontFamily: "system-ui, -apple-system, sans-serif"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 20,
            opacity: 0.7,
            textTransform: "uppercase",
            letterSpacing: 2
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 999,
                background: "#f5f1ec",
                color: "#1a1716",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                fontSize: 22
              }}
            >
              D
            </div>
            <span>Djitugo / Bali, Indonesia</span>
          </div>
          <div>Est. 2020</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              fontSize: 140,
              fontWeight: 600,
              letterSpacing: -5,
              lineHeight: 0.95,
              display: "flex"
            }}
          >
            <span>djitugo</span>
            <span style={{ color: "#d4cfca" }}>.</span>
          </div>
          <div
            style={{
              fontSize: 40,
              lineHeight: 1.25,
              color: "#c5beba",
              maxWidth: 980,
              display: "flex"
            }}
          >
            Where creativity meets technology. A Bali-based digital marketing
            studio for ambitious brands.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 20,
            opacity: 0.65,
            textTransform: "uppercase",
            letterSpacing: 2
          }}
        >
          <div>djitugomarketing.com</div>
          <div>hello@djitugo.com</div>
        </div>
      </div>
    ),
    size
  );
}
