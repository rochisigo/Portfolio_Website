import LinkButton from './LinkButton.jsx'
import { site } from '../data/site.js'

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Let's talk</h2>
      <p className="contact-pitch">
        Open to new grad roles, research positions and internships in robotics and computer vision.
      </p>
      <div className="button-row">
        <LinkButton href={site.email} variant="primary">
          Email me
        </LinkButton>
        <LinkButton href={site.linkedin} newTab>
          LinkedIn ↗
        </LinkButton>
        <LinkButton href={site.resume} newTab>
          View résumé ↗
        </LinkButton>
      </div>
    </section>
  )
}
