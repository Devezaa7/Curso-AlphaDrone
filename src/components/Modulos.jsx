// SUBSTITUIR: adicione os módulos reais do curso
const modulos = [
  { numero: '01', titulo: 'Introdução ao mundo dos drones', descricao: 'Conheça os tipos de aeronaves, componentes e funcionamento básico.' },
  { numero: '02', titulo: 'Legislação e Regulamentação', descricao: 'ANAC, DECEA e tudo que você precisa saber pra voar dentro da lei.' },
  { numero: '03', titulo: 'Operação e Planejamento', descricao: 'Como planejar e executar missões com segurança e eficiência.' },
  { numero: '04', titulo: 'Manutenção', descricao: 'Cuidados essenciais para manter seu drone em perfeitas condições.' },
  { numero: '05', titulo: 'Prática de Voo', descricao: 'Coloque em prática tudo que aprendeu com supervisão dos instrutores.' },
]

export default function Modulos() {
  return (
    <section style={{ padding: '6rem 0', background: 'var(--navy)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="section-tag">Conteúdo programático</span>
          <h2 className="section-title">
            O QUE VOCÊ VAI<br />
            <span className="orange">APRENDER</span>
          </h2>
          <div className="orange-line" style={{ margin: '1rem auto' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {modulos.map((m, i) => (
            <div key={i} className="card">
              <div style={{ fontFamily: 'Barlow Condensed', fontSize: '3rem', fontWeight: 900, color: 'rgba(232,125,43,0.2)', lineHeight: 1, marginBottom: '0.5rem' }}>
                {m.numero}
              </div>
              <h3 style={{ fontFamily: 'Barlow Condensed', fontSize: '1.2rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                {m.titulo}
              </h3>
              <p style={{ color: 'var(--gray)', fontSize: '0.9rem', lineHeight: 1.6 }}>{m.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
