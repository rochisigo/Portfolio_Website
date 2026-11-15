# Personal Portfolio Website — Rodrigo Arenas

Career portfolio for job, research and internship applications (robotics software / computer vision).
Built from scratch. It is NOT related to any earlier "personal website" idea: no photography, no athletics, career content only.

- Figma design (source of truth for layout. prioritize the Figma over the description I'm provided below, that's just for context): https://www.figma.com/design/0pSESh0bDaRxjl1FOIf18P
  - Frame: "Portfolio – Desktop 1440 (dark)"
  - Component: "Project Card"
- Dev machine: Windows, VS Code.
- Repo: https://github.com/rochisigo/Portfolio_Website.git

## How to work with me

- I'm learning React through CS 571 (Building User Interfaces, UW–Madison) and I don't fully master it yet. Write clear, idiomatic code, and briefly explain new React concepts when you use them.
- Don't invent content about me. The bio, the "My role" lines and the tech stacks are mine to write. Keep the `[bracketed placeholders]` until I give you the real text.
- When the Figma design and this file disagree, ask me which one to follow.
- Keep changes small and commit in logical steps.

## Stack (CS 571 concepts)

- Vite + React, JavaScript, function components.
- Use what CS 571 covers: components, props, `useState`, rendering lists with `.map()` and `key`, conditional rendering.
- Project content lives in a data file (e.g. `src/data/projects.js`) and is rendered through a reusable `<ProjectCard>` component. No copy-pasted cards.
- Single page with anchor links (`#about`, `#projects`, `#contact`). No router needed for now.
- Deployment: GitHub Pages. Remember to set `base` in `vite.config.js`.

## Page structure (one page, top to bottom)

1. **Nav**: "rodrigo.arenas" on the left. On the right: About · Projects · Contact, plus a "Résumé ↗" button.
2. **Hero / intro**:
   - delete the small eyebrow line: "> robotics software · computer vision"
   - H1: "Hi, I'm Rodrigo. I build autonomy software for robots."
   - short intro: CS senior at UW–Madison (BS, May 2027), autonomy lead at Wisconsin Robotics (Mars rover, University Rover Challenge), looking for new grad roles in robotics and computer vision
   - buttons: "View projects" (primary) and "View résumé ↗"
   - links in this order: **Email → LinkedIn → GitHub**
   - photo placeholder on the right (400×400)
3. **About**: comes directly under the intro, above Projects. A 2–3 sentence bio.
4. **Projects**, in this order:
   1. ArUco & Object Detection + Search Algorithm (Wisconsin Robotics, first year)
   2. Rover Simulation in Unity (Wisconsin Robotics, this year; Unity 2022.3, ROS 2 Humble, ROS#, Onshape → URDF)
   3. Basketball-Playing Humanoid (CS 580 Intelligent Robotics). Always last, little progress yet; shows "demo coming soon".
5. **Contact**: "Let's talk", a one-line pitch, then buttons in order Email · LinkedIn · GitHub · View résumé.
6. **Footer**: "© 2026 Rodrigo Arenas" and "built with React + Vite · source on GitHub ↗".


## Project card

Cards span nearly the full page width (1360px of 1440, 40px side gutter), one per row. Layout: media on the left, info on the right.

- **Media**: 600×300 demo. Use a muted autoplay looping video, not a GIF:
  ```html
  <video src="/media/aruco-demo.webm" autoplay muted loop playsinline></video>
  ```
- **Info**, top to bottom:
  - context line at the very top (e.g. "WISCONSIN ROBOTICS · UNIVERSITY ROVER CHALLENGE").
  - title
  - one-line summary
  - "My role" callout: thin accent left border, with one sentence on what I personally built
  - tech tags (pills): the skills used in that project
  - links: "GitHub repo ↗" and "My commits ↗", plus a "Read details ▾" toggle
- **"Read details"**: expands the card in place (`useState`) to show a longer Problem → Approach → Result write-up.
- **Commits link format**: `https://github.com/<owner>/<repo>/commits?author=rochisigo`


## Résumé

`public/resume.pdf`, opened in a new tab so the browser previews it (the browser's viewer has its own download button). No `download` attribute:
```html
<a href="/resume.pdf" target="_blank" rel="noopener">View résumé ↗</a>
```

## Design tokens

Inspired by dark, minimal "engineering" portfolios (e.g. brittanychiang.com). Quiet palette with no bright accent.

```css
:root {
  --bg: #0F172A;          /* page background (dark slate navy) */
  --card: #131D33;        /* project card background */
  --line: #1E293B;        /* borders, dividers, media placeholder fill */
  --line-strong: #334155; /* heading rules, placeholder borders */
  --text-head: #E2E8F0;   /* headings, primary text */
  --text-body: #94A3B8;   /* body text, context lines */
  --text-dim: #64748B;    /* footer, captions */
  --accent: #384A40;      /* dark grey-green: buttons, tag pills, accent borders */
}
```

- `--accent` is too dark for text on `--bg`. Use it for fills and borders only. Text on accent fills is `--text-head`.
- Font: **Plus Jakarta Sans** everywhere (Google Fonts), weights 400 / 500 / 600 / 700.
- Sizes: H1 52px bold · section headings 40px bold · card titles 28px semibold · body 16–18px · small labels and buttons 12–13px.
- Radii: cards 12px, buttons 6px, tags fully rounded. Content side padding: 160px on desktop.
- Mobile layout isn't designed yet. Make it responsive by stacking card media above info, and stacking the hero photo under the text.

## Still to do (content I owe)

- Bio for About, and the "My role" sentence for each project.
- Demo footage: ArUco (competition video or rosbag replay), the Unity sim, and the humanoid later.
- Repo URLs, résumé PDF, LinkedIn URL, email, headshot.
