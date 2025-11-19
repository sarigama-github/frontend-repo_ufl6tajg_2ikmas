import { Droplet, Flame, Activity, ArrowRight } from "lucide-react";

export default function Tongue3D() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Deep gradient atmosphere */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#05070b] via-[#060910] to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.12),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(99,102,241,0.10),transparent_30%),radial-gradient(circle_at_50%_120%,rgba(236,72,153,0.10),transparent_40%)]" />
        <div className="absolute inset-0 opacity-[0.05]" style={{backgroundImage: "linear-gradient(to right, #0f172a 1px, transparent 1px), linear-gradient(to bottom, #0f172a 1px, transparent 1px)", backgroundSize: "44px 44px"}} />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-200 text-xs">
            3D Tongue Biometrics
          </div>
          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            See What Your Tongue Reveals
          </h2>
          <p className="mt-4 text-slate-300/90 max-w-2xl mx-auto">
            Hydration, inflammation, and fatigue signals—captured in seconds with a simple tongue scan.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-14 items-center">
          {/* 3D tongue rig */}
          <div className="relative">
            {/* Glows */}
            <div className="absolute -top-10 -left-6 w-56 h-56 rounded-full bg-cyan-500/15 blur-3xl" />
            <div className="absolute -bottom-12 -right-10 w-72 h-72 rounded-full bg-fuchsia-500/15 blur-3xl" />

            <div className="relative aspect-[4/5] rounded-[2rem] p-6 bg-gradient-to-br from-slate-950/70 to-black border border-white/10 shadow-2xl">
              <div className="absolute inset-6 rounded-[1.6rem] bg-gradient-to-b from-white/5 to-transparent" />
              <div className="relative w-full h-full rounded-[1.6rem] overflow-hidden flex items-center justify-center">
                {/* 3D SVG tongue */}
                <svg viewBox="0 0 520 720" className="w-full h-full">
                  <defs>
                    <linearGradient id="tongueBase" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#f472b6" stopOpacity="0.95"/>
                      <stop offset="60%" stopColor="#db2777" stopOpacity="0.95"/>
                      <stop offset="100%" stopColor="#9d174d" stopOpacity="0.95"/>
                    </linearGradient>
                    <radialGradient id="highlight" cx="50%" cy="15%" r="35%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6"/>
                      <stop offset="100%" stopColor="#ffffff" stopOpacity="0"/>
                    </radialGradient>
                    <linearGradient id="rim" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#f9a8d4" stopOpacity="0.7"/>
                      <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.4"/>
                    </linearGradient>
                    <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur in="SourceAlpha" stdDeviation="12" result="blur"/>
                      <feOffset dx="0" dy="14" result="offset"/>
                      <feComponentTransfer>
                        <feFuncA type="linear" slope="0.25"/>
                      </feComponentTransfer>
                      <feMerge>
                        <feMergeNode in="offset"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                    {/* Arrow marker */}
                    <marker id="arrowHead" markerWidth="8" markerHeight="8" refX="5" refY="3.5" orient="auto">
                      <polygon points="0 0, 7 3.5, 0 7" fill="#67e8f9" />
                    </marker>
                  </defs>

                  {/* Base shadow */}
                  <ellipse cx="260" cy="660" rx="160" ry="36" fill="#000" opacity="0.35"/>

                  {/* Tongue silhouette */}
                  <path filter="url(#softShadow)" d="M260,70 C340,70 420,140 420,230 C420,300 390,360 380,430 C370,500 360,620 260,640 C160,620 150,500 140,430 C130,360 100,300 100,230 C100,140 180,70 260,70 Z" fill="url(#tongueBase)" stroke="url(#rim)" strokeWidth="3"/>

                  {/* Central groove */}
                  <path d="M260,120 C280,210 280,310 260,520" stroke="#f472b6" strokeOpacity="0.6" strokeWidth="4" fill="none" />

                  {/* Gloss highlight */}
                  <ellipse cx="230" cy="160" rx="90" ry="44" fill="url(#highlight)" transform="rotate(-18 230 160)"/>

                  {/* Hydration arrow (tip) */}
                  <path d="M260,630 C270,600 320,580 370,560" stroke="#67e8f9" strokeWidth="3" fill="none" markerEnd="url(#arrowHead)" />

                  {/* Inflammation arrow (edge) */}
                  <path d="M120,420 C90,420 70,380 60,340" stroke="#a78bfa" strokeWidth="3" fill="none" markerEnd="url(#arrowHead)" />

                  {/* Fatigue arrow (center) */}
                  <path d="M300,300 C360,280 420,260 480,230" stroke="#f0abfc" strokeWidth="3" fill="none" markerEnd="url(#arrowHead)" />
                </svg>

                {/* Floating ring accents */}
                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute left-1/2 -translate-x-1/2 top-10 w-72 h-72 rounded-full border border-cyan-400/20" />
                  <div className="absolute left-1/2 -translate-x-1/2 top-10 w-96 h-96 rounded-full border border-fuchsia-400/10" />
                </div>
              </div>

              {/* Callouts */}
              <div className="absolute -right-10 top-24 w-56">
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-cyan-400/30 backdrop-blur">
                  <div className="flex items-center gap-2 text-cyan-300 font-semibold"><Droplet className="w-4 h-4"/> Hydration</div>
                  <div className="mt-1 text-slate-300/90 text-sm">Surface sheen, color tone, and texture signal your fluid balance.</div>
                </div>
              </div>
              <div className="absolute -left-10 lg:-left-16 top-64 w-56">
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-indigo-400/30 backdrop-blur">
                  <div className="flex items-center gap-2 text-indigo-300 font-semibold"><Flame className="w-4 h-4"/> Inflammation</div>
                  <div className="mt-1 text-slate-300/90 text-sm">Edge redness and micro‑vascular patterns indicate systemic load.</div>
                </div>
              </div>
              <div className="absolute -right-10 bottom-16 w-56">
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-fuchsia-400/30 backdrop-blur">
                  <div className="flex items-center gap-2 text-fuchsia-300 font-semibold"><Activity className="w-4 h-4"/> Fatigue</div>
                  <div className="mt-1 text-slate-300/90 text-sm">Central groove dynamics correlate with HRV and recovery readiness.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column: copy and download push */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">Biomarker callouts, in 3D</h3>
            <p className="mt-4 text-slate-300/90 max-w-lg">
              Our vision system isolates tongue regions and learns texture, color, and reflectance cues linked to hydration, inflammation, and fatigue. Designed with elite athletes—fast, repeatable, and objective.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300"><Droplet className="w-4 h-4"/></div>
                <div>
                  <div className="text-white font-semibold">Hydration Index</div>
                  <div className="text-slate-300/80 text-sm">Surface gloss + color temperature → actionable daily score.</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-300"><Flame className="w-4 h-4"/></div>
                <div>
                  <div className="text-white font-semibold">Inflammation Signal</div>
                  <div className="text-slate-300/80 text-sm">Edge redness + micro‑vessel density → systemic load.</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-fuchsia-500/20 border border-fuchsia-400/30 flex items-center justify-center text-fuchsia-300"><Activity className="w-4 h-4"/></div>
                <div>
                  <div className="text-white font-semibold">Fatigue / Readiness</div>
                  <div className="text-slate-300/80 text-sm">Groove geometry + HRV coherence → readiness to train.</div>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <a href="#signup" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-fuchsia-600 text-white font-semibold shadow-[0_10px_40px_rgba(56,189,248,0.35)] hover:opacity-95 transition">
                Download the App <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <div className="inline-flex items-center px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-300">
                4‑sec tongue scan • 1‑tap results
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
