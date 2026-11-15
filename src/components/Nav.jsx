import LinkButton from './LinkButton.jsx'
import { site } from '../data/site.js'

export default function Nav() {
  return (
    <header className="nav">
      <a className="nav-logo" href="#top">
        rodrigo.arenas
      </a>
      <nav className="nav-links">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <LinkButton href={site.resume} newTab>
          Résumé ↗
        </LinkButton>
      </nav>
    </header>
  )
}
