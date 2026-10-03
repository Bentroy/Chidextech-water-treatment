import { BadgeCheck } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="bg-ink py-20 text-white lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1.3fr_1fr] lg:px-8">
        <h2 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
          Safe water is basic infrastructure. We build it to last.
        </h2>
        <div className="space-y-5 text-lg leading-relaxed text-white/70">
          <p>Chidex Tech Water Treatment specializes in water treatment, borehole solutions, filtration systems and bottled water factory installation.</p>
          <p>We provide reliable water solutions for homes, estates, businesses and industries across Nigeria.</p>
          <p className="inline-flex items-center gap-2 font-semibold text-white"><BadgeCheck className="text-leaf" /> CAC registered</p>
        </div>
      </div>
    </section>
  )
}
