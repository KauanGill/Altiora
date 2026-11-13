import { useState } from 'react'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import { Mail, Phone, Instagram, Pin, Check, Arrow } from '../components/Icons.jsx'

// Troque pelos dados reais da Altiora.
const contacts = [
  { icon: <Mail />, label: 'E-mail', value: 'contato@altiora.com.br', href: 'mailto:contato@altiora.com.br' },
  { icon: <Phone />, label: 'WhatsApp', value: '(00) 00000-0000', href: 'https://wa.me/5500000000000' },
  { icon: <Instagram />, label: 'Instagram', value: '@altiora', href: 'https://instagram.com/' },
  { icon: <Pin />, label: 'Atendimento', value: '100% online · todo o Brasil' },
]

const types = ['Site institucional', 'Landing page', 'E-commerce', 'Chatbot com IA', 'Identidade visual', 'Outro']

export default function Contato() {
  const [selected, setSelected] = useState(['Site institucional'])
  const [sent, setSent] = useState(false)

  const toggle = (t) =>
    setSelected((s) => (s.includes(t) ? s.filter((x) => x !== t) : [...s, t]))

  const onSubmit = (e) => {
    e.preventDefault()
    // TODO: integrar com backend, Formspree, EmailJS ou CRM.
    setSent(true)
  }

  return (
    <>
      <PageHero
        crumb="Contato"
        eyebrow="Contato"
        title={<>Vamos criar algo <span className="shimmer-text">extraordinário.</span></>}
        lead="Conte um pouco sobre seu projeto. Respondemos em até 24 horas úteis com os próximos passos."
      />

      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container contact">
          <div className="contact__info">
            {contacts.map((c, i) => {
              const Tag = c.href ? 'a' : 'div'
              return (
                <Reveal key={c.label} delay={i * 80}>
                  <Tag className="contact__item" {...(c.href ? { href: c.href, target: c.href.startsWith('http') ? '_blank' : undefined, rel: 'noreferrer' } : {})}>
                    <div className="card__icon">{c.icon}</div>
                    <div>
                      <small>{c.label}</small>
                      {c.value}
                    </div>
                  </Tag>
                </Reveal>
              )
            })}
          </div>

          <Reveal delay={150}>
            {sent ? (
              <div className="form form__success">
                <div className="card__icon"><Check /></div>
                <h3 className="h2" style={{ fontSize: '2rem', marginBottom: 12 }}>Mensagem enviada!</h3>
                <p className="muted">Obrigado pelo contato. Em breve nosso time retorna com uma proposta.</p>
              </div>
            ) : (
              <form className="form" onSubmit={onSubmit}>
                <div className="form__row">
                  <div className="field">
                    <label htmlFor="nome">Nome</label>
                    <input id="nome" required placeholder="Seu nome" />
                  </div>
                  <div className="field">
                    <label htmlFor="email">E-mail</label>
                    <input id="email" type="email" required placeholder="voce@empresa.com" />
                  </div>
                </div>
                <div className="form__row">
                  <div className="field">
                    <label htmlFor="empresa">Empresa</label>
                    <input id="empresa" placeholder="Nome da empresa" />
                  </div>
                  <div className="field">
                    <label htmlFor="orcamento">Investimento</label>
                    <select id="orcamento" defaultValue="">
                      <option value="" disabled>Selecione</option>
                      <option>Até R$ 2.000</option>
                      <option>R$ 2.000 – R$ 5.000</option>
                      <option>R$ 5.000 – R$ 10.000</option>
                      <option>Acima de R$ 10.000</option>
                    </select>
                  </div>
                </div>
                <div className="field">
                  <label>O que você precisa?</label>
                  <div className="chips">
                    {types.map((t) => (
                      <button type="button" key={t} className={`chip ${selected.includes(t) ? 'active' : ''}`} onClick={() => toggle(t)}>
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="msg">Sobre o projeto</label>
                  <textarea id="msg" placeholder="Conte sobre seu negócio, objetivos e referências..." />
                </div>
                <button type="submit" className="btn btn--gold" style={{ width: '100%' }}>
                  Enviar mensagem <Arrow />
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  )
}
