import { ShieldCheck, Droplet, TrendingUp, Dumbbell } from "lucide-react";

export default function Benefits() {
  const items = [
    { icon: <TrendingUp className="w-6 h-6 text-cyan-300" />, title: "Track long-term performance trends" },
    { icon: <ShieldCheck className="w-6 h-6 text-sky-300" />, title: "Reduce injury risk" },
    { icon: <Droplet className="w-6 h-6 text-indigo-300" />, title: "Optimize recovery & hydration" },
    { icon: <Dumbbell className="w-6 h-6 text-fuchsia-300" />, title: "Make data-driven training decisions" },
  ];

  return (
    <section className="py-20 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Benefits for Athletes</h2>
            <p className="mt-4 text-slate-300/90 max-w-xl">
              Precision insights that help you train hard and recover smarter.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {items.map((it) => (
                <div key={it.title} className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/60 border border-slate-700/60">
                  {it.icon}
                  <div className="text-white/90">{it.title}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-8 bg-gradient-to-tr from-cyan-500/10 via-blue-500/10 to-indigo-500/10 blur-2xl rounded-3xl" />
            <div className="relative p-6 rounded-3xl border border-slate-700/60 bg-slate-900/60">
              <div className="text-slate-300 text-sm">Recovery Score</div>
              <div className="mt-2 h-2 rounded bg-slate-800">
                <div className="h-2 w-[84%] rounded bg-gradient-to-r from-cyan-500 to-blue-600"></div>
              </div>
              <div className="mt-6 text-slate-300 text-sm">Weekly Trend</div>
              <div className="mt-2 grid grid-cols-7 gap-2">
                {[12, 14, 18, 10, 16, 20, 22].map((h, i) => (
                  <div key={i} className="bg-gradient-to-t from-cyan-500/40 to-indigo-500/40 border border-slate-700/60 rounded-md" style={{height: `${h * 4}px`}} />
                ))}
              </div>
              <div className="mt-6 text-slate-300 text-sm">Streak</div>
              <div className="mt-2 flex items-center gap-2">
                {Array.from({length: 10}).map((_, i) => (
                  <div key={i} className={`w-6 h-6 rounded-full ${i < 8 ? 'bg-cyan-500/70' : 'bg-slate-700/70'} border border-slate-600`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
