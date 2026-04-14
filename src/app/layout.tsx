import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kellymethod.com"),
  title: {
    default: "The Kelly Method",
    template: "%s · The Kelly Method",
  },
  description:
    "Evidence-based education for patients and caregivers navigating Postural Orthostatic Tachycardia Syndrome (POTS).",
  keywords: [
    "POTS",
    "Postural Orthostatic Tachycardia Syndrome",
    "dysautonomia",
    "autonomic nervous system",
    "long COVID",
    "Ehlers-Danlos syndrome",
    "orthostatic intolerance",
    "chronic illness",
  ],
  authors: [{ name: "The Kelly Method" }],
  creator: "The Kelly Method",
  publisher: "The Kelly Method",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.kellymethod.com",
    siteName: "The Kelly Method",
    title: "The Kelly Method",
    description:
      "Evidence-based education for patients with POTS. Clear answers, careful sources, no marketing.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Kelly Method",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Kelly Method",
    description: "Evidence-based education for patients with POTS.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={lora.variable}>
      <body className="min-h-screen flex flex-col bg-offwhite text-ink antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
