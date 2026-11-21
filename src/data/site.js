// Site-wide links, kept in one place so every section uses the same URLs.
// A link left as '' shows up greyed out ("link coming soon") until it's filled in.
export const site = {
  email: 'mailto:rochisigo@gmail.com',
  linkedin: 'https://www.linkedin.com/in/rodrigo-arenas-a276a7285',
  github: 'https://github.com/rochisigo',
  sourceRepo: 'https://github.com/rochisigo/Portfolio_Website',

  // Files in public/ are served from the site's base path. BASE_URL is '/' in
  // some setups and '/Portfolio_Website/' on GitHub Pages, so build on it
  // instead of hardcoding '/resume.pdf'.
  resume: `${import.meta.env.BASE_URL}resume.pdf`,
}
