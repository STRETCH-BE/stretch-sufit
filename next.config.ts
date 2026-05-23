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
   * After /en/b2b, /en/dealers, /en/careers, /en/blog and their /ua
   * equivalents were built as real translated pages, the only redirects
   * left are:
   *
   * 1. /uk → /ua URL migration. The Ukrainian tree was renamed from /uk
   *    to /ua. This keeps old bookmarks and Google index entries working.
   *
   * 2. /cookies → /polityka-cookies (the actual PL route).
   *
   * 3. A few legacy spellings for the Polish slugs (in case anyone
   *    arrives via an old footer link from before the translated pages
   *    existed).
   *
   * All redirects are permanent (308 in Next.js terms).
   */
  async redirects() {
    return [
      // ─── Cookies path normalisation ───
      { source: "/cookies", destination: "/polityka-cookies", permanent: true },

      // ─── Legacy /uk spellings of the new routes (now /ua) ───
      // These are caught by the catch-all below but listed explicitly
      // first for clarity / to allow per-route overrides later.
      { source: "/uk/b2b", destination: "/ua/b2b", permanent: true },
      { source: "/uk/dileri", destination: "/ua/dileri", permanent: true },
      { source: "/uk/dealerzy", destination: "/ua/dileri", permanent: true },
      { source: "/uk/kariera", destination: "/ua/kariera", permanent: true },
      { source: "/uk/blog", destination: "/ua/blog", permanent: true },

      // Legacy /ua spellings that resolve to translated routes
      { source: "/ua/dealerzy", destination: "/ua/dileri", permanent: true },

      // ─── /uk → /ua URL migration (catch-all, must be last) ───
      { source: "/uk", destination: "/ua", permanent: true },
      { source: "/uk/:path*", destination: "/ua/:path*", permanent: true },
    ];
  },
};

export default nextConfig;
