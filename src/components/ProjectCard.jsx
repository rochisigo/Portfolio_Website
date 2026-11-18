import { useState } from 'react'
import LinkButton from './LinkButton.jsx'

const GITHUB_USERNAME = 'rochisigo'

export default function ProjectCard({ project }) {
  // State: whether the details section is open. Each card gets its own copy
  // of this value, so opening one card doesn't open the others. Calling
  // setShowDetails makes React re-render this card with the new value.
  const [showDetails, setShowDetails] = useState(false)

  // Use the project's own contributions link if it has one; otherwise build
  // the standard "commits by me" URL from the repo.
  const defaultContributionsUrl = project.repo
    ? `${project.repo}/commits?author=${GITHUB_USERNAME}`
    : ''
  const contributionsUrl = project.contributions || defaultContributionsUrl

  // JSX is just a value, so it can be stored in a variable and placed in more
  // than one spot. The toggle sits under "My role" while the card is closed,
  // and moves to the bottom of the card once it's open.
  const toggle = (
    <button
      type="button"
      className="card-toggle"
      aria-expanded={showDetails}
      onClick={() => setShowDetails(!showDetails)}
    >
      {showDetails ? 'Hide details ▴' : 'Show details ▾'}
    </button>
  )

  return (
    <article className="card">
      <div className="card-main">
        <div className="card-media placeholder">
          {/* Conditional rendering: the video if there is one, otherwise the note. */}
          {project.video ? (
            <video
              src={`${import.meta.env.BASE_URL}media/${project.video}`}
              autoPlay
              muted
              loop
              playsInline
            />
          ) : (
            project.mediaNote
          )}
        </div>

        <div className="card-info">
          <p className="card-context">{project.context.join('  ·  ')}</p>
          <h3 className="card-title">{project.title}</h3>
          <p className="card-summary">{project.summary}</p>

          <div className="card-role">
            <p className="card-role-label">My role</p>
            <p className="card-role-text">{project.role}</p>
          </div>

          {/* `condition && <jsx>` renders the JSX only when the condition is true. */}
          {!showDetails && toggle}
        </div>
      </div>

      {showDetails && (
        <div className="card-details">
          <div className="card-details-block">
            <h4 className="card-details-label">Project timeline</h4>
            <p className="card-details-text">{project.timeline}</p>
          </div>

          <div className="card-details-block">
            <h4 className="card-details-label">Challenges &amp; impact</h4>
            {/* One <p> per string in the impact array. */}
            {project.impact.map((paragraph) => (
              <p key={paragraph} className="card-details-text">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="card-footer">
            <ul className="card-tags">
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <div className="card-links">
              <LinkButton href={project.repo} variant="primary" newTab>
                GitHub repo ↗
              </LinkButton>
              <LinkButton href={contributionsUrl} variant="primary" newTab>
                My contributions ↗
              </LinkButton>
            </div>
          </div>

          <div className="card-hide">{toggle}</div>
        </div>
      )}
    </article>
  )
}
