import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    date: z.string(),
    role: z.string(),
    technologies: z.array(z.string()),
    category: z.enum(['Flagship Project', 'Backend Service', 'Developer Utility', 'Enterprise & DevOps Tool', 'Web Application', 'Supporting Service']),
    githubUrl: z.string().url().optional(),
    liveUrl: z.string().url().optional(),
    metrics: z.array(
      z.object({
        label: z.string(),
        value: z.string(),
      })
    ).optional(),
    architectureOverview: z.string(),
    relatedWriting: z.array(z.string()).optional(),
  }),
});

const writing = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedDate: z.string(),
    updatedDate: z.string().optional(),
    tags: z.array(z.string()),
    readingTime: z.string(),
    draft: z.boolean().default(false),
    relatedProject: z.string().optional(),
  }),
});

export const collections = {
  projects,
  writing,
};
