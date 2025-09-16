import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

export default function OurSkills() {
  return (
    <section className="overflow-hidden py-20 w-full">
      {/* ===== Our Skills Section ===== */}
      <div className="bg-violet-950 py-16 text-white text-center">
        <p className="text-sm uppercase tracking-widest text-gray-400">
          Skills
        </p>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2">
          Our Skills
        </h2>

        {/* Skills Progress Circles */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl mx-auto">
          {/* SMM */}
          <div className="flex flex-col items-center">
            <div className="relative w-28 h-28">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  className="text-gray-700"
                  strokeWidth="8"
                  stroke="currentColor"
                  fill="transparent"
                  r="50"
                  cx="56"
                  cy="56"
                />
                <circle
                  className="text-violet-500"
                  strokeWidth="8"
                  strokeDasharray="314"
                  strokeDashoffset="25" // 92%
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r="50"
                  cx="56"
                  cy="56"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-xl font-bold">
                92%
              </span>
            </div>
            <p className="mt-3 font-semibold">S M M</p>
          </div>

          {/* Brand Development */}
          <div className="flex flex-col items-center">
            <div className="relative w-28 h-28">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  className="text-gray-700"
                  strokeWidth="8"
                  stroke="currentColor"
                  fill="transparent"
                  r="50"
                  cx="56"
                  cy="56"
                />
                <circle
                  className="text-violet-500"
                  strokeWidth="8"
                  strokeDasharray="314"
                  strokeDashoffset="19" // 94%
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r="50"
                  cx="56"
                  cy="56"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-xl font-bold">
                94%
              </span>
            </div>
            <p className="mt-3 font-semibold">Brand Development</p>
          </div>

          {/* SEO */}
          <div className="flex flex-col items-center">
            <div className="relative w-28 h-28">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  className="text-gray-700"
                  strokeWidth="8"
                  stroke="currentColor"
                  fill="transparent"
                  r="50"
                  cx="56"
                  cy="56"
                />
                <circle
                  className="text-violet-500"
                  strokeWidth="8"
                  strokeDasharray="314"
                  strokeDashoffset="6" // 98%
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r="50"
                  cx="56"
                  cy="56"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-xl font-bold">
                98%
              </span>
            </div>
            <p className="mt-3 font-semibold">SEO</p>
          </div>

          {/* Digital Marketing */}
          <div className="flex flex-col items-center">
            <div className="relative w-28 h-28">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  className="text-violet-500"
                  strokeWidth="8"
                  stroke="currentColor"
                  fill="transparent"
                  r="50"
                  cx="56"
                  cy="56"
                />
                <circle
                  className="text-violet-500"
                  strokeWidth="8"
                  strokeDasharray="314"
                  strokeDashoffset="16" // 95%
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r="50"
                  cx="56"
                  cy="56"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-xl font-bold">
                95%
              </span>
            </div>
            <p className="mt-3 font-semibold">Digital Marketing</p>
          </div>
        </div>
      </div>

      {/* ===== CTA Section ===== */}
      <div className="bg-gray-600 relative overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto text-center py-20 px-6 text-white">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug">
            Ready To Take Your Brand Development To The Next Level
          </h2>
          <p className="mt-4 text-sm sm:text-base lg:text-lg text-red-100">
            At Brand Startup Mitr, our innovative brand development strategies
            do more than build identity — they drive customer engagement,
            enhance your market presence, and deliver measurable growth.
          </p>
          <button
            className="mt-8 inline-flex items-center gap-2 bg-violet-700  text-white hover:bg-violet-950 font-semibold text-sm sm:text-base px-6 py-3 rounded-full shadow transition"
          >
            Get Started
            <ArrowUpRightIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
