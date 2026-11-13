import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'
import { Arrow } from './Icons.jsx'

export default function CTA({
  title = <>Pronto para levar sua marca <span className="shimmer-text">mais alto?</span></>,
  lead = 'Conte sua ideia em poucos minutos. Nossa IA gera o primeiro conceito visual e nosso time transforma em um site de alto padrão.',
}) {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="cta">
          <span className="eyebrow">Vamos começar</span>
          <h2 className="h2">{title}</h2>
          <p className="lead">{lead}</p>
          <div className="btn-row">
            <Link to="/contato" className="btn btn--gold">Solicitar orçamento <Arrow /></Link>
            <Link to="/portfolio" className="btn btn--ghost">Ver projetos</Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
