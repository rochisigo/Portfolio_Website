// All project content lives here. <Projects> loops over this array and renders
// one <ProjectCard> per entry, so adding a project = adding an object below.
//
// Fields:
//   id       unique string, used as the React `key`
//   context  small uppercase line above the title (array, joined with " · ")
//   video    file name inside public/media/ (e.g. 'aruco-demo.webm'), or null
//   mediaNote  text shown in the grey box while there is no video
//   repo     GitHub repo URL, or '' — "My commits" is built from it automatically
//   timeline list of milestones, shown by "Show details" (one bullet each)
//   details  challenge / solution / outcome, shown by "Show details"
//            (tags and repo buttons also only appear once details are open)
//
// Text in [brackets] is placeholder copy that still needs to be written.
export const projects = [
  {
    id: 'aruco-search',
    context: ['Wisconsin Robotics', 'University Rover Challenge'],
    title: 'ArUco & Object Detection + Search Algorithm',
    summary:
      "Detects ArUco tags and mission objects from the rover's cameras and drives a search pattern to find them autonomously.",
    role: '[2–3 sentences on what you personally designed and built — e.g. the search algorithm, how it hooks into the detector, and how you tested it on the rover.]',
    tags: ['ROS 2', 'OpenCV', '[language]', '[more]'],
    video: null,
    mediaNote: '▶  demo video loop\n(muted MP4 / WebM, autoplay)',
    repo: '',
    timeline: [
      '[Date]: [how it started]',
      '[Date]: [key milestone]',
      '[Date]: [where it stands now]',
    ],
    details: {
      challenge: '[what made this hard]',
      solution: '[the approach that worked]',
      outcome: '[results, numbers, what the team gained]',
    },
  },
  {
    id: 'unity-sim',
    context: ['Wisconsin Robotics', 'University Rover Challenge'],
    title: 'Rover Simulation in Unity',
    summary:
      'A Unity simulation of the rover connected to our ROS 2 stack, so the team can test autonomy code without the physical rover.',
    role: '[2–3 sentences on your part — e.g. leading the simulation effort, importing the URDF into Unity, and bridging it to ROS 2.]',
    tags: ['Unity', 'ROS 2 Humble', 'ROS#', 'Onshape → URDF'],
    video: null,
    mediaNote: '▶  demo video loop\n(muted MP4 / WebM, autoplay)',
    repo: '',
    timeline: [
      '[Date]: [how it started]',
      '[Date]: [key milestone]',
      '[Date]: [where it stands now]',
    ],
    details: {
      challenge: '[what made this hard]',
      solution: '[the approach that worked]',
      outcome: '[results, numbers, what the team gained]',
    },
  },
  {
    // Always last: little progress yet.
    id: 'basketball-humanoid',
    context: ['CS 580', 'Intelligent Robotics'],
    title: 'Basketball-Playing Humanoid',
    summary:
      'A humanoid robot that plays basketball. [Short description for now — expand as the project takes shape.]',
    role: '[Your part of the project, once defined.]',
    tags: ['[stack TBD]'],
    video: null,
    mediaNote: 'demo coming soon',
    repo: '',
    timeline: [
      '[Date]: [how it started]',
      '[Date]: [key milestone]',
      '[Date]: [where it stands now]',
    ],
    details: {
      challenge: '[what made this hard]',
      solution: '[the approach that worked]',
      outcome: '[results, numbers, what the team gained]',
    },
  },
]
