const stats = [
  { numero: '+11',    label: 'Anos de experiência' },
  { numero: '+2.000', label: 'Horas de aula' },
  { numero: '+70',    label: 'Turmas formadas' },
  { numero: '2',      label: 'Modalidades de curso' },
]

export default function Stats() {
  return (
    <section style={{ background: 'var(--navy-light)', borderTop: '1px solid rgba(232,125,43,0.15)', borderBottom: '1px solid rgba(232,125,43,0.15)', padding: '3rem 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '2rem', textAlign: 'center' }}>
          {stats.map((s, i) => (
            <div key={i}>
              <div className="stat-number">{s.numero}</div>
              <div style={{ color: 'var(--gray)', fontSize: '0.9rem', marginTop: '0.3rem' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}