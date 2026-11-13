import { Link } from 'react-router-dom'
import { Arrow } from '../components/Icons.jsx'

export default function NotFound() {
  return (
    <section className="notfound">
      <div>
        <div className="latin gold-text">404</div>
        <h1 className="h2">Essa página subiu alto demais.</h1>
        <p className="lead" style={{ margin: '16px auto 0' }}>O endereço que você procurou não existe ou foi movido.</p>
        <div className="btn-row">
          <Link to="/" className="btn btn--gold">Voltar ao início <Arrow /></Link>
        </div>
      </div>
    </section>
  )
}
