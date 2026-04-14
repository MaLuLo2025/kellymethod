"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "km_cookie_consent";
type ConsentChoice = "accepted" | "rejected";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      const t = setTimeout(() => setVisible(true), 600);
      return () => clearTimeout(t);
    }
    if (stored === "accepted") {
      initializeAnalytics();
    }
  }, []);

  function setConsent(choice: ConsentChoice) {
    localStorage.setItem(STORAGE_KEY, choice);
    setVisible(false);
    if (choice === "accepted") {
      initializeAnalytics();
    }
  }

  function initializeAnalytics() {
    // GA4 hook — wired in Round 1.5 when Measurement ID is provided.
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-banner-heading"
      aria-describedby="cookie-banner-description"
      className="fixed bottom-0 inset-x-0 z-50 bg-offwhite border-t border-ink/15 shadow-card animate-fade-up"
    >
      <div className="container-editorial py-5 md:py-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
        <div className="flex-1">
          <h2 id="cookie-banner-heading" className="sr-only">Cookie preferences</h2>
          <p id="cookie-banner-description" className="text-small text-ink/85 max-w-3xl">
            We use cookies to understand how the site is used so we can improve it. We don&apos;t sell your data or share it with advertisers.{" "}
            <Link href="/cookies" className="text-forest underline decoration-forest/40 hover:decoration-forest">
              Read the cookie policy.
            </Link>
          </p>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          <button
            type="button"
            onClick={() => setConsent("rejected")}
            className="px-5 py-2.5 text-small font-sans text-ink/80 hover:text-ink border border-ink/20 hover:border-ink/40 rounded-sm transition-colors"
          >
            Reject
          </button>
          <button
            type="button"
            onClick={() => setConsent("accepted")}
            className="px-5 py-2.5 text-small font-sans font-medium text-offwhite bg-forest hover:bg-forest-800 rounded-sm transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
