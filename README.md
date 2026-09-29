# Sushil Patel — Software Developer Portfolio

A production-grade, ultra-lightweight personal portfolio website for **Sushil Patel**, Software Developer & Module Lead at Tata Consultancy Services (TCS).

Built with **Astro**, **TypeScript**, **Tailwind CSS**, and **MDX**, designed with a polished engineering aesthetic inspired by modern technical product galleries with **zero client-side framework bloat (0kb React)**, instant dark mode switching with zero FOUC, maximum Core Web Vitals performance, crawlable Generative Engine Optimization (GEO), and automated CI/CD deployment to **GitHub Pages**.

---

## 🚀 Live Target & Technology Stack

- **Target URL:** [https://sushil-patel.github.io/](https://sushil-patel.github.io/)
- **Framework:** [Astro](https://astro.build/) (Static Site Generation / Prerendered)
- **Styling:** Tailwind CSS + Typography plugin + Dark Mode (`dark:`)
- **Theme Support:** Dark / Light mode toggle with system preference detection & zero FOUC inline script (0ms TTFB impact, 0 CLS)
- **Content Engine:** Astro Content Collections (`astro:content`) with MDX support
- **Hosting:** GitHub Pages (Zero hosting cost)
- **CI/CD:** GitHub Actions (`.github/workflows/deploy.yml`)
- **Client JavaScript:** Minimal vanilla JS (< 1kb for mobile navigation, theme toggle & project filter; 0kb React)

---

## 📁 Project Architecture

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment to GitHub Pages
├── public/
│   ├── favicon.svg             # Modern vector brandmark favicon
│   ├── robots.txt              # Search crawler instructions
│   ├── SushilPatel.pdf              # Authentic official resume PDF
│   └── images/
│       ├── og-image.svg        # 1200x630 vector Open Graph card
│       └── og-image.png        # Rendered high-res social preview image
├── src/
│   ├── components/
│   │   ├── ArchitectureDiagram.astro # Responsive SVG backend topology diagrams
│   │   ├── ArticleCard.astro         # Card component for technical writing
│   │   ├── Badge.astro               # Accessible tag/chip component
│   │   ├── Breadcrumbs.astro         # Accessible navigation trail
│   │   ├── ExperienceCard.astro      # Timeline work experience component
│   │   ├── Footer.astro              # Global engineering footer
│   │   ├── Header.astro              # Desktop & mobile navigation bar with Theme Toggle
│   │   ├── MetricCard.astro          # Quantified engineering impact card
│   │   ├── ProjectCard.astro         # Product-style project showcase card
│   │   └── SEO.astro                 # Open Graph, Twitter & JSON-LD structured data
│   ├── config/
│   │   └── site.ts             # Central configuration (URL, metadata, skills, bio, certificates)
│   ├── content/
│   │   ├── config.ts           # Zod schema definitions for collections
│   │   ├── projects/           # Curated Showcase Projects (5 Projects)
│   │   │   ├── claimora.mdx                  # Flagship: Mock Insurance Claim Processing Platform
│   │   │   ├── artifact-comparison-tool.mdx  # Enterprise DevOps: Deployment Validation Engine (2.5h Beyond Compare cut)
│   │   │   ├── activity-sheet.mdx            # Timesheet & Work Tracking Backend Service
│   │   │   ├── diyan-exports.mdx             # Agro-Commodity Platform & Catalog API
│   │   │   └── cli-alarm.mdx                 # CLI Automation & Dev Utilities
│   │   └── writing/            # MDX Technical Deep Dives
│   │       ├── solving-n-plus-one-spring-jpa.mdx
│   │       ├── scaling-batch-processing-with-file-partitioning-and-mq.mdx
│   │       └── zero-downtime-password-migration-md5-to-bcrypt.mdx
│   ├── layouts/
│   │   └── BaseLayout.astro    # Base HTML document shell with theme detection & skip links
│   ├── pages/
│   │   ├── index.astro         # Homepage (Hero, Metrics, Featured, Tech Stack)
│   │   ├── about.astro         # Biography, engineering principles, credentials & academics
│   │   ├── experience.astro    # Detailed work history at TCS, certifications & awards
│   │   ├── projects/
│   │   │   ├── index.astro     # Interactive filterable project gallery
│   │   │   └── [slug].astro    # Comprehensive 18-section case study routes
│   │   ├── writing/
│   │   │   ├── index.astro     # Technical writing archive
│   │   │   └── [slug].astro    # Technical article pages with code highlighting
│   │   ├── resume.astro        # Clean HTML resume & print view
│   │   └── contact.astro       # Direct contact cards, email copy & FAQ
│   ├── styles/
│   │   └── global.css          # Design tokens, focus outlines, dark mode palette, reduced-motion
│   └── utils/
│       └── url.ts              # Canonical URL & base path normalization helper
├── astro.config.mjs            # Central Astro config (site, base, sitemap integration)
├── tailwind.config.mjs         # Tailwind tokens, dark mode class & typography configuration
├── tsconfig.json               # Strict TypeScript configuration
└── package.json
```

---

## 🛠️ Local Development Commands

### 1. Prerequisites
- **Node.js:** v18.14.1 or higher (Recommended: Node 20 or 22)
- **npm:** v9.0.0 or higher

### 2. Installation
```bash
npm install
```

### 3. Start Local Dev Server
```bash
npm run dev
```
Open [http://localhost:4321](http://localhost:4321) in your browser.

### 4. Build for Production
```bash
npm run build
```
Generates 100% static, pre-rendered HTML/CSS assets in the `./dist` directory, along with `sitemap-index.xml`, `sitemap-0.xml`, and `robots.txt`.

### 5. Preview Production Build Locally
```bash
npm run preview
```

---

## 🚢 GitHub Pages Deployment Steps

The repository is configured to deploy automatically via GitHub Actions:

1. **Push to GitHub:**
   Ensure this project is pushed to the repository:
   `https://github.com/sushil-patel/sushil-patel.github.io` (or your chosen repository name).

2. **Enable GitHub Pages:**
   - In GitHub, navigate to: **Settings &rarr; Pages**.
   - Under **Build and deployment &rarr; Source**, select **GitHub Actions**.

3. **Trigger Deployment:**
   - On every push to the `main` branch, the workflow `.github/workflows/deploy.yml` will automatically build the static site, generate sitemaps, and deploy directly to `https://sushil-patel.github.io/`.
   - You can also manually trigger the build from the **Actions** tab using `Run workflow`.

---

## 🌐 How to Migrate to a Custom Domain Later

The site is built with **zero hardcoded URLs**. To migrate to a custom domain (e.g. `https://sushilpatel.dev`):

1. **Update `src/config/site.ts`:**
   ```typescript
   export const siteConfig = {
     // ...
     siteUrl: 'https://sushilpatel.dev', // Replace with your domain
     basePath: '/',
     // ...
   };
   ```

2. **Update `astro.config.mjs` (or use Environment Variable):**
   ```javascript
   const SITE_URL = process.env.SITE_URL || 'https://sushilpatel.dev';
   ```

3. **Configure DNS & GitHub Pages:**
   - In your DNS provider (Cloudflare, Namecheap, GoDaddy), add an `ALIAS`/`ANAME` or `A` records pointing to GitHub Pages IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - In GitHub repository **Settings &rarr; Pages &rarr; Custom domain**, enter `sushilpatel.dev` and check **Enforce HTTPS**.

No template files, link paths, or components need to be modified.

---

## 📋 Checklist for Verification & Production Finalization

- [ ] **TODO: URL Consistency Verification:** Before final production cutover or domain migration, check that:
  - `sitemap.xml` / `sitemap-index.xml` specifies the exact target origin URL matching your final domain.
  - `robots.txt` points to the exact same URL: `Sitemap: https://<domain>/sitemap-index.xml`.
  - `src/config/site.ts` `siteUrl` matches the deployed hostname.
- [ ] **Dark Mode Response Time Check:** Theme state is evaluated synchronously in `<head>` via local storage before rendering, guaranteeing 0ms TTFB impact and 0 Cumulative Layout Shift (CLS).
- [ ] **LinkedIn URL:** Verified as `https://linkedin.com/in/sushil-patel-` in `src/config/site.ts`.
- [ ] **Phone Number:** Verified as `+91-9157139239` in `src/config/site.ts` and `src/pages/resume.astro`.
- [ ] **Email Address:** Verified as `mrsushilpatel2001@gmail.com`.
- [ ] **Resume PDF:** Authentic PDF has been verified in `public/resume.pdf`. Update this file whenever you revise your master CV.
- [ ] **Certifications & Achievements:** Official external validation links configured for AWS, IIT Kharagpur AI4ICPS (`https://ai4icps.in/`), and TCS credentials.

---

## 🔍 SEO, GEO & Performance Optimization

- **Structured Data (JSON-LD):** Implements `Person`, `WebSite`, `BreadcrumbList`, `TechArticle`, and `SoftwareSourceCode` schemas.
- **Search Engines & Crawlers:** Generates compliant `robots.txt`, dynamic `sitemap-index.xml`, and clean semantic `<main>`, `<article>`, `<header>`, and `<nav>` landmarks.
- **Generative Engine Optimization (GEO):** Content is written in clean, factual, crawlable HTML text without client-side hydration masks, allowing AI engines (ChatGPT Search, Gemini, Perplexity) to index and cite project achievements accurately.
