import { Phone, ArrowDown } from 'lucide-react'
import TreatmentTrain from './TreatmentTrain'
import { company } from '../data'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink pt-28 text-white lg:pt-0">
      <div className="absolute -right-40 top-10 h-[34rem] w-[34rem] rounded-full bg-tank/30 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto grid min-h-[100svh] max-w-7xl items-center gap-10 px-5 pb-16 lg:grid-cols-[1.05fr_1fr] lg:gap-8 lg:px-8 lg:pb-12 lg:pt-24">
        <div className="rise">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 px-3.5 py-1.5 text-xs font-medium text-white/80">
            <span className="h-1.5 w-1.5 rounded-full bg-leaf" /> CAC registered · Lagos, Nigeria
          </p>
          <h1 className="font-display text-[2.6rem] font-extrabold leading-[1.02] tracking-tight sm:text-6xl xl:text-7xl">
            Clean water,<br />treated to suit<br />where it comes from.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            Water treatment, borehole solutions, filtration systems and bottled water factory installation for homes, estates, businesses and industries across Nigeria.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="rounded-full bg-aqua px-7 py-4 text-center font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-white">Get a quote</a>
            <a href="#services" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-4 font-semibold transition hover:border-white hover:bg-white/10">
              See our services <ArrowDown size={17} />
            </a>
          </div>
          <a href={company.phoneHref} className="mt-8 inline-flex items-center gap-2 text-sm text-white/70 hover:text-white">
            <Phone size={16} className="text-aqua" /> Call {company.phone}
          </a>
        </div>
        <div className="rise [animation-delay:.2s]">
          <div className="rounded-3xl border border-white/10 bg-deep/60 p-4 sm:p-6">
            <TreatmentTrain />
          </div>
          <p className="mt-3 text-xs text-white/50">Illustration: a typical treatment sequence. Systems are specified for each site.</p>
        </div>
      </div>
    </section>
  )
}
