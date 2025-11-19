import { Mail, Apple, Download } from "lucide-react";

export default function CTA() {
  return (
    <section id="signup" className="relative py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.12),transparent_50%)]" />
      <div className="max-w-5xl mx-auto px-6">
        <div className="rounded-3xl border border-slate-700/60 bg-gradient-to-br from-slate-900 to-slate-950 p-8 md:p-12 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-cyan-500/20 blur-3xl" />
          <h2 className="text-3xl md:text-4xl font-bold text-white">Join the Future of Athlete Recovery</h2>
          <p className="mt-3 text-slate-300/90 max-w-xl">Be first to access Theron. Get early updates and download links when we launch.</p>

          <form className="mt-8 flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="email" required placeholder="Enter your email" className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/60 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50" />
              </div>
            </div>
            <button type="submit" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-[0_10px_40px_rgba(56,189,248,0.35)]">
              Start Scanning → Scan. Restore. Conquer.
            </button>
          </form>

          <div className="mt-6 flex items-center gap-4 text-slate-400">
            <a className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/60 border border-slate-700/60 text-white" href="#">
              <Apple className="w-4 h-4" /> App Store
            </a>
            <a className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/60 border border-slate-700/60 text-white" href="#">
              <Download className="w-4 h-4" /> Android (Beta)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
