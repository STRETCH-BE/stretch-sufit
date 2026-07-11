/**
 * English locale layout — /en/*
 * File path: /app/en/layout.tsx
 *
 * The root layout renders <html lang="pl"> for the whole site (nested
 * layouts cannot change the <html> element in the App Router). This layout
 * corrects the language signal for the English tree two ways:
 *
 *   1. An inline script sets document.documentElement.lang before paint —
 *      picked up by Google (which renders JS), screen readers, and
 *      translation tooling.
 *   2. A lang="en" wrapper (display: contents, so it has no box and no
 *      layout impact) marks the actual content for crawlers that only
 *      read the raw HTML.
 */

export default function EnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.lang="en";`,
        }}
      />
      <div lang="en" style={{ display: "contents" }}>
        {children}
      </div>
    </>
  );
}
