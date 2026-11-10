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

All text is in Markdown files in `src/content/`, so you rarely need to touch HTML.

### Home page

The home page is built from the files in `src/content/home/`, one file per section,
shown in the order given by `order:`. Edit the text below the `---` header block.

| File | Section |
| --- | --- |
| `01-hero.md` | Big intro at the top: a `#` headline and a short paragraph |
| `02-mission.md` | Mission statement |
| `03-focus-areas.md` | Cards: one bullet per card |
| `04-how-it-works.md` | Steps: one numbered item per step |
| `05-join.md` | Call to action at the bottom |

In card and step lists, start each item with a **bold phrase**; it becomes the heading:

```markdown
- **Focus area 1** Short description.
```

Header fields you can set in each file:

- `order`: position on the page (1 = top).
- `type`: the look of the section: `hero`, `text`, `cards`, `steps` or `cta`.
- `eyebrow`: the small capitalised line above the heading (optional).
- `id`: an anchor name, so a link to `#id` scrolls there (optional).
- `buttons`: a list of `label` and `href`. Links starting with `/` go to a page on this
  site, e.g. `/contact/`.

To add a section, copy a file, give it a new name and `order`, and change the text.
To remove one, delete the file.

### Other pages

- Every file in `src/content/pages/` becomes a page: `about.md` is `/about/`.
  In Notion, use **⋯ → Export → Markdown** and paste the text below the header block.
- Each page needs a `title:` in its header. `description:` (for search engines) is optional.
- Add `menu: 3` to show a page in the top menu; the number sets its position.
  Pages without `menu:` (e.g. Impressum, Privacy) are only linked from the footer.
- To add a page, create e.g. `src/content/pages/projects.md`; it appears at `/projects/`.

### Where the code is

All content is in `src/content/`. `src/pages/`, `src/layouts/` and
`src/components/` hold the templates, and colours and fonts are in
`src/styles/global.css`. You only need to touch these to change the design.
