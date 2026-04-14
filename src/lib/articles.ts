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
    slug: "how-pots-is-diagnosed",
    title: "How POTS Is Diagnosed in Ten Minutes",
    description:
      "The active stand test confirms POTS at the bedside in ten minutes, with no equipment beyond a blood pressure cuff. Here\u2019s how it works, what the numbers mean, and how to ask for it.",
    category: "Diagnosis",
    publishedOn: "2026-04-15",
    readingTimeMinutes: 8,
    status: "published",
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
