import {
  FaAws,
  FaCloud,
  FaCode,
  FaDocker,
  FaEnvelope,
  FaGithub,
  FaHandshake,
  FaLinux,
  FaLinkedin,
  FaMapMarkerAlt,
  FaNodeJs,
  FaPhoneAlt,
  FaPython,
  FaShieldAlt,
} from "react-icons/fa";
import { SiGooglecloud, SiKubernetes, SiTerraform } from "react-icons/si";

export const profileLinks = [
  { label: "GitHub", href: "https://github.com/", icon: FaGithub, variant: "cyan" },
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: FaCloud, variant: "blue" },
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
    value: "ThuthukaniC@yahoo.com",
    href: "mailto:ThuthukaniC@yahoo.com",
    icon: FaEnvelope,
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
  {
    label: "LinkedIn",
    value: "Connect professionally",
    href: "https://www.linkedin.com/",
    icon: FaLinkedin,
  },
  {
    label: "GitHub",
    value: "View code and projects",
    href: "https://github.com/",
    icon: FaGithub,
  },
];

export const about = {
  mission:
    "I am building toward a career where secure cloud infrastructure is not treated as an afterthought, but as the foundation for reliable digital products.",
  bio:
    "Thuthukani Makhathini is a student and emerging entrepreneur growing through hands-on labs, portfolio projects, and real-world problem solving. The journey blends software development, cloud operations, and cybersecurity curiosity into one practical mission: build systems that people can trust.",
  values: ["Transparency", "Innovation", "Resilience"],
};

export const commandStats = [
  { label: "Cloud Readiness", value: "91%", detail: "AWS, Azure, GCP foundation" },
  { label: "Security Mode", value: "ON", detail: "IAM, Linux, network hardening" },
  { label: "Deploy Target", value: "24/7", detail: "Automation-first delivery" },
];

export const skills = [
  {
    group: "Cloud Platforms",
    icon: FaCloud,
    items: [
      {
        name: "AWS Core Services",
        level: 88,
        icon: FaAws,
        note: "Based on completed labs, IAM practice, storage patterns, and deployment exercises.",
      },
      {
        name: "Azure Operations",
        level: 82,
        icon: FaCloud,
        note: "Based on portal labs, identity concepts, monitoring workflows, and cloud operations study.",
      },
      {
        name: "GCP Fundamentals",
        level: 70,
        icon: SiGooglecloud,
        note: "Based on platform fundamentals, compute/storage learning, and comparative cloud practice.",
      },
    ],
  },
  {
    group: "Cybersecurity",
    icon: FaShieldAlt,
    items: [
      {
        name: "IAM & Access Control",
        level: 84,
        icon: FaShieldAlt,
        note: "Based on least-privilege design, account security labs, and access review practice.",
      },
      {
        name: "Linux Hardening",
        level: 80,
        icon: FaLinux,
        note: "Based on shell usage, service configuration, permissions, and baseline security checks.",
      },
      {
        name: "Network Defense",
        level: 74,
        icon: FaCloud,
        note: "Based on subnetting, firewall rules, scanning awareness, and detection concepts.",
      },
    ],
  },
  {
    group: "Engineering Stack",
    icon: FaCode,
    items: [
      {
        name: "Python Automation",
        level: 82,
        icon: FaPython,
        note: "Based on scripting exercises, workflow automation, and backend learning projects.",
      },
      {
        name: "Node.js APIs",
        level: 72,
        icon: FaNodeJs,
        note: "Based on API practice, project scaffolding, package workflows, and debugging reps.",
      },
      {
        name: "React Interfaces",
        level: 76,
        icon: FaCode,
        note: "Based on responsive UI builds, component design, and interactive portfolio work.",
      },
    ],
  },
  {
    group: "DevOps Systems",
    icon: SiKubernetes,
    items: [
      {
        name: "Docker Workflows",
        level: 78,
        icon: FaDocker,
        note: "Based on container concepts, local builds, image workflows, and deployment planning.",
      },
      {
        name: "Kubernetes Concepts",
        level: 67,
        icon: SiKubernetes,
        note: "Based on cluster architecture study, workload concepts, and orchestration labs.",
      },
      {
        name: "Terraform IaC",
        level: 71,
        icon: SiTerraform,
        note: "Based on infrastructure-as-code practice, variables, plans, and repeatable cloud setup.",
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
    title: "Cloud Sentinel Dashboard",
    type: "Security telemetry",
    description:
      "A flagship command-center concept for surfacing cloud alerts, identity risk, incident priority, and executive-ready security posture in one clean interface.",
    stack: ["React", "AWS", "IAM", "Charts"],
    href: "https://github.com/",
    featured: true,
    impact: "Designed to help teams spot account risk quickly, prioritize alerts, and explain cloud exposure without drowning in raw logs.",
  },
  {
    title: "DevOps Launchpad",
    type: "Pipeline automation",
    description: "Reusable deployment workflow concept with build checks, image publishing, and release gates.",
    stack: ["Docker", "GitHub Actions", "Node", "Vite"],
    href: "https://github.com/",
  },
  {
    title: "Zero Trust Lab",
    type: "Cyber range",
    description: "A learning lab for network segmentation, Linux services, access policy, and audit trails.",
    stack: ["Linux", "Python", "Nmap", "SIEM"],
    href: "https://github.com/",
  },
];
