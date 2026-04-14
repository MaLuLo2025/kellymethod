import Link from "next/link";
import RoundsSignup from "@/components/RoundsSignup";
import HeroContour from "@/components/HeroContour";
import StatVisual from "@/components/StatVisual";
import AnimatedMark from "@/components/AnimatedMark";
import FadeIn from "@/components/motion/FadeIn";
import StaggerChildren, { StaggerItem } from "@/components/motion/StaggerChildren";
import CountUp from "@/components/motion/CountUp";
import { DIAGNOSIS_STATISTICS } from "@/lib/statistics";
import { getAllArticlesForDemo, formatReadingTime } from "@/lib/articles";

const STAT_VISUALS = ["years", "doctors", "arc-large", "arc-small"] as const;

export default function HomePage() {
  const articles = getAllArticlesForDemo().slice(0, 3);

  return (
    <>
      <section className="relative container-editorial pt-16 md:pt-20 pb-20 md:pb-24 overflow-hidden">
        <HeroContour />

        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          aria-hidden="true"
        >
          <AnimatedMark
            size={560}
            delay={0.3}
            duration={1.8}
            outerOpacity={0.10}
            innerOpacity={0.05}
          />
        </div>

        <div className="relative max-w-3xl">
          <FadeIn delay={0.1}>
            <h1 className="font-serif text-display text-ink font-medium mb-8 leading-tight tracking-tight">
              The average POTS patient sees seven doctors before getting diagnosed. Most are told their symptoms are psychiatric. Most are wrong.
            </h1>
          </FadeIn>
          <FadeIn delay={0.25}>
            <p className="font-serif text-lead text-ink/75 italic max-w-2xl mb-10 leading-relaxed">
              If your body races when you stand, if brain fog steals your days, if every test has come back &ldquo;normal&rdquo; — you may have POTS. Here&apos;s what it is, why it&apos;s missed, and what to do next.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="flex flex-wrap gap-4">
              <Link href="/diagnosis" className="inline-flex items-center gap-2 px-7 py-4 bg-ember text-offwhite text-body font-sans font-medium tracking-tight rounded-sm hover:bg-ember-700 transition-colors no-underline shadow-sm">
                Start with the diagnosis guide
                <span aria-hidden="true">→</span>
              </Link>
              <Link href="/what-is-pots" className="inline-flex items-center gap-2 px-7 py-4 text-body text-ink font-sans font-medium tracking-tight border border-ink/20 hover:border-forest hover:text-forest rounded-sm transition-colors no-underline">
                What is POTS?
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-forest-50 py-section-sm">
        <div className="container-editorial">
          <FadeIn>
            <div className="max-w-2xl mb-12">
              <p className="text-label uppercase text-ember font-sans font-semibold mb-4 tracking-widest">
                The diagnosis gap
              </p>
              <h2 className="font-serif text-h1 text-ink font-medium mb-6">
                POTS is one of the most consistently missed diagnoses in medicine.
              </h2>
              <p className="text-lead text-ink/75">
                The numbers below come from surveys of thousands of patients. They describe a system that, on average, takes years to recognize a treatable condition — one that can be measured at the bedside in ten minutes.
              </p>
            </div>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8" staggerDelay={0.15}>
            {DIAGNOSIS_STATISTICS.map((stat, i) => (
              <StaggerItem key={stat.label} className="border-t-2 border-ember pt-6">
                <p className="font-serif text-display-lg text-forest font-medium leading-none mb-2">
                  <CountUp value={stat.value} duration={1.4} />
                </p>
                <StatVisual kind={STAT_VISUALS[i]} />
                <p className="text-body text-ink font-medium mb-3">
                  {stat.label}
                </p>
                {stat.detail && (
                  <p className="text-small text-ink/70 mb-3 leading-relaxed">
                    {stat.detail}
                  </p>
                )}
                <p className="text-micro text-stone italic">
                  Source: {stat.source}
                </p>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <FadeIn delay={0.2}>
            <div className="mt-12 max-w-2xl">
              <Link href="/diagnosis" className="text-body text-ember font-semibold hover:text-forest inline-flex items-center gap-2 transition-colors">
                Read the full diagnosis guide <span aria-hidden="true">→</span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="container-editorial py-section-sm">
        <FadeIn>
          <div className="max-w-2xl mb-12">
            <p className="text-label uppercase text-ember font-sans font-semibold mb-4 tracking-widest">
              What you&apos;ll find here
            </p>
            <h2 className="font-serif text-h1 text-ink font-medium">
              A publication, not a pitch.
            </h2>
          </div>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-10" staggerDelay={0.15}>
          <StaggerItem>
            <div className="mb-5">
              <svg width="32" height="20" viewBox="0 0 64 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="text-forest">
                <path d="M2 38L20 8L32 24L44 12L62 38" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </div>
            <h3 className="font-serif text-h3 text-ink font-medium mb-4">Understand what POTS is.</h3>
            <p className="text-body text-ink/75 leading-relaxed mb-5">
              A medical explanation that trusts you with the details — written clearly, cited carefully, and reviewed by clinicians.
            </p>
            <Link href="/what-is-pots" className="text-small text-ember font-semibold hover:text-forest inline-flex items-center gap-2 transition-colors">
              Start here <span aria-hidden="true">→</span>
            </Link>
          </StaggerItem>

          <StaggerItem>
            <div className="mb-5">
              <svg width="32" height="20" viewBox="0 0 64 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="text-forest">
                <path d="M2 38L20 8L32 24L44 12L62 38" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <path d="M8 38L24 14L32 26L40 18L56 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.5"/>
              </svg>
            </div>
            <h3 className="font-serif text-h3 text-ink font-medium mb-4">Learn why diagnosis is hard.</h3>
            <p className="text-body text-ink/75 leading-relaxed mb-5">
              The honest story of how POTS gets missed, dismissed, or misattributed — and what patients can do to be heard.
            </p>
            <Link href="/diagnosis" className="text-small text-ember font-semibold hover:text-forest inline-flex items-center gap-2 transition-colors">
              Read the guide <span aria-hidden="true">→</span>
            </Link>
          </StaggerItem>

          <StaggerItem>
            <div className="mb-5">
              <svg width="32" height="20" viewBox="0 0 64 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="text-forest">
                <path d="M2 38L20 8L32 24L44 12L62 38" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <path d="M8 38L24 14L32 26L40 18L56 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.5"/>
                <path d="M14 38L28 18L32 28L36 22L50 38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.25"/>
              </svg>
            </div>
            <h3 className="font-serif text-h3 text-ink font-medium mb-4">Explore what treatment looks like.</h3>
            <p className="text-body text-ink/75 leading-relaxed mb-5">
              Lifestyle, medications, and the emerging science — organized by what the evidence actually supports, not by what&apos;s trending.
            </p>
            <Link href="/treatment" className="text-small text-ember font-semibold hover:text-forest inline-flex items-center gap-2 transition-colors">
              Survey treatments <span aria-hidden="true">→</span>
            </Link>
          </StaggerItem>
        </StaggerChildren>
      </section>

      <section className="bg-forest text-offwhite py-section-sm">
        <div className="container-editorial">
          <FadeIn>
            <div className="max-w-2xl">
              <p className="text-label uppercase text-ember font-sans font-semibold mb-4 tracking-widest">
                Rounds — the newsletter
              </p>
              <h2 className="font-serif text-h1 text-offwhite font-medium mb-6">
                A considered email on POTS research, patient experience, and the state of treatment.
              </h2>
              <p className="text-lead text-offwhite/80 mb-10 leading-relaxed">
                High value content. Sent regularly. An independent publication written for patients and clinicians.
              </p>
              <RoundsSignup variant="light" />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="container-editorial py-section-sm">
        <FadeIn>
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <p className="text-label uppercase text-ember font-sans font-semibold mb-4 tracking-widest">
                Recent writing
              </p>
              <h2 className="font-serif text-h1 text-ink font-medium">
                From the publication
              </h2>
            </div>
            <Link href="/articles" className="text-small text-ember font-semibold hover:text-forest inline-flex items-center gap-2 transition-colors">
              View all articles <span aria-hidden="true">→</span>
            </Link>
          </div>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8" staggerDelay={0.12}>
          {articles.map((article) => (
            <StaggerItem key={article.slug}>
              <Link href={`/articles/${article.slug}`} className="group flex flex-col no-underline border-t-2 border-ink/15 pt-5 hover:border-ember transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-label uppercase text-ember font-sans font-semibold tracking-widest">
                    {article.category}
                  </span>
                  <span className="text-micro text-stone">·</span>
                  <span className="text-micro text-stone font-sans">
                    {formatReadingTime(article.readingTimeMinutes)}
                  </span>
                </div>
                <h3 className="font-serif text-h3 text-ink group-hover:text-forest font-medium mb-4 leading-tight transition-colors">
                  {article.title}
                </h3>
                <p className="text-body text-ink/70 leading-relaxed">
                  {article.description}
                </p>
                <span className="mt-6 text-small text-ember group-hover:text-forest font-semibold inline-flex items-center gap-2 transition-colors">
                  Read <span aria-hidden="true">→</span>
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </section>
    </>
  );
}
