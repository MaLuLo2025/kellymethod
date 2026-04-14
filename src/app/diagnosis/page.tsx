import type { Metadata } from "next";
import Link from "next/link";
import ContourDivider from "@/components/ContourDivider";
import { DIAGNOSIS_STATISTICS } from "@/lib/statistics";

export const metadata: Metadata = {
  title: "Diagnosis",
  description:
    "Why POTS takes years to diagnose, and what patients can do to be heard.",
};

export default function DiagnosisPage() {
  return (
    <>
      <section className="container-editorial pt-20 md:pt-28 pb-section">
        <div className="max-w-prose">
          <p className="text-label uppercase text-forest font-sans mb-8">
            The diagnosis guide
          </p>
          <h1 className="font-serif text-display text-ink font-medium mb-8 leading-tight">
            Why POTS takes years to diagnose — and what to do about it.
          </h1>
          <p className="font-serif text-lead text-ink/75 italic mb-10 leading-relaxed">
            Most POTS patients wait four to six years before they get a name
            for what&apos;s wrong. This guide is about why — and about what
            patients can do to move a diagnosis forward.
          </p>

          <div className="prose">
            <p className="text-stone italic">
              This page is being finalized for review. The complete guide
              covers: what it feels like to be undiagnosed; why primary care
              misses POTS so consistently; the 77% problem (being told
              it&apos;s psychiatric); the active stand test and the tilt
              table test; how to prepare for a specialist appointment; what
              to bring, what to ask, what to push back on; finding a
              clinician who knows POTS; and what to do when insurance
              doesn&apos;t cover the specialists who do.
            </p>
            <p className="text-stone italic">
              Expected publication: end of next week.
            </p>
          </div>

          <ContourDivider variant="subtle" className="my-16" />

          <h2 className="font-serif text-h2 text-ink font-medium mb-6">
            The diagnosis gap, in numbers
          </h2>
          <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
            {DIAGNOSIS_STATISTICS.map((stat) => (
              <div
                key={stat.label}
                className="border-t border-forest pt-5"
              >
                <p className="font-serif text-h1 text-forest font-medium leading-none mb-3">
                  {stat.value}
                </p>
                <p className="text-body text-ink font-medium mb-2">
                  {stat.label}
                </p>
                {stat.detail && (
                  <p className="text-small text-ink/70 mb-2 leading-relaxed">
                    {stat.detail}
                  </p>
                )}
                <p className="text-micro text-stone italic">
                  Source: {stat.source}
                </p>
              </div>
            ))}
          </div>

          <p className="text-body text-ink/75">
            Also see:{" "}
            <Link href="/what-is-pots" className="text-forest font-medium">
              What is POTS?
            </Link>{" "}
            for the medical background, and{" "}
            <Link href="/articles" className="text-forest font-medium">
              our articles
            </Link>{" "}
            for shorter pieces on specific parts of the diagnosis path.
          </p>
        </div>
      </section>
    </>
  );
}
