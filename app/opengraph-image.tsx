import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Trade The Bar | Veteran Owned Sober Apparel";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: "#1C2416",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Top rust bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 8,
            backgroundColor: "#A8431F",
          }}
        />

        {/* TRADE */}
        <div
          style={{
            fontSize: 128,
            fontWeight: 900,
            color: "#EFE9DD",
            letterSpacing: "0.12em",
            lineHeight: 1,
            textTransform: "uppercase",
          }}
        >
          TRADE
        </div>

        {/* Rust separator */}
        <div
          style={{
            width: 560,
            height: 3,
            backgroundColor: "#A8431F",
            margin: "22px 0",
          }}
        />

        {/* THE BAR */}
        <div
          style={{
            fontSize: 128,
            fontWeight: 900,
            color: "#EFE9DD",
            letterSpacing: "0.12em",
            lineHeight: 1,
            textTransform: "uppercase",
          }}
        >
          THE BAR
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 22,
            color: "#EFE9DD",
            opacity: 0.38,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            marginTop: 52,
            textAlign: "center",
            maxWidth: 820,
          }}
        >
          FOR ATHLETES WHO TRADED ONE OBSESSION FOR ANOTHER.
        </div>

        {/* Coordinate — bottom right */}
        <div
          style={{
            position: "absolute",
            bottom: 36,
            right: 52,
            fontSize: 15,
            color: "#EFE9DD",
            opacity: 0.2,
            letterSpacing: "0.2em",
            fontFamily: "monospace",
          }}
        >
          32°42′N · 117°09′W
        </div>

        {/* Brand details — bottom left */}
        <div
          style={{
            position: "absolute",
            bottom: 36,
            left: 52,
            fontSize: 13,
            color: "#EFE9DD",
            opacity: 0.25,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          VETERAN OWNED · SOBER FOUNDED
        </div>
      </div>
    ),
    { ...size }
  );
}
