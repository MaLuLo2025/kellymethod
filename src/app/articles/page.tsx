import type { Metadata } from "next";
import Link from "next/link";
import {
  getAllArticlesForDemo,
  formatReadingTime,
  formatPublishedDate,
} from "@/lib/articles";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Writing from The Kelly Method on POTS research, diagnosis, treatment, and patient experience.",
};

export default function ArticlesIndexPage() {
  const articles = getAllArticlesForDemo();

  return (
    <section className="container-editorial pt-20 md:pt-28 pb-section">
      <div className="max-w-3xl mb-16">
        <p className="text-label uppercase text-forest font-sans mb-8">
          The publication
        </p>
        <h1 className="font-serif text-display text-ink font-medium mb-8 leading-tight">
          Articles
        </h1>
        <p className="font-serif text-lead text-ink/75 italic leading-relaxed">
          Original writing on POTS: the research, the diagnostic process, the
          evidence on treatment, and the reality of living with dysautonomia.
          Carefully written, carefully sourced, and reviewed for clinical
          accuracy.
        </p>
      </div>

      <div className="space-y-12 max-w-3xl">
        {articles.map((article) => (
          <article
            key={article.slug}
            className="border-t border-ink/15 pt-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-label uppercase text-forest font-sans">
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
              {article.status === "draft" && (
                <>
                  <span className="text-micro text-stone">·</span>
                  <span className="text-micro text-ember font-sans italic">
                    coming soon
                  </span>
                </>
              )}
            </div>
            <h2 className="font-serif text-h2 text-ink font-medium mb-4 leading-tight">
              {article.status === "published" ? (
                <Link
                  href={`/articles/${article.slug}`}
                  className="no-underline hover:text-forest transition-colors"
                >
                  {article.title}
                </Link>
              ) : (
                <span>{article.title}</span>
              )}
            </h2>
            <p className="text-body text-ink/75 leading-relaxed mb-4">
              {article.description}
            </p>
            {article.status === "published" && (
              <Link
                href={`/articles/${article.slug}`}
                className="text-small text-forest font-medium hover:text-forest-800 inline-flex items-center gap-2"
              >
                Read <span aria-hidden="true">→</span>
              </Link>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
