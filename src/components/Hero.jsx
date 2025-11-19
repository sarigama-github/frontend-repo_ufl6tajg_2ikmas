import { Activity, Droplet, Sparkles, ArrowRight } from "lucide-react";

function PhoneMock({ title, subtitle, accent = "from-cyan-400 to-blue-500", tilt = "rotate-[-8deg]", glow="shadow-[0_0_60px_rgba(56,189,248,0.35)]" }) {
  return (
    <div className={`relative w-64 h-[520px] ${tilt} transition-transform`}> 
      <div className={`absolute inset-0 rounded-[2.4rem] bg-gradient-to-b ${accent} opacity-20 blur-2xl ${glow}`}></div>
      <div className="relative z-10 w-full h-full rounded-[2.2rem] p-3 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/70 shadow-2xl">
        <div className="w-full h-full rounded-[1.9rem] overflow-hidden bg-slate-900/60">
          {/* Notch */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-black/60 rounded-full"></div>
          {/* Screen content */}
          <div className="relative h-full w-full p-5 flex flex-col justify-between">
            <div>
              <div className="text-xs tracking-widest uppercase text-slate-300/70">Theron Scan</div>
              <div className="mt-2 text-white/90 text-xl font-semibold">{title}</div>
              <div className="text-slate-300/80 text-sm">{subtitle}</div>
            </div>

            {/* Animated biometrics */}
            <div className="space-y-4">
              <div className="h-20 rounded-lg bg-slate-800/60 border border-slate-700/70 relative overflow-hidden">
                <svg viewBox="0 0 600 120" className="absolute inset-0 w-full h-full">
                  <defs>
                    <linearGradient id="hrvGrad" x1="0" x2="1">
                      <stop offset="0%" stopColor="#22d3ee" />
                      <stop offset="100%" stopColor="#60a5fa" />
                    </linearGradient>
                  </defs>
                  <path id="hrvPath" d="M0,60 C50,40 70,80 120,60 C170,40 190,80 240,60 C290,40 310,80 360,60 C410,40 430,80 480,60 C530,40 550,80 600,60" fill="none" stroke="url(#hrvGrad)" strokeWidth="3" />
                  <animate xlinkHref="#hrvPath" attributeName="d" dur="3s" repeatCount="indefinite" values="M0,60 C50,40 70,80 120,60 C170,40 190,80 240,60 C290,40 310,80 360,60 C410,40 430,80 480,60 C530,40 550,80 600,60; M0,60 C50,30 70,90 120,60 C170,30 190,90 240,60 C290,30 310,90 360,60 C410,30 430,90 480,60 C530,30 550,90 600,60; M0,60 C50,40 70,80 120,60 C170,40 190,80 240,60 C290,40 310,80 360,60 C410,40 430,80 480,60 C530,40 550,80 600,60" />
                </svg>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="rounded-lg bg-slate-800/60 border border-slate-700/70 p-3">
                  <div className="text-[10px] text-slate-400">Readiness</div>
                  <div className="text-cyan-300 font-semibold">92</div>
                </div>
                <div className="rounded-lg bg-slate-800/60 border border-slate-700/70 p-3">
                  <div className="text-[10px] text-slate-400">Hydration</div>
                  <div className="text-sky-300 font-semibold">Optimal</div>
                </div>
                <div className="rounded-lg bg-slate-800/60 border border-slate-700/70 p-3">
                  <div className="text-[10px] text-slate-400">Inflammation</div>
                  <div className="text-blue-300 font-semibold">Low</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Neon grid background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.15),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(99,102,241,0.18),transparent_35%),radial-gradient(circle_at_50%_100%,rgba(2,132,199,0.15),transparent_45%)]" />
        <div className="absolute inset-0 opacity-[0.08]" style={{backgroundImage: "linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)", backgroundSize: "40px 40px"}} />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-28 pb-20 md:pb-28">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/60 border border-slate-700/60 text-slate-300 text-xs mb-6">
              <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
              Precision Biomarker Intelligence
            </div>

            <h1 className="text-4xl md:text-6xl leading-tight font-extrabold text-white tracking-tight">
              See Your Body. Understand Recovery. Perform Better.
            </h1>

            <p className="mt-5 text-slate-300/90 text-lg md:text-xl max-w-xl">
              Theron combines finger flash and tongue video scans to deliver objective biomarker insights for peak athletic performance.
            </p>

            <div className="mt-6 text-cyan-300 font-semibold uppercase tracking-wider text-sm">Scan. Restore. Conquer.</div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#signup" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-[0_10px_40px_rgba(56,189,248,0.35)] hover:opacity-95 transition">
                Start Your Recovery Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <div className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700/60 text-slate-200">
                <Activity className="w-5 h-5 text-cyan-300" /> HRV • <Droplet className="w-5 h-5 text-sky-300" /> Hydration
              </div>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl" />
              <div className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full bg-indigo-500/10 blur-3xl" />
              <div className="flex items-center gap-8">
                <PhoneMock title="Finger Flash" subtitle="HR • HRV • Stress" />
                <PhoneMock title="Tongue Scan" subtitle="Hydration • Inflammation" accent="from-indigo-400 to-fuchsia-500" tilt="rotate-[10deg]" glow="shadow-[0_0_60px_rgba(99,102,241,0.35)]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
