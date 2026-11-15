import { useState } from 'react'
import LinkButton from './LinkButton.jsx'

const GITHUB_USERNAME = 'rochisigo'

export default function ProjectCard({ project }) {
  // State: whether the long write-up is showing. Each card gets its own copy
  // of this value, so opening one card doesn't open the others. Calling
  // setShowDetails makes React re-render this card with the new value.
  const [showDetails, setShowDetails] = useState(false)

  const commitsUrl = project.repo ? `${project.repo}/commits?author=${GITHUB_USERNAME}` : ''

  const detailSections = [
    { label: 'Problem', text: project.details.problem },
    { label: 'Approach', text: project.details.approach },
    { label: 'Result', text: project.details.result },
  ]

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

          <ul className="card-tags">
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>

          <div className="card-links">
            <LinkButton href={project.repo} newTab>
              GitHub repo ↗
            </LinkButton>
            <LinkButton href={commitsUrl} newTab>
              My commits ↗
            </LinkButton>
            <button
              type="button"
              className="card-toggle"
              aria-expanded={showDetails}
              onClick={() => setShowDetails(!showDetails)}
            >
              {showDetails ? 'Hide details ▴' : 'Read details ▾'}
            </button>
          </div>
        </div>
      </div>

      {/* `condition && <jsx>` renders the JSX only when the condition is true. */}
      {showDetails && (
        <div className="card-details">
          {detailSections.map((section) => (
            <div key={section.label}>
              <h4>{section.label}</h4>
              <p>{section.text}</p>
            </div>
          ))}
        </div>
      )}
    </article>
  )
}
