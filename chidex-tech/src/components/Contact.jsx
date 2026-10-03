import { useState } from 'react'
import { Phone, MessageCircle, Mail, MapPin, CheckCircle2 } from 'lucide-react'
import { company, services } from '../data'

const initial = { name: '', phone: '', email: '', need: '', message: '' }

export default function Contact() {
  const [v, setV] = useState(initial)
  const [errors, setErrors] = useState({})
  const [done, setDone] = useState(false)
  const set = (k) => (e) => setV({ ...v, [k]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    const er = {}
    if (v.name.trim().length < 2) er.name = 'Enter your name.'
    if (!/^[+\d][\d\s-]{8,}$/.test(v.phone.trim())) er.phone = 'Enter a valid phone number, for example 0704 520 1690.'
    if (v.email && !/^\S+@\S+\.\S+$/.test(v.email)) er.email = 'Enter a valid email address.'
    if (!v.need) er.need = 'Choose what you need.'
    setErrors(er)
    if (!Object.keys(er).length) setDone(true) // Connect a backend or form service here.
  }

  const field = 'mt-1.5 w-full rounded-xl border border-ink/15 bg-white px-4 py-3 outline-none transition focus:border-tank focus:ring-2 focus:ring-aqua/40'
  const Err = ({ id }) => errors[id] ? <p id={id + '-err'} className="mt-1 text-sm text-red-700">{errors[id]}</p> : null

  return (
    <section id="contact" className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
      <div>
        <h2 className="font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">Tell us about your water.</h2>
        <p className="mt-4 max-w-md text-lg text-ink/65">Share what you need and our team will get back to you.</p>
        <ul className="mt-10 space-y-3">
          {[
            [Phone, company.phone, company.phoneHref, 'Call'],
            [MessageCircle, 'Chat on WhatsApp', company.whatsapp, 'WhatsApp'],
            [Mail, company.email, `mailto:${company.email}`, 'Email'],
          ].map(([I, t, h, l]) => (
            <li key={l}>
              <a href={h} className="flex items-center gap-4 rounded-2xl bg-white p-4 transition hover:shadow-md" {...(l === 'WhatsApp' ? { target: '_blank', rel: 'noreferrer' } : {})}>
                <span className="grid h-11 w-11 place-items-center rounded-full bg-ink text-aqua"><I size={20} /></span>
                <span><span className="block text-xs text-ink/50">{l}</span><span className="break-all font-semibold">{t}</span></span>
              </a>
            </li>
          ))}
          <li className="flex items-center gap-4 p-4">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-ink text-aqua"><MapPin size={20} /></span>
            <span><span className="block text-xs text-ink/50">Visit</span><span className="font-semibold">{company.address}</span></span>
          </li>
        </ul>
      </div>

      <div className="rounded-3xl bg-deep p-6 text-white sm:p-10">
        {done ? (
          <div className="swap flex h-full min-h-[20rem] flex-col items-center justify-center text-center" role="status">
            <CheckCircle2 className="h-14 w-14 text-leaf" />
            <h3 className="mt-5 font-display text-3xl font-extrabold">Request received</h3>
            <p className="mt-3 max-w-xs text-white/70">Thanks, {v.name.split(' ')[0]}. We will contact you on {v.phone}. For a faster reply, message us on WhatsApp.</p>
            <a href={company.whatsapp} target="_blank" rel="noreferrer" className="mt-6 rounded-full bg-aqua px-6 py-3 font-semibold text-ink">Open WhatsApp</a>
            <button onClick={() => { setV(initial); setDone(false) }} className="mt-4 text-sm text-white/60 underline">Send another request</button>
          </div>
        ) : (
          <form onSubmit={submit} noValidate className="space-y-4 text-ink">
            <h3 className="font-display text-2xl font-bold text-white">Request a quote</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <div><label htmlFor="name" className="text-sm text-white/80">Name</label>
                <input id="name" className={field} value={v.name} onChange={set('name')} autoComplete="name" aria-invalid={!!errors.name} aria-describedby="name-err" /><Err id="name" /></div>
              <div><label htmlFor="phone" className="text-sm text-white/80">Phone</label>
                <input id="phone" type="tel" className={field} value={v.phone} onChange={set('phone')} autoComplete="tel" aria-invalid={!!errors.phone} aria-describedby="phone-err" /><Err id="phone" /></div>
            </div>
            <div><label htmlFor="email" className="text-sm text-white/80">Email (optional)</label>
              <input id="email" type="email" className={field} value={v.email} onChange={set('email')} autoComplete="email" aria-invalid={!!errors.email} aria-describedby="email-err" /><Err id="email" /></div>
            <div><label htmlFor="need" className="text-sm text-white/80">What do you need?</label>
              <select id="need" className={field} value={v.need} onChange={set('need')} aria-invalid={!!errors.need} aria-describedby="need-err">
                <option value="">Select a service</option>
                {services.map((s) => <option key={s.id}>{s.title}</option>)}
                <option>Not sure yet</option>
              </select><Err id="need" /></div>
            <div><label htmlFor="message" className="text-sm text-white/80">Message (optional)</label>
              <textarea id="message" rows="4" className={field} value={v.message} onChange={set('message')} placeholder="Water source, location, how it will be used" /></div>
            <button type="submit" className="w-full rounded-full bg-aqua py-4 font-semibold text-ink transition hover:bg-white">Send request</button>
          </form>
        )}
      </div>
    </section>
  )
}
