export const PERSONAL_DETAILS = {
  name: "Vignesh",
  fullName: "Vignesh Ramamoorthi",
  profession: "Aspiring Web Developer",
  degree: "Bachelor of Computer Science",
  college: "Hindusthan College of Arts and Science",
  university: "Bharathiar University",
  graduationYear: "2023",
  location: "Theni, Tamil Nadu, India",
  email: "vignesh.ramamoorthi07@gmail.com",
  phone: "+91 9003961896",
  availability: "AVAILABLE FOR OPPORTUNITIES",
  tagline: "Turning ideas into powerful digital experiences.",
  shortBio: "Hi, I'm Vignesh, an aspiring Web Developer passionate about building responsive, user-friendly, and visually appealing web applications. I have foundational knowledge of HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, and SQL. I enjoy solving problems, learning new technologies, and transforming ideas into functional digital experiences.",
  detailedBio: "I'm Vignesh, a Computer Science graduate from Hindusthan College of Arts and Science. I am passionate about web development and enjoy building interactive, responsive, and user-friendly websites. I have hands-on experience with HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, and SQL. During my six-month internship at Aimore Technologies, I gained practical exposure to web development and improved my technical and problem-solving abilities. I am a quick learner, creative thinker, and team player who is eager to explore new technologies and contribute to real-world projects.",
  socials: {
    github: "https://github.com/vigneshramamoorthi07-sys",
    linkedin: "https://www.linkedin.com/in/vignesh-r-3627a12a9",
    email: "mailto:vignesh.ramamoorthi07@gmail.com"
  },
  stats: [
    { label: "DEGREE", value: "B.Sc CS", subtext: "Year of 2023" },
    { label: "INTERNSHIP", value: "6 Months", subtext: "Web Dev Trainee" },
    { label: "PROJECTS", value: "2+", subtext: "Web Applications" },
    { label: "STATUS", value: "Ready to Join", subtext: "Immediate / Fresher" }
  ]
};

export const HIGHLIGHT_CARDS = [
  {
    title: "Computer Science Graduate",
    subtitle: "Hindusthan College (2020–2023)",
    description: "Solid theoretical foundation in computer systems, algorithms, databases, and modern software development practices.",
    icon: "GraduationCap"
  },
  {
    title: "6 Months Internship Experience",
    subtitle: "Aimore Technologies",
    description: "Hands-on industrial training as a Web Developer Trainee building functional UI components and responsive web interfaces.",
    icon: "Briefcase"
  },
  {
    title: "2 Web Development Projects",
    subtitle: "Full-cycle Development",
    description: "Engineered database-driven web applications with authentication, responsive layouts, and CRUD operations.",
    icon: "Code2"
  },
  {
    title: "Continuous Learner",
    subtitle: "Eager & Adaptable",
    description: "Actively exploring modern frameworks like React and Tailwind CSS, following clean code principles and best UI/UX design.",
    icon: "Sparkles"
  }
];

export const SKILL_CATEGORIES = [
  {
    title: "Web Development",
    skills: [
      { name: "HTML5", level: 90, tag: "Core Markup" },
      { name: "CSS3", level: 85, tag: "Modern Styling & Flex/Grid" },
      { name: "JavaScript (ES6+)", level: 80, tag: "DOM & Asynchronous JS" }
    ]
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "Tailwind CSS", level: 85, tag: "Utility-First CSS" },
      { name: "Bootstrap", level: 85, tag: "Responsive Component Framework" },
      { name: "React.js", level: 75, tag: "Components & State Management" }
    ]
  },
  {
    title: "Database Management",
    skills: [
      { name: "SQL", level: 80, tag: "Queries & Joins" },
      { name: "MySQL", level: 80, tag: "Relational Schema & CRUD" }
    ]
  },
  {
    title: "Developer Tools & Analytics",
    skills: [
      { name: "Visual Studio Code", level: 90, tag: "Primary Code Editor" },
      { name: "Power BI", level: 70, tag: "Data Visualization & Dashboards" },
      { name: "Git & GitHub", level: 75, tag: "Version Control" }
    ]
  },
  {
    title: "Office Applications",
    skills: [
      { name: "Microsoft Excel", level: 85, tag: "Data Analysis & Formulas" },
      { name: "Microsoft PowerPoint", level: 85, tag: "Technical Presentations" },
      { name: "Microsoft Word", level: 90, tag: "Documentation & Reports" }
    ]
  }
];

export const SOFT_SKILLS = [
  { name: "Communication", desc: "Clear articulation of ideas, active listening, and technical documentation.", icon: "MessageSquare" },
  { name: "Problem Solving", desc: "Analytical mindset breaking down complex bugs into structured, logical solutions.", icon: "Lightbulb" },
  { name: "Team Working", desc: "Collaborative spirit in sprint reviews, code discussions, and peer learning.", icon: "Users" },
  { name: "Creativity", desc: "Designing elegant, intuitive UI/UX experiences with attention to visual hierarchy.", icon: "Palette" },
  { name: "Leadership", desc: "Initiative-taking, personal accountability, and mentoring fellow learners.", icon: "Award" }
];

export const LANGUAGES = [
  { name: "English", type: "Professional Working" },
  { name: "Tamil", type: "Native / Fluent" },
  { name: "Kannada", type: "Conversational" }
];

export const WORK_PROCESS = [
  { step: "01", name: "DISCOVER", desc: "Understanding project goals, target audience, technical scope, and responsive wireframes." },
  { step: "02", name: "IDEATE", desc: "Structuring component hierarchies, relational database schemas, and state flows." },
  { step: "03", name: "DESIGN", desc: "Crafting modern layouts with consistent typography, dark mode aesthetics, and micro-interactions." },
  { step: "04", name: "DEVELOP", desc: "Writing clean, semantic HTML, modular CSS/Tailwind, and robust JavaScript logic." },
  { step: "05", name: "DELIVER", desc: "Cross-browser testing, mobile responsiveness audit, performance verification, and deployment." }
];

export const PROJECTS = [
  {
    id: "art-gallery",
    title: "Art Gallery Management System",
    category: "Full Stack / Web App",
    duration: "2022 – 2023",
    description: "Developed a web-based Art Gallery Management System using HTML, CSS, and JavaScript to manage artworks, artists, and exhibitions through a responsive and user-friendly interface.",
    longDescription: "A comprehensive digital gallery platform engineered to streamline artwork cataloging, artist portfolios, and cultural exhibition schedules. Includes interactive discovery filters, visitor query handling, and administrative inventory controls.",
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1000&q=80",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "MySQL"],
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "MySQL"],
    keyFeatures: [
      "User registration and secure authentication system",
      "Artwork and artist portfolio catalog management",
      "Add, update, and delete artwork records (Full CRUD)",
      "Exhibition scheduling and featured event management",
      "Search and multi-category filter functionality",
      "Fully responsive user interface tested across mobile and desktop"
    ],
    githubUrl: "https://github.com/vignesh-dev/art-gallery-management-system",
    demoUrl: "#projects"
  },
  {
    id: "online-learning",
    title: "Online Learning Platform",
    category: "EdTech Web App",
    duration: "2021 – 2022",
    description: "Developed an Online Learning Platform using web technologies to deliver course content and track user progress through an intuitive interface.",
    longDescription: "An intuitive e-learning web portal built to facilitate self-paced learning. Features organized course curricula, multimedia lecture players, module tracking, and automated chapter quizzes for continuous assessment.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "MySQL"],
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "MySQL"],
    keyFeatures: [
      "User registration, login, and student profile dashboard",
      "Course enrollment, category browsing, and syllabus details",
      "Responsive video lecture player and downloadable course resources",
      "Student completion progress tracking and module checklists",
      "Interactive quiz and assessment evaluation module",
      "Intuitive, clean UI optimized for tablets and mobile devices"
    ],
    githubUrl: "https://github.com/vignesh-dev/online-learning-platform",
    demoUrl: "#projects"
  }
];

export const INTERNSHIP_EXPERIENCE = [
  {
    role: "Web Developer Trainee",
    company: "Aimore Technologies",
    duration: "6 Months",
    location: "Chennai / Hybrid, India",
    tools: ["Visual Studio Code", "HTML5", "CSS3", "JavaScript", "Bootstrap"],
    summary: "Completed a six-month internship as a Web Developer Trainee at Aimore Technologies, gaining practical exposure to web development and improving my understanding of frontend development tools and technologies.",
    highlights: [
      "Trained in frontend architecture, semantic HTML structure, and modern CSS layout paradigms.",
      "Developed responsive webpage modules and implemented interactive DOM manipulation using JavaScript.",
      "Collaborated with senior developers on code reviews and debugging cross-browser UI issues.",
      "Utilized VS Code extensions, live server environments, and Git version control workflows."
    ]
  }
];

export const EDUCATION_LIST = [
  {
    level: "Bachelor's Degree",
    degree: "Bachelor of Computer Science (B.Sc CS)",
    institution: "Hindusthan College of Arts and Science",
    university: "Bharathiar University",
    year: "2020 – 2023",
    score: "Graduated with Computer Science Major",
    location: "Coimbatore, Tamil Nadu",
    details: "Core coursework: Data Structures, Web Technology, Relational Database Management Systems (RDBMS), Software Engineering, Operating Systems."
  },
  {
    level: "Higher Secondary Education",
    degree: "Higher Secondary Certificate (HSC - 12th)",
    institution: "Paalam Matric HR Secondary School",
    university: "State Board of Tamil Nadu",
    year: "2018 – 2020",
    score: "68%",
    location: "Theni, Tamil Nadu",
    details: "Specialized in Computer Science and Mathematics, laying foundational programming and analytical problem-solving skills."
  },
  {
    level: "Secondary Education",
    degree: "Secondary School Leaving Certificate (SSLC - 10th)",
    institution: "Paalam Matric HR Secondary School",
    university: "State Board of Tamil Nadu",
    year: "2018",
    score: "87%",
    location: "Theni, Tamil Nadu",
    details: "Strong academic foundation with distinction in Science and Mathematics."
  }
];

