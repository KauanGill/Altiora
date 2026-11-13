import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import SpotlightCard from '../components/SpotlightCard.jsx'
import CTA from '../components/CTA.jsx'
import { Arrow } from '../components/Icons.jsx'
import { services, differentials } from '../data.jsx'

// Valores ilustrativos — ajuste conforme a tabela de preços da Altiora.
const plans = [
  {
    name: 'Essencial',
    price: 'Sob consulta',
    desc: 'Para quem está começando e precisa de presença digital profissional.',
    items: ['Landing page ou site de até 3 páginas', 'Design gerado por IA', 'Responsivo + SSL', 'Formulário de contato', '1 rodada de revisões'],
  },
  {
    name: 'Profissional',
    price: 'Sob consulta',
    desc: 'O equilíbrio ideal entre sofisticação, conteúdo e performance.',
    items: ['Site de até 8 páginas', 'Copywriting com IA', 'SEO técnico completo', 'Painel de edição', 'Integração com WhatsApp', '3 rodadas de revisões'],
    featured: true,
  },
  {
    name: 'Elite',
    price: 'Sob medida',
    desc: 'Projetos completos para marcas que exigem o mais alto padrão.',
    items: ['Páginas ilimitadas ou e-commerce', 'Chatbot com IA treinado', 'Identidade visual completa', 'Animações exclusivas', 'Suporte prioritário', 'Revisões ilimitadas'],
  },
]

export default function Servicos() {
  return (
    <>
      <PageHero
        crumb="Serviços"
        eyebrow="Serviços"
        title={<>Tudo que sua marca precisa para <span className="shimmer-text">dominar o digital.</span></>}
        lead="Combinamos IA generativa com design e engenharia de alto nível para entregar soluções completas — rápidas, bonitas e pensadas para gerar resultado."
      />

      <section className="section" style={{ paddingTop: 40 }}>
        <div className="container">
          <div className="grid-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 100}>
                <SpotlightCard style={{ height: '100%' }}>
                  <span className="card__num">0{i + 1}</span>
                  <div className="card__icon">{s.icon}</div>
                  <h3 className="h3">{s.title}</h3>
                  <p>{s.text}</p>
                  <ul className="card__list">
                    {s.items.map((it) => <li key={it}>{it}</li>)}
                  </ul>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sec-head sec-head--center">
            <Reveal>
              <span className="eyebrow">Planos</span>
              <h2 className="h2">Escolha seu <span className="gold-text">ponto de partida.</span></h2>
            </Reveal>
            <Reveal as="p" className="lead" delay={100}>
              Todos os planos incluem hospedagem no primeiro ano, certificado SSL e design 100% exclusivo.
            </Reveal>
          </div>
          <div className="grid-3">
            {plans.map((p, i) => (
              <Reveal key={p.name} delay={i * 100}>
                <SpotlightCard className={`plan ${p.featured ? 'plan--featured' : ''}`} style={{ height: '100%' }}>
                  {p.featured && <span className="plan__ribbon">Mais escolhido</span>}
                  <span className="mono" style={{ color: 'var(--gold)' }}>{p.name}</span>
                  <div className="plan__price">{p.price}</div>
                  <p style={{ marginBottom: 24 }}>{p.desc}</p>
                  <ul className="card__list">
                    {p.items.map((it) => <li key={it}>{it}</li>)}
                  </ul>
                  <Link to="/contato" className={`btn ${p.featured ? 'btn--gold' : 'btn--ghost'}`}>
                    Solicitar proposta <Arrow />
                  </Link>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sec-head">
            <Reveal>
              <span className="eyebrow">Diferenciais</span>
              <h2 className="h2">O padrão <span className="gold-text">Altiora.</span></h2>
            </Reveal>
          </div>
          <div className="grid-3">
            {differentials.map((d, i) => (
              <Reveal key={d.title} delay={(i % 3) * 100}>
                <SpotlightCard style={{ height: '100%' }}>
                  <div className="card__icon">{d.icon}</div>
                  <h3 className="h3">{d.title}</h3>
                  <p>{d.text}</p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
