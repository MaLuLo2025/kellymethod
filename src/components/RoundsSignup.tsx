"use client";

import { useState } from "react";

interface RoundsSignupProps {
  variant?: "dark" | "light";
}

export default function RoundsSignup({ variant = "dark" }: RoundsSignupProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const isDark = variant === "dark";

  if (status === "success") {
    return (
      <div className={`rounded-lg p-8 ${isDark ? "bg-forest text-white" : "bg-offwhite text-ink"}`}>
        <p className="font-serif text-lg">
          You&apos;re in. Watch your inbox for the next issue of Rounds.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`rounded-lg p-8 ${isDark ? "bg-forest" : "bg-offwhite border border-ink/10"}`}
    >
      <p className={`font-serif text-lg mb-4 ${isDark ? "text-white" : "text-ink"}`}>
        Subscribe to <strong>Rounds</strong> — our weekly email.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          required
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-4 py-3 rounded-md text-ink bg-white border border-ink/10 placeholder:text-stone/50 focus:outline-none focus:ring-2 focus:ring-ember"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="px-6 py-3 rounded-md bg-ember text-white font-medium hover:bg-ember/90 transition-colors disabled:opacity-60"
        >
          {status === "loading" ? "Subscribing…" : "Subscribe"}
        </button>
      </div>
      {status === "error" && (
        <p className="text-sm mt-3 text-red-400">
          Something went wrong. Please try again.
        </p>
      )}
      <p className={`text-xs mt-4 ${isDark ? "text-white/60" : "text-stone"}`}>
        No spam. Unsubscribe any time.{" "}
        <a href="/privacy" className={isDark ? "text-white/80 underline" : "text-forest underline"}>
          Privacy policy
        </a>
      </p>
    </form>
  );
}
