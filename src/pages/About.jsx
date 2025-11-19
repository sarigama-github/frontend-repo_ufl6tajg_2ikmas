export default function About(){
  return (
    <section className="relative py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white">About Theron</h1>
        <p className="mt-4 text-slate-300/90">Theron helps athletes harness objective biometrics to recover faster and perform harder. Minimal input. Maximal clarity.</p>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/70 border border-white/10">
            <h3 className="text-white font-semibold">Mission</h3>
            <p className="mt-2 text-slate-400 text-sm">Bring lab-grade insight to daily training without friction.</p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/70 border border-white/10">
            <h3 className="text-white font-semibold">Focus</h3>
            <p className="mt-2 text-slate-400 text-sm">Precision, privacy, and practical coaching outcomes.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
