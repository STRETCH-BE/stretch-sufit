import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },

  /**
   * Redirects.
   *
   * Order matters — specific paths must come before catch-alls.
   *
   * Three jobs:
   *
   * 1. Send old EN/UA /b2b, /dealers, /careers, /blog URLs (which were
   *    in the old footer but never built as routes) to the real PL pages
   *    they correspond to: /wspolpraca-b2b, /dealerzy, /kariera, /blog.
   *
   * 2. /uk → /ua URL migration. The Ukrainian tree was renamed; this
   *    keeps old bookmarks, Google index entries, and ad links working.
   *
   * 3. /cookies → /polityka-cookies (the actual PL route).
   *
   * All redirects are permanent (308 in Next.js terms) — these URLs
   * will not come back.
   */
  async redirects() {
    return [
      // ─── Old broken EN routes → real PL pages ───
      { source: "/en/b2b", destination: "/wspolpraca-b2b", permanent: true },
      { source: "/en/dealers", destination: "/dealerzy", permanent: true },
      { source: "/en/careers", destination: "/kariera", permanent: true },
      { source: "/en/blog", destination: "/blog", permanent: true },
      { source: "/en/projects", destination: "/realizacje", permanent: true },

      // ─── Old broken /uk routes (pre-migration + never-built) → PL ───
      { source: "/uk/b2b", destination: "/wspolpraca-b2b", permanent: true },
      { source: "/uk/dileri", destination: "/dealerzy", permanent: true },
      { source: "/uk/dealerzy", destination: "/dealerzy", permanent: true },
      { source: "/uk/kariera", destination: "/kariera", permanent: true },
      { source: "/uk/blog", destination: "/blog", permanent: true },
      { source: "/uk/projekty", destination: "/realizacje", permanent: true },

      // ─── /ua/* dead routes (same pattern, post-migration) → PL ───
      { source: "/ua/b2b", destination: "/wspolpraca-b2b", permanent: true },
      { source: "/ua/dileri", destination: "/dealerzy", permanent: true },
      { source: "/ua/dealerzy", destination: "/dealerzy", permanent: true },
      { source: "/ua/kariera", destination: "/kariera", permanent: true },
      { source: "/ua/blog", destination: "/blog", permanent: true },
      { source: "/ua/projekty", destination: "/realizacje", permanent: true },

      // ─── Cookies path normalisation ───
      { source: "/cookies", destination: "/polityka-cookies", permanent: true },

      // ─── /uk → /ua URL migration (catch-all, must be last) ───
      // Real /uk URLs that have /ua equivalents (e.g. /uk/pytannya,
      // /uk/rishennya/pvc-stelya) get forwarded so old bookmarks
      // and indexed URLs keep working.
      { source: "/uk", destination: "/ua", permanent: true },
      { source: "/uk/:path*", destination: "/ua/:path*", permanent: true },
    ];
  },
};

export default nextConfig;
