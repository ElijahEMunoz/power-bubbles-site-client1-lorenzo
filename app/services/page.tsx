import Image from "next/image";

export default function ServicesPage() {
  return (
    <section className="bg-[#F5F8FC]">
      <div className="mx-auto max-w-6xl px-8 pt-12 pb-14">

        {/* Page Title */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Our Services
          </h1>
          <p className="text-sm md:text-base text-slate-600">
            Professional pressure washing for homes and businesses.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 mb-12">

          {/* House Washing */}
          <div className="bg-white rounded-xl shadow-sm px-6 py-5 flex gap-4 items-start 
                          border border-slate-200 transition hover:-translate-y-1 
                          hover:border-[#1E80C9]/40 hover:shadow-lg">
            <div className="w-14 h-14 rounded-lg bg-[#E4F2FF] flex items-center justify-center shadow-sm">
              <Image
                src="/House Wash.png"
                alt="House Washing icon"
                width={50}
                height={50}
                className="object-contain"
              />
            </div>
            <div>
              <h2 className="font-semibold text-lg text-slate-900">
                Residential Washing
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Soft washing for siding, stucco, and exterior surfaces to restore curb appeal.
              </p>
            </div>
          </div>

          {/* Driveway Cleaning */}
          <div className="bg-white rounded-xl shadow-sm px-6 py-5 flex gap-4 items-start 
                          border border-slate-200 transition hover:-translate-y-1 
                          hover:border-[#1E80C9]/40 hover:shadow-lg">
            <div className="w-14 h-14 rounded-lg bg-[#E4F2FF] flex items-center justify-center shadow-sm">
              <Image
                src="/DriveWay.png"
                alt="Driveway Cleaning icon"
                width={50}
                height={50}
                className="object-contain"
              />
            </div>
            <div>
              <h2 className="font-semibold text-lg text-slate-900">
                Driveway Cleaning
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                High-pressure cleaning for concrete, pavers, and garage areas to remove stains and grime.
              </p>
            </div>
          </div>

          {/* Deck Cleaning */}
          <div className="bg-white rounded-xl shadow-sm px-6 py-5 flex gap-4 items-start 
                          border border-slate-200 transition hover:-translate-y-1 
                          hover:border-[#1E80C9]/40 hover:shadow-lg">
            <div className="w-14 h-14 rounded-lg bg-[#E4F2FF] flex items-center justify-center shadow-sm">
              <Image
                src="/Deck Cleaning.png"
                alt="Deck Cleaning icon"
                width={50}
                height={50}
                className="object-contain"
              />
            </div>
            <div>
              <h2 className="font-semibold text-lg text-slate-900">
                Deck Cleaning
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Gentle washing for wood and composite decks, ready for sealing or staining.
              </p>
            </div>
          </div>

          {/* Commercial Cleaning */}
          <div className="bg-white rounded-xl shadow-sm px-6 py-5 flex gap-4 items-start
                          border border-slate-200 transition hover:-translate-y-1 
                          hover:border-[#1E80C9]/40 hover:shadow-lg">
            <div className="w-14 h-14 rounded-lg bg-[#E4F2FF] flex items-center justify-center shadow-sm">
              <Image
                src="/Commerical.png"
                alt="Commercial Cleaning icon"
                width={50}
                height={50}
                className="object-contain"
              />
            </div>
            <div>
              <h2 className="font-semibold text-lg text-slate-900">
                Commercial Cleaning
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Walkways, patios, pool decks, and storefront entrances cleaned and brightened.
              </p>
            </div>
          </div>

        </div>

        {/* CTA Strip */}
        <div className="bg-[#0E4A78] text-white rounded-xl px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <h2 className="text-xl md:text-2xl font-semibold text-center md:text-left">
            Revitalize Your Property with Our Expert Pressure Washing
          </h2>

          <a
            href="/contact"
            className="rounded-lg bg-[#1E80C9] px-8 py-4 text-base font-semibold text-white shadow hover:bg-[#4BB3FD] transition"
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}
