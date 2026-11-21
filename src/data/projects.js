// All project content lives here. <Projects> loops over this array and renders
// one <ProjectCard> per entry, so adding a project = adding an object below.
//
// Fields:
//   id       unique string, used as the React `key`
//   context  small uppercase line above the title (array, joined with " · ")
//   video    file name inside public/media/ (e.g. 'aruco-demo.mp4'), or null.
//            Plays in the closed card.
//   poster   still image (also in public/media/) shown while `video` loads
//   image    still image in public/media/, shown when there's no `video`
//   imageAlt  description of `image` for screen readers
//   videoCaption  optional small text shown under the video or image
//   detailVideo  optional { label, src, poster } shown next to the write-up
//            once the card is open; it only loads when the card is opened
//   mediaNote  text shown in the grey box while there is no video
//   repo     GitHub repo URL, or ''
//   contributions  optional link for "My contributions". If left out, it's
//            built from `repo` as <repo>/commits?author=rochisigo
//   timeline one line of text, shown by "Show details"
//   impact   "Challenges & impact" text, shown by "Show details".
//            An array: each string becomes its own paragraph.
//   impactLabel  optional heading for `impact` (default "Challenges & impact")
//   (tags and repo buttons also only appear once details are open)
//
// Text in [brackets] is placeholder copy that still needs to be written.
// In summary, role, timeline and impact, wrap words in **double asterisks**
// to make them bold.
export const projects = [
  {
    id: 'aruco-search',
    context: ['Wisconsin Robotics', 'University Rover Challenge'],
    title: 'ArUco & Object Detection + Search Algorithm',
    summary:
      'Detects ArUco tags and classifies mission objects using a depth camera on the rover, then drives a contracting semicircular search pattern to find each target autonomously and stop within 1 meter of it.',
    role: 'I built the ArUco tag detection pipeline end to end and helped label data and train the models for the mission objects. I also wrote the full search algorithm, which sweeps alternating semicircles that tighten inward, with a state machine that handles reorientation, detection and search completion. Finally, I wrote the integration script that runs object detection in parallel with obstacle avoidance (built by a teammate).',
    tags: ['ROS 2', 'OpenCV', 'YOLO', 'Computer Vision', 'Python'],
    video: 'object-detection-demo.mp4',
    poster: 'object-detection-demo.jpg',
    detailVideo: {
      label: 'Full search drive simulation, visualized in RViz',
      src: 'search-drive-sim.mp4',
      poster: 'search-drive-sim.jpg',
    },
    repo: 'https://github.com/WisconsinRobotics/WRoverSoftware_25-26',
    contributions:
      'https://github.com/WisconsinRobotics/WRoverSoftware_25-26/commits/dev/aruco/?author=vboxuser@ubuntureal.myguest.virtualbox.org',
    timeline:
      'September 2025 – May 2026 · Competed at the University Rover Challenge in Utah',
    impact: [
      'The biggest challenge was starting this project with no robotics experience and only beginner-level programming skills. To really learn, I wrote most of the code myself instead of relying on past years’ solutions or AI tools. Working through problems from first principles, I ended up discovering core robotics concepts before I knew their names: a finite state machine for the search behavior, and projective geometry with homogeneous coordinates for estimating the position of objects relative to the camera.',
      'This became the autonomy system our rover ran throughout the competition, helping Wisconsin Robotics place **12th out of 116 teams** worldwide. It’s the project I’m most proud of.',
    ],
  },
  {
    id: 'unity-sim',
    context: ['Wisconsin Robotics', 'University Rover Challenge'],
    title: 'Rover Simulation in Unity',
    summary:
      'A Unity simulation of our rover that talks to the same ROS 2 topics as the real robot, so any subteam can test its code without the physical rover. It recreates the competition setting: terrain from the actual competition site, ArUco tags, competition objects, and an astronaut that guides the rover with gestures, like the real person does during the autonomous mission.',
    role: 'I built the simulated robot and its ROS 2 integration: I turned our CAD model into a working Unity robot, wrote the swerve drive and the animated astronaut in C#, and published odometry, joint states, and camera images while subscribing to velocity commands.',
    tags: ['Unity', 'ROS 2', 'ROS#', 'URDF', 'C#', 'Docker'],
    video: 'unity-sim-demo.mp4',
    poster: 'unity-sim-demo.jpg',
    videoCaption:
      'Gesture following: a Y pose tells the rover to follow the astronaut, a T pose tells it to stop.',
    repo: 'https://github.com/WisconsinRobotics/WRoverSoftware_Simulation',
    contributions:
      'https://github.com/WisconsinRobotics/WRoverSoftware_Simulation/commits/dev/?author=rochisigo',
    timeline: 'September 2026 – Present · Currently used to test other subteams’ code',
    impact: [
      'The real rover’s suspension uses a differential bar, a closed-loop linkage that URDF can’t represent. I recreated it in code so the rockers turn in opposite directions at a 1:1 ratio, matching the real rover.',
      'Our team of about 60 members can now test their work without depending on the weather or on the rover being available. The simulation will also help future teams and make onboarding new members easier, and we plan to package it as an app anyone can run.',
    ],
  },
  {
    // Always last: little progress yet.
    id: 'basketball-humanoid',
    context: ['CS 580', 'Intelligent Robotics'],
    title: 'Basketball-Playing Humanoid',
    summary:
      'A simulated NAO humanoid in Webots that plays basketball by itself. It finds a ball placed randomly on the floor, walks to it, squats to pick it up, then walks to a shooting point. There it finds the basket, turns to face it, and picks the right shot for one of various setups. Everything it knows about the ball and basket comes from its head cameras.',
    role: 'I’m building the vision system and the pickup. I’m training CNNs that estimate the ball’s position and recognize which basket setup the robot is facing. I’m also writing the inverse kinematics that move the arms to the ball during the squat, and a Kalman filter that localizes the ball’s position while the robot walks.',
    tags: ['Webots', 'Python', 'PyTorch', 'CNN', 'Inverse Kinematics', 'Kalman Filter'],
    video: null,
    image: 'humanoid-sim.jpg',
    imageAlt: 'Simulated NAO humanoid standing on a checkered floor in Webots, with the basket behind it',
    videoCaption: 'Demo coming soon',
    repo: '',
    timeline: 'October 2026 – Present · Final project for CS 580 (team of 2)',
    impactLabel: 'Challenges & approach',
    impact: [
      'Instead of labeling thousands of images by hand for the CNN, a supervisor script places the ball and basket at random positions and saves each camera image with the true position, so the training data labels itself.',
      'As the robot gets close, the ball leaves the camera’s view. That’s why we’re using a Kalman filter that combines the robot’s actual movements with camera measurements, so the robot can keep tracking the ball until its hands reach it.',
    ],
  },
]
