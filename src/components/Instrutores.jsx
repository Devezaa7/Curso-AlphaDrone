const instrutores = [
  {
    foto: '/Jhonathas.jpeg',
    nome: 'Jhonathas Costa',
    especialidade: 'Fotografia, Filmagem e Pilotagem',
    bio: 'Fotógrafo e videomaker desde 2020, com experiência em eventos esportivos como a Maratona do Rio e trabalhos para marcas como Nike, Olympikus e Hering. Instrutor de drone no Senac RJ desde 2023 e na MyView desde 2025.',
    experiencia: '+70 turmas • +1.500h de aula',
    certificado: null,
  },
  {
    foto: '/Flavio.jpeg',
    nome: 'Flávio Palmieri',
    especialidade: 'Operação, Mapeamento e Inspeção',
    bio: 'Formado em Logística, Mecatrônica e Telecomunicações. 8 anos de atuação com drones, com especializações em termografia, aeroinspeção, mapeamento e pilotagem em plataforma em instituições como Senac, Senar e Drone Plus.',
    experiencia: '8 anos de experiência',
    certificado: '/CertificadoDahua.jpeg',
  },
  {
    foto: '/Jhon.jpeg',
    nome: 'Linneker Dutra Lima',
    especialidade: 'Drone Offshore, FPV e Eventos',
    bio: 'Eletrotécnico de formação, piloto de drone na área offshore desde 2022. Especialista em drones estabilizados e FPV, com atuação em casamentos, eventos ao ar livre e inspeções em plataformas e navios de petróleo.',
    experiencia: 'Piloto Offshore • CAAR • Aeroinspeção',
    certificado: null,
  },
]

export default function Instrutores() {
  return (
    <section id="instrutores" style={{ padding: '6rem 0', background: 'var(--navy-light)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="section-tag">Quem vai te ensinar</span>
          <h2 className="section-title">
            NOSSOS<br />
            <span className="orange">INSTRUTORES</span>
          </h2>
          <div className="orange-line" style={{ margin: '1rem auto' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {instrutores.map((inst, i) => (
            <div key={i} className="instrutor-card">
              <div className="instrutor-avatar" style={{ overflow: 'hidden', background: 'none', padding: 0 }}>
                <img src={inst.foto} alt={inst.nome} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
              </div>
              <h3 style={{ fontFamily: 'Barlow Condensed', fontSize: '1.4rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.3rem' }}>
                {inst.nome}
              </h3>
              <div style={{ color: 'var(--orange)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1rem' }}>
                {inst.especialidade}
              </div>
              <p style={{ color: 'var(--gray)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                {inst.bio}
              </p>
              <div style={{ background: 'rgba(232,125,43,0.1)', border: '1px solid rgba(232,125,43,0.2)', padding: '0.5rem 1rem', fontSize: '0.85rem', color: 'var(--orange)' }}>
                {inst.experiencia}
              </div>
              {inst.certificado && (
                <div style={{ marginTop: '1rem' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--gray)', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Certificação</div>
                  <img src={inst.certificado} alt="Certificado" style={{ width: '70px', objectFit: 'contain', borderRadius: 4, border: '1px solid rgba(255,255,255,0.1)' }} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}