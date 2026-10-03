import { useState } from 'react'
import { Droplets, ArrowDownToLine, Filter, Waves, FlaskConical, Sun, Factory } from 'lucide-react'
import { services } from '../data'

const icons = { Droplets, ArrowDownToLine, Filter, Waves, FlaskConical, Sun, Factory }

export default function Services() {
  const [active, setActive] = useState(services[0].id)
  const current = services.find((s) => s.id === active)
  const Icon = icons[current.icon]

  return (
    <section id="services" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      <h2 className="max-w-2xl font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
        One supplier for every stage of the water.
      </h2>
      <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,1fr)_1.25fr]">
        <ul className="grid gap-1.5" role="tablist" aria-label="Services">
          {services.map((s) => {
            const on = s.id === active
            return (
              <li key={s.id}>
                <button
                  role="tab" aria-selected={on}
                  onClick={() => setActive(s.id)} onMouseEnter={() => setActive(s.id)}
                  className={`flex w-full items-center justify-between rounded-xl px-5 py-4 text-left font-display text-lg font-bold transition ${on ? 'bg-ink text-white' : 'text-ink/70 hover:bg-white'}`}
                >
                  {s.title}
                  <span className={`h-2.5 w-2.5 rounded-full transition ${on ? 'bg-aqua' : 'bg-ink/15'}`} />
                </button>
              </li>
            )
          })}
        </ul>
        <div key={current.id} role="tabpanel" className="swap relative flex min-h-[22rem] flex-col justify-between overflow-hidden rounded-3xl bg-deep p-8 text-white sm:p-12">
          <Icon className="absolute -right-6 -top-6 h-56 w-56 text-aqua/10" strokeWidth={1} aria-hidden="true" />
          <Icon className="relative h-10 w-10 text-aqua" />
          <div className="relative">
            <h3 className="font-display text-3xl font-extrabold sm:text-4xl">{current.title}</h3>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-white/75">{current.text}</p>
            <a href="#contact" className="mt-8 inline-block rounded-full bg-leaf px-6 py-3 text-sm font-semibold text-ink transition hover:bg-white">Ask about this</a>
          </div>
        </div>
      </div>
    </section>
  )
}
