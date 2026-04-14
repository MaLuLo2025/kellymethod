import type { Metadata } from "next";
import Link from "next/link";
import RoundsSignup from "@/components/RoundsSignup";
import ContourDivider from "@/components/ContourDivider";

export const metadata: Metadata = {
  title: "Subscribe to Rounds",
  description:
    "A regular, independent publication for POTS patients with help, information, and resources.",
};

export default function SubscribePage() {
  return (
    <>
      <section className="container-editorial pt-20 md:pt-28 pb-section">
        <div className="max-w-2xl">
          <p className="text-label uppercase text-forest font-sans mb-8">
            The Kelly Method — Rounds
          </p>
          <h1 className="font-serif text-display text-ink font-medium mb-8 leading-tight">
            A regular, independent publication for POTS patients with help,
            information, and resources.
          </h1>
          <p className="font-serif text-lead text-ink/75 italic mb-10 leading-relaxed">
            High value content. Sent regularly. An independent publication
            written for patients and clinicians.
          </p>
          <RoundsSignup variant="dark" />
        </div>
      </section>

      <ContourDivider variant="mark" />

      <section className="container-editorial pb-section">
        <div className="max-w-2xl space-y-10">
          <div>
            <h2 className="font-serif text-h2 text-ink font-medium mb-4">
              What you&apos;ll get
            </h2>
            <p className="text-body text-ink/80 leading-relaxed">
              Each issue includes a short original essay on something in POTS
              — a new paper, a shift in treatment thinking, a story from the
              patient community — followed by a handful of shorter links and
              notes. Twelve to fifteen minutes of reading, edited carefully,
              published regularly.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-h2 text-ink font-medium mb-4">
              What you won&apos;t get
            </h2>
            <ul className="text-body text-ink/80 leading-relaxed space-y-3 pl-6 list-disc">
              <li>No sponsored content. No affiliate links.</li>
              <li>No supplement pushing or miracle cures.</li>
              <li>No marketing emails from third parties.</li>
              <li>No data sharing. Your email stays with us.</li>
              <li>No pressure. Unsubscribe with one click, any time.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-h2 text-ink font-medium mb-4">
              Who writes it
            </h2>
            <p className="text-body text-ink/80 leading-relaxed">
              Rounds is written by the editorial team at The Kelly Method and
              reviewed for clinical accuracy by Dr. Emma Kelly Stetler, DPT —
              trained at Mayo Clinic and the United States Olympic Training
              Center. We don&apos;t practice medicine through this newsletter.
              We write about it.
            </p>
            <p className="text-body text-ink/80 mt-4">
              <Link href="/about" className="text-forest font-medium">
                More about The Kelly Method →
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
