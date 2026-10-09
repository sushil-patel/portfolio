# Sushil Patel — Portfolio & Engineering Showcase

[![Live Site](https://img.shields.io/badge/Live_Site-sushil--patel.github.io%2Fportfolio-4f46e5?style=flat&logo=github)](https://sushil-patel.github.io/portfolio/)
[![Role](https://img.shields.io/badge/Role-Software_Developer_%26_Module_Lead-slate?style=flat)](https://sushil-patel.github.io/portfolio/about)
[![Stack](https://img.shields.io/badge/Core_Stack-Java_%7C_Spring_Boot_%7C_Kafka_%7C_AWS-indigo?style=flat)](https://sushil-patel.github.io/portfolio/experience)

Welcome to the source repository for my personal engineering portfolio and technical writing platform, deployed live at:  
👉 **[https://sushil-patel.github.io/portfolio/](https://sushil-patel.github.io/portfolio/)**

---

## 👨‍💻 About Me

I am a **Software Developer & Module Lead** at **Tata Consultancy Services (TCS)** with 3+ years of experience engineering high-throughput backend systems, distributed architectures, event-driven pipelines, and developer validation tooling.

- **Primary Focus:** Distributed backend systems, scalable REST APIs, asynchronous batch processing, and CI/CD release automation.
- **Core Technologies:** Java, Spring Boot, Spring Data JPA / Hibernate, Apache Kafka, IBM MQ, Redis, MySQL, Oracle SQL, AWS, Docker.
- **Credentials:** AWS Certified Developer – Associate, 1st Runner Up at TCS AI Fridays Hackathon, and recipient of the TCS Special Initiative & High Impact Team awards.

---

## 🛠️ Featured Projects & Case Studies

Detailed architectural case studies and live demos can be explored directly on the site:

1. **[Claimora](https://sushil-patel.github.io/portfolio/projects/claimora)** — Event-driven insurance claim processing platform built with Spring Boot 3.5, Apache Kafka, Redis caching, Spring Security (JWT), and Flyway database migrations.
2. **[Artifact Comparison & Deployment Validation Tool](https://sushil-patel.github.io/portfolio/projects/artifact-comparison-tool)** — Automated staging-to-production archive comparison engine that cut release verification time from 2.5 hours to under 3 minutes (240x faster). Adopted across enterprise delivery modules.
3. **[Diyan Exports](https://sushil-patel.github.io/portfolio/projects/diyan-exports)** — Production agro-commodity catalog platform and inquiry dispatch REST API with custom JSON persistence converters.
4. **[ActivitySheet](https://sushil-patel.github.io/portfolio/projects/activity-sheet)** — Enterprise employee work-logging microservice featuring custom JPA DAO implementations and centralized exception handling.
5. **[CLI Automation & Dev Utilities](https://sushil-patel.github.io/portfolio/projects/cli-alarm)** — Lightweight background daemon for system timers, interrupt handling, and developer workflow automation.

---

## ✍️ Technical Deep Dives

Articles written on real problems encountered and solved in production:

- **[Solving the N+1 Query Problem in Spring Data JPA](https://sushil-patel.github.io/portfolio/writing/solving-n-plus-one-spring-jpa)**: Analyzing Hibernate lazy loading traps, EntityGraph solutions, and DTO projection benchmarks.
- **[Scaling Batch Processing with File Partitioning and IBM MQ](https://sushil-patel.github.io/portfolio/writing/scaling-batch-processing-with-file-partitioning-and-mq)**: Processing 800,000+ records in under 20 minutes using chunking, parallel workers, and dead-letter queues.
- **[Zero-Downtime Password Migration: MD5 to BCrypt](https://sushil-patel.github.io/portfolio/writing/zero-downtime-password-migration-md5-to-bcrypt)**: Backward-compatible credential re-hashing strategies during live user authentication.

---

## ⚡ Site Tech Stack

This website is statically pre-rendered with zero client-side JavaScript bloat for instant page loads and maximum accessibility:

- **Framework:** [Astro](https://astro.build/) (Static Site Generation / Prerendered)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) with typography and responsive dark mode
- **Content:** Astro Content Collections (`astro:content`) with MDX support
- **Hosting:** GitHub Pages via GitHub Actions CI/CD (`.github/workflows/deploy.yml`)
- **Performance:** 100/100 Lighthouse performance, zero layout shift (0 CLS), and instant dark/light mode toggle.

---

## 🚀 Running Locally

```bash
# 1. Clone the repository
git clone https://github.com/sushil-patel/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev

# 4. Build for production (outputs static files to ./dist)
npm run build
```

---

## 📬 Contact & Connect

- **Portfolio:** [sushil-patel.github.io/portfolio](https://sushil-patel.github.io/portfolio/)
- **LinkedIn:** [linkedin.com/in/sushil-patel-](https://linkedin.com/in/sushil-patel-)
- **GitHub:** [github.com/sushil-patel](https://github.com/sushil-patel)
- **Email:** [mrsushilpatel2001@gmail.com](mailto:mrsushilpatel2001@gmail.com)
