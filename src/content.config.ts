import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const link = z.object({ label: z.string(), href: z.string() });

// src/content/site.md: name, logo, menu and footer.
const site = defineCollection({
  loader: glob({ pattern: 'site.md', base: './src/content' }),
  schema: ({ image }) => z.object({
    name: z.string(),
    logo: image().optional(),
    email: z.string().optional(),
    menu: z.array(link).default([]),
    copyright: z.string().optional(),
    footer: z.string().optional(),
    footerLinks: z.array(link).default([]),
  }),
});

// Each Markdown file in src/content/home/ is one section of the home page.
const home = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/home' }),
  schema: ({ image }) => z.object({
    order: z.number(),
    type: z.enum(['hero', 'text', 'feature', 'gallery', 'cards', 'steps', 'cta']).default('text'),
    id: z.string().optional(),
    eyebrow: z.string().optional(),
    // Light grey background, to alternate with the sections around it.
    alt: z.boolean().default(false),
    // Gallery frame: 'watch' (round dark bezel) or 'phone' (tall screenshot).
    style: z.enum(['watch', 'phone', 'plain']).default('plain'),
    // Hero: screenshots shown next to the headline.
    images: z.array(z.object({ src: image(), alt: z.string().default('') })).default([]),
    // Feature: one large image next to the text.
    image: image().optional(),
    imageAlt: z.string().default(''),
    buttons: z.array(link).default([]),
  }),
});

// Each Markdown file in src/content/pages/ becomes a page: privacy.md → /privacy/.
const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = { site, home, pages };
