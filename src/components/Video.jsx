export default function Video() {
  // SUBSTITUIR: cole aqui o ID do vídeo do YouTube
  // Exemplo: se o link for https://youtube.com/watch?v=XXXXXXXXXXX
  // coloque videoId = "XXXXXXXXXXX"
  const videoId = "XXXXXXXXXXX"

  return (
    <section id="video" style={{ padding: '6rem 0', background: 'var(--navy)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="section-tag">Conheça o curso</span>
          <h2 className="section-title">
            ASSISTA ANTES<br />
            DE <span className="orange">COMPRAR</span>
          </h2>
          <div className="orange-line" style={{ margin: '1rem auto' }} />
        </div>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div className="video-wrapper">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title="Apresentação do curso"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}
