"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

interface CountUpProps {
  value: string;
  duration?: number;
  className?: string;
}

export default function CountUp({
  value,
  duration = 1.2,
  className = "",
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const shouldReduceMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(
    shouldReduceMotion ? value : extractNumberString(value, 0)
  );

  useEffect(() => {
    if (!inView || shouldReduceMotion) {
      if (shouldReduceMotion) setDisplayValue(value);
      return;
    }

    const targetNumber = extractNumber(value);
    if (targetNumber === null) {
      setDisplayValue(value);
      return;
    }

    const startTime = performance.now();
    const durationMs = duration * 1000;

    let frame: number;
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      const current = Math.round(targetNumber * eased);
      setDisplayValue(replaceNumber(value, current));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setDisplayValue(value);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, duration, shouldReduceMotion]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
}

function extractNumber(str: string): number | null {
  const match = str.match(/\d+/);
  return match ? parseInt(match[0], 10) : null;
}

function replaceNumber(template: string, newNumber: number): string {
  return template.replace(/\d+/, String(newNumber));
}

function extractNumberString(template: string, value: number): string {
  return template.replace(/\d+/, String(value));
}
