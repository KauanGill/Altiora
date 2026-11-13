import { Arrow } from './Icons.jsx'

/** Card de projeto com mockup de navegador feito em CSS (troque por prints reais depois). */
export default function ProjectCard({ title, category, accent }) {
  return (
    <article className="project">
      <div
        className="project__frame"
        style={{ background: `radial-gradient(ellipse at 50% 120%, ${accent}33, transparent 70%), #111` }}
      >
        <div className="project__browser">
          <div className="project__browser-bar"><i /><i /><i /></div>
          <div className="mock">
            <div className="mock__bar" style={{ width: '30%' }} />
            <div className="mock__hero" style={{ background: `linear-gradient(120deg, ${accent}, ${accent}22)` }} />
            <div className="mock__bar" style={{ width: '70%' }} />
            <div className="mock__bar" style={{ width: '45%', opacity: 0.6 }} />
            <div className="mock__cols"><div /><div /><div /></div>
          </div>
        </div>
      </div>
      <div className="project__info">
        <div>
          <h3>{title}</h3>
          <p>{category}</p>
        </div>
        <span className="project__arrow"><Arrow /></span>
      </div>
    </article>
  )
}
