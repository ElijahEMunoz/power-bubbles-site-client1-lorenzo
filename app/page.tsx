// app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* HERO SECTION – IMAGE BACKGROUND */}
      <section className="relative min-h-[70vh] overflow-hidden text-white">
        {/* Background image */}
        <Image
          src="/wash1.png"
          alt="Pressure washing a driveway"
          fill
          priority
          className="object-cover -z-20"
        />

        {/* Dark blue overlay */}
        <div className="absolute inset-0 bg-[#0E4A78]/80 -z-10" />

        {/* Hero content */}
        <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#4FC6E0]">
            Clean • Bright • Restored
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Professional
            <br />
            Pressure Washing
          </h1>

          <p className="mt-4 max-w-xl text-sm md:text-base text-slate-100">
            Residential and commercial pressure washing for driveways, siding,
            patios, and more. Fully licensed, insured, and customer-focused.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/contact#booking"
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
                Residential Washing
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

          {/* Combined before/after images as single cards */}
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {/* Driveway Cleaning */}
            <div className="overflow-hidden rounded-lg bg-[#0F5FB5] shadow-lg">
              <div className="relative h-44 md:h-56">
                <Image
                  src="/Before%200.jpg"
                  alt="Driveway cleaning before and after"
                  fill
                  className="object-cover"
                />
                <span className="absolute left-3 top-3 rounded-full bg-black/80 px-3 py-1 text-[10px] font-semibold">
                  BEFORE
                </span>
                <span className="absolute right-3 top-3 rounded-full bg-emerald-600 px-3 py-1 text-[10px] font-semibold">
                  AFTER
                </span>
              </div>
              <div className="px-4 py-3 text-sm font-semibold">
                Driveway Cleaning
              </div>
            </div>

            {/* Patio Wash */}
            <div className="overflow-hidden rounded-lg bg-[#0F5FB5] shadow-lg">
              <div className="relative h-44 md:h-56">
                <Image
                  src="/Before%202.jpg"
                  alt="Patio wash before and after"
                  fill
                  className="object-cover"
                />
                <span className="absolute left-3 top-3 rounded-full bg-black/80 px-3 py-1 text-[10px] font-semibold">
                  BEFORE
                </span>
                <span className="absolute right-3 top-3 rounded-full bg-emerald-600 px-3 py-1 text-[10px] font-semibold">
                  AFTER
                </span>
              </div>
              <div className="px-4 py-3 text-sm font-semibold">Patio Wash</div>
            </div>

            {/* Front Walkway */}
            <div className="overflow-hidden rounded-lg bg-[#0F5FB5] shadow-lg">
              <div className="relative h-44 md:h-56">
                <Image
                  src="/Before%203.jpg"
                  alt="Front walkway before and after"
                  fill
                  className="object-cover"
                />
                <span className="absolute left-3 top-3 rounded-full bg-black/80 px-3 py-1 text-[10px] font-semibold">
                  BEFORE
                </span>
                <span className="absolute right-3 top-3 rounded-full bg-emerald-600 px-3 py-1 text-[10px] font-semibold">
                  AFTER
                </span>
              </div>
              <div className="px-4 py-3 text-sm font-semibold">
                Front Walkway
              </div>
            </div>
          </div>

          <Link
            href="/before-after"
            className="mt-6 inline-flex items-center text-sm font-semibold text-white underline-offset-4 transition hover:text-blue-50 hover:underline"
          >
            See more results &amp; book your wash →
          </Link>
        </div>
      </section>

      {/* WHY CHOOSE US + CTA (no form) */}
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

          {/* CTA card linking to contact form */}
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-[#0B2C4A]">
              Ready for a Free Quote?
            </h3>
            <p className="mt-1 text-xs text-[#4A6484]">
              Tell us about your driveway, patio, or siding and we’ll send
              pricing and availability through our quick booking form.
            </p>

            <Link
              href="/contact#booking"
              className="mt-4 inline-flex w-full items-center justify-center rounded-md bg-[#1E80C9] px-4 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#0E4A78] hover:-translate-y-0.5"
            >
              Go to Quote Form
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0E4A78] py-6 text-xs text-blue-100">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 text-center md:flex-row md:text-left">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-white/10 text-white text-xs font-bold">
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
