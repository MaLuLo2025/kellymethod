"use client";

import { useState } from "react";

interface RoundsSignupProps {
  variant?: "light" | "dark";
  placeholder?: string;
  className?: string;
}

export default function RoundsSignup({
  variant = "dark",
  placeholder = "your@email.com",
  className = "",
}: RoundsSignupProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || status === "submitting") return;

    setStatus("submitting");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "website" }),
      });

      if (res.ok) {
        setStatus("success");
        setMessage("Check your inbox for a confirmation email.");
        setEmail("");
      } else {
        const data = await res.json().catch(() => ({}));
        setStatus("error");
        setMessage(data?.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  const isLight = variant === "light";
  const isDone = status === "success";

  const inputBase =
    "flex-1 px-5 py-3.5 text-body font-sans rounded-sm border transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const inputLight =
    "bg-offwhite/5 border-offwhite/25 text-offwhite placeholder:text-offwhite/50 focus:border-offwhite focus:bg-offwhite/10 focus:ring-offwhite/40 focus:ring-offset-forest";

  const inputDark =
    "bg-white border-ink/15 text-ink placeholder:text-stone focus:border-forest focus:ring-forest/20 focus:ring-offset-offwhite";

  const buttonBase =
    "px-6 py-3.5 text-small font-sans font-medium tracking-tight rounded-sm transition-colors disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap";

  const buttonLight =
    "bg-ember text-offwhite hover:bg-ember-700";

  const buttonDark =
    "bg-ember text-offwhite hover:bg-ember-700";

  if (isDone) {
    return (
      <div className={className}>
        <p
          className={`font-serif italic text-lead ${
            isLight ? "text-offwhite" : "text-forest"
          }`}
        >
          Thank you. {message}
        </p>
      </div>
    );
  }

  return (
    <div className={className}>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-3 max-w-xl"
        noValidate
      >
        <label htmlFor="rounds-email" className="sr-only">
          Email address
        </label>
        <input
          id="rounds-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          autoComplete="email"
          disabled={status === "submitting"}
          className={`${inputBase} ${isLight ? inputLight : inputDark}`}
        />
        <button
          type="submit"
          disabled={status === "submitting" || !email}
          className={`${buttonBase} ${isLight ? buttonLight : buttonDark}`}
        >
          {status === "submitting" ? "Subscribing…" : "Subscribe to Rounds"}
        </button>
      </form>
      {status === "error" && (
        <p
          className={`mt-3 text-small font-sans ${
            isLight ? "text-ember-100" : "text-ember"
          }`}
          role="alert"
        >
          {message}
        </p>
      )}
      <p
        className={`mt-3 text-micro font-sans ${
          isLight ? "text-offwhite/55" : "text-stone"
        }`}
      >
        Unsubscribe anytime.
      </p>
    </div>
  );
}
