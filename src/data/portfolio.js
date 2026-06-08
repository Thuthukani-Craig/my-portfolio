import {
  FaAws,
  FaCloud,
  FaCode,
  FaCss3Alt,
  FaDocker,
  FaEnvelope,
  FaGithub,
  FaHandshake,
  FaHtml5,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPython,
  FaReact,
  FaShieldAlt,
  FaTools,
} from "react-icons/fa";

export const profileLinks = [
  { label: "GitHub", href: "https://github.com/Thuthukani-Craig", icon: FaGithub, variant: "cyan" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/thuthukani-makhathini-5891a3381/", icon: FaLinkedin, variant: "blue" },
  { label: "Download CV", href: "/Thuthukani-Makhathini-CV.pdf", icon: FaCode, variant: "green" },
];

export const contactCta = {
  label: "Hire Me / Collaborate",
  href: "#contact",
  icon: FaHandshake,
};

export const contactDetails = [
  {
    label: "Email",
    value: "meggmaintenance@gmail.com",
    href: "mailto:meggmaintenance@gmail.com",
    icon: FaEnvelope,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/thuthukani-makhathini-5891a3381/",
    href: "https://www.linkedin.com/in/thuthukani-makhathini-5891a3381/",
    icon: FaLinkedin,
  },
  {
    label: "GitHub",
    value: "github.com/Thuthukani-Craig",
    href: "https://github.com/Thuthukani-Craig",
    icon: FaGithub,
  },
  {
    label: "Cell",
    value: "063 266 1365",
    href: "tel:+27632661365",
    icon: FaPhoneAlt,
  },
  {
    label: "Address",
    value: "1108 Thokozani, Esikhawini, 3887",
    href: null,
    icon: FaMapMarkerAlt,
  },
];

export const about = {
  mission:
    "Grow as a front-end developer by shipping responsive web applications, learning cloud platforms, and improving everyday user experiences.",
  bio:
    "Thuthukani Makhathini is a second-year Computer Science student focused on web development, cloud computing, and automation. I am building practical solutions like TenderPro while strengthening skills in JavaScript, React, Python, AWS, Azure, and DevOps.",
  values: ["Transparency", "Learning", "Resilience"],
};

export const commandStats = [
  {
    label: "BSc Computer Science",
    value: "Year 2",
    detail: "Second-year student building a stronger software foundation.",
  },
  {
    label: "Azure Fundamentals",
    value: "Certified",
    detail: "Certified in cloud fundamentals and Azure basics.",
  },
  {
    label: "TenderPro",
    value: "In Development",
    detail: "Building a tender aggregation platform for South African opportunities.",
  },
  {
    label: "Open To",
    value: "Remote Opportunities",
    detail: "Available for junior front-end and cloud roles.",
  },
];

export const skills = [
  {
    group: "Front-End",
    icon: FaCode,
    items: [
      {
        name: "HTML5",
        experience: "Intermediate",
        strength: 72,
        icon: FaHtml5,
        note: "Building responsive markup for portfolio pages and web apps.",
      },
      {
        name: "CSS3",
        experience: "Intermediate",
        strength: 70,
        icon: FaCss3Alt,
        note: "Styling modern interfaces with responsive layouts and animations.",
      },
      {
        name: "JavaScript",
        experience: "Intermediate",
        strength: 68,
        icon: FaCode,
        note: "Developing interactive web experiences with clean logic and tooling.",
      },
      {
        name: "React",
        experience: "Learning",
        strength: 58,
        icon: FaReact,
        note: "Strengthening component-driven UI development and state handling.",
      },
    ],
  },
  {
    group: "Cloud & DevOps",
    icon: FaCloud,
    items: [
      {
        name: "AWS",
        experience: "Learning",
        strength: 52,
        icon: FaAws,
        note: "Exploring AWS services, deployments, and cloud architecture.",
      },
      {
        name: "Azure",
        experience: "Hands-On",
        strength: 78,
        icon: FaCloud,
        note: "Practicing Azure fundamentals, portal workflows, and cloud services.",
      },
      {
        name: "Docker",
        experience: "Learning",
        strength: 56,
        icon: FaDocker,
        note: "Learning containerization for development and deployment consistency.",
      },
      {
        name: "Terraform",
        experience: "Learning",
        strength: 46,
        icon: FaTools,
        note: "Studying infrastructure-as-code for repeatable cloud environments.",
      },
    ],
  },
  {
    group: "Tools & Workflow",
    icon: FaTools,
    items: [
      {
        name: "Git & GitHub",
        experience: "Hands-On",
        strength: 82,
        icon: FaGithub,
        note: "Managing source control, branches, and collaboration workflows.",
      },
      {
        name: "Python",
        experience: "Intermediate",
        strength: 64,
        icon: FaPython,
        note: "Writing scripts and backend logic for automation and APIs.",
      },
      {
        name: "FastAPI",
        experience: "Learning",
        strength: 48,
        icon: FaCode,
        note: "Building fast Python APIs for backend prototypes.",
      },
      {
        name: "CI/CD Pipelines",
        experience: "Learning",
        strength: 52,
        icon: FaCode,
        note: "Automating testing and deployment for consistent delivery.",
      },
    ],
  },
];

export const roadmap = [
  {
    title: "Student",
    status: "Foundation",
    body: "Built the first programming, networking, and Linux muscle memory.",
  },
  {
    title: "Junior Dev",
    status: "Build",
    body: "Shipping usable web interfaces, APIs, and automation scripts.",
  },
  {
    title: "Cloud Engineer",
    status: "Deploy",
    body: "Designing resilient cloud systems with security and observability.",
  },
  {
    title: "DevOps",
    status: "Automate",
    body: "Turning repeatable delivery into pipelines, containers, and IaC.",
  },
  {
    title: "Architect",
    status: "Scale",
    body: "Owning system strategy across cost, reliability, and governance.",
  },
];

export const projects = [
  {
    title: "TenderPro",
    type: "Tender aggregation platform",
    description:
      "Tender aggregation platform designed to collect, organize, and present South African tender opportunities.",
    stack: ["React", "JavaScript", "Python"],
    href: "https://github.com/Thuthukani-Craig",
    featured: true,
    impact:
      "Building a practical solution to help buyers and suppliers track local tender opportunities.",
  },
  {
    title: "Personal Portfolio",
    type: "Developer portfolio",
    description:
      "Responsive developer portfolio showcasing projects, skills, and career progression.",
    stack: ["React", "Vite", "Framer Motion"],
    href: "https://github.com/Thuthukani-Craig",
  },
  {
    title: "Weather Dashboard",
    type: "Coming Soon",
    description: "Responsive weather application consuming external APIs.",
    stack: ["JavaScript", "APIs", "Responsive Design"],
    href: "https://github.com/Thuthukani-Craig",
    status: "Coming Soon",
  },
  {
    title: "Task Manager",
    type: "Coming Soon",
    description: "Task management application using JavaScript and browser storage.",
    stack: ["JavaScript", "Browser Storage", "UI"],
    href: "https://github.com/Thuthukani-Craig",
    status: "Coming Soon",
  },
];

export const currentLearning = [
  { title: "AWS", description: "Diving into AWS services, deployment patterns, and cloud best practices." },
  { title: "Docker", description: "Learning containerization and reproducible development environments." },
  { title: "FastAPI", description: "Building lightweight Python APIs for backend prototypes." },
  { title: "Terraform", description: "Studying infrastructure-as-code for repeatable cloud deployments." },
  { title: "CI/CD Pipelines", description: "Automating test and deployment workflows for faster delivery." },
  { title: "React", description: "Strengthening component-driven UI development and state management." },
];
