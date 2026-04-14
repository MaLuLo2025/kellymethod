import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Medical disclaimer",
  description:
    "How to read The Kelly Method responsibly, and why nothing on this site is a substitute for your doctor.",
};

export default function DisclaimerPage() {
  return (
    <article className="container-editorial pt-20 md:pt-28 pb-section">
      <div className="max-w-prose">
        <p className="text-label uppercase text-forest font-sans mb-8">
          The Kelly Method
        </p>
        <h1 className="font-serif text-display text-ink font-medium mb-10 leading-tight">
          Medical disclaimer
        </h1>

        <div className="prose">
          <p className="text-lead text-ink/80 font-serif italic leading-relaxed mb-10">
            We write carefully, we cite our sources, and we try to be useful.
            But none of what you read here is medical advice for you,
            specifically. Your body is unique. Your history is unique. Real
            treatment decisions require a doctor or qualified clinician who
            knows those things.
          </p>

          <p>
            The Kelly Method is an educational publication about Postural
            Orthostatic Tachycardia Syndrome (POTS) and related conditions.
            Our goal is to help patients and caregivers understand what POTS
            is, why it is so often missed, and what the current evidence says
            about managing it.
          </p>

          <p>
            Reading our writing is not the same as being examined, diagnosed,
            or treated. Here is how to use the site responsibly.
          </p>

          <h2>If you think you may have POTS</h2>
          <p>
            Take what you read as a starting point for a conversation with a
            clinician — not as a conclusion. POTS overlaps with other
            conditions, and conditions that look like POTS can be something
            else entirely. A diagnosis requires testing and a qualified
            provider.
          </p>

          <h2>If you already have a diagnosis</h2>
          <p>
            Do not change, start, or stop a medication based on anything you
            read here. Medication choices in POTS are highly individual and
            often involve trade-offs that depend on your other conditions,
            medications, and history. Call your doctor first.
          </p>

          <h2>If you are in crisis</h2>
          <p>
            If you are having a medical emergency, call 911 (in the United
            States) or your local emergency number. If you are in mental
            health crisis or considering self-harm, call or text 988 in the
            U.S. for the Suicide and Crisis Lifeline.
          </p>

          <h2>What we are and what we are not</h2>
          <p>
            The Kelly Method is an independent publication. It is not a
            hospital, a clinical practice, a telemedicine service, or a
            pharmacy. We do not provide diagnoses, treatment, prescriptions,
            or individualized medical advice. We do not have a
            patient-provider relationship with anyone reading this site.
          </p>

          <p>
            Our content is written by editors and reviewed for clinical
            accuracy by{" "}
            <Link href="/about">Dr. Emma Kelly Stetler, DPT</Link>. Clinical
            review confirms that content reflects current medical
            understanding; it does not constitute a provider-patient
            relationship with any reader.
          </p>

          <h2>Formal disclaimer</h2>
          <p className="text-small text-ink/70">
            The information provided on this website is for general
            informational and educational purposes only and is not intended
            as, nor should it be construed as, medical advice, diagnosis, or
            treatment. No content on this site should be used as a substitute
            for direct medical advice from your physician or other qualified
            healthcare provider. Always seek the advice of a qualified
            healthcare provider with any questions you may have regarding a
            medical condition, and never disregard professional medical
            advice or delay seeking it because of something you have read on
            this website. Reliance on any information provided by this
            website, its employees, contractors, contributors, or other
            visitors is solely at your own risk. The Kelly Method makes no
            representation and assumes no responsibility for the accuracy of
            information contained on or available through this site, and
            such information is subject to change without notice. You are
            encouraged to confirm any information obtained from or through
            this website with other sources and to review all information
            regarding any medical condition or treatment with your
            physician. If you think you may have a medical emergency, call
            911 or your local emergency number immediately.
          </p>

          <h2>Links to other sites</h2>
          <p>
            We occasionally link to resources elsewhere on the internet —
            research papers, patient organizations, reference works. We do
            not control those sites and are not responsible for their
            content or accuracy.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this disclaimer can be sent to{" "}
            <a href="mailto:hello@kellymethod.com">
              hello@kellymethod.com
            </a>
            .
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
