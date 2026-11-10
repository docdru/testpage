# AttentionLab website

A small static site built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Run it locally

```bash
npm install
npm run dev        # http://localhost:4321/testpage/
```

## Publish on GitHub Pages

1. Create a repo named `attentionlab-site`, ideally under a GitHub organization
   owned by the Verein rather than a personal account. Push this folder to `main`.
2. In `astro.config.mjs`, replace `YOUR-ORG` with the org or user name.
   If the repo has a different name, change `base` to match.
3. In the repo, go to **Settings → Pages → Source** and choose **GitHub Actions**.
4. Push to `main`. The workflow in `.github/workflows/deploy.yml` builds and deploys
   the site. The URL appears under the **Actions** tab and in **Settings → Pages**.

### Custom domain

1. Add a file `public/CNAME` containing just the domain, e.g. `attentionlab.ch`.
2. In `astro.config.mjs`, set `site: 'https://attentionlab.ch'` and remove `base`.
3. At your domain registrar, point DNS to GitHub Pages: a `CNAME` record for `www`
   pointing to `YOUR-ORG.github.io`, and/or the four GitHub `A` records for the apex
   domain (listed in GitHub's Pages documentation).
4. Enter the domain under **Settings → Pages** and tick **Enforce HTTPS**.

## Editing content (from Notion)

- `src/pages/*.md` are plain Markdown pages. In Notion, use **⋯ → Export → Markdown**
  and paste the text below the header block (`layout`, `title`).
- A new file `src/pages/projects.md` becomes `/projects/`. Add it to the `nav` list
  in `src/layouts/Base.astro`.
- The home page is `src/pages/index.astro`, HTML with a little Astro.
- Colours and fonts are in `src/styles/global.css`.
