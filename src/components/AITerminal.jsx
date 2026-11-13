import { useEffect, useState } from 'react'

const script = [
  { type: 'cmd', text: 'altiora generate --brief "clínica premium, tom sofisticado"' },
  { type: 'dim', text: '› analisando briefing e mercado...' },
  { type: 'ok', text: 'identidade visual definida  [preto · branco · dourado]' },
  { type: 'ok', text: 'arquitetura de 6 páginas criada' },
  { type: 'ok', text: 'copywriting persuasivo gerado (SEO otimizado)' },
  { type: 'ok', text: 'componentes responsivos compilados' },
  { type: 'dim', text: '› lighthouse: performance 99 · seo 100 · a11y 100' },
  { type: 'ok', text: 'deploy concluído → https://seusite.com.br' },
]

/** Terminal animado que "gera" um site em tempo real. */
export default function AITerminal() {
  const [lines, setLines] = useState([])
  const [typed, setTyped] = useState('')
  const [step, setStep] = useState(0)

  useEffect(() => {
    let timer
    if (step >= script.length) {
      timer = setTimeout(() => {
        setLines([])
        setTyped('')
        setStep(0)
      }, 4200)
      return () => clearTimeout(timer)
    }
    const current = script[step]
    if (current.type === 'cmd') {
      if (typed.length < current.text.length) {
        timer = setTimeout(() => setTyped(current.text.slice(0, typed.length + 1)), 32)
      } else {
        timer = setTimeout(() => {
          setLines((l) => [...l, current])
          setTyped('')
          setStep((s) => s + 1)
        }, 450)
      }
    } else {
      timer = setTimeout(() => {
        setLines((l) => [...l, current])
        setStep((s) => s + 1)
      }, 520)
    }
    return () => clearTimeout(timer)
  }, [step, typed])

  const progress = Math.round((lines.length / script.length) * 100)
  const typing = step < script.length && script[step].type === 'cmd'
  const done = step >= script.length

  return (
    <div className="terminal">
      <div className="terminal__bar">
        <i /><i /><i />
        <span>altiora.ai — engine v4.2</span>
      </div>
      <div className="terminal__body">
        {lines.map((l, i) => (
          <div key={i} className={`terminal__line ${l.type === 'cmd' ? '' : l.type}`}>
            <span className="prompt">{l.type === 'cmd' ? '$' : l.type === 'ok' ? '✓' : ' '}</span>
            <span>{l.text}</span>
          </div>
        ))}
        {(typing || done) && (
          <div className="terminal__line">
            <span className="prompt">$</span>
            <span>{typing ? typed : ''}<span className="caret" /></span>
          </div>
        )}
        <div className="terminal__progress">
          <div style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  )
}
