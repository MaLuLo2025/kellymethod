import type { Metadata } from "next";
import Link from "next/link";
import ContourDivider from "@/components/ContourDivider";
import FadeIn from "@/components/motion/FadeIn";

export const metadata: Metadata = {
  title: "About",
  description:
    "An independent editorial publication on Postural Orthostatic Tachycardia Syndrome. Written for patients and clinicians, reviewed for clinical accuracy, accountable to readers.",
};

export default function AboutPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="container-editorial pt-16 md:pt-20 pb-section-sm">
        <div className="max-w-prose">
          <FadeIn>
            <p className="text-label uppercase text-ember font-sans font-semibold mb-8 tracking-widest">
              About
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-serif text-display text-ink font-medium mb-8 leading-tight tracking-tight">
              An independent publication on POTS.
            </h1>
          </FadeIn>
          <FadeIn delay={0.25}>
            <div className="font-serif text-lead text-ink/80 italic leading-relaxed space-y-4">
              <p>
                The Kelly Method publishes careful, thoroughly sourced writing about Postural Orthostatic Tachycardia Syndrome — for the patients, families, and clinicians who are trying to understand a condition that is common, measurable, treatable, and consistently missed.
              </p>
              <p>
                This page explains what we publish, who stands behind it, and how the publication is funded. It is also the place where we make explicit the commitments that guide the work.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== WHY THIS EXISTS ===== */}
      <section className="bg-forest-50 py-section-sm">
        <div className="container-editorial">
          <div className="max-w-prose">
            <FadeIn>
              <p className="text-label uppercase text-ember font-sans font-semibold mb-4 tracking-widest">
                Why this exists
              </p>
              <h2 className="font-serif text-h1 text-ink font-medium mb-8 leading-tight">
                The diagnosis gap is not a medical mystery. It is a publishing gap.
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="prose">
                <p>
                  POTS affects an estimated one to three million Americans. The average patient consults seven doctors and waits four to six years for an accurate diagnosis. Most are told, at some point along the way, that their symptoms are psychiatric. Most of those diagnoses are wrong.
                </p>
                <p>
                  This is not because the condition is exotic. It is because the information needed to recognize and navigate it has not been consistently available in the forms patients and clinicians actually use — in plain, careful writing that takes the condition seriously without either oversimplifying it or drowning it in jargon.
                </p>
                <p>
                  The Kelly Method was founded to help close that gap. Not by inventing new research, but by translating what researchers and experienced clinicians already know into a form that readers can actually use.
                </p>
                <p>
                  The measure of the project is simple: does a patient who reads this publication leave with a clearer picture of their condition and more agency in their medical care? If yes, we are doing the work correctly. If not, we should be doing it differently.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== WHAT WE PUBLISH ===== */}
      <section className="container-editorial py-section-sm">
        <div className="max-w-prose">
          <FadeIn>
            <p className="text-label uppercase text-ember font-sans font-semibold mb-4 tracking-widest">
              What we publish
            </p>
            <h2 className="font-serif text-h1 text-ink font-medium mb-8 leading-tight">
              Editorial standards.
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="prose">
              <p>
                Every page on this site is written and edited according to the same standards. They are worth stating openly.
              </p>

              <h3>We cite our sources.</h3>
              <p>
                Statistical claims are attributed to the studies or patient surveys that produced them. Clinical claims reflect the current state of the research. When we rely on clinical experience rather than published studies, we say so.
              </p>

              <h3>We distinguish what is established from what is uncertain.</h3>
              <p>
                POTS research is moving quickly, and honest writing about the condition has to acknowledge where the science is firm and where it is still being worked out. When the answer to a question is &ldquo;we don&apos;t know yet,&rdquo; we say that rather than improvising certainty.
              </p>

              <h3>We write for intelligent adults.</h3>
              <p>
                Readers who land on this site are often dealing with a serious medical condition and have usually already done significant reading on their own. We assume they can handle specific clinical terminology and precise information. We explain what needs explaining and trust readers to ask when they need more.
              </p>

              <h3>We do not give medical advice.</h3>
              <p>
                Nothing we publish is a substitute for a clinician who knows a patient&apos;s history. Our job is to help readers understand what is known about POTS and navigate the medical system more effectively. It is not to diagnose, prescribe, or direct treatment decisions. Every page carries{" "}
                <Link href="/disclaimer" className="text-ember">
                  our full medical disclaimer
                </Link>
                .
              </p>

              <h3>We publish corrections.</h3>
              <p>
                When we get something wrong — and over time, we will — we correct it openly. A note on the updated page will describe what changed and why. Readers who notice errors can reach us at{" "}
                <a href="mailto:hello@kellymethod.com" className="text-ember">
                  hello@kellymethod.com
                </a>
                .
              </p>

              <h3>We do not publish sponsored content or accept advertising.</h3>
              <p>
                The publication is editorially independent and has no commercial relationships with pharmaceutical companies, device manufacturers, supplement makers, or clinical practices. We do not use affiliate links. Our obligation is to readers, not to sponsors.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== WHO'S BEHIND IT ===== */}
      <section className="bg-forest-50 py-section-sm">
        <div className="container-editorial">
          <div className="max-w-prose">
            <FadeIn>
              <p className="text-label uppercase text-ember font-sans font-semibold mb-4 tracking-widest">
                Who&apos;s behind it
              </p>
              <h2 className="font-serif text-h1 text-ink font-medium mb-8 leading-tight">
                Clinical authority and editorial direction.
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="prose">
                <p>
                  Content on this site is reviewed for clinical accuracy by <strong>Dr. Emma Kelly Stetler, DPT</strong>, who completed her training at Mayo Clinic and the United States Olympic Training Center.
                </p>
                <p>
                  A fuller introduction to Dr. Stetler — including her clinical focus, her work with POTS patients, and her role in the publication — will appear on this page in fall 2026, when she formally joins the editorial side of the project.
                </p>
                <p>
                  In the meantime, her role in the publication is to ensure that what we publish reflects current medical understanding. Clinical review does not create a patient-provider relationship between Dr. Stetler and any reader. For the reasons that relationship exists only in a clinical setting, see{" "}
                  <Link href="/disclaimer" className="text-ember">
                    our medical disclaimer
                  </Link>
                  .
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== HOW WE'RE FUNDED ===== */}
      <section className="container-editorial py-section-sm">
        <div className="max-w-prose">
          <FadeIn>
            <p className="text-label uppercase text-ember font-sans font-semibold mb-4 tracking-widest">
              How we&apos;re funded
            </p>
            <h2 className="font-serif text-h1 text-ink font-medium mb-8 leading-tight">
              Independence in practice.
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="prose">
              <p>
                A publication&apos;s editorial independence is only as strong as the structure behind it. Readers are entitled to know how the work is funded, because it affects what gets published and what doesn&apos;t.
              </p>
              <p>
                The Kelly Method is currently funded out of pocket by its founder. We have no commercial sponsors, no grants from pharmaceutical or device companies, and no advertising relationships. We do not participate in affiliate programs. We have no financial interest in any clinic, laboratory, or treatment provider that our writing references.
              </p>
              <p>
                In the future, we may offer a paid subscription tier for deeper clinical resources — for example, detailed protocols, extended research summaries, or structured guides for clinicians. If we do, the foundational educational content of this site will remain free and unchanged. Core pages — the explanation of what POTS is, the diagnostic guide, the resources for patients navigating the medical system — are and will remain available to anyone who needs them.
              </p>
              <p>
                What we will not do: advertising, sponsored content, data selling, affiliate marketing, or any other arrangement that creates a financial incentive to publish something other than what serves readers. These commitments are stated plainly because they are the boundary of what makes this publication useful.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== CONTACT AND CLOSING ===== */}
      <section className="bg-forest text-offwhite py-section-sm">
        <div className="container-editorial">
          <div className="max-w-prose">
            <FadeIn>
              <ContourDivider variant="mark" />
              <h2 className="font-serif text-h1 text-offwhite font-medium mb-8 mt-4 leading-tight">
                Contact.
              </h2>
              <div className="font-serif text-lead text-offwhite/85 italic leading-relaxed space-y-5">
                <p>
                  Story ideas, corrections, reader experiences, or questions for the editors can be sent to{" "}
                  <a
                    href="mailto:hello@kellymethod.com"
                    className="text-offwhite underline decoration-offwhite/50 hover:decoration-offwhite"
                  >
                    hello@kellymethod.com
                  </a>
                  . We read everything that comes in, and we reply to nearly all of it.
                </p>
                <p>
                  Patients who want to share their diagnostic journey, specialists who want to contribute clinical expertise, and researchers with work worth writing about are particularly welcome to write. The publication is small enough that a thoughtful email gets a thoughtful response.
                </p>
                <p className="text-offwhite not-italic font-normal">
                  For everyone standing up to POTS.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="mt-16 flex flex-wrap gap-4">
                <Link
                  href="/subscribe"
                  className="inline-flex items-center gap-2 px-7 py-4 bg-ember text-offwhite text-body font-sans font-medium tracking-tight rounded-sm hover:bg-ember-700 transition-colors no-underline shadow-sm"
                >
                  Subscribe to Rounds
                  <span aria-hidden="true">→</span>
                </Link>
                <Link
                  href="/diagnosis"
                  className="inline-flex items-center gap-2 px-7 py-4 text-body text-offwhite font-sans font-medium tracking-tight border border-offwhite/40 hover:border-offwhite hover:bg-offwhite/5 rounded-sm transition-colors no-underline"
                >
                  Read the diagnosis guide
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
