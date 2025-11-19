import { Link, NavLink, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#05060a] text-slate-100">
      {/* Deep space gradient + vignette */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1100px_600px_at_10%_-10%,rgba(34,211,238,0.08)_0%,transparent_60%),radial-gradient(900px_500px_at_90%_-10%,rgba(99,102,241,0.08)_0%,transparent_55%),radial-gradient(1200px_700px_at_50%_120%,rgba(236,72,153,0.06)_0%,transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.06]" style={{backgroundImage: "linear-gradient(to right, #0f172a 1px, transparent 1px), linear-gradient(to bottom, #0f172a 1px, transparent 1px)", backgroundSize: "44px 44px"}} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur-xl supports-[backdrop-filter]:bg-black/30 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-600 to-indigo-700 shadow-[0_10px_50px_rgba(56,189,248,0.35)]" />
            <span className="text-white font-semibold tracking-tight">Theron</span>
          </Link>
          <nav className="hidden md:flex items-center gap-7 text-sm text-slate-300">
            <NavLink to="/features" className={({isActive})=>`hover:text-white ${isActive?'text-white':''}`}>Features</NavLink>
            <NavLink to="/science" className={({isActive})=>`hover:text-white ${isActive?'text-white':''}`}>Science</NavLink>
            <NavLink to="/about" className={({isActive})=>`hover:text-white ${isActive?'text-white':''}`}>About</NavLink>
            <a href="#signup" className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-fuchsia-600 text-white font-semibold shadow-[0_10px_40px_rgba(56,189,248,0.35)]">Get Theron</a>
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600" />
            <div className="text-white font-semibold">Theron</div>
          </div>
          <nav className="flex items-center gap-6 text-slate-300/80 text-sm">
            <Link to="/about" className="hover:text-white transition">About</Link>
            <Link to="/features" className="hover:text-white transition">Features</Link>
            <Link to="/science" className="hover:text-white transition">Science</Link>
            <a href="#" className="hover:text-white transition">Privacy</a>
          </nav>
          <div className="flex items-center gap-3 text-slate-300/80 text-xs">
            <span>© {new Date().getFullYear()} Theron</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
