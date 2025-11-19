import { motion } from 'framer-motion'

export default function ThreePhones(){
  return (
    <div className="relative h-[540px] flex items-center justify-center">
      {/* Underlighting */}
      <div className="absolute bottom-8 w-72 h-24 rounded-full blur-3xl bg-cyan-500/25"/>
      <div className="absolute bottom-8 w-72 h-24 rounded-full blur-3xl bg-fuchsia-500/20 translate-x-40"/>

      {/* Center phone */}
      <motion.div initial={{rotate:0,y:20,opacity:0}} animate={{rotate:0,y:0,opacity:1}} transition={{duration:0.6}} className="relative w-56 h-[520px] z-20">
        <div className="absolute inset-0 rounded-[2.3rem] bg-gradient-to-b from-slate-200/5 to-white/5"/>
        <div className="relative w-full h-full rounded-[2.1rem] p-3 bg-gradient-to-br from-slate-900 to-black border border-white/10 shadow-2xl">
          <div className="w-full h-full rounded-[1.8rem] overflow-hidden bg-black/60">
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-black/70 rounded-full"/>
            <div className="relative h-full w-full p-5 flex flex-col justify-between">
              <div>
                <div className="text-xs tracking-widest uppercase text-slate-300/70">Readiness</div>
                <div className="mt-2 text-white/90 text-2xl font-semibold">92 • Elite</div>
              </div>
              <div className="space-y-3">
                <div className="h-20 rounded-lg bg-slate-900/60 border border-white/10" />
                <div className="grid grid-cols-3 gap-3">
                  {['Hydration','Inflammation','HRV'].map((l,i)=> (
                    <div key={l} className="rounded-lg bg-slate-900/60 border border-white/10 p-3">
                      <div className="text-[10px] text-slate-400">{l}</div>
                      <div className="text-cyan-300 font-semibold">{i===1?'Low':'Optimal'}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Left phone */}
      <motion.div initial={{rotate:-18,y:40,opacity:0}} animate={{rotate:-18,y:0,opacity:1}} transition={{duration:0.6,delay:0.05}} className="absolute left-1/2 -translate-x-[140%] w-48 h-[460px] z-10">
        <div className="relative w-full h-full rounded-[2rem] p-3 bg-gradient-to-br from-slate-900 to-black border border-white/10 shadow-xl">
          <div className="w-full h-full rounded-[1.6rem] overflow-hidden bg-black/60" />
        </div>
      </motion.div>

      {/* Right phone */}
      <motion.div initial={{rotate:16,y:40,opacity:0}} animate={{rotate:16,y:0,opacity:1}} transition={{duration:0.6,delay:0.1}} className="absolute right-1/2 translate-x-[140%] w-48 h-[460px] z-10">
        <div className="relative w-full h-full rounded-[2rem] p-3 bg-gradient-to-br from-slate-900 to-black border border-white/10 shadow-xl">
          <div className="w-full h-full rounded-[1.6rem] overflow-hidden bg-black/60" />
        </div>
      </motion.div>
    </div>
  )
}
