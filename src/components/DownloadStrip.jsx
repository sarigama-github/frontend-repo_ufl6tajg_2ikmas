import { Apple, Play } from "lucide-react";

export default function DownloadStrip() {
  return (
    <section className="relative py-10">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.10),transparent_55%)]" />
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="text-center md:text-left">
            <div className="text-white font-semibold text-lg">Get Theron on your phone</div>
            <div className="text-slate-300/90 text-sm">Scan in seconds. Daily, objective recovery insights.</div>
          </div>
          <div className="flex items-center gap-3">
            <a className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-black/70 border border-white/10 text-white" href="#">
              <Apple className="w-4 h-4"/> App Store
            </a>
            <a className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-black/70 border border-white/10 text-white" href="#">
              <Play className="w-4 h-4"/> Google Play
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
