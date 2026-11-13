import { useState } from 'react'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import CTA from '../components/CTA.jsx'
import { projects } from '../data.jsx'

const categories = ['Todos', ...new Set(projects.map((p) => p.category))]

export default function Portfolio() {
  const [active, setActive] = useState('Todos')
  const list = active === 'Todos' ? projects : projects.filter((p) => p.category === active)

  return (
    <>
      <PageHero
        crumb="Portfólio"
        eyebrow="Portfólio"
        title={<>Projetos que <span className="shimmer-text">elevam marcas.</span></>}
        lead="Uma seleção de sites criados com nossa engine de IA e finalizados pelo nosso time de design."
      />

      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          <Reveal className="filters">
            {categories.map((c) => (
              <button key={c} className={`filter ${active === c ? 'active' : ''}`} onClick={() => setActive(c)}>
                {c}
              </button>
            ))}
          </Reveal>
          <div className="grid-2" key={active}>
            {list.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 120}>
                <ProjectCard {...p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA title={<>Seu projeto pode ser <span className="shimmer-text">o próximo.</span></>} />
    </>
  )
}
