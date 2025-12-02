// app/contact/page.tsx
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F5F8FC] py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        {/* Page heading */}
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#4FC6E0]">
            Get a Free Quote
          </p>
          <h1 className="mt-2 text-3xl md:text-4xl font-bold text-[#0B2C4A]">
            Contact Power Bubbles
          </h1>
          <p className="mt-3 max-w-2xl text-sm md:text-base text-[#355070]">
            Tell us a little about your property and the services you need. We’ll
            follow up with pricing, scheduling options, and answers to any
            questions you have.
          </p>
        </header>

        <div className="grid gap-10 md:grid-cols-[1.1fr,1fr] items-start">
          {/* LEFT: Info / selling points */}
          <section>
            <div className="rounded-xl bg-white p-6 shadow-sm border border-slate-200">
              <h2 className="text-lg font-semibold text-[#0B2C4A]">
                Why Book with Power Bubbles?
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-[#355070]">
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-[11px] text-white">
                    ✓
                  </span>
                  <span>
                    <span className="font-semibold text-[#0B2C4A]">
                      Fast, Free Quotes
                    </span>
                    <br />
                    Most jobs can be quoted from your description and photos —
                    no obligation.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-[11px] text-white">
                    ✓
                  </span>
                  <span>
                    <span className="font-semibold text-[#0B2C4A]">
                      Licensed &amp; Insured
                    </span>
                    <br />
                    Your home or business is fully protected on every job.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-[11px] text-white">
                    ✓
                  </span>
                  <span>
                    <span className="font-semibold text-[#0B2C4A]">
                      Local &amp; Customer-Focused
                    </span>
                    <br />
                    Friendly service, clear communication, and results you can
                    see immediately.
                  </span>
                </li>
              </ul>
            </div>

            {/* Contact details card */}
            <div className="mt-6 rounded-xl bg-white p-6 shadow-sm border border-slate-200 text-sm text-[#355070] space-y-3">
              <h3 className="text-sm font-semibold text-[#0B2C4A]">
                Prefer to reach out directly?
              </h3>
              <p>
                <span className="font-semibold text-[#0B2C4A]">Phone: </span>
                (555) 123-4567
              </p>
              <p>
                <span className="font-semibold text-[#0B2C4A]">Email: </span>
                info@powerbubbles.com
              </p>
              <p>
                <span className="font-semibold text-[#0B2C4A]">
                  Service Area:{" "}
                </span>
                Your City &amp; surrounding neighborhoods.
              </p>
              <p className="text-xs text-slate-500">
                * You can customize this with the real phone, email, and service
                area once your client confirms them.
              </p>
            </div>
          </section>

          {/* RIGHT: Contact form (HTML only for now) */}
          <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-[#0B2C4A]">
              Book a Pressure Wash Today
            </h2>
            <p className="mt-1 text-xs text-[#4A6484]">
              Fill out the form and we’ll follow up with pricing and availability.
            </p>

            <form className="mt-4 space-y-3">
              <div>
                <label className="block text-xs font-medium text-[#355070]">
                  Name
                </label>
                <input
                  type="text"
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-[#0B2C4A] outline-none transition focus:border-[#1E80C9] focus:ring-2 focus:ring-[#1E80C9]/30"
                  placeholder="Your full name"
                />
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                <div>
                  <label className="block text-xs font-medium text-[#355070]">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-[#0B2C4A] outline-none transition focus:border-[#1E80C9] focus:ring-2 focus:ring-[#1E80C9]/30"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#355070]">
                    Email
                  </label>
                  <input
                    type="email"
                    className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-[#0B2C4A] outline-none transition focus:border-[#1E80C9] focus:ring-2 focus:ring-[#1E80C9]/30"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#355070]">
                  Address
                </label>
                <input
                  type="text"
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-[#0B2C4A] outline-none transition focus:border-[#1E80C9] focus:ring-2 focus:ring-[#1E80C9]/30"
                  placeholder="Street, City, ZIP"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#355070]">
                  Service Needed
                </label>
                <input
                  type="text"
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-[#0B2C4A] outline-none transition focus:border-[#1E80C9] focus:ring-2 focus:ring-[#1E80C9]/30"
                  placeholder="Driveway, house wash, patio, etc."
                />
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                <div>
                  <label className="block text-xs font-medium text-[#355070]">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-[#0B2C4A] outline-none transition focus:border-[#1E80C9] focus:ring-2 focus:ring-[#1E80C9]/30"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#355070]">
                    Best Time to Reach You
                  </label>
                  <input
                    type="text"
                    className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-[#0B2C4A] outline-none transition focus:border-[#1E80C9] focus:ring-2 focus:ring-[#1E80C9]/30"
                    placeholder="Morning, afternoon, evening"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#355070]">
                  Additional Details
                </label>
                <textarea
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-[#0B2C4A] outline-none transition focus:border-[#1E80C9] focus:ring-2 focus:ring-[#1E80C9]/30"
                  rows={3}
                  placeholder="Tell us about the size of the area, stains, or anything we should know."
                />
              </div>

              <button
                type="submit"
                className="mt-2 w-full rounded-md bg-[#1E80C9] px-4 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#0E4A78] hover:-translate-y-0.5"
              >
                Submit Request
              </button>

              <p className="mt-2 text-[11px] text-slate-500">
                By submitting this form, you agree to be contacted about your
                quote request. Your information is never shared or sold.
              </p>
            </form>
          </section>
        </div>

        {/* Back to services / home link (optional small nav) */}
        <div className="mt-10 text-xs text-[#355070]">
          <span>Looking to learn more first? </span>
          <Link
            href="/services"
            className="font-semibold text-[#1E80C9] underline-offset-2 hover:underline"
          >
            View our services
          </Link>
          <span> or </span>
          <Link
            href="/"
            className="font-semibold text-[#1E80C9] underline-offset-2 hover:underline"
          >
            return to the homepage
          </Link>
          .
        </div>
      </div>
    </main>
  );
}
