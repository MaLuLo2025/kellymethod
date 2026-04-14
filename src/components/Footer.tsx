import Link from "next/link";
import RoundsSignup from "./RoundsSignup";

const FOOTER_LINKS = {
  explore: [
    { href: "/what-is-pots", label: "What Is POTS?" },
    { href: "/diagnosis", label: "Diagnosis" },
    { href: "/treatment", label: "Treatment" },
    { href: "/comorbidities", label: "Comorbidities" },
    { href: "/articles", label: "Articles" },
  ],
  about: [
    { href: "/about", label: "About The Kelly Method" },
    { href: "/subscribe", label: "Rounds — weekly newsletter" },
    { href: "/resources", label: "Resources for patients" },
  ],
  legal: [
    { href: "/disclaimer", label: "Medical disclaimer" },
    { href: "/privacy", label: "Privacy policy" },
    { href: "/terms", label: "Terms of service" },
    { href: "/cookies", label: "Cookie policy" },
  ],
};

function LogoMarkLight({ className = "" }: { className?: string }) {
  return (
    <svg
      width="56"
      height="35"
      viewBox="0 0 64 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
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
        opacity="0.5"
      />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest text-offwhite mt-section">
      <div className="container-editorial py-section-sm">
        <div className="max-w-2xl mb-16">
          <div className="mb-4">
            <LogoMarkLight className="text-offwhite" />
          </div>
          <h2 className="font-serif text-h2 text-offwhite mb-4 font-medium">
            Rounds
          </h2>
          <p className="text-offwhite/80 text-lead mb-6 max-w-xl">
            A weekly email on POTS research, patient experience, and the state of treatment. Clear, careful, and free.
          </p>
          <RoundsSignup variant="light" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-section-sm pt-12 border-t border-offwhite/15">
          <div>
            <h3 className="text-label uppercase text-offwhite/60 mb-4 font-sans">Explore</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.explore.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-small text-offwhite/85 hover:text-offwhite no-underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-label uppercase text-offwhite/60 mb-4 font-sans">About</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.about.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-small text-offwhite/85 hover:text-offwhite no-underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-label uppercase text-offwhite/60 mb-4 font-sans">Legal</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.legal.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-small text-offwhite/85 hover:text-offwhite no-underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-label uppercase text-offwhite/60 mb-4 font-sans">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:hello@kellymethod.com" className="text-small text-offwhite/85 hover:text-offwhite no-underline">
                  hello@kellymethod.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-section-sm pt-12 border-t border-offwhite/15 max-w-3xl">
          <p className="text-small text-offwhite/70 italic font-serif">
            Clinical review by Dr. Emma Kelly Stetler, DPT — Mayo Clinic, United States Olympic Training Center. The Kelly Method is independent of any hospital, medical practice, or commercial interest.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-offwhite/15 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-micro text-offwhite/60 max-w-2xl">
            The content on this site is for educational purposes and is not medical advice.{" "}
            <Link href="/disclaimer" className="text-offwhite/80 hover:text-offwhite underline decoration-offwhite/40 hover:decoration-offwhite">
              Read the full disclaimer.
            </Link>
          </p>
          <p className="text-micro text-offwhite/50">© {year} The Kelly Method</p>
        </div>
      </div>
    </footer>
  );
}
