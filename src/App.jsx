import './index.css'
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
