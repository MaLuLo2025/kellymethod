import type { Metadata } from "next";
import Link from "next/link";
import ContourDivider from "@/components/ContourDivider";

export const metadata: Metadata = {
  title: "What is POTS?",
  description:
    "A medical explanation of Postural Orthostatic Tachycardia Syndrome.",
};

export default function WhatIsPotsPage() {
  return (
    <>
      <section className="container-editorial pt-20 md:pt-28 pb-section">
        <div className="max-w-prose">
          <p className="text-label uppercase text-forest font-sans mb-8">
            Understanding the condition
          </p>
          <h1 className="font-serif text-display text-ink font-medium mb-8 leading-tight">
            What is POTS?
          </h1>
          <p className="font-serif text-lead text-ink/75 italic mb-10 leading-relaxed">
            A medical explanation written for patients, caregivers, and
            anyone trying to understand what&apos;s happening in the body
            when someone stands up.
          </p>

          <div className="prose">
            <p className="text-stone italic">
              This page is being finalized for review. The complete article
              covers: the autonomic nervous system and what POTS does to it;
              the diagnostic criteria (the 30-bpm rule and the 10-minute
              window); the major subtypes — hyperadrenergic, neuropathic,
              hypovolemic; common symptoms beyond heart rate; why POTS is a
              syndrome, not a single disease; and the research on
              prevalence, onset, and natural course.
            </p>
            <p className="text-stone italic">
              Expected publication: end of this week.
            </p>
          </div>

          <ContourDivider variant="subtle" className="my-16" />

          <p className="text-body text-ink/75">
            In the meantime, our{" "}
            <Link href="/diagnosis" className="text-forest font-medium">
              diagnosis guide
            </Link>{" "}
            covers the practical question most readers arrive with: how does
            POTS get diagnosed, and why does it take so long?
          </p>
        </div>
      </section>
    </>
  );
}
