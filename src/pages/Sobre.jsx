import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import SpotlightCard from '../components/SpotlightCard.jsx'
import Marquee from '../components/Marquee.jsx'
import CTA from '../components/CTA.jsx'
import { Gem, Bolt, Eye, Brain } from '../components/Icons.jsx'

const values = [
  { icon: <Gem />, title: 'Excelência', text: 'Cada detalhe importa. Não entregamos nada abaixo do mais alto padrão.' },
  { icon: <Brain />, title: 'Inovação', text: 'Usamos a tecnologia mais atual para resolver problemas reais de negócio.' },
  { icon: <Eye />, title: 'Clareza', text: 'Processo transparente, comunicação direta e prazos cumpridos.' },
  { icon: <Bolt />, title: 'Agilidade', text: 'Velocidade sem abrir mão da qualidade — esse é o nosso diferencial.' },
]

export default function Sobre() {
  return (
    <>
      <PageHero
        crumb="Sobre"
        eyebrow="Sobre a Altiora"
        title={<>Nascemos para levar marcas <span className="shimmer-text">mais alto.</span></>}
      />

      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          <Reveal as="p" className="manifesto">
            Acreditamos que todo negócio merece um site à altura da sua ambição.{' '}
            <span className="muted">Por isso unimos a velocidade da</span>{' '}
            <em className="gold-text">inteligência artificial</em>{' '}
            <span className="muted">ao olhar refinado de quem entende de design, marca e conversão.</span>{' '}
            O resultado: sites premium, em dias.
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container word-meaning">
          <Reveal>
            <div className="latin">Al·ti·o·ra</div>
            <div className="phonetic">/al.ˈti.o.ra/ · latim</div>
          </Reveal>
          <Reveal className="definition" delay={150}>
            <span className="mono">Significado</span>
            <p className="lead">
              “Coisas mais elevadas.” Vem da expressão latina <em className="gold-text">ad altiora tendo</em> —
              “aspiro ao mais alto”.
            </p>
            <p className="muted">
              É exatamente isso que fazemos: pegamos a sua marca e a elevamos ao próximo nível, com
              tecnologia, estética e estratégia.
            </p>
          </Reveal>
        </div>
      </section>

      <Marquee items={['Preto — sofisticação', 'Branco — clareza', 'Dourado — excelência', 'IA — velocidade', 'Design — emoção']} />

      <section className="section">
        <div className="container">
          <div className="sec-head">
            <Reveal>
              <span className="eyebrow">Nossos valores</span>
              <h2 className="h2">O que nos <span className="gold-text">move.</span></h2>
            </Reveal>
          </div>
          <div className="grid-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 100}>
                <SpotlightCard style={{ height: '100%' }}>
                  <div className="card__icon">{v.icon}</div>
                  <h3 className="h3">{v.title}</h3>
                  <p>{v.text}</p>
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
