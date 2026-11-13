import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import { links } from './Navbar.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <Logo />
            <p>
              Sites de alto padrão criados com inteligência artificial e refinados por
              especialistas. Elevamos marcas ao próximo nível.
            </p>
          </div>
          <div>
            <h4>Navegação</h4>
            <ul>
              {links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Serviços</h4>
            <ul>
              <li><Link to="/servicos">Sites institucionais</Link></li>
              <li><Link to="/servicos">Landing pages</Link></li>
              <li><Link to="/servicos">E-commerce</Link></li>
              <li><Link to="/servicos">Chatbots com IA</Link></li>
              <li><Link to="/servicos">SEO & Performance</Link></li>
            </ul>
          </div>
          <div>
            <h4>Contato</h4>
            <ul>
              <li><a href="mailto:contato@altiora.com.br">contato@altiora.com.br</a></li>
              <li><a href="https://wa.me/5500000000000" target="_blank" rel="noreferrer">WhatsApp</a></li>
              <li><a href="https://instagram.com/" target="_blank" rel="noreferrer">Instagram</a></li>
              <li><a href="https://linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__giant" aria-hidden="true">ALTIORA</div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Altiora. Todos os direitos reservados.</span>
          <span className="status"><i /> Todos os sistemas operacionais</span>
          <span className="mono" style={{ fontSize: '0.7rem' }}>Ad altiora — rumo ao mais alto</span>
        </div>
      </div>
    </footer>
  )
}
