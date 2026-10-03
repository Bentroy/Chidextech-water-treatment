import { ImagePlus } from 'lucide-react'
import { projects } from '../data'

// Replace each placeholder with a real photo: add `image: '/projects/name.jpg'` in data.js.
export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">Field work</h2>
        <p className="max-w-sm text-ink/60">Placeholder slots for installation photos and project details.</p>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {projects.map((p, i) => (
          <article key={p.n} className={i === 1 ? 'md:mt-10' : ''}>
            <div className="flex aspect-[4/5] items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed border-tank/30 bg-white">
              {p.image
                ? <img src={p.image} alt={p.title} className="h-full w-full object-cover" />
                : <span className="flex flex-col items-center gap-2 text-sm text-tank/60"><ImagePlus /> Add project photo</span>}
            </div>
            <h3 className="mt-4 font-display text-xl font-bold">{p.title}</h3>
            <p className="text-sm text-ink/60">Project {p.n} · {p.place}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
