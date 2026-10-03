// Decorative schematic: raw water (left) is treated through each vessel and leaves clear (right).
const stages = ['Filtration', 'Softening', 'Reverse osmosis', 'UV sterilization']

export default function TreatmentTrain() {
  return (
    <svg viewBox="0 0 640 420" className="h-auto w-full" role="img" aria-label="Schematic of water moving through filtration, softening, reverse osmosis and UV sterilization stages, ending as clean water">
      <defs>
        <linearGradient id="pipe" x1="0" x2="640" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#9A7B4F" /><stop offset=".45" stopColor="#7FA7B0" /><stop offset="1" stopColor="#3CC0EE" />
        </linearGradient>
        <linearGradient id="level" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3CC0EE" stopOpacity=".9" /><stop offset="1" stopColor="#1E6FA8" />
        </linearGradient>
      </defs>
      <g stroke="#3CC0EE" strokeOpacity=".12">
        {[...Array(9)].map((_, i) => <line key={'v' + i} x1={i * 80} y1="0" x2={i * 80} y2="420" />)}
        {[...Array(6)].map((_, i) => <line key={'h' + i} x1="0" y1={i * 84} x2="640" y2={i * 84} />)}
      </g>
      <rect x="0" y="283" width="640" height="14" rx="7" fill="url(#pipe)" />
      <path d="M0 290H640" stroke="#fff" strokeOpacity=".55" strokeWidth="3" className="flow" fill="none" />
      {stages.map((s, i) => {
        const x = 60 + i * 135
        return (
          <g key={s}>
            <rect x={x} y="80" width="76" height="203" rx="38" fill="#0B3350" stroke="#3CC0EE" strokeOpacity=".7" strokeWidth="1.5" />
            <rect x={x + 6} y={130 - i * 6} width="64" height={147 + i * 6} rx="32" fill="url(#level)" opacity={0.45 + i * 0.18} />
            <path d={`M${x + 20} 108V250`} stroke="#fff" strokeOpacity=".35" strokeWidth="3" strokeLinecap="round" />
            <rect x={x + 28} y="62" width="20" height="18" rx="3" fill="#1E6FA8" />
            <text x={x + 38} y="324" textAnchor="middle" fill="#fff" fillOpacity=".85" fontSize="12.5" fontWeight="600">{s.split(' ')[0]}</text>
            <text x={x + 38} y="341" textAnchor="middle" fill="#fff" fillOpacity=".55" fontSize="12">{s.split(' ').slice(1).join(' ') || '\u00A0'}</text>
            <text x={x + 38} y="52" textAnchor="middle" fill="#6DBE45" fontSize="12" fontWeight="700">{`0${i + 1}`}</text>
          </g>
        )
      })}
      <text x="4" y="372" fill="#C9A66B" fontSize="13" fontWeight="600">Raw water</text>
      <text x="636" y="372" textAnchor="end" fill="#3CC0EE" fontSize="13" fontWeight="600">Clean water</text>
    </svg>
  )
}
