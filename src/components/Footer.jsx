import { site } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 Rodrigo Arenas</p>
      <p>
        built with React + Vite ·{' '}
        <a href={site.sourceRepo} target="_blank" rel="noopener">
          source on GitHub ↗
        </a>
      </p>
    </footer>
  )
}
