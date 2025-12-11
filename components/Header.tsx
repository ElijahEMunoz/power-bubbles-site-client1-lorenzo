// components/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">

        {/* Logo + name (NOW CLICKABLE) */}
        <Link href="/" className="flex items-center gap-3">
          {/* Logo image */}
          <div className="relative h-10 w-10 md:h-11 md:w-11">
            <Image
              src="/Logo2.png"
              alt="Power Bubbles logo"
              fill
              sizes="70px"
              className="rounded-md object-contain"
              priority
            />
          </div>

          {/* Brand text */}
          <div className="leading-tight">
            <div className="text-sm font-semibold uppercase tracking-wide text-slate-900">
              Power Bubbles
            </div>
            <div className="text-[11px] text-slate-500">
              Pressure Washing
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
          <Link href="/" className="hover:text-[#1E80C9]">
            Home
          </Link>
          <Link href="/services" className="hover:text-[#1E80C9]">
            Services
          </Link>
          <Link href="/before-after" className="hover:text-[#1E80C9]">
            Before &amp; After
          </Link>
          <Link href="/contact" className="hover:text-[#1E80C9]">
            Contact
          </Link>
        </nav>

        {/* Mobile CTA */}
        <a
          href="#contact"
          className="inline-flex items-center rounded-full bg-[#1E80C9] px-4 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-[#0E4A78] md:hidden"
        >
          Get Quote
        </a>
      </div>
    </header>
  );
}
