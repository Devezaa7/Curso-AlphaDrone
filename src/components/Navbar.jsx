export default function Navbar() {
  return (
    <nav className="navbar">
      <div style={{ display: 'flex', alignItems: 'center', gap: '0' }}>
        <img src="/AlphaDrone.png" height="64" width="64" style={{ objectFit: 'contain' }} alt="Alpha Drone" />
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
          <span style={{ fontFamily: 'Barlow Condensed', fontWeight: 900, fontSize: '0.95rem', letterSpacing: '0.05em', color: 'white' }}>ALPHA</span>
          <span style={{ fontFamily: 'Barlow Condensed', fontWeight: 900, fontSize: '0.95rem', letterSpacing: '0.05em', color: 'var(--orange)' }}>DRONE</span>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <a href="#cursos" style={{ color: 'var(--gray)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, letterSpacing: '0.05em' }}>CURSOS</a>
        <a href="#instrutores" style={{ color: 'var(--gray)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, letterSpacing: '0.05em' }}>INSTRUTORES</a>
        <a href="#cursos" className="btn-orange" style={{ padding: '0.5rem 1.4rem', fontSize: '0.9rem' }}>QUERO ME INSCREVER</a>
      </div>
    </nav>
  )
}