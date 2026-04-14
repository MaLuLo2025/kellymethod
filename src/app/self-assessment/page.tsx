import type { Metadata } from "next";
import SelfAssessment from "@/components/SelfAssessment";
import FadeIn from "@/components/motion/FadeIn";

export const metadata: Metadata = {
  title: "Self-Assessment",
  description:
    "A structured self-assessment for POTS symptoms. Not a diagnostic tool — a way to organize your symptom history before a clinician visit.",
};

export default function SelfAssessmentPage() {
  return (
    <>
      <section className="container-editorial pt-16 md:pt-20 pb-section-sm">
        <div className="max-w-prose mx-auto">
          <FadeIn>
            <p className="text-label uppercase text-ember font-sans font-semibold mb-8 tracking-widest">
              Self-assessment
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-serif text-display text-ink font-medium mb-8 leading-tight tracking-tight">
              Could this be POTS?
            </h1>
          </FadeIn>
          <FadeIn delay={0.25}>
            <p className="font-serif text-lead text-ink/75 italic leading-relaxed">
              A structured way to organize your symptom history before a clinician visit. It is not a diagnostic tool, and it does not tell you whether you have POTS. It helps you articulate what you&apos;re experiencing in a form that makes a conversation with a clinician more productive.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="container-editorial pb-section-sm">
        <SelfAssessment />
      </section>
    </>
  );
}
