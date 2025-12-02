// app/before-after/page.tsx
import Image from "next/image";
import Link from "next/link";

const beforeAfterItems = [
  {
    id: 1,
    src: "/Before%200.jpg",
    label: "Driveway Cleaning",
    description:
      "Heavily stained brick driveway restored to a clean, bright finish.",
  },
  {
    id: 2,
    src: "/Before%202.jpg",
    label: "Patio Wash",
    description:
      "Weathered concrete patio brought back to life with a deep clean.",
  },
  {
    id: 3,
    src: "/Before%203.jpg",
    label: "Front Walkway",
    description:
      "Dull entry walkway refreshed for better curb appeal.",
  },
  // Add more combined before/after images here later
];

export default function BeforeAfterPage() {
  return (
    <main className="min-h-screen bg-[#F5F8FC] py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        {/* HEADER */}
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#4FC6E0]">
            Real Results
          </p>
          <h1 className="mt-2 text-3xl md:text-4xl font-bold text-[#0B2C4A]">
            Before &amp; After Gallery
          </h1>
          <p className="mt-3 max-w-2xl text-sm md:text-base text-[#355070]">
            See real Power Bubbles results from driveways, patios, walkways, and
            siding. Every project shows the difference professional pressure
            washing can make.
          </p>
        </header>

        {/* GALLERY GRID */}
        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 mb-14">
          {beforeAfterItems.map((item) => (
            <article
              key={item.id}
              className="overflow-hidden rounded-xl bg-[#0E4A78] shadow-md transition hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Single combined image */}
              <div className="relative h-40 md:h-48 lg:h-56">
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  className="object-cover"
                />

                {/* BEFORE label (left) */}
                <span className="absolute left-3 top-3 rounded bg-black/80 px-3 py-1 text-[11px] font-semibold text-white">
                  BEFORE
                </span>

                {/* AFTER label (right) */}
                <span className="absolute right-3 top-3 rounded bg-emerald-600 px-3 py-1 text-[11px] font-semibold text-white">
                  AFTER
                </span>
              </div>

              {/* Text under card */}
              <div className="px-4 py-3 border-t border-[#0E4A78] bg-[#0E4A78]">
                <h2 className="text-sm font-semibold text-white">
                  {item.label}
                </h2>
                <p className="mt-1 text-xs text-blue-100">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </section>

        {/* CTA STRIP WITH QR PLACEHOLDER */}
        <section className="mt-4 rounded-2xl bg-[#0E4A78] text-white px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <h2 className="text-2xl font-semibold mb-2">
              See the Difference Up Close
            </h2>
            <p className="text-sm text-blue-100 mb-4">
              Scan the code or send us a message to see more photos and videos
              of recent jobs, plus quick estimates for your property.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-[#4BB3FD] px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-[#1E80C9] hover:-translate-y-0.5 transition"
            >
              Get a Free Quote
            </Link>
          </div>

          {/* QR code placeholder */}
          <div className="w-40 h-40 md:w-44 md:h-44 rounded-xl bg-white flex items-center justify-center shadow-md text-xs font-semibold text-slate-500">
            QR CODE
          </div>
        </section>
      </div>
    </main>
  );
}
