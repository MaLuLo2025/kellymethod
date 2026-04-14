import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "What we collect, how we use it, and our commitments on data handling.",
};

export default function PrivacyPage() {
  return (
    <article className="container-editorial pt-20 md:pt-28 pb-section">
      <div className="max-w-prose">
        <p className="text-label uppercase text-forest font-sans mb-8">
          The Kelly Method
        </p>
        <h1 className="font-serif text-display text-ink font-medium mb-10 leading-tight">
          Privacy policy
        </h1>

        <div className="prose">
          <p className="text-lead text-ink/80 font-serif italic leading-relaxed mb-10">
            We collect the minimum we need to run the site and send a
            newsletter. We don&apos;t sell your data. We don&apos;t share it
            with advertisers. This page tells you exactly what we keep and
            why.
          </p>

          <h2>What we collect</h2>

          <h3>If you subscribe to Rounds</h3>
          <p>
            When you enter your email address to subscribe to our newsletter,
            we store that address with our email service provider (Kit,
            formerly ConvertKit). We also store the date you subscribed and
            the page from which you subscribed, so we can understand which
            parts of the site are useful to readers.
          </p>
          <p>
            We do not ask for your name, age, medical history, or any other
            personal information to subscribe.
          </p>

          <h3>If you browse the site</h3>
          <p>
            We use Google Analytics 4 to understand how readers use the site
            — which articles are read, how visitors arrive, what devices they
            use. Google Analytics places cookies in your browser to do this.
          </p>
          <p>
            We configure Google Analytics to anonymize IP addresses, which
            prevents Google from associating your visit with a specific
            person or household.
          </p>
          <p>
            If you reject cookies in our banner, Google Analytics does not
            load and we collect no analytics data about your visit.
          </p>

          <h3>If you contact us</h3>
          <p>
            When you email us, we keep the message in our inbox. We reply to
            you, and we may keep the conversation for reference.
          </p>

          <h2>What we don&apos;t do</h2>
          <ul>
            <li>
              We do not sell your email address, identity, or browsing data
              to anyone, ever.
            </li>
            <li>
              We do not share your data with advertising networks, data
              brokers, or marketing platforms beyond the services described
              above.
            </li>
            <li>
              We do not use your data to build advertising profiles or
              retarget you across the internet.
            </li>
            <li>
              We do not allow third-party trackers, pixels, or analytics
              beyond Google Analytics.
            </li>
          </ul>

          <h2>Who processes your data</h2>
          <p>We share data only with providers that help us run the site:</p>
          <ul>
            <li>
              <strong>Vercel</strong> hosts this website. When you visit, your
              browser communicates with Vercel servers. Vercel may keep
              technical logs (IP address, request time, browser type) for
              security and reliability purposes.
            </li>
            <li>
              <strong>Cloudflare</strong> manages our domain and email
              forwarding. When someone emails us at an address ending in
              kellymethod.com, Cloudflare routes that email to our inbox.
            </li>
            <li>
              <strong>Kit (ConvertKit)</strong> stores our newsletter
              subscriber list and sends our emails.
            </li>
            <li>
              <strong>Google Analytics</strong> processes anonymized analytics
              data when you accept cookies.
            </li>
          </ul>
          <p>
            Each of these providers has its own privacy practices. We chose
            them because their commitments are consistent with ours.
          </p>

          <h2>Your rights</h2>
          <p>You can:</p>
          <ul>
            <li>
              <strong>Unsubscribe</strong> from Rounds at any time by
              clicking the unsubscribe link at the bottom of any email. When
              you unsubscribe, your address is removed from our active list.
            </li>
            <li>
              <strong>Ask us what we have</strong> about you. Email{" "}
              <a href="mailto:hello@kellymethod.com">
                hello@kellymethod.com
              </a>{" "}
              and we&apos;ll tell you.
            </li>
            <li>
              <strong>Ask us to delete it</strong>. Same address. We&apos;ll
              confirm when it&apos;s done.
            </li>
            <li>
              <strong>Reject analytics cookies</strong> through our cookie
              banner. If you change your mind, clear your browser&apos;s site
              data for this site and the banner will reappear.
            </li>
          </ul>

          <h2>Children</h2>
          <p>
            The Kelly Method is not directed at children under 13 and we do
            not knowingly collect personal information from them. If you
            believe a child has given us personal information, please
            contact us.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            We may update this policy as the site evolves. Material changes
            will be announced in Rounds. The date at the bottom of this page
            reflects the last update.
          </p>

          <h2>Questions</h2>
          <p>
            Write to{" "}
            <a href="mailto:hello@kellymethod.com">hello@kellymethod.com</a>.
            We read everything.
          </p>
          <p>
            See also our{" "}
            <Link href="/cookies">Cookie policy</Link>,{" "}
            <Link href="/terms">Terms of service</Link>, and{" "}
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
