export const personalInfo = {
  name: "Nora Abdelnaby",
  displayName: "Nora Abdo",
  firstName: "Nora",
  title: "Front-End Developer",
  subtitle: "FRONT-END DEVELOPER",
  roles: [
    "Front-End Developer",
    "React Developer",
    "UI Developer"
  ],
  shortBio: "I build responsive, modern, and user-friendly web interfaces using React.js and modern front-end technologies.",
  fullBio: "I am a passionate Junior Front-End Developer dedicated to crafting clean, intuitive, and visually engaging web applications. With expertise in React.js, modern JavaScript, and Tailwind CSS, I turn complex ideas into seamless user experiences. Having participated in intensive tech initiatives and collaborative team projects, I thrive on continuous learning and clean code standards.",
  location: "Cairo, Egypt",
  email: "nora.abdelnaby.dev@gmail.com",
  phone: "+20 100 000 0000",
  socialLinks: {
    github: "https://github.com/noraabdelnaby",
    linkedin: "https://linkedin.com/in/noraabdelnaby",
    email: "mailto:nora.abdelnaby.dev@gmail.com"
  },
  cvUrl: "/assets/Nora_Abdelnaby_CV.pdf"
};

export const statsData = [
  { label: "Completed Projects", value: "5+", icon: "FolderCode" },
  { label: "Core Technologies", value: "10+", icon: "Code2" },
  { label: "Hands-on Experience", value: "Practical Training & Teamwork", icon: "Sparkles" },
  { label: "UI Quality", value: "100% Responsive & Modern", icon: "CheckCircle2" }
];

export const skillCategories = [
  {
    category: "Front-End",
    description: "Core markup, styling, and client-side reactive framework technologies",
    skills: [
      { name: "HTML5", level: "Advanced", icon: "FileCode" },
      { name: "CSS3", level: "Advanced", icon: "Palette" },
      { name: "JavaScript (ES6+)", level: "Intermediate / Advanced", icon: "JsSquare" },
      { name: "React.js", level: "Intermediate", icon: "Atom" },
      { name: "Tailwind CSS", level: "Intermediate / Advanced", icon: "Wind" },
      { name: "Bootstrap", level: "Intermediate", icon: "Layout" }
    ]
  },
  {
    category: "Tools & Environment",
    description: "Version control, editor extensions, and developer debugging tools",
    skills: [
      { name: "Git", level: "Intermediate", icon: "GitBranch" },
      { name: "GitHub", level: "Intermediate", icon: "Github" },
      { name: "VS Code", level: "Advanced", icon: "Laptop" },
      { name: "Chrome DevTools", level: "Intermediate", icon: "Cpu" }
    ]
  },
  {
    category: "Architecture & Practices",
    description: "Component design, asynchronous API integration, and routing",
    skills: [
      { name: "Responsive Design", level: "Advanced", icon: "Smartphone" },
      { name: "REST APIs", level: "Intermediate", icon: "Globe" },
      { name: "React Router", level: "Intermediate", icon: "Navigation" },
      { name: "Axios", level: "Intermediate", icon: "Zap" }
    ]
  }
];

export const projectsData = [
  {
    id: "ammarha",
    title: "Ammarha – Home Maintenance Platform",
    featured: true,
    isTeamProject: true,
    contribution: "Front-End Developer (UI Components, React Router, API Integration & Service Flow)",
    description: "A modern home maintenance platform connecting customers with verified technicians for services such as air conditioning, electrical work, plumbing, washing machines, refrigerators, and general repairs.",
    fullDescription: "Ammarha is designed to make requesting certified home maintenance effortless. As a key Front-End Developer on the team, I developed responsive customer interfaces, integrated RESTful APIs using Axios, configured multi-page navigation with React Router, and collaborated on integrating real-time notifications with SignalR and interactive service location selection using Leaflet maps.",
    technologies: ["React.js", "Vite", "Tailwind CSS", "React Router", "Axios", "SignalR", "Leaflet"],
    image: "/assets/projects/ammarha-preview.jpg",
    githubUrl: "https://github.com/noraabdelnaby/ammarha-maintenance",
    liveDemoUrl: "https://ammarha-demo.vercel.app"
  },
  {
    id: "dev-portfolio",
    title: "Personal Developer Portfolio",
    featured: true,
    isTeamProject: false,
    contribution: "Solo Developer",
    description: "A high-performance, responsive front-end developer portfolio website featuring pastel aesthetic accents, dynamic cards, smooth scrolling, and recruiter-focused content layout.",
    fullDescription: "Designed and implemented from scratch using React, Vite, and Tailwind CSS. Features modular data-driven components, interactive filter tags, smooth scroll navigation, contact form UI, and Framer Motion micro-animations.",
    technologies: ["React.js", "Vite", "Tailwind CSS", "Framer Motion", "Lucide Icons"],
    image: "/assets/projects/portfolio-preview.jpg",
    githubUrl: "https://github.com/noraabdelnaby/nora-portfolio",
    liveDemoUrl: "https://nora-portfolio-demo.vercel.app"
  },
  {
    id: "service-booking",
    title: "QuickService Booking Portal",
    featured: false,
    isTeamProject: false,
    contribution: "Solo Developer",
    description: "An intuitive web application for booking local services, featuring multi-step form validation, responsive category filters, and live preview of service packages.",
    fullDescription: "Built to demonstrate complex front-end form state management and interactive component communication using React hooks and REST API data structures.",
    technologies: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "Axios", "React Router"],
    image: "/assets/projects/booking-preview.jpg",
    githubUrl: "https://github.com/noraabdelnaby/quick-service-booking",
    liveDemoUrl: "https://quickservice-demo.vercel.app"
  }
];

export const experienceData = [
  {
    id: "digital-pioneers",
    role: "Software Development Trainee (Web Development)",
    organization: "Digital Pioneers Initiative",
    location: "Egypt",
    period: "2023 – Present",
    type: "Training & Development Program",
    highlights: [
      "Participating in intensive hands-on web development training focusing on modern front-end standards.",
      "Building reactive web applications using HTML5, CSS3, JavaScript ES6+, and React.js framework.",
      "Practicing Git/GitHub version control workflows and collaborative Agile team development.",
      "Implementing responsive layouts, accessible component patterns, and asynchronous API integrations."
    ]
  },
  {
    id: "ischool",
    role: "Coding Session Leader / Educator",
    organization: "iSchool",
    location: "Egypt",
    period: "2023 – 2024",
    type: "Teaching & Mentorship",
    highlights: [
      "Delivered interactive coding sessions to young learners, breaking down complex programming concepts into simple, relatable ideas.",
      "Guided students step-by-step through practical coding exercises and logic-building projects.",
      "Provided active support with problem solving, debugging code errors, and fostering critical thinking.",
      "Enhanced technical communication, patience, active listening, and audience engagement skills."
    ]
  }
];

export const educationData = [
  {
    institution: "Ain Shams University",
    degree: "Bachelor of Laws (LLB)",
    period: "2021 – 2025",
    description: "Academic degree focused on analytical reasoning, structured documentation, and critical problem solving. Transitioned passion and technical study into professional Front-End Web Development."
  }
];

export const certificatesData = [
  {
    id: "cert-dpi",
    title: "Front-End Web Development Specialization",
    issuer: "Digital Pioneers Initiative",
    date: "2024",
    credentialUrl: "#",
    description: "Comprehensive practical training in modern HTML5, CSS3, JavaScript ES6+, React.js, and Git version control."
  },
  {
    id: "cert-react",
    title: "React Developer & Modern UI Engineering",
    issuer: "Front-End Academy / Online Certification",
    date: "2024",
    credentialUrl: "#",
    description: "Advanced training in React hooks, state management, router patterns, component design, and API integration."
  },
  {
    id: "cert-responsive",
    title: "Responsive Web Design & Web Standards",
    issuer: "FreeCodeCamp / Web Certification",
    date: "2023",
    credentialUrl: "#",
    description: "Mastery of fluid flexbox/grid layouts, mobile-first design, media queries, and cross-browser accessibility."
  }
];

export const whyWorkWithMe = [
  {
    id: "responsive",
    title: "Clean & Responsive Interfaces",
    description: "I construct pixel-perfect, accessible, mobile-first layouts that adapt smoothly across mobile, tablet, and desktop screens.",
    icon: "Layout"
  },
  {
    id: "learning",
    title: "Continuous Learning & Adaptability",
    description: "I constantly sharpen my skills with modern web tech, staying up to date with React best practices and UI design trends.",
    icon: "GraduationCap"
  },
  {
    id: "problem-solving",
    title: "Methodical Problem Solving",
    description: "From my legal analytical training to debugging code, I approach challenges systematically to deliver clean, maintainable solutions.",
    icon: "Lightbulb"
  },
  {
    id: "teamwork",
    title: "Effective Team Collaboration",
    description: "Experienced in Git workflows, team project communication, and conveying technical ideas clearly to learners and peers.",
    icon: "Users"
  }
];
