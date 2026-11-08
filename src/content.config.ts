import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const externalUrl = z.string().url().refine(
  (value) => /^https?:\/\//i.test(value),
  "Expected an HTTP or HTTPS URL",
);

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    year: z.number(),
    stack: z.array(z.string()).default([]),
    link: externalUrl.optional(),
    repo: externalUrl.optional(),
    featured: z.boolean().default(false),
    image: z.string().optional(),
    thumbnail: z.string().optional()
  }),
});

export const collections = { projects };
