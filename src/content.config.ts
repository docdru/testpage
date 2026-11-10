import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Each Markdown file in src/content/home/ is one section of the home page.
const home = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/home' }),
  schema: z.object({
    order: z.number(),
    type: z.enum(['hero', 'text', 'cards', 'steps', 'cta']).default('text'),
    id: z.string().optional(),
    eyebrow: z.string().optional(),
    buttons: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
  }),
});

export const collections = { home };
