// One component for every link on the site that looks like a button (or a
// plain text link), so the styling and the "new tab" rules live in one place.
//
// Props:
//   href     where it goes. If it's empty, the link is greyed out instead.
//   variant  'primary' (filled), 'secondary' (outlined) or 'text'
//   newTab   open in a new browser tab (use for external sites and the résumé)
//   children the label — whatever you put between <LinkButton> and </LinkButton>
export default function LinkButton({ href, variant = 'secondary', newTab = false, children }) {
  const className = variant === 'text' ? 'text-link' : `btn btn-${variant}`

  // Conditional rendering: without a URL there is nothing to link to yet,
  // so render a non-clickable <span> that looks disabled.
  if (!href) {
    return (
      <span className={`${className} is-disabled`} title="Link coming soon">
        {children}
      </span>
    )
  }

  return (
    <a
      className={className}
      href={href}
      target={newTab ? '_blank' : undefined}
      rel={newTab ? 'noopener' : undefined}
    >
      {children}
    </a>
  )
}
