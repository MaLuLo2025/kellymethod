import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie policy",
  description:
    "What cookies we use, why, and how to control them.",
};

export default function CookiesPage() {
  return (
    <article className="container-editorial pt-20 md:pt-28 pb-section">
      <div className="max-w-prose">
        <p className="text-label uppercase text-forest font-sans mb-8">
          The Kelly Method
        </p>
        <h1 className="font-serif text-display text-ink font-medium mb-10 leading-tight">
          Cookie policy
        </h1>

        <div className="prose">
          <p className="text-lead text-ink/80 font-serif italic leading-relaxed mb-10">
            Cookies are small files websites place in your browser. We use
            them sparingly and tell you what they do.
          </p>

          <h2>What we use</h2>

          <h3>Essential cookies</h3>
          <p>
            One cookie (or rather, one entry in your browser&apos;s local
            storage) remembers your cookie preference so we don&apos;t ask
            you again on every visit. If you reject cookies, this is the
            only thing stored.
          </p>

          <h3>Analytics cookies (Google Analytics 4)</h3>
          <p>
            If you accept cookies, Google Analytics places a handful of
            cookies in your browser to measure traffic and understand how
            people use the site. These cookies do things like:
          </p>
          <ul>
            <li>Distinguish your visit from other visits</li>
            <li>
              Remember whether you&apos;ve been here before (so we know how
              many unique visitors we have)
            </li>
            <li>
              Track which pages you read and in what order (so we know
              what&apos;s useful)
            </li>
          </ul>
          <p>
            We configure Google Analytics to anonymize IP addresses. Google
            does not receive enough information to identify you personally
            from our cookies.
          </p>

          <h2>What we don&apos;t use</h2>
          <ul>
            <li>No advertising cookies</li>
            <li>No retargeting pixels</li>
            <li>No social media tracking pixels</li>
            <li>No third-party marketing cookies</li>
            <li>No fingerprinting or cross-site tracking</li>
          </ul>

          <h2>How to control cookies</h2>
          <p>
            When you first visit the site, a banner asks whether you accept
            cookies. You can:
          </p>
          <ul>
            <li>
              <strong>Accept</strong> — analytics cookies load and we
              receive aggregate data about your visit.
            </li>
            <li>
              <strong>Reject</strong> — analytics cookies do not load. The
              site works identically; we just don&apos;t see your visit in
              our analytics.
            </li>
          </ul>
          <p>
            To change your choice later, clear your site data for
            kellymethod.com in your browser settings. The banner will
            reappear on your next visit.
          </p>
          <p>
            You can also block all cookies in your browser settings. The
            site will still work.
          </p>

          <h2>More detail</h2>
          <p>
            For how we handle the data collected through cookies, see our{" "}
            <Link href="/privacy">Privacy policy</Link>.
          </p>

          <hr />
          <p className="text-small text-stone italic">
            Last updated: April 2026.
          </p>
        </div>
      </div>
    </article>
  );
}
