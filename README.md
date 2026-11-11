# FocusWatch website (practice rebuild)

A practice rebuild of focus-watch.com. Team names and email addresses are placeholders.

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

## Editing content

All text and images are in `src/content/`, so you rarely need to touch HTML.

| Where | What |
| --- | --- |
| `src/content/site.md` | Site name, logo, top menu, footer links and note |
| `src/content/home/*.md` | The home page, one file per section, in the order given by `order:` |
| `src/content/pages/*.md` | Other pages: `privacy.md` becomes `/privacy/` |
| `src/content/images/` | All images. Reference them from Markdown as `../images/name.png` |

Images are resized and converted automatically when the site is built, so large
originals are fine.

### Home page sections

Each file has a header between `---` lines, then the text in Markdown. Header fields:

- `order`: position on the page (1 = top).
- `type`: the look of the section:
  - `hero`: big intro with screenshots (`images:` list) and `buttons:`.
  - `text`: headings, paragraphs and bullet lists.
  - `feature`: text next to one large `image:`.
  - `gallery`: a grid of screenshots. Each bullet is one image plus a **bold** title,
    e.g. `- ![Focus timer](../images/watch-pomodoro.png) **Focus timer**`.
    `style: watch` draws a watch bezel, `style: phone` a phone frame.
  - `cards`: each bullet becomes a card; start it with a **bold** title.
  - `steps`: a numbered list shown as steps.
  - `cta`: coloured contact band with `buttons:`.
- `alt: true`: light grey background, to alternate sections.
- `eyebrow`: small capitalised line above the heading (optional).
- `id`: anchor name, so a link to `#id` scrolls there (optional).
- `buttons`: list of `label` and `href`. Links starting with `/` go to a page on this site.

To add a section, copy a file, give it a new name and `order`, and change the text.
To remove one, delete the file.

### Where the code is

`src/pages/`, `src/layouts/` and `src/lib/` hold the templates, and colours and fonts are
at the top of `src/styles/global.css`. You only need to touch these to change the design.
