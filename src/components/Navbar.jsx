import { useState } from 'react'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav className="navbar">
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/AlphaDrone.png" alt="Alpha Drone" style={{ height: '60px', width: 'auto', objectFit: 'contain', marginRight: '-25px' }} />
          <span style={{ fontFamily: 'Barlow Condensed', fontWeight: 900, fontSize: '1.8rem', letterSpacing: '0.05em', color: '#ffffff' }}>
            Alpha <span style={{ color: '#e87d2b' }}>Drone</span>
          </span>
        </div>

        {/* Links desktop */}
        <div className="navbar-links">
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

        {/* Hamburger mobile */}
        <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>

      {/* Menu mobile */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <a href="#cursos" onClick={closeMenu}>Cursos</a>
        <a href="#instrutores" onClick={closeMenu}>Instrutores</a>
        <div className="social-links">
          <a href="https://wa.me/5521995441976?text=Curso" target="_blank" rel="noopener noreferrer"
            style={{ color: '#25D366', fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem', textDecoration: 'none' }}>
            <FaWhatsapp /> <span style={{ fontSize: '0.9rem', color: 'var(--gray)' }}>WhatsApp</span>
          </a>
          <a href="https://www.instagram.com/alphadroneoficial/" target="_blank" rel="noopener noreferrer"
            style={{ color: '#E1306C', fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem', textDecoration: 'none' }}>
            <FaInstagram /> <span style={{ fontSize: '0.9rem', color: 'var(--gray)' }}>Instagram</span>
          </a>
        </div>
        <a href="#cursos" className="btn-orange" onClick={closeMenu} style={{ textAlign: 'center' }}>
          Quero me inscrever
        </a>
      </div>
    </>
  )
}