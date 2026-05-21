const cursos = [
  {
    tipo: 'EAD',
    badge: 'Online',
    titulo: 'Curso de Drone EAD',
    descricao: 'Aprenda no seu ritmo com acesso à apostila completa sobre legislação, regulamentação e teoria de drones.',
    preco: 'R$ 379,00',
    parcelamento: 'Pix, cartão à vista ou parcelado*',
    itens: [
      'Apostila completa',
      'Legislação e regulamentação ANAC/DECEA',
      'Teoria de pilotagem',
      'Certificado de conclusão',
    ],
    link:'https://pay.kiwify.com.br/MZtSm85',
    cta: 'Quero o curso EAD',
    destaque: false,
  },
  {
    tipo: 'Semi Presencial',
    badge: 'Mais completo',
    titulo: 'Curso de Drone Semi Presencial',
    descricao: 'Teoria online + prática presencial com drone. O caminho mais completo para se tornar um piloto confiante.',
    preco: 'R$ 879,00',
    parcelamento: 'Pix, cartão à vista ou parcelado*',
    itens: [
      'Tudo do curso EAD incluso',
      'Aula prática presencial com drone',
      'Acompanhamento via grupo no WhatsApp',
      'Certificado de conclusão',
    ],
    link: 'https://pay.kiwify.com.br/9AYEQej',
    cta: 'Quero o curso completo',
    destaque: true,
  },
]

export default function Cursos() {
  return (
    <section id="cursos" style={{ padding: '6rem 0', background: 'var(--navy-light)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="section-tag">Escolha seu curso</span>
          <h2 className="section-title">
            Duas formas de<br />
            <span className="orange">aprender</span>
          </h2>
          <div className="orange-line" style={{ margin: '1rem auto' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: 900, margin: '0 auto' }}>
          {cursos.map((curso, i) => (
            <div key={i} className="curso-card" style={curso.destaque ? { borderColor: 'var(--orange)' } : {}}>
              {curso.destaque && (
                <div style={{ background: 'var(--orange)', textAlign: 'center', padding: '0.4rem', fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.05em' }}>
                  ⭐ Recomendado
                </div>
              )}
              <div style={{ padding: '2rem' }}>
                <span className="badge">{curso.badge}</span>
                <h3 style={{ fontFamily: 'Barlow Condensed', fontSize: '1.6rem', fontWeight: 800, marginBottom: '1rem' }}>
                  {curso.titulo}
                </h3>
                <p style={{ color: 'var(--gray)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {curso.descricao}
                </p>
                <ul style={{ listStyle: 'none', marginBottom: '2rem' }}>
                  {curso.itens.map((item, j) => (
                    <li key={j} style={{ color: 'var(--gray)', fontSize: '0.9rem', padding: '0.4rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                      <span style={{ color: 'var(--orange)' }}>✓</span> {item}
                    </li>
                  ))}
                </ul>
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ fontFamily: 'Barlow Condensed', fontSize: '2.2rem', fontWeight: 900, color: 'var(--orange)' }}>{curso.preco}</div>
                  <div style={{ color: 'var(--gray)', fontSize: '0.85rem' }}>{curso.parcelamento}</div>
                </div>
                <a href={curso.link} className="btn-orange" style={{ width: '100%', textAlign: 'center', display: 'block' }}>
                  {curso.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
        <p style={{ textAlign: 'center', color: 'var(--gray)', fontSize: '0.8rem', marginTop: '1.5rem' }}>
          * Parcelamento sujeito a juros do cartão de crédito.
        </p>
      </div>
    </section>
  )
}