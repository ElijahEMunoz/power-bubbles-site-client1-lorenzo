export default function Footer() {
  return (
    <footer className="bg-[#0E4A78] text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <div className="bg-[#1E80C9] text-white font-bold px-3 py-1 rounded">
            PB
          </div>
          <p className="font-semibold">POWER BUBBLES</p>
        </div>

        {/* Copyright */}
        <p className="text-sm opacity-80">
          © {new Date().getFullYear()} Power Bubbles Pressure Washing
        </p>
      </div>
    </footer>
  );
}
