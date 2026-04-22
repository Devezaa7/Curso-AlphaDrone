export default function Footer() {
  return (
    <footer>
      <p style={{ color: 'var(--gray)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
        Formando pilotos com segurança e confiança.
      </p>
      <div style={{ color: 'var(--gray)', fontSize: '0.8rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1.5rem' }}>
        © {new Date().getFullYear()} Alpha Drone — Todos os direitos reservados
      </div>
    </footer>
  )
}
