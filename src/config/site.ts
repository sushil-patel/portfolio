export interface NavItem {
  title: string;
  href: string;
  external?: boolean;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: { name: string; level?: 'Core' | 'Advanced' | 'Proficient'; note?: string }[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  badge: string;
  year: string;
  description: string;
  url?: string;
}

export interface AchievementItem {
  title: string;
  organization: string;
  description: string;
  url?: string;
}

// TODO: Before final domain rollout, verify that sitemap-index.xml and robots.txt match siteUrl below
export const siteConfig = {
  name: 'Sushil Patel',
  role: 'Software Developer',
  headline: 'Building reliable distributed systems, scalable backend services, and high-performance developer tooling.',
  shortBio: 'Software Developer & Module Lead at Tata Consultancy Services (TCS) with 3 years of enterprise experience building robust backend architectures, distributed services, and automated release validation tools.',
  siteUrl: 'https://sushil-patel.github.io',
  basePath: '/',
  email: 'mrsushilpatel2001@gmail.com',
  phone: '+91-9157139239',
  location: 'India',
  currentRole: 'Software Developer — Module Lead',
  currentCompany: 'Tata Consultancy Services (TCS) Limited',
  currentCompanyUrl: 'https://www.tcs.com',
  social: {
    github: 'https://github.com/sushil-patel',
    linkedin: 'https://linkedin.com/in/sushil-patel-',
    email: 'mailto:mrsushilpatel2001@gmail.com',
  },
  resumePath: '/resume.pdf',

  navItems: [
    { title: 'Home', href: '/' },
    { title: 'Projects', href: '/projects' },
    { title: 'Experience', href: '/experience' },
    { title: 'Writing', href: '/writing' },
    { title: 'About', href: '/about' },
    { title: 'Resume', href: '/resume' },
    { title: 'Contact', href: '/contact' },
  ] as NavItem[],

  skillCategories: [
    {
      category: 'Languages & Core Fundamentals',
      description: 'Primary programming languages, algorithms, and core paradigms',
      skills: [
        { name: 'Java (8 / 17 / 21)', level: 'Core', note: 'Streams, Concurrency, Virtual Threads' },
        { name: 'SQL', level: 'Core', note: 'Relational data modeling, index optimization' },
        { name: 'Python', level: 'Proficient', note: 'Dev tooling, CLI automation, archive inspection' },
        { name: 'Bash / Shell Scripting', level: 'Proficient', note: 'Automation scripts, deployment workflows' },
        { name: 'OOP & SOLID', level: 'Core', note: 'Clean architecture, design patterns' },
      ],
    },
    {
      category: 'Frameworks & Backend Architecture',
      description: 'Enterprise RESTful services, microservices, and modular service design',
      skills: [
        { name: 'Spring Boot', level: 'Core', note: 'Auto-configuration, Actuator, Profiles, Metrics' },
        { name: 'Spring MVC & REST APIs', level: 'Core', note: 'DTO contracts, validation, exception handling' },
        { name: 'Spring Security', level: 'Core', note: 'JWT Auth, RBAC filter chains' },
        { name: 'Spring Data JPA / Hibernate', level: 'Core', note: 'EntityGraph, projections, caching' },
        { name: 'Microservices & Batch Jobs', level: 'Core', note: 'Asynchronous workers, scheduled tasks' },
      ],
    },
    {
      category: 'Distributed Systems & Messaging',
      description: 'Event-driven architectures, reliable messaging queues, and caching tiers',
      skills: [
        { name: 'Apache Kafka', level: 'Core', note: 'Topics, partitions, event producers & consumers' },
        { name: 'IBM MQ / MDB', level: 'Core', note: 'Enterprise queues, asynchronous processing' },
        { name: 'Redis', level: 'Core', note: 'Distributed caching, rate limiting, token bucket' },
        { name: 'Event-Driven Architecture', level: 'Core', note: 'Asynchronous decoupling & batch ingestion' },
      ],
    },
    {
      category: 'Databases & Persistence',
      description: 'Relational database schema design and query performance tuning',
      skills: [
        { name: 'MySQL', level: 'Core', note: 'Schema modeling, constraints, index tuning' },
        { name: 'Oracle SQL', level: 'Core', note: 'Enterprise database queries and bulk processing' },
        { name: 'Flyway', level: 'Core', note: 'Database version control and schema migrations' },
        { name: 'HikariCP', level: 'Core', note: 'High-speed connection pool tuning' },
      ],
    },
    {
      category: 'Cloud, DevOps & Tooling',
      description: 'Continuous integration, cloud infrastructure, and enterprise quality gates',
      skills: [
        { name: 'AWS (EC2, S3)', level: 'Proficient', note: 'AWS Certified Developer Associate' },
        { name: 'Docker', level: 'Proficient', note: 'Containerization, reproducible runtimes' },
        { name: 'Jenkins CI/CD', level: 'Proficient', note: 'Automated build and test deployment pipelines' },
        { name: 'SonarQube', level: 'Core', note: 'Static code analysis and quality gates' },
        { name: 'Git & GitHub / GitLab', level: 'Core', note: 'Branching, PRs, code reviews' },
        { name: 'Maven', level: 'Core', note: 'Build lifecycle, multi-module dependency management' },
        { name: 'JUnit 5 & Mockito', level: 'Core', note: 'Unit testing, mocking, integration testing' },
      ],
    },
  ] as SkillCategory[],

  certifications: [
    {
      title: 'AWS Certified Developer – Associate',
      issuer: 'Amazon Web Services (AWS)',
      badge: 'Certified',
      year: '2024',
      description: 'Validated technical proficiency in developing, deploying, and debugging cloud-based applications using AWS.',
      url: 'https://www.credly.com/badges/e4ada754-02de-4034-b39f-f14e4cfb744b/public_url',
    },
  ] as CertificationItem[],

  achievements: [
    {
      title: '1st Runner Up – TCS AI Fridays Hackathon',
      organization: 'TCS Mumbai Regional Finals',
      description: 'Built an AI-assisted engineering solution under rapid prototyping constraints competing across regional engineering teams.',
      url: 'https://drive.google.com/file/d/11i7DbeSJLYFWrWZQZjYd5j4-2Q9PKLGL/view?usp=sharing',
    },
    {
      title: 'High Impact Team Award',
      organization: 'Tata Consultancy Services (TCS)',
      description: 'Recognized for technical excellence, application reliability, and delivering mission-critical enterprise deliverables.',
      url: 'https://drive.google.com/file/d/1Jez0qSIcG5J8J-3Zljt1l_Us44KgzOZA/view?usp=sharing',
    },
    {
      title: 'Top 10% – AI4ICPS Program',
      organization: 'TCS x IIT Kharagpur',
      description: 'Selected in the top 10% cohort of the rigorous AI for Interdisciplinary Cyber-Physical Systems certification program.',
      url: 'https://drive.google.com/file/d/1npEbi9OugfGsAOussC5GophyES2B_Fp1/view?usp=sharing',
    },
    {
      title: 'Special Initiative Award',
      organization: 'Tata Consultancy Services (TCS)',
      description: 'Awarded for developing the Artifact Comparison & Deployment Validation Tool, eliminating a 2.5-hour manual Beyond Compare bottleneck and cutting verification time to under 3 minutes.',
      url: 'https://drive.google.com/file/d/1BNBiEoSLWRjRj-MdM-4zeOQ2D_OM5lqE/view?usp=sharing',
    },
  ] as AchievementItem[],

  education: {
    institution: 'L. D. College of Engineering, Ahmedabad',
    degree: 'Bachelor of Engineering (B.E.)',
    period: 'Jul 2019 – Apr 2023',
    score: 'CGPA: 8.71',
  },
};
