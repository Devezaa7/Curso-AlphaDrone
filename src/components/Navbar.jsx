export default function Navbar() {
  return (
    <nav className="navbar">
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          marginLeft: '2rem'
        }}
      >
        <img
          src="/AlphaDrone.png"
          alt="Alpha Drone"
          style={{
            objectFit: 'contain',
            maxWidth: 70,
            height: 'auto'
          }}
        />
      </div>

      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <a
          href="#cursos"
          style={{
            color: 'var(--gray)',
            textDecoration: 'none',
            fontSize: '0.9rem',
            fontWeight: 500,
            letterSpacing: '0.05em'
          }}
        >
          CURSOS
        </a>

        <a
          href="#instrutores"
          style={{
            color: 'var(--gray)',
            textDecoration: 'none',
            fontSize: '0.9rem',
            fontWeight: 500,
            letterSpacing: '0.05em'
          }}
        >
          INSTRUTORES
        </a>

        <a
          href="#cursos"
          className="btn-orange"
          style={{ padding: '0.5rem 1.4rem', fontSize: '0.9rem' }}
        >
          QUERO ME INSCREVER
        </a>
      </div>
    </nav>
  )
}