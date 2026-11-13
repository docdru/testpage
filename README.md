# AttentionLab website (prototype)

Prototype of the AttentionLab association website, for discussion in the team.
Parts highlighted in yellow are still missing.

A small static site built with [Astro](https://astro.build). It runs on any static host; today it is deployed to GitHub Pages.

## How we edit this site (2-minute video)

How the team updates the site with Claude, GitHub and Astro, from adding a new
section to fixing a typo without any code.

https://github.com/user-attachments/assets/9a8527c4-6f3d-42dc-a0ff-8ea027ed7a6a

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
| `src/content/site.md` | Site name, top menu, notice bands; the text below the header is the footer |
| `src/content/home/de/*.md` | The German home page, one file per block, in the order given by `order:` |
| `src/content/home/en/*.md` | The English home page (empty for now: `/en/` shows the German text with a "translation in preparation" band) |
| `src/content/pages/*.md` | Other pages: `datenschutz.md` becomes `/datenschutz/` |
| `src/content/images/` | All images. Reference them from Markdown as `../../images/name.png` |

Write `==[text]==` to highlight something that is still missing or undecided in yellow,
e.g. `==[Link prüfen]==`. Links starting with `/` (e.g. `[Datenschutz](/datenschutz/)`)
work in Markdown too.

### Home page blocks

Each file has a header between `---` lines, then the text in Markdown. Header fields:

- `order`: position on the page (1 = top).
- `section`: starts a new section; the value is its anchor (`section: forschung` → `/#forschung`).
  Files without `section` are added to the section above them.
- `panel`: background of the section: `dark` (navy), `card` (white box), `yellow`, or none.
- `type`: how the Markdown is laid out:
  - `text` (default): headings, paragraphs and lists.
  - `hero`: big intro with the dot picture and `buttons:`.
  - `columns`: each bullet is a short point with a line on its left, three per row.
  - `cards`: each bullet is a box starting with a **bold** title. `tone:` `blue`, `outline` or `cream`.
    A `#### heading` at the start of a bullet becomes a big green number (e.g. `#### 51 Kinder`).
  - `quotes`: each bullet is a quote; the `_italic_` part at the end is the source.
  - `dots`: three columns with a coloured dot and a **bold** title.
  - `team`: each bullet is `**Name**` and a role on the next line.
  - `contact`: big heading; a `### heading` is shown as the large e-mail line.
- `lead: true`: the first paragraph after a heading is shown larger.
- `image`, `imageAlt`, `caption`: a picture shown after the text.
- `buttons`: list of `label` and `href` (optional `variant: outline`). The first button is filled.

A quote (`> ...`) is shown as a small dashed note box. `<details><summary>Title</summary> … </details>`
makes an expandable box (leave an empty line after `<summary>` and before `</details>`).

To add a block, copy a file, give it a new name and `order`, and change the text.
To remove one, delete the file.

### Where the code is

`src/pages/`, `src/components/`, `src/layouts/` and `src/lib/` hold the templates. Colours and
fonts are at the top of `src/styles/global.css`. You only need to touch these to change the design.
