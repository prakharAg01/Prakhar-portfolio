import { RadioTower, Code, CodeXml } from "lucide-react";

export const ROLES = [
  "Full-Stack Developer",
  "UI/UX Enthusiast",
  "Computer and Communications Engineer",
  "Embedded Systems & IoT Learner",
  "Exploring Signal Processing",
];

export const PROJECTS_DATA = [
  {
    title: "ASL Recognition",
    description: "Real-time American Sign Language (ASL) alphabet recognition using MediaPipe and Random Forest, deployed on Raspberry Pi. Includes dataset preparation, landmark detection, model training, and live gesture prediction via webcam.",
    techStack: ["Python", "Raspberry Pi", "MediaPipe", "Random Forest"],
    categories: ["Python", "Machine Learning", "IoT"],
    githubUrl: "https://github.com/prakharAg01/asl-recognition",
    demoUrl: "#"
  },
  {
    title: "Signal Processing Dashboard",
    description: "Web-based visualization tool for real-time DSP algorithms. Allows upload of raw audio/signals and plots Fourier transforms dynamically.",
    techStack: ["Python", "Flask", "React", "D3.js"],
    categories: ["Signal Processing", "Python", "Full-Stack"],
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    title: "CodeCampus - Coding Platform for JKLU",
    description: "A highly scalable full-stack e-commerce platform rebuilt from a monolith into a modern Go and Node.js microservices architecture.",
    techStack: ["JavaScript", "Node.js", "MongoDB", "React", "Tailwind CSS", "Express.js"],
    categories: ["Full-Stack"],
    githubUrl: "https://github.com/prakharAg01/coding_platform_jklu",
    demoUrl: "#"
  }
];

export const TIMELINE_DATA = [
  {
    type: "Education",
    title: "Higher Secondary (PCM + IP)",
    subtitle: "Maheshwari Public School, Pratap Nagar, Jaipur",
    duration: "2020 : 2022",
    description: "Completed with distinction in Physics, Chemistry, Mathematics and Computer Science.",
  },
  {
    type: "Education",
    title: "B.Tech – Computer and Communications Eng.",
    subtitle: "JK Lakshmipat University, Jaipur",
    duration: "2023 : 2027",
    description: "Specializing in VLSI, FPGA systems, Digital Signal Processing, and Full-Stack Development.",
  },
  {
    type: "Experience",
    title: "AI Research Intern",
    subtitle: "LNMIIT, Jaipur",
    duration: "May 2025 : July 2025",
    description: "Worked on a project titled Hardware implementation of Yoga Pose Recognition using Deep Learning.",
  },
  {
    type: "Experience",
    title: "Full-Stack Developer Intern",
    subtitle: "Acme Tech Solutions",
    duration: "Jun 2024 – Aug 2024",
    description: "Built REST APIs in Node.js, designed React dashboards, and deployed containerised services on AWS.",
  },
];

export const CERTIFICATIONS_DATA = [
  {
    name: "C-Programming Course",
    organization: "Infosys Springboard",
    logo: CodeXml ,
    url: "https://jklujaipur-my.sharepoint.com/:b:/g/personal/prakharagrawal_jklu_edu_in/IQDgQHMSule7RaX3Ahxhi-TaAYz8yrnkeiA-X5xkZoNHC2k?e=sRjcgL",
  },
  {
    name: "Hands-on Training, Research Aspects and Demonstrations in 5G Use Case Lab",
    organization: "AICTE Training And Learning (ATAL) Academy",
    logo: RadioTower,
    url: "https://jklujaipur-my.sharepoint.com/:b:/g/personal/prakharagrawal_jklu_edu_in/IQCtECgDOI3fSY-LJyxn_rYbAXOD2Y2wDpW2h_pSPHB0sIw?e=FIjYt6",
  },
  {
    name: "Learn Python Programming",
    organization: "CodeChef",
    logo: CodeXml,
    url: "https://jklujaipur-my.sharepoint.com/:b:/g/personal/prakharagrawal_jklu_edu_in/IQA6eCAdqtY-S4ryYkeIQ6d3AdEeol6xxnbkYulMxOix8vc?e=NoLrQu",
  },
  {
    name: "LNMHacks 7.0 Participation",
    organization: "LNMHacks-LNMIIT Jaipur",
    logo: Code,
    url: "https://jklujaipur-my.sharepoint.com/:b:/g/personal/prakharagrawal_jklu_edu_in/IQClZJ_zogUiTq6E5Bp7rv3hAY1t24zew96VNYnNLc8siGU?e=R3uLEE",
  },
  {
    name: "LUSIP 2025 - Project Completion",
    organization: "LNMIIT Jaipur",
    logo: Code,
    url: "https://jklujaipur-my.sharepoint.com/:b:/g/personal/prakharagrawal_jklu_edu_in/IQDvZchm454ZRImXo2VJQkLhAUZs3dIx6pg_UY4bI-oKysQ?e=ihxZEp",
  },
  {
    name: "Programming in C",
    organization: "Infosys Springboard",
    logo: CodeXml,
    url: "https://jklujaipur-my.sharepoint.com/:b:/g/personal/prakharagrawal_jklu_edu_in/IQBZ17GdQAa-QJV-BcAN9mWYAY7CY6AdHQI7QrSfCkpoPYM?e=HCkP7G",
  },
  {
    name: "Programming in C",
    organization: "CodeChef",
    logo: CodeXml,
    url: "https://jklujaipur-my.sharepoint.com/:b:/g/personal/prakharagrawal_jklu_edu_in/IQD709jK9XO7TL2eXIeWhVmvAeNKXvCXKCZpmbuAaobSmmA?e=cTXeTa",
  },
  {
    name: "Red Hat System Administration I",
    organization: "Red Hat",
    logo: CodeXml,
    url: "https://jklujaipur-my.sharepoint.com/:b:/g/personal/prakharagrawal_jklu_edu_in/IQAqRyNJXkW6S7Dn9L1msngmATLRdLpuEAqf08zY3d-boZ8?e=0Dm43t",
  },
];

export const SKILLS_DATA = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", level: 70},
      { name: "C", level: 80},
      { name: "C++", level: 50},
    ]
  },
  {
    category: "Hardware Description languages",
    skills: [
      { name: "VHDL", level: 90},
      { name: "Verilog", level: 80},
      { name: "SystemVerilog", level: 65},
    ]
  },
  {
    category: "Web Development",
    skills: [
      { name: "React.js", level: 70},
      { name: "Html", level: 70},
      { name: "CSS", level: 60},
      { name: "Javascript", level: 90},
      { name: "Node.Js", level: 80},
      { name: "Express.js", level: 75},
    ]
  },
  {
    category: "Tools & Technologies",
    skills: [
      { name: "Linux", level: 90},
      { name: "LtSpice", level: 90},
      { name: "FPGA", level: 80},
      { name: "MATLAB", level: 85},
      { name: "Arduino", level: 80},
    ]
  }
];

export const SOCIAL_LINKS = [
  { name: "GitHub", url: "https://github.com/prakharAg01", icon: "FiGithub" },
  { name: "LinkedIn", url: "https://linkedin.com/in/", icon: "FiLinkedin" },
];

export const FOOTER_NAV = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/#projects" },
  { name: "Credentials", href: "/#credentials" },
  { name: "Contact", href: "/#contact" },
];

export const TECHNICAL_INTERESTS = [
  { area: "Hardware", skills: "VLSI, FPGA, ESP32, Verilog" },
  { area: "Full-Stack", skills: "MERN Stack, System Design" },
  { area: "Intelligence", skills: "Signal Processing, Edge AI" },
];
