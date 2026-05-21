import { FaWhatsapp, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer>
      <div style={{ fontFamily: 'Barlow Condensed', fontSize: '1.8rem', fontWeight: 900, letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
        Alpha <span style={{ color: '#e87d2b' }}>Drone</span>
      </div>
      <p style={{ color: 'var(--gray)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
        Formando pilotos com segurança e confiança.
      </p>

      <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginBottom: '1.5rem' }}>
        <a href="https://wa.me/5521995441976?text=Curso" target="_blank" rel="noopener noreferrer"
          style={{ color: '#25D366', fontSize: '1.6rem', display: 'flex', alignItems: 'center', gap: '0.4rem', textDecoration: 'none' }}>
          <FaWhatsapp /> <span style={{ fontSize: '0.85rem', color: 'var(--gray)' }}>WhatsApp</span>
        </a>
        <a href="https://www.instagram.com/alphadroneoficial/" target="_blank" rel="noopener noreferrer"
          style={{ color: '#E1306C', fontSize: '1.6rem', display: 'flex', alignItems: 'center', gap: '0.4rem', textDecoration: 'none' }}>
          <FaInstagram /> <span style={{ fontSize: '0.85rem', color: 'var(--gray)' }}>@alphadroneoficial</span>
        </a>
      </div>

      <div style={{ color: 'var(--gray)', fontSize: '0.8rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1.5rem' }}>
        © {new Date().getFullYear()} Alpha Drone — Todos os direitos reservados
      </div>
    </footer>
  )
}