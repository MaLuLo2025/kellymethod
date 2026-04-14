import type { Metadata } from "next";
import Link from "next/link";
import ContourDivider from "@/components/ContourDivider";

export const metadata: Metadata = {
  title: "About",
  description:
    "About The Kelly Method — an editorial publication on POTS.",
};

export default function AboutPage() {
  return (
    <section className="container-editorial pt-20 md:pt-28 pb-section">
      <div className="max-w-prose">
        <p className="text-label uppercase text-forest font-sans mb-8">
          About
        </p>
        <h1 className="font-serif text-display text-ink font-medium mb-8 leading-tight">
          About The Kelly Method
        </h1>
        <p className="font-serif text-lead text-ink/75 italic mb-10 leading-relaxed">
          An editorial publication on Postural Orthostatic Tachycardia
          Syndrome. We publish to help patients, caregivers, and clinicians
          understand a condition that is common, serious, and consistently
          missed.
        </p>

        <div className="prose">
          <h2>What this is</h2>
          <p>
            The Kelly Method is a publication, not a clinic. We write about
            POTS — what it is, why it&apos;s hard to diagnose, how it gets
            treated, and what it&apos;s like to live with. Our job is to
            make the best available information legible to the people who
            need it most.
          </p>
          <p>
            We take our subject seriously. We cite our sources. We try to
            treat readers as intelligent adults navigating a hard situation,
            not as an audience to be marketed to.
          </p>

          <h2>Clinical authority</h2>
          <p>
            Content on this site is reviewed for clinical accuracy by{" "}
            <strong>Dr. Emma Kelly Stetler, DPT</strong>, who completed her
            doctoral training with residency experience at Mayo Clinic and a
            fellowship at the United States Olympic Training Center. Her
            work focuses on autonomic dysfunction and the specific
            challenges of diagnosing and treating POTS in athletes and
            highly active patients.
          </p>
          <p>
            Clinical review ensures that what we publish reflects current
            medical understanding. It does not create a patient-provider
            relationship between Dr. Stetler and our readers. For that,
            please see{" "}
            <Link href="/disclaimer">our medical disclaimer</Link>.
          </p>

          <h2>What we stand for</h2>
          <p>
            POTS is diagnosed late, often after patients have been told
            their symptoms are psychiatric. Many patients we&apos;ve spoken
            to were dismissed for years. The condition is treatable.
            Diagnosis is not — as a matter of basic medicine — difficult to
            establish. The fact that so many patients wait so long is a
            system failure, not a medical mystery.
          </p>
          <p>
            The Kelly Method exists to close that gap in one small way: by
            publishing the kind of writing that would have helped those
            patients arrive at a diagnosis faster.
          </p>

          <h2>What we&apos;re not</h2>
          <ul>
            <li>We are not a medical practice.</li>
            <li>
              We do not diagnose, treat, or prescribe. See{" "}
              <Link href="/disclaimer">our disclaimer</Link>.
            </li>
            <li>
              We do not sell supplements, devices, or services. We have no
              affiliate links and accept no sponsorship.
            </li>
            <li>
              We do not sell your data or share it with advertisers. See{" "}
              <Link href="/privacy">our privacy policy</Link>.
            </li>
          </ul>

          <h2>How this is funded</h2>
          <p>
            Currently: out of pocket. In the future, we may add a paid
            subscription tier for deeper clinical resources. We will never
            paywall the core educational content or the research summaries.
            The foundational pages on this site will always be free.
          </p>

          <h2>Contact</h2>
          <p>
            Story ideas, corrections, questions, or simply to tell us your
            experience:{" "}
            <a href="mailto:hello@kellymethod.com">hello@kellymethod.com</a>.
          </p>
        </div>

        <ContourDivider variant="mark" />

        <p className="text-body text-ink/80 italic font-serif text-center">
          &ldquo;For everyone standing up to POTS.&rdquo;
        </p>
      </div>
    </section>
  );
}
