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
    description: "Dull entry walkway refreshed for better curb appeal.",
  },
];

// temporary example videos – swap embedUrl with your real YouTube links
const videoItems = [
  {
    id: 1,
    title: "Driveway Cleaning Time-Lapse",
    description: "Watch years of dirt disappear in just seconds.",
    embedUrl: "https://www.youtube.com/embed/tfby9Lup0eQ",
  },
  {
    id: 2,
    title: "Patio Power Wash Demo",
    description: "See how a deep clean restores this backyard patio.",
    embedUrl: "https://www.youtube.com/embed/pAQ9bAoUkZg?si=Ih4QKXNx3Cgtee3u",
  },
  {
    id: 3,
    title: "Front Walkway Refresh",
    description: "Side-by-side look at the before and after results.",
    embedUrl: "https://www.youtube.com/embed/YoxmCnLN3yk?si=AnJAN7pzPPyu0NIJ",
  },
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
              className="overflow-hidden rounded-xl bg-[#0E4A78] shadow-md border border-[#0E4A78]"
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
              <div className="px-4 py-3 border-t border-white/10 text-white">
                <h2 className="text-sm font-semibold">{item.label}</h2>
                <p className="mt-1 text-xs text-blue-100">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </section>

        {/* VIDEO SECTION */}
        <section className="mb-14 rounded-2xl bg-white shadow-sm border border-slate-200 px-6 py-6 md:px-8 md:py-8">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0B2C4A]">
              Watch the Clean in Action
            </h2>
            <p className="mt-2 text-sm md:text-base text-[#355070] max-w-2xl">
              Short clips from recent Power Bubbles jobs so your customers can
              see the process and results in real time.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {videoItems.map((video) => (
              <article
                key={video.id}
                className="rounded-xl border border-slate-200 bg-slate-50 p-3 shadow-sm"
              >
                <div className="aspect-video w-full overflow-hidden rounded-lg bg-black">
                  <iframe
                    src={video.embedUrl}
                    title={video.title}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <h3 className="mt-3 text-sm font-semibold text-[#0B2C4A]">
                  {video.title}
                </h3>
                <p className="mt-1 text-xs text-[#4A6484]">
                  {video.description}
                </p>
              </article>
            ))}
          </div>

          {/* VIEW MORE VIDEOS BUTTON */}
          <div className="mt-8 flex justify-center">
            <Link
              href="https://www.youtube.com" // TODO: replace with your client's channel or playlist
              target="_blank"
              className="rounded-md bg-[#1E80C9] px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#0E4A78] hover:-translate-y-0.5"
            >
              View More Videos
            </Link>
          </div>
        </section>

        {/* CTA STRIP WITH QR CODE */}
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

          {/* QR code image */}
          <div className="relative w-40 h-40 md:w-44 md:h-44 rounded-xl bg-white flex items-center justify-center shadow-md">
            <Image
              src="/My_Gallery.png" // put this file in your /public folder
              alt="Scan to view more Power Bubbles results"
              fill
              className="object-contain p-4"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
