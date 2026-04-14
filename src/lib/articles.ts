export interface Article {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedOn: string;
  readingTimeMinutes: number;
  status: "published" | "draft";
}

export const ARTICLES: Article[] = [
  {
    slug: "if-youve-been-told-its-anxiety",
    title: "If you\u2019ve been told it\u2019s anxiety, read this",
    description:
      "Most POTS patients are told their symptoms are psychiatric before anyone checks their heart rate. Here\u2019s why it happens, what to ask for instead, and how to get the right test.",
    category: "Diagnosis",
    publishedOn: "2026-04-14",
    readingTimeMinutes: 12,
    status: "published",
  },
  {
    slug: "why-pots-is-missed",
    title: "Why POTS is missed: the diagnostic failure no one talks about",
    description:
      "Most POTS patients wait years for a diagnosis — not because the condition is rare, but because the system isn't built to catch it. What goes wrong, and what can change.",
    category: "Diagnosis",
    publishedOn: "2026-04-21",
    readingTimeMinutes: 14,
    status: "draft",
  },
  {
    slug: "salt-loading-evidence",
    title: "The evidence on salt loading in POTS",
    description:
      "Every POTS patient is told to eat more salt. But how much? What kind? And what does the research actually show? A careful look at the evidence.",
    category: "Treatment",
    publishedOn: "2026-04-28",
    readingTimeMinutes: 11,
    status: "draft",
  },
  {
    slug: "exercise-reconditioning-pots",
    title: "Exercise reconditioning protocols for POTS: what works",
    description:
      "The Levine protocol and its descendants. What the studies show, how to start safely, and why 'just exercise more' misses the point.",
    category: "Treatment",
    publishedOn: "2026-05-05",
    readingTimeMinutes: 16,
    status: "draft",
  },
];

export function getAllArticlesForDemo(): Article[] {
  return ARTICLES;
}

export function formatReadingTime(minutes: number): string {
  return `${minutes} min read`;
}

export function formatPublishedDate(dateString: string): string {
  const date = new Date(dateString + "T12:00:00");
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
