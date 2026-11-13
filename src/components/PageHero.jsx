import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'

export default function PageHero({ crumb, eyebrow, title, lead, children }) {
  return (
    <section className="page-hero">
      <div className="page-hero__glow" aria-hidden="true" />
      <div className="container">
        <Reveal className="breadcrumb">
          <Link to="/">Início</Link>
          <span>/</span>
          <span>{crumb}</span>
        </Reveal>
        <Reveal delay={80}>
          <span className="eyebrow">{eyebrow}</span>
        </Reveal>
        <Reveal as="h1" className="display" delay={160}>{title}</Reveal>
        {lead && <Reveal as="p" className="lead" delay={240}>{lead}</Reveal>}
        {children}
      </div>
    </section>
  )
}
