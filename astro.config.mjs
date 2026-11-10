// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages settings:
// - Project site (https://<org>.github.io/<repo>/): set `site` to the org URL
//   and `base` to '/<repo>'.
// - Custom domain (e.g. https://attentionlab.ch): set `site` to the domain,
//   remove `base`, and add public/CNAME containing the domain.
export default defineConfig({
  site: 'https://docdru.github.io',
  base: '/testpage',
});
