"use client";

import { motion, useReducedMotion } from "framer-motion";

interface AnimatedMarkProps {
  size?: number;
  delay?: number;
  className?: string;
  outerOpacity?: number;
  innerOpacity?: number;
  strokeColor?: string;
  innerStrokeWidth?: number;
  outerStrokeWidth?: number;
  duration?: number;
  ariaLabel?: string;
}

export default function AnimatedMark({
  size = 48,
  delay = 0,
  className = "",
  outerOpacity = 1,
  innerOpacity = 0.4,
  strokeColor = "#1F4E3D",
  outerStrokeWidth = 2.5,
  innerStrokeWidth = 1.5,
  duration = 1.2,
  ariaLabel,
}: AnimatedMarkProps) {
  const shouldReduceMotion = useReducedMotion();
  const height = Math.round((size * 40) / 64);

  const drawTransition = {
    duration: shouldReduceMotion ? 0 : duration,
    delay: shouldReduceMotion ? 0 : delay,
    ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
  };

  const innerDrawTransition = {
    duration: shouldReduceMotion ? 0 : duration * 0.85,
    delay: shouldReduceMotion ? 0 : delay + duration * 0.35,
    ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
  };

  return (
    <svg
      width={size}
      height={height}
      viewBox="0 0 64 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label={ariaLabel}
      aria-hidden={ariaLabel ? undefined : true}
      className={className}
    >
      <motion.path
        d="M2 38L20 8L32 24L44 12L62 38"
        stroke={strokeColor}
        strokeWidth={outerStrokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity={outerOpacity}
        initial={{ pathLength: shouldReduceMotion ? 1 : 0 }}
        animate={{ pathLength: 1 }}
        transition={drawTransition}
      />
      <motion.path
        d="M8 38L24 14L32 26L40 18L56 38"
        stroke={strokeColor}
        strokeWidth={innerStrokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity={innerOpacity}
        initial={{ pathLength: shouldReduceMotion ? 1 : 0 }}
        animate={{ pathLength: 1 }}
        transition={innerDrawTransition}
      />
    </svg>
  );
}
