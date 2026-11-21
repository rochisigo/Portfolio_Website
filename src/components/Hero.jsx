import LinkButton from './LinkButton.jsx'
import { site } from '../data/site.js'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-text">
        <div className="hero-heading">
          <h1>Hi, I’m Rodrigo.</h1>
          <p className="hero-tagline">
            CS senior at UW–Madison · Autonomy lead at Wisconsin Robotics
          </p>
        </div>
        <p className="hero-intro">
          I build perception, autonomy, and simulation software for robots, and I’m most excited
          about where robotics meets AI: the push toward general-purpose robots. I love exploring
          new methods in state estimation, perception, and SLAM. I’m graduating in May 2027 and
          looking for new grad roles in robotics and computer vision.
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
        </div>
      </div>

      {/* Files in public/ live under the base path, so build on BASE_URL. */}
      <img
        className="hero-photo"
        src={`${import.meta.env.BASE_URL}media/headshot.jpg`}
        alt="Rodrigo Arenas"
      />
    </section>
  )
}
