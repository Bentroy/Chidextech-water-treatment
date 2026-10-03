import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo.png'

const links = [
  ['Services', '#services'], ['Applications', '#applications'],
  ['Projects', '#projects'], ['About', '#about'], ['Contact', '#contact'],
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? 'bg-ink/95 py-2 shadow-lg shadow-black/20 backdrop-blur' : 'bg-transparent py-4'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#top" className="flex items-center gap-3 text-white" aria-label="Chidex Tech Water Treatment home">
          <img src={logo} alt="" className="h-10 w-10 rounded-full bg-white object-cover" />
          <span className="font-display leading-none">
            <span className="block text-lg font-extrabold tracking-tight">Chidex Tech</span>
            <span className="block pt-0.5 text-[11px] font-medium text-aqua">Water Treatment</span>
          </span>
        </a>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {links.map(([l, h]) => (
            <a key={h} href={h} className="text-sm font-medium text-white/75 transition hover:text-white">{l}</a>
          ))}
          <a href="#contact" className="rounded-full bg-aqua px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-white">Get a quote</a>
        </nav>
        <button className="text-white lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-white/10 px-5 pb-6 pt-3 lg:hidden" aria-label="Mobile">
          {links.map(([l, h]) => (
            <a key={h} href={h} onClick={() => setOpen(false)} className="block border-b border-white/10 py-4 font-display text-2xl font-bold text-white">{l}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="mt-5 block rounded-full bg-aqua py-3.5 text-center font-semibold text-ink">Get a quote</a>
        </nav>
      )}
    </header>
  )
}
