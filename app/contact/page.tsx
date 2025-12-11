"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  address: string;
  service: string;
  date: string;
  time: string;
  details: string;
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    address: "",
    service: "",
    date: "",
    time: "",
    details: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [statusMessage, setStatusMessage] = useState("");

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setStatusMessage("");

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          address: form.address,
          service: form.service,
          date: form.date,
          time: form.time,
          details: form.details,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error("Request failed");
      }

      setStatus("success");
      setStatusMessage(
        "Thanks! Your request was sent. We’ll reach out with pricing and availability."
      );

      // Clear the form after success
      setForm({
        name: "",
        email: "",
        phone: "",
        address: "",
        service: "",
        date: "",
        time: "",
        details: "",
      });
    } catch (err) {
      console.error(err);
      setStatus("error");
      setStatusMessage(
        "Something went wrong sending your request. Please try again in a moment."
      );
    }
  }

  return (
    <main className="min-h-screen bg-[#F5F8FC] py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.1fr,1.4fr] md:items-start">
          {/* LEFT: Why choose Power Bubbles (same idea as before) */}
          <section>
            <h1 className="text-3xl md:text-4xl font-bold text-[#0B2C4A] mb-4">
              Why Choose Power Bubbles?
            </h1>
            <p className="text-sm md:text-base text-[#355070] mb-6 max-w-md">
              Licensed, insured, and focused on giving your property a fresh,
              clean look with professional pressure washing.
            </p>

            <ul className="space-y-5 text-sm text-[#0B2C4A]">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-white text-xs">
                  ✓
                </span>
                <div>
                  <p className="font-semibold">Licensed &amp; Insured</p>
                  <p className="text-[#4A6484]">
                    You’re fully covered on every job, big or small.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-white text-xs">
                  ✓
                </span>
                <div>
                  <p className="font-semibold">Eco-Friendly &amp; Streak-Free</p>
                  <p className="text-[#4A6484]">
                    Professional equipment and cleaning solutions for a safe,
                    spotless finish.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-white text-xs">
                  ✓
                </span>
                <div>
                  <p className="font-semibold">Fast Response Time</p>
                  <p className="text-[#4A6484]">
                    Get a quote quickly and schedule at a time that works for
                    you.
                  </p>
                </div>
              </li>
            </ul>
          </section>

          {/* RIGHT: Booking form */}
          <section className="rounded-2xl bg-white shadow-sm border border-slate-200 px-6 py-6 md:px-8 md:py-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0B2C4A] mb-2">
              Book a Pressure Wash Today
            </h2>
            <p className="text-sm text-[#4A6484] mb-6">
              Fill out the form and we’ll follow up with pricing and
              availability.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-[#0B2C4A]">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-[#1E80C9] focus:outline-none focus:ring-1 focus:ring-[#1E80C9]"
                  placeholder="Your full name"
                />
              </div>

              {/* Phone + Email */}
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-[#0B2C4A]">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-[#1E80C9] focus:outline-none focus:ring-1 focus:ring-[#1E80C9]"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0B2C4A]">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-[#1E80C9] focus:outline-none focus:ring-1 focus:ring-[#1E80C9]"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-medium text-[#0B2C4A]">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-[#1E80C9] focus:outline-none focus:ring-1 focus:ring-[#1E80C9]"
                  placeholder="Street, City, ZIP"
                />
              </div>

              {/* Service needed */}
              <div>
                <label className="block text-sm font-medium text-[#0B2C4A]">
                  Service Needed
                </label>
                <input
                  type="text"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-[#1E80C9] focus:outline-none focus:ring-1 focus:ring-[#1E80C9]"
                  placeholder="Driveway, house wash, patio, etc."
                />
              </div>

              {/* Date + Time */}
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-[#0B2C4A]">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-[#1E80C9] focus:outline-none focus:ring-1 focus:ring-[#1E80C9]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#0B2C4A]">
                    Best Time to Reach You
                  </label>
                  <select
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm bg-white focus:border-[#1E80C9] focus:outline-none focus:ring-1 focus:ring-[#1E80C9]"
                  >
                    <option value="">Select a time window</option>
                    <option value="Morning (8–11 AM)">Morning (8–11 AM)</option>
                    <option value="Midday (11 AM–2 PM)">
                      Midday (11 AM–2 PM)
                    </option>
                    <option value="Afternoon (2–5 PM)">
                      Afternoon (2–5 PM)
                    </option>
                    <option value="Evening (5–7 PM)">
                      Evening (5–7 PM)
                    </option>
                  </select>
                </div>
              </div>

              {/* Details */}
              <div>
                <label className="block text-sm font-medium text-[#0B2C4A]">
                  Additional Details
                </label>
                <textarea
                  name="details"
                  value={form.details}
                  onChange={handleChange}
                  rows={4}
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-[#1E80C9] focus:outline-none focus:ring-1 focus:ring-[#1E80C9]"
                  placeholder="Tell us about stains, size of the area, or anything else we should know."
                />
              </div>

              {/* Status message */}
              {status !== "idle" && (
                <p
                  className={`text-sm ${
                    status === "success"
                      ? "text-emerald-600"
                      : status === "error"
                      ? "text-red-600"
                      : "text-[#4A6484]"
                  }`}
                >
                  {statusMessage}
                </p>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="mt-2 w-full rounded-md bg-[#1E80C9] px-6 py-3 text-sm font-semibold text-white shadow hover:bg-[#4BB3FD] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Sending..." : "Submit Request"}
              </button>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}
