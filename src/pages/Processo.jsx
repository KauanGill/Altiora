import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import FAQ from '../components/FAQ.jsx'
import CTA from '../components/CTA.jsx'
import AITerminal from '../components/AITerminal.jsx'
import { steps } from '../data.jsx'

const faq = [
  {
    q: 'O site é feito 100% por inteligência artificial?',
    a: 'Não. A IA acelera pesquisa, conceitos visuais, estrutura e textos — mas cada projeto é revisado e refinado por designers e desenvolvedores. Você recebe a velocidade da IA com a qualidade de um estúdio premium.',
  },
  {
    q: 'Quanto tempo leva para meu site ficar pronto?',
    a: 'Landing pages ficam prontas em poucos dias. Sites institucionais completos levam em média 7 dias. E-commerces e projetos sob medida têm cronograma definido no briefing.',
  },
  {
    q: 'Posso editar o conteúdo depois?',
    a: 'Sim. Nos planos Profissional e Elite você recebe um painel simples para editar textos, imagens e publicações sem precisar de código.',
  },
  {
    q: 'O site vai aparecer no Google?',
    a: 'Todos os sites são construídos com SEO técnico desde a base: estrutura semântica, metadados, sitemap, velocidade e Core Web Vitals otimizados.',
  },
  {
    q: 'Vocês cuidam da hospedagem e do domínio?',
    a: 'Sim. Cuidamos de tudo: registro de domínio, hospedagem de alta performance, SSL e backups. Você só precisa aprovar o resultado.',
  },
]

export default function Processo() {
  return (
    <>
      <PageHero
        crumb="Processo"
        eyebrow="Como funciona"
        title={<>Velocidade de máquina. <span className="shimmer-text">Olhar humano.</span></>}
        lead="Um processo transparente, em quatro etapas, que transforma sua ideia em um site de alto padrão em dias."
      />

      <section className="section" style={{ paddingTop: 40 }}>
        <div className="container">
          <div className="timeline">
            {steps.map((s, i) => (
              <Reveal key={s.title} className="timeline__item">
                <div>
                  <div className="timeline__num gold-text">0{i + 1}</div>
                  <span className="step__time">{s.time}</span>
                </div>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <div className="tags">
                    {s.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container hero__grid">
          <Reveal>
            <span className="eyebrow">Nos bastidores</span>
            <h2 className="h2" style={{ marginBottom: 24 }}>Nossa engine de IA <span className="gold-text">em ação.</span></h2>
            <p className="lead">
              Nosso fluxo proprietário orquestra modelos de IA para pesquisa, design, texto e código —
              e entrega tudo para o nosso time finalizar com precisão artesanal.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <AITerminal />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sec-head">
            <Reveal>
              <span className="eyebrow">FAQ</span>
              <h2 className="h2">Perguntas <span className="gold-text">frequentes.</span></h2>
            </Reveal>
          </div>
          <Reveal>
            <FAQ items={faq} />
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  )
}
