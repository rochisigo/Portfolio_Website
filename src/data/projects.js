// All project content lives here. <Projects> loops over this array and renders
// one <ProjectCard> per entry, so adding a project = adding an object below.
//
// Fields:
//   id       unique string, used as the React `key`
//   context  small uppercase line above the title (array, joined with " · ")
//   video    file name inside public/media/ (e.g. 'aruco-demo.webm'), or null
//   mediaNote  text shown in the grey box while there is no video
//   repo     GitHub repo URL, or ''
//   contributions  optional link for "My contributions". If left out, it's
//            built from `repo` as <repo>/commits?author=rochisigo
//   timeline one line of text, shown by "Show details"
//   impact   "Challenges & impact" text, shown by "Show details".
//            An array: each string becomes its own paragraph.
//   (tags and repo buttons also only appear once details are open)
//
// Text in [brackets] is placeholder copy that still needs to be written.
export const projects = [
  {
    id: 'aruco-search',
    context: ['Wisconsin Robotics', 'University Rover Challenge'],
    title: 'ArUco & Object Detection + Search Algorithm',
    summary:
      'Detects ArUco tags and classifies mission objects using a depth camera on the rover, then drives a spiral search pattern to find each target autonomously and stop within 1 meter of it.',
    role: 'I built the ArUco tag detection pipeline end to end and helped label data and train the models for the mission objects. I also wrote the full spiral search algorithm, with a state machine that handles reorientation, detection and search completion. Finally, I wrote the integration script that runs object detection in parallel with obstacle avoidance (built by a teammate).',
    tags: ['ROS 2', 'OpenCV', '[language]', '[more]'],
    video: null,
    mediaNote: '▶  demo video loop\n(muted MP4 / WebM, autoplay)',
    repo: 'https://github.com/WisconsinRobotics/WRoverSoftware_25-26',
    contributions:
      'https://github.com/WisconsinRobotics/WRoverSoftware_25-26/commits/dev/aruco/?author=vboxuser@ubuntureal.myguest.virtualbox.org',
    timeline:
      'September 2025 – May 2026 · Competed at the University Rover Challenge in Utah',
    impact: [
      'The biggest challenge was starting this project with no robotics experience and only beginner-level programming skills. To really learn, I wrote most of the code myself instead of relying on past years’ solutions or AI tools. Working through problems from first principles, I ended up discovering core robotics concepts before I knew their names: a finite state machine for the search behavior, and projective geometry with homogeneous coordinates for estimating the position of objects relative to the camera.',
      'This became the autonomy system our rover ran throughout the competition, helping Wisconsin Robotics place 12th out of 116 teams worldwide. It’s the project I’m most proud of.',
    ],
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
    timeline: '[Start – end dates] · [key milestone]',
    impact: ['[The biggest challenge, how you solved it, and what the team gained.]'],
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
    timeline: '[Start – end dates] · [key milestone]',
    impact: ['[The biggest challenge, how you solved it, and what came of it.]'],
  },
]
