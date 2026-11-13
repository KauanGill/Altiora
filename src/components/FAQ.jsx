import { useState } from 'react'

export default function FAQ({ items }) {
  const [open, setOpen] = useState(0)
  return (
    <div className="faq">
      {items.map((item, i) => (
        <div key={i} className={`faq__item ${open === i ? 'open' : ''}`}>
          <button className="faq__q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
            {item.q}
            <span className="faq__icon" aria-hidden="true" />
          </button>
          <div className="faq__a">
            <div><p>{item.a}</p></div>
          </div>
        </div>
      ))}
    </div>
  )
}
