import { motion } from 'framer-motion'
import { Cpu, Activity, Waves, Watch, FileBarChart2 } from 'lucide-react'

export default function FeaturesPage(){
  const cards = [
    { icon: Cpu, title:'Computer Vision Tongue Scan', desc:'Spectral features quantify hydration and inflammation for precise daily guidance.', grad:'from-fuchsia-500/20 to-indigo-500/20', ring:'ring-fuchsia-500/30' },
    { icon: Waves, title:'Finger Flash Photoplethysmography', desc:'High-frequency PPG for HRV, stress, and recovery readiness in seconds.', grad:'from-cyan-500/20 to-blue-500/20', ring:'ring-cyan-500/30' },
    { icon: Activity, title:'Adaptive Readiness Engine', desc:'Fuses multi-modal signals to deliver objective, coachable scores.', grad:'from-sky-500/20 to-cyan-500/20', ring:'ring-sky-500/30' },
    { icon: Watch, title:'Wearable Sync', desc:'Optional Apple Watch data enhances trend resolution and alerts.', grad:'from-indigo-500/20 to-blue-500/20', ring:'ring-indigo-500/30' },
    { icon: FileBarChart2, title:'Pro Reports', desc:'Share clean PDFs with coaches and physios—evidence-focused visuals.', grad:'from-purple-500/20 to-fuchsia-500/20', ring:'ring-purple-500/30' },
  ]

  return (
    <section className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(2,6,23,0.6),transparent_60%)]"/>
      <div className="max-w-7xl mx-auto px-6">
        <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-4xl md:text-5xl font-extrabold text-white">Engineered For Elite Recovery</motion.h1>
        <p className="mt-4 text-slate-300/90 max-w-2xl">Deep tech, minimal effort. Two quick scans unlock precision insights.</p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map(({icon:Icon,title,desc,grad,ring})=> (
            <motion.div key={title} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5}} className={`group relative p-6 rounded-2xl bg-slate-900/70 border border-white/10 ring-1 ${ring}`}> 
              <div className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${grad} opacity-0 group-hover:opacity-100 transition`} />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-white/10 flex items-center justify-center text-cyan-300"><Icon className="w-6 h-6"/></div>
                <h3 className="mt-4 text-white font-semibold text-lg">{title}</h3>
                <p className="mt-2 text-slate-400 text-sm">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
