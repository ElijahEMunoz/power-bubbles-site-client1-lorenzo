// app/contact/page.tsx

export default function ContactPage() {
  return (
    <section className="bg-[#F5F8FC]">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        {/* Title */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
            Contact Us
          </h1>
          <p className="mt-2 text-sm md:text-base text-slate-600">
            Get in touch with us for reliable pressure washing services.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid gap-8 md:grid-cols-[1.3fr,2fr]">
          {/* CONTACT INFO CARD */}
          <div className="rounded-xl bg-white p-6 shadow-sm border border-slate-200">
            <h2 className="text-lg font-semibold text-slate-900">
              Contact Information
            </h2>
            <p className="mt-1 text-xs text-slate-600">
              Reach out and we’ll respond as quickly as possible.
            </p>

            <div className="mt-5 space-y-4 text-sm text-slate-700">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-lg">📞</span>
                <div>
                  <div className="font-semibold">Phone</div>
                  <div>(123) 456-7890</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-lg">✉️</span>
                <div>
                  <div className="font-semibold">Email</div>
                  <div>info@powerbubbles.com</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-lg">📍</span>
                <div>
                  <div className="font-semibold">Location</div>
                  <div>1234 Clean St, Anytown, USA</div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 text-xs text-slate-500">
                Service hours: Mon–Sat, 8:00 AM – 6:00 PM
              </div>
            </div>
          </div>

          {/* CONTACT FORM CARD */}
          <div className="rounded-xl bg-white p-6 shadow-sm border border-slate-200">
            <h2 className="text-lg font-semibold text-slate-900">
              Send Us a Message
            </h2>
            <p className="mt-1 text-xs text-slate-600">
              Tell us about your project and we’ll follow up with details.
            </p>

            <form className="mt-4 space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-700">
                  Name
                </label>
                <input
                  type="text"
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-[#1E80C9] focus:ring-2 focus:ring-[#1E80C9]/30"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700">
                  Email
                </label>
                <input
                  type="email"
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-[#1E80C9] focus:ring-2 focus:ring-[#1E80C9]/30"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700">
                  Phone
                </label>
                <input
                  type="tel"
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-[#1E80C9] focus:ring-2 focus:ring-[#1E80C9]/30"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-[#1E80C9] focus:ring-2 focus:ring-[#1E80C9]/30"
                />
              </div>

              <button
                type="submit"
                className="mt-1 w-full rounded-md bg-[#1E80C9] px-4 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-[#0E4A78]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
