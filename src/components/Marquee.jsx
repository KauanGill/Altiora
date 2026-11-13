export default function Marquee({ items }) {
  const doubled = [...items, ...items]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {doubled.map((t, i) => (
          <span className="marquee__item" key={i}>{t}</span>
        ))}
      </div>
    </div>
  )
}
