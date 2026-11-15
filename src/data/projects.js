// All project content lives here. <Projects> loops over this array and renders
// one <ProjectCard> per entry, so adding a project = adding an object below.
//
// Fields:
//   id       unique string, used as the React `key`
//   context  small uppercase line above the title (array, joined with " · ")
//   video    file name inside public/media/ (e.g. 'aruco-demo.webm'), or null
//   mediaNote  text shown in the grey box while there is no video
//   repo     GitHub repo URL, or '' — "My commits" is built from it automatically
//   details  the longer write-up shown by "Read details"
//
// Text in [brackets] is placeholder copy that still needs to be written.
export const projects = [
  {
    id: 'aruco-search',
    context: ['Wisconsin Robotics', 'University Rover Challenge'],
    title: 'ArUco & Object Detection + Search Algorithm',
    summary:
      "Detects ArUco tags and mission objects from the rover's cameras and drives a search pattern to find them autonomously.",
    role: '[One sentence on what you personally designed and built — e.g. the search algorithm and the detector integration.]',
    tags: ['ROS 2', 'OpenCV', '[language]', '[more]'],
    video: null,
    mediaNote: '▶  demo video loop\n(muted MP4 / WebM, autoplay)',
    repo: '',
    details: {
      problem: '[Problem: what the rover had to do and why it was hard.]',
      approach: '[Approach: how you solved it.]',
      result: '[Result: what happened — numbers if you have them.]',
    },
  },
  {
    id: 'unity-sim',
    context: ['Wisconsin Robotics', 'University Rover Challenge'],
    title: 'Rover Simulation in Unity',
    summary:
      'A Unity simulation of the rover connected to our ROS 2 stack, so the team can test autonomy code without the physical rover.',
    role: '[One sentence on your part — e.g. leading the effort, URDF import, ROS bridge.]',
    tags: ['Unity', 'ROS 2 Humble', 'ROS#', 'Onshape → URDF'],
    video: null,
    mediaNote: '▶  demo video loop\n(muted MP4 / WebM, autoplay)',
    repo: '',
    details: {
      problem: '[Problem: what the team could not do without a simulator.]',
      approach: '[Approach: how the simulation is built and connected.]',
      result: '[Result: what the team can do now.]',
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
    details: {
      problem: '[Problem: to be written as the project takes shape.]',
      approach: '[Approach: to be written.]',
      result: '[Result: to be written.]',
    },
  },
]
