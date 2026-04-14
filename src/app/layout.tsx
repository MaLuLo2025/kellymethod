import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kellymethod.com"),
  title: {
    default: "The Kelly Method",
    template: "%s | The Kelly Method",
  },
  description:
    "Evidence-based POTS education. Research summaries, treatment frameworks, and practical guidance for patients and caregivers navigating Postural Orthostatic Tachycardia Syndrome.",
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans text-ink bg-offwhite">{children}</body>
    </html>
  );
}
