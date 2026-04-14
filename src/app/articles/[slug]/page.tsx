import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ARTICLES, formatPublishedDate, formatReadingTime } from "@/lib/articles";
import FadeIn from "@/components/motion/FadeIn";
import ContourDivider from "@/components/ContourDivider";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = ARTICLES.find((a) => a.slug === params.slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.publishedOn,
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const article = ARTICLES.find((a) => a.slug === params.slug);
  if (!article) notFound();

  let MDXContent: React.ComponentType | null = null;
  try {
    const mod = await import(`@/content/articles/${params.slug}.mdx`);
    MDXContent = mod.default;
  } catch {
    notFound();
  }

  return (
    <>
      {/* ===== ARTICLE HEADER ===== */}
      <section className="container-editorial pt-16 md:pt-20 pb-section-sm">
        <div className="max-w-prose mx-auto">
          <FadeIn>
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 text-small text-ember font-sans font-medium hover:text-forest transition-colors no-underline mb-8"
            >
              <span aria-hidden="true">←</span> Back to articles
            </Link>
          </FadeIn>

          <FadeIn delay={0.05}>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-label uppercase text-ember font-sans font-semibold tracking-widest">
                {article.category}
              </span>
              <span className="text-micro text-stone">·</span>
              <span className="text-micro text-stone font-sans">
                {formatPublishedDate(article.publishedOn)}
              </span>
              <span className="text-micro text-stone">·</span>
              <span className="text-micro text-stone font-sans">
                {formatReadingTime(article.readingTimeMinutes)}
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="font-serif text-display text-ink font-medium mb-8 leading-tight tracking-tight">
              {article.title}
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="font-serif text-lead text-ink/75 italic leading-relaxed mb-12">
              {article.description}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ===== ARTICLE BODY ===== */}
      <section className="container-editorial pb-section-sm">
        <article className="max-w-prose mx-auto prose">
          {MDXContent && <MDXContent />}
        </article>
      </section>

      {/* ===== ARTICLE FOOTER ===== */}
      <section className="bg-forest text-offwhite py-section-sm">
        <div className="container-editorial">
          <div className="max-w-prose mx-auto">
            <FadeIn>
              <ContourDivider variant="mark" />
              <h2 className="font-serif text-h2 text-offwhite font-medium mb-6 mt-4 leading-tight">
                Keep reading.
              </h2>
              <p className="font-serif text-lead text-offwhite/85 italic leading-relaxed mb-8">
                The Kelly Method publishes carefully written work on POTS — the diagnosis, the science, and the experience of living with the condition. Subscribe to Rounds for new pieces and the occasional research note.
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/subscribe"
                  className="inline-flex items-center gap-2 px-7 py-4 bg-ember text-offwhite text-body font-sans font-medium tracking-tight rounded-sm hover:bg-ember-700 transition-colors no-underline shadow-sm"
                >
                  Subscribe to Rounds
                  <span aria-hidden="true">→</span>
                </Link>
                <Link
                  href="/articles"
                  className="inline-flex items-center gap-2 px-7 py-4 text-body text-offwhite font-sans font-medium tracking-tight border border-offwhite/40 hover:border-offwhite hover:bg-offwhite/5 rounded-sm transition-colors no-underline"
                >
                  More articles
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
