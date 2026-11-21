// A muted, looping demo clip. `src` and `poster` are file names inside
// public/media/. The poster is a still frame shown until the video can play,
// so there's never an empty box while it loads.
//
// Files in public/ are served from the site's base path ('/Portfolio_Website/'
// on GitHub Pages), so the URLs are built on BASE_URL instead of '/media/...'.
export const mediaUrl = (file) => `${import.meta.env.BASE_URL}media/${file}`

export default function DemoVideo({ src, poster, label }) {
  return (
    <video
      src={mediaUrl(src)}
      poster={poster ? mediaUrl(poster) : undefined}
      aria-label={label}
      autoPlay
      muted
      loop
      playsInline
    />
  )
}
