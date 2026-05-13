/**
 * Apple touch icon — /apple-icon.png
 * File path: /app/apple-icon.tsx
 *
 * Generates a 180×180 PNG via Next.js ImageResponse at build time.
 * iOS Safari uses this for home-screen bookmarks, share previews, etc.
 *
 * Why TSX (not a static PNG file): the build pipeline rasterizes this
 * once at deploy time so the resulting PNG is cached on Vercel's edge.
 * Same approach gives us perfect 2× and 3× rendering with zero asset
 * management — change the design, redeploy, all users see the new icon.
 */

import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0a0a0a",
          borderRadius: 32,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            fontFamily: "system-ui, sans-serif",
            fontWeight: 900,
            fontSize: 100,
            color: "#ffffff",
            letterSpacing: -4,
            display: "flex",
            alignItems: "center",
            lineHeight: 1,
          }}
        >
          s
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: "50%",
              background: "#e1101a",
              marginLeft: 4,
              marginTop: 56,
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
