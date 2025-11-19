import { Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  const links = ["About", "Features", "FAQ", "Privacy Policy"];
  return (
    <footer className="py-12 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600" />
          <div className="text-white font-semibold">Theron</div>
        </div>

        <nav className="flex items-center gap-6 text-slate-300/80 text-sm">
          {links.map((l) => (
            <a href="#" key={l} className="hover:text-white transition">{l}</a>
          ))}
        </nav>

        <div className="flex items-center gap-4 text-slate-300/80">
          <a href="#" aria-label="Twitter" className="hover:text-white"><Twitter className="w-5 h-5" /></a>
          <a href="#" aria-label="Instagram" className="hover:text-white"><Instagram className="w-5 h-5" /></a>
          <a href="#" aria-label="YouTube" className="hover:text-white"><Youtube className="w-5 h-5" /></a>
        </div>
      </div>
    </footer>
  );
}
