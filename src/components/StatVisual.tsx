"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

type StatVisualKind = "years" | "doctors" | "arc-large" | "arc-small";

interface StatVisualProps {
  kind: StatVisualKind;
  className?: string;
}

export default function StatVisual({ kind, className = "" }: StatVisualProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const shouldReduceMotion = useReducedMotion();
  const animate = inView && !shouldReduceMotion;

  return (
    <div ref={ref} className={`mt-2 mb-6 ${className}`} aria-hidden="true">
      {kind === "years" && <YearsBar animate={animate} />}
      {kind === "doctors" && <DoctorDots animate={animate} />}
      {kind === "arc-large" && <Arc percentage={77} animate={animate} />}
      {kind === "arc-small" && <Arc percentage={28} animate={animate} />}
    </div>
  );
}

function YearsBar({ animate }: { animate: boolean }) {
  return (
    <div className="flex items-end gap-1 h-8">
      {[1, 2, 3, 4].map((year, i) => (
        <motion.div
          key={year}
          className="flex-1 bg-forest rounded-sm"
          initial={{ scaleY: 0, originY: 1 }}
          animate={animate ? { scaleY: 1 } : {}}
          transition={{
            duration: 0.6,
            delay: 0.3 + i * 0.1,
            ease: [0.4, 0, 0.2, 1],
          }}
          style={{ height: `${25 + i * 18}%`, transformOrigin: "bottom" }}
        />
      ))}
    </div>
  );
}

function DoctorDots({ animate }: { animate: boolean }) {
  return (
    <div className="flex items-center gap-1.5 h-8">
      {Array.from({ length: 7 }).map((_, i) => (
        <motion.div
          key={i}
          className="w-2.5 h-2.5 rounded-full bg-forest"
          initial={{ scale: 0, opacity: 0 }}
          animate={animate ? { scale: 1, opacity: 1 } : {}}
          transition={{
            duration: 0.3,
            delay: 0.3 + i * 0.08,
            ease: [0.4, 0, 0.2, 1],
          }}
        />
      ))}
    </div>
  );
}

function Arc({ percentage, animate }: { percentage: number; animate: boolean }) {
  const radius = 14;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="h-8 flex items-center">
      <svg width="32" height="32" viewBox="0 0 32 32" className="-rotate-90">
        <circle
          cx="16"
          cy="16"
          r={radius}
          fill="none"
          stroke="#1F4E3D"
          strokeWidth="2.5"
          opacity="0.15"
        />
        <motion.circle
          cx="16"
          cy="16"
          r={radius}
          fill="none"
          stroke="#1F4E3D"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={animate ? { strokeDashoffset: offset } : {}}
          transition={{ duration: 1.4, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
        />
      </svg>
    </div>
  );
}
