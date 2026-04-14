"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type ConsentState = "unknown" | "accepted" | "declined";

interface CookieConsentContextValue {
  consent: ConsentState;
  acceptConsent: () => void;
  declineConsent: () => void;
  resetConsent: () => void;
}

const CookieConsentContext = createContext<CookieConsentContextValue | null>(null);

const STORAGE_KEY = "kellymethod-cookie-consent";

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<ConsentState>("unknown");

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "accepted" || stored === "declined") {
        setConsent(stored);
      }
    } catch {
      // localStorage unavailable (private mode, etc.) — stay in "unknown"
    }
  }, []);

  function persistConsent(value: ConsentState) {
    try {
      if (value === "unknown") {
        localStorage.removeItem(STORAGE_KEY);
      } else {
        localStorage.setItem(STORAGE_KEY, value);
      }
    } catch {
      // Silent — consent will live in memory for this session only
    }
  }

  function acceptConsent() {
    setConsent("accepted");
    persistConsent("accepted");
  }

  function declineConsent() {
    setConsent("declined");
    persistConsent("declined");
  }

  function resetConsent() {
    setConsent("unknown");
    persistConsent("unknown");
  }

  return (
    <CookieConsentContext.Provider
      value={{ consent, acceptConsent, declineConsent, resetConsent }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) {
    throw new Error("useCookieConsent must be used within CookieConsentProvider");
  }
  return ctx;
}
