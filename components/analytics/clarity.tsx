"use client";

/**
 * Microsoft Clarity — heatmaps + session recordings.
 * File path: /components/analytics/clarity.tsx
 *
 * Free tool. Loads only when both the env var is set and analytics consent
 * has been granted.
 */

import Script from "next/script";
import { useConsent } from "./consent-provider";

const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID;

export function Clarity() {
  const { consent } = useConsent();
  if (!CLARITY_ID || !consent.analytics) return null;

  return (
    <Script
      id="ms-clarity"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${CLARITY_ID}");
        `,
      }}
    />
  );
}
