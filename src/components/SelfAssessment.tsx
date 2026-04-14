"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Link from "next/link";
import {
  QUESTIONS,
  Responses,
  interpretResponses,
  formatSummaryForClipboard,
  AssessmentResult,
} from "@/lib/selfAssessment";

type Stage = "intro" | "questions" | "result";

export default function SelfAssessment() {
  const [stage, setStage] = useState<Stage>("intro");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [responses, setResponses] = useState<Responses>({});
  const [copied, setCopied] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const totalQuestions = QUESTIONS.length;
  const currentQuestion = QUESTIONS[currentIndex];
  const progress = ((currentIndex + 1) / totalQuestions) * 100;

  const result = useMemo<AssessmentResult | null>(() => {
    if (stage !== "result") return null;
    return interpretResponses(responses);
  }, [stage, responses]);

  function handleStart() {
    setStage("questions");
    setCurrentIndex(0);
  }

  function handleAnswer(value: "yes" | "somewhat" | "no") {
    const id = currentQuestion.id;
    setResponses((prev) => ({ ...prev, [id]: value }));

    if (currentIndex < totalQuestions - 1) {
      setTimeout(() => setCurrentIndex(currentIndex + 1), shouldReduceMotion ? 0 : 180);
    } else {
      setTimeout(() => setStage("result"), shouldReduceMotion ? 0 : 250);
    }
  }

  function handleBack() {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  }

  function handleRestart() {
    setResponses({});
    setCurrentIndex(0);
    setStage("intro");
    setCopied(false);
  }

  async function handleCopy() {
    if (!result) return;
    try {
      await navigator.clipboard.writeText(formatSummaryForClipboard(result));
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      // Silent — clipboard may be blocked in some contexts
    }
  }

  function handlePrint() {
    window.print();
  }

  // ========== INTRO ==========
  if (stage === "intro") {
    return (
      <div className="max-w-prose mx-auto">
        <div className="prose">
          <p className="text-lead text-ink/80 font-serif italic leading-relaxed">
            This is a structured self-assessment, not a diagnostic tool. It asks you a series of questions about symptoms commonly seen in POTS and generates a summary you can share with a clinician. It does not diagnose, rule out, or measure probability of any condition.
          </p>
          <p>
            It takes about five minutes. Your answers stay on your device — nothing is sent to us, stored, or logged.
          </p>
          <p>
            If you answer <em>yes</em> to questions about fainting or severe chest pain, the summary will flag those as urgent and recommend prompt medical evaluation regardless of other responses. Everything else, regardless of result, is intended to help you have a more useful conversation with a clinician.
          </p>
          <p className="text-small text-stone italic">
            If you are currently experiencing chest pain, severe shortness of breath, or symptoms that feel like a medical emergency, please stop and call 911 or your local emergency number.
          </p>
        </div>
        <div className="mt-12 flex flex-wrap gap-4">
          <button
            type="button"
            onClick={handleStart}
            className="inline-flex items-center gap-2 px-7 py-4 bg-ember text-offwhite text-body font-sans font-medium tracking-tight rounded-sm hover:bg-ember-700 transition-colors shadow-sm"
          >
            Begin the assessment
            <span aria-hidden="true">→</span>
          </button>
          <Link
            href="/diagnosis"
            className="inline-flex items-center gap-2 px-7 py-4 text-body text-ink font-sans font-medium tracking-tight border border-ink/20 hover:border-forest hover:text-forest rounded-sm transition-colors no-underline"
          >
            Read the diagnosis guide instead
          </Link>
        </div>
      </div>
    );
  }

  // ========== QUESTIONS ==========
  if (stage === "questions") {
    return (
      <div className="max-w-prose mx-auto">
        {/* Progress bar */}
        <div className="mb-10">
          <div className="flex justify-between text-micro text-stone font-sans uppercase tracking-widest mb-2">
            <span>
              Question {currentIndex + 1} of {totalQuestions}
            </span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-1 bg-ink/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-ember"
              initial={false}
              animate={{ width: `${progress}%` }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.4, ease: [0.4, 0, 0.2, 1] }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion.id}
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -12 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <h2 className="font-serif text-h2 text-ink font-medium mb-4 leading-tight">
              {currentQuestion.prompt}
            </h2>
            {currentQuestion.helper && (
              <p className="text-body text-ink/70 italic font-serif leading-relaxed mb-8">
                {currentQuestion.helper}
              </p>
            )}

            <div className="flex flex-col gap-3">
              {currentQuestion.options.map((option) => {
                const isSelected = responses[currentQuestion.id] === option.value;
                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => handleAnswer(option.value)}
                    className={`text-left px-6 py-4 text-body font-sans rounded-sm border-2 transition-colors ${
                      isSelected
                        ? "border-ember bg-ember/5 text-ink"
                        : "border-ink/15 bg-offwhite hover:border-forest hover:bg-forest-50 text-ink"
                    }`}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>

            <div className="mt-10 flex justify-between items-center">
              <button
                type="button"
                onClick={handleBack}
                disabled={currentIndex === 0}
                className="text-small font-sans text-ink/60 hover:text-forest disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                ← Back
              </button>
              <button
                type="button"
                onClick={handleRestart}
                className="text-small font-sans text-ink/50 hover:text-ember transition-colors"
              >
                Start over
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }

  // ========== RESULT ==========
  if (!result) return null;

  return (
    <div className="max-w-prose mx-auto print:max-w-full">
      {/* RED FLAG BANNER (if triggered) */}
      {result.redflagTriggered && (
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.4 }}
          className="mb-12 border-l-4 border-ember bg-ember/5 px-6 py-6 rounded-sm print:border-l-2"
        >
          <p className="text-label uppercase text-ember font-sans font-semibold mb-2 tracking-widest">
            Please read this first
          </p>
          <h3 className="font-serif text-h3 text-ink font-medium mb-3">
            Some of what you described warrants prompt medical attention.
          </h3>
          <p className="text-body text-ink/80 leading-relaxed mb-3">
            Regardless of anything else in this summary, the following symptoms warrant prompt medical evaluation:
          </p>
          <ul className="list-disc pl-6 text-body text-ink/80 leading-relaxed mb-3">
            {result.redflagDetails.map((d) => (
              <li key={d} className="mb-1">
                {d}
              </li>
            ))}
          </ul>
          <p className="text-body text-ink/80 leading-relaxed">
            Please contact a healthcare provider today. If symptoms are severe, go to an emergency department or call 911.
          </p>
        </motion.div>
      )}

      {/* INTERPRETATION */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.4, delay: shouldReduceMotion ? 0 : 0.1 }}
        className="mb-12"
      >
        <p className="text-label uppercase text-ember font-sans font-semibold mb-4 tracking-widest">
          What this summary suggests
        </p>
        <h2 className="font-serif text-h1 text-ink font-medium mb-6 leading-tight">
          {result.interpretation === "strong-match" &&
            "Your responses closely match the POTS pattern."}
          {result.interpretation === "partial-match" &&
            "Your responses partially match the POTS pattern."}
          {result.interpretation === "weak-match" &&
            "Your responses are less typical of POTS."}
        </h2>
        <p className="text-lead text-ink/80 leading-relaxed font-serif italic">
          {result.interpretationText}
        </p>

        <div className="mt-8 border-l-2 border-forest pl-6 py-2">
          <p className="text-small text-ink/75 font-sans leading-relaxed">
            <strong>A reminder:</strong> this is not a diagnosis. No self-assessment can diagnose POTS or any other condition. A proper evaluation requires a clinician and, in most cases, specific testing — typically a ten-minute active stand test or a tilt table test.
          </p>
        </div>
      </motion.div>

      {/* NEXT STEPS */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.4, delay: shouldReduceMotion ? 0 : 0.2 }}
        className="mb-14 bg-forest-50 px-6 md:px-8 py-8 rounded-sm print:bg-transparent print:border print:border-ink/20 print:px-0"
      >
        <p className="text-label uppercase text-ember font-sans font-semibold mb-4 tracking-widest">
          What to do next
        </p>
        <h3 className="font-serif text-h2 text-ink font-medium mb-5 leading-tight">
          Bring this summary to a clinician.
        </h3>
        <div className="prose">
          <p>
            The responses below are formatted as a printable symptom log. You can copy them to the clipboard, print this page, or simply reference them during an appointment.
          </p>
          <p>
            <strong>If you have a primary care clinician:</strong> share this summary and ask specifically about the <em>ten-minute active stand test</em>, which is the standard bedside screening for POTS.
          </p>
          <p>
            <strong>If you&apos;ve been dismissed before:</strong> consider finding a different clinician, or seek out a cardiologist, electrophysiologist, or autonomic specialist. The <Link href="/resources" className="text-ember">resources page</Link> lists specialist directories.
          </p>
          <p>
            <strong>If you&apos;d like more context:</strong> the <Link href="/diagnosis" className="text-ember">diagnosis guide</Link> covers how POTS testing works and what to say in an appointment.
          </p>
        </div>
        <div className="mt-6 flex flex-wrap gap-3 print:hidden">
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-2 px-6 py-3 bg-ember text-offwhite text-small font-sans font-medium rounded-sm hover:bg-ember-700 transition-colors shadow-sm"
          >
            {copied ? "Copied ✓" : "Copy summary to clipboard"}
          </button>
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-6 py-3 text-small text-ink font-sans font-medium border border-ink/20 hover:border-forest hover:text-forest rounded-sm transition-colors"
          >
            Print this page
          </button>
          <button
            type="button"
            onClick={handleRestart}
            className="inline-flex items-center gap-2 px-6 py-3 text-small text-ink/60 font-sans hover:text-ember transition-colors"
          >
            Start over
          </button>
        </div>
      </motion.div>

      {/* SUMMARY OF RESPONSES */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.4, delay: shouldReduceMotion ? 0 : 0.3 }}
        className="mb-12"
      >
        <p className="text-label uppercase text-ember font-sans font-semibold mb-4 tracking-widest">
          Your responses
        </p>
        <h3 className="font-serif text-h2 text-ink font-medium mb-8 leading-tight">
          Symptom log.
        </h3>

        <div className="space-y-10">
          {result.summaryList.map((block) => (
            <div key={block.category}>
              <h4 className="font-serif text-lg text-forest font-medium mb-4 border-b border-ink/15 pb-2">
                {block.category}
              </h4>
              <dl className="space-y-4">
                {block.items.map((item, i) => (
                  <div key={i} className="flex flex-col md:flex-row md:gap-6">
                    <dt className="text-body text-ink/80 md:flex-1 leading-relaxed">
                      {item.prompt}
                    </dt>
                    <dd className="text-body text-ink font-medium md:w-48 md:text-right font-sans mt-1 md:mt-0">
                      {item.response}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </motion.div>

      {/* DISCLAIMER FOOTER */}
      <div className="pt-8 border-t border-ink/15">
        <p className="text-small text-stone italic leading-relaxed">
          This self-assessment is for educational purposes and is not medical advice. Symptoms of POTS and related conditions vary widely, and no questionnaire can substitute for a clinical evaluation. If your symptoms are significantly affecting your life, please consult a healthcare provider regardless of what this summary reports. See our{" "}
          <Link href="/disclaimer" className="text-forest">
            full medical disclaimer
          </Link>{" "}
          for more.
        </p>
      </div>
    </div>
  );
}
