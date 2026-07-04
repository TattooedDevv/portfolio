import type { ComponentType } from 'react';
import { BriefcaseBusiness, Code2, Database, Network, ShieldCheck } from 'lucide-react';
import { FaAws, FaDatabase, FaDocker, FaJava, FaJenkins, FaLinux, FaMicrosoft, FaPython, FaShieldAlt } from 'react-icons/fa';
import {
  SiCplusplus,
  SiGithubactions,
  SiGrafana,
  SiKubernetes,
  SiPostgresql,
  SiPrometheus,
  SiSharp,
  SiTerraform,
} from 'react-icons/si';

export type PageId =
  | 'home'
  | 'start'
  | 'about'
  | 'experience'
  | 'engineering'
  | 'homelab'
  | 'projects'
  | 'roadmap'
  | 'writing'
  | 'thinking'
  | 'resume'
  | 'contact';

export type NavItem = {
  label: string;
  page: PageId;
};

export type SkillGroup = {
  name: string;
  description: string;
  items: Array<{
    name: string;
    icon: ComponentType<{ className?: string }>;
  }>;
};

export type Project = {
  name: string;
  visibility: 'Public' | 'Private' | 'Research';
  focus: string;
  summary: string;
  tags: string[];
  links?: Array<{ label: string; href: string }>;
};

export type HandbookGroup = {
  area: string;
  description: string;
  handbooks: string[];
};

export type RoadmapGroup = {
  area: string;
  description: string;
  milestones: Array<{ name: string; status: 'Completed' | 'In Progress' | 'Planned' | 'Future' }>;
};

export const navItems: NavItem[] = [
  { label: 'Home', page: 'home' },
  { label: 'Start Here', page: 'start' },
  { label: 'About', page: 'about' },
  { label: 'Experience', page: 'experience' },
  { label: 'Engineering', page: 'engineering' },
  { label: 'Homelab', page: 'homelab' },
  { label: 'Projects', page: 'projects' },
  { label: 'Roadmap', page: 'roadmap' },
  { label: 'Writing', page: 'writing' },
  { label: 'Resume', page: 'resume' },
  { label: 'Contact', page: 'contact' },
];

export const pageTitles: Record<PageId, string> = {
  home: 'TattooedDevv | Jasmine Meade',
  start: 'Start Here | TattooedDevv',
  about: 'About | TattooedDevv',
  experience: 'Experience | TattooedDevv',
  engineering: 'Engineering | TattooedDevv',
  homelab: 'Homelab | TattooedDevv',
  projects: 'Projects | TattooedDevv',
  roadmap: 'Learning Roadmap | TattooedDevv',
  writing: 'Writing | TattooedDevv',
  thinking: 'How I Think | TattooedDevv',
  resume: 'Resume | TattooedDevv',
  contact: 'Contact | TattooedDevv',
};

export const skillGroups: SkillGroup[] = [
  {
    name: 'Cloud',
    description: 'Cloud infrastructure, identity, networking, and deployment foundations.',
    items: [
      { name: 'AWS', icon: FaAws },
      { name: 'Azure', icon: FaMicrosoft },
    ],
  },
  {
    name: 'Platform',
    description: 'Container platforms, infrastructure as code, and delivery automation.',
    items: [
      { name: 'Kubernetes', icon: SiKubernetes },
      { name: 'Docker', icon: FaDocker },
      { name: 'Terraform', icon: SiTerraform },
      { name: 'Jenkins', icon: FaJenkins },
      { name: 'GitHub Actions', icon: SiGithubactions },
    ],
  },
  {
    name: 'Backend',
    description: 'Service development, APIs, and production-oriented application foundations.',
    items: [
      { name: 'Python', icon: FaPython },
      { name: 'C#', icon: SiSharp },
      { name: 'C++', icon: SiCplusplus },
      { name: 'Java', icon: FaJava },
      { name: 'APIs', icon: Code2 },
    ],
  },
  {
    name: 'Databases',
    description: 'Relational data modeling, SQL, and backend persistence.',
    items: [
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'SQL', icon: Database },
      { name: 'Oracle', icon: FaDatabase },
    ],
  },
  {
    name: 'Security',
    description: 'Security-minded delivery, governance awareness, and DevSecOps practices.',
    items: [
      { name: 'Security+', icon: FaShieldAlt },
      { name: 'GRC', icon: ShieldCheck },
      { name: 'DevSecOps', icon: ShieldCheck },
      { name: 'DOE L / DOE Q pending', icon: BriefcaseBusiness },
    ],
  },
  {
    name: 'Systems',
    description: 'Linux, networks, observability, and distributed systems fundamentals.',
    items: [
      { name: 'Linux', icon: FaLinux },
      { name: 'Networking', icon: Network },
      { name: 'Prometheus', icon: SiPrometheus },
      { name: 'Grafana', icon: SiGrafana },
      { name: 'Distributed systems', icon: Network },
    ],
  },
];

export const projects: Project[] = [
  {
    name: 'Sell Street',
    visibility: 'Private',
    focus: 'Private SaaS platform in development',
    summary:
      'Sell Street is a private SaaS platform in development for the real estate industry. It serves as a real-world environment for applying software engineering, cloud-native architecture, security, identity, and platform engineering practices. Implementation details are intentionally limited because the project is proprietary.',
    tags: ['SaaS', 'Cloud-native architecture', 'Identity', 'Security', 'Platform engineering'],
  },
  {
    name: 'Sage',
    visibility: 'Research',
    focus: 'Personal AI assistant and portfolio agent',
    summary:
      'Sage is the planned assistant layer for this portfolio. It will eventually answer questions about projects, experience, technical writing, and documentation links without exposing private implementation details.',
    tags: ['AI assistant', 'RAG', 'Tool use', 'Memory', 'Portfolio integration'],
  },
  {
    name: 'Engineering Handbooks',
    visibility: 'Public',
    focus: 'Long-term documentation ecosystem',
    summary:
      'A growing set of engineering handbooks focused on understanding, trade-offs, labs, troubleshooting, field notes, and real-world application rather than certification note dumps.',
    tags: ['Documentation', 'Handbooks', 'Labs', 'Troubleshooting', 'Mental models'],
    links: [{ label: 'GitHub docs placeholder', href: 'https://github.com/your-github' }],
  },
  {
    name: 'Homelab',
    visibility: 'Public',
    focus: 'Enterprise-inspired engineering playground',
    summary:
      'A hands-on lab environment for networking, firewalls, storage, Kubernetes, Linux, GitOps, observability, security, disaster recovery, and platform engineering experiments.',
    tags: ['Networking', 'Kubernetes', 'Linux', 'Automation', 'Observability', 'Security'],
  },
  {
    name: 'Robotics Project',
    visibility: 'Research',
    focus: 'Linux, hardware, computer vision, and AI',
    summary:
      'A back-burner robotics project combining Raspberry Pi, Linux, computer vision, hardware, 3D printing, and AI experimentation.',
    tags: ['Raspberry Pi', 'Linux', 'Computer vision', 'Hardware', '3D printing'],
  },
];

export const handbookGroups: HandbookGroup[] = [
  {
    area: 'Platform Engineering',
    description: 'How platforms are built, operated, secured, observed, and evolved.',
    handbooks: [
      'Kubernetes Handbook',
      'Linux Handbook',
      'GitOps Handbook',
      'Platform Engineering Handbook',
      'Observability Handbook',
      'Service Mesh Handbook',
      'Container Runtime Handbook',
    ],
  },
  {
    area: 'Cloud Engineering',
    description: 'Cloud architecture, identity, networking, infrastructure as code, and multi-cloud patterns.',
    handbooks: ['AWS Handbook', 'Azure Handbook', 'Terraform Handbook', 'IAM Handbook', 'Cloud Networking Handbook', 'Multi-Cloud Patterns Handbook'],
  },
  {
    area: 'Software Engineering',
    description: 'System design, APIs, testing, architecture, performance, and production software habits.',
    handbooks: ['System Design Handbook', 'API Design Handbook', 'Testing Handbook', 'Architecture Handbook', 'Design Patterns Handbook', 'Performance Handbook'],
  },
  {
    area: 'Security Engineering',
    description: 'Security practices that fit into real engineering workflows and platform delivery.',
    handbooks: ['DevSecOps Handbook', 'Kubernetes Security Handbook', 'Cloud Security Handbook', 'Identity & Access Handbook', 'Supply Chain Security Handbook', 'Threat Modeling Handbook'],
  },
  {
    area: 'Networking',
    description: 'Foundational networking, service discovery, DNS, load balancing, and network security.',
    handbooks: ['Networking Fundamentals', 'Kubernetes Networking', 'DNS Handbook', 'Load Balancing Handbook', 'Service Discovery Handbook', 'Network Security Handbook'],
  },
  {
    area: 'Operations',
    description: 'Reliability practices for monitoring, logging, alerting, response, and troubleshooting.',
    handbooks: ['Incident Response', 'Monitoring', 'Logging', 'Alerting', 'Troubleshooting', 'Reliability Engineering'],
  },
  {
    area: 'Professional Engineering',
    description: 'The operating system for technical judgment, reflection, interviewing, and leadership growth.',
    handbooks: ['Engineering Journal', 'Architecture Decision Records', 'Field Notes', 'Conference Notes', 'Interview Preparation', 'Leadership', 'Mentoring'],
  },
];

export const homelabHardware = [
  'pfSense firewall',
  'UPS',
  'UGREEN NAS with 16 TB storage',
  'Mini PC',
  'Two switches, including one PoE switch',
  'Raspberry Pi',
  'Dell Precision 7540 workstation with 4 TB storage, RTX 5000, and 4K display',
];

export const homelabDomains = [
  'Networking',
  'Firewalls',
  'VLANs',
  'Storage',
  'Kubernetes',
  'Linux',
  'Automation',
  'GitOps',
  'Observability',
  'Security',
  'Disaster recovery',
  'Platform engineering experiments',
];

export const roadmapGroups: RoadmapGroup[] = [
  {
    area: 'Golden Kubestronaut / CNCF',
    description: 'A major long-term goal that turns Kubernetes study into a broad cloud-native engineering path.',
    milestones: [
      { name: 'CKAD', status: 'Completed' },
      { name: 'CKA', status: 'Planned' },
      { name: 'CKS', status: 'Future' },
      { name: 'KCNA / KCSA / CNCF ecosystem certs', status: 'Future' },
    ],
  },
  {
    area: 'AWS',
    description: 'Structured cloud learning that feeds cloud architecture and platform handbooks.',
    milestones: [
      { name: 'AWS Solutions Architect Associate', status: 'Planned' },
      { name: 'AWS DevOps Engineer', status: 'Planned' },
      { name: 'AWS Solutions Architect Professional', status: 'Planned' },
    ],
  },
  {
    area: 'Security',
    description: 'Security credentials and GRC learning connected to DevSecOps and platform work.',
    milestones: [
      { name: 'Security+', status: 'Completed' },
      { name: 'GRC-related certification', status: 'Planned' },
      { name: 'Cloud and Kubernetes security path', status: 'Future' },
    ],
  },
  {
    area: 'Linux / Azure / Terraform / Platform',
    description: 'Practical skill tracks that become labs, notes, and public documentation over time.',
    milestones: [
      { name: 'Linux administration roadmap', status: 'In Progress' },
      { name: 'Azure fundamentals and cloud engineering path', status: 'Planned' },
      { name: 'Terraform and infrastructure as code labs', status: 'Planned' },
      { name: 'Platform engineering portfolio labs', status: 'In Progress' },
    ],
  },
];

export const writingPosts = [
  'Building Sell Street without exposing proprietary details',
  'Learning Kubernetes Internals',
  'Building Sage as a Portfolio Assistant',
  'Deploying My Portfolio with Cloudflare and Vercel',
  'Notes on Platform Engineering',
  'Homelab Field Notes',
];

export const thinkingPrinciples = [
  'Understanding over memorization',
  'Documentation as a career operating system',
  'Learning through labs and experiments',
  'Building mental models',
  'Debugging through first principles',
  'Homelab as a practice environment',
  'Certifications as structured roadmaps',
  'Projects as application of knowledge',
  'Continuous improvement',
];
