import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          gap: 1,
        }}
      >
        {/* Mini TTB wordmark */}
        <div
          style={{
            fontSize: 9,
            fontWeight: 900,
            color: "#EFE9DD",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            fontFamily: "system-ui, sans-serif",
            lineHeight: 1,
          }}
        >
          TTB
        </div>
        {/* Rust underline */}
        <div
          style={{
            width: 18,
            height: 1.5,
            backgroundColor: "#A8431F",
            marginTop: 2,
          }}
        />
      </div>
    ),
    { ...size }
  );
}
