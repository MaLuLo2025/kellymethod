"use client";

import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useCookieConsent } from "./CookieConsentContext";

export default function CookieBanner() {
  const { consent, acceptConsent, declineConsent } = useCookieConsent();
  const shouldReduceMotion = useReducedMotion();

  // Only show the banner if the user hasn't made a choice yet.
  const isVisible = consent === "unknown";

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: shouldReduceMotion ? 0 : 80, opacity: shouldReduceMotion ? 1 : 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: shouldReduceMotion ? 0 : 80, opacity: shouldReduceMotion ? 1 : 0 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.4,
            ease: [0.4, 0, 0.2, 1],
          }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-forest text-offwhite border-t border-offwhite/15 shadow-lg"
          role="dialog"
          aria-label="Cookie consent"
        >
          <div className="container-editorial py-5 md:py-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6">
              <div className="flex-1 max-w-3xl">
                <p className="text-small text-offwhite/90 leading-relaxed font-sans">
                  We use a small number of cookies to understand how readers use the site
                  and to improve it over time. Nothing personal, no third-party advertising,
                  no data sold. See our{" "}
                  <Link
                    href="/cookies"
                    className="underline decoration-offwhite/50 hover:decoration-offwhite text-offwhite"
                  >
                    cookies policy
                  </Link>
                  {" "}for details.
                </p>
              </div>
              <div className="flex gap-3 flex-shrink-0">
                <button
                  type="button"
                  onClick={declineConsent}
                  className="px-5 py-2.5 text-small font-sans font-medium text-offwhite/80 hover:text-offwhite border border-offwhite/30 hover:border-offwhite/60 rounded-sm transition-colors whitespace-nowrap"
                >
                  Decline
                </button>
                <button
                  type="button"
                  onClick={acceptConsent}
                  className="px-5 py-2.5 text-small font-sans font-medium bg-ember text-offwhite hover:bg-ember-700 rounded-sm transition-colors whitespace-nowrap shadow-sm"
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
