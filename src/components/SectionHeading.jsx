// Section title followed by a thin rule that fills the rest of the row.
export default function SectionHeading({ children }) {
  return (
    <div className="section-heading">
      <h2>{children}</h2>
      <div className="section-rule" />
    </div>
  )
}
