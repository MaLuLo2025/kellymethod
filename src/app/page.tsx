export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        {/* Minimal geometric mountain mark placeholder */}
        <div className="mb-8 flex justify-center">
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

        <h1 className="font-serif text-4xl font-bold text-ink mb-4">
          The Kelly Method
        </h1>

        <p className="text-lg text-stone leading-relaxed mb-6">
          Evidence-based education for patients and caregivers navigating
          Postural Orthostatic Tachycardia Syndrome.
        </p>

        <p className="text-sm text-stone">
          Coming soon.
        </p>
      </div>

      {/* Medical disclaimer — present on every page */}
      <footer className="fixed bottom-0 left-0 right-0 bg-offwhite border-t border-stone/10 py-3 px-6">
        <p className="text-xs text-stone/70 text-center max-w-3xl mx-auto">
          The Kelly Method provides educational content only. Nothing on this
          site constitutes medical advice, diagnosis, or treatment. Always
          consult a qualified healthcare provider before making changes to your
          care.
        </p>
      </footer>
    </main>
  );
}
