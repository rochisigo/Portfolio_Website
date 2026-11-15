import LinkButton from './LinkButton.jsx'
import { site } from '../data/site.js'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-text">
        <h1>Hi, I'm Rodrigo. I build autonomy software for robots.</h1>
        <p className="hero-intro">
          CS senior at UW–Madison (BS, May 2027) and autonomy lead at Wisconsin Robotics, where we
          build a Mars rover for the University Rover Challenge. Looking for new grad roles in
          robotics and computer vision.
        </p>
        <div className="button-row">
          <LinkButton href="#projects" variant="primary">
            View projects
          </LinkButton>
          <LinkButton href={site.resume} newTab>
            View résumé ↗
          </LinkButton>
        </div>
        <div className="hero-social">
          <LinkButton href={site.email} variant="text">
            Email ↗
          </LinkButton>
          <LinkButton href={site.linkedin} variant="text" newTab>
            LinkedIn ↗
          </LinkButton>
          <LinkButton href={site.github} variant="text" newTab>
            GitHub ↗
          </LinkButton>
        </div>
      </div>

      {/* TODO: replace with <img src=... alt="Rodrigo Arenas" /> once there's a headshot */}
      <div className="hero-photo placeholder">
        photo of you
        <br />
        (or you with the rover)
      </div>
    </section>
  )
}
