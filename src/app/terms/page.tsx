import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of service",
  description: "Terms governing your use of The Kelly Method.",
};

export default function TermsPage() {
  return (
    <article className="container-editorial pt-20 md:pt-28 pb-section">
      <div className="max-w-prose">
        <p className="text-label uppercase text-forest font-sans mb-8">
          The Kelly Method
        </p>
        <h1 className="font-serif text-display text-ink font-medium mb-10 leading-tight">
          Terms of service
        </h1>

        <div className="prose">
          <p className="text-lead text-ink/80 font-serif italic leading-relaxed mb-10">
            By using this site, you agree to these terms. They&apos;re written
            to be readable. If any part is unclear, write to us.
          </p>

          <h2>What you&apos;re using</h2>
          <p>
            The Kelly Method is an educational publication about Postural
            Orthostatic Tachycardia Syndrome (POTS) and related conditions,
            operated at kellymethod.com. &ldquo;We,&rdquo; &ldquo;us,&rdquo;
            and &ldquo;The Kelly Method&rdquo; refer to the operators of this
            site. &ldquo;You&rdquo; refers to anyone reading, subscribing, or
            otherwise using the site.
          </p>

          <h2>Acceptance of terms</h2>
          <p>
            By accessing this site, you accept these terms. If you
            don&apos;t accept them, please don&apos;t use the site.
          </p>

          <h2>Not medical advice</h2>
          <p>
            Nothing on this site is medical advice. We publish educational
            content; we do not diagnose, treat, or establish a
            patient-provider relationship with readers. See our{" "}
            <Link href="/disclaimer">Medical disclaimer</Link> for the full
            statement — it is an essential part of these terms.
          </p>

          <h2>Our content</h2>
          <p>
            The writing, images, and layout on this site are the intellectual
            property of The Kelly Method unless otherwise marked. You are
            welcome to:
          </p>
          <ul>
            <li>Read it, save it, and share links to it</li>
            <li>
              Quote short passages for non-commercial purposes with
              attribution to The Kelly Method and a link to the source page
            </li>
            <li>
              Reference or cite our articles in your own educational, academic,
              or journalistic work
            </li>
          </ul>
          <p>You are not permitted to:</p>
          <ul>
            <li>Republish full articles elsewhere without our permission</li>
            <li>
              Use our content to train machine-learning models or generate
              derivative commercial content
            </li>
            <li>Claim our work as your own</li>
          </ul>

          <h2>Your conduct</h2>
          <p>When you use the site, please don&apos;t:</p>
          <ul>
            <li>
              Attempt to break, disrupt, or gain unauthorized access to the
              site or its infrastructure
            </li>
            <li>
              Submit fraudulent or malicious content through our forms
            </li>
            <li>
              Scrape the site in ways that overload our servers or violate
              our robots.txt
            </li>
            <li>Impersonate us or other readers</li>
          </ul>

          <h2>Links to other sites</h2>
          <p>
            We link to external websites — research papers, patient
            organizations, news articles. We don&apos;t control those sites
            and aren&apos;t responsible for their content, accuracy, or
            practices.
          </p>

          <h2>No warranty</h2>
          <p>
            We publish in good faith and take care to be accurate, but we
            make no warranty that the site or its content is error-free,
            complete, or suitable for any particular purpose. The site is
            provided &ldquo;as is.&rdquo;
          </p>

          <h2>Limitation of liability</h2>
          <p>
            To the extent permitted by law, The Kelly Method and its
            contributors are not liable for any direct, indirect,
            incidental, or consequential damages arising from your use of
            the site or reliance on its content. This limitation applies
            regardless of the legal theory under which damages are sought.
          </p>

          <h2>Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless The Kelly Method, its
            operators, and its contributors from any claims arising out of
            your misuse of the site, your violation of these terms, or your
            violation of any law or third-party right.
          </p>

          <h2>Changes to the site and to these terms</h2>
          <p>
            We may change the site, its content, or these terms at any
            time. When we change the terms materially, we&apos;ll update the
            date at the bottom of this page. Continued use of the site
            after changes means you accept the updated terms.
          </p>

          <h2>Termination</h2>
          <p>
            We reserve the right to limit or terminate access to the site
            for anyone who violates these terms.
          </p>

          <h2>Governing law</h2>
          <p>
            These terms are governed by the laws of the United States and,
            where applicable, the state in which The Kelly Method operates.
            Any disputes will be resolved in courts located in that
            jurisdiction.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms:{" "}
            <a href="mailto:hello@kellymethod.com">hello@kellymethod.com</a>.
          </p>
          <p>
            See also our <Link href="/privacy">Privacy policy</Link>,{" "}
            <Link href="/cookies">Cookie policy</Link>, and{" "}
            <Link href="/disclaimer">Medical disclaimer</Link>.
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
