import { FaWhatsapp, FaInstagram } from 'react-icons/fa'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src="/AlphaDrone.png" alt="Alpha Drone" style={{ height: '70px', width: 'auto', objectFit: 'contain', marginRight: '-25px' }} />
        <span style={{ fontFamily: 'Barlow Condensed', fontWeight: 900, fontSize: '1.8rem', letterSpacing: '0.05em', color: '#ffffff' }}>
          Alpha <span style={{ color: '#e87d2b' }}>Drone</span>
        </span>
      </div>

      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <a href="#cursos" style={{ color: 'var(--gray)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, letterSpacing: '0.05em' }}>Cursos</a>
        <a href="#instrutores" style={{ color: 'var(--gray)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, letterSpacing: '0.05em' }}>Instrutores</a>
        <a href="https://wa.me/5521995441976?text=Curso" target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', fontSize: '1.4rem' }}>
          <FaWhatsapp />
        </a>
        <a href="https://www.instagram.com/alphadroneoficial/" target="_blank" rel="noopener noreferrer" style={{ color: '#E1306C', fontSize: '1.4rem' }}>
          <FaInstagram />
        </a>
        <a href="#cursos" className="btn-orange" style={{ padding: '0.5rem 1.4rem', fontSize: '0.9rem' }}>Quero me inscrever</a>
      </div>
    </nav>
  )
}