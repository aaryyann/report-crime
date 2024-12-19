import Link from "next/link";

export default function Home() {
  return (
    <div className="relative px-6 pt-32">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex h-9 items-center gap-2 rounded-full border border-sky-500/10 text-sm text-sky-400 p-6">
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            Confidential & Secure Reporting
          </div>

          <h1 className="mt-8 bg-gradient-to-b from-white to-white/80 bg-clip-text text-6xl font-bold tracking-tight text-transparent sm:text-7xl">
            File a Report
            <span className="block bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
              Secure Identity
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
            Enhance the safety of your community while prioritizing your own
            security. Our cutting-edge encryption technology guarantees that
            your identity stays fully anonymous.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-6">
            <Link href={"/submit-report"}>
              <button className="group relative flex h-12 items-center justify-center gap-2 rounded-xl bg-sky-500 px-8 text-sm font-medium text-white transition-all hover:bg-sky-400">
                Submit Confidential Report
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h14M12 5l7 7-7 7"
                  />
                </svg>
              </button>
            </Link>
            <Link href={"/how-it-work"}>
              <button className="flex h-12 items-center justify-center gap-2 rounded-xl bg-white/5 px-8 text-sm font-medium text-white ring-1 ring-inset ring-white/10 transition-all hover:bg-white/10">
                How it Works
              </button>
            </Link>
          </div>
        </div>

        {/* Grid Adding */}

        <div className="mt-40 grid gap-6 sm:grid-cols-3">
          {[
            {
              title: "Advanced Encryption Standards",
              description:
                "State-of-the-art encryption safeguards your identity",
              icon: (
                <svg
                  className="h-6 w-6 text-sky-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              ),
            },
            {
              title: "Real-time Analysis",
              description:
                "Quick verification and protected routing of all reports",
              icon: (
                <svg
                  className="h-6 w-6 text-sky-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              ),
            },
            {
              title: "Encrypted Communication",
              description: "Anonymous exchange platform with law enforcement",
              icon: (
                <svg
                  className="h-6 w-6 text-sky-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              ),
            },
          ].map((features, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl bg-zinc-900 p-6 transition-all hover:bg-zinc-800/80"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-sky-500/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="relative">
                <div className="mb-5 inline-flex rounded-xl bg-sky-500/10 p-3">
                  {features.icon}
                </div>
                <h3 className="mb-3 text-lg font-medium text-white">
                  {features.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  {features.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}

        <div className="mt-40 rounded-2xl bg-zinc-900 p-8">
          <div className="grid gap-y-8 sm:grid-cols-3">
            {[
              { value: "100K+", label: "Reports Submitted" },
              { value: "100%", label: "Anonymity Index" },
              { value: "24/7", label: "Assistance Offered" },
            ].map((stats, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold text-white">
                  {stats.value}
                </div>
                <div className="mt-1 text-sm text-zinc-400">{stats.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Symbol */}
        <div className="mt-40 pb-20 flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-full bg-zinc-900 px-5 py-2 text-sm text-zinc-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Endorsed by Law Enforcement Agencies Nationwide
          </div>
        </div>
      </div>
    </div>
  );
}
