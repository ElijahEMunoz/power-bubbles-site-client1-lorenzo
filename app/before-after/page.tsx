// app/before-after/page.tsx

export default function BeforeAfterPage() {
  return (
    <section className="bg-[#F5F8FC]">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        {/* Title */}
        <div className="mb-8 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
            Before &amp; After Gallery
          </h1>
          <p className="mt-2 text-sm md:text-base text-slate-600">
            See real Power Bubbles results from driveways, patios, and siding.
          </p>
        </div>

        {/* BEFORE / AFTER IMAGE GRID */}
        <div className="grid gap-4 md:grid-cols-4 mb-10">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-lg bg-slate-200 shadow-sm"
            >
              <div className="h-24 bg-slate-400" />
              <div className="flex text-[11px] font-semibold text-white">
                <span className="flex-1 bg-black/70 px-2 py-1 text-center">
                  BEFORE
                </span>
                <span className="flex-1 bg-emerald-600/80 px-2 py-1 text-center">
                  AFTER
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* SEE THE DIFFERENCE STRIP + QR PLACEHOLDER */}
        <div className="mb-12 rounded-xl bg-[#1E80C9] px-6 py-6 text-white shadow-sm md:flex md:items-center md:justify-between">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl md:text-2xl font-semibold">
              See the Difference
            </h2>
            <p className="mt-1 text-sm text-blue-100 max-w-md">
              Scan the code to view more photos and videos on your phone.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="h-24 w-24 rounded-lg bg-white/90 shadow-inner flex items-center justify-center text-xs font-semibold text-slate-700">
              QR CODE
            </div>
          </div>
        </div>

        {/* VIDEO DEMO SECTION */}
        <div className="mb-4">
          <h2 className="text-2xl font-semibold md:text-3xl">
            Watch Our Work in Action
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Real Power Bubbles results from start to finish.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Driveway Restoration",
              subtitle: "1:32 min • Residential",
            },
            {
              title: "House Siding Cleanup",
              subtitle: "0:58 min • Residential",
            },
            {
              title: "Patio & Walkway Wash",
              subtitle: "1:47 min • Commercial",
            },
          ].map((video) => (
            <div
              key={video.title}
              className="overflow-hidden rounded-xl bg-white shadow-sm border border-slate-200"
            >
              <div className="relative h-32 bg-slate-400">
                {/* Play button placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-10 w-10 rounded-full bg-black/70 flex items-center justify-center">
                    <span className="ml-1 text-white text-sm">▶</span>
                  </div>
                </div>
              </div>
              <div className="p-3">
                <div className="text-sm font-semibold text-slate-900">
                  {video.title}
                </div>
                <div className="mt-1 text-[11px] text-slate-600">
                  {video.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <a
            href="/contact"
            className="rounded-md bg-[#1E80C9] px-5 py-2 text-sm font-semibold text-white shadow hover:bg-[#0E4A78]"
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}
