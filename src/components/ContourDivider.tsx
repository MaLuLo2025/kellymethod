interface ContourDividerProps {
  variant?: "mark" | "subtle";
  className?: string;
}

export default function ContourDivider({
  variant = "subtle",
  className = "my-16",
}: ContourDividerProps) {
  if (variant === "mark") {
    return (
      <div className={`flex justify-center ${className}`}>
        <svg
          width="64"
          height="40"
          viewBox="0 0 64 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M2 38L20 8L32 24L44 12L62 38"
            stroke="#1F4E3D"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M8 38L24 14L32 26L40 18L56 38"
            stroke="#1F4E3D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            opacity="0.4"
          />
        </svg>
      </div>
    );
  }

  return (
    <div className={`flex justify-center ${className}`}>
      <div className="w-24 border-t border-forest/20" />
    </div>
  );
}
