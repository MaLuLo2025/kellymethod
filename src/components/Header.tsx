"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { href: "/what-is-pots", label: "What Is POTS?" },
  { href: "/diagnosis", label: "Diagnosis" },
  { href: "/articles", label: "Articles" },
  { href: "/subscribe", label: "Rounds" },
  { href: "/about", label: "About" },
] as const;

function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      width="48"
      height="30"
      viewBox="0 0 64 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={`text-forest ${className}`}
    >
      <path
        d="M2 38L20 8L32 24L44 12L62 38"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M8 38L24 14L32 26L40 18L56 38"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.4"
      />
    </svg>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-50 bg-offwhite transition-shadow duration-300 ${
        scrolled ? "shadow-sm border-b border-ink/5" : "border-b border-transparent"
      }`}
    >
      <div className="container-editorial flex items-center justify-between h-20 md:h-24">
        <Link
          href="/"
          className="flex items-center gap-3 no-underline hover:opacity-80 transition-opacity"
          aria-label="The Kelly Method — home"
        >
          <LogoMark />
          <span className="font-serif text-xl md:text-2xl text-ink tracking-tight font-medium">
            The Kelly Method
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-small text-ink/75 hover:text-forest no-underline font-sans tracking-tight transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 -mr-2 text-ink"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {mobileOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <nav
          id="mobile-menu"
          className="md:hidden bg-offwhite border-t border-ink/10 animate-fade-up"
          aria-label="Primary mobile"
        >
          <div className="container-editorial py-6 flex flex-col gap-4">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="text-lg text-ink/80 hover:text-forest no-underline font-serif py-2"
              >
                {label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
