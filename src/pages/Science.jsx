import { Beaker, Shield, Microscope } from 'lucide-react'

export default function Science(){
  const items = [
    { icon:<Beaker className="w-5 h-5"/>, title:'Signal Processing', text:'PPG denoising, HRV time-domain metrics (RMSSD), and spectral analysis tuned for athletic variability.'},
    { icon:<Microscope className="w-5 h-5"/>, title:'Computer Vision', text:'CNN-based feature extraction from tongue video frames to estimate hydration and inflammation proxies.'},
    { icon:<Shield className="w-5 h-5"/>, title:'Validation', text:'Benchmarked against gold-standard measures across varied training states.'},
  ]

  return (
    <section className="relative py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white">The Science</h1>
        <p className="mt-4 text-slate-300/90">Built on biometrics research and practical sports science.</p>
        <div className="mt-10 grid sm:grid-cols-2 gap-6">
          {items.map((it)=> (
            <div key={it.title} className="p-6 rounded-2xl bg-slate-900/70 border border-white/10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/70 text-cyan-300 text-xs">{it.icon}<span>{it.title}</span></div>
              <p className="mt-4 text-slate-400 text-sm">{it.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-black border border-white/10">
          <h3 className="text-white font-semibold">Method Snapshot</h3>
          <ul className="mt-3 text-slate-400 text-sm list-disc pl-5 space-y-1">
            <li>4s tongue video at 30fps → frame sampling → feature vectors</li>
            <li>Finger flash PPG → peak detection → RR intervals → HRV</li>
            <li>Fusion model outputs: Recovery, Hydration, Inflammation</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
