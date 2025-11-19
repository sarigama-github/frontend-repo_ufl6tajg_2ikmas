import { Activity, Droplet, Sparkles, ArrowRight } from "lucide-react";
import ThreePhones from "./ThreePhones";

function PhoneMock({ title, subtitle, accent = "from-cyan-400 to-blue-500", tilt = "rotate-[-8deg]", glow="shadow-[0_0_60px_rgba(56,189,248,0.35)]" }) {
  return (
    <div className={`relative w-64 h-[520px] ${tilt} transition-transform`}> 
      <div className={`absolute inset-0 rounded-[2.4rem] bg-gradient-to-b ${accent} opacity-20 blur-2xl ${glow}`}></div>
      <div className="relative z-10 w-full h-full rounded-[2.2rem] p-3 bg-gradient-to-br from-[#0b0f1a] to-black border border-white/10 shadow-2xl">
        <div className="w-full h-full rounded-[1.9rem] overflow-hidden bg-black/60">
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
              <div className="h-20 rounded-lg bg-black/60 border border-white/10 relative overflow-hidden">
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
                <div className="rounded-lg bg-black/60 border border-white/10 p-3">
                  <div className="text-[10px] text-slate-400">Readiness</div>
                  <div className="text-cyan-300 font-semibold">92</div>
                </div>
                <div className="rounded-lg bg-black/60 border border-white/10 p-3">
                  <div className="text-[10px] text-slate-400">Hydration</div>
                  <div className="text-sky-300 font-semibold">Optimal</div>
                </div>
                <div className="rounded-lg bg-black/60 border border-white/10 p-3">
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
      {/* Darker, more luxurious background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#070a12] to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.12),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(99,102,241,0.14),transparent_35%),radial-gradient(circle_at_50%_100%,rgba(236,72,153,0.08),transparent_45%)]" />
        <div className="absolute inset-0 opacity-[0.06]" style={{backgroundImage: "linear-gradient(to right, #0f172a 1px, transparent 1px), linear-gradient(to bottom, #0f172a 1px, transparent 1px)", backgroundSize: "40px 40px"}} />
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-white/5 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-28 pb-20 md:pb-28">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-200 text-xs mb-6">
              <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
              Precision Biomarker Intelligence
            </div>

            <h1 className="text-4xl md:text-6xl leading-tight font-extrabold text-white tracking-tight">
              Scan. Restore. Conquer.
            </h1>

            <p className="mt-5 text-slate-300/90 text-lg md:text-xl max-w-xl">
              Dual-scan biometrics for athletes: finger flash + tongue video. Objective recovery you can act on.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#signup" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-fuchsia-600 text-white font-semibold shadow-[0_10px_40px_rgba(56,189,248,0.35)] hover:opacity-95 transition">
                Start Scanning <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <div className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-200">
                <Activity className="w-5 h-5 text-cyan-300" /> HRV • <Droplet className="w-5 h-5 text-sky-300" /> Hydration
              </div>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center w-full">
            <div className="relative hidden sm:block">
              <div className="absolute -top-10 -left-10 w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl" />
              <div className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full bg-indigo-500/10 blur-3xl" />
              <div className="flex items-center gap-8">
                <PhoneMock title="Finger Flash" subtitle="HR • HRV • Stress" />
                <PhoneMock title="Tongue Scan" subtitle="Hydration • Inflammation" accent="from-indigo-400 to-fuchsia-500" tilt="rotate-[10deg]" glow="shadow-[0_0_60px_rgba(99,102,241,0.35)]" />
              </div>
            </div>
            <div className="sm:hidden w-full">
              <ThreePhones />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
