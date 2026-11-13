import { Link } from 'react-router-dom'
import NeuralCanvas from '../components/NeuralCanvas.jsx'
import AITerminal from '../components/AITerminal.jsx'
import Reveal from '../components/Reveal.jsx'
import Marquee from '../components/Marquee.jsx'
import SpotlightCard from '../components/SpotlightCard.jsx'
import Counter from '../components/Counter.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import CTA from '../components/CTA.jsx'
import { Arrow } from '../components/Icons.jsx'
import { services, steps, projects, differentials } from '../data.jsx'

const stack = ['React', 'Next.js', 'Inteligência Artificial', 'Design Generativo', 'SEO Avançado', 'Vercel', 'TypeScript', 'Automação', 'Chatbots', 'Performance 99+']

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <NeuralCanvas className="hero__canvas" />
        <div className="hero__orb" aria-hidden="true" />
        <div className="container hero__grid">
          <div className="hero__content">
            <Reveal>
              <span className="badge">
                <span className="badge__tag">Novo</span>
                <span className="pulse-dot" />
                Sites gerados por IA em dias, não meses
              </span>
            </Reveal>
            <Reveal as="h1" className="display" delay={100}>
              Sites que elevam <br />sua marca <span className="shimmer-text" style={{ whiteSpace: 'nowrap' }}>mais alto.</span>
            </Reveal>
            <Reveal as="p" className="lead" delay={200}>
              A Altiora une inteligência artificial e design de alto padrão para criar sites
              rápidos, elegantes e feitos para converter.
            </Reveal>
            <Reveal className="btn-row" delay={300}>
              <Link to="/contato" className="btn btn--gold">Criar meu site <Arrow /></Link>
              <Link to="/processo" className="btn btn--ghost">Como funciona</Link>
            </Reveal>
            <Reveal className="hero__meta" delay={400}>
              <div><strong>7 dias</strong><span>Prazo médio de entrega</span></div>
              <div><strong>99+</strong><span>Score de performance</span></div>
              <div><strong>24/7</strong><span>Monitoramento</span></div>
            </Reveal>
          </div>
          <Reveal delay={300}>
            <AITerminal />
          </Reveal>
        </div>
      </section>

      <Marquee items={stack} />

      {/* SERVIÇOS */}
      <section className="section">
        <div className="container">
          <div className="sec-head">
            <Reveal>
              <span className="eyebrow">O que fazemos</span>
              <h2 className="h2">Soluções digitais <br /><span className="gold-text">movidas a IA.</span></h2>
            </Reveal>
            <Reveal as="p" className="lead" delay={120}>
              Do primeiro pixel ao lançamento, cada etapa é acelerada por inteligência
              artificial e lapidada por especialistas.
            </Reveal>
          </div>
          <div className="grid-3">
            {services.slice(0, 3).map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
                <SpotlightCard style={{ height: '100%' }}>
                  <span className="card__num">0{i + 1}</span>
                  <div className="card__icon">{s.icon}</div>
                  <h3 className="h3">{s.title}</h3>
                  <p>{s.text}</p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
          <Reveal className="btn-row" style={{ justifyContent: 'center', marginTop: 48 }}>
            <Link to="/servicos" className="btn btn--ghost">Todos os serviços <Arrow /></Link>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="section--tight">
        <div className="container">
          <Reveal className="stats">
            <div className="stat"><Counter to={10} suffix="x" /><span>Mais rápido que o desenvolvimento tradicional</span></div>
            <div className="stat"><Counter to={99} suffix="+" /><span>Pontuação de performance no Lighthouse</span></div>
            <div className="stat"><Counter to={100} suffix="%" /><span>Responsivo em todos os dispositivos</span></div>
            <div className="stat"><Counter to={7} suffix=" dias" /><span>Prazo médio do briefing ao ar</span></div>
          </Reveal>
        </div>
      </section>

      {/* DIFERENCIAIS — BENTO */}
      <section className="section">
        <div className="container">
          <div className="sec-head sec-head--center">
            <Reveal>
              <span className="eyebrow">Por que a Altiora</span>
              <h2 className="h2">Tecnologia de ponta. <br />Acabamento artesanal.</h2>
            </Reveal>
          </div>
          <div className="bento">
            {differentials.slice(0, 5).map((d, i) => (
              <SpotlightCard key={d.title}>
                <Reveal delay={i * 80}>
                  <div className="card__icon">{d.icon}</div>
                  <h3 className="h3">{d.title}</h3>
                  <p style={{ maxWidth: i === 0 ? 380 : 'none' }}>{d.text}</p>
                </Reveal>
                {i === 0 && <BentoVisual />}
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section className="section">
        <div className="container">
          <div className="sec-head">
            <Reveal>
              <span className="eyebrow">Como funciona</span>
              <h2 className="h2">Da ideia ao ar <br />em <span className="gold-text">4 etapas.</span></h2>
            </Reveal>
            <Reveal delay={120}>
              <Link to="/processo" className="btn btn--ghost">Ver processo completo <Arrow /></Link>
            </Reveal>
          </div>
          <div className="steps">
            {steps.map((s, i) => (
              <Reveal key={s.title} className="step" delay={i * 120}>
                <div className="step__dot">0{i + 1}</div>
                <h3 className="h3">{s.title}</h3>
                <p>{s.text}</p>
                <span className="step__time">{s.time}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFÓLIO */}
      <section className="section">
        <div className="container">
          <div className="sec-head">
            <Reveal>
              <span className="eyebrow">Projetos</span>
              <h2 className="h2">Trabalhos <span className="gold-text">selecionados.</span></h2>
            </Reveal>
            <Reveal delay={120}>
              <Link to="/portfolio" className="btn btn--ghost">Ver portfólio <Arrow /></Link>
            </Reveal>
          </div>
          <div className="grid-2">
            {projects.slice(0, 4).map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 120}>
                <ProjectCard {...p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}

function BentoVisual() {
  return (
    <svg className="bento__visual" viewBox="0 0 300 220" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="bv" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F3D9A0" />
          <stop offset="1" stopColor="#B8893B" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0, 1, 2, 3, 4].map((r) => (
        <circle key={r} cx="220" cy="190" r={40 + r * 34} stroke="url(#bv)" strokeOpacity={0.5 - r * 0.08} strokeDasharray={r % 2 ? '4 6' : 'none'} />
      ))}
      <path d="M220 110 L262 190 H178 Z" fill="url(#bv)" opacity="0.8" />
      <circle cx="220" cy="110" r="4" fill="#F3D9A0" />
    </svg>
  )
}
