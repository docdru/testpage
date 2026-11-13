import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const link = z.object({
  label: z.string(),
  href: z.string(),
  // 'primary' = filled, 'outline' = border only. Default: first button filled, others outline.
  variant: z.enum(['primary', 'outline']).optional(),
});

// src/content/site.md: name, menu and notices. The Markdown text below the
// header is the footer.
const site = defineCollection({
  loader: glob({ pattern: 'site.md', base: './src/content' }),
  schema: z.object({
    name: z.string(),
    menu: z.array(link).default([]),
    // Blue band under the menu (e.g. "Prototype for discussion"). Remove to hide.
    notice: z.string().optional(),
    // Yellow band on English pages while they still show the German text.
    translationNotice: z.string().optional(),
  }),
});

// Each Markdown file in src/content/home/<lang>/ is one block of the home page.
const home = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/home' }),
  schema: ({ image }) => z.object({
    order: z.number(),
    // How the Markdown is laid out. See README.md for what each one looks like.
    type: z.enum(['hero', 'text', 'columns', 'cards', 'quotes', 'dots', 'team', 'contact']).default('text'),
    // Starts a new section. The value is the anchor name: a link to #warum scrolls here.
    // Blocks without `section` continue the section above them.
    section: z.string().optional(),
    // Background of the section: dark (navy), card (white box), yellow. Default: none.
    panel: z.enum(['none', 'dark', 'card', 'yellow']).default('none'),
    // Cards only: blue, outline (white with border) or cream.
    tone: z.enum(['blue', 'outline', 'cream']).default('outline'),
    // Show the first paragraph after a heading a bit larger.
    lead: z.boolean().default(false),
    // Optional picture shown after the text, with a short caption.
    image: image().optional(),
    imageAlt: z.string().default(''),
    caption: z.string().optional(),
    buttons: z.array(link).default([]),
  }),
});

// Each Markdown file in src/content/pages/ becomes a page: datenschutz.md → /datenschutz/.
const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = { site, home, pages };
