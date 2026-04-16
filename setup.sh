#!/bin/bash

echo "🚀 Criando projeto Alpha Drone..."

# Criar projeto Vite + React
npm create vite@latest . -- --template react > /dev/null 2>&1

# Instalar dependências
npm install > /dev/null 2>&1
npm install tailwindcss @tailwindcss/vite lucide-react > /dev/null 2>&1

echo "✅ Dependências instaladas!"

# ─── vite.config.js ───────────────────────────────────────────────
cat > vite.config.js << 'EOF'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
EOF

# ─── index.css ────────────────────────────────────────────────────
cat > src/index.css << 'EOF'
@import "tailwindcss";

@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800;900&family=Barlow:wght@300;400;500;600&display=swap');

:root {
  --navy: #0d1b2e;
  --navy-light: #162440;
  --orange: #e87d2b;
  --orange-light: #f59240;
  --white: #ffffff;
  --gray: #a0aec0;
}

* { margin: 0; padding: 0; box-sizing: border-box; }

html { scroll-behavior: smooth; }

body {
  background-color: var(--navy);
  color: var(--white);
  font-family: 'Barlow', sans-serif;
  overflow-x: hidden;
}

h1, h2, h3, h4 {
  font-family: 'Barlow Condensed', sans-serif;
}

.orange { color: var(--orange); }
.bg-navy { background-color: var(--navy); }
.bg-navy-light { background-color: var(--navy-light); }

/* Animações */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}
.animate-fade-up { animation: fadeUp 0.7s ease forwards; }
.animate-fade-in { animation: fadeIn 1s ease forwards; }
.delay-1 { animation-delay: 0.2s; }
.delay-2 { animation-delay: 0.4s; }
.delay-3 { animation-delay: 0.6s; }
.delay-4 { animation-delay: 0.8s; }

/* Botões */
.btn-orange {
  background: var(--orange);
  color: #fff;
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 700;
  font-size: 1.1rem;
  letter-spacing: 0.05em;
  padding: 0.85rem 2.2rem;
  border: none;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
  text-decoration: none;
  display: inline-block;
  clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px));
}
.btn-orange:hover {
  background: var(--orange-light);
  transform: translateY(-2px);
}

.btn-outline {
  background: transparent;
  color: var(--orange);
  border: 2px solid var(--orange);
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 700;
  font-size: 1.1rem;
  letter-spacing: 0.05em;
  padding: 0.85rem 2.2rem;
  cursor: pointer;
  transition: all 0.2s;
  text-decoration: none;
  display: inline-block;
  clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px));
}
.btn-outline:hover {
  background: var(--orange);
  color: #fff;
  transform: translateY(-2px);
}

/* Seção */
.section-title {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  line-height: 1;
}

.section-tag {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--orange);
  margin-bottom: 0.5rem;
  display: block;
}

/* Linha decorativa */
.orange-line {
  width: 60px;
  height: 4px;
  background: var(--orange);
  margin: 1rem 0;
}

/* Cards */
.card {
  background: var(--navy-light);
  border: 1px solid rgba(232, 125, 43, 0.15);
  padding: 2rem;
  transition: border-color 0.3s, transform 0.3s;
}
.card:hover {
  border-color: var(--orange);
  transform: translateY(-4px);
}

/* Navbar */
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  background: rgba(13, 27, 46, 0.92);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(232, 125, 43, 0.2);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Hero */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding-top: 80px;
}
.hero-bg {
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(ellipse at 70% 50%, rgba(232, 125, 43, 0.08) 0%, transparent 60%),
    radial-gradient(ellipse at 20% 80%, rgba(232, 125, 43, 0.05) 0%, transparent 50%);
}
.hero-grid {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(232,125,43,0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(232,125,43,0.05) 1px, transparent 1px);
  background-size: 60px 60px;
}

/* Video */
.video-wrapper {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  background: #000;
  border: 2px solid rgba(232, 125, 43, 0.3);
}
.video-wrapper iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

/* Stats */
.stat-number {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 3rem;
  font-weight: 900;
  color: var(--orange);
  line-height: 1;
}

/* Curso card */
.curso-card {
  background: var(--navy-light);
  border: 2px solid rgba(232, 125, 43, 0.2);
  overflow: hidden;
  transition: border-color 0.3s, transform 0.3s;
  position: relative;
}
.curso-card:hover {
  border-color: var(--orange);
  transform: translateY(-6px);
}
.curso-card .badge {
  background: var(--orange);
  color: #fff;
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 700;
  font-size: 0.8rem;
  letter-spacing: 0.15em;
  padding: 0.25rem 1rem;
  display: inline-block;
  margin-bottom: 1rem;
}

/* Instrutores */
.instrutor-card {
  background: var(--navy-light);
  border: 1px solid rgba(232, 125, 43, 0.15);
  padding: 2rem;
  text-align: center;
  transition: border-color 0.3s;
}
.instrutor-card:hover { border-color: var(--orange); }
.instrutor-avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--orange), var(--navy-light));
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 2.5rem;
  font-weight: 900;
  color: white;
  border: 3px solid var(--orange);
}

/* Footer */
footer {
  background: #080f1a;
  border-top: 1px solid rgba(232, 125, 43, 0.2);
  padding: 3rem 2rem;
  text-align: center;
}

/* Responsivo */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}
EOF

# ─── App.jsx ──────────────────────────────────────────────────────
cat > src/App.jsx << 'EOF'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Video from './components/Video'
import Cursos from './components/Cursos'
import Modulos from './components/Modulos'
import Instrutores from './components/Instrutores'
import Stats from './components/Stats'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Video />
      <Cursos />
      <Modulos />
      <Instrutores />
      <Footer />
    </>
  )
}
EOF

# ─── components/ ─────────────────────────────────────────────────
mkdir -p src/components

# Navbar
cat > src/components/Navbar.jsx << 'EOF'
export default function Navbar() {
  return (
    <nav className="navbar">
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
        {/* Substitua pela logo real: <img src="/logo.png" height="40" /> */}
        <div style={{
          width: 36, height: 36,
          background: 'var(--orange)',
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }} />
        <span style={{
          fontFamily: 'Barlow Condensed',
          fontWeight: 900,
          fontSize: '1.4rem',
          letterSpacing: '0.05em'
        }}>
          ALPHA <span className="orange">DRONE</span>
        </span>
      </div>

      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <a href="#cursos" style={{ color: 'var(--gray)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, letterSpacing: '0.05em' }}>CURSOS</a>
        <a href="#instrutores" style={{ color: 'var(--gray)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, letterSpacing: '0.05em' }}>INSTRUTORES</a>
        <a href="#cursos" className="btn-orange" style={{ padding: '0.5rem 1.4rem', fontSize: '0.9rem' }}>QUERO ME INSCREVER</a>
      </div>
    </nav>
  )
}
EOF

# Hero
cat > src/components/Hero.jsx << 'EOF'
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
EOF

# Stats
cat > src/components/Stats.jsx << 'EOF'
// SUBSTITUIR os números pelos dados reais dos instrutores
const stats = [
  { numero: '+X', label: 'Anos de experiência' },
  { numero: '+X', label: 'Horas de voo' },
  { numero: '3',  label: 'Instrutores especializados' },
  { numero: '2',  label: 'Modalidades de curso' },
]

export default function Stats() {
  return (
    <section style={{ background: 'var(--navy-light)', borderTop: '1px solid rgba(232,125,43,0.15)', borderBottom: '1px solid rgba(232,125,43,0.15)', padding: '3rem 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '2rem', textAlign: 'center' }}>
          {stats.map((s, i) => (
            <div key={i}>
              <div className="stat-number">{s.numero}</div>
              <div style={{ color: 'var(--gray)', fontSize: '0.9rem', marginTop: '0.3rem' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
EOF

# Video
cat > src/components/Video.jsx << 'EOF'
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
EOF

# Cursos
cat > src/components/Cursos.jsx << 'EOF'
// SUBSTITUIR: preços e links reais do Kiwify
const cursos = [
  {
    tipo: 'EAD',
    badge: 'ONLINE',
    titulo: 'Curso de Drone EAD',
    descricao: 'Aprenda no seu ritmo com acesso à apostila completa sobre legislação, regulamentação e teoria de drones.',
    preco: 'R$ XXX',
    parcelamento: 'ou X x de R$ XX',
    itens: [
      'Apostila completa',
      'Legislação e regulamentação ANAC/DECEA',
      'Teoria de pilotagem',
      'Certificado de conclusão',
    ],
    link: 'https://kiwify.com.br/LINK-EAD', // SUBSTITUIR
    cta: 'QUERO O CURSO EAD',
    destaque: false,
  },
  {
    tipo: 'SEMI PRESENCIAL',
    badge: 'MAIS COMPLETO',
    titulo: 'Curso de Drone Semi Presencial',
    descricao: 'Teoria online + prática presencial com drone. O caminho mais completo para se tornar um piloto confiante.',
    preco: 'R$ XXX',
    parcelamento: 'ou X x de R$ XX',
    itens: [
      'Tudo do curso EAD incluso',
      'Aula prática presencial com drone',
      'Acompanhamento via grupo no WhatsApp',
      'Certificado de conclusão',
    ],
    link: 'https://kiwify.com.br/LINK-SEMI', // SUBSTITUIR
    cta: 'QUERO O CURSO COMPLETO',
    destaque: true,
  },
]

export default function Cursos() {
  return (
    <section id="cursos" style={{ padding: '6rem 0', background: 'var(--navy-light)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="section-tag">Escolha seu curso</span>
          <h2 className="section-title">
            DUAS FORMAS DE<br />
            <span className="orange">APRENDER</span>
          </h2>
          <div className="orange-line" style={{ margin: '1rem auto' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: 900, margin: '0 auto' }}>
          {cursos.map((curso, i) => (
            <div key={i} className="curso-card" style={curso.destaque ? { borderColor: 'var(--orange)' } : {}}>
              {curso.destaque && (
                <div style={{ background: 'var(--orange)', textAlign: 'center', padding: '0.4rem', fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.15em' }}>
                  ⭐ RECOMENDADO
                </div>
              )}
              <div style={{ padding: '2rem' }}>
                <span className="badge">{curso.badge}</span>
                <h3 style={{ fontFamily: 'Barlow Condensed', fontSize: '1.6rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }}>
                  {curso.titulo}
                </h3>
                <p style={{ color: 'var(--gray)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {curso.descricao}
                </p>
                <ul style={{ listStyle: 'none', marginBottom: '2rem' }}>
                  {curso.itens.map((item, j) => (
                    <li key={j} style={{ color: 'var(--gray)', fontSize: '0.9rem', padding: '0.4rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                      <span style={{ color: 'var(--orange)' }}>✓</span> {item}
                    </li>
                  ))}
                </ul>
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ fontFamily: 'Barlow Condensed', fontSize: '2.2rem', fontWeight: 900, color: 'var(--orange)' }}>{curso.preco}</div>
                  <div style={{ color: 'var(--gray)', fontSize: '0.85rem' }}>{curso.parcelamento}</div>
                </div>
                <a href={curso.link} className="btn-orange" style={{ width: '100%', textAlign: 'center', display: 'block' }}>
                  {curso.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
EOF

# Modulos
cat > src/components/Modulos.jsx << 'EOF'
// SUBSTITUIR: adicione os módulos reais do curso
const modulos = [
  { numero: '01', titulo: 'Introdução ao mundo dos drones', descricao: 'Conheça os tipos de aeronaves, componentes e funcionamento básico.' },
  { numero: '02', titulo: 'Legislação e Regulamentação', descricao: 'ANAC, DECEA e tudo que você precisa saber pra voar dentro da lei.' },
  { numero: '03', titulo: 'Operação e Planejamento', descricao: 'Como planejar e executar missões com segurança e eficiência.' },
  { numero: '04', titulo: 'Manutenção', descricao: 'Cuidados essenciais para manter seu drone em perfeitas condições.' },
  { numero: '05', titulo: 'Prática de Voo', descricao: 'Coloque em prática tudo que aprendeu com supervisão dos instrutores.' },
]

export default function Modulos() {
  return (
    <section style={{ padding: '6rem 0', background: 'var(--navy)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="section-tag">Conteúdo programático</span>
          <h2 className="section-title">
            O QUE VOCÊ VAI<br />
            <span className="orange">APRENDER</span>
          </h2>
          <div className="orange-line" style={{ margin: '1rem auto' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {modulos.map((m, i) => (
            <div key={i} className="card">
              <div style={{ fontFamily: 'Barlow Condensed', fontSize: '3rem', fontWeight: 900, color: 'rgba(232,125,43,0.2)', lineHeight: 1, marginBottom: '0.5rem' }}>
                {m.numero}
              </div>
              <h3 style={{ fontFamily: 'Barlow Condensed', fontSize: '1.2rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                {m.titulo}
              </h3>
              <p style={{ color: 'var(--gray)', fontSize: '0.9rem', lineHeight: 1.6 }}>{m.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
EOF

# Instrutores
cat > src/components/Instrutores.jsx << 'EOF'
// SUBSTITUIR: dados reais dos instrutores
const instrutores = [
  {
    inicial: 'A',
    nome: 'Nome do Instrutor 1',
    especialidade: 'Especialidade — ex: Legislação e Regulamentação',
    bio: 'Breve descrição da experiência e background do instrutor. Há quanto tempo voa, onde trabalhou, certificações.',
    experiencia: 'X anos de experiência',
  },
  {
    inicial: 'B',
    nome: 'Nome do Instrutor 2',
    especialidade: 'Especialidade — ex: Operação e Manutenção',
    bio: 'Breve descrição da experiência e background do instrutor. Há quanto tempo voa, onde trabalhou, certificações.',
    experiencia: 'X anos de experiência',
  },
  {
    inicial: 'C',
    nome: 'Nome do Instrutor 3',
    especialidade: 'Especialidade — ex: Pilotagem Prática',
    bio: 'Breve descrição da experiência e background do instrutor. Há quanto tempo voa, onde trabalhou, certificações.',
    experiencia: 'X anos de experiência',
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
              <div className="instrutor-avatar">{inst.inicial}</div>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
EOF

# Footer
cat > src/components/Footer.jsx << 'EOF'
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
EOF

echo ""
echo "✅ Projeto Alpha Drone criado com sucesso!"
echo ""
echo "Para rodar:"
echo "  cd alpha-drone"
echo "  npm run dev"
