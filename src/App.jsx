import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import CursorGlow from './components/CursorGlow.jsx'
import Home from './pages/Home.jsx'
import Servicos from './pages/Servicos.jsx'
import Processo from './pages/Processo.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Sobre from './pages/Sobre.jsx'
import Contato from './pages/Contato.jsx'
import NotFound from './pages/NotFound.jsx'

const titles = {
  '/': 'Altiora — Sites criados com Inteligência Artificial',
  '/servicos': 'Serviços — Altiora',
  '/processo': 'Processo — Altiora',
  '/portfolio': 'Portfólio — Altiora',
  '/sobre': 'Sobre — Altiora',
  '/contato': 'Contato — Altiora',
}

export default function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    document.title = titles[pathname] || 'Página não encontrada — Altiora'
  }, [pathname])

  return (
    <>
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-noise" aria-hidden="true" />
      <CursorGlow />
      <Navbar />
      <main key={pathname}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/processo" element={<Processo />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
