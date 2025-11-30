// app/page.tsx
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* HERO SECTION */}
      <section className="bg-[#0E4A78] text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-[1.2fr,1fr] md:items-center md:py-20">
          {/* Left: text */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#4FC6E0]">
              Clean • Bright • Restored
            </p>
            <h1 className="mt-3 text-4xl font-bold leading-tight md:text-5xl">
              Professional
              <br />
              Pressure Washing
            </h1>
            <p className="mt-4 max-w-md text-sm text-slate-100">
              Residential and commercial pressure washing for driveways, siding,
              patios, and more. Fully licensed, insured, and customer-focused.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-md bg-[#1E80C9] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#4BB3FD]"
              >
                Get a Free Quote
              </a>
              <a
                href="#gallery"
                className="text-sm font-semibold text-slate-100 underline-offset-4 transition hover:text-white hover:underline"
              >
                View Before &amp; After
              </a>
            </div>
          </div>

          {/* Right: hero image placeholder */}
          <div className="h-52 rounded-xl bg-gradient-to-tr from-slate-800 via-slate-600 to-slate-400 shadow-xl md:h-64" />
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section
        id="services"
        className="border-b border-slate-200 bg-white py-12 md:py-16"
      >
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-2xl font-semibold md:text-3xl text-[#0B2C4A]">
            Our Services
          </h2>
          <p className="mt-2 text-center text-sm text-[#355070]">
            Simple, professional pressure washing for homes and businesses.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {/* House Washing */}
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 text-center shadow-sm transition hover:-translate-y-1 hover:border-[#1E80C9]/40 hover:shadow-lg">
              <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E4F2FF] shadow-sm">
                <Image
                  src="/House Wash.png"
                  alt="House Washing icon"
                  width={48}
                  height={48}
                  className="h-12 w-12 object-contain"
                />
              </div>
              <h3 className="text-base font-semibold text-[#0B2C4A]">
                House Washing
              </h3>
              <p className="mt-2 text-xs text-[#4A6484]">
                Gentle, low-pressure cleaning for siding, stucco, and exterior
                walls.
              </p>
            </div>

            {/* Driveway Cleaning */}
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 text-center shadow-sm transition hover:-translate-y-1 hover:border-[#1E80C9]/40 hover:shadow-lg">
              <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E4F2FF] shadow-sm">
                <Image
                  src="/DriveWay.png"
                  alt="Driveway Cleaning icon"
                  width={48}
                  height={48}
                  className="h-12 w-12 object-contain"
                />
              </div>
              <h3 className="text-base font-semibold text-[#0B2C4A]">
                Driveway Cleaning
              </h3>
              <p className="mt-2 text-xs text-[#4A6484]">
                Remove dirt, oil stains, and years of buildup from concrete and
                pavers.
              </p>
            </div>

            {/* Commercial Cleaning */}
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 text-center shadow-sm transition hover:-translate-y-1 hover:border-[#1E80C9]/40 hover:shadow-lg">
              <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E4F2FF] shadow-sm">
                <Image
                  src="/Commerical.png"
                  alt="Commercial Cleaning icon"
                  width={48}
                  height={48}
                  className="h-12 w-12 object-contain"
                />
              </div>
              <h3 className="text-base font-semibold text-[#0B2C4A]">
                Commercial Cleaning
              </h3>
              <p className="mt-2 text-xs text-[#4A6484]">
                Storefronts, walkways, parking lots, and more for your business
                property.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BEFORE & AFTER STRIP */}
      <section
        id="gallery"
        className="border-b border-slate-200 bg-[#1E80C9] py-10 text-white"
      >
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-semibold md:text-3xl">
            Before &amp; After Results
          </h2>
          <p className="mt-2 text-sm text-blue-100">
            Real Power Bubbles results from local driveways and homes.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="overflow-hidden rounded-lg bg-slate-200 shadow-sm"
              >
                <div className="h-24 bg-slate-500" />
                <div className="flex text-xs font-semibold">
                  <span className="flex-1 bg-black/70 px-3 py-1 text-center">
                    BEFORE
                  </span>
                  <span className="flex-1 bg-emerald-600/80 px-3 py-1 text-center">
                    AFTER
                  </span>
                </div>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="mt-6 inline-flex items-center text-sm font-semibold text-white underline-offset-4 transition hover:text-blue-50 hover:underline"
          >
            See more results &amp; book your wash →
          </a>
        </div>
      </section>

      {/* WHY CHOOSE US + BOOKING FORM */}
      <section
        id="contact"
        className="border-b border-slate-200 bg-white py-12 md:py-16"
      >
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2">
          {/* Why Choose Us */}
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl text-[#0B2C4A]">
              Why Choose Power Bubbles?
            </h2>
            <ul className="mt-5 space-y-3 text-sm text-[#355070]">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-[11px] text-white">
                  ✓
                </span>
                <span>
                  <span className="font-semibold text-[#0B2C4A]">
                    Licensed &amp; Insured
                  </span>
                  <br />
                  You’re fully covered on every job, big or small.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-[11px] text-white">
                  ✓
                </span>
                <span>
                  <span className="font-semibold text-[#0B2C4A]">
                    Eco-Friendly &amp; Streak-Free
                  </span>
                  <br />
                  Professional equipment and cleaning solutions for a safe,
                  spotless finish.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-[11px] text-white">
                  ✓
                </span>
                <span>
                  <span className="font-semibold text-[#0B2C4A]">
                    Fast Response Time
                  </span>
                  <br />
                  Get a quote quickly and schedule at a time that works for you.
                </span>
              </li>
            </ul>
          </div>

          {/* Booking form */}
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-[#0B2C4A]">
              Book a Pressure Wash Today
            </h3>
            <p className="mt-1 text-xs text-[#4A6484]">
              Fill out the form and we’ll follow up with pricing and
              availability.
            </p>

            <form className="mt-4 space-y-3">
              <div>
                <label className="block text-xs font-medium text-[#355070]">
                  Name
                </label>
                <input
                  type="text"
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-[#0B2C4A] outline-none transition focus:border-[#1E80C9] focus:ring-2 focus:ring-[#1E80C9]/30"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#355070]">
                  Address
                </label>
                <input
                  type="text"
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-[#0B2C4A] outline-none transition focus:border-[#1E80C9] focus:ring-2 focus:ring-[#1E80C9]/30"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#355070]">
                  Service Needed
                </label>
                <input
                  type="text"
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-[#0B2C4A] outline-none transition focus:border-[#1E80C9] focus:ring-2 focus:ring-[#1E80C9]/30"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#355070]">
                  Preferred Date
                </label>
                <input
                  type="date"
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-[#0B2C4A] outline-none transition focus:border-[#1E80C9] focus:ring-2 focus:ring-[#1E80C9]/30"
                />
              </div>

              <button
                type="submit"
                className="mt-2 w-full rounded-md bg-[#1E80C9] px-4 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#0E4A78] hover:-translate-y-0.5"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0E4A78] py-6 text-xs text-blue-100">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 text-center md:flex-row md:text-left">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg:white/10 text-white text-xs font-bold">
              PB
            </div>
            <span className="font-semibold text-white">
              Power Bubbles Pressure Washing
            </span>
          </div>
          <div>
            © {new Date().getFullYear()} Power Bubbles. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
