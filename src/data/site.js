// Site-wide links, kept in one place so every section uses the same URLs.
// A link left as '' shows up greyed out ("link coming soon") until it's filled in.
export const site = {
  email: '', // TODO: 'mailto:you@example.com'
  linkedin: '', // TODO: LinkedIn profile URL
  github: 'https://github.com/rochisigo',
  sourceRepo: 'https://github.com/rochisigo/Portfolio_Website',

  // Files in public/ are served from the site's base path. BASE_URL is '/' in
  // some setups and '/Portfolio_Website/' on GitHub Pages, so build on it
  // instead of hardcoding '/resume.pdf'.
  resume: `${import.meta.env.BASE_URL}resume.pdf`, // TODO: add public/resume.pdf
}
