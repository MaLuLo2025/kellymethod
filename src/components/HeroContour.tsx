import React from "react";

interface HeroContourProps {
  className?: string;
}

export default function HeroContour({ className = "" }: HeroContourProps) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="#1F4E3D" strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M -100 780 Q 150 760 320 740 Q 500 720 680 740 Q 850 760 1050 720 Q 1250 680 1450 700 Q 1600 710 1700 700" opacity="0.16" />
          <path d="M -100 720 Q 180 690 360 680 Q 540 670 720 650 Q 900 630 1080 650 Q 1260 670 1440 640 Q 1560 620 1700 630" opacity="0.15" />
          <path d="M -100 650 Q 200 610 400 600 Q 600 590 800 560 Q 980 530 1160 560 Q 1340 590 1500 560 Q 1600 540 1700 550" opacity="0.14" />
          <path d="M -100 570 Q 220 520 420 510 Q 620 500 820 460 Q 1000 425 1200 460 Q 1400 495 1540 465 Q 1620 450 1700 460" opacity="0.12" />
          <path d="M -100 480 Q 240 420 440 405 Q 640 390 840 340 Q 1020 295 1220 340 Q 1420 385 1560 360 Q 1630 350 1700 360" opacity="0.10" />
          <path d="M -100 380 Q 260 310 460 290 Q 660 270 860 215 Q 1040 170 1240 215 Q 1440 260 1580 240 Q 1650 235 1700 240" opacity="0.09" />
          <path d="M -100 270 Q 280 190 480 170 Q 680 150 880 90 Q 1060 50 1260 95 Q 1460 140 1600 120 Q 1670 115 1700 120" opacity="0.08" />
          <path d="M -100 150 Q 300 70 500 55 Q 700 45 900 -10 Q 1080 -45 1280 -5 Q 1480 35 1620 15 Q 1680 10 1700 15" opacity="0.06" />
        </g>
      </svg>
    </div>
  );
}
