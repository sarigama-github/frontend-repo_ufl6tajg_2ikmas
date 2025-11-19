import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import Benefits from './components/Benefits'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Top neon accent */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.12),transparent_60%)]" />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-md bg-gradient-to-br from-cyan-500 to-blue-600" />
            <div className="text-white font-semibold tracking-tight">Theron</div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a href="#" className="hover:text-white">About</a>
            <a href="#" className="hover:text-white">Features</a>
            <a href="#" className="hover:text-white">Science</a>
            <a href="#signup" className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-[0_10px_30px_rgba(56,189,248,0.3)]">Start</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Benefits />
        <CTA />
      </main>

      <Footer />
    </div>
  )
}

export default App
