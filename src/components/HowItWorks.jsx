import { Fingerprint, Camera, LineChart } from "lucide-react";

export default function HowItWorks() {
  const items = [
    {
      icon: <Fingerprint className="w-6 h-6 text-cyan-300" />,
      title: "Finger Flash Scan",
      text: "Heart rate, HRV, stress & recovery readiness",
    },
    {
      icon: <Camera className="w-6 h-6 text-sky-300" />,
      title: "Tongue Video Scan",
      text: "Hydration, inflammation, fatigue detection",
    },
    {
      icon: <LineChart className="w-6 h-6 text-indigo-300" />,
      title: "Trend Analysis",
      text: "Objective recovery scores & injury risk alerts",
    },
  ];

  return (
    <section className="relative py-20 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">How It Works</h2>
            <p className="mt-4 text-slate-300/90 max-w-xl">
              Multi-modal scans capture objective biometrics in seconds.
            </p>

            <div className="mt-8 space-y-4">
              {items.map((it) => (
                <div key={it.title} className="flex items-start gap-4 p-5 rounded-2xl bg-slate-900/60 border border-slate-700/60">
                  <div className="mt-1">{it.icon}</div>
                  <div>
                    <div className="text-white font-semibold">{it.title}</div>
                    <div className="text-slate-300/80 text-sm">{it.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-tr from-cyan-500/10 via-indigo-500/10 to-fuchsia-500/10 blur-2xl rounded-3xl" />
            <div className="relative aspect-[4/3] rounded-3xl border border-slate-700/60 bg-slate-900/60 p-6">
              <div className="grid grid-cols-2 gap-4 h-full">
                <div className="rounded-2xl border border-slate-700/60 bg-slate-800/60 p-4 flex flex-col justify-between">
                  <div>
                    <div className="text-xs text-slate-400">HRV Wave</div>
                    <div className="mt-2 h-24 bg-slate-900/60 rounded-lg relative overflow-hidden">
                      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(56,189,248,0.2),transparent)] animate-[shine_2s_linear_infinite]" />
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Readiness</div>
                    <div className="mt-2 h-2 rounded bg-slate-700/60">
                      <div className="h-2 w-[82%] rounded bg-gradient-to-r from-cyan-400 to-blue-500" />
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-700/60 bg-slate-800/60 p-4 flex flex-col justify-between">
                  <div>
                    <div className="text-xs text-slate-400">Hydration</div>
                    <div className="mt-2 h-2 rounded bg-slate-700/60">
                      <div className="h-2 w-[68%] rounded bg-gradient-to-r from-sky-400 to-cyan-500" />
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Inflammation</div>
                    <div className="mt-2 h-2 rounded bg-slate-700/60">
                      <div className="h-2 w-[24%] rounded bg-gradient-to-r from-indigo-400 to-fuchsia-500" />
                    </div>
                  </div>
                </div>

                <div className="col-span-2 rounded-2xl border border-slate-700/60 bg-slate-800/60 p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-slate-300">Streak: 12 days</div>
                    <div className="text-sm text-cyan-300">+3% this week</div>
                  </div>
                  <div className="mt-3 h-16 rounded bg-slate-900/60">
                    <div className="h-full w-[72%] rounded bg-gradient-to-r from-cyan-500/30 to-indigo-500/30 border border-slate-700/50"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
