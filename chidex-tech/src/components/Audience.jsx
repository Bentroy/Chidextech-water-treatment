import { audiences } from '../data'

export default function Audience() {
  return (
    <section id="applications" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <h2 className="max-w-3xl font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
          From a single household to a full production line.
        </h2>
        <div className="mt-14 grid border-t border-ink/15 md:grid-cols-2 lg:grid-cols-4">
          {audiences.map((a, i) => (
            <div key={a.title} className={`py-8 md:px-6 ${i % 4 ? 'lg:border-l lg:border-ink/15' : 'lg:pl-0'} ${i % 2 ? 'md:border-l md:border-ink/15 lg:border-l' : ''}`}>
              <div className="mb-8 h-1 w-10 rounded bg-aqua" style={{ width: `${(i + 1) * 25}%`, maxWidth: '100%' }} aria-hidden="true" />
              <h3 className="font-display text-2xl font-bold">{a.title}</h3>
              <p className="mt-2 max-w-xs text-ink/65">{a.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
