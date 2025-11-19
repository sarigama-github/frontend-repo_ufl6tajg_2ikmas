import { Layers, BarChart3, Watch, FileDown } from "lucide-react";

export default function Features() {
  const features = [
    { icon: <Layers className="w-5 h-5" />, title: "Multi-modal biometric tracking", color: "text-cyan-300" },
    { icon: <BarChart3 className="w-5 h-5" />, title: "Trend visualization over time", color: "text-sky-300" },
    { icon: <Watch className="w-5 h-5" />, title: "Optional Apple Watch integration", color: "text-indigo-300" },
    { icon: <FileDown className="w-5 h-5" />, title: "Exportable reports for coaches & physiotherapists", color: "text-fuchsia-300" },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Engineered for High Performance</h2>
        <p className="mt-3 text-slate-300/90 max-w-2xl">Minimal daily effort: 4-second tongue scan + quick flash scan</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group p-6 rounded-2xl border border-slate-700/60 bg-slate-900/50 hover:bg-slate-900/70 transition">
              <div className={`w-10 h-10 rounded-lg bg-slate-800/70 border border-slate-700/60 flex items-center justify-center ${f.color}`}>
                {f.icon}
              </div>
              <div className="mt-4 text-white font-semibold leading-snug">{f.title}</div>
              <div className="mt-3 h-1 rounded bg-slate-800">
                <div className={`h-1 w-2/3 rounded bg-gradient-to-r from-cyan-500 to-blue-600`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
