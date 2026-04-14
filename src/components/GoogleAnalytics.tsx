"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";
import { useCookieConsent } from "./CookieConsentContext";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

function PageviewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { consent } = useCookieConsent();

  useEffect(() => {
    if (consent !== "accepted") return;
    if (!GA_MEASUREMENT_ID) return;
    if (typeof window.gtag !== "function") return;

    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "");
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }, [pathname, searchParams, consent]);

  return null;
}

export default function GoogleAnalytics() {
  const { consent } = useCookieConsent();

  // No measurement ID configured — GA never loads. Lets us ship the architecture
  // before the actual property exists.
  if (!GA_MEASUREMENT_ID) return null;

  // Strict consent: GA does not load at all until the user accepts.
  if (consent !== "accepted") return null;

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            anonymize_ip: true,
            cookie_flags: 'SameSite=None;Secure',
          });
        `}
      </Script>
      <Suspense fallback={null}>
        <PageviewTracker />
      </Suspense>
    </>
  );
}
