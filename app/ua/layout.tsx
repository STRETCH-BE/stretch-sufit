/**
 * Ukrainian locale layout — /ua/*
 * File path: /app/ua/layout.tsx
 *
 * The root layout renders <html lang="pl"> for the whole site (nested
 * layouts cannot change the <html> element in the App Router). This layout
 * corrects the language signal for the Ukrainian tree two ways:
 *
 *   1. An inline script sets document.documentElement.lang before paint —
 *      picked up by Google (which renders JS), screen readers, and
 *      translation tooling.
 *   2. A lang="uk" wrapper (display: contents, so it has no box and no
 *      layout impact) marks the actual content for crawlers that only
 *      read the raw HTML. ("uk" is the ISO 639-1 code for Ukrainian.)
 */

export default function UaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.lang="uk";`,
        }}
      />
      <div lang="uk" style={{ display: "contents" }}>
        {children}
      </div>
    </>
  );
}
