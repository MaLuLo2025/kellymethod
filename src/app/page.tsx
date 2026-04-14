import Link from "next/link";
import ContourDivider from "@/components/ContourDivider";
import RoundsSignup from "@/components/RoundsSignup";
import { DIAGNOSIS_STATISTICS } from "@/lib/statistics";
import { getAllArticlesForDemo, formatReadingTime } from "@/lib/articles";

export default function HomePage() {
  const articles = getAllArticlesForDemo().slice(0, 3);

  return (
    <>
      {/* ========== HERO ========== */}
      <section className="container-editorial pt-20 md:pt-28 pb-section">
        <div className="max-w-3xl">
          <p className="text-label uppercase text-forest font-sans mb-8">
            An editorial publication on POTS
          </p>
          <h1 className="font-serif text-display text-ink font-medium mb-8 leading-tight tracking-tight">
            The average POTS patient sees seven doctors before getting
            diagnosed. Most are told their symptoms are psychiatric. Most are
            wrong.
          </h1>
          <p className="font-serif text-lead text-ink/75 italic max-w-2xl mb-10 leading-relaxed">
            If your body races when you stand, if brain fog steals your days,
            if every test has come back &ldquo;normal&rdquo; — you may have
            POTS. Here&apos;s what it is, why it&apos;s missed, and what to do
            next.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/diagnosis"
              className="inline-flex items-center gap-2 px-7 py-4 bg-forest text-offwhite text-body font-sans font-medium tracking-tight rounded-sm hover:bg-forest-800 transition-colors no-underline"
            >
              Start with the diagnosis guide
              <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/what-is-pots"
              className="inline-flex items-center gap-2 px-7 py-4 text-body text-ink font-sans font-medium tracking-tight border border-ink/20 hover:border-forest hover:text-forest rounded-sm transition-colors no-underline"
            >
              What is POTS?
            </Link>
          </div>
        </div>
      </section>

      <ContourDivider variant="subtle" />

      {/* ========== DIAGNOSIS STATISTICS ========== */}
      <section className="container-editorial py-section">
        <div className="max-w-2xl mb-16">
          <p className="text-label uppercase text-forest font-sans mb-4">
            The diagnosis gap
          </p>
          <h2 className="font-serif text-h1 text-ink font-medium mb-6">
            POTS is one of the most consistently missed diagnoses in medicine.
          </h2>
          <p className="text-lead text-ink/75">
            The numbers below come from surveys of thousands of patients. They
            describe a system that, on average, takes years to recognize a
            treatable condition — one that can be measured at the bedside in
            ten minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {DIAGNOSIS_STATISTICS.map((stat) => (
            <div key={stat.label} className="border-t border-forest pt-6">
              <p className="font-serif text-display-lg text-forest font-medium leading-none mb-4">
                {stat.value}
              </p>
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
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-2xl">
          <Link
            href="/diagnosis"
            className="text-body text-forest font-medium hover:text-forest-800 inline-flex items-center gap-2"
          >
            Read the full diagnosis guide{" "}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <ContourDivider variant="mark" />

      {/* ========== THREE-COLUMN: WHAT YOU'LL FIND HERE ========== */}
      <section className="container-editorial py-section bg-offwhite">
        <div className="max-w-2xl mb-16">
          <p className="text-label uppercase text-forest font-sans mb-4">
            What you&apos;ll find here
          </p>
          <h2 className="font-serif text-h1 text-ink font-medium">
            A publication, not a pitch.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
          <div>
            <div className="mb-5">
              <svg
                width="32"
                height="20"
                viewBox="0 0 64 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="text-forest"
              >
                <path
                  d="M2 38L20 8L32 24L44 12L62 38"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </div>
            <h3 className="font-serif text-h3 text-ink font-medium mb-4">
              Understand what POTS is.
            </h3>
            <p className="text-body text-ink/75 leading-relaxed mb-5">
              A medical explanation that trusts you with the details — written
              clearly, cited carefully, and reviewed by clinicians.
            </p>
            <Link
              href="/what-is-pots"
              className="text-small text-forest font-medium hover:text-forest-800 inline-flex items-center gap-2"
            >
              Start here <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div>
            <div className="mb-5">
              <svg
                width="32"
                height="20"
                viewBox="0 0 64 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="text-forest"
              >
                <path
                  d="M2 38L20 8L32 24L44 12L62 38"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                <path
                  d="M8 38L24 14L32 26L40 18L56 38"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  opacity="0.5"
                />
              </svg>
            </div>
            <h3 className="font-serif text-h3 text-ink font-medium mb-4">
              Learn why diagnosis is hard.
            </h3>
            <p className="text-body text-ink/75 leading-relaxed mb-5">
              The honest story of how POTS gets missed, dismissed, or
              misattributed — and what patients can do to be heard.
            </p>
            <Link
              href="/diagnosis"
              className="text-small text-forest font-medium hover:text-forest-800 inline-flex items-center gap-2"
            >
              Read the guide <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div>
            <div className="mb-5">
              <svg
                width="32"
                height="20"
                viewBox="0 0 64 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="text-forest"
              >
                <path
                  d="M2 38L20 8L32 24L44 12L62 38"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                <path
                  d="M8 38L24 14L32 26L40 18L56 38"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  opacity="0.5"
                />
                <path
                  d="M14 38L28 18L32 28L36 22L50 38"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  opacity="0.25"
                />
              </svg>
            </div>
            <h3 className="font-serif text-h3 text-ink font-medium mb-4">
              Explore what treatment looks like.
            </h3>
            <p className="text-body text-ink/75 leading-relaxed mb-5">
              Lifestyle, medications, and the emerging science — organized by
              what the evidence actually supports, not by what&apos;s
              trending.
            </p>
            <Link
              href="/treatment"
              className="text-small text-forest font-medium hover:text-forest-800 inline-flex items-center gap-2"
            >
              Survey treatments <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <ContourDivider variant="subtle" />

      {/* ========== ROUNDS SIGNUP ========== */}
      <section className="container-editorial py-section">
        <div className="max-w-2xl">
          <p className="text-label uppercase text-forest font-sans mb-4">
            Rounds — the weekly newsletter
          </p>
          <h2 className="font-serif text-h1 text-ink font-medium mb-6">
            A weekly email on POTS research, patient experience, and the state
            of treatment.
          </h2>
          <p className="text-lead text-ink/75 mb-10 leading-relaxed">
            Every Sunday. Carefully written, carefully sourced. No marketing,
            no data selling, no sponsored content.
          </p>
          <RoundsSignup variant="dark" />
        </div>
      </section>

      <ContourDivider variant="mark" />

      {/* ========== LATEST ARTICLES ========== */}
      <section className="container-editorial py-section">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-4">
          <div>
            <p className="text-label uppercase text-forest font-sans mb-4">
              Recent writing
            </p>
            <h2 className="font-serif text-h1 text-ink font-medium">
              From the publication
            </h2>
          </div>
          <Link
            href="/articles"
            className="text-small text-forest font-medium hover:text-forest-800 inline-flex items-center gap-2"
          >
            View all articles <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="group flex flex-col no-underline border-t border-ink/15 pt-5 hover:border-forest transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-label uppercase text-forest font-sans">
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
              <span className="mt-6 text-small text-forest font-medium inline-flex items-center gap-2">
                Read <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
