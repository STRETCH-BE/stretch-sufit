/**
 * Favicon — /icon (32×32 PNG).
 * File path: /app/icon.tsx
 *
 * Generated at build time via Next.js ImageResponse, same design language
 * as /app/apple-icon.tsx. Google shows this favicon next to search results,
 * so shipping one improves SERP appearance and brand recognition.
 */

import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0a0a0a",
          borderRadius: 6,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            fontFamily: "system-ui, sans-serif",
            fontWeight: 900,
            fontSize: 20,
            color: "#ffffff",
            letterSpacing: -1,
            display: "flex",
            alignItems: "center",
            lineHeight: 1,
          }}
        >
          s
          <div
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#e1101a",
              marginLeft: 1,
              marginTop: 11,
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
