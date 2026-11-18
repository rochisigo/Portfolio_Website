// Renders a string, turning **double-asterisk** parts into bold text.
//
// "place **12th out of 116 teams** worldwide".split('**') gives
// ["place ", "12th out of 116 teams", " worldwide"]: every odd-numbered
// piece was between asterisks, so those get wrapped in <strong>.
export default function RichText({ text }) {
  const parts = text.split('**')

  return (
    <>
      {parts.map((part, i) =>
        // The pieces never get reordered, so their position is a fine key here.
        i % 2 === 1 ? <strong key={i}>{part}</strong> : part,
      )}
    </>
  )
}
