export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-grid" />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 720 }}>
          <span className="section-tag animate-fade-up">Alpha Drone — Escola de Pilotos</span>
          <h1 className="section-title animate-fade-up delay-1" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', marginBottom: '1.5rem' }}>
            APRENDA A<br />
            VOAR COM<br />
            <span className="orange">CONFIANÇA</span>
          </h1>
          <p className="animate-fade-up delay-2" style={{
            color: 'var(--gray)',
            fontSize: '1.1rem',
            lineHeight: 1.7,
            maxWidth: 520,
            marginBottom: '2.5rem'
          }}>
            {/* SUBSTITUIR: Descrição curta e impactante do curso */}
            Do zero ao voo: aprenda legislação, regulamentação e pilotagem de drones com quem vive isso na prática.
          </p>
          <div className="animate-fade-up delay-3" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#cursos" className="btn-orange">VER OS CURSOS</a>
            <a href="#video" className="btn-outline">ASSISTIR APRESENTAÇÃO</a>
          </div>
        </div>
      </div>

      {/* Elemento decorativo */}
      <div style={{
        position: 'absolute',
        right: '-5%',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '45vw',
        height: '45vw',
        maxWidth: 600,
        background: 'radial-gradient(circle, rgba(232,125,43,0.06) 0%, transparent 70%)',
        borderRadius: '50%',
        border: '1px solid rgba(232,125,43,0.08)',
        pointerEvents: 'none'
      }} />
    </section>
  )
}
