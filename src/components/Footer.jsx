export default function Footer() {
  return (
    <footer>
      <div style={{ fontFamily: 'Barlow Condensed', fontSize: '1.8rem', fontWeight: 900, letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
        ALPHA <span className="orange">DRONE</span>
      </div>
      <p style={{ color: 'var(--gray)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
        Formando pilotos com segurança e confiança.
      </p>
      <div style={{ color: 'var(--gray)', fontSize: '0.8rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1.5rem' }}>
        © {new Date().getFullYear()} Alpha Drone — Todos os direitos reservados
      </div>
    </footer>
  )
}
