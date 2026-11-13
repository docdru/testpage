// @ts-check
import { defineConfig } from 'astro/config';
import remarkSite from './src/lib/remark-site.js';

// Hosting settings (any static host works; GitHub Pages is what we use today):
// - Project site (https://<org>.github.io/<repo>/): set `site` to the org URL
//   and `base` to '/<repo>'.
// - Own domain (e.g. https://attentionlab.ch): set `site` to the domain and
//   remove `base`. On GitHub Pages, also add public/CNAME containing the domain.
const site = 'https://docdru.github.io';
const base = '/testpage';

export default defineConfig({
  site,
  base,
  // German is the main language at /, English lives under /en/.
  i18n: {
    locales: ['de', 'en'],
    defaultLocale: 'de',
    routing: { prefixDefaultLocale: false },
  },
  markdown: {
    // ==text== marks a missing piece in yellow; links starting with / get the base path.
    remarkPlugins: [[remarkSite, { base }]],
  },
});
