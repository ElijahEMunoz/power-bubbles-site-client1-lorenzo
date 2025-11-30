// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// export default function ServicesPage() {
//   return (
//     <main className="min-h-screen bg-white">
//       <section className="max-w-5xl mx-auto px-6 py-16">
//         <h1 className="text-4xl font-bold mb-8">Our Services</h1>

//         <div className="grid md:grid-cols-2 gap-8">
//           <div className="p-6 rounded-lg shadow bg-white">
//             <h2 className="text-2xl font-semibold">House Washing</h2>
//             <p className="text-gray-600 mt-2">
//               Professional exterior home pressure washing.
//             </p>
//           </div>

//           <div className="p-6 rounded-lg shadow bg-white">
//             <h2 className="text-2xl font-semibold">Driveway Cleaning</h2>
//             <p className="text-gray-600 mt-2">
//               Deep cleaning for driveways & concrete surfaces.
//             </p>
//           </div>

//           <div className="p-6 rounded-lg shadow bg-white">
//             <h2 className="text-2xl font-semibold">Deck Cleaning</h2>
//             <p className="text-gray-600 mt-2">
//               Wood & composite deck pressure washing.
//             </p>
//           </div>

//           <div className="p-6 rounded-lg shadow bg-white">
//             <h2 className="text-2xl font-semibold">Concrete Cleaning</h2>
//             <p className="text-gray-600 mt-2">
//               Sidewalks, patios, and walkway pressure washing.
//             </p>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }
///  IMPORT LINK 
// import Link from "next/link";

// export default function ServicesPage() {
//   return (
//     <div className="min-h-screen bg-[#0E4A78] flex justify-center py-8">
//       <div className="w-full max-w-5xl bg-white rounded-xl overflow-hidden shadow-xl">
//         {/* SAME HEADER AS HOME */}
//         <header className="flex items-center justify-between px-6 py-4 border-b">
//           {/* logo + name */}
//           {/* nav with <Link href="/..."> like above */}
//         </header>

//         {/* PAGE CONTENT */}
//         <main className="bg-[#F4F7FB] px-6 py-10">
//           {/* “Our Services” title + 4 cards + blue pricing strip */}
//         </main>
//       </div>
//     </div>
//   );
// }

// import Link from "next/link";

// export default function ServicesPage() {
//   return (
//     <main className="min-h-screen bg-[#0E4A78] text-slate-900">
//       {/* White panel, same overall width as home page */}
//       <div className="mx-auto max-w-6xl bg-white rounded-b-2xl shadow-xl overflow-hidden">
//         {/* HEADER – make this match your Home header */}
//         <header className="flex items-center justify-between px-8 py-4 border-b bg-white">
//           {/* Logo + name */}
//           <div className="flex items-center gap-3">
//             <div className="bg-[#1E80C9] w-10 h-10 rounded-md flex items-center justify-center text-white font-bold text-lg">
//               PB
//             </div>
//             <div className="leading-tight">
//               <p className="font-bold text-sm tracking-wide">POWER BUBBLES</p>
//               <p className="text-xs text-slate-500 -mt-0.5">Pressure Washing</p>
//             </div>
//           </div>

//           {/* Nav – same links as home */}
//           <nav className="flex items-center gap-8 text-sm font-medium text-slate-800">
//             <Link href="/" className="hover:text-[#1E80C9]">
//               Home
//             </Link>
//             <Link href="/services" className="text-[#1E80C9]">
//               Services
//             </Link>
//             <Link href="/before-after" className="hover:text-[#1E80C9]">
//               Before &amp; After
//             </Link>
//             <Link href="/contact" className="hover:text-[#1E80C9]">
//               Contact
//             </Link>
//           </nav>
//         </header>

//         {/* LIGHT GRAY BACKGROUND FOR MAIN CONTENT */}
//         <section className="bg-[#F5F8FC] px-8 pt-12 pb-14">
//           {/* Our Services title */}
//           <div className="text-center mb-10">
//             <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
//               Our Services
//             </h1>
//             <p className="text-sm md:text-base text-slate-600">
//               Professional pressure washing for homes and businesses.
//             </p>
//           </div>

//           {/* 4 Service cards in a grid */}
//           <div className="grid gap-6 md:grid-cols-2 mb-12">
//             {/* House Washing */}
//             <div className="bg-white rounded-xl shadow-sm px-6 py-5 flex gap-4 items-start">
//               <div className="w-12 h-12 rounded-lg bg-[#E4F2FF] flex items-center justify-center">
//                 <span className="text-[#1E80C9] text-xl">🏠</span>
//               </div>
//               <div>
//                 <h2 className="font-semibold text-lg text-slate-900">
//                   House Washing
//                 </h2>
//                 <p className="text-sm text-slate-600 mt-1">
//                   Soft washing for siding, stucco, and exterior surfaces to
//                   restore curb appeal.
//                 </p>
//               </div>
//             </div>

//             {/* Driveway Cleaning */}
//             <div className="bg-white rounded-xl shadow-sm px-6 py-5 flex gap-4 items-start">
//               <div className="w-12 h-12 rounded-lg bg-[#E4F2FF] flex items-center justify-center">
//                 <span className="text-[#1E80C9] text-xl">🚗</span>
//               </div>
//               <div>
//                 <h2 className="font-semibold text-lg text-slate-900">
//                   Driveway Cleaning
//                 </h2>
//                 <p className="text-sm text-slate-600 mt-1">
//                   High-pressure cleaning for concrete, pavers, and garage areas
//                   to remove stains and grime.
//                 </p>
//               </div>
//             </div>

//             {/* Deck Cleaning */}
//             <div className="bg-white rounded-xl shadow-sm px-6 py-5 flex gap-4 items-start">
//               <div className="w-12 h-12 rounded-lg bg-[#E4F2FF] flex items-center justify-center">
//                 <span className="text-[#1E80C9] text-xl">🪵</span>
//               </div>
//               <div>
//                 <h2 className="font-semibold text-lg text-slate-900">
//                   Deck Cleaning
//                 </h2>
//                 <p className="text-sm text-slate-600 mt-1">
//                   Gentle washing for wood and composite decks, ready for sealing
//                   or staining.
//                 </p>
//               </div>
//             </div>

//             {/* Concrete Cleaning */}
//             <div className="bg-white rounded-xl shadow-sm px-6 py-5 flex gap-4 items-start">
//               <div className="w-12 h-12 rounded-lg bg-[#E4F2FF] flex items-center justify-center">
//                 <span className="text-[#1E80C9] text-xl">🏢</span>
//               </div>
//               <div>
//                 <h2 className="font-semibold text-lg text-slate-900">
//                   Concrete Cleaning
//                 </h2>
//                 <p className="text-sm text-slate-600 mt-1">
//                   Walkways, patios, pool decks, and storefront entrances cleaned
//                   and brightened.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* BLUE CTA STRIP (like mockup) */}
//           <div className="bg-[#0E4A78] text-white rounded-xl px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
//             <div>
//               <h2 className="text-xl md:text-2xl font-semibold text-center md:text-left">
//                 Revitalize Your Property with Our Expert Pressure Washing
//               </h2>
//             </div>
//             <Link
//               href="/contact"
//               className="mt-2 inline-block rounded-md bg-[#1E80C9] px-6 py-3 text-sm font-semibold text-white shadow hover:bg-[#4BB3FD]"
//             >
//               Get a Free Quote
//             </Link>
//           </div>
//         </section>

//         {/* FOOTER STRIP AT BOTTOM OF CARD */}
//         <footer className="px-8 py-4 bg-white border-t text-xs text-slate-500">
//           © {new Date().getFullYear()} Power Bubbles Pressure Washing
//         </footer>
//       </div>
//     </main>
//   );
// }

// import Link from "next/link";

// export default function ServicesPage() {
//   return (
//     <main className="min-h-screen bg-[#0E4A78] text-slate-900">
//       {/* FULL-WIDTH HEADER (same feel as home) */}
//       <header className="bg-white border-b">
//         <div className="mx-auto max-w-6xl flex items-center justify-between px-8 py-4">
//           {/* Logo + name */}
//           <div className="flex items-center gap-3">
//             <div className="bg-[#1E80C9] w-10 h-10 rounded-md flex items-center justify-center text-white font-bold text-lg">
//               PB
//             </div>
//             <div className="leading-tight">
//               <p className="font-bold text-sm tracking-wide">POWER BUBBLES</p>
//               <p className="text-xs text-slate-500 -mt-0.5">
//                 Pressure Washing
//               </p>
//             </div>
//           </div>

//           {/* Nav */}
//           <nav className="flex items-center gap-8 text-sm font-medium text-slate-800">
//             <Link href="/" className="hover:text-[#1E80C9]">
//               Home
//             </Link>
//             <Link href="/services" className="text-[#1E80C9]">
//               Services
//             </Link>
//             <Link href="/before-after" className="hover:text-[#1E80C9]">
//               Before &amp; After
//             </Link>
//             <Link href="/contact" className="hover:text-[#1E80C9]">
//               Contact
//             </Link>
//           </nav>
//         </div>
//       </header>

//       {/* FULL-WIDTH LIGHT GRAY BACKGROUND */}
//       <section className="bg-[#F5F8FC]">
//         {/* Centered content, same width as home */}
//         <div className="mx-auto max-w-6xl px-8 pt-12 pb-14">
//           {/* Our Services title */}
//           <div className="text-center mb-10">
//             <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
//               Our Services
//             </h1>
//             <p className="text-sm md:text-base text-slate-600">
//               Professional pressure washing for homes and businesses.
//             </p>
//           </div>

//           {/* 4 Service cards in a grid */}
//           <div className="grid gap-6 md:grid-cols-2 mb-12">
//             {/* House Washing */}
//             <div className="bg-white rounded-xl shadow-sm px-6 py-5 flex gap-4 items-start">
//               <div className="w-12 h-12 rounded-lg bg-[#E4F2FF] flex items-center justify-center">
//                 <span className="text-[#1E80C9] text-xl">🏠</span>
//               </div>
//               <div>
//                 <h2 className="font-semibold text-lg text-slate-900">
//                   House Washing
//                 </h2>
//                 <p className="text-sm text-slate-600 mt-1">
//                   Soft washing for siding, stucco, and exterior surfaces to
//                   restore curb appeal.
//                 </p>
//               </div>
//             </div>

//             {/* Driveway Cleaning */}
//             <div className="bg-white rounded-xl shadow-sm px-6 py-5 flex gap-4 items-start">
//               <div className="w-12 h-12 rounded-lg bg-[#E4F2FF] flex items-center justify-center">
//                 <span className="text-[#1E80C9] text-xl">🚗</span>
//               </div>
//               <div>
//                 <h2 className="font-semibold text-lg text-slate-900">
//                   Driveway Cleaning
//                 </h2>
//                 <p className="text-sm text-slate-600 mt-1">
//                   High-pressure cleaning for concrete, pavers, and garage areas
//                   to remove stains and grime.
//                 </p>
//               </div>
//             </div>

//             {/* Deck Cleaning */}
//             <div className="bg-white rounded-xl shadow-sm px-6 py-5 flex gap-4 items-start">
//               <div className="w-12 h-12 rounded-lg bg-[#E4F2FF] flex items-center justify-center">
//                 <span className="text-[#1E80C9] text-xl">🪵</span>
//               </div>
//               <div>
//                 <h2 className="font-semibold text-lg text-slate-900">
//                   Deck Cleaning
//                 </h2>
//                 <p className="text-sm text-slate-600 mt-1">
//                   Gentle washing for wood and composite decks, ready for sealing
//                   or staining.
//                 </p>
//               </div>
//             </div>

//             {/* Concrete Cleaning */}
//             <div className="bg-white rounded-xl shadow-sm px-6 py-5 flex gap-4 items-start">
//               <div className="w-12 h-12 rounded-lg bg-[#E4F2FF] flex items-center justify-center">
//                 <span className="text-[#1E80C9] text-xl">🏢</span>
//               </div>
//               <div>
//                 <h2 className="font-semibold text-lg text-slate-900">
//                   Concrete Cleaning
//                 </h2>
//                 <p className="text-sm text-slate-600 mt-1">
//                   Walkways, patios, pool decks, and storefront entrances cleaned
//                   and brightened.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* BLUE CTA STRIP (like mockup) */}
//           <div className="bg-[#0E4A78] text-white rounded-xl px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
//             <div>
//               <h2 className="text-xl md:text-2xl font-semibold text-center md:text-left">
//                 Revitalize Your Property with Our Expert Pressure Washing
//               </h2>
//             </div>
//             <Link
//               href="/contact"
//               className="mt-2 inline-block rounded-md bg-[#1E80C9] px-6 py-3 text-sm font-semibold text-white shadow hover:bg-[#4BB3FD]"
//             >
//               Get a Free Quote
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* FULL-WIDTH FOOTER STRIP */}
//       <footer className="bg-white border-t">
//         <div className="mx-auto max-w-6xl px-8 py-4 text-xs text-slate-500">
//           © {new Date().getFullYear()} Power Bubbles Pressure Washing
//         </div>
//       </footer>
//     </main>
//   );
// }
// app/services/page.tsx
export default function ServicesPage() {
  return (
    // Light gray band for the services content
    <section className="bg-[#F5F8FC]">
      {/* Centered content, same width as home */}
      <div className="mx-auto max-w-6xl px-8 pt-12 pb-14">
        {/* Our Services title */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Our Services
          </h1>
          <p className="text-sm md:text-base text-slate-600">
            Professional pressure washing for homes and businesses.
          </p>
        </div>

        {/* 4 Service cards in a grid */}
        <div className="grid gap-6 md:grid-cols-2 mb-12">
          {/* House Washing */}
          <div className="bg-white rounded-xl shadow-sm px-6 py-5 flex gap-4 items-start">
            <div className="w-12 h-12 rounded-lg bg-[#E4F2FF] flex items-center justify-center">
              <span className="text-[#1E80C9] text-xl">🏠</span>
            </div>
            <div>
              <h2 className="font-semibold text-lg text-slate-900">
                House Washing
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Soft washing for siding, stucco, and exterior surfaces to
                restore curb appeal.
              </p>
            </div>
          </div>

          {/* Driveway Cleaning */}
          <div className="bg-white rounded-xl shadow-sm px-6 py-5 flex gap-4 items-start">
            <div className="w-12 h-12 rounded-lg bg-[#E4F2FF] flex items-center justify-center">
              <span className="text-[#1E80C9] text-xl">🚗</span>
            </div>
            <div>
              <h2 className="font-semibold text-lg text-slate-900">
                Driveway Cleaning
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                High-pressure cleaning for concrete, pavers, and garage areas
                to remove stains and grime.
              </p>
            </div>
          </div>

          {/* Deck Cleaning */}
          <div className="bg-white rounded-xl shadow-sm px-6 py-5 flex gap-4 items-start">
            <div className="w-12 h-12 rounded-lg bg-[#E4F2FF] flex items-center justify-center">
              <span className="text-[#1E80C9] text-xl">🪵</span>
            </div>
            <div>
              <h2 className="font-semibold text-lg text-slate-900">
                Deck Cleaning
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Gentle washing for wood and composite decks, ready for sealing
                or staining.
              </p>
            </div>
          </div>

          {/* Concrete Cleaning */}
          <div className="bg-white rounded-xl shadow-sm px-6 py-5 flex gap-4 items-start">
            <div className="w-12 h-12 rounded-lg bg-[#E4F2FF] flex items-center justify-center">
              <span className="text-[#1E80C9] text-xl">🏢</span>
            </div>
            <div>
              <h2 className="font-semibold text-lg text-slate-900">
                Concrete Cleaning
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Walkways, patios, pool decks, and storefront entrances cleaned
                and brightened.
              </p>
            </div>
          </div>
        </div>

        {/* BLUE CTA STRIP (like mockup) */}
        <div className="bg-[#0E4A78] text-white rounded-xl px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-center md:text-left">
              Revitalize Your Property with Our Expert Pressure Washing
            </h2>
          </div>
          <a
            href="/contact"
            className="mt-2 inline-block rounded-md bg-[#1E80C9] px-6 py-3 text-sm font-semibold text-white shadow hover:bg-[#4BB3FD]"
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}
