import { Instagram, Facebook } from 'lucide-react'
import { company } from '../data'

export default function Footer() {
  return (
    <footer className="bg-ink py-12 text-white/70">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-5 md:flex-row lg:px-8">
        <div>
          <p className="font-display text-xl font-extrabold text-white">Chidex Tech Water Treatment</p>
          <p className="mt-1 text-sm">{company.address}</p>
          <a href={company.phoneHref} className="mt-1 block text-sm hover:text-white">{company.phone}</a>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm" aria-label="Footer">
          {['Services', 'Applications', 'Projects', 'About', 'Contact'].map((l) => <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-white">{l}</a>)}
        </nav>
        <div className="flex gap-4">
          <a href={company.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-white"><Instagram /></a>
          <a href={company.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-white"><Facebook /></a>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-7xl px-5 text-xs text-white/40 lg:px-8">© {new Date().getFullYear()} Chidex Tech Water Treatment. Website concept.</p>
    </footer>
  )
}
